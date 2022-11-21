import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Italia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Italia"/>
        <meta name="description" content="Trending News about Italia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Italia</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/03/30/615x300/1_4__1_-20773620.jpg" alt="Italia"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/italia-se-despede-de-ano-frustrante-com-derrota-para-a-austria-em-amistoso,22e3b549a6bcb62f87ac3973657c60044niibcac.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Itália se despede de ano frustrante com derrota para a Áustria em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Itália se despede de ano frustrante com derrota para a Áustria em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Técnico Roberto Mancini volta a reunir a seleção em março do ano que vem para confronto das Eliminatórias da Eurocopa.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15124238-italia-na-copa-do-mundo-italianos-jogam-hoje-confira-onde-assistir-ao-vivo-ao-jogo-da-azzurra-neste-domingo-20.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ITÁLIA NA COPA DO MUNDO? Italianos jogam hoje? Confira onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7nZfMX0ufQ4KvcbBOxQfRYt2IHvklQ7QGpL98DIXmt40R-pPs6-wh56XLNLDQcQrjT4DkYPU6" alt="ITÁLIA NA COPA DO MUNDO? Italianos jogam hoje? Confira onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O detalhe é que a Itália não está na Copa do Mundo. Os italianos não conseguiram a classificação e terão que assistir ao Mundial pela TV.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15124359-transmissao-ao-vivo-de-austria-x-italia-veja-horario-escalacoes-e-onde-assistir-o-jogo-da-italia-durante-a-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRANSMISSÃO AO VIVO DE ÁUSTRIA X ITÁLIA: Veja horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2fSSTxF7gvC749ltlALdo0JGHsn4F7aVplGU9rs0upNDuLXQtOO8K9_0KTPrxpn3c6mbdjdQ-" alt="TRANSMISSÃO AO VIVO DE ÁUSTRIA X ITÁLIA: Veja horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Itália não está classificada para a Copa do Mundo 2022, mas, a tetracampeã mundial irá entrar em campo neste domingo (20), logo após o Equador vencer o&nbsp;...</p></div>
            </div>
        </a><a href='https://tntsports.com.br/melhorfuteboldomundo/Veja-os-lances-de-Austria-e-Italia-amistoso-internacional-20221120-0012.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veja os lances de Áustria e Itália, amistoso internacional</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCDCqZEIBTLhha87N09zQ5-2GCayq09ILgf6fgJORZN9VYuZ4hc3EW6oC6QrfYdAdQk5qk1iEv" alt="Veja os lances de Áustria e Itália, amistoso internacional" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1º TEMPO. 35 minutos: GOL DA ÁUSTRIA! Alaba acerta bela cobrança de falta (e conta com ajudinha de Donnarumma) para ampliar o placar.</p></div>
            </div>
        </a><a href='https://trivela.com.br/europa/a-italia-teve-um-melancolico-amistoso-neste-domingo-e-perdeu-da-austria-com-bomba-de-alaba-em-cobranca-de-falta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Itália teve um melancólico amistoso neste domingo e perdeu da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3aqK1AFYVC5QGGJk60epvFd3xr-dgUVqCExVsEVC4RcbRsy_KNDU_DxRcmYgNeUO9-kEUvXz6" alt="A Itália teve um melancólico amistoso neste domingo e perdeu da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alaba e Schlager marcaram os gols no jogo que encerrou o ano da Itália.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/internacional/artigos/italia-perde-em-viena-com-a-austria-em-jogo-particular'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Itália perde em Viena com a Áustria em jogo particular</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLe6g1BUxSdwt4h2_6Lj7xxUVyozitKo_1GV5VXslpIYwuejxFpLXduu-FdlRxPmVI7ActKwe9" alt="Itália perde em Viena com a Áustria em jogo particular" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Campeão mundial em 1934, 1938, 1982 e 2006, a seleção italiana falhou o Mundial2018, na Rússia, e agora o Mundial2022, que arrancou hoje no Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}