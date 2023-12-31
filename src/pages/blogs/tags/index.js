import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../../components/global/Layout/Layout';
import { readingTime, sortByDate } from '../../../utils';

const CardBlog = dynamic(() => import('../../../components/blogs/CardBlog/CardBlog'), { ssr: false });

export const getStaticProps = async () => {
  // Get files from posts directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create Slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

const Tags = ({ posts }) => {
  const [limit, setLimit] = useState(12);
  const router = useRouter();

  const filterPostsByTag = (posts) => posts?.filter(post => post.frontmatter.tags.includes(router.query.query));

  return (
    <>
      <Head>
        <title>Posts by tag {router.query.query} - Lestary Media</title>
        <meta name="title" content={`Posts by tag ${router.query.query} - Lestary Media`} />
        <meta
          name="description"
          content="Temukan artikel-artikel menari dan up-to-date"
        />
        <meta
          name="keywords"
          content="digtal marketing, seo, agency"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lestarymedia.com/blogs" />
        <meta
          property="og:title"
          content={`Posts by tag ${router.query.query} - Lestary Media`}
        />
        <meta
          property="og:description"
          content="Temukan artikel-artikel menari dan up-to-date"
        />
        <meta property="og:image" content="/assets/img/OG-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lestarymedia.com/blogs" />
        <meta
          property="twitter:title"
          content={`Posts by tag ${router.query.query} - Lestary Media`}
        />
        <meta
          property="twitter:description"
          content="Temukan artikel-artikel menari dan up-to-date"
        />
        <meta property="twitter:image" content="/assets/img/OG-image.jpg" />
      </Head>
      <Layout>
        <section style={{ paddingTop: '100px' }}>
          <div className="container p-4 p-lg-5">
            <div className="row mb-5" data-aos="fade-up">
              <div className="col">
                <h1 className="section-title text-capitalize text-dark">{router.query.query || 'Not Found'}</h1>
                <p className="lead text-dark">
                  {router.query.query ? `Showing posts with tag ${router.query.query}` : null}
                </p>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              {filterPostsByTag(posts).length < 1 ? (
                <div className="col-12 text-center">
                  <Image
                    className="img-fluid"
                    src="/assets/img/not-found-light.png"
                    width={350}
                    height={250}
                    alt="Not Found"
                  />
                  <p className="code text-info text-center mb-3">
                    No post found. Try to use another keywords
                    <span className="blink">_</span>
                  </p>
                </div>
              ) : filterPostsByTag(posts).map((post, index) => (
                <div className="col-md-6 col-xl-4 p-3" key={index}>
                  <Link className="link" href={`/blogs/${post.slug}`}>
                    <CardBlog
                      thumbnail={post.frontmatter.cover_image}
                      title={post.frontmatter.title}
                      createdAt={post.frontmatter.created_at}
                      description={post.frontmatter.excerpt}
                      slug={post.slug}
                      readingTime={readingTime(post.content)}
                    />
                  </Link>
                </div>
              )).slice(0, limit)}
              {filterPostsByTag(posts).length > limit ? (
                <div className="text-center my-3">
                  <button
                    type="button"
                    onClick={() => setLimit(limit + 6)}
                    className="btn btn-outline-info rounded-pill py-2 px-4"
                  >
                    Load more
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Tags;
