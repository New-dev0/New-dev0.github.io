import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>HAL Share Price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,HAL Share Price"/>
        <meta name="description" content="Trending News about HAL Share Price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>HAL Share Price</h1>
            <Image width={800} height={500} src="https://images.moneycontrol.com/static-hindinews/2022/11/HAL-16-Nov-770x433.jpg" alt="HAL Share Price"/>
            <h3>Recent News</h3>
            <a href='https://hindi.moneycontrol.com/news/markets/hotstocks/hal-share-price-are-up-what-should-investors-do-888351.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HAL Share Price: क्या 2600 रुपए का टारगेट छू लेंगे शेयर</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSZ_g4XY6uh2O1Ee5wswzEu_w184CewkKKoW033e9a50-wDNg2FNkFTN7kPc24UcJHzeKN9bCh" alt="HAL Share Price: क्या 2600 रुपए का टारगेट छू लेंगे शेयर" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HAL Share में आज तेजी देखने को मिल रही है, ऐसे में Market Expert Prakash Gaba को दिख रहा है Stock 2600 तक जाते&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}