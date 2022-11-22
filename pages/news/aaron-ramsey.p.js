import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aaron Ramsey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aaron Ramsey"/>
        <meta name="description" content="Trending News about Aaron Ramsey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aaron Ramsey</h1>
            <Image width={800} height={500} src="https://www.glasgowworld.com/jpim-static/image/2022/11/21/14/GettyImages-1442966321.jpg?width=1200&enable=upscale" alt="Aaron Ramsey"/>
            <h3>Recent News</h3>
            <a href='https://www.glasgowworld.com/news/what-is-the-aaron-ramsey-curse-fan-theory-of-ex-rangers-star-explained-as-wales-ready-for-fifa-world-cup-3701111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is the Aaron Ramsey curse? Fan theory of ex-Rangers star ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-w3avRsDEHUKUGwvTz11DJ_jtJ4i_EibK8o_fa5A1zEKadikFh3XYFCc8HZftgvb01GpZwVrx" alt="What is the Aaron Ramsey curse? Fan theory of ex-Rangers star ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A famous curse which surrounds ex-Arsenal and Wales international midfielder Aaron Ramsey is rearing its head once again as he readies to play for Wales&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}