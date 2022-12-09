import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Peru</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Peru"/>
        <meta name="description" content="Trending News about Peru" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Peru</h1>
            <Image width={800} height={500} src="" alt="Peru"/>
            <h3>Recent News</h3>
            <a href='https://www.ft.com/content/2057b224-7f84-4fd3-a0ad-9cd022f143f7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peru&#39;s ousted president appears in court after being charged with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjau8V6TIMbymkUX2A3cxkjuMT_kW2C9MPPy1pfZW_NELuJd5FR3ikiDsyCz6dJrW_bPjhdA0A" alt="Peru&#39;s ousted president appears in court after being charged with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll send you a myFT Daily Digest email rounding up the latest Americas politics &amp; policy news every morning. Peru&#39;s ousted president Pedro Castillo made his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-latin-america-63895507'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dina Boluarte: Peru&#39;s first female president</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQt7pLJFaqZfOXeuRk0Lush3IQGsXwEhlwSJuMOEvGj_S8eBpXzITJzycy4BQD0jkkGDzlZM1k9" alt="Dina Boluarte: Peru&#39;s first female president" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her background is very different to that from Ms Fujimori, the daughter of former President Alberto Fujimori, who grew up in the highest political circles in&nbsp;...</p></div>
            </div>
        </a><a href='https://morningstaronline.co.uk/article/b/leftwingers-condemn-the-coup-against-castillo-in-peru'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leftwingers condemn the coup against Castillo in Peru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNAYZUuxSUsqhsB-4BAlxHdJI0a4M-Ahhs6jk1eip9VzEEE4HNno7uFg7SqLSUkqLuPwaeUcwE" alt="Leftwingers condemn the coup against Castillo in Peru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LEFTWINGERS have condemned the coup against Peru&#39;s democratically elected president, Pedro Castillo, by lawmakers of the country&#39;s Congress on Wednesday.</p></div>
            </div>
        </a><a href='https://www.gov.uk/government/news/peru-uk-statement-on-presidential-appointment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peru: UK statement on Presidential appointment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYa-qdt4_TXn_fQfA0wjIRJdecVcpqKpT5g6KdA5tlxH8lBTwiG6n7lsEj2AlULFw4qGpD25kT" alt="Peru: UK statement on Presidential appointment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Foreign, Commonwealth and Development Office has issued a statement on Peru&#39;s new President.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/dec/08/peru-pedro-castillo-court-rebellion-conspiracy-charges'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peru&#39;s ousted president appears in court to face rebellion and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhqd_W-Bl-Pdt2WYJjqsQUg6mBjQH8P6sRamPGpZ-qJ38Ova8jZYcqA_2gvp1bC_24gLvk3Obq" alt="Peru&#39;s ousted president appears in court to face rebellion and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Court expected to decide if Pedro Castillo will be held in preliminary detention after failed attempt to close congress.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/08/americas/peru-president-elections-ouster-intl-latam/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peru&#39;s new president rules out elections, as predecessor Castillo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGS1dgkU66uybs1AtnJbYApX9ll5TRL2Md1i2pxz8NAz7Nfy0yL9-4W48dNvOigmv1OJns24DT" alt="Peru&#39;s new president rules out elections, as predecessor Castillo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Peru&#39;s new President Dina Boluarte ruled out early elections on Thursday, her first day in office following the dramatic ousting and arrest of her&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}