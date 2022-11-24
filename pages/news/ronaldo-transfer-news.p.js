import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo transfer news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo transfer news"/>
        <meta name="description" content="Trending News about Ronaldo transfer news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo transfer news</h1>
            <Image width={800} height={500} src="https://i2-prod.liverpool.com/incoming/article25584418.ece/ALTERNATES/s1200/0_GettyImages-1244950712.jpg" alt="Ronaldo transfer news"/>
            <h3>Recent News</h3>
            <a href='https://www.liverpool.com/liverpool-fc-news/features/cristiano-ronaldo-career-liverpool-transfer-25584350'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo transfer decision saw Liverpool bosses &#39;almost ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKfwd80KgWuTzH7Wq8PMkfmVBzf_D6cPQvPqwAHEScSLmOwll6K_mqbX-PbXi-_B1dkS6fPPXs" alt="Cristiano Ronaldo transfer decision saw Liverpool bosses &#39;almost ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Liverpool assistant Phil Thompson explained in 2020 how the club came very close to signing Cristiano Ronaldo, only for him to end up at Manchester&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}