import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cap-Vert</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cap-Vert"/>
        <meta name="description" content="Trending News about Cap-Vert" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cap-Vert</h1>
            <Image width={800} height={500} src="https://photos.tf1.fr/1200/720/cap-vert-le-paradis-pedestre-1-0a6a14-0@1x.jpg" alt="Cap-Vert"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1.fr/tf1/jt-20h/videos/cap-vert-le-paradis-pedestre-95214555.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cap-Vert : le paradis pédestre ! - Journal de 20 heures | TF1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSI2L166rMiN0rP_uA78qjF-8atBYv_upNUoR_WE0brN_iMtWMjjVgZMtK-7T8-LTqzVSZFuSNK" alt="Cap-Vert : le paradis pédestre ! - Journal de 20 heures | TF1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cap à Santo Antao, une île sauvage et volcanique déposée au milieu de l&#39;Océan Atlantique, située dans l&#39;archipel du Cap-Vert au large du Sénégal.</p></div>
            </div>
        </a>
        </Template></>;
}