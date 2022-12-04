import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Depay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Depay"/>
        <meta name="description" content="Trending News about Depay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Depay</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/12/03/638b68ff9576b.jpeg" alt="Depay"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/fora-de-campo/entenda-a-comemoracao-de-memphis-depay-atacante-da-holanda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda a comemoração de Memphis Depay, atacante da Holanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdHoSEREzaUHVOhwkiU_nqIj31bmGkMddW67hCv6R1MrF-f_chIYbTBZ5EBE6QFTEoqnIaFHMH" alt="Entenda a comemoração de Memphis Depay, atacante da Holanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador do Barcelona marcou o primeiro gol da equipe nas oitavas de final da Copa.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/depay-supera-huntelaar-e-mira-van-persie-em-lista-de-maiores-artilheiros-da-holanda,57868d28206373d26338eceb327ecf74u5z9vp7e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depay supera Huntelaar e mira Van Persie em lista de maiores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8XNFcMNBuOBOEFlxyhsa5v64gF1Wacsomn2YQmUKuXnTUZCdbmgmTopEG_4bRZxLlqbB4AFcd" alt="Depay supera Huntelaar e mira Van Persie em lista de maiores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Holanda venceu os Estados Unidos por 3 a 1 e confirmou vaga nas quartas de final da Copa do Mundo. Autor de um dos gols, Memphis Depay chegou a 43 tentos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/holanda/com-gol-diante-dos-eua-depay-se-torna-segundo-maior-artilheiro-da-holanda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com gol diante dos EUA, Depay se torna segundo maior artilheiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvZJ5rAVGRTLawmkqrIsL-80o4B6DGMOSLkIiQ2c3pFQuToWOl1zek0xj42EOGcFaYXfSKchSD" alt="Com gol diante dos EUA, Depay se torna segundo maior artilheiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depay anotou o gol que abriu o placar para a Holanda e se tornou o segundo maior artilheiro da história da Holanda, com 43 tentos.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/12/03/camisa-10-da-holanda-memphis-depay-devolve-provocacao-de-lenda-da-nba-muito-latido-pouca-mordida.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Camisa 10 da Holanda, Memphis Depay devolve provocação de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Camisa 10 da Holanda, Memphis Depay devolve provocação de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste sábado (3), Holanda e Estados Unidos se enfrentaram, no Khalifa International Stadium, e a equipe europeia venceu por 3 a 1, com gols de Depay,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/copa-do-mundo/com-gol-contra-os-eua-depay-vira-o-2-maior-artilheiro-da-selecao-da-holanda-1.2776562'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com gol contra os EUA, Depay vira o 2º maior artilheiro da seleção ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyGm8yrI6fUBBqyaWR57XEf7aTHAzhMRXWwHIcYBki7PYNzS91YZNXZ7ZZKjFoavczxKdwWZsh" alt="Com gol contra os EUA, Depay vira o 2º maior artilheiro da seleção ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador holandês fez seu 3º gol em Copas e o 43º dele com a camisa holandesa ultrapassando Huntelaar, que era o 2º maior artilheiro da Holanda;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=425737'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depay isola-se como o segundo melhor marcador da «Laranja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwShKaztNbSAnWZKGplTS_JudczSAdiZs-5TR0zwEWgYbvmf8QJoCllZSYuLWdoOLM25_5wP7i" alt="Depay isola-se como o segundo melhor marcador da «Laranja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com apenas menos sete golos que Robin van Persie, o jogador do Barcelona ultrapassou Huntelaar e está cada vez mais perto do topo. Com 85 partidas de «laranja&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/futebol/narradora-da-globo-e-elogiada-por-acatar-pedido-de-jogador-da-holanda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Narradora da Globo é elogiada por acatar pedido de jogador da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCdh-ZkzQ4PEpVPko8G5c05-DUzzkT7dTaRYmzA23tvKROU0BE1BzDsVDGVDSlICNc7TwG8uDu" alt="Narradora da Globo é elogiada por acatar pedido de jogador da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Memphis, atleta da Holanda conhecido pelo sobrenome &quot;Depay&quot;, diz que o sobrenome paterno não o agrada e quer ser chamado pelo primeiro nome.</p></div>
            </div>
        </a>
        </Template></>;
}