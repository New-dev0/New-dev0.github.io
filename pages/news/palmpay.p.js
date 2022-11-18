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
            <Image width={800} height={500} src="https://h2g6j3q2.rocketcdn.me/wp-content/uploads/2022/11/image-32.png" alt="PalmPay"/>
            <h3>Recent News</h3>
            <a href='https://www.techcityng.com/palmpay-proven-to-be-data-protection-compliant-by-nigeria-data-protection-regulation-ndpr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PalmPay proven to be data protection compliant by Nigeria Data ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNFy2vQpl6IjAZVqP-PPDh71Mi3YOzDaUQ73vMygJt2Bh6T5JygCPaeOIGFZ0WUwoaKdQlIHG4" alt="PalmPay proven to be data protection compliant by Nigeria Data ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>To address this, The National Information Technology Development Agency (NITDA) Act of 2007 formed the statutory regulation for electronic governance and&nbsp;...</p></div>
            </div>
        </a><a href='https://african.business/2022/11/apo-newsfeed/palmpay-obtains-nigeria-data-protection-regulation-ndpr-compliance-in-data-protection/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PalmPay Obtains Nigeria Data Protection Regulation (NDPR ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNVKAYmjXqL-fSazJWTD_t_-P9LTMkgntXO7abcKYMvEoZ0QY2w3mBa4HUfyu_B61NOurCwsCj" alt="PalmPay Obtains Nigeria Data Protection Regulation (NDPR ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PalmPay (www.PalmPay.com), a fintech innovator aiming to make digital payment more accessible and flexible, has obtained a compliance status on.</p></div>
            </div>
        </a><a href='https://www.citypeopleonline.com/young-people-go-crazy-for-payment-app-palmpay/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Young People Go Crazy For Payment App, PalmPay – City People ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmOpxII38YCzIHndmFfqEJ0SX6aVNehgoZY42NjDvRUr_-7ZnSzxo9cq6Khf3vYhtN43RkKOjX" alt="Young People Go Crazy For Payment App, PalmPay – City People ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>•How The Digital Bank Hit 10 Million Subscribers… ..All Within 3 Years. PalmPay is popular among the young people in Nigeria, so much so that it hit 10&nbsp;...</p></div>
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