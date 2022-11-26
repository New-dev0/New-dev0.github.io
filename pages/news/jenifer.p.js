import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jenifer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jenifer"/>
        <meta name="description" content="Trending News about Jenifer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jenifer</h1>
            <Image width={800} height={500} src="https://www.maritima.info/medias/thumbs/410_medias_photos_alaune_c-fakepath-jenifer-showcase-maritima-2022-638049913239782638.jpg" alt="Jenifer"/>
            <h3>Recent News</h3>
            <a href='https://www.maritima.info/actualites/culture/marseille/14837/jenifer-eblouissante-pour-un-showcase-maritima-exclusif-a-marseille.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jenifer éblouissante pour un showcase Maritima exclusif à Marseille ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRU8KFbDGGQNgIl0PHJLk_Op0lousZKc5f_tki8yCCWLIp-aHXWyCOMpgz7oBu872-SpzbTbhT_" alt="Jenifer éblouissante pour un showcase Maritima exclusif à Marseille ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est un événement Maritima qui restera gravé à jamais dans le cœur des fans de Jenifer : assister à un showcase, une interview et une rencontre.</p></div>
            </div>
        </a>
        </Template></>;
}