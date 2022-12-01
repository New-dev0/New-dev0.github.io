import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TV Senado</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TV Senado"/>
        <meta name="description" content="Trending News about TV Senado" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TV Senado</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/11/30/16698462406387d4e05bbec_1669846240_3x2_lg.jpg" alt="TV Senado"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/poder/2022/11/audiencia-no-senado-reune-bolsonaristas-com-ataques-ao-stf-e-urnas-e-pedido-de-golpe.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Audiência no Senado reúne bolsonaristas com ataques ao STF e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPmSY97LSFG_SpAsk1un-0of_Nimu907Fjdy7cpR4OlhlcK_Tyjk5scRDuIYmeVZadHAyWqy_K" alt="Audiência no Senado reúne bolsonaristas com ataques ao STF e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Participaram aliados do presidente Jair Bolsonaro (PL) como os deputados federais Carla Zambelli (PL-SP), Filipe Barros (PL-PR), Daniel Silveira (PTB-RJ), Bia&nbsp;...</p></div>
            </div>
        </a><a href='https://www12.senado.leg.br/tv/programas/noticias-1/2022/11/advogados-podem-ter-tratamento-igualitario-em-audiencias'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Advogados podem ter tratamento igualitário em audiências</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8xi8qqbzyeLEF6uiV70Mym-DkWWkUG5QEahcMB3sT6lfEj3YpRwKiCOuJpz6LaR86IEIpjJNb" alt="Advogados podem ter tratamento igualitário em audiências" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quarta (30), o Plenário do Senado Federal aprovou projeto que garante igualdade no tratamento de advogados durante audiências.</p></div>
            </div>
        </a><a href='https://m.camarapiracicaba.sp.gov.br/camara-de-piracicaba-participa-de-evento-nacional-sobre-acessibilidade-59345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Câmara de Piracicaba participa de evento nacional sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSL9K6GMzUfFyVFmgtP9UxtqXz2Vq7vj2eoXFLhCnc1atemghiUIKLmuAuAsmwlOGf0V0SKXVZP" alt="Câmara de Piracicaba participa de evento nacional sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Programa Câmara Inclusiva, de Piracicaba, será apresentado no evento, realizado no âmbito da Parceria para Governo Aberto, sob coordenação da Controladoria&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}