import { useEffect, useContext, useMemo, useState, useCallback } from 'react';
import tw, { css, styled } from 'twin.macro';
import { fetchResource } from '@/lib/api';
import { fetchStrapi } from 'lib/api/strapi';
import { makeResourcePath } from 'lib/utils/resources';
import { H1 } from '@/components/Page';
import Tags from '@/components/Tags';
import Chip from '@/components/Chip';
import { BlogCard, PostList } from '@/components/Blog';
import { PostsContext } from '@/contexts/Posts';
import Pagination from '@/components/Pagination';
import { usePageState } from '@/hooks/Pagination';
// import useLogger from '@/hooks/useLogger';
import chunk from 'lodash/chunk';

const Container = styled.div`
  max-width: 1200px;
  ${tw`flex w-full pt-24 pb-20 lg:(pt-40) min-h-screen lg:(px-0) px-6  mx-auto`}
`;

const LeftContentWrapperStyles = css`
  flex: 3;
`;

const RightContentWrapperStyles = css`
  flex: 1;
`;

const TagListStyles = css`
  ${tw`flex flex-wrap gap-x-3 gap-y-4`}
`;
const ChipBaseStyles = css`
  ${tw`bg-argo-blue-50 text-white px-4 pt-1 pb-1.5 rounded-full hover:cursor-pointer`}
`;

const ContentWrapper = styled.div`
  ${tw`container mx-auto mt-8`}
`;

const authorInfoConfig = {
  showDate: true,
};

const PaginationLayoutStyles = css`
  ${tw`mt-6`}
`;

const ChipSelectedStyles = css`
  ${({ selected }) => selected && tw`ring ring-4 bg-argo-blue-400`}
`;
const useTagSelect = () => {
  const [tags, setTag] = useState({});
  const handleTagToggle = (e, v) => {
    // console.log('handleTagToggle()');
    // console.log('>>DEBUG/useTag/ e: ', e);
    // console.log('>>DEBUG/useTag/ e.currentTarget: ', e.currentTarget);
    // console.log('>>DEBUG/useTag/ e.target: ', e.target);
    const { tagId, tagName } = e.target.dataset;
    const addTag = () =>
      setTag(prevTags => ({ ...prevTags, ...{ [tagId]: tagName } }));

    const removeTag = () =>
      setTag(prevTags => ({ ...prevTags, ...{ [tagId]: null } }));
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagId: ', tagId);
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagName: ', tagName);
    if (!tagId) return;
    if (tagId in tags) {
      if (tags[tagId] == null) {
        addTag();
        return;
      }
      // console.log('>>DEBUG/useTag before setTag');
      removeTag();
      return;
      // console.log('>>DEBUG/useTag tags: ', tags);
    }
    addTag();
    // console.log('>>DEBUG/useTag tags: ', tags);
    // console.log('>>DEBUG/useTag/ v: ', v);
  };
  return [tags, handleTagToggle];
};

/* TODO: refactor Pagination to use a Theme context for Top-level and
all of its sub-components */
const PAGE_SIZE = 10;
const DEFAULT_PAGE = 2;
const BlogMainPage = ({ posts, tags }) => {
  // const log = useLogger('>>DEBUG/<BlogMainPage>');
  /* NOTE: page-to-show-index should be '-1' of `page`
  because chunkedPosts start index from 0 and
 */
  const [page, setPageValue] = usePageState({ defaultPage: DEFAULT_PAGE });
  const { setPosts } = useContext(PostsContext);
  const [selectedTags, handleTagToggle] = useTagSelect();
  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  /* TODO: chunk posts */
  const chunkedPosts = useMemo(() => chunk(posts, PAGE_SIZE), [posts]);
  const updateResultPage = (_, v) => setPageValue(v);
  // useEffect(() => {
  //   log('chunkedPosts.length: ', chunkedPosts.length);
  //   log('chunkedPosts: ', chunkedPosts);
  // }, []);
  /* use searchContext methods to load post data */

  return (
    <Container>
      <ContentWrapper
        css={LeftContentWrapperStyles}>
        <H1>Blog</H1>
        {posts && (
          <PostList
            tw="space-y-6"
            col>
            {chunkedPosts[page - 1].map(blogProps => (
              <BlogCard
                {...blogProps}
                key={blogProps.id}
                authorInfoConfig={authorInfoConfig}
              />
            ))}
          </PostList>
        )}
        <Pagination
          count={chunkedPosts.length}
          defaultPage={DEFAULT_PAGE}
          css={PaginationLayoutStyles}
          onChange={updateResultPage}
        />
      </ContentWrapper>
      <ContentWrapper
        css={RightContentWrapperStyles}>
        <Tags
          heading="Tags"
          headingAs="h1"
          listStyles={TagListStyles}
          handleTagToggle={handleTagToggle}
        >
          {tags.map(tag => (
            <Chip
              selected={!!selectedTags[tag.id]}
              selectedStyles={ChipSelectedStyles}
              chipStyles={ChipBaseStyles}
              key={tag.id}
              label={tag.name}
              data-tag-id={tag.id}
              data-tag-name={tag.name}
            />
          ))}
        </Tags>
      </ContentWrapper>
    </Container>
  );
};

export default BlogMainPage;

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const query = '?_sort=published_at:DESC';
  const postsResponse = await fetchStrapi(
    makeResourcePath('Posts', 'List', query),
  );
  const tagsResponse = await fetchResource('Tags', 'List');
  const posts = await postsResponse.json();
  const tags = await tagsResponse.json();

  return {
    props: {
      posts,
      tags,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
