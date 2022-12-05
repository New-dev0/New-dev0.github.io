import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Faith</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Faith"/>
        <meta name="description" content="Trending News about Faith" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Faith</h1>
            <Image width={800} height={500} src="https://media.premiumtimesng.com/wp-content/files/2021/02/femi-aribisala.jpg" alt="Faith"/>
            <h3>Recent News</h3>
            <a href='https://www.premiumtimesng.com/opinion/568870-article-of-faith-learning-obedience-by-femi-aribisala.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Article of Faith: Learning Obedience, By Femi Aribisala</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJ-rmFkG2xGqlEwt5F15Fkewz08RvchyIiWQA1ws3hvFVoa0PyTxH5T-qEyuVT88yjzbS4EHQx" alt="Article of Faith: Learning Obedience, By Femi Aribisala" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A child should obey his parents and not his parents&#39; reasons or logic. A child should be trained to be subject to authority. ... What men call knowledge is&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}