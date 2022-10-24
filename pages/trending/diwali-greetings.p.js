import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Diwali greetings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Diwali greetings"/>
        <meta name="description" content="Trending News about Diwali greetings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Diwali greetings</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1662434457.jpg?utm_source=fb" alt="Diwali greetings"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/national/israeli-president-herzog-extends-diwali-greetings-to-indian-counterpart-news-232152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Israeli President Herzog Extends Diwali Greetings To Indian ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLHPIaMuAMhJDN-BxFpuDUImCn4fR_WHH219PTgD-lsfDUqrAgh6Q0WPy5iHL6wAoVDhuDgFar" alt="Israeli President Herzog Extends Diwali Greetings To Indian ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Issac Herzog expressed Diwali greetings to their Indian counterpart Droupadi Murmu and his Indian friends on Sunday.</p></div>
            </div>
        </a><a href='https://english.sakshi.com/news/andhrapradesh/ap-cm-ys-jagan-extends-diwali-greetings-163401'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AP CM YS Jagan Extends Diwali Greetings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJSlhHIGr_LNqddCqNk14y4tYuX4v7gNOGo4WwM_34RT1wpWV9zq3yrIKxudkMuPJGg1GoA5AK" alt="AP CM YS Jagan Extends Diwali Greetings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the occasion of Diwali festival, Andhra Pradesh Chief Minister YS Jagan Mohan Reddy has extended his warm greetings to the people of AP and to all&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}