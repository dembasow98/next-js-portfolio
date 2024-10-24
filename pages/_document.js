import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=GGTM-NK4W4ZNX" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-NK4W4ZNX');
            `}
          </Script>
          {/* End Google Tag Manager */}
          <meta charSet="utf-8" />
          {/* Google verification*/}
          <meta name="google-site-verification" content="pxB6DwSAwvFZQnbYbDbIk32KMnVaC92Hk-PXfAr976s" />
          {/*Progressive Web App */}
          <meta name="theme-color"></meta>
          
          <link rel="apple-touch-icon" sizes="192x192" href="/home.ng"/>

          <link rel="icon" href="/home.png"/>
          {/* Include your stylesheets here */}
          <link
            rel="stylesheet"
            href="/static/plugin/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugin/font-awesome/css/all.min.css"
          />
          <link rel="stylesheet" href="/static/plugin/et-line/style.css" />
          <link
            rel="stylesheet"
            href="/static/plugin/themify-icons/themify-icons.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugin/owl-carousel/css/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugin/magnific/magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugin/scroll/jquery.mCustomScrollbar.min.css"
          />
          <link rel="stylesheet" href="/static/css/style.css" />
          {/* Include your custom fonts here */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          />
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
