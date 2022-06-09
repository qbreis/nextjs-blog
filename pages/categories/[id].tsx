import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData, getAllCategoryIds } from '../../lib/posts';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

export default function Category({ postData }: any) {
    //console.log(postData);
    return (
        <>Category {postData.id}</>
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
    // const postData = await getPostData(params.id);

    const paths = getAllCategoryIds();
    const postData = {
        id: params.id,
        contentHtml: 'html lololo',
        paths: paths
    }
    return {
        props: {
            postData,
        },
    };
}