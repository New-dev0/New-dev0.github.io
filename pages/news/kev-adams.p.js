import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kev Adams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kev Adams"/>
        <meta name="description" content="Trending News about Kev Adams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kev Adams</h1>
            <Image width={800} height={500} src="" alt="Kev Adams"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/kev-adams-le-role-qua-joue-son-grand-pere-dans-son-desir-de-faire-de-la-scene-zaptv-743877'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kev Adams : le rôle qu&#39;a joué son grand-père dans son désir de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbRCm-XNnKcaovbkTAyKSC9fyw_JZVvtYO4Zp-MnKfTcbb_ZJprrKiLkCffisoST6MRLAfiDfz" alt="Kev Adams : le rôle qu&#39;a joué son grand-père dans son désir de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité de Laurent Delahousse dans 20h30 le dimanche, dimanche 27 novembre, Kev Adams s&#39;est confié sur le rôle joué par son grand-père dans sa carri...</p></div>
            </div>
        </a>
        </Template></>;
}