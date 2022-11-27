import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lukas Resetarits</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lukas Resetarits"/>
        <meta name="description" content="Trending News about Lukas Resetarits" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lukas Resetarits</h1>
            <Image width={800} height={500} src="https://www.noen.at/image/1920x1080-c-jpg/4273574/PUR48_PB_LukasResetarits_Online_c_Nadja_Buechler_05.jpg" alt="Lukas Resetarits"/>
            <h3>Recent News</h3>
            <a href='https://www.noen.at/purkersdorf/kabarett-lukas-resetarits-erzaehlt-geschichten-aus-dem-leben-pressbaum-redaktionsfeed-lukas-resetarits-kabarett-redaktion-344921287'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lukas Resetarits erzählt Geschichten aus dem Leben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyt5QBMAFfJZzp31_0B46NVc5CxA-U735-2wNeCd0zUzu_zCi0NAdgHLB--h-KDRhagriJeuUM" alt="Lukas Resetarits erzählt Geschichten aus dem Leben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kabarettist und Schauspieler Lukas Resetarits gastierte mit seinem Programm “Über Leben” am Freitag im Stadtsaal Pressbaum.</p></div>
            </div>
        </a>
        </Template></>;
}