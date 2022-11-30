import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rita Ora</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rita Ora"/>
        <meta name="description" content="Trending News about Rita Ora" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rita Ora</h1>
            <Image width={800} height={500} src="https://assets.vogue.com/photos/638639ec529bcebf7b6cf346/16:9/w_1280,c_limit/vogue_24-hours-with-taika-waitit.jpeg" alt="Rita Ora"/>
            <h3>Recent News</h3>
            <a href='https://www.vogue.com/article/24-hours-with-rita-ora-and-taika-waititi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Spends 24 Hours With Rita Ora and Taika Waititi in Düsseldorf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYU7iy6BIJFFVSe6abqp6IkXjLMReIbOwJyK1h9x5XQmA15vR-as69LNGjoEufheU01sUdb0lb" alt="Vogue Spends 24 Hours With Rita Ora and Taika Waititi in Düsseldorf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The couple were the hosts of this year&#39;s MTV European Music Awards.</p></div>
            </div>
        </a>
        </Template></>;
}