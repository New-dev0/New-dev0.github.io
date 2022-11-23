import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Haaland"/>
        <meta name="description" content="Trending News about Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Haaland</h1>
            <Image width={800} height={500} src="https://oimparcial.com.br/app/uploads/2022/11/dera.jpg" alt="Haaland"/>
            <h3>Recent News</h3>
            <a href='https://oimparcial.com.br/esportes/2022/11/jogador-haaland-coloca-brasil-entre-os-favoritos-para-vencer-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador Haaland coloca Brasil entre os favoritos para vencer Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRG1wvj0Gp2YReMpQ212YFpre49EcqLK9-nT8OplBP_3opRrBMa0qjF1BU6Oc4wf2eXRVY5Dszp" alt="Jogador Haaland coloca Brasil entre os favoritos para vencer Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 22 anos, Haaland é o atual artilheiro do Campeonato Inglês com 18 gols em 12 jogos disputados.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-22/inglaterra-depois-de-tentar-haaland-clube-da-7-divisao-afasta-se-de-ronaldo/965742'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois de &#39;tentar&#39; Haaland, clube da 7.ª Divisão afasta-se de Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTB0795cMKv1rI-Jps3LzGPKPYKNsOT7y6vj42R6rDqcAaavVkTakay93K9M4zW5Urcp11dwBhH" alt="Depois de &#39;tentar&#39; Haaland, clube da 7.ª Divisão afasta-se de Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Ashton United, clube que milita na National Premier League Division (equivalente ao sétimo escalão do futebol em Inglaterra), voltou a ganhar holofotes&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/internacional/ashton-united/depois-de-tentar-haaland-equipa-da-setima-divisao-inglesa-da-nega-a-ronaldo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois de tentar Haaland, equipa da sétima divisão inglesa dá ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVh2oipNshq4VBocGi789uPWqd_EODMpx_b9tzPmagmxvz1Sza6lNPGqmm6I8snDWLU4RIOiuO" alt="Depois de tentar Haaland, equipa da sétima divisão inglesa dá ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ashton United voltou a usar o humor, desta vez para reagir à saída do português de Old Trafford.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2118708/ashton-united-so-quer-haaland-clube-ingles-nega-proposta-por-cr7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ashton United só quer Haaland. Clube inglês nega proposta por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSgSzJdxVIK1XhfplXKNVvjWRXHV9dE8gvC4GgrFmLxmAN8pzfOw4oWaW7oZjruhA9obWuA5YU" alt="Ashton United só quer Haaland. Clube inglês nega proposta por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emblema britânico foi responsável por um momento hilariante nas redes sociais há pouco tempo, quando sugeriu o empréstimo de Erling Haaland.</p></div>
            </div>
        </a>
        </Template></>;
}