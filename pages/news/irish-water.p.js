import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Irish Water</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Irish Water"/>
        <meta name="description" content="Trending News about Irish Water" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Irish Water</h1>
            <Image width={800} height={500} src="" alt="Irish Water"/>
            <h3>Recent News</h3>
            <a href='https://westernpeople.ie/2022/11/22/irish-water-criticised-as-estates-await-repairs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish Water criticised as estates await repairs</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Irish Water criticised as estates await repairs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A local councillor has called on Irish Water to help Mayo County Council to take two estates into its charge.</p></div>
            </div>
        </a>
        </Template></>;
}