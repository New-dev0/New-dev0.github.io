import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Google Store</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Google Store"/>
        <meta name="description" content="Trending News about Google Store" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Google Store</h1>
            <Image width={800} height={500} src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/11/Pixel-7-Black-Friday.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt="Google Store"/>
            <h3>Recent News</h3>
            <a href='https://9to5google.com/2022/11/17/pixel-7-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Store Black Friday 2022 deals live: $749 Pixel 7 Pro, $299 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaEuCC3RqtvOBq0rk_ec2gzF1bBTpT6XumR-jdvoz-SvJT-HyWde_mF3MxZjBkS3mKapQaGfPjTw" alt="Google Store Black Friday 2022 deals live: $749 Pixel 7 Pro, $299 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The US Google Store will kick off its Black Friday 2022 discounts next week, and the highlight is $150 off the Pixel 7 Pro...</p></div>
            </div>
        </a><a href='https://www.laptopmag.com/news/google-store-black-friday-deals-sales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Store Black Friday deals 2022: Pixel 7 Pro from $749 and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnyqWIrUIXum83srtlmk7-UOg-DAIhljexZvcDY8bkTpa79TEhc6GTNPfu-rkjSMzYOodnBcS7" alt="Google Store Black Friday deals 2022: Pixel 7 Pro from $749 and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new Pixel Pro features a 6.7-inch QHD+ 120Hz display, Google Tensor G2 processor, 12GB of RAM and 128GB of storage. Its rear camera setup includes a 48MP&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hitc.com/en-gb/2022/11/17/does-google-store-do-black-friday-sales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Does Google store do Black Friday sales?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9sZ7NriEE1rvsihPzwBx0gO3ots2j5fny0snihe1a0T9CxakX1qZ5VwWrly1QhQ_g4T4FsDQb" alt="Does Google store do Black Friday sales?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yes, Google Store does do Black Friday sales and 2022 is no different! There are several exciting offers that are available on phones, connected home devices,&nbsp;...</p></div>
            </div>
        </a><a href='https://chromeunboxed.com/google-play-kids-apps-regulations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Google Play Store is about to open the floodgates with new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqLo1GP2n7D7Ct7TJaLtzdOWE_b7UQH7aP3--dP78Ps5SudUY0KGB6wc09DX_zWO7IYPDkhyJC" alt="The Google Play Store is about to open the floodgates with new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Another requirement that Google urges is that if an app is not meant for children, the marketing does not unintentionally attract them. This has been a major&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/deals/black-friday-deals-have-arrived-at-the-google-store/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Deals Have Arrived at the Google Store</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGlV_Ruh-j7x4nXVIM79QBCFE28AfShhBr0gTtb5irC7f6M4NLeWRFxRlSZNveGLlZl1FtVFOZ" alt="Black Friday Deals Have Arrived at the Google Store" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Save on phones, wireless earbuds, devices for the home and more.</p></div>
            </div>
        </a><a href='https://www.androidpolice.com/google-expands-teacher-approved-play-store-apps-program/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google expands its teacher-approved Play Store apps program</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYFg-2VSJo4IiaGHUzbo8h2DsE_iW73fA2-pSGPxdOBYmWwd669p6GIpSKePvhqaxnDD2NbSFr" alt="Google expands its teacher-approved Play Store apps program" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The company wants to make sure kids have a safe experience on Android.</p></div>
            </div>
        </a><a href='https://www.androidpolice.com/google-pixel-7-black-friday-deal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google&#39;s Black Friday deal lets you grab a Pixel 7 for $500 or, better ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhWwxcVoewzthHZnz7Bp85P6ypmEi3wUjPxG8Yb57hElzYCJ8_fssuEAZ-3pXpmy4KUu6fjXIA" alt="Google&#39;s Black Friday deal lets you grab a Pixel 7 for $500 or, better ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Android Police &middot; Google&#39;s Black Friday deal lets you grab a Pixel 7 for $500 or, better yet, free with trade-in.</p></div>
            </div>
        </a><a href='https://www.techradar.com/deals/google-pixel-6a-falls-to-just-pound299-in-early-black-friday-deal-at-the-google-store'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Pixel 6a falls to just £299 in early Black Friday deal at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRDwOnCu19PTrF8tsgqeCO_yMI-rYKMyEJqwvNsvZ4uhGryFd_Spvmc8GxE5RABY8LX3nQ8YYG" alt="Google Pixel 6a falls to just £299 in early Black Friday deal at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This early-bird Black Friday promotion, which knocks a full £100 off the usual rate, brings this excellent mid-range device down to its lowest price yet. You&#39;re&nbsp;...</p></div>
            </div>
        </a><a href='https://chromeunboxed.com/google-black-friday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here are all the Black Friday Deals on your favorite Google products</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEWr3QvVYcLX5wSxd09R_Llci7SU1dGeu5L4X3Fn8vsRWasS4ug--291VIEvE7a-J3P1v-GkjU" alt="Here are all the Black Friday Deals on your favorite Google products" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As is customary in the U.S., the day after Thanksgiving is known as Black Friday, a commercial holiday when retail stores discount items heavily. Luckily, we no&nbsp;...</p></div>
            </div>
        </a><a href='https://techreport.com/software/3485042/google-upgrades-its-teacher-approved-program-on-the-play-store-to-protect-kids/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Upgrades Its Teacher Approved Program On The Play Store ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWlPODMBK3hv-3Oo1xi6LMTuC0WW2CQbZbXDO05bfRdGUNwDoeWuwNLVtGtZG-39W15XnjsGdk" alt="Google Upgrades Its Teacher Approved Program On The Play Store ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google today announced an upgrade to its Teacher Approved program, to protect children from unsuitable content on the Play Store.</p></div>
            </div>
        </a>
        </Template></>;
}