import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jharana Das Odia actress</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jharana Das Odia actress"/>
        <meta name="description" content="Trending News about Jharana Das Odia actress" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jharana Das Odia actress</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/12/02/1600x900/Jharana_Das_1669977629741_1669977642172_1669977642172.jfif" alt="Jharana Das Odia actress"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/entertainment/others/veteran-odia-film-actor-jharana-das-dies-at-77-president-murmu-remembers-her-outstanding-contribution-to-films-101669976609399.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veteran Odia film actor Jharana Das dies at 77, President Murmu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRlJ6plbckA8WeqvgMujXrBPtcU0Zs02IRRZTsdoMtZ6a4Iia4nEyvwqhtglOMhlWrl-lnRGR9" alt="Veteran Odia film actor Jharana Das dies at 77, President Murmu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veteran actor Jharana Das died at the age of 77. She was known for films such as Shree Jagannath, Nari, Adinamegha, Hisabnikas, Pujafula, Amadabata,&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/entertainment/odia-actor-jharana-das-dies-at-77-top-films-and-major-achievements-of-jaydev-puraskar-recipient-10056178'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odia Actor Jharana Das Dies At 77; Top Films And Major ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnRGmszpRtZoLQV-mG1CPNS9PBQUAm2BzTLbE6dJEmoPoi0cjJOTstxpv4qmJcAfbn5wzTDsFf" alt="Odia Actor Jharana Das Dies At 77; Top Films And Major ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veteran Odia actress Jharna Das passes away at the age of 77 at her home in Cuttack.</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/entertainment/celebrities/veteran-odia-film-actress-jharana-das-dies-at-77-president-droupadi-murmu-condoles-2022-12-02-828160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veteran Odia film actress Jharana Das dies at 77, President ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1MpqniMwtZqJF_OJnqtg9tKSZc8VANXBVk4PPTR0eIVjci0eeMFcMiv-Zdy7JWVlM02C4zvTf" alt="Veteran Odia film actress Jharana Das dies at 77, President ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Droupadi Murmu expressed grief over the death of Jharana Das, saying the veteran actor would always be remembered for her contribution to Odia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/india/who-is-jharana-das-the-legendary-actress-whose-death-president-droupadi-murmu-condoled-article-95939030'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Jharana Das, the &#39;legendary actress&#39; whose death President ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSJK21mimJRW1Dm3tGQAdqa_HQLaDubfv4VTxHu93_bLJinupEwVnFXKKXaBzWdqF4v87y2X65" alt="Who is Jharana Das, the &#39;legendary actress&#39; whose death President ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jharana Das, a post in Odisha film world, has passed away. President Droupadi Murmu and several other leaders condoled the death of the legendary actress&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/movies/odia-actress-jharana-das-no-more-president-droupadi-murmu-pays-tribute-6520663.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odia Actress Jharana Das No More, President Droupadi Murmu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaSHBZAjfuT35RpcjucuUsmV9du5jErn0RBbRlLYglileE_5YaIelodbxC7439ow2Jjpv6mbbx" alt="Odia Actress Jharana Das No More, President Droupadi Murmu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veteran Odia actress Jharana Das passed away on Friday, December 2 at the age of 77. Reportedly, Das has been suffering from old age ailments for quite a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}