import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stolz und Vorurteil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stolz und Vorurteil"/>
        <meta name="description" content="Trending News about Stolz und Vorurteil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stolz und Vorurteil</h1>
            <Image width={800} height={500} src="https://www.maz-online.de/resizer/jEf3gPWnPTfGCGMwJTWEbZ6a2sI=/1200x675/filters:quality(70):watermark(assets.rndtech.de/maz/watermark-plus.svg,50,50,0)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/HEJUTD6ZXC3HVBUKJ5IGQT4ZDM.jpg" alt="Stolz und Vorurteil"/>
            <h3>Recent News</h3>
            <a href='https://www.maz-online.de/lokales/potsdam/eine-version-von-jane-austens-stolz-und-vorurteil-feiert-im-potsdamer-hans-otto-theater-premiere-D25Y6JHHXXSG4F3ELBPMQ36IZI.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eine Version von Jane Austens Stolz und Vorurteil feiert im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaLIE3WEhNn6aJist1CWeBm_mUGi3LcyOxRVhfpoyxCA2V0C6xfDXiDGhL-_MQqEXMLjIhVGKb" alt="Eine Version von Jane Austens Stolz und Vorurteil feiert im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die „Stolz und Vorurteil“- Neuinterpretation von Isobel McArthur wird am 25. November um 19:30 Uhr erstmals in Potsdam aufgeführt.</p></div>
            </div>
        </a>
        </Template></>;
}