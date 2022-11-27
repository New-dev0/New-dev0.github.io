import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Melody Gardot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Melody Gardot"/>
        <meta name="description" content="Trending News about Melody Gardot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Melody Gardot</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/melody-gardot-1626-8ba1d2-0@1x.jpeg" alt="Melody Gardot"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/j-ai-trouve-ma-voix-en-francais-le-timbre-envoutant-de-melody-gardot-2239903.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;J&#39;ai trouvé ma voix en français&quot; : le timbre envoutant de Melody ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZ_Xy6YQuH2PH4HNth6YmaXCWYHnNM_c4pRVNtVg4MQJpGaA2NGwdnmQluXY-KkNzOXYWGh3gu" alt="&quot;J&#39;ai trouvé ma voix en français&quot; : le timbre envoutant de Melody ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ C&#39;est une artiste au destin étonnant qui sort un nouvel album. Melody Gardot est née aux États-Unis, mais c&#39;est en France qu&#39;elle a choisi de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1.fr/tf1/jt-we/videos/melody-gardot-la-voix-envoutante-30010203.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melody Gardot, la voix envoûtante - Le Journal du week-end | TF1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXVOnCUOQ0Kg85RKw_sQv0exf_utDR-ivIHN1ewFdlUrl50G4Y9RmzeAg98v3mSDl7AGM9McIr" alt="Melody Gardot, la voix envoûtante - Le Journal du week-end | TF1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Extrait ▶️ 2m27s - C&#39;est une artiste au destin étonnant qui vient de sortir un nouvel album. Melody Gardot est née aux États-Unis, mais c&#39;est en France&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}