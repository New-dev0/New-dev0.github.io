import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fabien Galthié</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fabien Galthié"/>
        <meta name="description" content="Trending News about Fabien Galthié" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fabien Galthié</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-video-cover/1500000001713850/640/0" alt="Fabien Galthié"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Rugby/Actualites/Fabien-galthie-apres-la-victoire-face-au-japon-en-phase-avec-nos-objectifs/1365886'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fabien Galthié, après la victoire face au Japon : « En phase avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrZ3c0sr2YsHMVNqQPXDu82CI2Rf9hgdGAV1G5KONYz5l92y6YXvS65eCswYlLShWZMv0VXnJ9" alt="Fabien Galthié, après la victoire face au Japon : « En phase avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après le succès contre le Japon (35-17), dimanche, le sélectionneur des Bleus s&#39;est réjoui de cette 13e victoire consécutive qui correspond à sa volonté&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/rugby/xv-de-france/fabien-galthie-jalibert-fait-une-tres-tres-bonne-entree-20221120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fabien Galthié : «Jalibert fait une très, très bonne entrée»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5-9WaGKBW5OKuAzYyQJfiu_ImMs8iMMOh6lbUdbY1Cum8Eon_GF_ZqAi47za7u-L47aX5X7oU" alt="Fabien Galthié : «Jalibert fait une très, très bonne entrée»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur du XV de France revient sur la victoire face au Japon et se félicite du travail accompli en trois ans.</p></div>
            </div>
        </a><a href='https://www.ledauphine.com/sport/2022/11/20/fabien-galthie-matthieu-jalibert-confirme-tout-le-bien-qu-on-pense-de-lui'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby. Fabien Galthié : « Matthieu Jalibert confirme tout le bien qu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSg40R5E4aMbKM1UusgpjyNJ6K8jLX9pd5lz9HGTKdaloboSPGIM1yXzg-uBPqoP7BZ10VXipCv" alt="Rugby. Fabien Galthié : « Matthieu Jalibert confirme tout le bien qu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur du XV de France a livré ses impressions sur le dernier match de l&#39;année, remporté face au Japon (35-17).</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/rugby/equipe-de-france/france-japon-fabien-galthie-je-souhaite-qu-on-puisse-rouler-sur-toutes-les-equipes-mais-21072ee0-68e9-11ed-a603-4a3131a74a26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Japon. Fabien Galthié : « Je souhaite qu&#39;on puisse rouler ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXzUW2cExMhGFAkm3nYRXm2YifowiDr6j8mkAtv62Yo0mSXOtUTnjLcFkQuiXdjCcNLVMYzYKz" alt="France - Japon. Fabien Galthié : « Je souhaite qu&#39;on puisse rouler ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le XV de France a dominé le Japon, ce dimanche, à Toulouse (35-17). Un nouveau succès qui a contenté le sélectionneur des Bleus, Fabien Galthié,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lerugbynistere.fr/news/rugby-france-qua-pense-fabien-galthie-de-la-performance-de-matthieu-jalibert-2011221802.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RUGBY. FRANCE. Qu&#39;a pensé Fabien Galthié de la performance de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTfg1HuALy_CQ20-sgJB8hU9luU1MVtp3L7F1OBKjwWh34LftcnyvFzkLWiPIjeuc3W_jt0EBS" alt="RUGBY. FRANCE. Qu&#39;a pensé Fabien Galthié de la performance de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rentré à la place de Romain Ntamack, blessé, le Bordelais Matthieu Jalibert a-t-il tapé dans l&#39;œil de Galthié ?</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/fabien-galthie-pourquoi-le-selectionneur-du-xv-de-france-porte-t-il-des-lunettes-1669063'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fabien Galthié : pourquoi le sélectionneur du XV de France porte-t-il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqHRklSegA3C1lLgXeqEoM1UlX1fKqQ_RzGzwvuDpLzBkL67vYI65JgUQM6CocxcLSl7ja1UqW" alt="Fabien Galthié : pourquoi le sélectionneur du XV de France porte-t-il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match de rugby du Tournoi des 6 Nations opposant la France à l&#39;Angleterre au stade de France à Saint-Denis, Seine Saint-Denis, France, le 19 mars 2022. ©&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/fabien-galthie-pourquoi-le-compagnon-dhelena-noguerra-porte-t-il-des-lunettes-speciales-743320'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fabien Galthié : pourquoi le compagnon d&#39;Helena Noguerra porte-t ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeCfwe2Yrd0kN6hMPbfPAEp7mTtJ0AAvYZYlju7avbNsqacu32l7-hZ8GNHKe4xg7PK_qCElzH" alt="Fabien Galthié : pourquoi le compagnon d&#39;Helena Noguerra porte-t ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il est un joueur de rugby emblématique du XV de France. Fabien Galthié porte une nouvelle casquette au sein de cette équipe. Il en est désormais l&#39;...</p></div>
            </div>
        </a>
        </Template></>;
}