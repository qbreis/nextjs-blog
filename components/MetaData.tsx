import Head from 'next/head';

const MetaData = ({title, description,}: any) => {
    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    );
};

MetaData.defaultProps = {
    title: 'Qbreis - Enric Gatell',
    description: 'This blog contains the step-by-step annotations of what I learn and consolidate, day by day, in terms of programming and web design, among other things.',
}

export default MetaData;