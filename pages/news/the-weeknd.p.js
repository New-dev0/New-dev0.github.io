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
            <Image width={800} height={500} src="https://images.bfmtv.com/V6V_qHvmKsq7WhicToXqjlDBREc=/12x2:1612x902/1600x0/images/The-Weeknd-en-janvier-2022-1203220.jpg" alt="The Weeknd"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/people/musique/the-weeknd-en-concert-au-stade-de-france-le-29-juillet-2023_AN-202211280639.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd en concert au Stade de France le 29 juillet 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5Z8t2ce4sbwj8p9p2boCMdMKYQW6PhlDQf6RHKQgD4RpZF0mk13pBfmztiet1XghbI0tXb1hx" alt="The Weeknd en concert au Stade de France le 29 juillet 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir été contraint de reporter puis d&#39;annuler sa précédente tournée en Europe, l&#39;artiste canadien va faire son retour en France pour trois dates à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/culture-loisirs/the-weeknd-se-produira-a-l-allianz-riviera-en-juillet-prochain-a-nice-4185764'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd se produira à l&#39;Allianz Riviera en juillet prochain à Nice</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-O833r55tO93HvRwRDiAiVmfgCqU7TfusrOM7dRAZy2biElLUdQgBkPfZK6xUoMNDYgm_gCMR" alt="The Weeknd se produira à l&#39;Allianz Riviera en juillet prochain à Nice" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est un évènement à Nice l&#39;artiste mondialement connu The Weeknd va se produire à l&#39;Allianz Riviera le 22 juillet 2023.</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/culture/musique/bordeaux-the-weeknd-sera-en-concert-au-stade-matmut-atlantique-a-l-ete-2023-13166447.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bordeaux : The Weeknd sera en concert au stade Matmut Atlantique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQrZZEiLvmUDPYhm483x8Cu4s-z9eIaRcZXnmiEwattBbdjgla0E2dZyOidR7bATn-LwD836gnw" alt="Bordeaux : The Weeknd sera en concert au stade Matmut Atlantique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur canadien vient d&#39;annoncer une date dans le stade bordelais, le 1er août 2023 La déception avait été grande pour les fans du chanteur canadien.</p></div>
            </div>
        </a><a href='https://www.funradio.fr/evenements/the-weeknd-annonce-trois-concerts-exceptionnels-en-france-7900210802'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd annonce trois concerts exceptionnels en France</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYboPvobqHOGHRyRP7pMm1Q-QkjskbBwlqjFrSoVZZ5D7mHPha6Sz6MvM5z9R8ttoUMvxloXG8" alt="The Weeknd annonce trois concerts exceptionnels en France" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est l&#39;information musicale de la soirée : The Weeknd sera en concert à Nice, Paris et Bordeaux en 2023.</p></div>
            </div>
        </a><a href='https://nicepresse.com/la-superstar-the-weeknd-bientot-a-nice-pour-lune-de-ses-rares-dates-francaises/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La superstar The Weeknd bientôt à Nice pour l&#39;une de ses rares ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT39uTDOZCWRZ05mEGUgb8Hj6uWRkpLcTk5DmzWvnpySuImO5_DSbv_XHqgtVRM_RxChHWSWLXi" alt="La superstar The Weeknd bientôt à Nice pour l&#39;une de ses rares ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;immense chanteur canadien The Weeknd se produira à l&#39;Allianz Riviera, le grand stade de Nice, l&#39;été prochain.</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/285763-the-weeknd-en-concert-au-stade-de-france-en-juillet-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd en concert au Stade de France en juillet 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgOAKAx7uZWhWL0unZ_xQTaQFxQ1FCperEEDyoUgmUnyNhkH3qkVvpnLE81FbU7gZnV2KXStB1" alt="The Weeknd en concert au Stade de France en juillet 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Weeknd est enfin de retour en France. Le Canadien, chanteur de &quot;Blinding Lights&quot;, annonce une tournée pour l&#39;été 2023, &quot;After Hours til Dawn Tour&quot;.</p></div>
            </div>
        </a><a href='https://actu.fr/ile-de-france/saint-denis_93066/le-chanteur-the-weeknd-devoile-la-date-de-son-concert-au-stade-de-france_55524150.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le chanteur The Weeknd dévoile la date de son concert au Stade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY9oEjayeI-yMzgdf3gdQGlUPWqLuzn3Kf44vZUxXYWo_6BiwY-zJij1nr8NTNtcrbdvtsKd3j" alt="Le chanteur The Weeknd dévoile la date de son concert au Stade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur canadien The Weeknd a annoncé, lundi 28 novembre 2022, la date de son concert au Stade de France (Seine-Saint-Denis) dans le cadre de sa tournée&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}