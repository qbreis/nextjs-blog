import Head from 'next/head';

import nextConfig from '../next.config';

const MetaData = ({title, description,}: any) => {

    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.png' />
            <title>{title}</title>
            
        </Head>
    );
};

MetaData.defaultProps = {
    title: nextConfig.siteTitle,
    description: nextConfig.siteDescription,
}

export default MetaData;