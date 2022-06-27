import Layout from '../../components/Layout';
import MetaData from '../../components/MetaData';
import nextConfig from '../../next.config';

export default function catHome() {
    return (
        <Layout siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <h2 className="h1">List of categories</h2>
            
            <section className="all-post-data">
                ...
            </section>

        </Layout>
    );
}