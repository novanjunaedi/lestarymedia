import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../components/global/Layout/Layout';
import Hero from '../components/home/Hero/Hero';
import SectionContact from '../components/home/SectionContact/SectionContact';
import SectionLatestBlogPost from '../components/home/SectionLatestBlogPosts/SectionLatestBlogPost';
import { sortByDate } from '../utils';
import SectionServices from '../components/home/SectionServices/SectionServices';
import SectionIntro from '../components/home/SectionIntro/SectionIntro';
import SectionPortfolios from '../components/home/SectionPortfolios/SectionPortfolios';

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

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Lestary Media - Tingkatkan omzet dengan strategi yang tepat</title>
      <meta name="title" content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat" />
      <meta
        name="description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta
        name="keywords"
        content="digital marketing, agency, bandung, portfolio, social media"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lestarymedia.com" />
      <meta property="og:title" content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat" />
      <meta
        property="og:description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta property="og:image" content="/assets/img/OG-image.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lestarymedia.com" />
      <meta
        property="twitter:title"
        content="Lestary Media - Tingkatkan omzet dengan strategi yang tepat"
      />
      <meta
        property="twitter:description"
        content="Kami dapat membantu bisnis Anda dengan strategi-strategi terbaik kami. Tersedia layanan konsultasi gratis!"
      />
      <meta property="twitter:image" content="/assets/img/OG-image.jpg" />
    </Head>
    <Layout>
      <Hero />
      <SectionIntro />
      <SectionServices />
      <SectionPortfolios />
      <SectionLatestBlogPost posts={posts} />
      <SectionContact />
    </Layout>
  </>
);

export default Home;
