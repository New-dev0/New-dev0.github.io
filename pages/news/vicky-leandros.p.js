import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vicky Leandros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vicky Leandros"/>
        <meta name="description" content="Trending News about Vicky Leandros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vicky Leandros</h1>
            <Image width={800} height={500} src="https://static.schlager.de/uploads/2014/01/vicky-leandros-cr-walter-kober.jpg" alt="Vicky Leandros"/>
            <h3>Recent News</h3>
            <a href='https://www.schlager.de/news/2022/12/02/vicky-leandros-man-muss-lernen-zu-verzeihen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vicky Leandros: „Man muss lernen, zu verzeihen“ - Schlager.de</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3F4wtecFmVIdZY93rM4qkZVOIWGIkUHlRxFTKq3j8aI7HqXXvBN5oegRMDvOnk0ASabrfLs3N" alt="Vicky Leandros: „Man muss lernen, zu verzeihen“ - Schlager.de" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 Jahre war Vicky Leandros verheiratet. Jetzt spricht sie über ihre Ehe und was sie daraus gelernt hat...</p></div>
            </div>
        </a>
        </Template></>;
}