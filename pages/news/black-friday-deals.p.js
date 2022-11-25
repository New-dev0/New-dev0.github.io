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
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/bfcm-2022-lead-gifts-4.jpg?c=16x9&q=w_800,c_fill" alt="Black Friday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/cnn-underscored/deals/black-friday-under-25-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Black Friday deals under $25</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWUDwXqW_9ntOb5Ctzb64jQdxAnOhLMqhPMm2fTxtjFb17MxnKYavBYPStBQDXCaieQeTikXpf" alt="The best Black Friday deals under $25" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We rounded up some of the best Black Friday deals — from beauty to smart home tech to toys and accessories — all under $25 you can shop right now.</p></div>
            </div>
        </a><a href='https://www.tomshardware.com/news/live/black-friday-gaming-monitor-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Deals on Gaming Monitors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgxdsIwtx-2a3Mya9jeqqtnjnDp0S5CvygV6OMZb6CLfq1pDoHBBn8xJXrT3fITJygMzk96oWZ" alt="Best Black Friday Deals on Gaming Monitors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re tracking sales on the best gaming monitors to flesh out the ultimate gaming rig.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-black-friday-deals-under-50-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>53 Best Black Friday Deals Under $50 (2022): Electric Toothbrushes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSy3k1WKc169tZ3MnQYF53_rgHTdRx90H4OD9ZNK7cm4lEv0-q-yYKL2PnIpUg8tk6dNGgtpF5E" alt="53 Best Black Friday Deals Under $50 (2022): Electric Toothbrushes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Limited budget? These affordable gizmos are WIRED favorites, and now they&#39;re even cheaper.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/wirecutter/money/best-black-friday-deals-under-100-2022-1124/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 40+ Best Black Friday Deals Under $100</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSeZb8iZLe7hId-YwcRVNn6qhEyPVsMW9tXkUW7gTv_zn7vzGyarXFGweUFCuSEm2mRokFXDDj" alt="The 40+ Best Black Friday Deals Under $100" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These Wirecutter-approved Black Friday deals are all under $100—perfect for if you&#39;re ready to splurge but don&#39;t want to spend too much.</p></div>
            </div>
        </a><a href='https://appleinsider.com/articles/22/11/24/28-best-apple-black-friday-deals-on-amazon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 best Apple Black Friday deals on Amazon: save up to $550 on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTj_llO146EI06yvI_VGcCgC-tDgEfhxKaGXIun2q1bX2O3dtIYHMER_EUubv0cWR9dMBSF2kK" alt="28 best Apple Black Friday deals on Amazon: save up to $550 on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The e-commerce giant has issued dozens of Black Friday discounts on Apple devices, from $199.99 AirPods Pro 2 to $500 off the 1TB 14-inch MacBook Pro. We&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/services-and-software/secret-alexa-deals-every-black-friday-amazon-hides-a-few-in-your-echo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Secret Alexa Deals: Every Black Friday, Amazon Hides a Few in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0bfpeiZFHVhLqzkMSyqZkknU5R5SsP52yo4by7BB53iSQdsCtCfasKRUDW4FVIm-5g-uOHGza" alt="Secret Alexa Deals: Every Black Friday, Amazon Hides a Few in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live now, you are able to ask Alexa on either an Echo or the Echo app on your phone to order any of the deals below and get them at the exclusive prices&nbsp;...</p></div>
            </div>
        </a><a href='https://appleinsider.com/articles/22/11/24/the-best-black-friday-deals-on-4k-monitors-for-as-low-as-199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday deals on 4K monitors, for as low as $199</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNIO7eRL2_qjKhWDSNu5o5HDxFtjKCHBP9rmgsGzS31MBYhmsY__a1_UFOwL7Ksbh0Q-bdwDrY" alt="Best Black Friday deals on 4K monitors, for as low as $199" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now is the time to upgrade your monitor to a 4K one, as Black Friday sales bring in great savings on everything from budget to ultra wide 4K displays,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gamespot.com/gallery/dozens-of-arcade1up-cabinets-get-big-discounts-for-black-friday/2900-4481/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dozens Of Arcade1Up Cabinets Get Big Discounts For Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSD0kzFhPI82xCiHXhcF5sOgeL3m0yS6HTNQmLzoSx7-KBZ01uDbXvkFMwrTTJ0iWVC3VfnFgb4" alt="Dozens Of Arcade1Up Cabinets Get Big Discounts For Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From gaming tables and countercades to full-sized cabinets, here are the best Arcade1Up Black Friday deals.</p></div>
            </div>
        </a><a href='https://www.al.com/life/2022/11/top-amazon-2022-black-friday-deals-on-tech-beauty-home-goods-and-more.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top Amazon 2022 Black Friday deals on tech, beauty, home goods ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBGQMvuUC2TZSMx3a3J8NIQAZPiBwkrWyi-HYP8jfnb2qvu6Om8bb_FZmzkzFJBxnf-7iecbFv" alt="Top Amazon 2022 Black Friday deals on tech, beauty, home goods ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In honor of Black Friday 2022, we&#39;ve selected some of the best deals Amazon is offering on some of this year&#39;s most popular products.</p></div>
            </div>
        </a><a href='https://www.macworld.com/article/1375200/best-mac-monitor-black-friday-deals-nov-24.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday Mac monitor deals: November 24</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKPNuLyJhnRCYLfbC_joDOHv1UoU0iVFfHCoYAz4QzBfTuurhB6lOkhyIosrNuZsNf9KSJgazb" alt="Best Black Friday Mac monitor deals: November 24" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Want to buy a new monitor for your Mac this Black Friday, here are the best deals we&#39;ve found so far on our favourite Mac compatible displays.</p></div>
            </div>
        </a>
        </Template></>;
}