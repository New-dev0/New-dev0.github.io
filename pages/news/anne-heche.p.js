import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anne Heche</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anne Heche"/>
        <meta name="description" content="Trending News about Anne Heche" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anne Heche</h1>
            <Image width={800} height={500} src="https://www.correiodopovo.com.br/image/policy:1.871168:1660314415/image.jpg?a=191%3A100&q=0.6&w=900&$p$a$q$w=61e089e" alt="Anne Heche"/>
            <h3>Recent News</h3>
            <a href='https://www.correiodopovo.com.br/arteagenda/mulher-que-teve-casa-destru%C3%ADda-por-anne-heche-pede-indeniza%C3%A7%C3%A3o-de-r-10-6-milh%C3%B5es-1.923646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulher que teve casa destruída por Anne Heche pede indenização ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbQlb8xP4IIyibtXUiZwVn2OBH2OpeTUDPv4Nq-7pa6OOtHnbE7XGsh4L7FWu4QgdFDtMpNvn2" alt="Mulher que teve casa destruída por Anne Heche pede indenização ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz passou uma semana internada, até que foi constatada a morte cerebral. A artista continuou sendo mantida viva com a ajuda de aparelhos por mais alguns&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}