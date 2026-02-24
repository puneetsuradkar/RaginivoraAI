import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RaginivoraAI | AI-Powered Growth & Advertising System</title>
        <meta name="description" content="We create, launch and optimize revenue-generating ad campaigns for small brands. Launch High-Converting Ads in 72 Hours." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
