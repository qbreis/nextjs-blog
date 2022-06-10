import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData, getAllCategoryIds, getSortedPostsData } from '../../lib/posts';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

import Posts from '../../components/Posts';

export default function Category({ postsByCategoryData }: any) {

    return (
        <Layout home siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <h2 className="h1">Categoría: {postsByCategoryData.id}</h2>
            
            <section className="all-post-data">
                <Posts posts={postsByCategoryData.allPostsData} />
            </section>

        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllCategoryIds();
    console.log('paths', paths)
    return {
        paths,
        fallback: false,
    };
}
  
export async function getStaticProps({ params }: any) {
    const allPostsData = getSortedPostsData(params.id);
    const postsByCategoryData = {
        id: params.id,
        allPostsData,
    }
    return {
        props: {
            postsByCategoryData
        },
    };
}