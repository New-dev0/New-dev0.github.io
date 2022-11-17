import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Albânia  Itália</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Albânia  Itália"/>
        <meta name="description" content="Trending News about Albânia  Itália" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Albânia  Itália</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/628/s1.trrsf.com/live/thumbs/albania-x-italia-74897.png" alt="Albânia  Itália"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/ao-vivo/albania-x-italia/74897/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Albânia x Itália - Ao vivo - Amistosos de Seleções - Minuto a Minuto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQONQMbOuz6lZjh8vFxtITVgI8pcFl6h8I0znfvU1o_fC-7CV_wZFAn86jqMqP9oQLGMa_cIlO4" alt="Albânia x Itália - Ao vivo - Amistosos de Seleções - Minuto a Minuto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fim do Jogo, Albania 1, Itália 3. 2º Tempo. 16&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/ansa/2022/11/16/-italia-goleia-albania-em-amistoso-.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>++ Itália goleia Albânia em amistoso ++</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="++ Itália goleia Albânia em amistoso ++" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROMA, 16 NOV (ANSA) - A seleção italiana goleou a Albânia, por 3 a 1, nesta quarta-feira (16), no Air Albania Stadium, em um jogo amistoso internacional.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/16/amistoso-internacional-albania-x-italia.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Itália vence Albânia de virada em amistoso antes de ver Copa &#39;do sofá&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHi3tKCG8ODUVU4GyjYhjLapWA_uIXWA-4cFATmfXxUrPmOpIaJ-g9KjfvCZ3DzY9O2nVNRpAg" alt="Itália vence Albânia de virada em amistoso antes de ver Copa &#39;do sofá&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fora da Copa, a Itália venceu a Albânia por 3 a 1, de virada, em amistoso internacional na tarde de hoje (16), no Air Albania Stadium.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/11/15121700-albania-x-italia-ao-vivo-confira-onde-assistir-o-amistoso-da-selecao-italiana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ALBÂNIA X ITÁLIA AO VIVO: confira onde assistir ao amistoso da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXupZ-5U8ZWu3kcqSOJqYB7YbkzzwOmdeaXHlxG51DTbyulaGR4nHR6b1GdMeWMQuQ0W3eo8LH" alt="ALBÂNIA X ITÁLIA AO VIVO: confira onde assistir ao amistoso da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Itália faz dois amistosos nos dias antes da Copa do Mundo de 2022.</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/albania-x-italia-onde-assistir-ao-vivo-e-o-horario-do-jogo-amistoso-de-hoje-16-11-1.613419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Albânia x Itália: onde assistir ao vivo e o horário do jogo amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVfSgT3mbFGC8WPOL2kxX0bdiE8Ys4nF8bXYl9IK7TsjVbmvMtiArZADpMzYZtQUlXJgnjxiVm" alt="Albânia x Itália: onde assistir ao vivo e o horário do jogo amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Albânia e Itália jogam nesta quarta-feira uma partida amistosa; veja onde assistir e o horário do jogo.</p></div>
            </div>
        </a>
        </Template></>;
}