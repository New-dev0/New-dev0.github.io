import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Son Heung-Min</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Son Heung-Min"/>
        <meta name="description" content="Trending News about Son Heung-Min" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Son Heung-Min</h1>
            <Image width={800} height={500} src="https://imagens3.ne10.uol.com.br/blogsne10/torcedor/uploads/2018/08/Son-Heung-Min-1.jpg" alt="Son Heung-Min"/>
            <h3>Recent News</h3>
            <a href='https://radiojornal.ne10.uol.com.br/esportes/2022/11/15126660-casado-jogador-son-heung-min-choca-ao-revelar-que-so-se-casara-quando-parar-de-jogar-e-motivo-impressiona-veja-o-que-diz-jogador-da-coreia-do-sul.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CASADO? JOGADOR SON HEUNG-MIN choca ao revelar que só ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQFzE4sQmANPHj5ZWC9g_97y-NtHqg7N14iZmGjrU5cAC85O7HEQyxJKXuRHc5QRMFm7oxkQC3" alt="CASADO? JOGADOR SON HEUNG-MIN choca ao revelar que só ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jovem e com muito dinheiro, Son Heung-Min diz que só pode casar quando encerrar carreira no futebol; astro faz estreia na COPA DO MUNDO 2022 hoje em jogo da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}