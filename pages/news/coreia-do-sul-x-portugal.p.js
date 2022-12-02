import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coreia do Sul x Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coreia do Sul x Portugal"/>
        <meta name="description" content="Trending News about Coreia do Sul x Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coreia do Sul x Portugal</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2a46987d41544090/63883618b8da5b7ad8887dc7/Cho_Gue-sung_Korea_Republic_Bruno_Fernandes_Portugal.jpg" alt="Coreia do Sul x Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/br/not%C3%ADcias/coreia-do-sul-portugal-copa-mundo-2022-onde-assistir-tv-escalacao/bltd66085037a262485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal: onde assistir ao vivo e online, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM3BhYs3MUT6ul6YQ-Qoy-au674gVuHbbpeIyn8ptsDHDJly6eLPqqTsc9UtJue6mcpuy4RCb9" alt="Coreia do Sul x Portugal: onde assistir ao vivo e online, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já classificados, lusos enfrentam coreanos que ainda sonham com a vaga à próxima fase; veja como acompanhar na TV e na internet.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/copa-do-mundo/coreia-do-sul-x-portugal-escalacoes-e-informacoes-sobre-o-jogo-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal: escalações e informações sobre o jogo da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRBMbYqb5RY0UPHUegG7aD9_M4RhDLyFv4ylGW3eWWcrveLNMbvgSY2yVhVvjNg9us0bVceShK" alt="Coreia do Sul x Portugal: escalações e informações sobre o jogo da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal e Coreia do Sul encerram suas participações na fase de grupos da Copa do Mundo do Catar nesta sexta-feira. O confronto válido pelo grupo H está.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/coreia-do-sul-x-portugal-onde-assistir-provaveis-times-e-desfalques-do-jogo-da-copa-do-mundo,63e5e2578aa63cf20def0b832e511868299u0c3s.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal: onde assistir, prováveis times e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSH8l7lxJFLEYZUuwc7vvd4htIVZOlhJv84uCd-JoOVK7qEVq7FRq0hHpGZDAK6RWi9RKvFZwy9" alt="Coreia do Sul x Portugal: onde assistir, prováveis times e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já classificado ao mata-mata da Copa, Portugal busca o primeiro lugar do grupo, enquanto os Tigres Asiáticos não dependem de si.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/12/01/catar-2022,3982069/coreia-do-sul-x-portugal-os-prognosticos-para-o-jogo-pela-copa-do-mundo.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal: os prognósticos para o jogo pela Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYO5hpqlzFZRDomjrRchZSx7psErYWhcrgsb4sAQiotqachksvpWcbbOvL6f-dVOSPUXnmFJSn" alt="Coreia do Sul x Portugal: os prognósticos para o jogo pela Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casas de apostas atuantes no Brasil apontam seleção favorita para vencer o jogo da terceira rodada do Grupo H do Mundial no Catar; veja palpites.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11301715/portugal-classificado-gana-coreia-do-sul-uruguai-na-briga-confira-contas-grupo-h-vaga-oitavas-copa-do-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal classificado; Gana, Coreia do Sul e Uruguai na briga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWC23tUP81AJpoLiTi5t26ofCA_-Ka3hUuYA-HFJ_RI1gqf5t_ZJHnr6_FiwbrnxVWan1q3cJs" alt="Portugal classificado; Gana, Coreia do Sul e Uruguai na briga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção de Cristiano Ronaldo pode ficar em primeiro até com uma derrota. Gana sai na frente pela segunda vaga.</p></div>
            </div>
        </a><a href='https://sportbuzz.uol.com.br/noticias/agenda/coreia-do-sul-x-portugal-na-copa-do-mundo-saiba-onde-assistir.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal na Copa do Mundo: saiba onde assistir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTFasRM9QCHfO88BKYaYlkTgjAnTktrLBlRXnT4frcSDQRJwrjTV6BUEuQIzXpEJNpqsdpXXjn" alt="Coreia do Sul x Portugal na Copa do Mundo: saiba onde assistir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coreia do Sul e Portugal se enfrentam nesta sexta-feira, 2, às 12h (horário de Brasília), em duelo válido pela terceira rodada da fase de grupos da Copa do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.90min.com/pt-BR/posts/coreia-do-sul-x-portugal-onde-assistir-ao-vivo-na-tv-horario-provavel-escalacao-ultimas-noticias-e-palpite-copa-do-mundo-02-12-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coreia do Sul x Portugal: onde assistir ao vivo na TV, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZpNv8VZUwjXuSxFyF6C81C28lWV3hKxXqBV-vaeogHhTd6YtiqxwTxh-nYVdpD-Km-OfPMYOk" alt="Coreia do Sul x Portugal: onde assistir ao vivo na TV, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A bola rola para Coreia do Sul e Portugal a partir das 12h de Brasília desta sexta-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}