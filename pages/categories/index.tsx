import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import nextConfig from '../../next.config';
import { getSortedCategories } from '../../lib/posts';
import Link from 'next/link';

export default function catHome({ allCategoryIds }: any) {
    //const aux = getAllPostIds();
    //console.log(allCategoryIds);
    return (
        <Layout siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <h2 className="h1">List of categories</h2>
            
            <section className="all-post-data">
                <ul>


                {allCategoryIds?.map((postCategory: any) => 
                    (
                        <li key={`${postCategory.id}`}>
                            <h2 className="h4">
                            <Link href={`/categories/${postCategory.id}`}>
                                <a>{postCategory.id} - ({postCategory.posts} anotaciones)</a>
                            </Link>
                            </h2>
                        </li>
                    )
                )}


                </ul>
            </section>

        </Layout>
    );
}

export async function getStaticProps() {
    const allCategoryIds = getSortedCategories();
    return {
        props: {
            allCategoryIds
        },
    };
}