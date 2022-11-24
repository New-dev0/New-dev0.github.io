import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Blue Lock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Blue Lock"/>
        <meta name="description" content="Trending News about Blue Lock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Blue Lock</h1>
            <Image width={800} height={500} src="https://image.jeuxvideo.com/medias-md/166924/1669235939-4737-card.jpg" alt="Blue Lock"/>
            <h3>Recent News</h3>
            <a href='https://www.jeuxvideo.com/news/1675399/qu-est-ce-que-blue-lock-le-manga-dont-tout-le-monde-parle-apres-la-victoire-du-japon-a-la-coupe-du-monde.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qu&#39;est-ce que Blue Lock, le manga dont tout le monde parle après la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDlCeaSmACLisbr7X2lb6WoHFOyt5WrzGRdDD0bAjFiyK78MtoAAO0Vf4_kqjneIego8Vu9h0J" alt="Qu&#39;est-ce que Blue Lock, le manga dont tout le monde parle après la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le lancement d&#39;une Coupe du Monde est souvent l&#39;occasion pour sortir FIFA du placard ou regarder à nouveau l&#39;intégrale de l&#39;anime Olive et Tom…</p></div>
            </div>
        </a>
        </Template></>;
}