import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nasty C</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nasty C"/>
        <meta name="description" content="Trending News about Nasty C" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nasty C</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7679/5b42507277f242e394e1e48b2b214b2f.jpg" alt="Nasty C"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/you/celebs/local/nasty-c-on-flying-sas-flag-at-the-mtv-emas-im-just-going-with-the-vibe-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasty C on flying SA&#39;s flag at the MTV EMAs: &#39;I&#39;m just going with the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRsBNSKDo2YnSfpL2q1maKiyYXlaZqIcwe_r72TDHKsG3BAgS2VYTVYZdU0zPkDhHmo610xxXF" alt="Nasty C on flying SA&#39;s flag at the MTV EMAs: &#39;I&#39;m just going with the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soweto-born rapper Nsikayesizwe David Junior Ngcobo, popularly known as Nasty C, lit up the stage at the MTV Europe Music Awards (EMAs) this past weekend&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dispatchlive.co.za/lifestyle/entertainment/2022-11-15-watch-nah-we-inside-my-g-nasty-c-shines-at-the-emas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH | &#39;Nah, we inside my G&#39; — Nasty C shines at the EMAs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJMRmMeoCimDsugI9l4pIyHVTlmsTPPSWwJL-2oZn4fLa40Xw3FkCMVEJwa7p4qnBemvijO_2N" alt="WATCH | &#39;Nah, we inside my G&#39; — Nasty C shines at the EMAs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rapper flew the South African flag high on the international stage when he closed off the show performing &#39;Power (Remember Who You Are)&#39; alongside&nbsp;...</p></div>
            </div>
        </a><a href='https://briefly.co.za/entertainment/celebrities/145774-nasty-c-mzansi-roasts-rapper-photoshopping-height-snaps-british-artist-stormzy-biggest-scam/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasty C: Mzansi Roasts Rapper for Photoshopping Height in Snaps ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSto40vOM3cyMpv19DXzDIs7jMg0jjxWrHYRCfHCBqEmkPegxs_NsfdOtYXSeofpjn-yrNTpoce" alt="Nasty C: Mzansi Roasts Rapper for Photoshopping Height in Snaps ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nasty C is being roasted for photoshopping his height in two snaps of himself with British artist Stormzy. Nasty and the international star met at the MTV&nbsp;...</p></div>
            </div>
        </a><a href='https://sahiphopmag.co.za/2022/11/watch-nasty-c-steals-the-spotlight-with-live-performance-at-mtv-ema-awards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch! Nasty C Steals The Spotlight With Live Performance At MTV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSt9_3_jZ8fQNKwlwu508yyNg8R7JQqA-oj3KCttnebIeU0xkuCo-rkBJHhqCgKRgFTF_ZQBaly" alt="Watch! Nasty C Steals The Spotlight With Live Performance At MTV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nasty C has enjoyed a successful year and being the first South African artist to perform live at the reputable MTV EMA Awards will always be a moment he will&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}