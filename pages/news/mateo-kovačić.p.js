import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mateo kovačić</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mateo kovačić"/>
        <meta name="description" content="Trending News about Mateo kovačić" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mateo kovačić</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/ee/2022/12/09/izabel-kovacic-e-mulher-do-jogador-croata-mateo-kovacic-1670595482987_v2_615x300.jpg" alt="Mateo kovačić"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/splash/noticias/2022/12/09/quem-e-izabel-kovacic.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Izabel Kovacic, mulher de jogador croata comparada a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_qBVSC4LZAY3gAcudXA3U5wPvrgmILjF6lnDbMAd25QVDtbV077t1fxvyuWatk4Ky26qCBrpb" alt="Quem é Izabel Kovacic, mulher de jogador croata comparada a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Izabel Kovacic, 29, é casada com Mateo Kovacic, 28, jogador croata que entra em campo hoje contra o Brasil. A jovem acumula mais de 420 mil seguidores nas&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/quem-%C3%A9-izabel-kovacic-esposa-134340425.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Izabel Kovacic, esposa de craque da seleção croata ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHFuIjj4CWfh5hwQWf-IL7m2847l7fdPLiIL5ilPtO_OEJpc7MOM_9Mi0OQgIXOAJKzSgaysR8" alt="Quem é Izabel Kovacic, esposa de craque da seleção croata ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador da seleção croata, que enfrenta o Brasil nesta sexta-feira (9), Mateo Kovacic é meio-campo do time inglês Chelsea. Mas fora dos gramados, quem chama&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}