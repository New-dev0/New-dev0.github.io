import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Unai Simon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Unai Simon"/>
        <meta name="description" content="Trending News about Unai Simon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Unai Simon</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/27/615x300/1_unai_simon-22087097.jpg" alt="Unai Simon"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15129786-goleiro-da-espanha-na-copa-2022-quem-e-conheca-unai-simon-aposta-de-luis-henrique-para-o-mundial-do-catar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GOLEIRO DA ESPANHA NA COPA 2022: Quem é? Conheça Unai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRst6Siad52XyHGI_7PgkUKc2TrSpb-rq1BwEBxtzXNm6Sln8VhBm8T4QQynlevdXEc2wGwyzD0" alt="GOLEIRO DA ESPANHA NA COPA 2022: Quem é? Conheça Unai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unai Simon é titular no Athletic Bilbao. Ele venceu a concorrência na Espanha com o balado goleiro De Gea, que atua no Manchester United. Esse último não foi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}