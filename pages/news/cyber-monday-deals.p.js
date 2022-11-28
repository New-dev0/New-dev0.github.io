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
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221127083329-underscored-cm-lead-img-early-deals-jpg.jpg?c=16x9&q=w_800,c_fill" alt="Cyber Monday deals"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/cnn-underscored/deals/best-cyber-monday-deals-2022-11-27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 510 best Cyber Monday 2022 deals to shop right now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgrBsYn2fTeDUGEVRWfiDm9XUiTJGCJ923TXrxmDVOQKbEu7pQBoDdir4JtSJMKik24YSB6962" alt="The 510 best Cyber Monday 2022 deals to shop right now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ve scoured the web and rounded up all the best Cyber Monday 2022 deals from all the best brands.</p></div>
            </div>
        </a><a href='https://www.caranddriver.com/shopping-advice/g42026413/cyber-monday-automotive-deals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>17 Amazing Cyber Monday Deals on Car and Truck Accessories ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXiFJt4RKVoWJdZ2TT6zkLbtfO1kEdUn1fqrkcBt-P1QgYuayclE-npEcr1yzxOtH-UaxCjPat" alt="17 Amazing Cyber Monday Deals on Car and Truck Accessories ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When it comes to parts, tools, and automotive gear, the deals don&#39;t end on Black Friday.</p></div>
            </div>
        </a><a href='https://decrypt.co/115675/crypto-cyber-monday-deals-for-your-holiday-list'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crypto Cyber Monday Deals for Your Shopping List</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhxiqcmUtl1-pbCGGiU9taoaZzfKXjsuFXItUzwRoLmUMbre45e3CdHA6qHluBkCT23dIu3Uhp" alt="Crypto Cyber Monday Deals for Your Shopping List" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hardware wallets are a popular option for securing digital assets, and blockchain intelligence firms are also offering deals.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/style/2021/11/the-best-early-black-friday-deals-to-shop-now-before-cyber-week-2022-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shop Cyber Monday Deals 2022: Nordstrom, Amazon, Hill House ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzjuxcJS5Xs93vQAmOFHVHqGD9-4-T4TXaiZrfkNcUSmMUknAPwKQGy3IdpiLUYVUmikQAoi5-" alt="Shop Cyber Monday Deals 2022: Nordstrom, Amazon, Hill House ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shop the best Cyber Monday deals and holiday sale events from brands and retailers like Nordstrom, Amazon, Alo, Hill House Home, Tory Burch, AWAY,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.epicurious.com/shopping/cyber-monday-nespresso-deal-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 18 Best Nespresso Cyber Monday Deals of 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkxkJh7MQr_0i8SookqdqIO9nXv9UQ-R2Ic3DZ4VZUmwJX3Z54XLGkw-QJbct9syFxcahDvy08" alt="The 18 Best Nespresso Cyber Monday Deals of 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Save up to 50% on an Original or Vertuoline Nespresso coffee maker and espresso machine with these Nespresso Cyber Monday Deals.</p></div>
            </div>
        </a><a href='https://www.today.com/shop/cyber-monday-2022-deals-under-25-t273049'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>34 best Cyber Monday 2022 deals under $25 live now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQYQu5SFyX3hRhNCdtGl2NMwgla9hyBQVhQCLC7mRuhhVGlJ5SIbcGdPDlVXBeQLX4DvFYBODV" alt="34 best Cyber Monday 2022 deals under $25 live now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>See the best Cyber Monday deals under $25, including Olaplex, Amazon Fire Stick, Apple, Yeti and Sephora. You won&#39;t want to miss out on these sales.</p></div>
            </div>
        </a><a href='https://www.zdnet.com/article/newegg-early-cyber-monday-deals-november-27-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 best early Newegg Cyber Monday deals 2022: Top PCs, laptops ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJcuyl3X_yu1PaDerykXtp4g40pSFaxv0g-jU0DmtFObIa_iOzImBZIhjFooNZU8Y-LW3hVYh4" alt="25 best early Newegg Cyber Monday deals 2022: Top PCs, laptops ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As a Black Friday and Cyber Monday staple, Newegg is offering loads of deals on everything from sound systems to gaming PCs that you can shop from today.</p></div>
            </div>
        </a><a href='https://www.cnn.com/cnn-underscored/deals/cyber-monday-kitchen-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Cyber Monday kitchen deals to shop before they&#39;re gone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTEzoCCv9anSTRAN0dUVeXeyT3UQG6AI0rPHBn0j_mbI7ctM4uNGuIiMVzYR1OfcAQN3ISDRhg" alt="The best Cyber Monday kitchen deals to shop before they&#39;re gone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;re looking to buy a brand new air fryer, blender or coffee maker this year, you won&#39;t want to skip these Cyber Monday kitchen deals.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/forbes-personal-shopper/2022/11/27/cyber-monday-appliance-sales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 20 Best Cyber Monday Appliance Deals To Upgrade Your ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbvl9RXzJYvkzrV0L7de-JzIT2tkP6XPyvLD7Di7Zo_uXruXn-Z9AE6oVc1er65R3uexgC8ZVe" alt="The 20 Best Cyber Monday Appliance Deals To Upgrade Your ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;ve been looking to replace an appliance or two, today&#39;s your best chance. Here are the best Cyber Monday appliance deals we&#39;ve seen so far.</p></div>
            </div>
        </a><a href='https://www.epicurious.com/expert-advice/kitchenaid-cyber-monday-deals-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Best Cyber Monday KitchenAid Deals (2022) on Stand Mixers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTH1TZlWG7cJXI98ljOF1kobr_-rgUe88fw3jioJevy-HIrfFIgWQIszMiM6QQ3OO5Xur549LFh" alt="The Best Cyber Monday KitchenAid Deals (2022) on Stand Mixers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Photo of a KitchenAid stand mixer whipping up merengue on a countertop next to a carton. Photo by Joseph De Leo.</p></div>
            </div>
        </a>
        </Template></>;
}