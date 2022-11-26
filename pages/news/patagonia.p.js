import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Patagonia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Patagonia"/>
        <meta name="description" content="Trending News about Patagonia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Patagonia</h1>
            <Image width={800} height={500} src="https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/11/25161635/ande-it-01-e1669393033924.jpg" alt="Patagonia"/>
            <h3>Recent News</h3>
            <a href='https://explorersweb.com/italians-battle-fierce-patagonian-weather-torre-egger/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italians Battle Fierce Patagonia Weather on Torre Egger ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZRMZeOgCV12uiU8S6rcJ5H74a1acY-e1NCr8RxCm1ha-XD__4RQUW37voCJA9rI5sd6rT0SXW" alt="Italians Battle Fierce Patagonia Weather on Torre Egger ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veteran Patagonia climber Ermanno Salvaterra is trying for the fifth time to open a route on the peak&#39;s west face.</p></div>
            </div>
        </a>
        </Template></>;
}