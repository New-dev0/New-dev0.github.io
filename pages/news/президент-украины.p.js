import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Президент Украины</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Президент Украины"/>
        <meta name="description" content="Trending News about Президент Украины" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Президент Украины</h1>
            <Image width={800} height={500} src="https://s.ura.news/images/news/upload/smm/2022/11/19/facebook_2f689cf101b9dbd6d8b01e89b0b71652.jpg" alt="Президент Украины"/>
            <h3>Recent News</h3>
            <a href='https://ura.news/news/1052604405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский пообещал миру скорые сюрпризы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmln9BQIfWET3_7ofbcas1CtYcEt7HCOqrplpLLHezzjkQJrmk6L3omVOZ-BeRhjVJye2YN_8d" alt="Зеленский пообещал миру скорые сюрпризы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украина готовит для мира значительные международные события. С таким заявлением выступил президент Украины Владимир Зеленский. Только на URA.RU.</p></div>
            </div>
        </a>
        </Template></>;
}