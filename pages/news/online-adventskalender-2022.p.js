import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Online Adventskalender 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Online Adventskalender 2022"/>
        <meta name="description" content="Trending News about Online Adventskalender 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Online Adventskalender 2022</h1>
            <Image width={800} height={500} src="https://www.internetworld.de/image.php/1/6/8/5/9/0/4/Fairtrade_w900_h472.jpg?w=1200&h=630&fit=crop&q=80&s=9f9caa9b66d1b3528da92d0da5bb34f5" alt="Online Adventskalender 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.internetworld.de/marketing-praxis/schoensten-online-adventskalender-2022-2819457.html?ganzseitig=1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das sind die schönsten Online-Adventskalender 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkTh58tYRoVg3GENIn4F0lMtiKpLMJ-Xv0e0EUTq8DEwIliUwIJwOlIodsGZLvhjFNpBSksMPn" alt="Das sind die schönsten Online-Adventskalender 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Fairtrade Adventskalender bietet verschiedene Gewinne rund um fair hergestellte Produkte. ein laufender Weihnachtsmann. runnersworld.de. Bei Runners World&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}