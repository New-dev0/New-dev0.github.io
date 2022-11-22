import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seisme indonesie Java</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seisme indonesie Java"/>
        <meta name="description" content="Trending News about Seisme indonesie Java" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seisme indonesie Java</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/seisme-indonesie-21-nov-1-d4203f-0@1x.jpeg" alt="Seisme indonesie Java"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/international/video-indonesie-seisme-earthquake-ile-de-java-frappee-au-moins-44-morts-et-des-centaines-de-blesses-2239304.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - Séisme en Indonésie : le bilan s&#39;alourdit à 162 morts et des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTN10ZzWXeJJNKUzxy84SVMPRn7oFv5vQjaXXcxs475nhye_wD21A9WTesVBZ9cittb1GDU6c1K" alt="VIDÉO - Séisme en Indonésie : le bilan s&#39;alourdit à 162 morts et des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Un tremblement de terre de magnitude 5,4 a frappé ce lundi une région au sud de capitale indonésienne. Un premier bilan fait état d&#39;au moins&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/monde/4010958-20221121-indonesie-moins-44-morts-apres-seisme-ile-java-secousses-ressenties-jusqu-capitale-jakarta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonésie : Au moins 162 morts et plus de 700 blessés après un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWhwLvuvbfsProRVHXhZm5lZ8e7saJLzFP_XNGTCt-P7-uaQ4PvCEVXNiYafajlmGkG2x5JNh7" alt="Indonésie : Au moins 162 morts et plus de 700 blessés après un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un tremblement de terre de magnitude 5,6 est survenu lundi sur l&#39;île indonésienne de Java. Au moins 162 personnes sont décédées et plus 700 ont été blessées&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/monde/seisme-en-indonesie-pres-de-20-morts-et-300-blesses-21-11-2022-2498542_24.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Séisme en Indonésie : le bilan s&#39;alourdit et passe à 162 morts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGzhKi-7MWTI3VSVbEABQ3-bFX_gd8-wES7hfbqd0Kzcpzw6187XDpLINJX2pBMASRO_7KPGTL" alt="Séisme en Indonésie : le bilan s&#39;alourdit et passe à 162 morts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un tremblement de terre de magnitude 5,4 s&#39;est produit près de la ville de Cianjur, à quelque 100 kilomètres au sud de Jakarta, lundi.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/international/article/2022/11/21/indonesie-un-seisme-de-magnitude-5-6-fait-au-moins-vingt-morts-et-trois-cents-blesses_6150870_3210.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonésie : un séisme de magnitude 5,6 fait cent soixante-deux morts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT570nUfH79CbYXiiCqyQfj6hidVgvkuVwRaFgDXsISWCoU51yAQZKWkWMrw5rgrEGGHnIjnQRi" alt="Indonésie : un séisme de magnitude 5,6 fait cent soixante-deux morts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le tremblement de terre s&#39;est produit près de la ville de Cianjur, à quelque 100 kilomètres au sud de Djakarta, et a été ressenti jusque dans la capitale.</p></div>
            </div>
        </a>
        </Template></>;
}