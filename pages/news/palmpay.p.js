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
            <Image width={800} height={500} src="https://ibsintelligence.com/wp-content/uploads/2022/11/PalmPay.jpg" alt="PalmPay"/>
            <h3>Recent News</h3>
            <a href='https://ibsintelligence.com/ibsi-news/palmpay-obtains-nigeria-data-protection-regulation-compliance-in-data-protection/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PalmPay obtains Nigeria Data Protection Regulation compliance in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9nsZdUCrfv3pCKbyE5QFkTSpNL2ZFHH4A8oiaLlszLpov-BnCqyr7tIXNRaO6BYS8DpAdZjVa" alt="PalmPay obtains Nigeria Data Protection Regulation compliance in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PalmPay, a FinTech innovator aiming to make digital payment more accessible and flexible, has obtained a compliance status on obligations in.</p></div>
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