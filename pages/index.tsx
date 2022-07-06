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
                <h2 className="h1">Playing code</h2>
                <div className="entry-meta">
				    <span className="posted-on">
                        <time className="entry-date published">2022-06-08</time>
                    </span>
                </div>
                <p>Este blog contiene las anotaciones en primera persona, <em>paso a paso</em>, de todo lo que voy aprendiendo y consolidando, día a día, referente a programación y diseño web, entre otras cosas.</p>
                <p>Muchas de estas anotaciones están relacionadas con su correspondiente repositorio Git.</p>
            </section>

            <section className="all-post-data">
                <Posts posts={allPostsData} />
            </section>

        </Layout>
    );
}
