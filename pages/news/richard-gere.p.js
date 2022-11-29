import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Richard Gere</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Richard Gere"/>
        <meta name="description" content="Trending News about Richard Gere" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Richard Gere</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/IRyWYTHdAGI1fTsMGX70bg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/0806a410-6f16-11ed-bfce-bcca4f3ab788" alt="Richard Gere"/>
            <h3>Recent News</h3>
            <a href='https://fr.style.yahoo.com/richard-gere-maladie-de-lyme-194006923.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richard Gere, victime de la maladie de Lyme : &quot;J&#39;avais l&#39;impression ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQBzKyN86qTAHiy5eNBF6yHP8UU7XPjkeN5--uHwFrZh9IEzxnyyA7xjjh21kblwMnYBfkx0hK" alt="Richard Gere, victime de la maladie de Lyme : &quot;J&#39;avais l&#39;impression ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;affiche de &quot;Pretty Woman&quot; au côté de Julia Roberts, ce lundi 28 novembre 2022 sur M6, Richard Gere témoigne d&#39;une longue carrière.</p></div>
            </div>
        </a>
        </Template></>;
}