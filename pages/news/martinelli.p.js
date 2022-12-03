import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Martinelli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Martinelli"/>
        <meta name="description" content="Trending News about Martinelli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Martinelli</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/67Z9REWr6iuHepzptR0Dt0U_6DU=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/11174656.jpg" alt="Martinelli"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/12/02/martinelli-perde-chuteira-em-contra-ataque-veja-o-lance-curioso.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martinelli perde chuteira em contra-ataque; veja o lance curioso</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4HEM3x-YmQKoTp48Bf-_wTaXKfwucV_nGs3PJKhYsX1-SG3sz1abDHZ8L66cqXN5BpHAugW7s" alt="Martinelli perde chuteira em contra-ataque; veja o lance curioso" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Destaque até aqui da seleção brasileira ana partida contra Camarões, Gabriel Martinelli chamou a atenção nas redes após lance curioso. O atacante puxava um&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/artigo/_/id/11317491/nao-precisamos-mudar-nada-diz-martinelli-destaque-do-brasil-apos-reves'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Não precisamos mudar nada&quot;, diz Martinelli, destaque do Brasil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFkMdmnVnYxng7AP90lDmDyWczrLKAO6XavFi_8VibOl4JfgqH0X4uZo1GNU4NfH5lQSA81iz3" alt="&quot;Não precisamos mudar nada&quot;, diz Martinelli, destaque do Brasil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gabriel Martinelli foi o destaque da Seleção Brasileira nesta sexta-feira, contra Camarões, pela última rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/selecao-brasileira/quem-e-gabriel-martinelli-novato-da-selecao-na-copa-do-mundo-e-destaque-do-arsenal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Gabriel Martinelli? Novato da Seleção na Copa do Mundo é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCnpPZCSST7Dd0tSX7lgovRWdnAX5pMlic2pcySMJNr6z9sMbCzv4rZ5zIq1N0n4XC1vksB3rR" alt="Quem é Gabriel Martinelli? Novato da Seleção na Copa do Mundo é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante é novidade na escalação da Seleção Brasileira contra Camarões; jogador de 21 anos vive temporada de destaque na Premier League.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/brasil/martinelli-leva-derrota-da-selecao-como-aprendizado-e-alerta-para-as-oitavas-botar-a-bola-na-rede,c5962d7969119c1582e79fa942ab81ef1pnn8xiv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martinelli leva derrota da Seleção como aprendizado e alerta para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmgYVgp8YzArYqRJgwfCJZL8IbjO2Yawd7d-jZcE0Yxz1hDQ_rDG1EgsTny0YgyX3NAcjxJiyh" alt="Martinelli leva derrota da Seleção como aprendizado e alerta para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Melhor em campo contra Camarões, atacante avaliou a atuação do Brasil na terceira rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/12/15133880-quem-e-gabriel-martinelli-martinelli-joga-onde-conheca-gabriel-martinelli-titular-em-brasil-x-camaroes-pela-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>QUEM É GABRIEL MARTINELLI? Martinelli joga onde? Conheça ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTljjkVkXTGTq9OKyTlQ4TuHy8qrld5NGW6yriyLfUOfHk0iQ8pFHjKAivCkHLRnb33rQb0pWEH" alt="QUEM É GABRIEL MARTINELLI? Martinelli joga onde? Conheça ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A escalação o Brasil diante de Camarões surpreendeu a muitos torcedores. A partida é válida pela última rodada da fase de grupos da Copa do Mundo 2022.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/12/02/atuacoes-enm-martinelli-vai-bem-e-se-salva-em-tarde-pouco-inspirada-do-brasil-veja-notas.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atuações ENM: Martinelli vai bem e se salva em tarde pouco ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Atuações ENM: Martinelli vai bem e se salva em tarde pouco ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martinelli – Foi quem mais tentou no ataque brasileiro. Com uma cabeçada e um chute no ângulo, o atacante foi o responsável pelas principais chances do time de&nbsp;...</p></div>
            </div>
        </a><a href='https://trivela.com.br/brasil/jogo-abaixo-dos-reservas-do-brasil-martinelli-foi-quem-melhor-aproveitou-para-se-apresentar-como-opcao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em jogo abaixo dos reservas do Brasil, Martinelli foi quem melhor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWnRUeKG5Z6sZeivBr_tmxjdCXsJbHF3X8Q-umLmFOSGTkE7UdR4RGX7zwCtKKMEGI8toy-Fob" alt="Em jogo abaixo dos reservas do Brasil, Martinelli foi quem melhor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre alguns nomes que decepcionaram, como Bruno Guimarães, Pedro e Éverton Ribeiro, Gabriel Martinelli aproveitou a chance para se apresentar como uma opção&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}