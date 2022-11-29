import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alex Sandro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alex Sandro"/>
        <meta name="description" content="Trending News about Alex Sandro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alex Sandro</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/nVHkBLmUJEGMdTxg56Bd-tCj52A=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/l/i/Z2vggiTha9N38cBapc6Q/52530278360-22e0186747-k.jpg" alt="Alex Sandro"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecao-brasileira/noticia/2022/11/28/alex-sandro-tem-incomodo-mas-minimiza-risco-de-novo-problema-por-lesao-no-brasil-senti-cansaco.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Sandro tem incômodo, mas minimiza risco de novo problema ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4ny8muba0IzqRHSICbFV-lXXZ7q0EGONAwheksSu-BPBll-98etqeWCnxmjSi95MLpEPnLUtg" alt="Alex Sandro tem incômodo, mas minimiza risco de novo problema ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-esquerdo teve um incômodo no adutor durante o segundo tempo da vitória sobre a Suíça e foi substituído por Alex Telles. Danilo e Neymar já estão em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/selecao-brasileira/artigo/_/id/11295015/alex-telles-explica-por-que-entrou-lugar-alex-sandro-revela-pedido-durante-comemoracao-gol-brasil-se-prepara'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Telles explica por que entrou no lugar de Alex Sandro e revela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZRHhltrCjbBGXq8IU9RVX-mboIVelAnHLH3q45Y5b6xFLOqsB0bpvCmY_HPApr5gmj0j8YQFE" alt="Alex Telles explica por que entrou no lugar de Alex Sandro e revela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção brasileira venceu a Suíça por 1 a 0 e se classificou às oitavas da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/brasil/alex-sandro-sente-incomodo-mas-tranquiliza-situacao-de-outra-lesao-na-selecao,fa64fee673de44e31a75b5c46ba4ab26m3wx2t83.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Sandro sente incômodo, mas tranquiliza situação de outra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-yVJH18-D-cGUy5vQBTG2Ttt-uAjntAymuqzWbXDeq7Wc6Xyn4FFHNC5K6sDKCXLMpHVXIi7X" alt="Alex Sandro sente incômodo, mas tranquiliza situação de outra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-esquerdo deixou jogo contra a Suíça mancando e com dores no adutor, mas afirma que não preocupa por possível nova lesão para o Brasil na Copa do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/28/alex-sandro-sente-incomodo-mas-diz-que-nao-preocupa-senti-cansaco.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Sandro sente incômodo, mas diz que não preocupa: &#39;senti ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Alex Sandro sente incômodo, mas diz que não preocupa: &#39;senti ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O camisa 6 da Seleção Brasileira, Alex Sandro sentiu incômodo na vitória diante da Suíça por 1 a 0, esta segunda-feira (28), no estádio 974,&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15130616-lesao-na-selecao-brasileira-para-a-copa-do-mundo-alex-sandro-esta-lesionado-veja-a-situacao-do-lateral-do-brasil-na-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LESÃO NA SELEÇÃO BRASILEIRA PARA A COPA DO MUNDO ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGraHZWPPbU7JND1QERS7M8iPVgh75OsUvRHGdR0-vjJl7ryP9QsJ-gDxgWZv8BQkzkxsxG9fz" alt="LESÃO NA SELEÇÃO BRASILEIRA PARA A COPA DO MUNDO ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acontece que, mesmo com a vitória, um lance preocupou os torcedores brasileiros. Acontece que o lateral-esquerdo Alex Sandro foi substituído e sua reação&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/noticias/eu-senti-um-cansaco-alex-sandro-fala-sobre-substituicao-em-jogo-contra-a-suica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Eu senti um cansaço”; Alex Sandro fala sobre substituição em jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwVmky5LsT8ojZR5XnT9K2tPlDLoX3vvZ-eYaene9qNtMnFQjHala0LLmhDhUXf46L-xMzR08J" alt="“Eu senti um cansaço”; Alex Sandro fala sobre substituição em jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com um golaço de Casemiro, a Amarelinha saiu vitoriosa de mais uma partida. No primeiro duelo do Mundial, a equipe de Tite venceu por 2 a 0 a Sérvia, com tentos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}