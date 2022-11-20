import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UBBO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UBBO"/>
        <meta name="description" content="Trending News about UBBO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UBBO</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_5a1c6b1c1fbd9.jpg" alt="UBBO"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/pais/2116624/lisboa-dois-feridos-apos-avaria-num-carro-no-centro-comercial-ubbo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisboa. Dois feridos após avaria num carro no centro comercial UBBO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfN9-B5o492LraeDM8ZBdJFB19zMbGsBnUknDM-HPA3BakBajHAHNxH9a0nowmQ0PYgNpyoT67" alt="Lisboa. Dois feridos após avaria num carro no centro comercial UBBO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As vítimas foram assistidas no local pelos Bombeiros Voluntários da Amadora. Parque de estacionamento foi evacuado.</p></div>
            </div>
        </a>
        </Template></>;
}