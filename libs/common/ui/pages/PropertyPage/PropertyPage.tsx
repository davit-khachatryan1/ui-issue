import React from "react";

import dynamic from 'next/dynamic';



// import { Instructions, Tags } from "../../components";
// import {
//   RealtyAgentInfo,
//   RealtyGraph,
//   RealtyInfo,
//   RealtyPayment,
//   SeeAlso,
//   Slider,
// } from "../../widgets";

const Instructions = dynamic(() => import('../../components/Instructions/Instructions'));
const Tags = dynamic(() => import('../../components/Tags/Tags'));

// const RealtyAgentInfo = dynamic(() => import('../../widgets/RealtyAgentInfo/RealtyAgentInfo'));
const RealtyGraph = dynamic(() => import('../../widgets/RealtyGraph/RealtyGraph'));
const RealtyInfo = dynamic(() => import('../../widgets/RealtyInfo/RealtyInfo'));
const RealtyPayment = dynamic(() => import('../../widgets/RealtyPayment/RealtyPayment'));
const SeeAlso = dynamic(() => import('../../widgets/SeeAlso/SeeAlso'));
const Slider = dynamic(() => import('../../widgets/Slider/Slider'));



import styles from "./PropertyPage.module.scss";
import cl from "classnames";

export const PropertyPage = ({propertyData} : {propertyData : any}) => {
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
  const tagList = [
    {
      title: "Condominium",
      link: "/",
    },
    {
      title: "Miami, FL",
      link: "/",
    },
    {
      title: "New offers",
      link: "/",
    },
  ];
  const photos = ["/realty-1.jpg", "/realty-2.jpg"];
  const mockRealtySalesData = {
    address: "100 Ocean Drive, Miami, FL 33259",
    price: 100.00,
    preMarket: 0.21,
    percent: 0.99,
  };
  const mockRealtyInfo = {
    text: [
      "Residences will range from 2,300 to 9,000 square feet, offering 2 to 7 bedrooms and spectacular, unobstructed views of Biscayne Bay, the Atlantic Ocean and the Miami skyline. Units will feature private elevators, keyless entry, Smart Home technology, 11' ceilings in living areas with modern integrated linear diffusers, European marble flooring throughout, Gourmet kitchens with Italian cabinetry, marble countertops, marble backsplashes, and fully-integrated Sub-Zero/Wolf appliances and grand primary suits boasting oversized walk-in closets, midnight bars, marble showers, and free-standing tubs.",
    ],
    year: 2022,
    address: "100 Ocean Drive, Miami, FL 33259",
    propertyType: "Mixed-use",
    ticker: "EXR",
    dues: 235,
    distribution: "By-weekly",
    downloads: [
      "DAO Articles of Organization - 100 Ocean Drive, Miami FL 33259.pdf",
      "DAO Letter of Good Standing - 100 Ocean Drive, Miami FL 33259.pdf",
      "DAO Operating Agreement - 100 Ocean Drive, Miami, FL 33259.pdf",
      "Inspection Report - 100 Ocean Drive, Miami, FL 33259.pdf",
    ],
  };
  return (
    <div className={cl(styles.home, styles.container)}>
      <div className={cl(styles["container--half"], styles.column)}>
        <Slider photos={photos} />
        <div className={cl(styles["column--narrow"], styles['home__realty--tablet'])}>
          {/* <RealtyAgentInfo {...mockAgentData} /> */}
          <RealtyPayment propertyData={propertyData} />
        </div>
        <RealtyInfo {...mockRealtyInfo} propertyData={propertyData} />
        <RealtyGraph {...mockRealtySalesData} preMarketName={propertyData.data?.attributes.graph_preMarket} />
        <Instructions propertyData={propertyData} />
        <Tags tagList={tagList} tagName={propertyData.data?.attributes.tagName} />
      </div>
      <div className={cl(styles["column--narrow"], styles['home__realty--desktop'])}>
        {/* <RealtyAgentInfo {...mockAgentData} /> */}
        <RealtyPayment propertyData={propertyData} />
      </div>
      <div className={styles.home__seeAlso}>
         <SeeAlso title={propertyData.data?.attributes.seeAlsoName} />
      </div>
      {/* 
      
      <div className={cl(styles["column--fs"], styles.home__seeAlso)}>
      </div> */}
    </div>
  );
};

export default PropertyPage;
