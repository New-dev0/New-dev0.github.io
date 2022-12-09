import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>One Piece 1069</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,One Piece 1069"/>
        <meta name="description" content="Trending News about One Piece 1069" /></Head><Template>
            <h1 style={{fontSize: "30"}}>One Piece 1069</h1>
            <Image width={800} height={500} src="https://geekdama.com.br/wp-content/uploads/2022/03/one-piece-akuma-no-mi-frutas-do-diabo-postcover-1280x670.jpg" alt="One Piece 1069"/>
            <h3>Recent News</h3>
            <a href='https://geekdama.com.br/onepiece/one-piece-manga-1069-vegapunk-origens-frutas-do-diabo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One Piece | Vegapunk finalmente fala sobre as origens das frutas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTi3ZzHh21rBWG1sEE7amp7NqK60VC3LvZXDGy-OvS2vbXja0s9uAdSgQpH_gsh4x8flX1nMQc1" alt="One Piece | Vegapunk finalmente fala sobre as origens das frutas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto Luffy lutava contra Lucci usando seu Gear 5, Vegapunk percebeu que a transformação de Luffy era idêntica à de Nika, o Deus do Sol esquecido. E com isso&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}