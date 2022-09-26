import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spain</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spain"/>
        <meta name="description" content="Trending News about Spain" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spain</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/e3d42bfc604cf0fc00bf83ab528cb7ddb2e44470/0_94_2808_1685/master/2808.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=c204a05c895cb1b99c14a427b9ccbc12" alt="Spain"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/world/2022/sep/25/is-catalonia-still-dreaming-of-independence-from-spain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Catalonia still dreaming of independence from Spain?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2HGPQ4icgOMZj2y-8UydTx4eA-Yk0R2ih0-jrR4R1ZPV9ApNMTY7RFAOwzdJkeSUWceZ27j4z" alt="Is Catalonia still dreaming of independence from Spain?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five years after the showdown with Madrid, the region remains split over secession – and even those who back it are divided on how to achieve it.</p></div>
            </div>
        </a><a href='https://www.schengenvisainfo.com/news/spain-japan-sign-a-memorandum-of-cooperation-for-tourism/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain &amp; Japan Sign a Memorandum of Cooperation for Tourism ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBv1EpkZtxiBRFTd8QxJjs2tacNTL1SzJT-dD0fYkS6c-3G-IDUKJLvdiwaAIaFvG8ZU6i2_7P" alt="Spain &amp; Japan Sign a Memorandum of Cooperation for Tourism ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Commenting on the move, the Secretary of State for Tourism, Fernando Valdés, said that Japan is a preferential market for Spain. In addition, Japanese tourists&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}