import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData, getAllCategoryIds, getPostsByCategory } from '../../lib/posts';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

import Posts from '../../components/Posts';

export default function Category({ postData }: any) {
    
    console.log('postData.postsByCategory');
    console.log(postData.postsByCategory);
    return (
        <Layout siteTitle={nextConfig.siteTitle}>
            <MetaData title={postData.title} description={postData.excerpt} />
            <article>
                <h1>Categoría: {postData.id}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
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
    const paths = getAllCategoryIds();
    const postsByCategory = getPostsByCategory(params.id);
    const postData = {
        id: params.id,
        postsByCategory: postsByCategory,
        paths: paths
    }
    return {
        props: {
            postData,
        },
    };
}