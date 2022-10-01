import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ONDC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ONDC"/>
        <meta name="description" content="Trending News about ONDC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ONDC</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94568769,width-1070,height-580,imgsize-97354,overlay-economictimes/photo.jpg" alt="ONDC"/>
            <h3>Recent News</h3>
            <a href='https://m.economictimes.com/industry/services/retail/many-more-apps-to-join-ondc-platform-in-coming-weeks/articleshow/94568735.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ondc: Many more apps to join ONDC platform in coming weeks - The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrtgvyYWAkM8i8L7gU24WGIp4SlX6BEyDWCZB4Xtb1ZjnJ1lbd1MBDCQZOd1UoGr8IvF3EvuTN" alt="ondc: Many more apps to join ONDC platform in coming weeks - The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;ONDC is a government&#39;s startup. We are now in the process of validating some of the processes and technologies. 20 more apps will come this week,&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://inc42.com/buzz/govt-ondc-public-bengaluru-part-beta-testing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDC Goes Live — Bengaluru Becomes 1st City To Use India&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvQiMywLdbu8uN6hKWdBf5QgvJpApiR7kQzqsdQa4tPQ3tk1JwezHCsZPxd_MVduMQRbnbCGoA" alt="ONDC Goes Live — Bengaluru Becomes 1st City To Use India&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The government has opened the ONDC for the public in Bengaluru. The move is a part of the network&#39;s beta testing.</p></div>
            </div>
        </a><a href='https://yourstory.com/2022/09/ondc-ecommerce-announces-launch-of-beta-test-phase-bengaluru/amp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDC announces launch of Beta Test phase in Bengaluru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTee3oKMmzFTXJ4NI6yzinLW2kzk6Oit6NqW-ZDvlx4R8gsyONla5A6XVvM20CNOOi9FIluS9e9" alt="ONDC announces launch of Beta Test phase in Bengaluru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ONDC, the open network for ecommerce, will be available across 16 pin codes in Bengaluru with a focus on hyperlocal businesses, including kirana,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/bengaluru-news/bengaluru-consumers-to-experience-shape-ondc-s-new-e-commerce-revolution-101664536581949.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengaluru consumers to experience, shape ONDC&#39;s new e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPAxEf-Y_yxhS8lMH0CyHnRJEtwfhbLlEUe454JG8vUT2jJUUcTh3szc0XM7ixh5uLs8RrYw5s" alt="Bengaluru consumers to experience, shape ONDC&#39;s new e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a significant milestone, Open Network for Digital Commerce (ONDC), an initiative of the Department of Promotion of Industry and Internal Trade (DPIIT),&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/tech/technology/ondc-starts-beta-testing-with-consumers-in-16-pin-codes-of-bengaluru/articleshow/94566549.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDC starts beta testing with consumers in 16 pin codes of Bengaluru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJWFDSlc1AhWD4h_Lxv2OEBh3GZw4qXp2vgT0A0hIEskfmsAxMLURMmlOGobtKyzc_e9rEqclt" alt="ONDC starts beta testing with consumers in 16 pin codes of Bengaluru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The objective of the beta test is to allow consumers to experience the network for the first time and gather feedback which will help further refine the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/economy-policy/ondc-starts-beta-test-in-bengaluru-over-161-orders-placed-on-day-1-122093001173_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDC goes live with beta launch in Bengaluru; 161 orders placed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-10YNZhJvEUeFko8z1oxMlp1-_oGnuvJV6_9pSmDBVKu3dgcfQoI63la86kuwd0qI0xFlE8ik" alt="ONDC goes live with beta launch in Bengaluru; 161 orders placed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just when Walmart-owned Flipkart&#39;s Big Billion Day sale was drawing to a close after crossing the 1-billion footfall mark in a week, the government went&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/business/biz-ondc-trail-services-start-in-bengaluru-23109670.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बेंगलुरु में शुरू हुआ स्वदेशी सरकारी ई-कॉमर्स प्लेटफार्म ONDC; ग्रॉसरी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaD4ROfd2lFBulQcTi-wqopMgi_mcl1CSOZLfjsmqU3BqDuVwVkjjxb0nCSlkBgqCHQD0FP_R2" alt="बेंगलुरु में शुरू हुआ स्वदेशी सरकारी ई-कॉमर्स प्लेटफार्म ONDC; ग्रॉसरी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ONDC Start in Bengaluru सरकार ई- कॉमर्स कारोबार पर एकाधिकार समाप्त करने के लिए ओेएनडीसी पर कार्य&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/business/startups/ondc-network-will-go-live-from-today-in-16-pincodes-of-bengaluru-803581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDC नेटवर्क आज से बेंगलुरु के 16 इलाकों में हुआ लाइव</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiLCnQ4YkzBVTtj1x7PKaFXc-BhK5DRtE-s5PhcoMdGnOkYQKb14Oea9PX5XBgSMZIg-z6Dh71" alt="ONDC नेटवर्क आज से बेंगलुरु के 16 इलाकों में हुआ लाइव" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नेटवर्क के लिए पूरी तरह से काम करने के लिए हमें थोड़ा इंतजार करना होगा। बेंगलुरू के इस&nbsp;...</p></div>
            </div>
        </a><a href='https://yourstory.com/hindi/ondc-network-beta-testing-starts-in-bengaluru-in-16-pin-codes-open-network-for-digital-commerce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बेंगलुरु में ONDC की बीटा टेस्टिंग शुरू, Flipkart और Amazon का बनेगा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRO8qTrzccSscxP1ZuYWE9-gN9q8PiKZw2yZTJUiE5BLo569pDVQ3cv740XvTCsByGYFeHk4wel" alt="बेंगलुरु में ONDC की बीटा टेस्टिंग शुरू, Flipkart और Amazon का बनेगा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ONDC, भारत सरकार के वाणिज्य मंत्रालय के तहत आने वाले उद्योग और आंतरिक व्यापार संवर्धन&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.goodreturns.in/news/govt-launches-ondc-in-bengaluru-big-alternative-to-flipkart-amazon-031563.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>இனி பிளிப்கார்ட், அமேசான் தேவையில்லை.. வந்தாச்சு ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSsfk4dLUJLRyGa_uIpiWNJpfMYgWU2Pw02vuhLkpKkxcNK2rE9ak1X2uvcUaW3tvA4mm4jOs5" alt="இனி பிளிப்கார்ட், அமேசான் தேவையில்லை.. வந்தாச்சு ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இனி பிளிப்கார்ட், அமேசான் தேவையில்லை.. வந்தாச்சு அரசு ஈகாமர்ஸ் தளம்..! News. oi-Prasanna Venkatesh. By&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}