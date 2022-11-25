import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Casemiro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Casemiro"/>
        <meta name="description" content="Trending News about Casemiro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Casemiro</h1>
            <Image width={800} height={500} src="https://bilder2.n-tv.de/img/incoming/crop23739497/1861323250-cImg_16_9-w1200/imago1019088379h.jpg" alt="Casemiro"/>
            <h3>Recent News</h3>
            <a href='https://www.n-tv.de/sport/fussball-wm/Im-Reich-von-Neymar-regiert-Koenig-Casemiro-article23739483.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warum Brasilien WM-Favort ist: Im Reich von Neymar regiert König ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTodGyA3-l8WyRTVeaMj6SA3rM3Dq-TLopEe-P_ukrHrHk-sSC0wwVxT23US7vS-gvQ17PaXNoN" alt="Warum Brasilien WM-Favort ist: Im Reich von Neymar regiert König ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>20 Jahre nach dem letzten WM-Titel schickt sich Brasilien wieder an, um den berühmten Pokal mitzuspielen. Seitdem Neymar im Mittelfeld viele Freiheiten von&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}