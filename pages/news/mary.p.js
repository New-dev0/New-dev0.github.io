import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mary</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mary"/>
        <meta name="description" content="Trending News about Mary" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mary</h1>
            <Image width={800} height={500} src="" alt="Mary"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-tv.net/news/cinema/314301-mary-c8-pourquoi-le-tournage-du-film-a-ete-si-particulier-pour-lui/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mary (C8) : pourquoi le tournage du film a été si particulier pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mary (C8) : pourquoi le tournage du film a été si particulier pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Evans est à l&#39;affiche de l&#39;émouvant Mary, diffusé ce lundi 21 novembre à 21h15 sur C8. Un film dont il se souviendra sans doute à vie pour une raison&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}