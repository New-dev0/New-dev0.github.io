import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos de hoje da Copa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos de hoje da Copa"/>
        <meta name="description" content="Trending News about Jogos de hoje da Copa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos de hoje da Copa</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/08/15/550x300/1_album_da_copa_dourado-21549041.png" alt="Jogos de hoje da Copa"/>
            <h3>Recent News</h3>
            <a href='https://interior.ne10.uol.com.br/esportes/2022/11/15128469-quem-joga-hoje-pela-copa-do-mundo-confira-os-jogos-de-hoje-pela-copa-do-mundo-horario-e-onde-assistir-aos-jogos-de-hoje-25-11.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>QUEM JOGA HOJE PELA COPA DO MUNDO? Confira OS JOGOS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4TcZHsyxn4v3OaQuSWqXeLC91OI7L7sCVO-XZvj9jW9Qi0KKeL5e_YybX12WutvucFb6K7wD_" alt="QUEM JOGA HOJE PELA COPA DO MUNDO? Confira OS JOGOS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confira os horários das partidas da Copa do Mundo do Catar 2022.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/social1/2022/11/15128405-jogos-de-hoje-na-copa-do-mundo-quais-jogos-vao-ter-nesta-sexta-feira-25-veja-quais-selecoes-entra-em-campo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGOS DE HOJE NA COPA DO MUNDO: quais jogos vão ter nesta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2y_NmKcKEaaK2JJVaYGIqsPI5_1XfcZUeup6ECvpz2rGlvpxkqF70l-hBdudZ9l4FfaPDeIrF" alt="JOGOS DE HOJE NA COPA DO MUNDO: quais jogos vão ter nesta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois da estreia da Argentina, Portugal, Estados Unidos, Brasil, Gana... outras seleções se enfrentam nesta sexta-feira (25) dentro do maior campeonato de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.umdoisesportes.com.br/copa-do-mundo/2022/jogos-de-hoje-27-11-assistir-ao-vivo-horarios-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos de hoje (27/11), horários, assistir ao vivo e notícias | Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ60F7TsAHoWzoxPD1Xj9goIbT-vkthw9Cx6V8IQ1yPso6HM_OUeh2hWeAKeukRYqvwPo0wCsXQ" alt="Jogos de hoje (27/11), horários, assistir ao vivo e notícias | Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogos de hoje, 27/11, como assistir ao vivo, horários, notícias, todas as informações sobre as partidas da Copa do Mundo desta sexta-feira. Veja!</p></div>
            </div>
        </a><a href='https://www.opovo.com.br/copa-do-mundo-2022/2022/11/25/copa-do-mundo-2022-resultado-dos-jogos-de-hoje-sexta-feira-25-11.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo 2022: resultado dos jogos de hoje, sexta-feira (25/11)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJpNJiPWamqD1QLm4nfRx5Fdq-ZKMp1e9COvwmstHTWGqd0FG8l9s3ZUdBJwJacpcHwcQSWDfu" alt="Copa do Mundo 2022: resultado dos jogos de hoje, sexta-feira (25/11)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O primeiro jogo do dia foi o do Irã contra o País de Gales, no qual os iranianos saíram vitoriosos com o placar de 2x0. Confira os outros resultados.</p></div>
            </div>
        </a><a href='https://exame.com/esporte/jogos-da-copa-do-mundo-hoje-sexta-feira-25-onde-assistir-ao-vivo-e-horarios/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos da Copa do Mundo hoje, sexta-feira, 25; como assistir ao vivo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2GZRvyh6zeDerLhdt7QoZ7iihWsGGbOKiP4XICMr8CCW-sw-uZuUySGg3eWLlMOwAATxFHPhC" alt="Jogos da Copa do Mundo hoje, sexta-feira, 25; como assistir ao vivo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo desta sexta-feira às 10h entre Qatar x Senegal terá transmissão ao vivo no TV Globo, Globoplay, SporTV, FIFA+ e em tempo real na EXAME.</p></div>
            </div>
        </a><a href='https://mundorubronegro.com/copa-do-mundo/resultados-dos-jogos-de-hoje-da-copa-do-mundo-sexta-dia-25/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resultados dos jogos de hoje da Copa do Mundo: sexta, dia 25</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvBVKDzhA1GlIkQeeOzzjAmtT3AkoW2lARNNNfWz9kSakrK-UoQSJpdnk5EKMWc7hx_N66npR3" alt="Resultados dos jogos de hoje da Copa do Mundo: sexta, dia 25" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quatro jogos durante a manhã e tarde animaram o público do futebol, em partidas válidas pelos Grupos A e B da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.fashionbubbles.com/esporte/quais-jogos-copa-do-mundo-hoje-25-11/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quais os jogos da Copa do Mundo 2022 hoje, 25/11, sexta? Horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0CsGArDtcti4n5thjrDAJImApxZV5KKpv6gShdaVvwe1PezgFViZacphVSGrD67AjEzZZ9PJ0" alt="Quais os jogos da Copa do Mundo 2022 hoje, 25/11, sexta? Horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hoje, 25/11, sexta, tem 4 jogos da Copa do Mundo 2022! Veja que horas começa e placar de Gales x Irã, Catar x Senegal, Holanda x Equador e Inglaterra x EUA.</p></div>
            </div>
        </a>
        </Template></>;
}