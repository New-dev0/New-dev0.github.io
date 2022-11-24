import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luis Enrique</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luis Enrique"/>
        <meta name="description" content="Trending News about Luis Enrique" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luis Enrique</h1>
            <Image width={800} height={500} src="https://www.fussballeuropa.com/images/xtra/getty-lionel-messi-22111418.jpg" alt="Luis Enrique"/>
            <h3>Recent News</h3>
            <a href='https://www.fussballeuropa.com/news/fc-barcelona-lionel-messi-hatte-besondere-beziehung-zu-luis-enrique-2022-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi wollte nicht, dass Luis Enrique Barça verlässt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfGj8yMQCU1izD9HW3Lw9oaAYxxfBbepy7Y5JfgHCAlDSjuaIUy4tzIHM4PxXU6Ns68LaUc5Eh" alt="Lionel Messi wollte nicht, dass Luis Enrique Barça verlässt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi gewann seine bis dato letzte Champions League unter der Anleitung von Luis Enrique. Noch immer denkt der Argentinier gerne an die&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}