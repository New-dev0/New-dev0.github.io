import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pais de Gales</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pais de Gales"/>
        <meta name="description" content="Trending News about Pais de Gales" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pais de Gales</h1>
            <Image width={800} height={500} src="https://mundoconectado.com.br/uploads/chamadas/viagem_pais_de_gales_capa.jpg" alt="Pais de Gales"/>
            <h3>Recent News</h3>
            <a href='https://mundoconectado.com.br/noticias/v/29774/copa-do-mundo-2022-torcedores-do-pais-de-gales-tentaram-viajar-do-reino-unido-ao-catar-com-carro-eletrico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo 2022: torcedores do País de Gales tentaram viajar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFkwUnxmLLtZ_VPr8rBSOM3iw0H6QU8c8Wegtv23NOf78AJzFMsfYou8MtI9T-9XtFAXpkOkbY" alt="Copa do Mundo 2022: torcedores do País de Gales tentaram viajar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A aventura não foi concluída como desejavam, mas ainda assim foi uma experiência inesquecível.</p></div>
            </div>
        </a>
        </Template></>;
}