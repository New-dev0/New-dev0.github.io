import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kizz Daniel latest song</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kizz Daniel latest song"/>
        <meta name="description" content="Trending News about Kizz Daniel latest song" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kizz Daniel latest song</h1>
            <Image width={800} height={500} src="https://www.myjoyonline.com/wp-content/uploads/2022/08/Kizz-Daniel.jpg" alt="Kizz Daniel latest song"/>
            <h3>Recent News</h3>
            <a href='https://www.myjoyonline.com/kizz-daniel-reveals-reason-for-naming-latest-single-odo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kizz Daniel reveals reason for naming latest single &#39;Odo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0o5OPeBN1p1UBh_-5z5gmnzopvFvZa6Ac62RtmDtYhi6Y_dsZ_M5I7UGfIBQ5KWs2C7wlmBaV" alt="Kizz Daniel reveals reason for naming latest single &#39;Odo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the hottest song on the planet now is &#39;Cough (Odo)&#39; by Nigerian singer Kizz Daniel. The singer has finally revealed why he chose a Ghanaian word for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}