import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grealish</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grealish"/>
        <meta name="description" content="Trending News about Grealish" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grealish</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/Av1YArMADDkA6nkdKB8vgGUAajc=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/11143292.jpg" alt="Grealish"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/inglaterra/noticia/2022/11/21/grealish-cumpre-promessa-e-faz-homenagem-a-menino-em-comemoracao-de-gol.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grealish cumpre promessa e faz homenagem a menino em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvaevWyEgjYB-so9szXB-f-HUIZnoXTzGP8x_8O7YPY-fSYEikIVy66TOMILM8GjKVvwfv-p21" alt="Grealish cumpre promessa e faz homenagem a menino em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante do Manchester City havia prometido comemoração especial a um garoto de 11 anos caso marcasse um gol na Copa do Mundo. Ele fez o sexto da goleada&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/esporte/comemoracao-de-grealish-na-copa-foi-promessa-a-fa-com-paralisia-cerebral/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comemoração de Grealish na Copa foi promessa a fã com paralisia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRd3OZzg12Gi_1rqXjuqi3nC4Id6sXPSfMx9CrRdowGK8ArtMewzHtkEm2gV_sTmt3FOtJE-s6H" alt="Comemoração de Grealish na Copa foi promessa a fã com paralisia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Torcedor do Manchester City, onde atua o jogador da seleção inglesa, fez o pedido ao encontrar o ídolo em ação da Premier League.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/jack-grealish-cumpre-promessa-e-dedica-gol-a-garoto-com-paralisia-cerebral,c710434a537dd44a36d276d55c01c38dni38kvnp.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish cumpre promessa e dedica gol a garoto com paralisia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuY2QOnB8q5esilkMIZCalCBkuhfYzT5BFhJYKAjYTBgIyOWuRj2KJrdOqsQItwQgr0l-L94Xp" alt="Jack Grealish cumpre promessa e dedica gol a garoto com paralisia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante do Manchester City fechou goleada da Inglaterra sobre o Irã em estreia na Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/inglaterra/grealish-cumpre-promessa-e-comemora-gol-pela-inglaterra-dancando.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grealish cumpre promessa e comemora gol pela Inglaterra dançando</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStwpJfTWl7j6lf3SY0srsYQw7BblIrba-XwmYI9SZ7qP9cKjlWZfOQP7ikui-XfgD9diSN63O9" alt="Grealish cumpre promessa e comemora gol pela Inglaterra dançando" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celebração foi um pedido de Finley, torcedor do Manchester City que sofre de paralisia cerebral.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/21/grealish-cumpre-promessa-e-danca-em-comemoracao-a-torcedor-com-paralisiacerebral.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grealish cumpre promessa e dança em comemoração à torcedor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Grealish cumpre promessa e dança em comemoração à torcedor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No início do mês, o jogador recebeu a visita de um torcedor fanático pelo Manchester City - clube de Grealish -, e da Inglaterra. Na conversa, ele havia&nbsp;...</p></div>
            </div>
        </a><a href='https://trivela.com.br/copa-do-mundo/quis-o-destino-que-comemoracao-prometida-por-grealish-a-garotinho-com-paralisia-cerebral-saisse-na-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quis o destino que comemoração prometida por Grealish a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR96Bb97VddeC4C7c1f3JIkkjdzsobudnqCI2xU9-a97Rr5DJYykdaSFTT4ODjvY4jtVuUqCpDl" alt="Quis o destino que comemoração prometida por Grealish a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Grealish prometeu a um garotinho de 11 anos com paralisia cerebral fazer uma comemoração especial na próxima vez que fizesse um gol. Ele próprio.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/21/catar-2022,3980376/jack-grealish-da-inglaterra-homenageia-torcedor-com-paralisia-cerebral.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish, da Inglaterra, homenageia torcedor com paralisia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR34PxiD3YaZr5V6f4SXhH8T8XMWAYEFLUgQTtX8ERIF_96tw6Nz_OdkSE06yqkzgbNwxCD1-0-" alt="Jack Grealish, da Inglaterra, homenageia torcedor com paralisia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador havia dito que faria dança pedida por jovem torcedor se marcasse gol na Copa do Catar e cumpriu a promessa ao anotar o sexto gol na partida contra o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}