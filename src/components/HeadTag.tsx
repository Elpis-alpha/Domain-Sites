import Head from 'next/head'
import { siteName, siteDescription, creator, host } from '../__env'

const HeadTag = ({ title, description }: { title?: string, description?: string }) => {

  return (

    <Head>

      <meta charSet="UTF-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta name="author" content={creator} />

      <meta name="publisher" content={creator} />

      <meta name='application-name' content={siteName} />

      <meta name='robots' content='index,follow' />

      <meta name='googlebot' content='index,follow' />

      <meta name="theme-color" content="#e0e0e0" />

      <meta name="description" content={description ? description : siteDescription} />

      <title>{title ? `${title} - ${siteName}` : siteName}</title>

      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="manifest" href="/manifest.json" />

      <meta property="og:title" content={title ? `${title} - ${siteName}` : siteName} />

      <meta property="og:url" content={host} />

      <meta property="og:description" content={description ? description : siteDescription} />

      <meta property="og:type" content="website" />

      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content={`${host}/images/open-graph.png`} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@elpis_alpha" />

      <meta name="twitter:creator" content="@elpis_alpha" />

      <meta name="twitter:title" content={siteName} />

      <meta name="twitter:description" content={description ? description : siteDescription} />

      <meta name="twitter:image" content={`${host}/images/open-graph.png`} />

    </Head>

  )

}

export default HeadTag