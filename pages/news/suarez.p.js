import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suarez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suarez"/>
        <meta name="description" content="Trending News about Suarez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suarez</h1>
            <Image width={800} height={500} src="https://derivates.kicker.de/image/upload/c_crop,x_0,y_172,w_4000,h_2250/w_1200,q_auto/v1/2022/11/28/c1ce367c-b1d6-4572-9ba6-d35b52e05162.jpeg" alt="Suarez"/>
            <h3>Recent News</h3>
            <a href='https://www.kicker.de/eine-aera-geht-zu-ende-suarez-und-cavani-bleiben-blass-927575/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Ära von Luis Suarez und Edinson Cavani geht zu Ende</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjvhomTxwL59Nh916evvoQu4wIndXuTkQUkEfD2XGYmk1q29ljxT8haTEX6J5DlMT34MxgCnLg" alt="WM 2022: Ära von Luis Suarez und Edinson Cavani geht zu Ende" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay verlor nach lange verhaltener Leistung am Montag mit 0:2 gegen Portugal. Die Leistungen von Edinson Cavani und Luis Suarez zeigten: Eine Ära geht zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesspiegel.de/sport/vierte-wm-fur-suarez-godin-und-co-der-letzte-tango-fur-uruguays-legendares-quintett-8928391.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vierte WM für Suárez, Godín und Co.: Der letzte Tango für Uruguays ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREb2tIhdHhn_lbQtJfRllTt1nvg6H4ni0uNFZA2aJAnoONultvJRZVrTpT6795A555CMr66kQQ" alt="Vierte WM für Suárez, Godín und Co.: Der letzte Tango für Uruguays ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suárez, Cavani, Godín, Cáceres und Muslera spielen seit mehr als einem Jahrzehnt gemeinsam in der Nationalmannschaft. Gegen Portugal steht Uruguay bereits&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}