import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pepe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pepe"/>
        <meta name="description" content="Trending News about Pepe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pepe</h1>
            <Image width={800} height={500} src="" alt="Pepe"/>
            <h3>Recent News</h3>
            <a href='https://www.skysportaustria.at/portugals-pepe-drittaeltester-feldspieler-der-wm-historie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugals Pepe drittältester Feldspieler der WM-Historie - Sky Sport ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUIe6-XEq2tZV01-SiIzMS9P8-h3cmG1Gvw_RMFxHNYvMWQdhCAE3kBwlAlFy6ECSUdJ251BPa" alt="Portugals Pepe drittältester Feldspieler der WM-Historie - Sky Sport ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugals Innenverteidiger Pepe hat bei der Endrunde in Katar ein kleines Stück WM-Geschichte geschrieben. Der Routinier stand beim Gruppenspiel am.</p></div>
            </div>
        </a><a href='https://www.bietigheimerzeitung.de/inhalt.portugal-in-gruppe-h-er-ist-ein-monster-routinier-pepe-vor-vierter-wm.6e144119-ab4b-4862-8639-c6277a0bef71.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal in Gruppe H - &quot;Er ist ein Monster&quot; - Routinier Pepe vor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_uXdlI_txpVipb2kEh3LbPrsG0z9ElEcFnW_rRjBgymvw35IgRK8Rx7phdH8P7eCEmIgpZq1-" alt="Portugal in Gruppe H - &quot;Er ist ein Monster&quot; - Routinier Pepe vor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit fast 40 Jahren könnte Portugals Pepe gegen Uruguay der drittälteste Feldspieler bei einer WM werden. Der Trainer hat ein zweifelhaftes Kompliment für&nbsp;...</p></div>
            </div>
        </a><a href='https://uzwil24.ch/articles/166481-nur-zwei-wm-spieler-waren-aelter-als-pepe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nur zwei WM-Spieler waren älter als Pepe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0rd47yzmjNqLIdBAoMK16a327Tg3AM4Dhc6V9tfYMfOGrp3AEXUBDktLjeirP_dZaU_-4WByk" alt="Nur zwei WM-Spieler waren älter als Pepe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WM-Gruppe H – Der portugiesische Verteidiger Pepe ist der drittälteste je an Fussball-Weltmeisterschaften eingesetzte Feldspieler.</p></div>
            </div>
        </a><a href='https://www.toponline.ch/news/sport/detail/news/pepe-drittaeltester-feldspieler-der-wm-geschichte-00199864/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pepe drittältester Feldspieler der WM-Geschichte</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pepe drittältester Feldspieler der WM-Geschichte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der portugiesische Verteidiger Pepe ist der drittälteste je an Fussball-Weltmeisterschaften eingesetzte Feldspieler.</p></div>
            </div>
        </a><a href='https://www.mopo.de/sport/wm2022/pepes-katar-debuet-mit-40-nur-zwei-wm-feldspieler-waren-aelter/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pepes Katar-Debüt mit 40 – nur zwei WM-Feldspieler waren älter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTHstavG9lDH2NEZfpUanm2PKUMLJizeReoqA8zAKfqdVqsPDB69Lg9bSZ_2bHfWMmixkU2rMi3" alt="Pepes Katar-Debüt mit 40 – nur zwei WM-Feldspieler waren älter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angesprochen auf seinen Routinier Pepe musste Portugals Nationaltrainer Fernando Santos kurz schmunzeln. „Er ist ein Monster“, sagte der 68-Jährige dann,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}