import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ціна правди</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ціна правди"/>
        <meta name="description" content="Trending News about Ціна правди" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ціна правди</h1>
            <Image width={800} height={500} src="https://cdn.abo.media/upload/article/yf1duovmlkcnlbwfapzo.jpg" alt="Ціна правди"/>
            <h3>Recent News</h3>
            <a href='https://kavun.city/articles/251967/cina-pravdi-vidomij-film-pro-golodomor-v-ukraini-viklali-u-vilnij-dostup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Ціна правди»: відомий фільм про Голодомор в України виклали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYre3yIxQNGhtzc1pgj3GWburQYS65HiptKdavqiPrU7FY-UXYL3ISTnjZoISjoBxSp9lOCL05" alt="«Ціна правди»: відомий фільм про Голодомор в України виклали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомила студія Film.UA Group і опублікувала фільм на своєму YouTube-каналі. Фільм «Ціна правди» розповідає історію репортера Ґарета Джонса та показує&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}