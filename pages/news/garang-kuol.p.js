import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Garang Kuol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Garang Kuol"/>
        <meta name="description" content="Trending News about Garang Kuol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Garang Kuol</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/12/05/00/65236411-0-image-a-7_1670199285632.jpg" alt="Garang Kuol"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/sport/football/article-11501367/Brother-Aussie-World-Cup-star-Garang-Kuol-taunts-authorities-game-against-Lionel-Messi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brother of Aussie World Cup star Garang Kuol taunts authorities ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1-XT3ZQYdEV5MF6nmkGCK95Gx6AQTt1-iuWpc4BoA_fkiUy6ihEwYoSaqr0qBlbwMKW59qWMf" alt="Brother of Aussie World Cup star Garang Kuol taunts authorities ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The brother of rising Australian soccer sensation Garang Kuol continues to taunt police months after skipping bail on fraud charges.</p></div>
            </div>
        </a>
        </Template></>;
}