import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Freddie Mercury</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Freddie Mercury"/>
        <meta name="description" content="Trending News about Freddie Mercury" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Freddie Mercury</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Fmag-sapo%2Ffacebook-overlay.png&epic=NDlifqPhqR5iX52/5XVfcDuI9j8LCtfk67izbAN6cvOqlG+Jv+ryxvBFk+IT/Ovf4c+mVSnMmlOZWzcK4QXSv7G0lpBBHnaK/dYvAiEkFY+S6mc=" alt="Freddie Mercury"/>
            <h3>Recent News</h3>
            <a href='https://mag.sapo.pt/musica/artigos/porque-e-que-a-voz-de-freddie-mercury-era-tao-especial-ciencia-explica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freddie Mercury morreu há 31 anos. Porque é que a voz do músico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRHwrSbxUeh7QpXG8BeGexr2hH_ERPL49_WfONTUbX6ygO5wSbAb2pZ2oOLBMeUoiAsRV84d9d" alt="Freddie Mercury morreu há 31 anos. Porque é que a voz do músico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freddie Mercury morreu a 24 de novembro de 1991, há 31 anos. Segundo um estudo, o músico é o artista com a melhor voz de sempre.</p></div>
            </div>
        </a><a href='https://whiplash.net/materias/news_713/347178-freddiemercury.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor de ópera Andrea Bocelli exalta Elvis Presley e Freddie Mercury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwP8-Y1z3cLKFX1s028tvFzBqahY6a6dF5j2NSZUgb4m5MwnBIjpz7cUfUYEARkmrUvChUdi9h" alt="Cantor de ópera Andrea Bocelli exalta Elvis Presley e Freddie Mercury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Por André Garcia) Um dos maiores cantores de ópera de sua geração, o tenor italiano Andrea Bocelli começou a estudar música aos 7 anos.</p></div>
            </div>
        </a><a href='https://whiplash.net/materias/news_713/347181-queen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queen relembra Freddie Mercury, que faleceu há 31 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT13BT7pq1YAxYN1pFT_zzn2SUgHXHC8WlWe1bSKUZJsDTaxnVCakgzSpYhL17IeSN-IL0kKfsa" alt="Queen relembra Freddie Mercury, que faleceu há 31 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Por Mateus Ribeiro) O talentoso cantor e compositor, dono de uma das vozes mais marcantes de todos os tempos, morreu em 24 de novembro de 1991,&nbsp;...</p></div>
            </div>
        </a><a href='https://folhabv.com.br/noticia/VARIEDADES/Cultura/31-anos-sem-Freddie-Mercury/92759'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>31 anos sem Freddie Mercury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKBLAt5KDSr9LlhaPgMWPbkKCBVm9OGA569PwHyfP-a44qtlOLBcc59WttNOl2AsbUeGIsi-ua" alt="31 anos sem Freddie Mercury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freddie Mercury, Brian May, Roger Taylor e John Deacon formam a banda de rock Queen em 1970. Quando o estilo de vida agitado de Mercury começa a sair de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/diversao/musica/31-anos-sem-freddie-mercury-star-celebra-a-vida-do-lendario-roqueiro,b37fcb78f43d90987410ba0bc41ddb21ohsk8hhh.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>31 anos sem Freddie Mercury: Star+ celebra a vida do lendário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSj5K3S31Sb-UWYsDAK1zMDUYfx09YrbpA2YzulhyzgyzVw8YdLuIsG8royuHdDCPX9dLH6iz_K" alt="31 anos sem Freddie Mercury: Star+ celebra a vida do lendário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quinta-feira (24) são completados 31 anos sem Freddie Mercury, um dos maiores vocalistas de todos os tempos. O cantor, pianista e compositor britânico&nbsp;...</p></div>
            </div>
        </a><a href='https://estacaonerd.com/especial-freddie-mercury-31-anos-sem-a-estrela-do-rock/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Especial Freddie Mercury | 31 Anos sem a estrela do Rock</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVmAa9wk3VqIjc5E0STYj2TYfeb8OPe_5hcOkEXUOSzrzmCpbEuEDNtI83PvAFdmYhAAqrGwUO" alt="Especial Freddie Mercury | 31 Anos sem a estrela do Rock" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com uma voz e personalidade única, o vocalista da banda Queen foi um cantor, pianista e compositor britânico que se tornou conhecido pelo tom poderoso de sua&nbsp;...</p></div>
            </div>
        </a><a href='https://www.msn.com/pt-br/musica/noticias/como-freddie-mercury-se-tornou-algu%C3%A9m-que-todo-mundo-ama/ss-AA14vj1C'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como Freddie Mercury se tornou alguém que todo mundo ama?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrs2IF262zlE0no6Hw0ovYhKgOC7_V7gPCg6OlPof4qct-lUi8EG4oJ_QJv1tNU25qPMfS7Is-" alt="Como Freddie Mercury se tornou alguém que todo mundo ama?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não é exagero dizer que Freddie Mercury foi um dos maiores artistas de todos os tempos. Com uma voz, carisma e presença de palco únicos, o vocalista do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}