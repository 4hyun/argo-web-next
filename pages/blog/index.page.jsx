import { useEffect, useContext, useMemo, useCallback } from 'react';
import tw, { css, styled } from 'twin.macro';
import { fetchResource } from '@/lib/api';
import { H1 } from '@/components/Page';
import Tags, { useTagSelect } from '@/components/Tags';
import Chip from '@/components/Chip';
import { BlogCard, PostList } from '@/components/Blog';
import { PostsContext } from '@/contexts/Posts';
import Pagination from '@/components/Pagination';
import { usePageState } from '@/hooks/Pagination';
// import useLogger from '@/hooks/useLogger';
import chunk from 'lodash/chunk';

const PostListHeading = styled(H1)`
  ${tw`text-base lg:(text-3xl)`}
`;

const containerStyles = {
  base: tw``,
  sm: tw``,
  lg: tw``,
};
const Container = styled.div`
  max-width: 1200px;
  justify-content: start;
  ${tw`flex flex-col flex-col-reverse w-full pt-24 pb-20 lg:(pt-40) min-h-screen lg:(px-0) px-6 mx-auto`}
  @media (min-width: 1024px) {
    ${tw`flex-row`}
    justify-content: initial;
  }
`;

const LeftContentWrapperStyles = css`
  ${'' /* flex: 5; */}
  ${tw`flex flex-col w-full`}
  @media (min-width: 1024px) {
    width: 80%;
    flex: 3;
  }
`;

const RightContentWrapperStyles = css`
  ${tw`flex w-full mt-0`}
  @media (min-width: 1024px) {
    margin-top: initial;
    flex: 1;
    width: 20%;
  }
`;

const TagsContainerStyle = css``;

const TagListStyles = css`
  ${tw`flex flex-wrap gap-x-3 gap-y-4`}
`;

const TagsHeadingStyles = css`
  ${tw`hidden`}
  @media (min-width:1024px) {
    ${tw`flex`}
  }
`;

const chipBaseStyles = {
  base: tw`bg-argo-blue-50 text-white rounded-lg hover:(cursor-pointer ring ring-4)`,
  sm: tw`px-2 pt-0.5 pb-1 text-sm `,
  lg: tw`lg:(px-4 pt-1 pb-1.5 rounded-full text-base)`,
};
const ChipBaseStyles = css`
  ${chipBaseStyles.base}
  ${chipBaseStyles.sm}
  ${chipBaseStyles.lg}
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

/* TODO: refactor Pagination to use a Theme context for Top-level and
all of its sub-components */
const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
const BlogMainPage = ({ posts, tags: tagsProp }) => {
  // const log = useLogger('>>DEBUG/<BlogMainPage>');
  /* NOTE: page-to-show-index should be '-1' of `page`
  because chunkedPosts start index from 0 and
 */
  const [page, setPageValue] = usePageState({ defaultPage: DEFAULT_PAGE });
  const { setPosts } = useContext(PostsContext);
  const [selectedTags, handleTagToggle] = useTagSelect();

  const updateResultPage = (_, v) => setPageValue(v);
  useEffect(() => {
    setPageValue(1);
  }, [selectedTags]);
  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  /* TODO: chunk posts */
  // const chunkedPosts = useMemo(() => {
  //   let filteredPosts = [];
  //   if (selectedTags) {
  //     filteredPosts = posts.filter(post => {
  //       return post.tags.some(
  //         postTag => postTag.name === selectedTags.tags[postTag.id],
  //       );
  //     });
  //   }
  //   // TODO: optimize logic for case when,
  //   // all tags are selected then deselected.
  //   // Because then, selectedTags.tags will have keys of all tagId with value of null which will still filter everything for no reason.
  //   const count = filteredPosts.length;
  //   return { posts: chunk(count ? filteredPosts : posts, PAGE_SIZE), count };
  // }, [posts, selectedTags]);
  const getChunkedPosts = () => {
    let filteredPosts = [];
    if (selectedTags) {
      filteredPosts = posts.filter(post => {
        return post.tags.some(
          postTag => postTag.name === selectedTags.tags[postTag.id],
        );
      });
    }
    // TODO: optimize logic for case when,
    // all tags are selected then deselected.
    // Because then, selectedTags.tags will have keys of all tagId with value of null which will still filter everything for no reason.
    const count = filteredPosts.length;
    return { posts: chunk(count ? filteredPosts : posts, PAGE_SIZE), count };
  };
  const chunkedPosts = getChunkedPosts();

  return (
    <Container>
      <ContentWrapper
        css={LeftContentWrapperStyles}>
        <PostListHeading>{`검색 결과 - ${
          selectedTags && selectedTags.selected.length
            ? chunkedPosts.count
            : posts.length
        }/${posts.length}`}</PostListHeading>
        {posts && (
          <PostList
            tw="space-y-6"
            col>
            {chunkedPosts.posts &&
              chunkedPosts.posts[page - 1] &&
              chunkedPosts.posts[page - 1].map(blogProps => (
                <BlogCard
                  {...blogProps}
                  key={blogProps.id}
                  authorInfoConfig={authorInfoConfig}
                />
              ))}
          </PostList>
        )}
        <Pagination
          count={chunkedPosts.posts.length}
          page={page}
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
          headingStyles={TagsHeadingStyles}
          listStyles={TagListStyles}
          handleTagToggle={handleTagToggle}
        >
          {tagsProp.map(tag => (
            <Chip
              selected={selectedTags && !!selectedTags.tags[tag.id]}
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
  const postQuery = '?_sort=published_at:DESC';
  const postsResponsePromise = fetchResource({
    resourceName: 'Posts',
    method: 'List',
    query: postQuery,
  });
  const tagsResponsePromise = fetchResource({
    resourceName: 'Tags',
    method: 'List',
  });
  const responses = await Promise.all([
    postsResponsePromise,
    tagsResponsePromise,
  ]);
  const [posts, tags] = await Promise.all(
    responses.map(response => response.json()),
  );

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
