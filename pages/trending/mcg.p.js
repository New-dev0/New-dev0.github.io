import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MCG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MCG"/>
        <meta name="description" content="Trending News about MCG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MCG</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1343652_1296x729.jpg" alt="MCG"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/cricket/story/_/id/34963935/ind-vs-zim-t20-world-cup-2022-india-expand-their-knowledge-bank-mcg-venue-final'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India expand their knowledge bank of the MCG, the venue for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYnKVA-vRfnn00mYL3mBoMVeiAzW6sEtjV6je5QTog3bHF4zHYg_2H101aFye1ndxxB1ZxNB7t" alt="India expand their knowledge bank of the MCG, the venue for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They now have the experience of putting up a total at this ground, to add to their know-how of chasing one from the Pakistan game | ESPN.in.</p></div>
            </div>
        </a>
        </Template></>;
}