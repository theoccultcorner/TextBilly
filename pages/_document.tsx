import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Speak to Billy."
          />
          <meta property="og:site_name" content="Nevarezmarketing.com" />
          <meta
            property="og:description"
            content="Speak to Billy-Voicebot"
          />
          <meta property="og:title" content="Speak to Billy-Voicebot" />
          
         
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
