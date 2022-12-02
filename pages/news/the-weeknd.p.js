import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Weeknd</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Weeknd"/>
        <meta name="description" content="Trending News about The Weeknd" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Weeknd</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/c-saFqrVpScOlHVL45q-43SH5xs=/4x21:996x579/992x0/images/-338756.jpg" alt="The Weeknd"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/people/musique/the-weeknd-ajoute-une-nouvelle-date-de-concert-au-stade-de-france-le-30-juillet-2023_AN-202212010570.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd ajoute une nouvelle date de concert au Stade de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIccsI0Id4wkZ8KzyDbV4DB-ck-5hOm_aESQwDGz0FGosdJJ-ebx13XUnvmg70ji58ole8UwLP" alt="The Weeknd ajoute une nouvelle date de concert au Stade de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir annoncé lundi trois concerts en France, à Paris, Bordeaux et Nice, la popstar canadienne vient compléter sa tournée européenne avec une nouvelle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/gironde/bordeaux/bordeaux-razzia-sur-les-preventes-des-places-pour-the-weeknd-au-stade-matmut-atlantique-13205917.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bordeaux : razzia sur les préventes des places pour The Weeknd au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMfGL3dr8JP5P0fMWyKyUV6jKDn9B-VHPNJ-h8HtUTi8RDanwnpq8eNcECQjsv1i30FmOuIfED" alt="Bordeaux : razzia sur les préventes des places pour The Weeknd au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 1er décembre matin, il fallait bien compter une heure et demie d&#39;attente avant d&#39;avoir accès à la prévente des places du concert de l&#39;artiste&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/culture-loisirs/the-weeknd-ajoute-un-nouvelle-date-a-l-allianz-riviera-de-nice-4303018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd ajoute un nouvelle date à l&#39;Allianz Riviera de Nice !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVdz_pTSyDAirJn6x9E1289T_f0no0FwZTJufXuYx2Eor_PIMzscp5P9JmuXixCYtPYeOltRiI" alt="The Weeknd ajoute un nouvelle date à l&#39;Allianz Riviera de Nice !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une bonne nouvelle pour tous les fans de la super star américaine, The Weeknd annonce une seconde date à l&#39;Allianz Riviera, à Nice, en juillet 2023.</p></div>
            </div>
        </a><a href='https://actu.fr/ile-de-france/saint-denis_93066/le-chanteur-the-weeknd-annonce-une-deuxieme-date-de-concert-au-stade-de-france_55624011.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur The Weeknd annonce une deuxième date de concert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4Qo9MDD3TfQtVKmVjx3wr1Y_DYW8KrR9Jm0sXdykKUkkVDxXvjrfdwiHNMQop687wlZLMFYk5" alt="Le chanteur The Weeknd annonce une deuxième date de concert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La demande est si élevée que The Weeknd se produira samedi 29 et dimanche 30 juillet 2023 au Stade de France (Seine-Saint-Denis).</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/285763-the-weeknd-en-concert-au-stade-de-france-en-juillet-2023-date-supplementaire'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd en concert au Stade de France en juillet 2023 - date ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgOAKAx7uZWhWL0unZ_xQTaQFxQ1FCperEEDyoUgmUnyNhkH3qkVvpnLE81FbU7gZnV2KXStB1" alt="The Weeknd en concert au Stade de France en juillet 2023 - date ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Weeknd est enfin de retour en France. Le Canadien, chanteur de &quot;Blinding Lights&quot;, annonce une tournée pour l&#39;été 2023, &quot;After Hours til Dawn Tour&quot;.</p></div>
            </div>
        </a><a href='https://www.funradio.fr/evenements/the-weeknd-en-concert-en-france-dates-prix-ce-qu-il-faut-savoir-7900211912'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd en concert en France : dates, prix... Ce qu&#39;il faut savoir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREXNmGUL43upWsWrePCJRSM6vhXcOt-4EqQ83KAqmE4Wq1DB8_8ImEr8b1JWN_k4-YjK4rQ-EL" alt="The Weeknd en concert en France : dates, prix... Ce qu&#39;il faut savoir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir annoncé trois dates en France l&#39;été 2023, l&#39;artiste canadien en a ajouté une deuxième au Stade de France.</p></div>
            </div>
        </a><a href='https://www.nicematin.com/concerts/the-weeknd-annonce-une-nouvelle-date-de-concert-a-nice-en-2023-811843'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd annonce une nouvelle date de concert à Nice en 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCgIlbbi6ud7Npp257v57DcM92_6mrqMRme6VuItJlwhhMtY1ZbiG9FjC8zQ8Jjkx2-A-HfjzM" alt="The Weeknd annonce une nouvelle date de concert à Nice en 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les fans de The Weeknd vont être ravis: le chanteur a annoncé ce jeudi 1er décembre l&#39;ajout de plusieurs dates à sa tournée française, dont Nice.</p></div>
            </div>
        </a>
        </Template></>;
}