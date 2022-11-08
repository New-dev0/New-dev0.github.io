import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bikaji IPO GMP</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bikaji IPO GMP"/>
        <meta name="description" content="Trending News about Bikaji IPO GMP" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bikaji IPO GMP</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/bikaji-ipo.jpg" alt="Bikaji IPO GMP"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/business/market/final-day-subscription-status-bikaji-foods-ipo-8254697/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bikaji Foods IPO subscription status: Issue subscribed 26.67 times ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSX-VAsTZRGrhzBnIMqKcRcSL5CPCffhncMabFwh4eBpJpPNGkAhLPVLkrKd3TT0Rd-0_8QnSOt" alt="Bikaji Foods IPO subscription status: Issue subscribed 26.67 times ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bikaji Foods International IPO Subscription Status: The initial public offering (IPO) of snacks and sweets maker Bikaji Foods International was subscribed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/market/ipo/bikaji-foods-ipo-what-gmp-grey-market-premium-signals-after-two-days-of-subscription-11667626385026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bikaji Foods IPO: What GMP (grey market premium) signals as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7Tiu8qTQgnVM1DXiC2a337QyJ9H50JZdK1dA-o2llPp71-_65UWbesm1NmPLQ2962bf375AHE" alt="Bikaji Foods IPO: What GMP (grey market premium) signals as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bikaji Foods IPO: The initial public offer (IPO) of Bikaji Foods International Ltd got fully subscribed on second day of its subscription.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/markets/ipo-corner/story/bikaji-foods-ipo-issue-subscribed-nearly-27-times-on-day-3-352100-2022-11-07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bikaji Foods IPO: Issue subscribed nearly 27 times on Day 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTv9XjBGZ1zjhmpMUB1xIWDnnH4u78QVv56liWUrgLFiNzG62IU0kOfGQkwBhQ0v7PbGDrb85Sr" alt="Bikaji Foods IPO: Issue subscribed nearly 27 times on Day 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bikaji Foods IPO: The issue is purely an offer for sale (OFS) of 29373984 shares, with a price band between Rs 285 and Rs 300. As the IPO is completely an&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/business/markets/bikaji-foods-ipo-gmp-subscription-review-should-you-buy-on-last-day-6326053.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bikaji Foods IPO GMP, Subscription, Review; Should You Buy on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLx0pDnNOjFUxNxUUZbNxfHmJcJ0RIz9Vx3YpbA9UpCtAL_7Bxn-7dQ_3HoisW8VFpuuPNw9Dv" alt="Bikaji Foods IPO GMP, Subscription, Review; Should You Buy on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bikaji Foods is India&#39;s third-largest ethnic snack company. The company&#39;s product range includes six principal categories: bhujia, namkeen, packaged sweets,&nbsp;...</p></div>
            </div>
        </a><a href='https://tech.hindustantimes.com/how-to/bikaji-foods-ipo-subscription-closes-today-check-gmp-allotment-online-71667797927974.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bikaji Foods IPO: Subscription closes today; check GMP, allotment ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBOWJ4sx_mLgQE-ricBFK0x0uMiXnvJj0RqtEEVwhrio3RjQfavSAUSv1elXh5GdhYqFcZfVWp" alt="Bikaji Foods IPO: Subscription closes today; check GMP, allotment ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today is the last chance to bid for the Bikaji Foods IPO. Know latest GMP, allotment details, here are the details you need to know.</p></div>
            </div>
        </a>
        </Template></>;
}