import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Holanda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Holanda"/>
        <meta name="description" content="Trending News about Holanda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Holanda</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/r_nQfUU5XlbEx_4971-xSRuW4VY=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/11128952.jpg" alt="Holanda"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/holanda/noticia/2022/11/20/holanda-x-senegal-equipe-europeia-entra-em-campo-defendendo-curiosa-escrita-em-jogos-de-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Holanda x Senegal: equipe europeia entra em campo defendendo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0tpvyyUFXFPXLKigGNv40yJDUS4a0bWJUxDZaeMyM9I0Y8LGM15kdnrUEgp9YdKlQrltgWakE" alt="Holanda x Senegal: equipe europeia entra em campo defendendo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holandeses nunca perderam um jogo de Copa, no tempo regulamentar, por mais de um gol de diferença.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/copa-do-mundo-senegal-e-holanda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo da Copa Ao Vivo: Senegal x Holanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5Hz3FuKTffIyEeEM9HLwxlDcV9ycFBcvmltvU2LeFwp4scocihO0uTBZaG02Q6cNLlie3UEKl" alt="Jogo da Copa Ao Vivo: Senegal x Holanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acompanhe todos os jogos da Copa ao vivo no site da CNN. Veja também, minuto a minuto, as estatísticas, lances e as escalações das seleções no Catar.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/copa-do-mundo/senegal-x-holanda-veja-informacoes-do-jogo-pela-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: veja informações do jogo pela Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1FNk6HdhQlLSLxk-3brvnpFjTIog0wrKY3-UJ7pL7XOtHi1TRvVHCggWezRBCIeDxdxxvR05p" alt="Senegal x Holanda: veja informações do jogo pela Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira, Senegal e Holanda vão se enfrentar pela primeira rodada da fase de grupos da Copa do Mundo no Catar.</p></div>
            </div>
        </a><a href='https://radios.ebc.com.br/especiais-radio-mec/2022/11/escalacao-musical-holanda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escalação Musical: Holanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQgLLLTpgvsRIiLYf6P-ebk4J2e-WlYy3lUcllnncoInUENmMrTB-Zlyq9BYV7Cb6QpL2mwG_O" alt="Escalação Musical: Holanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Holanda talvez seja a melhor seleção na história das Copas do Mundo que nunca conseguiu ganhar a tão disputada taça. É a quarta seleção com mais finais na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/20/senegal-x-holanda-retrospecto-provaveis-escalacoes-onde-assistir-e-arbitragem.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: Retrospecto, prováveis escalações, onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Senegal x Holanda: Retrospecto, prováveis escalações, onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira (21), Senegal e Holanda se enfrentam, no Al Thumama Stadium, em partida válida pela 1ª rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.record.pt/aposta-na-desportiva/detalhe/senegal-holanda-holandeses-defendem-serie-de-jogo-sem-perder-no-arranque-do-mundial'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal-Holanda: holandeses defendem série de jogo sem perder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJhdADqPW_9vMof9ReK1l39oGgHYpTLBOrQnGjmdMOCJUSCRaf1s0jKPOMRRUlf1v0MvSnHqig" alt="Senegal-Holanda: holandeses defendem série de jogo sem perder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipa que teoricamente é a grande candidata a avançar em primeiro lugar neste Grupo A do Mundial&#39;2022, a Holanda inicia a sua caminhada diante do Senegal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/20/catar-2022,3980258/senegal-x-holanda-veja-prognosticos-para-duelo-da-copa-do-mundo.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal x Holanda: veja prognósticos para duelo da Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRF4_3aG-ptsqRKoxHtwdGQpjOHcxVUE1IkZTaXw7w7n4E10ONNm1kb2Q69e3a9s2Q-MMZNnlp7" alt="Senegal x Holanda: veja prognósticos para duelo da Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casas de apostas atuantes no Brasil apontam seleção favorita para vencer o segundo jogo do Grupo A da Copa do Mundo no Catar; veja palpites.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/colunas/blog-da-amara-moira/2022/11/20/a-pedra-no-sapato-da-selecao-brasileira.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blog da Amara Moira - A pedra no sapato da seleção brasileira nas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGYQiz545nU6Prj3BWtXSFk4GlhsRFValtMmgkDZuVLe8VQG9QZ-7BC0b6Cs2tLu0wBzC7Fend" alt="Blog da Amara Moira - A pedra no sapato da seleção brasileira nas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Holanda pode ter dificultado bastante para o Brasil nas últimas Copas, mas a verdadeira pedra no sapato que a gente precisa enfrentar é outra.</p></div>
            </div>
        </a>
        </Template></>;
}