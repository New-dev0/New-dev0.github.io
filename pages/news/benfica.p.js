import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benfica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benfica"/>
        <meta name="description" content="Trending News about Benfica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benfica</h1>
            <Image width={800} height={500} src="https://editorial.uefa.com/resources/027b-16af6d18b6ca-545ecd680974-1000/sporting.jpeg" alt="Benfica"/>
            <h3>Recent News</h3>
            <a href='https://www.uefa.com/uefafutsalchampionsleague/news/027b-16964c133342-a084ff6afc96-1000--elite-round-latest-benfica-palma-into-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Futsal Champions League elite round latest: Anderlecht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJfee5LqtU-cVlUv8U6-vROURs4mASPhPtQRhGc2JINpx79_uFUF9qptY7RjCQUsCdWUx1-brr" alt="UEFA Futsal Champions League elite round latest: Anderlecht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anderlecht pipped holders Barça to reach their first finals and debutants Mallorca Palma Futsal are also through along with Benfica and Sporting CP.</p></div>
            </div>
        </a>
        </Template></>;
}