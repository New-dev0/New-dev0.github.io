import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Neco Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Neco Williams"/>
        <meta name="description" content="Trending News about Neco Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Neco Williams</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/KJtFVS62K4FSQ3H7Yiv0QjHD6Po=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11144215.jpg" alt="Neco Williams"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/pais-de-gales/noticia/2022/11/21/faixa-da-torcida-de-gales-compara-zico-a-neco-williams-veja-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Faixa da torcida de Gales compara Zico a Neco Williams; veja vídeo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGgyXfgtz9h_mgHXCu9mIhKwxLkDlOK-aciiD1D24zmbl_NtKkym1LJ3O__0VOwc80ILZecUJV" alt="Faixa da torcida de Gales compara Zico a Neco Williams; veja vídeo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Torcedores fazem festa na arquibancada para a partida de estreia na Copa do Mundo, contra os EUA.</p></div>
            </div>
        </a><a href='https://trivela.com.br/copa-do-mundo/as-lagrimas-de-neco-williams-apos-a-estreia-de-gales-eram-por-seu-avo-seu-grande-incentivador-falecido-na-vespera/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As lágrimas de Neco Williams após a estreia de Gales eram por seu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoEd_-MmEmBu7TAFmvu2jKllKBXE0c1n29YffHpDLN8tUiHuRRrBL-1WCpODGiD0g6LBvb9ae7" alt="As lágrimas de Neco Williams após a estreia de Gales eram por seu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neco Williams recebeu a notícia de sua mãe na véspera do jogo e, ao final do empate, não conteve a emoção.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/21/neco-williams-revela-perda-de-familiar-antes-da-estreia-de-pais-de-gales-na-copa-do-mundo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neco Williams revela perda de familiar antes da estreia de País de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Neco Williams revela perda de familiar antes da estreia de País de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta segunda-feira (21) foi especial para País de Gales. 64 anos depois, o país voltou a disputar uma Copa do Mundo e, de quebra, ainda conseguiu arrancar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/futebol/torcida-de-pais-de-gales-compara-lateral-neco-williams-com-zico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcida de País de Gales compara lateral Neco Williams com Zico</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBSv1tLbbxGWVbjVWGDhssA-nqoPv2c9LThsfaC6RiNgm18AqAK9KckFqyw77etKhjCK7Jd4e9" alt="Torcida de País de Gales compara lateral Neco Williams com Zico" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Brasil teve Zico, nós temos Neco&quot;, era o que dizia uma bandeira durante partida entre EUA X País de Gales, pela 1ª rodada do Grupo B.</p></div>
            </div>
        </a><a href='https://colunadofla.com/2022/11/faixa-da-torcida-de-gales-compara-zico-a-neco-williams-na-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Faixa da torcida de Gales compara Zico a Neco Williams na Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVLuvuuKaWNlP6f732KI88GDMK7m0r2gZWpS2xoSu-EB0MZTnZFwn3BFqrL6XubNgnmUOjuSaT" alt="Faixa da torcida de Gales compara Zico a Neco Williams na Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maior ídolo da história do Flamengo foi lembrado no jogo entre País de Gales x Estados Unidos Depois de uma longa contagem regressiva, a Copa do Mundo do&nbsp;...</p></div>
            </div>
        </a><a href='https://mundorubronegro.com/copa-do-mundo/torcida-pais-de-gales-compara-zico-neco-williams-copa-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcida de País de Gales compara Zico com Neco Williams</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRavYobwnRy85ePEPBeE-eILRmbR9JiPlEHbYx-UwSFSIF2jQR4E59kRFNGZKhdybWWCPPuE4x0" alt="Torcida de País de Gales compara Zico com Neco Williams" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Torcedores de País de Gales na Copa do Mundo levaram uma bandeira para o estádio comparando Zico e Neco Williams.</p></div>
            </div>
        </a>
        </Template></>;
}