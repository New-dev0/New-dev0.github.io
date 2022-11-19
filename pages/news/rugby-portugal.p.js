import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rugby Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rugby Portugal"/>
        <meta name="description" content="Trending News about Rugby Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rugby Portugal</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A4096%3A2306%3Anowe%3A0%3A296%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F18160428%2FGettyImages-1442529055-scaled.jpg" alt="Rugby Portugal"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/18/16-anos-depois-volta-a-fazer-se-historia-portugal-empata-com-os-estados-unidos-e-esta-no-mundial-de-raguebi-pela-segunda-vez/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 anos depois volta a fazer-se história: Portugal empata com os ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLoOAxg-Ndgw3KJJryTlwCLFx9xIDeEEvxD2fB_VfiH3cKIZg9Fmy4pGoHZiH4P-OioplnE4lU" alt="16 anos depois volta a fazer-se história: Portugal empata com os ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16 anos depois da presença inédita no Mundial de râguebi, Portugal voltou a fazer história e empatou com os Estados Unidos no Dubai (16-16) para carimbar a&nbsp;...</p></div>
            </div>
        </a><a href='https://bolanarede.pt/especial-bola-na-rede/ultima-hora/portugal-apurado-para-o-mundial-de-rugby/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal apurado para o Mundial de Rugby</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_0YwwQ7AZXvrwYtuTfMcIwwjRCxp9Mb3VuOBftZFLzQrbo0041lZe8QcTio2BQ2Pa4tXZrzvp" alt="Portugal apurado para o Mundial de Rugby" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção nacional de Portugal está apurada para o Campeonato do Mundo de rugby, que vai decorrer em 2023.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/modalidades/rugby/artigos/historia-e-drama-no-ultimo-pontape-16-anos-depois-portugal-esta-num-mundial-de-raguebi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>História e drama no último pontapé: 16 anos depois, Portugal está ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsU5xFaGCjAzn0Ymfew7q6rhO0HL1A-PIsgi0kyRGUHPZ2d3T6PNgcvHSDtzzKTbv8EQ_o43XB" alt="História e drama no último pontapé: 16 anos depois, Portugal está ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal apura-se porque tinha vantagem sobre os EUA no primeiro critério de desempate, a diferença de pontos marcados e sofridos nos três jogos do torneio.</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=422150'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Épico!!! Portugal qualifica-se para o Mundial de râguebi ao cair do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHFKX3rgKXWcuBmAzNvkxjsCythBVzmkvRpz8xuIH7ZxK7iORz95ta_AYGw5l1ClKcNd7clXED" alt="Épico!!! Portugal qualifica-se para o Mundial de râguebi ao cair do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal tornou-se esta sexta-feira na 20ª equipa a garantir um lugar no Campeonato do Mundo de râguebi, que se disputará em França no próximo ano.</p></div>
            </div>
        </a><a href='https://www.bemmaisbrasilia.com/portugal-derrota-os-estados-unidos-e-fica-com-a-vaga-final-no-mundial-de-rugby-na-franca-copa-do-mundo-de-rugby/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal derrota os Estados Unidos e fica com a vaga final no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9jxuiVO0XuQmff3KrcePuzPcKODIqNMgDZbL6P6rgAwAo-7CfTfRDdpIZxL6OjPkYcEAUanKi" alt="Portugal derrota os Estados Unidos e fica com a vaga final no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para Portugal, a merecida e grande glória de que goza é o segundo lugar de todos Copa do Mundo de Rugby. Eles se juntarão a Austrália, País de Gales, Fiji.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/portugal-apura-se-para-o-mundial-de-raguebi-15366145.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal apura-se de forma épica para o Mundial de râguebi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMDvG94VXFkRETxXiirGD9ht3CV3bBp6MGJLIto48LRiYchgNBlWPsLdgUBUGfBpfayk2LX1PA" alt="Portugal apura-se de forma épica para o Mundial de râguebi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção lusa de râguebi empatou com os Estados Unidos (16-16) no jogo decisivo e chega pela segunda vez à grande competição, que se realiza no próximo ano&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/outras-modalidades/governo-felicita-apuramento-epico-do-raguebi-para-o-mundial2023-em-franca_d1448051'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governo felicita &quot;apuramento épico&quot; do râguebi para o Mundial2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzUmjtInCoe0OeiCuHoNa8Ni3mHm-OerzG5wU71IvQycuP--U0a9PokSqOlcrb1IGTH4Q_RBzJ" alt="Governo felicita &quot;apuramento épico&quot; do râguebi para o Mundial2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O secretário de Estado da Juventude e Desporto, João Paulo Correia, elogiou hoje o &quot;apuramento épico&quot; da seleção portuguesa de râguebi para o Campeonato do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}