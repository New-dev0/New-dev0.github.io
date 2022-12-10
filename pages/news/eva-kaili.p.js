import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eva Kaili</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eva Kaili"/>
        <meta name="description" content="Trending News about Eva Kaili" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eva Kaili</h1>
            <Image width={800} height={500} src="https://www.wienerzeitung.at/_em_daten/THEMENBILD/EU-WAHL/452547/_/1xZPOhT3Rx3h3lJnagDWVi1BptCKILeLlcqsAAXCPSW7h-qqAGGAW_KWH1JG334-O46CQrD7saTkwaqdkkOMQG_O6WpiYbjYF0lo9Hbq-yU3TWNDYEkTVR9Q/221209-2059-themenbild-eu-eu-wahl.jpg" alt="Eva Kaili"/>
            <h3>Recent News</h3>
            <a href='https://www.wienerzeitung.at/nachrichten/politik/europa/2171198-Vizepraesidentin-des-EU-Parlaments-festgenommen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vizepräsidentin des EU-Parlaments festgenommen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTrNVXr6hAacybrYYAbZlCAzjqFuXmRpPjC8sQjGXqZRzaeAB9WU1oFJSK39zFgFoywPAYXyAq" alt="Vizepräsidentin des EU-Parlaments festgenommen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Zuge der Ermittlungen wegen mutmaßlicher Korruption durch Katar ist nach Informationen der Nachrichtenagentur AFP die griechische Abgeordnete und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heute.at/s/korruptionsverdacht-eu-parlament-vize-eva-kaili-festgenommen-100243245'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Korruptionsverdacht – EU-Spitzenpolitikerin festgenommen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQItLx8hm9HItpZu51IVdGJnZ92F9U03jYEk_FzGhc0AtkjjeZpMkOrsnNdmiAo4h5qqStieQDo" alt="Korruptionsverdacht – EU-Spitzenpolitikerin festgenommen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hat WM-Land Katar die Europäische Union geschmiert? Im Rahmen der Ermittlungen wurde die griechische Vizepräsidentin des EU-Parlaments festgenommen.</p></div>
            </div>
        </a><a href='https://www.bild.de/news/ausland/news-ausland/liess-sich-eu-vize-eva-kaili-von-katar-schmieren-82208258.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ließ sich EU-Vize Eva Kaili von Katar schmieren? | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5h94tCw2_EQs1wkLfdwgrCMbZ7kC93gq2TSkdpk-yqM6FewENWvCBx6CsqX-FtiSh2QGfGP8L" alt="Ließ sich EU-Vize Eva Kaili von Katar schmieren? | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hat sich die Vizepräsidentin des EU-Parlaments Eva Kaili (44) von Katar schmieren lassen?</p></div>
            </div>
        </a><a href='https://www.rnd.de/politik/eu-parlament-korruptionsermittlungen-vizepraesidentin-eva-kaili-festgenommen-XVU65DO5JHDK565NZZL3KPFWEM.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EU-Parlament: Korruptionsermittlungen - Vizepräsidentin Eva Kaili ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBl4yvFSB-w5jjtQY1EB7_7LpQaVBhnSV9iiZcbbkA3-sRtjkj0r4xgyjjLXDAaIufoK6j4gAj" alt="EU-Parlament: Korruptionsermittlungen - Vizepräsidentin Eva Kaili ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durchsuchungen, Festnahmen und ein Parteiausschluss - das EU-Parlament steht im Fokus umfangreicher Korruptionsermittlungen belgischer Ermittler.</p></div>
            </div>
        </a>
        </Template></>;
}