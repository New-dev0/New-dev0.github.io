import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bullet Train</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bullet Train"/>
        <meta name="description" content="Trending News about Bullet Train" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bullet Train</h1>
            <Image width={800} height={500} src="https://www.goldderby.com/wp-content/uploads/2022/07/bullet-train.jpg" alt="Bullet Train"/>
            <h3>Recent News</h3>
            <a href='https://www.goldderby.com/article/2022/box-office-bullet-train-100-million/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Box office: Brad Pitt&#39;s &#39;Bullet Train&#39; joins the $100 million club</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcmBRjRPFxjqBxnWNb2rL0MIlTkofBi7A7jHACZligCOWAUspA2LS_agm6U0XV5YxEYhGrleEr" alt="Box office: Brad Pitt&#39;s &#39;Bullet Train&#39; joins the $100 million club" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The summer movie season has been over for a few weeks now, but that doesn&#39;t mean summer movies are completely gone from theaters.</p></div>
            </div>
        </a>
        </Template></>;
}