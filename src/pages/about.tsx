import { AboutPage } from "@common/ui";
import Head from "next/head";

export const getServerSideProps = async ({ locale } : {locale : any}) => {

  // GET request using fetch inside useEffect React hook
	const token = "fc54bc5b955666bf406b8804c1aaaaf679162af750bd733909a846c988a38da12272eb9d22947809f4549c1f7d4a9a5f0b251e83f673a7ef250b58db51e3df4adf42c77521aaeca4a16d49e6f23ab3fb9877ca8525811372c9ed884e67abc13827aafd3858274ed00f8d534da67d43171d730faf011295459673d0f4455634e5";
	const options = {
	   method: 'GET',
	   headers: {
		 'Content-type': 'application/json',
		 'Authorization': `bearer ${token}`, // notice the Bearer before your token
		},
	 };
  const res = await fetch("https://webmaster.dequity.io/api/about-page?locale="+locale, options);
  const data = await res.json();

  const resSeo = await fetch("https://webmaster.dequity.io/api/seo?locale="+locale, options);
  const dataSeo = await resSeo.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      dataSeo
      // ...await serverSideTranslations(locale, ['common']),
    },
   
  }
}

export default function About({data, dataSeo} : {data:any, dataSeo:any}) {
  return (
    <>

      <Head>
        <title>{dataSeo.data.attributes.title_about}</title>
        <meta name="description" content={dataSeo.data.attributes.description_about} key="description" />
        <meta name="keywords" content={dataSeo.data.attributes.keywords_about}/>
        <meta property="og:title" content={dataSeo.data.attributes.title_about} key="og:title" />
        <meta property="og:description" content={dataSeo.data.attributes.description_about} key="og:description" />
        <link rel="canonical" hrefLang="en" href="https://dequity.io/about" />
        <link rel="alternate" hrefLang="es" href="https://dequity.io/es/about" />
        <link rel="alternate" hrefLang="pt" href="https://dequity.io/pt/about" />
        <link rel="alternate" hrefLang="ar" href="https://dequity.io/ar/about" />
        <link rel="alternate" hrefLang="ja" href="https://dequity.io/ja/about" />
        <link rel="alternate" hrefLang="zh" href="https://dequity.io/zh/about" /> 
        <link rel="alternate" hrefLang="ko" href="https://dequity.io/ko/about" />
      </Head>
      
      <AboutPage  AboutData={data}/>

    </>
  )
}
