import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Virus EBV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Virus EBV"/>
        <meta name="description" content="Trending News about Virus EBV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Virus EBV</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/12/08/1157740836-61a526ca-75e1-4d4b-abe7-a320d4379dfb.jpg" alt="Virus EBV"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/noticias/epstein-barr-e-esclerose-multipla-podem-estar-relacionados,5ea05a2aca00ecce946229b680da981fa2d45ngk.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epstein-Barr e esclerose múltipla podem estar relacionados</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFnIb4dy_f3idB8vfSfJ3ZV-R2njQl-W-SIP18u7NL4NJ7UgF5P8opFaD5qlWo_BogVoEjiWRT" alt="Epstein-Barr e esclerose múltipla podem estar relacionados" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pesquisadores apontam que o vírus Epstein-Barr (EBV), pode estar relacionado com a esclerose múltipla (EM). Entretanto, cerca de 90% da população tem ou&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}