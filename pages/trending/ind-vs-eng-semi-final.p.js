import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ind vs eng semi-final</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ind vs eng semi-final"/>
        <meta name="description" content="Trending News about Ind vs eng semi-final" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ind vs eng semi-final</h1>
            <Image width={800} height={500} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/120800/120841.5.jpg" alt="Ind vs eng semi-final"/>
            <h3>Recent News</h3>
            <a href='https://www.espncricinfo.com/story/t20-world-cup-2022-2nd-semi-final-ind-vs-eng-from-amarnaths-heroics-to-a-bairstow-broadside-1344001'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs England at World Cups: From Amarnath&#39;s heroics to a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTc1Ar697gDe-4RzmpQm7OUG9QFbYoe7LofrehbdxfNTF_MRV-V1nJ-bp_OcqpVbazuvYKbzoPN" alt="India vs England at World Cups: From Amarnath&#39;s heroics to a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kapil Dev had already played the tournament&#39;s most evocative innings to rescue India from ignominy against Zimbabwe in Tunbridge Wells, but that match had been&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}