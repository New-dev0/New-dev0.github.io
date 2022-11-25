import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CHRIS Moyles girlfriend</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CHRIS Moyles girlfriend"/>
        <meta name="description" content="Trending News about CHRIS Moyles girlfriend" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CHRIS Moyles girlfriend</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/11/chris-moyles-evicted-jungle-im-778049244-2.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="CHRIS Moyles girlfriend"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/tv/9791381/chris-moyles-im-a-celebrity-girlfriend-outfit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Moyles leaves I&#39;m A Celebrity viewers open-mouthed with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlyIRXUs7OOuhlYK3_x-47qgf2EQQxuV2M0-qE-ftBRZS3cbt3FfuiAyfyoF5i-knVXjssRacW" alt="Chris Moyles leaves I&#39;m A Celebrity viewers open-mouthed with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHRIS Moyles left I&#39;m A Celebrity viewers open-mouthed with a bizarre comment about girlfriend&#39;s outfit.The radio DJ was the sixth celeb to leave the.</p></div>
            </div>
        </a>
        </Template></>;
}