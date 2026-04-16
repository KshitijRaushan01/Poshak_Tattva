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
        {/* Google Fonts — Poshak Tattva Type System */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap"
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
