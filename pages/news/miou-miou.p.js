import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Miou-Miou</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Miou-Miou"/>
        <meta name="description" content="Trending News about Miou-Miou" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Miou-Miou</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/miou-miou-et-daniel-auteuil-leurs-tendres-retrouvailles-1750746/47162825-2-fre-FR/Miou-Miou-et-Daniel-Auteuil-Leurs-tendres-retrouvailles.jpg" alt="Miou-Miou"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/miou-miou-et-daniel-auteuil-leurs-tendres-retrouvailles-1750746'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miou-Miou et Daniel Auteuil : Leurs tendres retrouvailles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQkbwxTQJQQH9uv6O7Z6tcHNY_T4f83tjBexh693uU379TDSzLyz60mvLq-wDfjL6HE-JJyQFnr" alt="Miou-Miou et Daniel Auteuil : Leurs tendres retrouvailles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durement éprouvée par la disparition de son compagnon Jean Teulé, l&#39;actrice trouverait du réconfort auprès de son ancien amoureux…</p></div>
            </div>
        </a><a href='https://www.purepeople.com/article/miou-miou-son-couple-avec-coluche-ses-rares-revelations-sur-leur-rencontre-et-leur-vie-a-deux_a500294/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miou-Miou, son couple avec Coluche : ses rares révélations sur leur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUx4nih6xMkLSilZ-9fOHyOvNItyy6ZgCN2Cxk9AWbCORlYZRk7gN4fBl5sKlKkZWQBBxPPiLR" alt="Miou-Miou, son couple avec Coluche : ses rares révélations sur leur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actrice dans le film &#39;Larguées&#39;, diffusé le 20 novembre 2022 sur France 2, Miou-Miou a connu l&#39;amour dans les bras de Coluche alors qu&#39;elle était encore&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}