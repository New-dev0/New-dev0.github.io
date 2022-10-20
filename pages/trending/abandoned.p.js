import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Abandoned</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Abandoned"/>
        <meta name="description" content="Trending News about Abandoned" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Abandoned</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/6349c12e2476e78de0de06ab/0x0.jpg?format=jpg&width=1200" alt="Abandoned"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/garydrenik/2022/10/19/managing-abandoned-cartswhy-consumers-ditch-their-carts-and-how-to-reclaim-those-sales/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Managing Abandoned Carts—Why Consumers Ditch Their Carts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQP7zxm25OL8EI_EdZaeRJefEjv-WWZyzj5go2yW-BIbaA0KR9EYCkuFfWWwCrPOsm2hgvhGe3m" alt="Managing Abandoned Carts—Why Consumers Ditch Their Carts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holiday shopping season is nearly here, and the reality is that most online shopping carts become abandoned. The good news is that there are many ways to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}