import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boticario</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boticario"/>
        <meta name="description" content="Trending News about Boticario" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boticario</h1>
            <Image width={800} height={500} src="https://assets.propmark.com.br/uploads/2022/11/Montagem-1.jpg" alt="Boticario"/>
            <h3>Recent News</h3>
            <a href='https://propmark.com.br/media-monks-e-boticario-promocoes-marcam-a-semana-do-mercado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Media.Monks e Boticário: promoções marcam a semana do mercado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSRA9thZ8jtPUyfW_RCfeV2VDNzsC-AQYgIZng4vAsuL_3hlqIdxJdSXL6DIWKdziaF6uiKO_a" alt="Media.Monks e Boticário: promoções marcam a semana do mercado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KTBO apresentou as novas redatora e atendimento; FCB Brasil contratou gerentes de projeto e data intelligence; e ARC ampliou equipe de negócios e&nbsp;...</p></div>
            </div>
        </a><a href='https://pagina3.com.br/cidade/natal-do-o-boticario-sera-lancado-dia-29-na-barra-sul-em-balneario-camboriu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Natal do O Boticário será lançado dia 29, na Barra Sul, em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzwo6u0N5rR7efhiAyXejZyu24E0qWld9VS1y1YJkl614Vsett2iHgRSwauRkrkNZ3ZR1ZErVk" alt="Natal do O Boticário será lançado dia 29, na Barra Sul, em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A última apresentação natalina organizada pela prefeitura será neste sábado (26), às 20h: o Coral Villa-Lobos, de Itajaí, estará na praça Almirante Tamandaré. -&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}