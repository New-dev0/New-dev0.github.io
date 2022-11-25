import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Le Meilleur Pâtissier</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Le Meilleur Pâtissier"/>
        <meta name="description" content="Trending News about Le Meilleur Pâtissier" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Le Meilleur Pâtissier</h1>
            <Image width={800} height={500} src="" alt="Le Meilleur Pâtissier"/>
            <h3>Recent News</h3>
            <a href='https://www.femmeactuelle.fr/actu/news-actu/le-meilleur-patissier-cette-evolution-de-lemission-que-mercotte-avoue-regretter-2145358'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Le Meilleur Pâtissier&quot; : cette évolution de l&#39;émission que Mercotte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_FOBux7aSGGNmj6koOOSxsyJthQOt49BL7NvnRyb83LlUPBBMJLsmyM9YY7D0UCXlHIfQ4rfi" alt="&quot;Le Meilleur Pâtissier&quot; : cette évolution de l&#39;émission que Mercotte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis 2012, Mercotte goute des pâtisseries qui donnent l&#39;eau à la bouche de milliers de téléspectateurs français. La membre du jury du Meilleur Pâti1.</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/divertissement/article/dans-le-meilleur-patissier-sur-m6-manon-bat-un-record_210679.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dans « Le meilleur pâtissier » sur M6, Manon bat un record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS54b4F01RjNMfOozFg0z8_ZMmhU7Sp3_wu1PheoAAsTGtp-xEKw--WfiAUyli37S2ONYSWru0F" alt="Dans « Le meilleur pâtissier » sur M6, Manon bat un record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La candidate de la saison 11 du jeu culinaire a remporté le tablier bleu pour la cinquième fois, une première dans l&#39;histoire du « Meilleur pâtissier ».</p></div>
            </div>
        </a><a href='https://www.purepeople.com/article/le-meilleur-patissier-un-celebre-chef-debarque-son-physique-tres-avantageux-fait-sensation_a500540/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Meilleur Pâtissier : Un célèbre chef débarque, son physique très ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTi8unsEP2LeSD3ZZJ5SmFkv58CqeB5-ac-0pcYvRVi3LFnD9vTzoGCZYO228O4mS27S9Guc3xY" alt="Le Meilleur Pâtissier : Un célèbre chef débarque, son physique très ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liane Lazaar est rédactrice web rattachée au pôle TV de Purepeople.com. Elle connaît autant le parcours de Jean-Pierre Pernaut sur TF1 que les derniers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ozap.com/actu/-le-meilleur-patissier-manon-decroche-un-record-sur-m6/624227'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Le meilleur pâtissier&quot; : Manon décroche un record sur M6</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvMWBW-QfW0k6ZBwFgOWk7E1RACjUfQNPwwNDtY9_LkD4Q255pMeW0Gcqkyi2jm_LVsVLNCfVM" alt="&quot;Le meilleur pâtissier&quot; : Manon décroche un record sur M6" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autant d&#39;arguments qui ont convaincu Mercotte et Cyril Lignac de laisser Manon porter de nouveau le tablier bleu à l&#39;issue de l&#39;émission. Et ce, pour la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-television.org/news-tv/Mercotte-passe-aux-aveux-sur-son-epreuve-dans-Le-Meilleur-Patissier-Je-recois-un-peu-d-aide-4697615'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercotte passe aux aveux sur son épreuve dans Le Meilleur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrZPG-E391HbGsUn05Gk9ej8KxI6MEX-ktGo7uwF-J4vzhW3_D5yM5eFZmRjGL6RbRhbuN3Mh9" alt="Mercotte passe aux aveux sur son épreuve dans Le Meilleur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Toutefois, elle a trouvé &quot;génial&quot; l&#39;épreuve technique de la 100ème du Meilleur Pâtissier, où les amateurs devaient suivre les indications de Cyril Lignac qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nextplz.fr/tele/291389-le-meilleur-patissier-manon-bat-un-record-incroyable-dans-lemission-efbfbc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Meilleur pâtissier : Manon bat un record incroyable dans l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzU2j7fQXV46zoxU9EFUH2-u5nR_Cgpw16BkkwXH0xcuxZLypJMuqW-AoI-RXOrPLI27HYroJw" alt="Le Meilleur pâtissier : Manon bat un record incroyable dans l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mercredi, Manon s&#39;est illustrée dans le Meilleur Pâtissier, en obtenant pour la cinquième fois de la saison le fameux tablier bleu.</p></div>
            </div>
        </a>
        </Template></>;
}