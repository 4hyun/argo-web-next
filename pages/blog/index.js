import { useState, useContext, useMemo, useEffect } from 'react';
import tw, { css, styled } from 'twin.macro';
import { fetchStrapi } from 'lib/api/strapi';
import { makeResourcePath } from 'lib/utils/resources';
import { BlogCard, PostList } from '@/components/Blog';
import { PostsContext } from '@/contexts/Posts';
import Pagination from '@/components/Pagination';
import { usePageState } from '@/hooks/Pagination';
import chunk from 'lodash/chunk';

const Container = styled.div`
  max-width: 1200px;
  ${tw`w-full pt-24 pb-20 lg:(pt-40) min-h-screen lg:(px-0) px-6  mx-auto`}
`;

const ContentWrapper = styled.div`
  ${tw`container mx-auto mt-8`}
`;

const PageHeading = styled.h1`
  ${tw`container mx-auto text-3xl font-black`}
`;

const authorInfoConfig = {
  showDate: true,
};

// const FlexRow = styled.div`
//   height: 100px;
//   ${tw`flex w-full items-center`}
// `;

const PaginationLayoutStyles = css`
  ${tw`mt-6`}
`;

/* TODO: refactor Pagination to use a Theme context for Top-level and
all of its sub-components */
const PAGE_SIZE = 10;
const DEFAULT_PAGE = 2;
const BlogMainPage = ({ posts }) => {
  const [resultPage, setResultPage] = useState(DEFAULT_PAGE);
  const { setPosts } = useContext(PostsContext);
  setPosts(posts);
  /* TODO: chunk posts */
  const chunkedPosts = useMemo(() => chunk(posts, PAGE_SIZE), [posts]);
  const updateResultPage = (e, v) => setResultPage(v);
  useEffect(() => {
    console.log('>>DEBUG/ chunkedPosts.length: ', chunkedPosts.length);
    console.log('>>DEBUG/ chunkedPosts: ', chunkedPosts);
  }, []);
  /* use searchContext methods to load post data */

  return (
    <Container>
      {/* <FlexRow>
        <SearchBar
          placeholder="Quick search..." />
      </FlexRow> */}
      <PageHeading>Blog</PageHeading>
      <ContentWrapper>
        {posts && (
          <PostList
            tw="space-y-6"
            col>
            {chunkedPosts[resultPage - 1].map(blogProps => (
              <BlogCard
                {...blogProps}
                key={blogProps.id}
                authorInfoConfig={authorInfoConfig}
              />
            ))}
          </PostList>
        )}
      </ContentWrapper>
      <Pagination
        count={chunkedPosts.length}
        defaultPage={DEFAULT_PAGE}
        css={PaginationLayoutStyles}
        onChange={updateResultPage}
      />
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
  const posts = await postsResponse.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
