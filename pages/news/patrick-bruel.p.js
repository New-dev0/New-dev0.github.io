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
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/MJYQwrVo2svBWFRNoU2ilHeF4Rk/1500x843/2022/11/17/phpxsEUnl.jpg" alt="Patrick Bruel"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/culture/musique/patrick-bruel/patrick-bruel-sort-encore-une-fois-un-dixieme-album-largement-inspire-d-une-actualite-tres-sombre_5482857.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel sort &quot;Encore une fois&quot;, un dixième album largement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0UsS025v1u2JgT7qJU8DlRnpefJS1Pd4VvPbIivuvYqpp-f63OBd1BgaD-gYaseEj684n9gMN" alt="Patrick Bruel sort &quot;Encore une fois&quot;, un dixième album largement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 63 ans, Patrick Bruel est de retour avec &quot;Encore une fois&quot;, son dixième album studio qui sort vendredi 18 novembre. Quatorze titres inspirés par&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/musique/patrick-bruel-chroniqueur-populaire-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel, chroniqueur populaire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuORjiH1lkmJWZ2fCHeI--qxu-QoHl2L4h-2YUiNaB4W_m-jPXhzBJII8MEQ1q4aP7i2BRyjfm" alt="Patrick Bruel, chroniqueur populaire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce soir-là, Patrick Bruel ratera le concert du rappeur superstar Kanye West à l&#39;Accor Arena. Une grande déception pour cet habitué des salles parisiennes. «J&#39;ai&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/patrick-bruel-revient-ce-vendredi-avec-son-dixieme-album_VN-202211170310.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel revient ce vendredi avec son dixième album</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSx2-Zh0Mlny6xfH-SXyPMU_C8o8Jeh220ZrcSpunSz3AnLF8rESJzJEJNfFZwdVYAoy_sQXl_4" alt="Patrick Bruel revient ce vendredi avec son dixième album" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le dixième album studio de Patrick Bruel sort ce vendredi 18 novembre. Le chanteur, qui s&#39;est entouré de nouveaux collaborateurs, s&#39;est largement inspiré de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/musique/son-album-la-politique-la-coupe-du-monde-patrick-bruel-se-confie-a-nos-lecteurs-17-11-2022-BFOYBKDWSFCKTAMTY7NBH234E4.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son album, la politique, la Coupe du monde... Patrick Bruel se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXAhGIwdqC1SsYvnlZDPjhIo_SuXoYGsC8ZOYY6Tr73I9fcCD1EoLrjFkZu8fRwNX565OYro8W" alt="Son album, la politique, la Coupe du monde... Patrick Bruel se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur de 63 ans sort son nouveau disque, « Encore une fois », très réussi. Un album mûri pendant le confinement, empreint de nostalgie, où l&#39;artiste&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/patrick-bruel-cette-question-tres-osee-dun-fan-qui-la-fait-beaucoup-rire-743151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel : cette question très osée d&#39;un fan qui l&#39;a beaucoup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIREbxGFZCeYp2jQgrMNFL1UJhTDKBDyHMOOURi68TUduHZPJE7_bqBI1DkSc3LV9o0nuSXUDq" alt="Patrick Bruel : cette question très osée d&#39;un fan qui l&#39;a beaucoup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeudi 17 novembre, Patrick Bruel s&#39;est confié auprès du Parisien à l&#39;occasion de la sortie de son nouvel album baptisé Encore une fois. Au cours de...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/exclu-patrick-bruel-que-font-ses-enfants-oscar-et-leon-dans-la-vie_506685'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLU – Patrick Bruel : que font ses enfants Oscar et Léon dans la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBcnGc0umllLPvGJaPtXZxMsAWJyzi0DH9L6_1zpVofMggxHdXifIE_mxg1ALUVVAPllOO2rD-" alt="EXCLU – Patrick Bruel : que font ses enfants Oscar et Léon dans la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;occasion de la sortie de son nouvel album Encore une fois, Patrick Bruel se confie dans les colonnes de Gala, en kiosque ce jeudi 17 novembre....</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/une-entente-extraordinaire-les-confidences-de-patrick-bruel-sur-sa-relation-avec-son-ex-amanda-sthers-1668312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Une entente extraordinaire&quot; : les confidences de Patrick Bruel sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUzW7fspZ3OTbSyYrOa6sDaoBTR4G-jggleBapiAw0zVhtODGZIu6V9UNaWRCwL92-yRSdaBCG" alt="&quot;Une entente extraordinaire&quot; : les confidences de Patrick Bruel sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans les colonnes de Gala, jeudi 17 novembre 2022, Patrick Bruel a fait des confidences sur la relation qu&#39;il entretient avec son ancienne femme,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.elle.fr/People/La-vie-des-people/News/Patrick-Bruel-a-propos-de-ses-fils-Je-ne-les-ai-pas-eleves-a-distance-4077281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrick Bruel à propos de ses fils : « Je ne les ai pas élevés à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVqlWttCkNWc025V8szZu5lDSpWUxBzrJNkjEtm8mIP8zx7IrUw4u38lhs3eOPxh0lYx0OA6ls" alt="Patrick Bruel à propos de ses fils : « Je ne les ai pas élevés à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi, Patrick Bruel sera sur le plateau de la « Star Academy » pour chanter avec les élèves du télécrochet de TF1. L&#39;artiste s&#39;apprête à sortir son&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}