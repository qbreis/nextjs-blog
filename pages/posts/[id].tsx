import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }: any) {
  return (
    <Layout>
      <MetaData title={postData.title} description={postData.excerpt} />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
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