import { Html, Head, Main, NextScript } from 'next/document';
//import { useRouter } from 'next/router';

export default function Document(props: any) {
    /*
    const router = useRouter();
    const routerAsPath = router.asPath;
    const pathToRootArray = routerAsPath.split('/');
    let pathToRoot = '';
    for(let i = 1; i < pathToRootArray.length; i++){
        if(routerAsPath != '/'){ pathToRoot += '../'; }
    }
    const staticStylesCss = pathToRoot+'static-styles.css';
    */
    return (
        <Html>
            <Head>
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
                <link href='static-styles.css' rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}