import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mercedes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mercedes"/>
        <meta name="description" content="Trending News about Mercedes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mercedes</h1>
            <Image width={800} height={500} src="https://images.news18.com/tamil/uploads/2022/11/Electric-Mercedes-Benz-EQB-SUV-166757170516x9.jpg" alt="Mercedes"/>
            <h3>Recent News</h3>
            <a href='https://tamil.news18.com/news/automobile/mercedes-benz-eqb-electric-suv-offers-a-range-of-419-km-on-a-single-charge-831020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ஒரு முறை சார்ஜ் செய்தால் 419 கிமீ ரேஞ்ச் வழங்கும் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-j2N67VvZh9HGBHeAyXu-ouu-8fGraLWtjnECxy8bVp2-_yV4sBxarJ3SKX8bAb1qFH_jhOgi" alt="ஒரு முறை சார்ஜ் செய்தால் 419 கிமீ ரேஞ்ச் வழங்கும் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mercedes-Benz EQB Electric SUV | டிசம்பர் 2022-க்குள் Mercedes-Benz India EQB -ஐ அறிமுகப்படுத்த தயாராகி வருகிறது&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}