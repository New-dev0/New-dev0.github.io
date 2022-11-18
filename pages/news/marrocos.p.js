import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marrocos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marrocos"/>
        <meta name="description" content="Trending News about Marrocos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marrocos</h1>
            <Image width={800} height={500} src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/WhatsApp-Image-2022-11-17-at-16.37.20-e1668713988457.jpeg" alt="Marrocos"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnbrasil.com.br/esporte/marrocos-vence-a-georgia-por-3-a-0-em-amistoso-antes-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marrocos vence a Geórgia por 3 a 0 em amistoso antes da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6niMXUyfRU5kFgP0eioQXeVHd2h_zq9R-ZSjzIXbtlU2--pnRXkQN4MFySjwinoX2OTEcX15p" alt="Marrocos vence a Geórgia por 3 a 0 em amistoso antes da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Youssef En-Nesyri marcou o primeiro gol aos cinco minutos da primeira etapa. Hakim Ziyech ampliou aos 29 minutos. Sofiane Boufal ampliou aos 27 do segundo tempo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/marrocos/selecao-do-marrocos-reune-estrelas-do-futebol-mundial-confira,5b0a88abeebf339876e5b89cceeb28475p9zftfh.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seleção do Marrocos reúne estrelas do futebol mundial; confira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeVuyX-H4MTAJ-NZV6Q9zzw5YeK-YKTBtfBrZ5ImSeBveaBP-2aHlIbmtFxAzSE5n_3_Fzb0Tg" alt="Seleção do Marrocos reúne estrelas do futebol mundial; confira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confira um pouco sobre a seleção do Marrocos, que disputa sua sexta Copa do Mundo e conta com jogadores conhecidos mundialmente, como Hakimi, do PSG,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/marrocos/com-golaco-de-antes-do-meio-de-campo-marrocos-goleia-a-georgia-em-amistoso-antes-da-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com golaço de antes do meio de campo, Marrocos goleia a Geórgia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYRrWlZVv-XlC2gdp6QVzQ74EVhb8F3UUXf_eXbehDPj3Fy-Tj4X55ISSiAusRgb2aFXcQOB7n" alt="Com golaço de antes do meio de campo, Marrocos goleia a Geórgia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ziyench fez um belo gol na vitória marroquina no Sharjah Stadium, nos Emirados Árabes Unidos. En-Nesyri e Boufal completaram a goleada uma semana antes da&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maisgoias.com.br/raio-x-da-copa-conheca-o-marrocos-os-leoes-do-atlas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raio X da Copa: Conheça o Marrocos, os Leões do Atlas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbwZCakApBUp7om-XcgaVCjJjZLrYOBjX6alEm5aFhMRTSRtzkDs2__hkHaxzyJqwal2_IQkMD" alt="Raio X da Copa: Conheça o Marrocos, os Leões do Atlas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>País: Marrocos. Continente: África. Técnico: Hoalid Regragui, marroquino. Principal destaque: Hakimi, lateral do Paris Saint-Germain vem em uma fase&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/17/ziyech-faz-golaco-de-antes-do-meio-de-campo-em-amistoso-do-marrocos-com-a-georgia.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ziyech faz golaço de antes do meio de campo em amistoso do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQH54ybUElHbZNkp4UYKh1mboqRuA9fxwLeTj5265t9KRTYSNBIEwR6PIpA9fLHqr1KLHPAwHrpMA" alt="Ziyech faz golaço de antes do meio de campo em amistoso do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador do Chelsea encobriu o goleiro da Geórgia em jogo preparatório para a Copa do Mundo.</p></div>
            </div>
        </a><a href='https://tntsports.com.br/tntsportsnoqatar/Ziyech-marca-golaco-em-ultimo-amistoso-de-Marrocos-antes-da-Copa-do-Mundo-20221117-0031.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ziyech marca golaço em último amistoso de Marrocos antes da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaY-8dLCdKLKc4SYVPXpumQHADt9w3r_LoT5dCgPnFxx2Afo0yHr34CzYxlUgwZp44vpXdD_w6" alt="Ziyech marca golaço em último amistoso de Marrocos antes da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção de Marrocos venceu a Geórgia no último amistoso da equipe antes da Copa do Mundo do Qatar. O destaque da partida ficou por conta de Hakim Ziyech,&nbsp;...</p></div>
            </div>
        </a><a href='https://trivela.com.br/africa/ziyech-mostra-suas-credenciais-para-a-copa-do-mundo-com-um-golaco-do-meio-campo-por-marrocos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ziyech mostra suas credenciais para a Copa do Mundo com um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMYcbmc99Ptyt80tUP-ej6l7zhSgMwPTbcEm7aW3cAbZPBvEQ88no8nYtajPv-yk3yOFwYjgBR" alt="Ziyech mostra suas credenciais para a Copa do Mundo com um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakim Ziyech não teve um ciclo fácil. Conseguiu uma grande transferência do Ajax para o Chelsea, mas nunca se firmou em Londres e chegou a constar em.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/17/craque-de-marrocos-faz-golaco-atras-do-meio-campo-em-amistoso-veja.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Craque de Marrocos faz golaço atrás do meio-campo em amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGUv-AqNDF5aOya2d5Im4hykABnjUUitPDU_D7KgojmZDD58IkqUaI68G_74HwWpBUNYtv_EdJ" alt="Craque de Marrocos faz golaço atrás do meio-campo em amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakim Ziyech, jogador da seleção de Marrocos, marcou um belo gol no amistoso contra a Geórgia, disputado no Estádio Sharjah, nos Emirados Árabes Unidos.</p></div>
            </div>
        </a><a href='https://observador.pt/especiais/marrocos-grupo-f-um-selecionador-com-tres-meses-no-cargo-e-as-memorias-bonitas-de-1986/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marrocos (Grupo F). Um selecionador com três meses no cargo e as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn_Jy8ViCa-XPtYxyd_fRxb82wFPbMpgn9HpNlzbWMK1CTIJ6IZZ0Ux7PUrMNinEVWBUtzVKBC" alt="Marrocos (Grupo F). Um selecionador com três meses no cargo e as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marrocos chega ao segundo Mundial consecutivo para igualar melhor resultado de sempre, os oitavos no México 86. Hakimi e Ziyech são as grandes figuras de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/copa-do-mundo/2022/copa-do-mundo-marrocos-trocou-de-tecnico-mas-chega-otimista-a-copa-do-catar-1.2764657'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: Marrocos trocou de técnico, mas chega otimista à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpl5FYK6XEiCi2nBhLE9Yzxz1o2v4K9dLolQ7TZFqWrDinM51RchXYGiqLM7t3zL5br2v7McHN" alt="Copa do Mundo: Marrocos trocou de técnico, mas chega otimista à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção marroquina chega para a Copa após a demissão, em agosto, do técnico bósnio Vahid Halilhodzic, que classificou o Marrocos para o Mundial no Catar com a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}