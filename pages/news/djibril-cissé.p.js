import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Djibril Cissé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Djibril Cissé"/>
        <meta name="description" content="Trending News about Djibril Cissé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Djibril Cissé</h1>
            <Image width={800} height={500} src="" alt="Djibril Cissé"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/les-12-coups-de-midi-djibril-cisse-son-apparition-surprise-avec-sa-fille-ilona-sur-tf1_507899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les 12 Coups de midi – Djibril Cissé : son apparition surprise avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBz2bfvaNaKBDUoHs0s-KfCzQYOuJ0hy-j0xh1rXtige4PmyyTj_4gQb175Xp_mE9REoXDQxn_" alt="Les 12 Coups de midi – Djibril Cissé : son apparition surprise avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 4 décembre, Djibril Cissé a fait une apparition surprise sur le plateau des “12 Coups de midi” (TF1). Et l&#39;as du ballon rond a gâté les...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/people/315205-la-fille-de-djibril-cisse-impressionne-jean-luc-reichmann-sur-le-plateau-des-12-coups-de-midi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La fille de Djibril Cissé impressionne Jean-Luc Reichmann sur le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxufODoJiIdpp4EeCzPSm7DOX1bNSLhAiDZ_9drY0VWWI6H66FmoGl_rrnXB4pGc223YcHDn6z" alt="La fille de Djibril Cissé impressionne Jean-Luc Reichmann sur le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité sur les 12 Coups de midi, Djibril Cissé en a profité pour présenter sa fille Ilona-Céleste aux téléspectateurs de TF1. La jeune femme n&#39;a pas fait&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/les-12-coups-de-midi-la-fille-de-djibril-cisse-impressionne-jean-luc-reichmann-avec-son-talent-744398'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les 12 coups de midi : la fille de Djibril Cissé impressionne Jean ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsLiT54pMVXn1ujOP4Yexb7pIlofC65vQCd06dREuJvkEXpQk4ZrFUu5wZ-qo66MnN33BetVIq" alt="Les 12 coups de midi : la fille de Djibril Cissé impressionne Jean ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dimanche 4 décembre 2022, sur le plateau des 12 coups de midi, Jean-Luc Reichmann a accueilli Djibril Cissé et sa fille, Ilona-Céleste. La jeune fe...</p></div>
            </div>
        </a>
        </Template></>;
}