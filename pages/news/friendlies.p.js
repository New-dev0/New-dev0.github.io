import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Friendlies</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Friendlies"/>
        <meta name="description" content="Trending News about Friendlies" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Friendlies</h1>
            <Image width={800} height={500} src="https://www.sportsmole.co.uk//b.smimg.net/22/02/640x480/ghagab.jpg" alt="Friendlies"/>
            <h3>Recent News</h3>
            <a href='https://www.sportsmole.co.uk/football/switzerland/international-friendlies-predictions/feature/thursdays-international-friendlies-predictions-including-portugal-vs-nigeria_499805.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thursday&#39;s International Friendlies predictions including Portugal vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxCzZ_X6d_cf05ggzKy0-zrSlqT9o9SCEbI5QIjZgjrSUvK9w2i5iuYGRm8ouAdzhyXGrdqG3t" alt="Thursday&#39;s International Friendlies predictions including Portugal vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports Mole provides score predictions and previews for all of today&#39;s International Friendlies fixtures, including Portugal vs. Nigeria.</p></div>
            </div>
        </a>
        </Template></>;
}