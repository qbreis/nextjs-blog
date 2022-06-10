import { allPostsData } from '../lib/blog';

export async function getStaticProps({ params }: any) {
    const postData = {
        allPostsData: allPostsData,
    }
    return {
        props: {
            postData,
        },
    };
}

export default function Test({ postData }: any) {
    
    console.log('postData');
    console.log(postData);
    return (
        <>
            Test
        </>

    );
}