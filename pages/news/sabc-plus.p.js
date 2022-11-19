import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SABC Plus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SABC Plus"/>
        <meta name="description" content="Trending News about SABC Plus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SABC Plus</h1>
            <Image width={800} height={500} src="https://s5.cdn.memeburn.com/wp-content/uploads/2019/08/sabc-logo.jpg" alt="SABC Plus"/>
            <h3>Recent News</h3>
            <a href='https://memeburn.com/2022/11/sabc-launches-sabc-plus-new-streaming-app-platform/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC launches SABC Plus, new streaming app platform</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlZIMZ_JJ-6c6TvJNxg55v2bKGoWS_9ML0vXhEtABYBDN783LXrGoLpoZtd0EMZDRtQnwAErAB" alt="SABC launches SABC Plus, new streaming app platform" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Television channels SABC 1, SABC 2, SABC 3 and other sports channels will also come part of the package.</p></div>
            </div>
        </a><a href='https://www.citizen.co.za/entertainment/tv/sabc-plus-streaming-app-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC Plus: Broadcaster catches up to digital era with streaming app</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1_ijnVk6HylOQSz5jXhqI7q3-Twd6urg55XUf0UqKny6KRBE422RgmfKcF8TDg3n0Z2eAVcZa" alt="SABC Plus: Broadcaster catches up to digital era with streaming app" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From SABC&#39;s TV channels to radio stations and Qatar 2022 coverage, here&#39;s what to expect. The South African Broadcasting Corporation (SABC) launched its OTT (&nbsp;...</p></div>
            </div>
        </a><a href='https://htxt.co.za/2022/11/telkomone-is-now-sabc-plus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TelkomONE is now SABC Plus - Hypertext</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4w0T1j1QkTWOOcy6RidnwlqWsHLEG9hsjNnGcGUEbfBUvjy1zvL8xGlrk2MXXNkxfYXgLtnSM" alt="TelkomONE is now SABC Plus - Hypertext" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This streaming service is free to access and use and will feature a variety of live sport including 29 FIFA World Cup 2022 matches. SABC Plus still offers the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itweb.co.za/content/G98YdqLGED3MX2PD'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SABC powers up streaming as TV landscape changes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPoRXp_n4Zhx-kyW8DbLcLWF-dk8herhtB5kFhd3t6WYaNNjcxrU1b-L7yhjEHTGzkxkcs863p" alt="SABC powers up streaming as TV landscape changes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The public broadcaster officially launches its SABC+ app, amid the move to streaming rather than linear TV.</p></div>
            </div>
        </a><a href='https://www.sabcnews.com/sabcnews/launch-of-sabc-plus-an-important-milestone-for-the-public-broadcaster-mxakwe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Launch of SABC Plus an important milestone for the public ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAb4scirtIkOI7GbVOlX0Rx5BHysvOoHczbX7ACbHsUFApyz1jR6K9KhCk2Ecqo0073GFtha_g" alt="Launch of SABC Plus an important milestone for the public ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SABC&#39;s GCEO, Madoda Mxakwe, speaks at the launch of the public broadcaster&#39;s SABC Plus streaming app in Sandton, 17 November 2022. The SABC Group Chief&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}