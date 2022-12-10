import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Schweinsteiger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Schweinsteiger"/>
        <meta name="description" content="Trending News about Schweinsteiger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Schweinsteiger</h1>
            <Image width={800} height={500} src="https://www.tz.de/bilder/2022/12/09/91966632/30468516-schiesst-sich-goncalo-ramos-mit-seinen-wm-toren-zum-fc-bayern-1mfe.jpg" alt="Schweinsteiger"/>
            <h3>Recent News</h3>
            <a href='https://www.tz.de/sport/fc-bayern/fc-bayern-muenchen-transfer-news-cristiano-ronaldo-ersatz-goncalo-ramos-wm-portugal-zr-91966632.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo-Ersatz zum FC Bayern? Schweinsteiger vergleicht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7kk6QIE_dQFJZ1dWawiiB9KY6-_8rnGi8klJxHtQPmRCNqfiyQB6_iEs3uD1ySDlKGEr6JFMK" alt="Ronaldo-Ersatz zum FC Bayern? Schweinsteiger vergleicht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goncalo Ramos ist nach seinem WM-Hattrick in aller Munde. Der FC Bayern sucht einen Stürmer. Bastian Schweinsteiger vergleicht den Portugiesen mit Podolski.</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/esther-sedlaczek-foto-bastian-schweinsteiger-live-tv-ard-katar-sportschau-wm-2022-91966579.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM in Katar: Fans feiern Sedlaczek-Foto – mal ohne Schweinsteiger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPWhmtczbFvTSzJ3z8klH8rCtn4HY0NltvnCg3IQfcDjyPGkMn4alw1pdLg16dBK0gDio2ZwnH" alt="WM in Katar: Fans feiern Sedlaczek-Foto – mal ohne Schweinsteiger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einer der Lichtblicke der WM in Katar: Esther Sedlaczek bringt die Zuschauer nicht nur vor dem TV zum Lachen, sondern auch ihre Fans auf Instagram.</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/der_sport_tag/So-viel-Talent-Schweinsteiger-benennt-seinen-WM-Favoriten-article23774369.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der Sport-Tag: &quot;So viel Talent!&quot;: Schweinsteiger benennt seinen WM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2gc-M6nQp70N7wwLS7CnQgps5j5sF9Z47W9j50506JwD3Unt7gmU56bex-VhPM6nOZqDLFaxY" alt="Der Sport-Tag: &quot;So viel Talent!&quot;: Schweinsteiger benennt seinen WM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Weltmeister Bastian Schweinsteiger hält Brasilien für den Top-Favoriten bei der Fußball-WM in Katar. &quot;Ich denke, Brasilien ist das Team,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}