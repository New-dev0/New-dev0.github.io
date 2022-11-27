import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nike</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nike"/>
        <meta name="description" content="Trending News about Nike" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nike</h1>
            <Image width={800} height={500} src="https://www.reuters.com/resizer/UvYnSNWAmwi7RXZgkMZPtb-yjCw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KTFBWWTQERO6LD2B3GNSLN3H74.jpg" alt="Nike"/>
            <h3>Recent News</h3>
            <a href='https://www.reuters.com/business/retail-consumer/shares-nike-adidas-could-score-world-cup-2022-11-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shares of Nike and Adidas could score at the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUCI8vaN5bUp18Vl7665ZEiv0D81Hh7DrCyVH2HiHjm-kStwiZt06DC5VgHySnFXGGgfZ8y9cl" alt="Shares of Nike and Adidas could score at the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As 32 teams compete for the World Cup in Qatar, Adidas and Nike also hope their shares can score.</p></div>
            </div>
        </a><a href='https://sneakernews.com/2022/11/25/nike-zoom-vomero-5-photon-dust-chrome-gridiron-sail-fd0884-025/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbfj9NJtEOWrGzlChwo38tm2fDpHiI-jaz4jdRCrXXF15oGny3xhpz8XhnFKy-8LDA3JrRa8ww" alt="Nike Zoom Vomero 5 &quot;Photon Dust&quot; FD0884-025 | SneakerNews.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thanks to co-signs from A-COLD-WALL* back in 2018, the sneaker has enjoyed a cult-like following amongst fashion enthusiasts over the last handful of years,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.the-sun.com/sport/6763587/football-boots-world-cup-nike-adidas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nike football boots dominate the World Cup with 49 per cent of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQu94XAl1TzyTzPf4uj7fl8tKChOAHV0ACsAPXnLii9I6yNTJkFaeI8cGbUbdUtikMaHL48d2cA" alt="Nike football boots dominate the World Cup with 49 per cent of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IT&#39;S not just the countries that are battling for World Cup supremacy, the boot manufacturers are at it too!Nike and Adidas have long led the way when.</p></div>
            </div>
        </a>
        </Template></>;
}