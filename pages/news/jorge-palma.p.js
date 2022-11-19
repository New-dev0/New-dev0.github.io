import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jorge Palma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jorge Palma"/>
        <meta name="description" content="Trending News about Jorge Palma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jorge Palma</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-18-jorge-palma.jpg-3eabd2d3/1.91x1?wm=true&outputFormat=jpeg" alt="Jorge Palma"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-18-A-Gente-Vai-Continuar-de-Ana-Moura-a-Sergio-Godinho-mais-de-30-artistas-prestam-homenagem-a-Jorge-Palma-af7813dd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“A Gente Vai Continuar”: de Ana Moura a Sérgio Godinho, mais de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuAuSSHkwnOzseV5oh8khvGtlld5axU5guqxCRHa8eoIauMPY6uq9ZX8xpsZphz02Ga3a_s6r6" alt="“A Gente Vai Continuar”: de Ana Moura a Sérgio Godinho, mais de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Numa altura em que celebra 50 anos de carreira, Jorge Palma foi homenageado por artistas de várias gerações, numa iniciativa da Rádio Comercial.</p></div>
            </div>
        </a>
        </Template></>;
}