import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UGG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UGG"/>
        <meta name="description" content="Trending News about UGG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UGG</h1>
            <Image width={800} height={500} src="https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2022-11/black700.jpg" alt="UGG"/>
            <h3>Recent News</h3>
            <a href='https://www.femina.fr/article/black-week-la-paire-de-ugg-que-tout-le-monde-s-arrache-sur-la-toile-est-en-solde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Week : la paire de UGG que tout le monde s&#39;arrache sur la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDh5R9AXaZ_mFdMux7VTqU-DhNYZfXN2YIw1HiwRugWiWXuauj9ZLpEJ1NHhCPinMccRzTpSB3" alt="Black Week : la paire de UGG que tout le monde s&#39;arrache sur la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Encore une preuve que la mode est un éternel recommencement… Longtemps considérées comme des paires de chaussures « ringardes », les UGG reviennent en...</p></div>
            </div>
        </a>
        </Template></>;
}