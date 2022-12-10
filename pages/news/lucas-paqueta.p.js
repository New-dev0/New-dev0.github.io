import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lucas paqueta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lucas paqueta"/>
        <meta name="description" content="Trending News about Lucas paqueta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lucas paqueta</h1>
            <Image width={800} height={500} src="https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2022/12/lucas-paqueta-e-noiva-duda-casal-da-copa.jpg" alt="Lucas paqueta"/>
            <h3>Recent News</h3>
            <a href='https://observatoriog.bol.uol.com.br/noticias/famosos/mulher-de-lucas-paqueta-duda-posa-de-fio-dental-e-chama-atencao-por-beleza'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulher de Lucas Paquetá, Duda posa de fio dental e chama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKogSTkwwrcwlz2htDrOAejmKYAT3SAkRhxd7iEd5qPhGN2MaFN5ciGPlwwpA3wtxCEiQXTd-E" alt="Mulher de Lucas Paquetá, Duda posa de fio dental e chama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lucas Paquetá e Maria Eduarda Fournier se conheceram na época que o jogador estava no time do Flamengo.</p></div>
            </div>
        </a><a href='https://nahoradanoticia.com.br/entretenimento/esposa-de-lucas-paqueta-se-destaca-com-peca-de-verao-um-arraso/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esposa de Lucas Paquetá se destaca com peça de verão: “Um arraso”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIVU3Vr1DCOX3aXJsRe0Jhlk18OkwicOE4DcF3cHm212bdM6GlqQXaxiFArvx8NTGC8om90HCj" alt="Esposa de Lucas Paquetá se destaca com peça de verão: “Um arraso”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a repercussão da Copa do Mundo e o ótimo desempenho da Seleção Brasileira no jogo contra a Coréia, não é apenas o nome dos jogadores que tem ficado em&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}