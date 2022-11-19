import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michelle Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michelle Williams"/>
        <meta name="description" content="Trending News about Michelle Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michelle Williams</h1>
            <Image width={800} height={500} src="https://people.com/thmb/JDmJJjcncvjdinQcq4YRO92C6Gg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x464:1001x466)/michelle-williams-thomas-kail-tout-d50d3841b4944c41a89ed8343058986e.jpg" alt="Michelle Williams"/>
            <h3>Recent News</h3>
            <a href='https://people.com/parents/michelle-williams-excited-daughter-matilda-get-younger-kids-into-christmas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michelle Williams Is &#39;Excited&#39; Daughter, 17, Will Help Get Her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk48Cs4ir8RJMona6NW7Zl5g23oPyoFLtReQ0EElb1dwLLr_FV88xg0YsbbDR_eaDYMQ6d7Cd0" alt="Michelle Williams Is &#39;Excited&#39; Daughter, 17, Will Help Get Her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michelle Williams opened up about life as a mom of three and how her teenage daughter Matilda helps out.</p></div>
            </div>
        </a>
        </Template></>;
}