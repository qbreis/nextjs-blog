import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

export default function Category({ postData }: any) {
    console.log(postData);
    return (
        <>Category</>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
  
export async function getStaticProps({ params }: any) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}