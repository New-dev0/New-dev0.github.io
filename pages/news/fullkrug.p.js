import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fullkrug</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fullkrug"/>
        <meta name="description" content="Trending News about Fullkrug" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fullkrug</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/FOTOSDR/2022/goloalemanhaespanhaDR.jpg" alt="Fullkrug"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-27/mundial-2022-tiro-de-fullkrug-vale-empate-a-alemanha-video/966339'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tiro de Fullkrug vale empate à Alemanha (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWIFQPBGYN7KaWEkOLtSV5lcdx2VRKfBGHHFy7jWyU9y2zXOJHiXbgtenZVf6j63PsmZzu-NnV" alt="Tiro de Fullkrug vale empate à Alemanha (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Alemanha chega ao empate diante da Espanha (1-1), aos 83 minutos. Um remate de raiva do avançado Niclas Fullkrug. Veja o vídeo:.</p></div>
            </div>
        </a>
        </Template></>;
}