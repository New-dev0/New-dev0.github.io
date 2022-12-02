import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rogue Heroes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rogue Heroes"/>
        <meta name="description" content="Trending News about Rogue Heroes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rogue Heroes</h1>
            <Image width={800} height={500} src="https://focus.nouvelobs.com/2022/11/24/114/0/1086/543/1200/630/60/0/e805d45_1669280864799-1333627-jpg-r-1920-1080-f-jpg-q-x-xxyxx.jpg" alt="Rogue Heroes"/>
            <h3>Recent News</h3>
            <a href='https://www.nouvelobs.com/teleobs/20221201.OBS66634/rogue-heroes-les-bidasses-en-folie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Rogue Heroes », les bidasses en folie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9jdj01sddKQcv4mHM5KPBVI9nqhwFhgBS5YFlT0Zq0VWNftXuqZWtLZrHnZurlmF7CY2bXUxj" alt="« Rogue Heroes », les bidasses en folie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Epopée des soldats anglais du SAS durant la Seconde Guerre mondiale, cette série, écrite par Steven Knight, exploite les codes esthétiques de « Peaky&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/programmes-tv-du-jeudi-1er-decembre-rogue-heroes-complement-denquete-the-holiday-notre-selection-01-12-2022-L7334IMNMJFPTEWCUK2Z74HPBI.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV du jeudi 1er décembre : «Rogue Heroes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBHqPIgImgbZfRs0x1374uHHltZPDjy7XCvyKrC4G0Y0l40RkaH0iF23viAW3jfG2fvafI8dz4" alt="Programme TV du jeudi 1er décembre : «Rogue Heroes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>« Rogue Heroes », adaptée du livre de Ben Macintyre, est basée sur l&#39;histoire vraie de soldats britanniques de la Seconde Guerre mondiale basés en Afrique du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/series-tv/314860-rogue-heroes-c-lhistoire-vraie-du-soldat-qui-a-inspire-la-nouvelle-serie-du-createur-de-peaky-blinders/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rogue Heroes (Canal+) : l&#39;histoire vraie du soldat qui a inspiré la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rogue Heroes (Canal+) : l&#39;histoire vraie du soldat qui a inspiré la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les fans de Peaky Blinders vont adorer SAS Rogue Heroes ! Aux commandes de cette fiction britannique réjouissante sur la formation d&#39;une unité de soldats&nbsp;...</p></div>
            </div>
        </a><a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000004072.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rogue Heroes sur CANAL+ : que vaut la nouvelle série du créateur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqKMOp-dVA3isl86l_6ZdDFIffcGY1_8Gf5juh2zztU1AeYYdCYFXJb5ZR5PCbilcId-jKYlzI" alt="Rogue Heroes sur CANAL+ : que vaut la nouvelle série du créateur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après Peaky Blinders, Taboo et See, Steven Knight revient avec une nouvelle série explosive et rock&#39;n&#39;roll, intitulée Rogue Heroes, sur la création du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nicematin.com/culture/rogue-heroes-l-histoire-vraie-des-forces-speciales-anglaises-811740'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rogue Heroes, l&#39;histoire vraie des forces spéciales anglaises</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYHfDlj3PDJ4TIDfckclaVjX9DuBNOrXlgU3PL9MA6RXx6BCrCKU_cpHl1KXqSMMpCFuF8DIOD" alt="Rogue Heroes, l&#39;histoire vraie des forces spéciales anglaises" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre Canal+ et l&#39;Angleterre, l&#39;idylle est actuellement au beau fixe. En moins d&#39;un mois, la chaîne cryptée vient de proposer trois séries anglaises&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-television.org/news-tv/Programme-TV-L-homme-de-nos-vies-Rogue-Heroes-que-regarder-a-la-tele-ce-soir-4698108'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV : L&#39;homme de nos vies, Rogue Heroes… que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_uqhr5QKsG8cYH5M_keBQ_AZhDwB5vQCkYQlL7VBQbBeGOyalC8o6QkL6jjOdJZ5qRS5xXL55" alt="Programme TV : L&#39;homme de nos vies, Rogue Heroes… que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La série L&#39;homme de nos vies, la série Rogue Heroes, le match de football Costa Rica – Allemagne et le magazine Envoyé spécial… Voici la sélection Télé 7&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}