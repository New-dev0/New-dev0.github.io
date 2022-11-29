import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Embolo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Embolo"/>
        <meta name="description" content="Trending News about Embolo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Embolo</h1>
            <Image width={800} height={500} src="https://midianinja.org/files/2022/11/image_2022-11-27_19-46-48-1200x630.png" alt="Embolo"/>
            <h3>Recent News</h3>
            <a href='https://midianinja.org/news/conheca-breel-embolo-jogador-que-respeitou-a-camisa-e-o-pais-natal-em-jogo-especial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conheça Breel Embolo, jogador que respeitou a camisa e o país ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMvRMaF68KhQQoqxjV2EaUtn1fwN-ym5QZRCly9wXA7kENQDvd_uAynghMgwlKw55kDOXgqzjT" alt="Conheça Breel Embolo, jogador que respeitou a camisa e o país ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na estreia do grupo do Brasil na Copa do Mundo, Embolo marcou o gol da vitória suíça na partida contra Camarões, mas não comemorou seu feito.</p></div>
            </div>
        </a><a href='https://exame.com/esporte/embolo-vai-marcar-contra-o-brasil-acompanhe-os-estrangeiros-da-copa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Embolo vai marcar contra o Brasil? Acompanhe os estrangeiros da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrXYBP_F2HsIc_yCL00i3bJKsj6a6tDPQugqt6VRcR-YtqdSdfv-KeWiwLXei5GCnsAMAhClT0" alt="Embolo vai marcar contra o Brasil? Acompanhe os estrangeiros da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joagador nascido em Camarões é esperança da Suíça contra o Brasil na Copa do Catar. Neste Mundial, 28 seleções contam com 138 jogadores nascidos em outros&nbsp;...</p></div>
            </div>
        </a><a href='https://fusne.com/web-stories/embolo-nao-comemorou-gol-na-copa-2022-entenda-porque'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Embolo não comemorou gol na Copa 2022; entenda porque - Fusne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTQA5zIHV0AhwcvlIXt-OBJk05pJxlAitUW9wQgqYN7MnIi4mnOGJCcYx1n4M0WUb1HLKXtlK9" alt="Embolo não comemorou gol na Copa 2022; entenda porque - Fusne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breel Donald Embolo (Yaoundé, 14 de fevereiro de 1997) é um futebolista camaronês naturalizado suíço que atua como atacante. Atualmente, defende o Monaco.</p></div>
            </div>
        </a>
        </Template></>;
}