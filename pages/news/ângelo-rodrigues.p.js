import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ângelo Rodrigues</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ângelo Rodrigues"/>
        <meta name="description" content="Trending News about Ângelo Rodrigues" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ângelo Rodrigues</h1>
            <Image width={800} height={500} src="https://famashow.pt/wp-content/uploads/2022/11/316942998_546220944184509_2070639783731040053_n-1-e1669635489883.jpg" alt="Ângelo Rodrigues"/>
            <h3>Recent News</h3>
            <a href='https://famashow.pt/nas-redes/ha-dois-meses-no-nepal-angelo-rodrigues-mostra-novas-imagens-da-sua-aventura/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Há dois meses no Nepal, Ângelo Rodrigues mostra novas imagens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTyLkFdb6PAA1rGaT89xRDK-HcRYgkAvPYjD1XZfuzolREVp5aofdjR4H5mnvFe-HtrmA_0m732" alt="Há dois meses no Nepal, Ângelo Rodrigues mostra novas imagens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator decidiu começar a dar aulas de inglês a monges. O ator decidiu começar a dar aulas de inglês a monges.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/angelo-rodrigues-faz-balanco-da-sua-experiencia-no-nepal-nao-sei-que-respostas-encontrarei-mas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ângelo Rodrigues faz balanço da sua experiência no Nepal: &quot;Não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRxDcqbLrL73QUaW_sNXwWaK04zxgdVEe4eZG1ACZG5rBMgvD_898zeCm7rtJmeViQzOEHcgVV" alt="Ângelo Rodrigues faz balanço da sua experiência no Nepal: &quot;Não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ângelo Rodrigues está a viver uma das maiores experiências da sua vida no Nepal, onde leciona inglês a jovens monges. O ator tem estado ausente das redes.</p></div>
            </div>
        </a>
        </Template></>;
}