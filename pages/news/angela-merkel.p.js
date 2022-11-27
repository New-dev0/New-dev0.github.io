import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Angela Merkel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Angela Merkel"/>
        <meta name="description" content="Trending News about Angela Merkel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Angela Merkel</h1>
            <Image width={800} height={500} src="https://img.nzz.ch/2022/11/26/e61398b3-c27c-4c3d-b048-b7d8bbf366df.jpeg?width=1200&height=675&fit=bound&quality=75&auto=webp&crop=3648,2052,x0,y190&wmark=nzz" alt="Angela Merkel"/>
            <h3>Recent News</h3>
            <a href='https://www.nzz.ch/international/altkanzlerin-angela-merkel-verteidigt-ihre-russland-politik-ld.1714211'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altkanzlerin Angela Merkel verteidigt ihre Russland-Politik</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTee8eXtdkQcll2Yn_CzgkFgb7qmnnfCeJlYKgoTNQwF_n8SCfSBawCUBrLWjz4EZP-NgjV5hK" alt="Altkanzlerin Angela Merkel verteidigt ihre Russland-Politik" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die ehemalige Bundeskanzlerin sass dem «Spiegel» für seine aktuelle Titelgeschichte Modell. Dabei wird deutlich: Zweifel und Selbstkritik sind auch neun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bunte.de/royals/britisches-koenigshaus/angela-merkel-sie-ist-ein-fan-der-queen-und-von-the-crown.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angela Merkel: Sie ist ein Fan der Queen – und von &quot;The Crown&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRo6HOGkloVqJEX1z6SsUYMT1I2PWSI5rVPKyVmxNKhOHy51dsYFPLeNcXYWdOHbEWI7HIgkGbi" alt="Angela Merkel: Sie ist ein Fan der Queen – und von &quot;The Crown&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altkanzlerin Angela Merkel galt immer als ruhige Realpolitikerin. Doch wenn es um die Queen geht, gerät sie ins Schwärmen. | BUNTE.de.</p></div>
            </div>
        </a><a href='https://www.focus.de/kultur/stars/angela-merkel-sie-ist-ein-fan-der-queen-und-von-the-crown_id_180407187.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angela Merkel entpuppt sich als „The Crown“-Fan – wegen Queen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQC9b0ddYpeiIMXpk0xF0ngZxFsNuutUIGxEKNDodNUcfOJ1xzUI_S0SQXykaAx7tuAPe0cFl9_" alt="Angela Merkel entpuppt sich als „The Crown“-Fan – wegen Queen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altkanzlerin Angela Merkel galt immer als ruhige Realpolitikerin. Doch wenn es um Queen Elizabeth II. geht, gerät sie ins Schwärmen.</p></div>
            </div>
        </a><a href='https://www.merkur.de/politik/merkel-putin-ukraine-krieg-politik-russland-macht-amtszeit-besuch-zr-91938100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Merkel berichtet von Moment bei Putin-Besuch: „Gefühl war klar“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgeZsxm6dczoksPhQ8zZmTNtlDRNivFi2EDPIukCQ4-rjgEBsTkOWLi5f643HYIa17Z-3PjPVB" alt="Merkel berichtet von Moment bei Putin-Besuch: „Gefühl war klar“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angela Merkel traf in ihrer Amtszeit mehrfach auf Wladimir Putin. An ihren „Abschiedsbesuch“ in Russland erinnerte sich die Ex-Kanzlerin jetzt zurück.</p></div>
            </div>
        </a>
        </Template></>;
}