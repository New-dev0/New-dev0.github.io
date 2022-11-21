import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>I am Mother</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,I am Mother"/>
        <meta name="description" content="Trending News about I am Mother" /></Head><Template>
            <h1 style={{fontSize: "30"}}>I am Mother</h1>
            <Image width={800} height={500} src="https://kulturnews.de/wp-content/uploads/2021/04/i-am-mother.jpg" alt="I am Mother"/>
            <h3>Recent News</h3>
            <a href='https://kulturnews.de/tv-tipp-i-am-mother-hilary-swank-rtl-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„I am Mother“ mit Hilary Swank auf RTL 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbx84Wyi9A2PyMysVcazUACXIvNwPZuV7_T-8L3vnf62i6CUvAzcpdTifTqfsLSQG0Fth6wqaa" alt="„I am Mother“ mit Hilary Swank auf RTL 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein einsames Mädchen wird von einer Künstlichen Intelligenz darauf vorbereitet, die Menschheit zu retten – oder etwa doch nicht?</p></div>
            </div>
        </a>
        </Template></>;
}