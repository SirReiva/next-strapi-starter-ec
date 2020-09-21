import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="bootstrap.min.css" />
                    <link rel="stylesheet" href="fontawesome-all.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
