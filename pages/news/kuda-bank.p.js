import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kuda bank</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kuda bank"/>
        <meta name="description" content="Trending News about Kuda bank" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kuda bank</h1>
            <Image width={800} height={500} src="https://nairametrics.com/wp-content/uploads/2022/09/FE6F632A-1C8B-4221-B1C5-792B90B7DD30-e1668357449539.jpeg" alt="Kuda bank"/>
            <h3>Recent News</h3>
            <a href='https://nairametrics.com/2022/11/13/from-regulatory-fines-for-insurers-to-kuda-banks-uk-expansion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corporate News Roundup: From the regulatory fines for insurers to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9YUP6AkjjZ3tskoGqm4sYfZT8FwTHL6rhekbXeDvPxx-gP7mXK42BbLbCcvzBaytJdG3H8HBg" alt="Corporate News Roundup: From the regulatory fines for insurers to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jumia&#39;s Co-CEOs&#39; exit: Like everyone else, we all at Nairametrics were surprised when we heard that the Co-founders of Jumia Group have suddenly stepped down as&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}