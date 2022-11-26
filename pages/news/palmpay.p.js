import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PalmPay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PalmPay"/>
        <meta name="description" content="Trending News about PalmPay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PalmPay</h1>
            <Image width={800} height={500} src="https://www.africa-newsroom.com/files/thumb/fe709ea0a7bd525/600/418" alt="PalmPay"/>
            <h3>Recent News</h3>
            <a href='https://african.business/2022/11/apo-newsfeed/palmpay-obtains-nigeria-data-protection-regulation-ndpr-compliance-in-data-protection/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PalmPay Obtains Nigeria Data Protection Regulation (NDPR ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNVKAYmjXqL-fSazJWTD_t_-P9LTMkgntXO7abcKYMvEoZ0QY2w3mBa4HUfyu_B61NOurCwsCj" alt="PalmPay Obtains Nigeria Data Protection Regulation (NDPR ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PalmPay (www.PalmPay.com), a fintech innovator aiming to make digital payment more accessible and flexible, has obtained a compliance status on.</p></div>
            </div>
        </a><a href='https://businesspost.ng/technology/palmpay-obtains-nigeria-data-protection-regulation-status/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PalmPay Obtains Nigeria Data Protection Regulation Status</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkJ4609jJ14v4ROl7HEVGqQULPzY3Amjq8cBtu-FuDs2xEV5anEkSqmK1DBE1oJfz-BGFYP3uv" alt="PalmPay Obtains Nigeria Data Protection Regulation Status" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of Nigeria&#39;s digital payment and fintech companies, PalmPay, has obtained a compliance status on obligations in accordance with the Nigeria Data&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}