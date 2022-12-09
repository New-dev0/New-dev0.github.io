import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ups</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ups"/>
        <meta name="description" content="Trending News about Ups" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ups</h1>
            <Image width={800} height={500} src="https://african.business/wp-content/uploads/sites/3/2022/12/mc-accelerator-logo.png" alt="Ups"/>
            <h3>Recent News</h3>
            <a href='https://african.business/2022/12/finance-services/pitch-ready-empowering-africas-start-ups-with-financial-savvy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pitch ready: Empowering Africa&#39;s start-ups with financial savvy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCBCd6lK29eS89ZZ6Em2gMBKqFhT6hy4lbTMbgG3z6lISsL6hlfwU_ktDZLBDxHDfUy3PYCkl_" alt="Pitch ready: Empowering Africa&#39;s start-ups with financial savvy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Securing finance is a major barrier to small-business growth, writes MultiChoice Group CEO, Calvo Mawela. To be truly empowered, SMEs need the skills to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}