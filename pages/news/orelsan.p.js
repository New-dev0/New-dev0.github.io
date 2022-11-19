import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Orelsan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Orelsan"/>
        <meta name="description" content="Trending News about Orelsan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Orelsan</h1>
            <Image width={800} height={500} src="" alt="Orelsan"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/orelsan-au-zenith-de-nantes-ce-vendredi-soir-comment-trouver-des-places-de-derniere-minute-7735b8da-6728-11ed-8d02-f374de6baa45'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orelsan au Zénith de Nantes ce vendredi soir : comment trouver des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDx3I-wOBgwizaW8ig-3MBqB9tfdWsz09MkiEVAYiRZNStVu9K-PdgTHs09IIyAFs1xYT9HPD3" alt="Orelsan au Zénith de Nantes ce vendredi soir : comment trouver des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La coqueluche du rap français est à Nantes ce vendredi 18 novembre. Orelsan doit assurer son concert au Zénith et si la billetterie affiche complet depuis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/le-saviez-vous-orelsan-est-tres-proche-de-michel-polnareff_506803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le saviez-vous ? Orelsan est très proche de… Michel Polnareff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRquxjKakaI63jdDKkReMPaRWfWshMz2nUY1jyhq44jb7oD4pvdVGnlxPLDVVImjxcFdRdQ36Bt" alt="Le saviez-vous ? Orelsan est très proche de… Michel Polnareff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La cérémonie des NRJ Music Awards signe son grand retour sur TF1, ce vendredi 18 novembre. L&#39;occasion de se pencher sur l&#39;une des stars de la soiré...</p></div>
            </div>
        </a>
        </Template></>;
}