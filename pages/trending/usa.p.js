import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Usa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Usa"/>
        <meta name="description" content="Trending News about Usa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Usa</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/08/4b973171743268185515ea0e99f6af181667929039695426_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Usa"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/news/world/usa-highest-roller-coaster-will-give-you-some-excitement-as-its-ride-on-top-of-mountain-2255266'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: अगर आपको ऊंचाई से डर नहीं लगता तो अमेरिका का रोलर कोस्टर होश ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvX1pEjFHE2JDLdB85wznrIuEGC8H3BiwDhIkAM6227Ok-0A0MyaeHYc735Y94ymvm_brm2PRW" alt="Watch: अगर आपको ऊंचाई से डर नहीं लगता तो अमेरिका का रोलर कोस्टर होश ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Highest Roller Coaster: अगर आपको पता चले कि आप समुद्र तल से 7 हजार फीट की ऊंचाई पर किसी पहाड़ की&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}