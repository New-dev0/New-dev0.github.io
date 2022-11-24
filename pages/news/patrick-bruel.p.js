import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Patrick Bruel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Patrick Bruel"/>
        <meta name="description" content="Trending News about Patrick Bruel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Patrick Bruel</h1>
            <Image width={800} height={500} src="https://tf1-et-vous.tf1.fr/sites/default/files/scald/gagnez-un-exemplaire-dedicace-du_-nouvel-album-de-patrick-bruel-tf1etvous.jpg" alt="Patrick Bruel"/>
            <h3>Recent News</h3>
            <a href='https://tf1-et-vous.tf1.fr/gagnez-un-exemplaire-dedicace-du-nouvel-album-de-patrick-bruel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gagnez un exemplaire dédicacé du nouvel album de Patrick Bruel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6IsOtzVLe5h6NsEfmMHjEZQNIYAQZ6adRYCNPwkJjsR93wjaV1bnEosm_PVLpAhNEGFWaFt9K" alt="Gagnez un exemplaire dédicacé du nouvel album de Patrick Bruel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrick Bruel s&#39;est aussi entouré de fidèles collaborateurs comme Paul Ecole, Skalp, Félix Gray, mais aussi de nouveaux venus comme Mosimann, Hoshi, Mark Weld,&nbsp;...</p></div>
            </div>
        </a><a href='http://www.rfm.fr/news/Redecouvrez-Le-Meilleur-des-Reveils-co-anime-par-Patrick-Bruel-28075'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Redécouvrez Le Meilleur des Réveils co-animé par Patrick Bruel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrqLuVa5MUfokcconlBFbSqnkBNL4RsVVw2tBuksQg5O_ffVaHwKDS2sb_pHyM41NdZqrGGCWX" alt="Redécouvrez Le Meilleur des Réveils co-animé par Patrick Bruel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patrick Bruel n&#39;a pas dit son dernier mot. Encore une fois, est le 10e album studio du chanteur et succède Ce soir on sort, écoulé à plus de 300.000 exemplaires&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/franceinter/patrick-bruel-revient-sur-la-genese-de-marre-de-cette-nana-la-8895500'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel revient sur la genèse de « Marre de cette nana là »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYlOFCtEjWRBqV8kwW9XTZZM_UnMs6i6Bb0gT_Gi1IctrpltApnMMg_PYZpdfsCUh9IosLzqHI" alt="Patrick Bruel revient sur la genèse de « Marre de cette nana là »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sorti en 1984, le deuxième single de Patrick Bruel a connu un certains succès bien avant le phénomène « Bruelmania ». Dans la &quot;Bande Originale&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/la-france-sera-une-fois-de-plus-championne-du-monde-patrick-bruel-apparait-survolte-dans-c-a-vous-20221123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«La France sera une fois de plus championne du monde» : Patrick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2eJfumpHAn2XWm-Kn4FejhswHs1e977jlWHAcqXVizxB2RVXdR8lQRmIB2nDzSJvQBVP8_kFe" alt="«La France sera une fois de plus championne du monde» : Patrick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Et si le match de la Coupe du monde 2022 opposant la France à l&#39;Australie (remporté 4-1) a été suivi par 12,5 millions de téléspectateurs, un fan de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}