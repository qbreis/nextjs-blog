import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import nextConfig from '../../next.config';

export default function Post({ postData }: any) {
  return (
    <Layout siteTitle={nextConfig.siteTitle}>
      <MetaData title={postData.title} description={postData.excerpt} />
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
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