import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RTP</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RTP"/>
        <meta name="description" content="Trending News about RTP" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RTP</h1>
            <Image width={800} height={500} src="https://arena.rtp.pt/wp-content/uploads/2022/11/podio-abu-dhabi-ps-t9-e1669334140914.png" alt="RTP"/>
            <h3>Recent News</h3>
            <a href='https://arena.rtp.pt/conesaopoder-abu-dhabi-ultimate-ps-s9/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ConesAoPoder conquista novo recorde na Liga Ultimate PS - RTP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeFClC90pS8nebfeZ3sLuS8bzk2r_MH5_c84gJ7eoAsSjpHdY2liwHpPT_eOQVCG9dxX1T16Ov" alt="ConesAoPoder conquista novo recorde na Liga Ultimate PS - RTP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disputou-se hoje a 10ª etapa da Liga Ultimate PS, Abu Dhabi, e ConesAoPoder coloca a primeira mão no troféu.</p></div>
            </div>
        </a><a href='https://bragatv.pt/rtp-vai-transmitir-hora-dos-portugueses-desde-o-museu-pio-xii-em-braga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTP vai transmitir “Hora dos Portugueses” desde o Museu Pio XII ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWvDr1AFYzvN4c1UTAChOMZe4PX7YnL99XTHn8CdMURqkYiY7YxqbM9TYXJpLwgWrptvJgaBsV" alt="RTP vai transmitir “Hora dos Portugueses” desde o Museu Pio XII ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O programa “Hora dos Portugueses”, dedicado a portugueses que vivem pelo mundo, vai transmitir no próximo domingo, 27 de novembro, das 12:00 às 13:00,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/madeira/politica/entrega-da-declaracao-trimestral-do-iva-de-junho-prolongada-_106395'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entrega da declaração trimestral do IVA de junho prolongada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIr3bheo7rCg9Bs-SabijbQWUuw0UWrP2Hix8DJI0vJtI6QHuBc51qxrpOJYbVfdg_A224-s7K" alt="Entrega da declaração trimestral do IVA de junho prolongada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nas votações desta tarde na Comissão de Orçamento e Finanças, no parlamento, no âmbito das alterações ao Orçamento do Estado para 2023 (OE2023),&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}