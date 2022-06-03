import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.scss';

import { getSortedPostsData } from '../lib/posts';

import Posts from '../components/Posts';

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
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <Posts posts={allPostsData} />
            </section>

        </Layout>
    );
}
