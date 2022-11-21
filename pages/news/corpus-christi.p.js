import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CORPUS CHRISTI</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CORPUS CHRISTI"/>
        <meta name="description" content="Trending News about CORPUS CHRISTI" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CORPUS CHRISTI</h1>
            <Image width={800} height={500} src="https://media.kiiitv.com/assets/KIII/images/bfff590a-9859-466c-9435-b1528c743e22/bfff590a-9859-466c-9435-b1528c743e22_1140x641.jpg" alt="CORPUS CHRISTI"/>
            <h3>Recent News</h3>
            <a href='https://www.kiiitv.com/article/life/shopping/visit-corpus-christi/503-d73643b7-972b-4542-9129-a936e9671410'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Tis the season to get warm and coasty! Visit Corpus Christi unveils ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZ-sNex99sT_BwrTKrM_3t37rdpx3W55vKtOB0af2asBuLVOAK7txMuWUKYjqfdVz8U2z4RbDf" alt="&#39;Tis the season to get warm and coasty! Visit Corpus Christi unveils ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CORPUS CHRISTI, Texas — Because nothing says &quot;Merry Tex-Mas&quot; quite like putting a palm tree decoration on your Christmas tree. America Segura and Stephen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}