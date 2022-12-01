import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maroc Canada</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maroc Canada"/>
        <meta name="description" content="Trending News about Maroc Canada" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maroc Canada</h1>
            <Image width={800} height={500} src="https://static.cnews.fr/sites/default/files/ap22331548143087-taille1200_638747c404c31_0.jpg" alt="Maroc Canada"/>
            <h3>Recent News</h3>
            <a href='https://www.cnews.fr/sport/2022-11-30/coupe-du-monde-2022-canada-maroc-quel-jour-et-quelle-heure-1295542'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Canada-Maroc, quel jour et quelle heure ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqa6adGzTbGLJSI0IXOPBOK1WjlAiLFaTRIO9e7ACiL5ZxlW02EGu9z4reqprFhcqaP8uTM6KG" alt="Coupe du monde 2022 : Canada-Maroc, quel jour et quelle heure ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dernier match de phase de groupes pour le Canada et le Maroc. Les deux pays s&#39;affrontent ce jeudi 1er décembre. Voici le programme.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Yassine-bounou-maroc-disponible-pour-le-match-contre-le-canada/1367682'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yassine Bounou (Maroc) disponible pour le match contre le Canada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbAifimL-55Ub1YD5mj4f2cBmTLmWJqJB9u9WuyT-EnolfnY7ew35tMWk9PzxRmJoxVcDBxGVF" alt="Yassine Bounou (Maroc) disponible pour le match contre le Canada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que son cas avait suscité l&#39;incompréhension après son remplacement entre les hymnes et le début du match contre la Belgique dimanche, le gardien du&nbsp;...</p></div>
            </div>
        </a><a href='https://ici.radio-canada.ca/sports/1937356/soccer-canada-maroc-coupe-monde-mondial'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Canada pour l&#39;honneur, le Maroc pour la survie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-fNQFnqhsoYFdx4xiWmAgWNOr3YyHZTBREFDJVldbfgbY-rytcGs3Fx78S-moK94mWPG1CjFn" alt="Le Canada pour l&#39;honneur, le Maroc pour la survie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Canada affronte le Maroc jeudi à son dernier match à la Coupe du monde.</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/canada-maroc-diffusion-tv-live-streaming-compos-probables-et-avant-match/bltf910dea66eb0f8d5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canada-Maroc : diffusion TV ; live streaming, compos probables et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdx1KTBm1_Hll1yMk5hbTU4PYBk4Q7BvrT5ktBDO5SzALROACA8gEya6WgMe3MfyCXEz0p22Rr" alt="Canada-Maroc : diffusion TV ; live streaming, compos probables et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Où voir le match, heure du coup d&#39;envoi, les compositions des équipes : GOAL vous dévoile toutes les informations utiles sur Canada-Maroc.</p></div>
            </div>
        </a><a href='https://www.sofoot.com/pronostic-canada-maroc-analyse-cotes-et-prono-du-match-de-la-coupe-du-monde-2022-522251.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pronostic Canada Maroc : Analyse, cotes et prono du match de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeG4_yTvvZpeoMpPByR_bCZ2eKgSD5tfuhgIVY9gTgNwizKe7bbbvoLuT7XHJ3KU53oHb3rtm8" alt="Pronostic Canada Maroc : Analyse, cotes et prono du match de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>100€ remboursés en Freebets sur Canada - Maroc ! Le Bonus Betclic est en ce moment de 100€ en vous inscrivant avec le code SOFOOT. Votre 1er ...</p></div>
            </div>
        </a><a href='https://www.topmercato.com/1008618-match-canada-maroc-chaine-tv-et-compos-probables-cdm22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match Canada – Maroc : chaîne TV et compos probables</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpWgeJ6TwYVMnUKtlD6bo6RBHiDHpgvuvWfIOUwqzwQJrxyEmpTEngSztfdQz1xWMsNMaZAIVF" alt="Match Canada – Maroc : chaîne TV et compos probables" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Canada et le Maroc s&#39;affrontent à la Coupe du monde 2022, dans le cadre de la dernière journée du groupe F, jeudi à 16 heures. Chaîne TV, compos.</p></div>
            </div>
        </a><a href='https://paris-sportifs.lefigaro.fr/pronostics/canada-maroc-01-12-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pronostic Canada – Maroc 01/12/2022 Coupe du monde 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsumxYhXGTyF-lxCvqW5boyk1ZsYKyOSJT6Se6tbh9OYdIS6Z11_AofU1CU_1zLoujN2OcL_hS" alt="Pronostic Canada – Maroc 01/12/2022 Coupe du monde 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Maroc affronte un Canada déjà éliminé du tournoi pour le dernier match de ce groupe F. Retrouvez ici notre prono pour Canada - Maroc.</p></div>
            </div>
        </a>
        </Template></>;
}