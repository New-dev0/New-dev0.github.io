import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liverpool goalkeeper</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liverpool goalkeeper"/>
        <meta name="description" content="Trending News about Liverpool goalkeeper" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liverpool goalkeeper</h1>
            <Image width={800} height={500} src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/acquiadam/2022-11/OLSC-Kolhapur-2-15112022.jpg?itok=W1hnZebi" alt="Liverpool goalkeeper"/>
            <h3>Recent News</h3>
            <a href='https://www.liverpoolfc.com/news/we-love-you-liverpool-meet-official-lfc-supporters-club-kolhapur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We Love You Liverpool: Meet Official LFC Supporters Club... Kolhapur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7sPKohmrrpFUknB4NVB5Lj72RfLKi5GnM52GQ5FX7MvwJOR-qEVO8GHYFSO7CBAwOflu7IKO_" alt="We Love You Liverpool: Meet Official LFC Supporters Club... Kolhapur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool FC has more than 300 Official LFC Supporters Clubs (OLSCs) across 100 countries worldwide. The Reds&#39; fanbase is famous for its passion and loyalty,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}