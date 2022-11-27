import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taken</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taken"/>
        <meta name="description" content="Trending News about Taken" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taken</h1>
            <Image width={800} height={500} src="https://www.rp-assets.com/images/news/2022/10/09/117159-medium.jpeg" alt="Taken"/>
            <h3>Recent News</h3>
            <a href='https://www.racingpost.com/news/bryony-frost-taken-to-hospital-with-suspected-broken-collarbone-after-fall/589919'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bryony Frost taken to hospital with suspected broken collarbone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlDCsu9n7hamoS2OWuxarLP3rK9aNnK0c_0RLUKOfEyP30TI_KS_0xR9TkNDPc2zeiWVk-O-Hh" alt="Bryony Frost taken to hospital with suspected broken collarbone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saturday: Bangor. Bryony Frost was taken to Wrexham Hospital with a suspected broken collarbone, according to Sky Sports Racing, after Sir Psycho fell&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}