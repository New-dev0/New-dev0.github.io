import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ge</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ge"/>
        <meta name="description" content="Trending News about Ge" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ge</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/idw5uo6t_3L20q5uybkbKDkyTo8=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11144494.jpg" alt="Ge"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/pr/noticia/2022/11/21/athletico-e-coritiba-comecam-a-semana-com-novidades-no-mercado-da-bola.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Athletico e Coritiba começam a semana com novidades no mercado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC_7UBLia7WPPVK49Fe41T9l1Ba70Gj8qEB2biMB9L9M9IuoMg7uQ9DxvuzaaZ0oJaP9TOvQpn" alt="Athletico e Coritiba começam a semana com novidades no mercado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Central do ge traz informações de reforços, saída de jogadores e tudo que envolve a dupla Atletiba.</p></div>
            </div>
        </a>
        </Template></>;
}