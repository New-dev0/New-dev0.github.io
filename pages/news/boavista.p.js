import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boavista</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boavista"/>
        <meta name="description" content="Trending News about Boavista" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boavista</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/399106173539a1d4cce2_socialshare.jpg" alt="Boavista"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/27/boavista-soma-segunda-vitoria/309749/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista soma segunda vitória - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRtpMYSLDs1k2QSZR4bs_SVVlLCkxikK9XduiaAGP5OkKxGu1UXnHK_pNAN5CiuiAZUrJqScyI" alt="Boavista soma segunda vitória - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Boavista venceu o Vilafranquense, da II Liga, por 1-0, na segunda jornada da fase de grupos da Taça da Liga. O único golo da partida foi apontado por&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/boavista-vence-vilafranquense-na-taca-da-liga-15393831.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista vence Vilafranquense na Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3fvm9vlP_d3OGqRPnpJLHJAO-N-UVcgTgxe6amhP7fBraQ8iqIpID-u4DK1oc2tpBFj6eoTgn" alt="Boavista vence Vilafranquense na Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em caso de empate no Vitória-B SAD, de 1 de dezembro, os axadrezados garantem já a passagem à fase seguinte.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-27/boavista-e-uma-vitoria-importantee-estamos-na-luta/966349'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«É uma vitória importante e estamos na luta»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSIMZ98k4qkPu3Kvpyq5LXHfsvGRlz5d_wkT2qdD54Od1u9uNSfU7DOhiDhnLgKixVIk671gfz" alt="«É uma vitória importante e estamos na luta»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Petit analisou a vitória do Boavista frente ao Vilafranquense, por 1-0, a contar para a segunda jornada do grupo F da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=424741'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yusupha salta do banco e dá nova vitória ao Boavista na Allianz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrdbHBz9TfD5yuAwynDHiooUbGORj2h6G5p8S1yHAxfCvUKKLcjnpSirTOqJMuJ0eJO6gg6F4e" alt="Yusupha salta do banco e dá nova vitória ao Boavista na Allianz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Num jogo com oportunidades para ambos os lados, Petit teve uma aposta certeira ao lançar Yusupha. O avançado, recém entrado na partida, finalizou um bom&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/taca-liga/taca-da-liga-boavista-vence-vilafranquense-e-mantem-lideranca-do-grupo-f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Boavista vence Vilafranquense e mantém liderança ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqIBSwDsubaC721beNTmYkXIQqBus4n9S8C9E8uZNWmdWHSX8AQX13Hl2FUsnuQEesNnw--FvI" alt="Taça da Liga: Boavista vence Vilafranquense e mantém liderança ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O único golo da partida foi marcado já nos minutos finais, aos 79, por intermédio de Yusupha, com um desvio de pé esquerdo na área, após cruzamento de Ibrahima.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2122126/golo-solitario-de-yusupha-coloca-boavista-a-um-passo-dos-quartos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Golo solitário de Yusupha coloca Boavista a um passo dos &#39;quartos&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_bXQRKKbSlXt-7OI9Bhf4J40LRocn9BI2wULoAnbcBJpLIz_xgvOFXbZTiEki-ZRNm4KGB6r4" alt="Golo solitário de Yusupha coloca Boavista a um passo dos &#39;quartos&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Axadrezados venceram o Vilafranquense pela margem mínima e ficam a apenas um ponto do apuramento. Equipa ribatejana está fora da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.futebol365.pt/artigo/290053-taca-da-liga-boavista-vence-vilafranquense-e-lidera-grupo-f/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Boavista vence Vilafranquense e lidera Grupo F</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfyRxZq-c9ODmg5XkJd1IrSYivR7Cu16DQLeu4rBtizVT2x7jDugyQf48yc4mjjwxet02hYdsP" alt="Taça da Liga: Boavista vence Vilafranquense e lidera Grupo F" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Boavista venceu este domingo o Vilafranquense, por 1-0, com um golo de Yusupha, e está na liderança do grupo F da Taça da Liga, com seis pontos.</p></div>
            </div>
        </a>
        </Template></>;
}