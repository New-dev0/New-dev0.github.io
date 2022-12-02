import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monalisa Perrone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monalisa Perrone"/>
        <meta name="description" content="Trending News about Monalisa Perrone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monalisa Perrone</h1>
            <Image width={800} height={500} src="https://observatoriodatv.uol.com.br/wp-content/uploads/2021/06/Design-sem-nome-8.jpg" alt="Monalisa Perrone"/>
            <h3>Recent News</h3>
            <a href='https://observatoriodatv.uol.com.br/colunas/paulo-pacheco/monalisa-perrone-e-demitida-da-cnn-no-dia-em-que-jornal-que-lancou-na-globo-completa-8-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monalisa Perrone é demitida da CNN no dia em que jornal que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKB04OiLLdaIrFwlHdB_UrGvGqsi6L14Vqk60Hq-Y6bjWnal2xfmEGtOshqnnM4cc0psCJlN4a" alt="Monalisa Perrone é demitida da CNN no dia em que jornal que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aniversário de telejornal e dispensa de sua primeira apresentadora ocorreram nesta quinta-feira (1°); saiba mais.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/12/01/marcela-rahal-cnn.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monalisa, Karnal, Vanique, Sidney e Boris Casoy são demitidos da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThoMQKW2oYDWAHpkyZIxSvuNCCmeShWQwhHZElUFqkMDiwlDf_3AiTMwmx_Tdt4okTPICmmF9z" alt="Monalisa, Karnal, Vanique, Sidney e Boris Casoy são demitidos da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os apresentadores Monalisa Perrone, Gloria Vanique, Marcela Rahal, Sidney Rezende, Leandro Karnal, Boris Casoy e Kenzô Machida foram demitidos da CNN na&nbsp;...</p></div>
            </div>
        </a><a href='https://hugogloss.uol.com.br/tv/em-crise-de-audiencia-cnn-brasil-demite-monalisa-perrone-e-mais-de-100-funcionarios-leia-comunicado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em crise de audiência, CNN Brasil demite Monalisa Perrone e mais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKmedCOmPEPjFy1rh4g37kCgHO3k92EN1JzM1ZIZci4VpIh5kubhNzoo66VmIMzEKUUtRJU_SV" alt="Em crise de audiência, CNN Brasil demite Monalisa Perrone e mais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A emissora promoveu uma demissão em massa, a maior de seus quase três anos no ar. De acordo com o jornalista Ricardo Feltrin, do UOL, a empresa teria demitido&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/veja-gente/ex-globais-apresentadores-de-peso-sao-demitidos-da-cnn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-globais, apresentadores de peso são demitidos da CNN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyLvvnXChidam7rCTI5W_6Y_UOMlbQhC0CE3hlfRUd-FX4j3X8p4dVO_ZP3aT_s6hGH3KZ-r2v" alt="Ex-globais, apresentadores de peso são demitidos da CNN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nomes de peso no jornalismo da CNN, Monalisa Perrone, Marcela Rahal e Sidney Rezende foram demitidos na manhã desta quinta-feira, 1º.</p></div>
            </div>
        </a><a href='https://www.correio24horas.com.br/noticia/nid/monalisa-perrone-e-demitida-da-cnn-tres-anos-apos-sair-da-globo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monalisa Perrone é demitida da CNN três anos após sair da Globo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcWUTds7JVCY2UZBs8lrHPgB4BaXYAfyGBrHOlYpFZL6cr0uVnDLIW6fmhes1xZpDw91P2sHTa" alt="Monalisa Perrone é demitida da CNN três anos após sair da Globo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Até o momento, não há informações concretas sobre o número total de funcionários que foram demitidos. Além de apresentadores e repórteres, há mais jornalistas&nbsp;...</p></div>
            </div>
        </a><a href='https://noticiasdatv.uol.com.br/noticia/televisao/estrela-da-cnn-monalisa-perrone-e-demitida-tres-anos-apos-deixar-globo-93671'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Estrela da CNN, Monalisa Perrone é demitida três anos após deixar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFJbvYQWZiRs0Ww723MBmMMVU8mzNFksvx22np6RhxgLdW8NJpL0Ukskjpt6vpt1qjtKgr_WOc" alt="Estrela da CNN, Monalisa Perrone é demitida três anos após deixar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Monalisa Perrone, uma das maiores estrelas da CNN Brasil, foi demitida após fazer um acordo com a empresa. Ela estava desde 2019 por lá.</p></div>
            </div>
        </a>
        </Template></>;
}