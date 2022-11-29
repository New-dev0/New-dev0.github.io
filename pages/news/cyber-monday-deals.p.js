import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cyber Monday Deals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cyber Monday Deals"/>
        <meta name="description" content="Trending News about Cyber Monday Deals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cyber Monday Deals</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221127092817-amazon-cyber-monday-lead.jpg?c=16x9&q=w_800,c_fill" alt="Cyber Monday Deals"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/cnn-underscored/deals/amazon-cyber-monday-deals-2022-11-28'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t miss your chance to shop these 224 Cyber Monday deals at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1uHo0-khYzp-2Q-epzLo3symF7b9W_OsfcvvNbfyrVVXeNqTjqavLrd7Z1EGC05KR9lw9cbqb" alt="Don&#39;t miss your chance to shop these 224 Cyber Monday deals at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday has arrived, and Amazon is offering great deals on everything you need for holiday gifting and beyond.</p></div>
            </div>
        </a><a href='https://www.kpbs.org/news/local/2022/11/28/cyber-monday-deals-lure-in-consumers-amid-high-inflation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday deals lure in consumers amid high inflation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMF59Et1WKyZCcxP_5s5oQCdTBTfkAgm5r3QtMAcWeicJeVf4NGP5fb_chArvTbXChfYnbWxgr" alt="Cyber Monday deals lure in consumers amid high inflation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Days after flocking to stores on Black Friday, consumers are turning online for Cyber Monday to score more discounts on gifts and other items that have&nbsp;...</p></div>
            </div>
        </a><a href='https://www.consumerreports.org/money/sales-promotions/best-cyber-monday-deals-on-electronics-a7418873480/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Cyber Monday Deals on Electronics</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Best Cyber Monday Deals on Electronics" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viewing on a mobile device? Click on the links below to skip to each section. • TVs • Headphones • Laptops • Tablets • Streaming Devices • Fitness Trackers and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/money/reviewed/2022/11/28/gifts-for-her-cyber-monday/10786190002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday deals on the top 10 Reviewed-approved gifts for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcV_p-R73XeZ_72lP80Lkj-Y_uCGt46P2LKvA5DCuSvKieivAaac78mQzUdFHhqb6t6vD4tW4E" alt="Cyber Monday deals on the top 10 Reviewed-approved gifts for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From the best cold brew coffeemaker of the year to the best foot massager, Reviewed&#39;s top favorite products are on sale right now for Cyber Monday.</p></div>
            </div>
        </a><a href='https://www.macrumors.com/2022/11/28/cyber-monday-apple-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Cyber Monday Apple Deals for AirPods, Apple TV 4K, iPad, More</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSqQRaY3HduEen62TodvayFn-E8IlQdomxur6aHsktMhw8Py90V3i75wZTZhSrThtBLdombKIG4" alt="Best Cyber Monday Apple Deals for AirPods, Apple TV 4K, iPad, More" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now that Black Friday is over, the internet&#39;s attention has shifted to Cyber Monday deals today. Of course, for Apple products this means that...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/wirecutter/money/best-cyber-monday-deals-under-100-2022-1128/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 130+ Best Cyber Monday Deals Under $100</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4sIvlUAWcMcBqRpF5LapaOLJqRuvs7Tz0psSCsPSSpa-m-U9lb1fYni8ELWfzks7lEjz4GRzf" alt="The 130+ Best Cyber Monday Deals Under $100" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These Wirecutter-approved Cyber Monday deals are all under $100—perfect for if you&#39;re ready to splurge but don&#39;t want to spend too much.</p></div>
            </div>
        </a><a href='https://www.wired.com/story/best-cyber-monday-backpack-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 Best Cyber Monday Backpack Deals (2022): Laptop Bags ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfdIu5GXMZrJJzualaJFy3Tu5fIx-HOw2hgys2rfgZFaOmziZAFYiPmGwyA6FEWWzt5fDLKRHR" alt="23 Best Cyber Monday Backpack Deals (2022): Laptop Bags ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These Cyber Monday backpack deals on laptop bags, camera slings, and totes will ease your hauls, no matter what you&#39;re carrying.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/cyber-monday-over-100-splurge-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Final hours for the best Cyber Monday deals over $100 to splurge on</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvY8jMbZWjlYaIokPUnusbcgS9XRPrLVevfBsLAPYyCYnctHWb0L2AT5FrwT_59LiHdczKZL0F" alt="Final hours for the best Cyber Monday deals over $100 to splurge on" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you buy our favorite high-end hair dryer, the Dyson Supersonic, you can get up to $125 of complimentary gifts such as a detangling comb and a presentation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.consumerreports.org/appliances/vacuum-cleaners/best-cyber-monday-deals-on-vacuums-a9849466306/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Cyber Monday Deals on Vacuums</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Best Cyber Monday Deals on Vacuums" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday 2022 is a great time to get the lowest prices of the year on vacuums from Tineco, Eufy, Dyson, Shark, and other great models that perform well&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/irobot-roomba-cyber-monday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best iRobot Roomba Cyber Monday deals to shop today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuBDcVcpAlDohUMygK4tTxym46YVSuzMvFCKSNSB7HWvWV0kbP7ee4_iCXB9_iWyjMbI548ATh" alt="The best iRobot Roomba Cyber Monday deals to shop today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thankfully, this self-cleaning robot vacuum is also heavily discounted right now. Here are the best deals you can find on the iRobot Roomba — for all that&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}