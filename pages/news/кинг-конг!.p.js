import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кинг-Конг!</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кинг-Конг!"/>
        <meta name="description" content="Trending News about Кинг-Конг!" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кинг-Конг!</h1>
            <Image width={800} height={500} src="https://ixbt.online/live/topics/preview/00/03/61/84/5883d18a6a.jpg" alt="Кинг-Конг!"/>
            <h3>Recent News</h3>
            <a href='https://www.ixbt.com/live/movie/troll-ot-netlix-pozornyy-king-kong-iz-norvegii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фильм «Тролль»: у норвежцев есть свой Кинг-Конг! / Кино и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8JzNRfyX4-gZ0MDU2vblo4qe-ZTR3p4mQPQVUsRfMF_k2YzfAlUzSHcMHWws-2kNqgxxwp3w9" alt="Фильм «Тролль»: у норвежцев есть свой Кинг-Конг! / Кино и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня на обзоре 8-и ватная умная светодиодная лампочка Xiaomi Yeelight Smart LED Bulb W3 с модулем Wi-FI, возможностью управления через приложение со&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}