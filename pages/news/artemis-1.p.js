import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Artemis 1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Artemis 1"/>
        <meta name="description" content="Trending News about Artemis 1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Artemis 1</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/b0/2022/11/16/astronauta-buzz-aldrin-apollo-11-20-julho-1969-1668607685495_v2_615x300.jpg" alt="Artemis 1"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/tilt/noticias/redacao/2022/11/16/missao-artemis-1-por-que-demorou-50-anos-para-a-nasa-voltar-a-lua.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missão Artemis 1: por que demorou 50 anos para a Nasa voltar à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBzbn8mi2FfKwenEyJ2RRa8LTWS0Igv1pz0NpFdJ3AcMPj5YO68N1j-t8anuvr1gej6N21bdue" alt="Missão Artemis 1: por que demorou 50 anos para a Nasa voltar à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nasa lançou o enorme foguete SLS em direção à Lua, na primeira missão do programa Artemis; última vez que o homem esteve na Lua foi em 1972, na missão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornalcontabil.com.br/artemis-1-nasa-faz-historia-e-lanca-com-sucesso-foguete-em-direcao-a-lua/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis 1: NASA faz história e lança com sucesso foguete em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6Yiy-JKuHz6R7aISTU10oUPTYvQwpLyGIK3NHp2MkuJ_H8-X_g5iVljhlcrxq6HiFxPDIatg6" alt="Artemis 1: NASA faz história e lança com sucesso foguete em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O principal objetivo desse voo não tripulado é testar tecnologias essenciais para todas as outras missões do Programa Artemis.</p></div>
            </div>
        </a><a href='https://revistagalileu.globo.com/ciencia/espaco/noticia/2022/11/foguete-sls-decola-e-da-inicio-a-missao-artemis-1-saiba-detalhes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Foguete SLS decola e dá início à missão Artemis 1; saiba detalhes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRE5UyKFOrOND8wo4Cw7_f9upCr9QYQh4qJ8gOFbe8N4iL_MS5TYJii4K30sBVqSqQTF0HsySg" alt="Foguete SLS decola e dá início à missão Artemis 1; saiba detalhes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após adiamentos devido a problemas técnicos e condições climáticas, espaçonave Orion está agora em direção à órbita da Lua para jornada não tripulada de&nbsp;...</p></div>
            </div>
        </a><a href='https://gizmodo.uol.com.br/acompanhe-ao-vivo-a-viagem-da-artemis-1-ate-a-lua-neste-site-3d-da-nasa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acompanhe ao vivo a viagem da Artemis 1 até a Lua neste site 3D ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtwL_HekalQOpO4_osKKVczvt8MlSwhDdKDcix7tKYWdHAEqiI1buldfGHcvPv5XeEjh--YQFA" alt="Acompanhe ao vivo a viagem da Artemis 1 até a Lua neste site 3D ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ferramenta online permite acompanhar em tempo real a jornada da Artemis 1 em sua viagem de ida e volta à Lua.</p></div>
            </div>
        </a><a href='https://super.abril.com.br/ciencia/a-nasa-finalmente-lancou-a-missao-artemis-1-e-agora/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Nasa finalmente lançou a missão Artemis 1. E agora?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7hFWLasJip2y6W_RomDmyRbB7fkC4yR-KDz8NGyiSnIgzx871HqMbrMPDRpRyYCfgUgKpdqfY" alt="A Nasa finalmente lançou a missão Artemis 1. E agora?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trata-se de uma missão de 26 dias, cujo sucesso pode abrir caminho para um pouso tripulado no satélite daqui três anos. Entenda.</p></div>
            </div>
        </a><a href='https://olhardigital.com.br/2022/11/16/ciencia-e-espaco/artemis-1-veja-as-primeiras-imagens-do-espaco-feitas-pela-capsula-orion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis 1: veja as primeiras imagens do espaço feitas pela cápsula ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPv2326Vol0XotGK1w96fCjv8qkkCaSPsGXoOpCCss5ZxpAu1Np03oxwRHyemxwZLbT4IPeAdH" alt="Artemis 1: veja as primeiras imagens do espaço feitas pela cápsula ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após o lançamento do foguete Space Launch System (SLS) da missão lunar Artemis 1, ocorrido a partir do Centro Espacial Kennedy, na Flórida, nesta madrugada,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}