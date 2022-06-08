import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { getAllCategoryIds } from '../../lib/categories';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

export default function Category({ categoryData }: any) {
    //console.log(categoryData);

    const paths = getAllCategoryIds();
    console.log(paths);
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
    const categoryData = await getPostData(params.id);
    return {
        props: {
            categoryData,
        },
    };
}
