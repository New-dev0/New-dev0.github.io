import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Johnny Hallyday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Johnny Hallyday"/>
        <meta name="description" content="Trending News about Johnny Hallyday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Johnny Hallyday</h1>
            <Image width={800} height={500} src="https://images.rtl.fr/~c/2000v2000/rtl/www/1405238-johnny-hallyday-en-concert.jpg" alt="Johnny Hallyday"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.fr/culture/musique/johnny-hallyday-votez-pour-votre-chanson-preferee-sur-rtl-7900210747'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny Hallyday : votez pour votre chanson préférée sur RTL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRX2Z7Gym2Smqqb7L4rOwUgU2vHBNxUN7fWumtibJk5qDsteY2oko5njqf9lIUuVDIRk4hxNb2o" alt="Johnny Hallyday : votez pour votre chanson préférée sur RTL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À la veille de la commémoration du 5e anniversaire de la disparition de Johnny Hallyday, RTL vous propose une émission spéciale de &quot;Stop Ou Encore&quot; dimanche&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}