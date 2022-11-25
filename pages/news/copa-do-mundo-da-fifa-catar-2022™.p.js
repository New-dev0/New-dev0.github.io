import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Copa do Mundo da FIFA Catar 2022™</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Copa do Mundo da FIFA Catar 2022™"/>
        <meta name="description" content="Trending News about Copa do Mundo da FIFA Catar 2022™" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Copa do Mundo da FIFA Catar 2022™</h1>
            <Image width={800} height={500} src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/udlidqgfonocts5ufruu" alt="Copa do Mundo da FIFA Catar 2022™"/>
            <h3>Recent News</h3>
            <a href='https://olympics.com/pt/noticias/copa-do-mundo-fifa-2022-tudo-sobre-o-jogo-entre-portugal-e-uruguai'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo FIFA 2022: tudo sobre o jogo entre Portugal e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbBzpTpwiXHB-87z7zNjtJMrhgEHo4j5rPJlHxSZhFNwtY0_wXndKWBis8ygUgug14QJAri4F_" alt="Copa do Mundo FIFA 2022: tudo sobre o jogo entre Portugal e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Copa do Mundo FIFA 2022: tudo sobre o jogo entre Portugal e Uruguai &middot; Cristiano Ronaldo, de pênalti, abriu a contagem e tornou-se o primeiro futebolista a marcar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}