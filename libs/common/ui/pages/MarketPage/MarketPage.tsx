import React from "react";
import styles from "./MarketPage.module.scss";
import dynamic from 'next/dynamic';
// import { AgentInfo, AgentTable, TableData, ComingSoon } from "../../widgets";
import {TableData } from "../../widgets";

// const AgentInfo = dynamic(() => import('../../widgets/AgentInfo/AgentInfo'));
const AgentTable = dynamic(() => import('../../widgets/AgentTable/AgentTable'));
// const TableData = dynamic(() => import('../../widgets'));
const ComingSoon = dynamic(() => import('../../widgets/ComingSoon/ComingSoon'));

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";


export const MarketPage = ({marketData} : {marketData : any}) => {
   
   const dispatch = useDispatch();

    const currentLang = useSelector((state: RootState) => state.app.appReducer.appLanguage);
    // const MarketplaceData : any = useSelector((state: RootState) => state.app.appReducer.MarketplaceData);

    const [fetchLanguage, setFetchLanguage] = React.useState("en");

    React.useEffect(()=>{

        if(currentLang == "EN") {
        setFetchLanguage("en");
        } else if ( currentLang == "AR") {
        setFetchLanguage("ar");
        } else if ( currentLang == "ES") {
        setFetchLanguage("es");
        } else if ( currentLang == "POR") {
        setFetchLanguage("pt");
        }  else if ( currentLang == "VIE") {
        setFetchLanguage("vi");
        }  else if ( currentLang == "JP") {
        setFetchLanguage("ja");
        }  else if ( currentLang == "CH") {
        setFetchLanguage("zh");
        }   else if ( currentLang == "KOR") {
        setFetchLanguage("ko");
        } 

    },[currentLang]);

    React.useEffect(()=>{
        // dispatch(requestMarketplaceFetchAction({lang: fetchLanguage}));
    },[fetchLanguage]);

    const mockAgentData = {
        agentImage: "/agentAvatar.webp",
        address: "100 Ocean Drive, Miami, FL 33259",
        agencyWebsite: "starrealty.com",
        agentEmail: "star@realty.com",
        agentMotto: "Investing Smart",
        agentName: "Nika Star",
        phoneNumber: "305-555-0000",
        realtyImage: "/realty-1.jpg",
    };
    const investData: TableData[] = [
        {
            property: {
                title: 'Mixed-use',
                location: 'Miami, FL'
            },
            yield: [12.1, 14.2],
            price: 100.3,
            ticker: 'EXR',
            isProfit: false,
        },
        {
            property: {
                title: 'Boutique Hotel',
                location: 'Miami, FL'
            },
            yield: [10.2, 13.9],
            price: 99.3,
            ticker: 'GRT',
            isProfit: true,
        },
        {
            property: {
                title: 'Mixed-use',
                location: 'Miami, FL'
            },
            yield: [10.8, 13.9],
            price: 100.3,
            ticker: 'RPD',
            isProfit: false,
        },
        {
            property: {
                title: 'Single Family',
                location: 'Miami, FL'
            },
            yield: [10.8, 13.3],
            price: 99.3,
            ticker: 'CSR',
            isProfit: true,
        },
        {
            property: {
                title: 'Condominium',
                location: 'Miami, FL'
            },
            yield: [10.2, 13.2],
            price: 100.3,
            ticker: 'CSA',
            isProfit: false,
        },
        {
            property: {
                title: 'Mixed-use',
                location: 'Miami, FL'
            },
            yield: [9.6, 12.9],
            price: 99.3,
            ticker: 'ROD',
            isProfit: false,
        },
        {
            property: {
                title: 'Boutique Hotel',
                location: 'Miami, FL'
            },
            yield: [9.2, 12.9],
            price: 100.3,
            ticker: 'SSR',
            isProfit: true,
        },
        {
            property: {
                title: 'Mixed-use',
                location: 'Miami, FL'
            },
            yield: [9.1, 12.4],
            price: 99.3,
            ticker: 'XLR',
            isProfit: false,
        },
        {
            property: {
                title: 'Single Family',
                location: 'Miami, FL'
            },
            yield: [9.0, 11.2],
            price: 100.3,
            ticker: 'GDR',
            isProfit: true,
        },
        {
            property: {
                title: 'Condominium',
                location: 'Miami, FL'
            },
            yield: [9.0, 10.5],
            price: 100.3,
            ticker: 'ROC',
            isProfit: false,
        },
    ]
    return (
      <>
         
        <div className={styles.agency}>
            {/* <AgentInfo {...mockAgentData} /> */}
            <div className={styles.container}>
                <AgentTable tableData={investData} marketData={marketData} />
                <ComingSoon />
            </div>
        </div>
      </>
    );
};

export default MarketPage;
