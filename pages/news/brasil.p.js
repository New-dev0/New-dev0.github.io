import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brasil"/>
        <meta name="description" content="Trending News about Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brasil</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_24_21_33_01_2066459.png" alt="Brasil"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/detalhe/medico-do-brasil-confirma-lesao-no-tornozelo-direito-de-neymar?ref=HP_Ultimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Médico do Brasil não descarta fim do Mundial para Neymar e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXLMVU_aQnzw2pkVZedw8OSrG221S3-0cEvuXtqF-pKSpVOmNeOBhZRrG7A4qTjJFMMm0RASxT" alt="Médico do Brasil não descarta fim do Mundial para Neymar e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O fim da prova não está descartado. &quot;Ele acabou de ter uma entorse no tornozelo direito, que já inchou um pouco. É importante ver como ele vai responder. Já&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundial-2022/mundial-2022-brasil-entra-a-vencer-na-competicao_d1449401'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial 2022. Brasil entra a vencer na competição</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYvV_YhsvBQQxjqvcdnqtMUxm3RgMxOVL6y17v7RxctyeFOKCHhZuwyQf2seRLyZ5_EyvT96MV" alt="Mundial 2022. Brasil entra a vencer na competição" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Brasil estreou-se no Mundial do Catar com uma vitória sobre a Sérvia por 2-0, em jogo da primeira jornada do grupo G. Richarlison foi o homem do jogo com&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/brasil-vence-a-servia-com-espetaculo-de-richarlison-15385555.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil vence a Sérvia com espetáculo de Richarlison</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLJsE5IL-xCrs4Ft_aaquaK4iFdM_RSur2xFVpGGcLON5nPr0Ruf8Rfz_PMj__q5LjyZeZf_bw" alt="Brasil vence a Sérvia com espetáculo de Richarlison" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Brasil entrou com o pé direito no Mundial 2022 ao vencer a Sérvia por 2-0, graças a dois golos de Richarlison.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-24/brasil-tite-confiante-na-recuperacao-de-neymar/966031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tite confiante na recuperação de Neymar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVrJadp58JAEZ-zypQe_6flFjmWZUanDFpvAYhQ_Pf44qsIjtzND8xuURQiGzpUgMnZ88QKHdp" alt="Tite confiante na recuperação de Neymar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na sequência da vitória do Brasil frente à Sérvia, por 2-0, com bis de Richarlison, a contar para a primeira jornada do grupo G do Mundial, Tite falou sobre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/brasil-vence-a-servia-com-uma-obra-de-arte-de-richarlison--15385435.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil vence a Sérvia com uma obra de arte de Richarlison</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDv7XbkxwcwJCsmZoXUw2Fs_H3k7LjJDgjPkGdHxfRYxV7WlK3cz6np2OncyWY_8bgjKJqPxyV" alt="Brasil vence a Sérvia com uma obra de arte de Richarlison" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Brasil venceu a Sérvia por 2-0, numa partida em que só conseguiu abrir o marcador aos 62 minutos.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/brasil/mundial-2022-brasil-servia-2-0-cronica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial 2022: Brasil-Sérvia, 2-0 (crónica)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6dXcHFbTw5yujMK4KcC713J7E_qYHtcARmjfUwBXaDHo49_3I8lfN1Exr-Qj4lSmw_Nzr1rvA" alt="Mundial 2022: Brasil-Sérvia, 2-0 (crónica)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mladenovic e Zivkovic, que tentaram dar profundidade na organização ofensiva da equipa, também não facilitaram a defender e Neymar, Raphinha e companhia iam&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/pt/mundo/20221124-mundial-2022-brasil-venceu-a-s%C3%A9rvia-por-2-0-como-em-2018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial-2022: Brasil venceu a Sérvia por 2-0 como em 2018</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKPrR6HGoc-cPs5sPR5O8dBBRgimcJC_AI1gLuakEkaF4LQ_kJTVWsLYjMPuwJHuKTHmalPG7g" alt="Mundial-2022: Brasil venceu a Sérvia por 2-0 como em 2018" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Selecção Brasileira de futebol venceu por 2-0 frente à Sérvia num jogo a contar para o Grupo G do Campeonato do Mundo que decorre no Qatar.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-24/brasil-thiago-silva-da-troco-ao-selecionador-servio-va-informar-se-melhor/966040'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiago Silva &#39;dá troco&#39; ao selecionador sérvio: «Vá informar-se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTm_ali86z_W4zQT0JgTKCfN3kTXkEWM1PXm_zoFVHLDaeH7AGB7_Yd2VzYQXi7yYFu4LLcWWzMFw" alt="Thiago Silva &#39;dá troco&#39; ao selecionador sérvio: «Vá informar-se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As declarações de Dragan Stojkovic, selecionador da Sérvia, parecem não ter sido bem encaixadas pelos jogadores brasileiros. Na antevisão ao jogo entre as&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-internacional/2022/11/24/brasil-em-alerta-neymar-lesionado/309457/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil em alerta. Neymar lesionado - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHcIpfqKkG4Px6VzJxGDFpYMZ3rYWimaBV-cHdbsjt5qfpYzorrc_YkdNbdlY4bTtfUh3OY1GK" alt="Brasil em alerta. Neymar lesionado - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médico do escrete, Rodrigo Lasmar, já falou sobre a situação do jogador do PSG. “Sofreu uma entorse, o tornozelo inchou, já iniciou tratamento. Temos de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundial-2022/selecionador-do-brasil-mostra-se-confiante-na-continuidade-de-neymar_d1449430'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Selecionador do Brasil mostra-se confiante na continuidade de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxnOOyrXrXJu-mT4RcATl36keNOlr35wKQ9xt9zxYeAglovynsOn4lkR5CAbu0brBNH5xe7ley" alt="Selecionador do Brasil mostra-se confiante na continuidade de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O selecionador do Brasil, Tite, mostrou-se hoje confiante na continuidade de Neymar no Mundial2022 de futebol, apesar da lesão sofrida frente à Sérvia (2-0)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}