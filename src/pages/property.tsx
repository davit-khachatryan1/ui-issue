import { PropertyPage } from "@common/ui";
import Head from "next/head";

export const getServerSideProps = async ({ locale }: { locale: any }) => {

   const token = "fc54bc5b955666bf406b8804c1aaaaf679162af750bd733909a846c988a38da12272eb9d22947809f4549c1f7d4a9a5f0b251e83f673a7ef250b58db51e3df4adf42c77521aaeca4a16d49e6f23ab3fb9877ca8525811372c9ed884e67abc13827aafd3858274ed00f8d534da67d43171d730faf011295459673d0f4455634e5";
   const options = {
      method: 'GET',
      headers: {
         'Content-type': 'application/json',
         'Authorization': `bearer ${token}`, // notice the Bearer before your token
      },
   };

   const res = await fetch("https://webmaster.dequity.io/api/property-page?locale=" + locale, options);
   const data = await res.json();

   const resSeo = await fetch("https://webmaster.dequity.io/api/seo?locale=" + locale, options);
   const dataSeo = await resSeo.json();

   return {
      props: {
         data,
         dataSeo
         // ...await serverSideTranslations(locale, ['common']),
      },
   }
}

export default function Market({ data, dataSeo }: { data: any, dataSeo: any }) {
   return (
      <>

         <Head>
            <title>{dataSeo.data.attributes.title_marketProperty}</title>
            <meta name="description" content={dataSeo.data.attributes.description_marketProperty} key="description" />
            <meta name="keywords" content={dataSeo.data.attributes.keywords_marketProperty} />
            <meta property="og:title" content={dataSeo.data.attributes.title_marketProperty} key="og:title" />
            <meta property="og:description" content={dataSeo.data.attributes.description_marketProperty} key="og:description" />
            <link rel="canonical" hrefLang="en" href="https://dequity.io/property" />
            <link rel="alternate" hrefLang="es" href="https://dequity.io/es/property" />
            <link rel="alternate" hrefLang="pt" href="https://dequity.io/pt/property" />
            <link rel="alternate" hrefLang="ar" href="https://dequity.io/ar/property" />
            <link rel="alternate" hrefLang="ja" href="https://dequity.io/ja/property" />
            <link rel="alternate" hrefLang="zh" href="https://dequity.io/zh/property" />
            <link rel="alternate" hrefLang="ko" href="https://dequity.io/ko/property" />
         </Head>
         <PropertyPage propertyData={data} />
      </>
   )
}
