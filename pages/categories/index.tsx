import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import nextConfig from '../../next.config';
import { getAllPostIds, getPostData, getAllCategoryIds, getSortedPostsData } from '../../lib/posts';

export default function catHome({ allCategoryIds }: any) {
    //const aux = getAllPostIds();
    //console.log(allCategoryIds);
    return (
        <Layout siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <h2 className="h1">List of categories ({allCategoryIds.length} categories)</h2>
            
            <section className="all-post-data">
                {allCategoryIds.map((categoryId: any) => 
                    {
                        return(<p>{categoryId.params.id} ({categoryId.params.posts} posts)</p>);
                    }
                )}
            </section>

        </Layout>
    );
}

export async function getStaticProps() {
    const allCategoryIds = getAllCategoryIds();
    return {
        props: {
            allCategoryIds
        },
    };
}