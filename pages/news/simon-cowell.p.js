import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Simon Cowell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Simon Cowell"/>
        <meta name="description" content="Trending News about Simon Cowell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Simon Cowell</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/11/simon-cowell-bike-accident_HP.jpg?quality=75&strip=all&w=1200" alt="Simon Cowell"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/11/18/simon-cowell-still-rides-electric-bike-without-helmet-after-accidents/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Simon Cowell still rides electric bike without helmet after multiple ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDQDaMXeW0jjDG3ybnKTPpqu7agpdTEx5w5QvNYzaZmpOHuUhXD8acn60_w7JY4f9dAyDsuZMd" alt="Simon Cowell still rides electric bike without helmet after multiple ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;American Idol&quot; alum Simon Cowell is still riding his electric bike despite the August 2020 accident that left him with a metal rod inserted in his back.</p></div>
            </div>
        </a>
        </Template></>;
}