import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thierry Ardisson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thierry Ardisson"/>
        <meta name="description" content="Trending News about Thierry Ardisson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thierry Ardisson</h1>
            <Image width={800} height={500} src="" alt="Thierry Ardisson"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/video-thierry-ardisson-fait-son-mea-culpa-a-laurent-ruquier-jai-dit-quelques-conneries-sur-lui_506567'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Thierry Ardisson fait son mea culpa à Laurent Ruquier : “J ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrmFWY_yxMEjJPldzxN2PHNI82-Wi81x1kHIWBBt2ZHPs8-qYoZrAsqDzKvB0OxmmE_OwzLaJs" alt="VIDÉO – Thierry Ardisson fait son mea culpa à Laurent Ruquier : “J ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant de présenter leur émission Hier, aujourd&#39;hui, demain, diffusée sur France 2 ce mardi 15 novembre, Laurent Ruquier et Thierry Ardisson étaient...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/c-a-vous-ce-detail-particulier-chez-thierry-ardisson-qui-a-interpelle-les-internautes-zaptv-742984'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>C à vous : ce détail particulier chez Thierry Ardisson qui a interpellé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZEmJwDIxA4Ceaetkb_aoM9FH_BnJVziZSisncIz4pOzYzSsegjtvPWnzL6cxHLT432EwrLCJk" alt="C à vous : ce détail particulier chez Thierry Ardisson qui a interpellé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mardi 15 novembre, Thierry Ardisson était présent dans C à vous au côté de Laurent Ruquier, pour promouvoir leur nouvelle émission, Hier, aujour...</p></div>
            </div>
        </a><a href='https://www.legossip.net/thierry-ardisson-une-maladie-grave-inquietant-passage-dans-c-a-vous-sur-france-2-photo/505253/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thierry Ardisson, une maladie grave, inquiétant passage dans C à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTS1S0scx5Ox13zAfGZZeBdQ6Al9J_sgzCSCoYKu2PgkxQIA6aQv3mHnuiWE4Jjya8st6rtPKPunA" alt="Thierry Ardisson, une maladie grave, inquiétant passage dans C à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laurent Ruquier est entouré de Marlène Schiappa, Roman Doduik, Magali Berdah, Emma Becker, Vikash Dhorasoo, Jenifer, et bien d&#39;autres. Thierry Ardisson de son&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}