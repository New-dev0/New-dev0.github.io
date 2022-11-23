import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boston bruins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boston bruins"/>
        <meta name="description" content="Trending News about Boston bruins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boston bruins</h1>
            <Image width={800} height={500} src="https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Bergeron-Patrice-Getty-1244978396.jpg" alt="Boston bruins"/>
            <h3>Recent News</h3>
            <a href='https://www.nbcsports.com/boston/bruins/patrice-bergeron-best-captain-sports-says-bruins-coach-jim-montgomery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Patrice Bergeron is &#39;best captain in sports&#39;, says Bruins coach Jim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jim Montgomery praised the Bruins&#39; &quot;army of leaders&quot; in helping the team navigate the typical ups and downs of a grueling 82-game NHL regular season.</p></div>
            </div>
        </a>
        </Template></>;
}