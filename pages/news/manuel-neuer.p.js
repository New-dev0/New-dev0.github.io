import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manuel Neuer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manuel Neuer"/>
        <meta name="description" content="Trending News about Manuel Neuer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manuel Neuer</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/12/02/16699854376389f49deafd1_1669985437_3x2_rt.jpg" alt="Manuel Neuer"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/esporte/2022/12/manuel-neuer-bate-recorde-de-taffarel-e-se-torna-o-goleiro-com-mais-jogos-em-copas.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manuel Neuer bate recorde de Taffarel e se torna o goleiro com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSh4kwd4dOBJwTr3esveLh_XBFH7H6fhO6G7Yh82LJwK1ee-3pr-QvRZ7BQFxd24yiL5TMo0IAl" alt="Manuel Neuer bate recorde de Taffarel e se torna o goleiro com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antes da partida contra o Japão, pelo grupo E da Copa do Mundo de 2022, no Qatar, os onze jogadores titulares posaram para a foto oficial com a mão sobre a boca&nbsp;...</p></div>
            </div>
        </a><a href='https://exame.com/esporte/manuel-neuer-supera-tafarel-e-se-torna-o-goleiro-com-mais-jogos-em-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manuel Neuer supera Taffarel e se torna o goleiro com mais jogos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3ZFQaAssDFhOv8vkMzTEbfpb26_1eaCcET6j2cyfK2EkONtTL4ak_nAmuxqp8ODK0tAkVBUd6" alt="Manuel Neuer supera Taffarel e se torna o goleiro com mais jogos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 36 anos, Neuer jogou no Catar a sua quarta Copa do Mundo.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/alemanha/noticia/2022/12/02/apos-eliminacao-e-recorde-na-copa-neuer-descarta-aposentadoria-da-selecao-da-alemanha.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após eliminação e recorde na Copa, Neuer descarta aposentadoria ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT28QSWMhcdheX6bHj-flWfo-79sMSCN1IDS_nQ0iCugMQ3gCLLy0u6IDRJFDCHhF4Pg2LrzdFb" alt="Após eliminação e recorde na Copa, Neuer descarta aposentadoria ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Neuer quebrou recordes no Catar. Aos 36 anos, tornou-se o goleiro com mais aparições em Copas do Mundo - superando os números do brasileiro Taffarel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/manuel-neuer-supera-taffarel-e-sepp-maier-e-se-torna-goleiro-com-mais-jogos-em-copas,28b607b77f0e672297e68961d46a37649bhz2628.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manuel Neuer supera Taffarel e Sepp Maier e se torna goleiro com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQX2sld7sFi4XNhvLsPd9q7VlSM9RZebDeE6JyqNpiHTeVWoT2qR4ojRHagaEXc9TUE1poPjTHN" alt="Manuel Neuer supera Taffarel e Sepp Maier e se torna goleiro com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goleiro da Alemanha chega a 19 partidas em Mundiais e deixa para trás outros importantes jogadores da posição.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/copa-do-mundo/manuel-neuer-da-alemanha-pode-se-tornar-goleiro-com-mais-jogos-em-copas-1.2775341'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manuel Neuer, da Alemanha, pode se tornar goleiro com mais jogos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3qVgwc-VudO-uWWFgEZqO1HE3TG7f44WKZ0UVX0GtUJ7ebLcAd10a1EaKsSRBX8NhsQd5F0bF" alt="Manuel Neuer, da Alemanha, pode se tornar goleiro com mais jogos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neuer ultrapassá o brasileiro Claudio Taffarel e o também alemão Sepp Meier em número de jogos em Copas do Mundo.</p></div>
            </div>
        </a>
        </Template></>;
}