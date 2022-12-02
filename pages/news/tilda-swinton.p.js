import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tilda Swinton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tilda Swinton"/>
        <meta name="description" content="Trending News about Tilda Swinton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tilda Swinton</h1>
            <Image width={800} height={500} src="" alt="Tilda Swinton"/>
            <h3>Recent News</h3>
            <a href='https://www.lesinrocks.com/arts-et-scenes/tilda-swinton-et-olivier-saillard-ce-que-nous-faisons-cest-une-histoire-desprits-519489-01-12-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tilda Swinton et Olivier Saillard : “Ce que nous faisons, c&#39;est une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Tilda Swinton et Olivier Saillard : “Ce que nous faisons, c&#39;est une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette semaine, Tilda Swinton et Olivier Saillard présentent leur nouvelle performance, “Embodying Pasolini”, à Paris. Deux heures magiques, mystiques,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}