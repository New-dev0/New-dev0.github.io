import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marquinhos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marquinhos"/>
        <meta name="description" content="Trending News about Marquinhos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marquinhos</h1>
            <Image width={800} height={500} src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2022/12/marquinhos-copa-do-mundo.jpg" alt="Marquinhos"/>
            <h3>Recent News</h3>
            <a href='https://www.torcedores.com/noticias/2022/12/copa-do-mundo-marquinhos-louco-bruno-guimaraes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: Marquinhos fica “louco” com gol perdido por Bruno ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_0UI-qOLCE9IC6ZOR551roK154iVIm4765Ee-1sKMvrArP7BbFrlM3q_G_Vq3mH_Gxp_s5Ug_" alt="Copa do Mundo: Marquinhos fica “louco” com gol perdido por Bruno ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zagueiro armou jogada, mas viu o companheiro desperdiçar chance inacreditável em jogo do Mundial Provando ser um jogador bastante polivalente, Marquinhos.</p></div>
            </div>
        </a>
        </Template></>;
}