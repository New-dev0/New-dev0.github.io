import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Toni Kroos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Toni Kroos"/>
        <meta name="description" content="Trending News about Toni Kroos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Toni Kroos</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2019/11/16/5dd06ea349a8a.jpeg" alt="Toni Kroos"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/copa-do-mundo/kroos-fora-da-copa-entenda-por-que-meia-nao-foi-convocado-pela-alemanha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kroos fora da Copa: entenda por que meia não foi convocado pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNemk_13kImbIfnmDuxgYKjr3lx9n_ZoxMe_gw0oe54Xmu11LR2Pc2SffKNOwONuqj7lBBgyzH" alt="Kroos fora da Copa: entenda por que meia não foi convocado pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Titular no Real Madrid ficou fora da lista de 26 convocados de Hansi-Flick para o Qatar.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15126661-toni-kroos-se-aposentou-veja-por-que-craque-do-real-madrid-nao-esta-jogando-a-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TONI KROOS SE APOSENTOU? Veja por que craque do Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSB46J0cIJ7_UziPql1p7vH0nmFHW5pyGhXu1E8hbf6GLDZumXA7Q6XgvgMfqpox0Ov_7QY7Kql" alt="TONI KROOS SE APOSENTOU? Veja por que craque do Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia do Real Madrid não foi convocado para a Copa 2022.</p></div>
            </div>
        </a>
        </Template></>;
}