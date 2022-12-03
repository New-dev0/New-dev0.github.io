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
            <Image width={800} height={500} src="https://arena.rtp.pt/wp-content/uploads/2022/10/284044714_5217446688294307_7797478638562075487_n.jpg" alt="RTP"/>
            <h3>Recent News</h3>
            <a href='https://arena.rtp.pt/esc-online-mlp-x-guia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ESC Online Master League Portugal X: Guia de visualização - RTP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSH0o_FClWk6IsSdqsODQVTtL5EKiaCfinhufPyPY6HR1sDG4D_l18lFrAo0DRzvEpqEn4sScfS" alt="ESC Online Master League Portugal X: Guia de visualização - RTP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Estamos a menos de 24 horas dos primeiros jogos na Final Four da ESC Online Master League Portugal X, jogada presencialmente em Pombal!</p></div>
            </div>
        </a>
        </Template></>;
}