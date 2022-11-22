import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nicki Aycox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nicki Aycox"/>
        <meta name="description" content="Trending News about Nicki Aycox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nicki Aycox</h1>
            <Image width={800} height={500} src="https://e3.365dm.com/22/11/1600x900/skynews-nicki-aycox-jeepers-creepers_5973417.jpg?20221121114903" alt="Nicki Aycox"/>
            <h3>Recent News</h3>
            <a href='https://news.sky.com/story/supernatural-actress-nicki-aycox-dies-aged-47-12752588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Supernatural actress Nicki Aycox dies aged 47</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpyf5w_IsSjoZi3-4N91CFVJTx7LSDDo5Qa4qtJERx6JLT2UPK4y7SOXOtai28gIskVSSEYbYx" alt="Supernatural actress Nicki Aycox dies aged 47" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Aycox played the first Meg Masters in Supernatural, with the show&#39;s creator Erik Kripke paying tribute to the actress and describing her as delivering&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/21/entertainment/nicki-aycox-obit/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicki Aycox, &#39;Supernatural&#39; actress, has died at age 47</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiKS36O5mvrn3BPjDRBGnUsw9V1GnvpkuCXX2QQSoSj4uTbUxIh-EwaxoGwwc5vsKBAbCZcvDI" alt="Nicki Aycox, &#39;Supernatural&#39; actress, has died at age 47" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Aycox, who played Meg Masters on the CW series &quot;Supernatural,&quot; died last week, her family announced.</p></div>
            </div>
        </a><a href='https://www.avclub.com/r-i-p-nicki-aycox-supernaturals-original-meg-masters-1849808930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R.I.P. Nicki Aycox, Supernatural&#39;s original Meg Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIOwTz2w3u1ObHk09tNFNc8AP0zr0Zf7TOisy7mlN4SGxZjeuJXyVbvwHTbo--9YwS32vL13kZ" alt="R.I.P. Nicki Aycox, Supernatural&#39;s original Meg Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Aycox, who died on November 16 at the age of 47, had been living with leukemia.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/nicki-aycox-died-supernatural-actor-dead-age-47-after-battle-with-leukemia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Supernatural&quot; actor Nicki Aycox has died at 47 after battle with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRZOA7sScyBruQOUNHjRk4yKKLxXRSrViJSwc2r6l2ckFDP-CnYrEHthSdkJU8oU-X0hrnSzoG" alt="&quot;Supernatural&quot; actor Nicki Aycox has died at 47 after battle with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actor Nicki Aycox, who played the original Meg Masters on &quot;Supernatural,&quot; died last week at the age of 47, her sister-in-law wrote on Facebook.</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/tv/story/2022-11-21/nicki-aycox-death-supernatural-eric-kripke'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicki Aycox death: &#39;Supernatural&#39; creator honors late actor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTY2a4xkkCXuksIG4gR4dxjc_yEeT4XRW0paCJ6iCrMbMVpEsAE7XzWsfGFSH_hyTEVWR3T_sbb" alt="Nicki Aycox death: &#39;Supernatural&#39; creator honors late actor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicki Aycox, who played Meg Masters on the CW series &#39;Supernatural,&#39; died last week. No cause of death was given, but she had been battling leukemia.</p></div>
            </div>
        </a>
        </Template></>;
}