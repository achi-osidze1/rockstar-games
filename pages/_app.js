import Layout from '@/components/layout/Layout';
import '../styles/globals.css';
import { ContextProvider } from '../components/context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>

      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        `}
      </style>
    </>
  );
}

export default MyApp;
