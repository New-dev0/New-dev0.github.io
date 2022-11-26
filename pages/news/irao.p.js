import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Irao</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Irao"/>
        <meta name="description" content="Trending News about Irao" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Irao</h1>
            <Image width={800} height={500} src="" alt="Irao"/>
            <h3>Recent News</h3>
            <a href='https://www.acorianooriental.pt/noticia/irao-de-carlos-queiroz-bate-gales-com-dois-golos-nos-descontos-344985'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irão de Carlos Queiroz bate Gales com dois golos nos descontos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSUa7gHy5T0xTyLHfKM0zUKOvydMKarNB9yMBhboySPt9TLJDl8kwwsScDHCTm7MzKWuGoyFXy" alt="Irão de Carlos Queiroz bate Gales com dois golos nos descontos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Irão, orientado pelo treinador português Carlos Queiroz, ascendeu ao segundo lugar do Grupo B do Mundial de futebol de 2022, ao bater o País de Gales por&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/queiroz-heroi-irao-vence-pais-de-gales-e-esta-na-luta-pelo-apuramento-15387102.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queiroz herói. Irão vence País de Gales e está na luta pelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQe0N3gPMtJRxaJkykhDQ0XC_U5Pe84SSNG6sSE_E0-0EVHiMQEiWqHZvIzWH8yhaUtQK5X58iI" alt="Queiroz herói. Irão vence País de Gales e está na luta pelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comandados de Carlos Queiroz estreiam-se a vencer no Mundial com dois golos ao cair do pano, naquele que foi o primeiro jogo com uma expulsão e com um golo&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/irao/mundial-2022-pais-de-gales-irao-0-2-cronica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial 2022: País de Gales-Irão, 0-2 (crónica)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaeZAXoiRqpj6C9XH9vRrLxRxuX2B7WKr0XdRlvNo_OIJ9FOz2o-pEd0HUjd-lkjNWAlWYUvS-" alt="Mundial 2022: País de Gales-Irão, 0-2 (crónica)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Têm sido meses duros para os iranianos. Para os que manifestam contra o regime nas ruas do país, para aqueles que assistem de fora ao que se passa na terra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/buffon-enaltece-coragem-da-selecao-do-irao-voces-sao-herois-15388419.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffon enaltece &quot;coragem&quot; da seleção do Irão: &quot;Vocês são heróis&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjpfXErwKtUOUwJGUrxrWIfuToiDW7MKTSM2HF5b_135sImsKLyhoXWTzq33goDxgb_ibryPPS" alt="Buffon enaltece &quot;coragem&quot; da seleção do Irão: &quot;Vocês são heróis&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gianluigi Buffon, antigo guarda-redes e uma estrela do futebol mundial, elogiou a &quot;coragem&quot; dos jogadores da seleção iraniana pelo que têm feito durante o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-25/mundial-2022-irao-vence-pais-de-gales-com-dois-golos-nos-descontos/966051'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irão vence País de Gales com dois golos nos descontos (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSre9Aq9qG0K-NU4Eku8KTumwMM30BGuOzNr8-jayqpCBZBjAiExuFt1Db0Kkd7PmZoCIgtch2e" alt="Irão vence País de Gales com dois golos nos descontos (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois da goleada sofrida frente a Inglaterra (2-6), o Irão, sob o comando do português Carlos Queiroz, abdicou do sistema de três centrais e voltou à tática&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/multimedia/fotografias/irao-deixou-balneario-a-brilhar-depois-do-jogo-com-o-pais-de-gales-muito-obrigado-15388936.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irão deixou balneário a brilhar depois do jogo com o País de Gales ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKFYsTJSFbbObx0CLk7DRHiRmPi-vKek4IgSIbJoYwpsmonGP2VWz9KbHNxIIEE275pyRiffqG" alt="Irão deixou balneário a brilhar depois do jogo com o País de Gales ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção do Irão jogou esta sexta-feira com o País de Gales e venceu por 2-0, na segunda jornada da fase de grupos do Mundial&#39;2022. No final, a comitiva&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/golpe-de-teatro-deixa-o-irao-a-sonhar-15387196.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Golpe de teatro deixa o Irão a sonhar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-N8njKRyIvpxg8mx2B6seb-BvR1me0T3YGBllitMDNpZQvHFGOrWn39S045n5M-cIPfX207fs" alt="Golpe de teatro deixa o Irão a sonhar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi nas compensações do jogo entre País de Gales e Irão (0-2), que Chesmi realizou um grande remate e abriu o triunfo para equipa de Carlos Queiroz,&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/especiais/mundial-de-futebol/2022-11-25-A-redencao-de-Queiroz-deixa-o-Irao-a-sonhar-86512ef2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A redenção de Queiroz deixa o Irão a sonhar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMnPSmbh-Gljit6XcaZhZh7FHxCTu-ucsWBZIgB3lt9XB5TC9EyLf8-M2wIvLcyu1WlTgVhtdN" alt="A redenção de Queiroz deixa o Irão a sonhar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois da goleada sofrida frente a Inglaterra, a seleção iraniana venceu o País de Gales por 2-0.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-25/mundial-2022-coro-de-assobios-durante-o-hino-do-irao-video/966054'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coro de assobios durante o hino do Irão (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVkIr_TygTkSqr1W3GC1ricleV98y47ZRhWwa6yggl-AHGHRMjbaNy9uwGhXTw9SIBU_FbC2Nv" alt="Coro de assobios durante o hino do Irão (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Muitos assobios e apupos enquanto soava o hino do Irão no Estádio Ahmed bin Ali, a anteceder o duelo com o País de Gales, referente à segunda jornada do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/pt/mundo/20221125-mundial-2022-ir%C3%A3o-arrecadou-primeiro-triunfo-perante-pa%C3%ADs-de-gales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial-2022: Irão arrecadou primeiro triunfo perante País de Gales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNJ4gUxUp0AKAyLXiA9hWWpz_zctAxWdwaVTL6amhfH1PL749duOJ_b34KOxI3Vro1JaYzGrdU" alt="Mundial-2022: Irão arrecadou primeiro triunfo perante País de Gales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Selecção Iraniana, comandada pelo português Carlos Queiroz, venceu por 2-0 o País de Gales num jogo a contar para o Grupo B do Campeonato do Mundo que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}