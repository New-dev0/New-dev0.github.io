import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chelsea Manning</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chelsea Manning"/>
        <meta name="description" content="Trending News about Chelsea Manning" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chelsea Manning</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/11/03026700-6d3f-4868-86ed-76f30f0c8e9c/1200x630_gettyimages-1422971801.jpg" alt="Chelsea Manning"/>
            <h3>Recent News</h3>
            <a href='https://www.radiofrance.fr/franceinter/podcasts/l-invite-de-9h10/l-invite-de-sonia-devillers-du-mardi-15-novembre-2022-4642060'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea Manning, la lanceuse d&#39;alerte la plus connue au monde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYfOY6Agy_jMxcVjfbD1bCdd9LMtLHfNNIPB9X8nQ7MyEA2DUoDh63yocI9jvj41xUeJTflkHH" alt="Chelsea Manning, la lanceuse d&#39;alerte la plus connue au monde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La lanceuse d&#39;alerte, qui a fait fuiter des informations militaires américaines, publie « README.txt », ses mémoires chez Fayard. Elle est notre invitée.</p></div>
            </div>
        </a><a href='https://www.tf1.fr/tmc/quotidien-avec-yann-barthes/videos/invitee-chelsea-manning-lune-des-plus-grandes-lanceuses-dalerte-au-monde-raconte-son-histoire-05352128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea Manning, l&#39;une des plus grandes lanceuses d&#39;alerte au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGio0McXxVo9Ba-L--r0tzNbzS6h9oA9f6AHUNe32_HtKc1CPVHVBx7-fWc6Prx5S0H1mzeQsb" alt="Chelsea Manning, l&#39;une des plus grandes lanceuses d&#39;alerte au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Extrait ▶️ 12m13s - Chelsea Manning est l&#39;une des plus grandes lanceuses d&#39;alerte du monde. Engagée dans l&#39;armée américaine à 19 ans, elle devient&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}