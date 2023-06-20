import type { AppProps, AppContext } from 'next/app';
import Layout from "src/layout/Layout";
import "../../libs/common/ui/scss/index.scss";
import "../../public/styles/index.scss";
import { store } from '../store/store'
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import ReactGA from "react-ga4";
import { useEffect } from "react";
import ErrorBoundary from '../components/ErrorBoundary';


function App({ Component, pageProps }: AppProps) {

  

  useEffect(() => {
    if(process.env.googleAnalyticsID && process.env.NODE_ENV === "production") { // Checks for GA ID and only turns on GA in production
      ReactGA.initialize("G-MK2YDLVJBY"); // process.env.googleAnalyticsID
      // ReactGA.pageview(window.location.pathname + window.location.search);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: document.title });
      console.log("TRUE!", process.env.googleAnalyticsID);
      
    } else {
      console.log("FALSE!");
    }

  });


  return(
    <>
    <ErrorBoundary>
      {/* <ThemeProvider {...config}> */}
        <Provider store={store}>
          <Layout dataHeader={pageProps.dataHeader} dataFooter={pageProps.dataFooter} dataModal={pageProps.dataModal}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      {/* </ThemeProvider> */}
    </ErrorBoundary>
     
    </>
  );
}

App.getInitialProps = async ({ Component, router, ctx }: AppContext) => {


  // // GET request using fetch inside useEffect React hook
	const token = "fc54bc5b955666bf406b8804c1aaaaf679162af750bd733909a846c988a38da12272eb9d22947809f4549c1f7d4a9a5f0b251e83f673a7ef250b58db51e3df4adf42c77521aaeca4a16d49e6f23ab3fb9877ca8525811372c9ed884e67abc13827aafd3858274ed00f8d534da67d43171d730faf011295459673d0f4455634e5";
	const options = {
	   method: 'GET',
	   headers: {
		 'Content-type': 'application/json',
		 'Authorization': `bearer ${token}`, // notice the Bearer before your token
		},
	 };
  const resHeader = await fetch("https://webmaster.dequity.io/api/header?locale="+router.locale, options);
  const dataHeader = await resHeader.json();

  const resFooter = await fetch("https://webmaster.dequity.io/api/footer?locale="+router.locale, options);
  const dataFooter = await resFooter.json();

  const resModal = await fetch("https://webmaster.dequity.io/api/modal?locale="+router.locale, options);
  const dataModal = await resModal.json();


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    pageProps: {
      dataHeader,
      dataFooter,
      dataModal
      // ...await serverSideTranslations(locale, ['common']),
    },
   
  }
}

export default appWithTranslation(App);



