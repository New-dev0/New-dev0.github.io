import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Darwin nunez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Darwin nunez"/>
        <meta name="description" content="Trending News about Darwin nunez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Darwin nunez</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/FOTOSDR/2022/darwinamarelogana.jpg" alt="Darwin nunez"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-12-02/uruguai-ja-tinham-tentado-contra-portugal-darwin-ve-amarelo-por-calcar-marca-do/966950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Já tinham tentado contra Portugal: Darwin vê amarelo por calcar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTY4v7z9DX5Bq7qaYqqFtv-6e2hfZNKc88JePJrDfGRUi3EctIthNuk3eetbPtHFRJJ_okBZc0J" alt="Já tinham tentado contra Portugal: Darwin vê amarelo por calcar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A &#39;tática&#39; uruguaia não é nova, já que no jogo frente a Portugal havia acontecido o mesmo, antes de Cristiano Ronaldo marcar o 2-0.</p></div>
            </div>
        </a>
        </Template></>;
}