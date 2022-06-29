import Head from 'next/head';

import nextConfig from '../next.config';

import { useRouter } from 'next/router'

const MetaData = ({title, description,}: any) => {
    const router = useRouter();
    const routerAsPath = router.asPath;
    const pathToRootArray = routerAsPath.split('/');
    let pathToRoot = '';
    for(let i = 1; i < pathToRootArray.length; i++){
        if(routerAsPath != '/'){ pathToRoot += '../'; }
    }
    const staticStylesCss = pathToRoot+'static-styles.css';

    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.png' />
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
                  rel="stylesheet"
            />
            <link href={staticStylesCss} rel="stylesheet" />
        </Head>
    );
};

MetaData.defaultProps = {
    title: nextConfig.siteTitle,
    description: nextConfig.siteDescription,
}

export default MetaData;