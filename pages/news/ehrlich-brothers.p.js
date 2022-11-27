import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ehrlich Brothers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ehrlich Brothers"/>
        <meta name="description" content="Trending News about Ehrlich Brothers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ehrlich Brothers</h1>
            <Image width={800} height={500} src="https://p6.focus.de/img/fotos/id_11408217/ehrlich-brothers.png?im=Crop%3D%280%2C37%2C1320%2C660%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=73c9ca59b507729a6da3af85accbcf117429fc263549350e3481312fb96f91f0" alt="Ehrlich Brothers"/>
            <h3>Recent News</h3>
            <a href='https://www.focus.de/kultur/kino_tv/tv-kolumne-ehrlich-brothers-live-show-mit-wenig-zauber-viel-illusion_id_180407827.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Ehrlich Brothers Live!“-Show mit viel Illusion, wenig Zauber</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJSbbiP_UdwM91DzKh1Y4GZqTcOFXtvT1lXUgHNdkd4dKsrk5s3N2L93Se8lnXLOWMqrAC5-hu" alt="„Ehrlich Brothers Live!“-Show mit viel Illusion, wenig Zauber" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jetzt singen sie auch noch: Die Ehrlich Brothers setzen in ihrer Show „Dream &amp; Fly“ zu wenig auf magische Momente und stattdessen auf flache Witze und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news.de/tv-aktuell/856612482/ehrlich-brothers-live-dream-und-fly-im-tv-und-online-im-live-stream-der-mediathek-bei-tv-now-folge-11-heute-sowie-aehnliche-sendungen/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ehrlich Brothers live! Dream &amp; Fly&quot; bei RTL im Stream und TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQEjHzi4tiiEoB-C3DxDRSMIIWmx0CuGA4BPtoiNkzbu1TMPnjaVUanmqtYxoBhVZ9G-_x3VUiG" alt="&quot;Ehrlich Brothers live! Dream &amp; Fly&quot; bei RTL im Stream und TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute, am 26.11.2022, gibt es die Zaubershow &quot;Ehrlich Brothers live! Dream &amp; Fly&quot; im TV zu sehen. Alle Infos zur heutigen Sendung, zum Live-Stream und der&nbsp;...</p></div>
            </div>
        </a><a href='https://schlagerfieber.de/ehrlich-brothers-live-dream-fly-am-samstag-bei-rtl/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ehrlich Brothers live! Dream &amp; Fly - am Samstag bei RTL!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTC1ouifpcnq7fl-t6aOkX9fQBK1reCu81M_jbkbHNgVvx3d-VPwcokoXCyZLxFz9W02MYPycip" alt="Ehrlich Brothers live! Dream &amp; Fly - am Samstag bei RTL!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Name ist dabei Programm, wenn Andreas und Chris Ehrlich mit einem echten Helikopter auf der Bühne landen. Die laufende Tournee der Ehrlich Brothers erinnert&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}