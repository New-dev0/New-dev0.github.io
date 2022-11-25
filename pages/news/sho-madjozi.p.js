import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sho Madjozi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sho Madjozi"/>
        <meta name="description" content="Trending News about Sho Madjozi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sho Madjozi</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7765/f7b1c1208c574c1d8e3110ce38e73811.jpg" alt="Sho Madjozi"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/truelove/exclusive/sho-madjozi-returns-to-music-after-a-break-fame-is-not-really-easy-for-someone-with-my-personality-20221123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sho Madjozi returns to music after a break – &#39;Fame is not really easy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQED4nOQ2g2UjvB0m44-iZrrsfuG03ZEXp3buoXgM_t5aP3k19ioLJRLlysyBsH7cBtVxKIdLFu" alt="Sho Madjozi returns to music after a break – &#39;Fame is not really easy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The musician has returned to the scene and now features in TV commercials and has just dropped a new single.</p></div>
            </div>
        </a><a href='https://www.ecr.co.za/music/sho-madjozi-performs-at-Madison-Square-Garden/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sho Madjozi wows crowd in New York City</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnKMqsZIbXdzysVOGqxD0YuaUjT6eL7Zz58gL_xCjOfRjiH_B82s7fj4M3yKNsweclHWF96Gbf" alt="Sho Madjozi wows crowd in New York City" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The successful singer got to perform at Madison Square Garden in front of thousands of fans!</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/23/sho-madjozi-s-world-class-performance-with-stromae-blows-us-fans-away'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sho Madjozi&#39;s world-class performance with Stromae blows US fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJF0XYHM_W_6XRmdhWT_GYyGAwlsf2dfdmA_vHDb_vp_dPw6x27Zl8cn_-w5Vbtc5oJD9t_0kj" alt="Sho Madjozi&#39;s world-class performance with Stromae blows US fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Upon releasing her new single titled Toro ft DDG, the South African rapper and songwriter, Sho Majozi took the stage by storm when she performed on one of the&nbsp;...</p></div>
            </div>
        </a><a href='https://grungecake.com/sho-madjozi-toro-ddg/articles/93710'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa&#39;s Sho Madjozi returns with sizzling Amapiano single ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxKpPE_PI19s_D2DXrJcA0c4l0KokU4HcTZOseKFiQvsaWDUyMo1zVpaNL79gYN1THHmRbW5G6" alt="South Africa&#39;s Sho Madjozi returns with sizzling Amapiano single ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South African star Sho Madjozi is back with a peppy Dance single &#39;Toro&#39;, featuring international star DDG. The four-minute-long Amapiano record is in toto&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}