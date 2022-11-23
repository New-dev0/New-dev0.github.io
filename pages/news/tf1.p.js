import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TF1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TF1"/>
        <meta name="description" content="Trending News about TF1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TF1</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/barcelone-illustration-3da949-0@1x.jpeg" alt="TF1"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/international/espagne-en-plein-automne-barcelone-placee-en-alerte-secheresse-rechauffement-climatique-restrictions-d-eau-2239475.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espagne : en plein automne, Barcelone placée en alerte sécheresse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_dUYNcpI9iEBMiwQRDj4aCUz1rYbE-HynTYqabIoXYo4uOshmrrhHRXXGvnIBHifGaVs-SRgw" alt="Espagne : en plein automne, Barcelone placée en alerte sécheresse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Deuxième ville d&#39;Espagne, Barcelone va être placée en alerte sécheresse pour la première fois depuis 2008. Le résultat de l&#39;absence de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/replay-lci/video-un-oeil-sur-le-monde-du-22-novembre-2022-2239518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un Oeil sur le Monde du 22 novembre 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCB12Bf7F2YBmOI26BFraa0rSSx0isVOQJUpkCHc2AWs2k-S91TTTGXdNvXnReTYxKfJv0vJVT" alt="Un Oeil sur le Monde du 22 novembre 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Retrouvez le replay de l&#39;émission Un Oeil sur le Monde présentée par Julien Arnaud. Le face à face oppose Vincent Trémolet à Ruth Elkrief.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/international/la-france-pays-colonialiste-qui-exploite-l-afrique-avec-franc-cfa-les-accusations-trompeuses-de-giorgia-meloni-premiere-ministre-de-italie-2239471.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La France, pays &quot;colonialiste&quot; qui &quot;exploite l&#39;Afrique&quot; ? Les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBjbEcVU3srFjE8gRGw4g8itWhDlG59mPAbLKllum-uAXjTWGA8y_zaupCEqVguCHHinB6Mz11" alt="La France, pays &quot;colonialiste&quot; qui &quot;exploite l&#39;Afrique&quot; ? Les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;actuelle Première ministre italienne y multiplie les fausses informations et les idées reçues à propos du franc CFA. Le duel ne ferait que commencer entre&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}