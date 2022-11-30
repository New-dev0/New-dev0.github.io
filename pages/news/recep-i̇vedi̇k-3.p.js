import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RECEP İVEDİK 3</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RECEP İVEDİK 3"/>
        <meta name="description" content="Trending News about RECEP İVEDİK 3" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RECEP İVEDİK 3</h1>
            <Image width={800} height={500} src="https://imgrosetta.mynet.com.tr/file/16043419/16043419-700x400.jpg" alt="RECEP İVEDİK 3"/>
            <h3>Recent News</h3>
            <a href='https://www.mynet.com/recep-ivedik-3-konusu-nedir-oyunculari-kimler-recep-ivedik-3-ne-zaman-cikti-bu-aksam-tv-de-190101276897'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recep İvedik 3 konusu nedir, oyuncuları kimler? Recep İvedik 3 ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfe-kopdT9GKidVzLCRLlZGbwVbi8VeLdfYcJGIB5qkXvpIz1SYPtEXnIw05cEfrN_IEldngBA" alt="Recep İvedik 3 konusu nedir, oyuncuları kimler? Recep İvedik 3 ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recep İvedik serisinin üçüncü filmi olan Recep İvedik 3 bu akşam Fox Tv ekranlarında seyirciyle buluşacak. Sinema severlerin ilgisini çeken Recep İvedik&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}