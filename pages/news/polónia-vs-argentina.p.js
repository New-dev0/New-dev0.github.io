import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Polónia vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Polónia vs Argentina"/>
        <meta name="description" content="Trending News about Polónia vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Polónia vs Argentina</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/26/6382a188e3a71.jpeg" alt="Polónia vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/copa-do-mundo/argentina/polonia-x-argentina-onde-assistir-horario-e-escalacoes-do-jogo-pela-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Argentina: onde assistir, horário e escalações do jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYWPg4e6Zp2l0FPe0U_BVmr_4nrwxnY8FKDWi1x81AsE6-XOZ4WGWKi2UKFE6bevFHAx_zeSlW" alt="Polônia x Argentina: onde assistir, horário e escalações do jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Argentina encara a Polônia nesta quarta-feira, às 16h (horário de Brasília), pela terceira rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/polonia-argentina-copa-mundo-2022-onde-assistir-tv-escalacao/blt42030ee99fe18be8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Argentina: onde assistir ao vivo e online, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8fGG2RTS2-1t-tHyiGCWkLtykS-MfUfcP5msMS4sM1AGn2w8uNdGBTwmrAKVaorMwdAsYPh9n" alt="Polônia x Argentina: onde assistir ao vivo e online, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zielinski e Lewandowski: 1 gol. Artilheiros da Argentina na Copa 2022. Messi: 2 gols. Enzo Fernández: 1 gol. Polônia e Argentina: Participações em Copas.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/copa-do-mundo/polonia-x-argentina-saiba-onde-assistir-ao-jogo-do-grupo-c-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Argentina: saiba onde assistir ao jogo do grupo C da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQWtZZXRH4yLxKADMKluLgKGci1SikgBkNyUlMK3wKAzHMv2YozqP7j0gcrfHAS9nzI3aLMMAu" alt="Polônia x Argentina: saiba onde assistir ao jogo do grupo C da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quarta-feira, Polônia e Argentina se enfrentam em partida válida pela terceira rodada do grupo C da Copa do Mundo de 2022. A bola rola no gramado do.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/29/polonia-x-argentina-retrospecto-escalacoes-arbitragem-e-onde-assistir.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Argentina: Retrospecto, escalações, arbitragem e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Polônia x Argentina: Retrospecto, escalações, arbitragem e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os hermanos levam a melhor no duelo, com seis vitórias, contra três triunfos dos poloneses, além de dois empates. Em Mundiais, cada seleção venceu uma. Os&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/jogo-da-copa-ao-vivo-polonia-x-argentina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo da Copa Ao Vivo: Polônia x Argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBj9dKi_NiZoELVYx2goEJ_cIe9WMF-37dkG9Y5i56akOKIRuoefMo9QyHuOi5yD8x3CD_vW9y" alt="Jogo da Copa Ao Vivo: Polônia x Argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo será realizado no Estádio 974, em Doha. A arena tem capacidade para receber 45 mil torcedores. Leia mais&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/sp/copa-do-mundo/noticia/2022/11/29/polonia-x-argentina-veja-onde-assistir-escalacoes-e-horario.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia x Argentina: veja onde assistir, escalações e horário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-ViLY_ARXBsrwXvSSSbcn0JBiPGCbgbGiymXvgiA3vinb8VgQX-WBrJ6WyMSZ55Ql4bd-_OeY" alt="Polônia x Argentina: veja onde assistir, escalações e horário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tudo o que você precisa saber sobre o jogo da terceira rodada do Grupo C da Copa ... Lewandowski x Messi. Polônia x Argentina. A partir das 16h (de Brasília)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}