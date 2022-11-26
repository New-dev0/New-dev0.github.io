import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=293269d2-3e7a-4c45-9b13-313812c80e20&w=800&h=420&watermark=true&t=20221125114300" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/desporto/maradona-morreu-ha-dois-anos-fifa-faz-homenagem-no-qatar-15387052.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maradona morreu há dois anos. FIFA faz homenagem no Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKsQ8bDny3UJcRnpO3IGtyJ3RqFmE1mgQlNiXgdGPOfMK5N8wBYHRHRCVS8HJpPnkjzxE6a4eA" alt="Maradona morreu há dois anos. FIFA faz homenagem no Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gianni Infantino, presidente da FIFA, juntou em Doha vários campeões do mundo pela Argentina, em 1978 e 1986. &quot;Diego é algo mais que uma lenda, é um mito&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/copa-homenageia-maradona-nos-dois-anos-da-morte-do-argentino.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa homenageia Maradona nos dois anos da morte do argentino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-X4CS1x4-lHfxp8Cdvpgh5B-A3y2oD8fohacVdW7bK8lA_lm57PUtfds8NlFkRL6hobwYQGVH" alt="Copa homenageia Maradona nos dois anos da morte do argentino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os dois anos da morte do ídolo argentino Diego Maradona foi lembrado nesta sexta-feira (25) em Doha, no Qatar, com membros da Fifa e ex-jogadores argentinos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/25/presidente-da-fifa-presta-homenagem-a-maradona-e-pede-dia-dedicado-ao-argentino-nas-copas.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Presidente da Fifa presta homenagem à Maradona e pede dia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Presidente da Fifa presta homenagem à Maradona e pede dia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da Fifa Gianni Infantino, participou de um evento em homenagem a Maradona para comemorar o aniversário de dois anos do maior ídolo do futebol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/na-copa-do-mundo-argentina-homenageia-maradona-em-aniversario-de-sua-morte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Na Copa do Mundo, Argentina homenageia Maradona em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSev3HxK64oAIjpzhfi5AJUgA9mXQFq4jMh0VVXNqvm8GUOSkkYzNIpC4M9VZ1UA03v2eygcqYN" alt="Na Copa do Mundo, Argentina homenageia Maradona em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Considerado um dos maiores jogadores de futebol da história, Maradona morreu aos 60 anos em 25 de novembro de 2020, após lutar contra o abuso de drogas e álcool&nbsp;...</p></div>
            </div>
        </a><a href='https://recordeuropa.com/share-magazine/gente/dois-anos-sem-maradona-25-11-2022-99826'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois anos sem Maradona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT60ap-z3k0IRgevZXhHQ9Iaiin4QtGasOM6aKavnTUlG5fl2nZEBY8wSOqzw46N4e7DzxMoFCm" alt="Dois anos sem Maradona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi há dois anos que o mundo do futebol perdeu uma das suas maiores lendas. Diego Armando Maradona tinha 60 anos.</p></div>
            </div>
        </a><a href='https://olhardigital.com.br/2022/11/26/internet-e-redes-sociais/dois-anos-sem-maradona-argentina-decide-futuro-na-copa-contra-o-mexico-saiba-como-assistir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois anos sem Maradona: Argentina decide futuro na Copa contra o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuKO8fH_b4Ls5lMmvmxeNKza9WXeOUHKRpj5lAMxusgffkWzf7LMrs0gCWVCDZNfSA6_GbuvcQ" alt="Dois anos sem Maradona: Argentina decide futuro na Copa contra o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Há exatos dois anos, o mundo se despedia de Diego Armando Maradona Franco, grande ídolo do futebol que se tornou um dos maiores nomes da seleção argentina&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}