import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eskişehirspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eskişehirspor"/>
        <meta name="description" content="Trending News about Eskişehirspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eskişehirspor</h1>
            <Image width={800} height={500} src="https://www.egemeclisi.com/images/haberler/2022/11/genc_horozlar_eskisehirsporu_puansiz_gonderdi_h135416_7b0dd.jpg" alt="Eskişehirspor"/>
            <h3>Recent News</h3>
            <a href='https://www.egemeclisi.com/spor/genc-horozlar-eskisehirsporu-puansiz-gonderdi-h135416.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Genç horozlar Eskişehirspor&#39;u puansız gönderdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3iTkxR5LWJCxCbsN1pdgNuUY-smqYPbr80o6F73_2etuXjNU9BoMKByRi9aEgcBjDb2M1g6fN" alt="Genç horozlar Eskişehirspor&#39;u puansız gönderdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TFF U17 Elit B Ligi 2. Grup 7. haftasında kendi evinde Eskişehirspor ile karşılaşan Denizlispor rakibini 2-0 mağlup ederek haftayı 3 puan ile kapattı.</p></div>
            </div>
        </a>
        </Template></>;
}