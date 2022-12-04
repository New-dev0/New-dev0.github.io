import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chimene Badi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chimene Badi"/>
        <meta name="description" content="Trending News about Chimene Badi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chimene Badi</h1>
            <Image width={800} height={500} src="" alt="Chimene Badi"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/chimene-badi-meconnaissable-elle-fait-sensation-sur-le-plateau-du-telethon-2022-zaptv-744363'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chimène Badi : méconnaissable, elle fait sensation sur le plateau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKnVeCn4rzd_Bk_rYzzuOKGOcBqg_irct3Mf4sOOnonCWEHI1U8_8YcaTvHT5l4ypknE5ESmjk" alt="Chimène Badi : méconnaissable, elle fait sensation sur le plateau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chimène Badi était présente sur le plateau du Téléthon ce samedi 3 décembre 2022 pour interpréter une chanson d&#39;Edith Piaf. La chanteuse découverte...</p></div>
            </div>
        </a>
        </Template></>;
}