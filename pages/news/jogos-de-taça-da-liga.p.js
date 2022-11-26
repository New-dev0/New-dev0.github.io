import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos de Taça da Liga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos de Taça da Liga"/>
        <meta name="description" content="Trending News about Jogos de Taça da Liga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos de Taça da Liga</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=af81ff38-f09a-4f64-8d1f-44ac43d44618&w=800&h=420&watermark=true&t=20221125191900" alt="Jogos de Taça da Liga"/>
            <h3>Recent News</h3>
            <a href='https://www.jn.pt/desporto/artur-jorge-diz-que-braga-deve-ter-maximo-respeito-para-seguir-na-taca-da-liga-15388879.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artur Jorge diz que Braga deve ter &quot;máximo respeito&quot; para seguir na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvHFw9j8wkCkquvP5oM4Q-dBWZ1vYnYUyx7wzXpasUxjtkoWSrSdrWrrS0jtFS6ATMy-LGzj4v" alt="Artur Jorge diz que Braga deve ter &quot;máximo respeito&quot; para seguir na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O treinador do Sporting de Braga, Artur Jorge, realçou hoje que é preciso encarar o grupo ​​​​​​​D da Taça da Liga de futebol com o &quot;máximo respeito&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/sp-braga/taca-liga/artur-jorge-e-a-taca-da-liga-durante-o-mundial-acrescenta-valor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artur Jorge e a Taça da Liga durante o Mundial: «Acrescenta valor»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStN36jACc3-94454FO7iTTugp-LseIePes16gYlTBQHNY4KRIltvy0mZBXx4Cz6arwf5mXHaez" alt="Artur Jorge e a Taça da Liga durante o Mundial: «Acrescenta valor»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Treinador do Sp. Braga falou na antevisão ao jogo com o Trofense, a contar para a primeira jornada do Grupo D.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/1a-liga/braga/noticias/tormena-no-braga-aprendemos-todos-os-dias-15389009.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tormena: &quot;No Braga aprendemos todos os dias&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLW_TTVUP5WGJSC66gD89IYa0Q7fjrP9x7WswmMGdRYnRey-Loo5QI-loYyuqphHkWuQtwrs7i" alt="Tormena: &quot;No Braga aprendemos todos os dias&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tormena, defesa-central do Braga, fez a antevisão ao jogo frente ao Trofense (sábado, 18h45), da primeira jornada da fase de grupos da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-25/artur-jorge-e-a-entrada-em-cena-na-taca-da-liga-e-uma-competicao-que-nos-diz-mu/966109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artur Jorge e a entrada em cena na Taça da Liga: «É uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkXtVR3yr9yGJJrcw-tSsh-gZz3dndlyv1v0f8V6Ttsz3tBfYxWCDwhzo1nHaKsVE_jnMuHGNW" alt="Artur Jorge e a entrada em cena na Taça da Liga: «É uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artur Jorge perspetivou a estreia do SC Braga na Taça da Liga, que passa por uma receção ao Trofense, antes de embates com os primodivisionários Casa Pia e&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}