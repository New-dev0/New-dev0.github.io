import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juranovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juranovic"/>
        <meta name="description" content="Trending News about Juranovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juranovic</h1>
            <Image width={800} height={500} src="https://cdn.resfu.com/media/img_news/josip-juranovic-of-croatia-in-action-during-the-fifa-world-cup-2022-round-of-16-soccer-match-between-japan-and-croatia--efe.jpg" alt="Juranovic"/>
            <h3>Recent News</h3>
            <a href='https://pt.besoccer.com/noticia/o-atletico-de-olho-no-juranovic-1210704'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O Atlético de olho no Juranovic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRas64wWFPOhpi1_obVJFg7p1OtB4VyE6HiCxKe6okFeAs0II0ZfspIoVIXrvO5GHQC-jdMkbu3" alt="O Atlético de olho no Juranovic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Atlético está interessado em Josip Juranovic. O defensor croata, que atualmente joga pelo Celtic, poderia ser uma das opções para apoiar o lateral direito&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}