import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Biathlon Hochfilzen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Biathlon Hochfilzen"/>
        <meta name="description" content="Trending News about Biathlon Hochfilzen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Biathlon Hochfilzen</h1>
            <Image width={800} height={500} src="https://www.spox.com/de/sport/mehrsport/wintersport/2211/Bilder/herrmann-1200.jpg" alt="Biathlon Hochfilzen"/>
            <h3>Recent News</h3>
            <a href='https://www.spox.com/de/sport/mehrsport/wintersport/2212/Artikel/sprint-der-frauen-in-hochfilzen-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Denise Herrmann-Wick gewinnt Sprint in Hochfilzen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPS9SmgaBQQCLoSV5ZkZEvr2OP7EslYFglHFoXFgs-60mqLrDbNVlvBbxwhf_M-0JEPl_J3TH5" alt="Biathlon: Denise Herrmann-Wick gewinnt Sprint in Hochfilzen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olympiasiegerin Denise Herrmann-Wick hat zwei Monate vor der Heim-WM in Oberhof ein dickes Ausrufezeichen gesetzt. Die 33-Jährige gewann den Weltcup-Sprint&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/biathlon/live-der-damen-sprint-in-hochfilzen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE | Der Damen-Sprint in Hochfilzen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_nQg74RUGZFlrKkXRLE2N4xiIa7cpuc6xysEyspYwmmKV4Y7xw_2wghDQ0LgBnR50dV-VtRqf" alt="LIVE | Der Damen-Sprint in Hochfilzen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dorothea Wierer hat mit dem zweiten Platz in der Verfolgung von Kontiolahti ein dickes Ausrufezeichen gesetzt. Kann die 32-Jährige beim Sprint in Hochfilzen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/biathlon/biathlon-sprint-frauen-hochfilzen-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Denise Herrmann-Wick bleibt cool und siegt im Sprint in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaet5sdqssXDizxRtfSN166MF32mCuA0Sr6CMEXyO4xjAWqcRRJH1yVs0gdaUdjiaTOiCdfNmZ" alt="Biathlon: Denise Herrmann-Wick bleibt cool und siegt im Sprint in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Optimaler Start in die Biathlon-Woche in Hochfilzen: Denise-Herrmann-Wick hat nach einem perfekten Rennen den Sprint gewonnen.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/sport/wintersport-biathlon-weltcup-hochfilzen-herrmann-wick-104.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herrmann-Wick gewinnt Sprint in Hochfilzen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzD7HHPPZ7m0tt2UFrymJ-Da3GToI4K5InBo-dzPS1p2Vxd9OLLrNSoNeXbWRJFanUpVTyk7nW" alt="Herrmann-Wick gewinnt Sprint in Hochfilzen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denise Herrmann-Wick hat den Weltcup-Sprint in Hochfilzen für sich entschieden. Die übrigen DSV-Starterinnen verpassten die Top 20.</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/wintersport/biathlon/weltcup-in-hochfilzen-biathlon-im-liveticker-sprint-der-frauen_id_180438864.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon im Liveticker: Denise Herrmann-Wick gewinnt Sprint in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoUbuq-LOVbf2criFolkCren4gwd6nbAX7nVrT_8u0jFeYXsJ_ew1cDzPdp8ABtRmNj58VPMUE" alt="Biathlon im Liveticker: Denise Herrmann-Wick gewinnt Sprint in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim zweiten Biathlon-Weltcup des Winters im österreichischen Hochfilzen hat Denise Herrmann-Wick ihren ersten Saisonsieg eingefahren.</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/biathlon--denise-herrmann-wick-gewinnt-sprint-in-hochfilzen-32990118.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Denise Herrmann-Wick gewinnt Sprint in Hochfilzen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMAI0kpR-lLsxXB9D5EeXjEUaoOe1vD3Y_wT3I22035HEIioF5l9RVSF7xZxfB1dc-hhlDFnMH" alt="Biathlon: Denise Herrmann-Wick gewinnt Sprint in Hochfilzen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hochfilzen - Denise Herrmann-Wick hat zum Auftakt des Biathlon-Weltcups im österreichischen Hochfilzen den Sprint gewonnen und mit ihrem neunten.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/sport/wintersport/biathlon-herrmann-wick-gewinnt-sprint-in-hochfilzen-18519849.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathletin Herrmann-Wick siegt: Hochfilzen auf der Lieblingsliste</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdo3yaivm87o_5kqRu5ARI3-nm-4EtamRQd_MuZvr9JWR9lKfpizb1ht0PmLthlXGRceiiXAgy" alt="Biathletin Herrmann-Wick siegt: Hochfilzen auf der Lieblingsliste" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dank fehlerfreiem Schießen und starker Laufleistung gewinnt Denise Herrmann-Wick den Biathlon-Sprint. Als „außerirdisch gut“ bezeichnet...</p></div>
            </div>
        </a>
        </Template></>;
}