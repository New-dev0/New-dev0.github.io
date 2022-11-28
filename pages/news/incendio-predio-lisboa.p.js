import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Incendio predio Lisboa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Incendio predio Lisboa"/>
        <meta name="description" content="Trending News about Incendio predio Lisboa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Incendio predio Lisboa</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/noticias/images/42/4209b40a3f7cb436b39a4be05bbf149c?w=860&q=90&rect=0,0,1499,822&auto=format" alt="Incendio predio Lisboa"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/pais/incendio-em-lisboa-fogo-atingiu-cobertura-de-edificio-devoluto_v1449950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incêndio em Lisboa. Fogo atingiu cobertura de edifício devoluto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRW9agnN-pK0RjCHZ-QgNSi649Q8YmVZJ_OUgIub3-RWXt90fPGD03m75J2t9nxix4FA4CP5z_z" alt="Incêndio em Lisboa. Fogo atingiu cobertura de edifício devoluto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um incêndio destruiu parte de um antigo palacete em Lisboa. O fogo atingiu a cobertura do edifício, que está devoluto há alguns anos.</p></div>
            </div>
        </a>
        </Template></>;
}