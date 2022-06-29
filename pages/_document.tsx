import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document';
  
  class MyDocument extends Document {
    render() {
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
            <link href="static-styles.css" rel="stylesheet" />




          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;