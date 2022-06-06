import MetaData from '../components/MetaData';
import Layout from '../components/Layout';

import { getSortedPostsData } from '../lib/posts';

import Posts from '../components/Posts';

import nextConfig from '../next.config';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }: any) {
    return (
        <Layout home siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <section>
                <p>[Your Self Introductionss]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <section>
                <h2>Blog</h2>
                <Posts posts={allPostsData} />
            </section>

        </Layout>
    );
}
