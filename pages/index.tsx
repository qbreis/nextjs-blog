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
                <p>Este blog contiene las anotaciones en primera persona, <em>paso a paso</em>, de todo lo que voy aprendiendo y consolidando, día a día, referente a programación y diseño web, entre otras cosas.</p>
                <p>Muchas de estas anotaciones están relacionadas con su correspondiente repositorio git /* ¿<em>git</em> o <em>Git</em>? */.</p>
            </section>

            <section>
                <h2>Blog</h2>
                <Posts posts={allPostsData} />
            </section>

        </Layout>
    );
}
