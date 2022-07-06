// pages/404.js
import MetaData from '../components/MetaData';
import Layout from '../components/Layout';
import nextConfig from '../next.config';

export default function Custom404() {
    return (
        <Layout home siteTitle={nextConfig.siteTitle}>
            <MetaData />
            <section>
                <h1>404 - Page Not Found</h1>
                <div className="entry-meta">
                    <p>Página no encontrada</p>
                </div>
                <p>Desde aquí puedo ir a la página de inicio con el listado de anotaciones o al listado de categorías.</p>
            </section>
        </Layout>
    )
}
  