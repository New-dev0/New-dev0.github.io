import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prophet Muhammad</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prophet Muhammad"/>
        <meta name="description" content="Trending News about Prophet Muhammad" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prophet Muhammad</h1>
            <Image width={800} height={500} src="" alt="Prophet Muhammad"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cities/mumbai-news/naatiya-mushaira-when-hindus-sang-praises-of-prophet-muhammad-101665341165077.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Naatiya Mushaira: When Hindus sang praises of Prophet Muhammad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLFQIN975bfML-S1rRPOeA0QxXJ06bgEmO7q33NbwiYje3HJl7oFRhEfMykWrtFoHpBf0hutO6" alt="Naatiya Mushaira: When Hindus sang praises of Prophet Muhammad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai: From “La Illaha Il Allah&#39;&#39; to “Nabi Nabi Nabi Nabi&#39;&#39;, the hall resounded with invocations to Prophet Muhammad on Saturday evening | Mumbai news.</p></div>
            </div>
        </a>
        </Template></>;
}