import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dietrich Mateschitz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dietrich Mateschitz"/>
        <meta name="description" content="Trending News about Dietrich Mateschitz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dietrich Mateschitz</h1>
            <Image width={800} height={500} src="https://www.sn.at/erbhof-streit-darf-die-mateschitz-kg-kaufen-41-103158714.jpg/size-1600x840/130.746.832" alt="Dietrich Mateschitz"/>
            <h3>Recent News</h3>
            <a href='https://www.sn.at/salzburg/chronik/erbhof-streit-darf-die-mateschitz-kg-kaufen-130746841'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erbhof-Streit: Darf die Mateschitz KG kaufen?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiHuA6FBFCIou7-PPKb5DAsaIWfJKw4HXfRh5MRgqoM5RM6qQZLsLkaTqywTH7o6xO7IyiLu4Q" alt="Erbhof-Streit: Darf die Mateschitz KG kaufen?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem Tod des Bauern gibt es Streit um die Zukunft des Hofs: Er soll an die Mateschitz KG verkauft werden - was der Stiefsohn des Bauern verhindern will.</p></div>
            </div>
        </a><a href='https://salzburg.orf.at/stories/3184876/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chronik: Umstrittener Erbhofverkauf an Mateschitz KG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx_y8X5ydS0ki8i7C6CHQSBqarbUGmXS-KjslYXQvMzmT-H-cT1Gp8OZZSdMLaFcqsLwcF1Zyh" alt="Chronik: Umstrittener Erbhofverkauf an Mateschitz KG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem Tod eines Bauern soll in Lessach (Lungau) ein mehrere hundert Jahre alter Bauernhof mit Wiesen, einem Wald und einem dazugehörigen Bioschlachthof&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}