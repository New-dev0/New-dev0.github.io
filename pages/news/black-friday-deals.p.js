import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday deals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday deals"/>
        <meta name="description" content="Trending News about Black Friday deals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday deals</h1>
            <Image width={800} height={500} src="https://fdn.gsmarena.com/imgroot/news/22/11/black-friday-roundup-article/-952x498w6/gsmarena_001.jpg" alt="Black Friday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.gsmarena.com/black_friday_deals_roundup-news-56659.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday deals roundup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfZerE6qS-WW9glRSrzelphpbeB_vxWwpN3RAjt-lWvz6tCioAXniPTdklfwhn11fUnG2mQogu" alt="Black Friday deals roundup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve curated a list of the best offers for smartphones, tablets, headphones and other gadgets.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-best-buy-black-friday-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>71 Great Best Buy Black Friday Deals (2022): iPads, Apple Watches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0ZMMxB-xq8S1q_Ldg47vvmFwTJ7d9T3kPI8nO9Ax91K3fE0OmoaIG5XaRM_f4X53HBH0PNhMF" alt="71 Great Best Buy Black Friday Deals (2022): iPads, Apple Watches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From iPads to mirrorless cameras, here are the shiniest deals we could find from this popular retailer.</p></div>
            </div>
        </a><a href='https://www.eurogamer.net/black-friday-very-deals-2022-best-offers-discounts-day-two'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Very deals 2022 day two: best offers and discounts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRz-xiY2pr1s4NteB-XHylkWFbkM3Z6aD9UnCN6qpF5XqJNqfUZsKrZDb4bJWjZc1GVU6mxRTd-" alt="Black Friday Very deals 2022 day two: best offers and discounts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the best Very Black Friday weekend Deals 2022, including large discounts on tech, gaming, and more.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/reviewed/2022/11/25/best-black-friday-deals-under-25/10714407002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Best Black Friday deals under $25—save on clothes, tech ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjJJcG2JTt5DyPKZk36GxQsB55uXSvHe3t27X4TvGMlTKv80oSaXk4GYBZEfxfjcv7o-DFNZO2Ag" alt="The Best Black Friday deals under $25—save on clothes, tech ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Check out the best Black Friday deals under $25, which include clothing, makeup, entertainment, tech, and more.</p></div>
            </div>
        </a><a href='https://www.zdnet.com/article/live-blog-black-friday-deals-november-25-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals live 2022: 95+ hottest tech sales in real time</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQv5G-MVAtNA1bIfDS3bRO-QHjuu-HzxE8kyebHuj3kKfyiVHWUFZMaYqNBXQanMNTmLB17Oapp" alt="Best Black Friday deals live 2022: 95+ hottest tech sales in real time" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday deals started earlier than ever, with retailers offering the lowest prices of the year. ZDNET is surfacing the latest and best sales online&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theverge.com/23475599/black-friday-deals-gift-ideas-cyber-monday-holiday-shopping'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals that make for great gifts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9zTGJrXBSikyPSKhiE9qb7Soc5E8rDGng5b-zAU5uu6r7qJCpKb-WCn8ndlfRCbNeo3WkGzou" alt="The best Black Friday deals that make for great gifts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday offers a great opportunity to save a lot of money on popular gifts before the holidays arrived. Here we&#39;ve curated a list of some of the best&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}