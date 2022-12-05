import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>El Salvador</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,El Salvador"/>
        <meta name="description" content="Trending News about El Salvador" /></Head><Template>
            <h1 style={{fontSize: "30"}}>El Salvador</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2873742/v6e649a/og_image.jpg" alt="El Salvador"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2873733'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kampf gegen Banden - El Salvador: 10.000 Einsatzkräfte umstellen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlwLLiDjOM1TGxOUTUW4FqNvKoBhHJz07vH1ks9l0yjGHDPvSTrLv9EZIc0NWcqZdhZiP9Z830" alt="Kampf gegen Banden - El Salvador: 10.000 Einsatzkräfte umstellen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rund 8500 mit Sturmgewehren bewaffnete Soldaten und 1000 Polizisten fahndeten in der Großstadt nach Bandenmitgliedern. Militärfahrzeuge und Polizeiautos fuhren&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bietigheimerzeitung.de/inhalt.kriminalitaet-el-salvador-kaempft-gegen-banden.ffbd152e-69c2-4a39-8df6-190e2f7f7904.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kriminalität - El Salvador kämpft gegen Banden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTh1JEDYdBRDe2gzv_2lRhFbwnCWzFM_3OOY3Vo_ir0Ljag_FqZ2kMtuCvACqCB9pY0We1RPFl-" alt="Kriminalität - El Salvador kämpft gegen Banden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei einem Großeinsatz gegen die mächtigen Jugendbanden in El Salvador haben Sicherheitskräfte die Stadt Soyapango abgeriegelt und nach Gangmitgliedern&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/ausland/el-salvador-10-000-soldaten-und-polizisten-gehen-gegen-banden-vor-a-b6e763b9-3c44-49d4-be57-ec3a204fdae4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kryptostaat: 10.000 Soldaten und Polizisten gehen gegen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIQA96u7FogYnaciAsULrKsZth7yXQcOuckJMl_h69eKN2FW0FtXRfQjEYXbzxi-8PnwS80SEQ" alt="Kryptostaat: 10.000 Soldaten und Polizisten gehen gegen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In El Salvador gilt seit März Ausnahmezustand. Nun hat der populistische Präsident Nayib Bukele die Sicherheitskräfte in die Stadt Soyapango geschickt,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/politik/krieg-gegen-banden-stadt-in-el-salvador-von-10-000-soldaten-umzingelt-18509501.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stadt von Soldaten umzingelt: Stadt in El Salvador von 10.000 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Stadt von Soldaten umzingelt: Stadt in El Salvador von 10.000 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El Salvadors populärer Präsident Nayib Bukele lässt im Kampf gegen die Banden ganze Städte von der Armee belagern. Seit März wurden...</p></div>
            </div>
        </a><a href='https://www.deutschlandfunk.de/ganze-stadt-abgeriegelt-im-kampf-gegen-bandenkriminalitaet-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>El Salvador - Ganze Stadt abgeriegelt im Kampf gegen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPWS8lNDIZtUkjQlkxTVtoWGtzEJr2wOfm9yg-MKtMO6ZBxgSA_t8mZ9VzD70EP5_CdK9-Z6d_" alt="El Salvador - Ganze Stadt abgeriegelt im Kampf gegen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Menschen in El Salvador leiden seit langem unter der Gewalt von Banden, die ganze Stadtviertel kontrollieren und kriminelle Geschäfte wie Drogenhandel&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}