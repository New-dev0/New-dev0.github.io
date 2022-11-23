import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kylian Mbappé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kylian Mbappé"/>
        <meta name="description" content="Trending News about Kylian Mbappé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kylian Mbappé</h1>
            <Image width={800} height={500} src="https://cdn.unitycms.io/images/4DzC73FsK1PAqbmDyUIAvH.jpg?op=ocroped&val=1200,1200,818,882,0,182&sum=83A9yLKbusQ" alt="Kylian Mbappé"/>
            <h3>Recent News</h3>
            <a href='https://www.berneroberlaender.ch/kylian-mbappe-ist-auch-der-stuermer-der-katarer-772259560736'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Frankreich an der WM 2022: Kylian Mbappé ist auch der Stürmer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrM43zGBfuQ-_Pa7ovEKQ7S1OEJrSZAmeNrYt464fIiCusGMQHrj7pIwDigmbJ4sgLc443YC4p" alt="Frankreich an der WM 2022: Kylian Mbappé ist auch der Stürmer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kylian Mbappé jagt Rekorde von Lionel Messi und Pelé. Vor allem aber freut sich Katar an jedem seiner Tore. Foto: Friedemann Vogel (Keystone).</p></div>
            </div>
        </a>
        </Template></>;
}