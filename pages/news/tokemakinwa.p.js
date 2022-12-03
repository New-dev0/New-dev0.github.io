import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tokemakinwa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tokemakinwa"/>
        <meta name="description" content="Trending News about Tokemakinwa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tokemakinwa</h1>
            <Image width={800} height={500} src="https://www.bellanaija.com/wp-content/uploads/2022/12/toke.jpeg" alt="Tokemakinwa"/>
            <h3>Recent News</h3>
            <a href='https://www.bellanaija.com/2022/12/toke-makinwa-chic-canadian-tuxedo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Toke Makinwa Shows Us The Chicest Way to Style Denim on Denim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQt_s_SqSH_dfPGIYRT_42MslW1z5_-d1AcD0CMwW15zGbM0Jx7kky049qrXq5uslGsYdzLkLGT" alt="Toke Makinwa Shows Us The Chicest Way to Style Denim on Denim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Toke Makinwa never misses an opportunity to flaunt her impeccable style, whether stealing the red carpet with head-turning looks or flexing on the &#39;gram&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}