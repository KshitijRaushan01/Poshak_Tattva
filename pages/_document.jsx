import Document, { Html, Head, Main, NextScript } from 'next/document';

class ENTrovaDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        {/* Google Fonts — Inter Font System */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"
          />
          {/* Favicon */}
          <link rel="icon" type="image/jpeg" href="/img/favicon/favicon.jpg" />
          <link rel="shortcut icon" href="/img/favicon/favicon.jpg" />
          <link rel="apple-touch-icon" href="/img/favicon/favicon.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ENTrovaDocument;
