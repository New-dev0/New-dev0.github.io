import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cyber Monday deals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cyber Monday deals"/>
        <meta name="description" content="Trending News about Cyber Monday deals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cyber Monday deals</h1>
            <Image width={800} height={500} src="https://cdn.thewirecutter.com/wp-content/media/2022/11/early-cyber-monday-deals-2048px-3x2-v3.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" alt="Cyber Monday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.consumerreports.org/money/sales-promotions/best-cyber-monday-deals-under-50-a1122226515/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Cyber Monday Deals Under $50</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Best Cyber Monday Deals Under $50" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday sales have officially begun, which means you can find some great offers on lower-cost items. And if you&#39;re looking to shop without spending too&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/wirecutter/money/best-early-cyber-monday-deals-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 120+ Best Early Cyber Monday Deals of 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShNhPY1lYbpCiZtU-OG8NIGCjYsfEnKYYVYxFEj85QXKbCublCWPLPF-lGAdbD7TIfwVPFFocQ" alt="The 120+ Best Early Cyber Monday Deals of 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday officially starts in a couple days, but the deals are already rolling in. Check out these early Cyber Monday deals on Wirecutter-approved&nbsp;...</p></div>
            </div>
        </a><a href='https://www.consumerreports.org/appliances/best-cyber-monday-deals-on-small-kitchen-appliances-a4673435238/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Cyber Monday Deals on Small Kitchen Appliances</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Best Cyber Monday Deals on Small Kitchen Appliances" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyber Monday brings plenty of savings on coffee makers, blenders, air fryers, and more, ranging from budget buys under $50 to deep discounts on high-end&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/amazon-cyber-monday-device-deals-start-now-fire-tv-kindle-and-more'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Cyber Monday Device Deals Start Now: Fire TV, Kindle and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyveX5b6Jp_29qofFtYvzrlzND6CSFVzohYv-YXbpFVSDyxEdX5gN467-vL1Mi_WPxnzF13pzd" alt="Amazon Cyber Monday Device Deals Start Now: Fire TV, Kindle and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon has already kicked off its Cyber Monday 2022 deals, and it&#39;s a fantastic time to save some cash on all your favorite things, but it&#39;s also a great&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gq.com/story/best-cyber-monday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>146 Early Cyber Monday Deals 2022: Home, Tech, Kitchen, Men&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpNm8V1ew8nEbU3xtGux36dTnsYr6i6jNAsrymZ-jTNjl1Za4W1DhjCouHY5j1LUoKDvioxt2_" alt="146 Early Cyber Monday Deals 2022: Home, Tech, Kitchen, Men&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Early Cyber Monday deals have already arrived. Shop our ultimate list of deals on menswear, tech, kitchen goods, and much, much more.</p></div>
            </div>
        </a><a href='https://www.tomsguide.com/deals/cyber-monday-gaming-laptop-deals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>9 best Cyber Monday gaming laptop deals you can&#39;t miss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRwir8BxyTtFTS-GiR3otagQNg_VDaqZKbCRwJluaPauzVvpOitJAQwyfywAlGMP-p9GLCB4aY" alt="9 best Cyber Monday gaming laptop deals you can&#39;t miss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve already seen gaming laptops with hundreds of dollars knocked off their price tags thanks to Black Friday, and several of those bargains are still&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sfgate.com/shopping/article/cyber-monday-luggage-deals-17612303.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday luggage deals: Save on Away, Monos and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7Ps57mNW-aaXyYuMX0T8Vr_Q135lYt5F1GebaxYUw6USnAn6Tiady1FKbpd7mlWFlOGWIBd8x" alt="Cyber Monday luggage deals: Save on Away, Monos and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re rounding up the best Cyber Monday luggage deals of 2022, including sales from Paravel, ROAM and others.</p></div>
            </div>
        </a><a href='https://nypost.com/article/best-cyber-monday-deals-sales-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>130 best early Cyber Monday 2022 deals to shop now: tech, clothing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRNV_eAC3Y7n_WMdxf7CQKUuESECJ-XUNAIip2hQrS58AH0BME5ScbMgytVdn13PDBseWLMKNt" alt="130 best early Cyber Monday 2022 deals to shop now: tech, clothing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We rounded up the best deals to shop for Cyber Monday 2022, including sales on tech, kitchen items, clothing, beauty, food and more.</p></div>
            </div>
        </a>
        </Template></>;
}