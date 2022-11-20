import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coupe de France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coupe de France"/>
        <meta name="description" content="Trending News about Coupe de France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coupe de France</h1>
            <Image width={800} height={500} src="" alt="Coupe de France"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/football/coupe-de-france/coupe-de-france-tous-les-resultats-des-matches-du-8e-tour-deja-disputes-6f905fea-681d-11ed-8d42-b9ab4d04aa80'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France. Tous les résultats des matches du 8e tour déjà ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5irW9rAEajmtznSnvcDUuu8atTWn1OR-b2WzcanQKK50XH_Z5sDlMuRpX5okROgFLdsQLbIcu" alt="Coupe de France. Tous les résultats des matches du 8e tour déjà ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sochaux et Guingamp, pensionnaires de Ligue 2, ont chuté. Plusieurs clubs de l&#39;Ouest ont quant à eux validé leur ticket pour les 32es de finale de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/football/coupe-de-france-sochaux-sorti-sans-gloire-aux-tirs-au-a-thaon-les-vosges-1668896443'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Sochaux sorti sans gloire aux tirs au but à Thaon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJUFZnO1GeOyi2rjtLSx4WCxOGI46XOn_HHBM7v7dwNXTb2SmdxXC6toqB7E2vTmPc_sTEUHFL" alt="Coupe de France : Sochaux sorti sans gloire aux tirs au but à Thaon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Honteux&quot;, &quot;indigne&quot;, les joueurs du FCSM ne se trouvent pas d&#39;excuses pour résumer leur élimination aux tirs au but ce samedi au 8ème tour de la coupe de&nbsp;...</p></div>
            </div>
        </a><a href='https://la1ere.francetvinfo.fr/coupe-de-france-les-resultats-des-clubs-guadeloupeen-et-martiniquais-dans-l-hexagone-1341884.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : les résultats des clubs guadeloupéen et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcbZ4ejY8jIcnAnZvM-GP27836X6-dPcZoRLhc8wIFgvGmzxk0u-2p6M3EasWx5W5ewigPriHv" alt="Coupe de France : les résultats des clubs guadeloupéen et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Guadeloupéens de l&#39;Étoile de Morne-à-l&#39;Eau se sont inclinés 6 à 0 face à l&#39;US Granville (N2), tandis que les Martiniquais de l&#39;Aiglon du Lamentin ont&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Guingamp-surpris-par-les-herbiers-au-8e-tour-de-la-coupe-de-france-rodez-et-pau-passent-de-justesse/1365741'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guingamp surpris par Les Herbiers au 8e tour de la Coupe de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtALnltLvsa9mfxg3lF-l5ncjkQwKyFG6ik0YeXqkMJSO_Y3ZZdUg86msnuWt_PhfVMQ_xMrj0" alt="Guingamp surpris par Les Herbiers au 8e tour de la Coupe de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après Sochaux, Guingamp a lui aussi été éliminé de la Coupe de France aux tirs au but samedi. Les Bretons se sont inclinés sur la pelouse des Herbiers (2-2,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Valenciennes-grenoble-et-nimes-franchissent-avec-la-maniere-le-8e-tour-de-coupe-de-france/1365675'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Valenciennes, Grenoble et Nîmes franchissent avec la manière le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5pw59G7IB5z4l8jdIDPZnQYZHCBmp_Dr6YDgmME_0hx35EApMMJzeawj1UpkJq9tQAwzQgm0C" alt="Valenciennes, Grenoble et Nîmes franchissent avec la manière le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valenciennes, Grenoble et Nîmes, pensionnaires de Ligue 2, se sont défaits sans difficulté de Feignies-Aulnoye (3-0), Villefranche (2-0) et Montauban (4-0)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/football/coupe-de-france-grenoble-prolonge-sa-serie-et-file-en-32e-1668871365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Grenoble prolonge sa série et file en 32e</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSw-Vh-N1wLjSnpVEsXPJYgsrHBY1EKpWTbX5Tvd-O4jRRi50fdeMinbzs6IgDxB6GqF9uOFkSe" alt="Coupe de France : Grenoble prolonge sa série et file en 32e" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le GF38 s&#39;est qualifié pour les 32e de finale de la coupe de France en battant Villefranche (National) 2 à 0 samedi au Stade des Alpes.</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/football/coupe-de-france-8e-tour-normandie-direct-alencon-granville-avranches-1668850584'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : ça passe pour Granville et Avranches , ça coince ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQs0-FTBTLZv3ndaU4eozIW_YJc6hkBlNlTd4C-ffLtB8Vj-WBFyN6T6c8SCI0gkB_LEyEez6SR" alt="Coupe de France : ça passe pour Granville et Avranches , ça coince ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Normandie a placé trois de ses équipes sur les cinq engagées ce samedi pour les 32e de finale de Coupe de France. Avranches, Evreux et Granville se sont&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/coupe-de-france/coupe-de-france-les-herbiers-elimine-guingamp-aux-tirs-au-but-2-2-4-3-ddd6225a-683b-11ed-8d42-b9ab4d04aa80'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France. Les Herbiers éliminent Guingamp aux tirs au but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfKFsQirIwtncoDqxlI9VL3xepw3IDfIc2Il38ho2i6UXb0Ljv9mzv7vk-9A1pA33tFjxYjf9E" alt="Coupe de France. Les Herbiers éliminent Guingamp aux tirs au but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coupe de France (8e tour). Les Herbiers (N2) – Guingamp (L2) : 2-2 (4-3). Au terme d&#39;un match plaisant et équilibré, ce sont les Herbretais qui se sont&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Coupe-de-france-sochaux-elimine-aux-tirs-au-but-amiens-cartonne/1365721'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Sochaux éliminé aux tirs au but, Amiens cartonne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjkWGspovEHvNmi-R9cnU4FO-mIHKcmWZj7cIOD1C4stpadMFhLGghcyZ-3KzE4bSmCZftpUnZ" alt="Coupe de France : Sochaux éliminé aux tirs au but, Amiens cartonne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi, le 8e tour de la Coupe de France s&#39;est poursuivi avec plusieurs matches au programme. Sochaux (Ligue 2) a été sorti aux tirs au but contre Thaon,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-de-france/coupe-de-france-sochaux-et-guingamp-a-la-trappe-bordeaux-avec-difficultes-20221119'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Sochaux et Guingamp à la trappe, Bordeaux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSm7J7Zl1dvhvzcT2hYFOOKL5nY2o3nGtMEpGms9C076ABFW9nzFeaSqmL1gaJz6eTjbGQ5fC91" alt="Coupe de France : Sochaux et Guingamp à la trappe, Bordeaux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sochaux et Guingamp s&#39;inclinent aux tirs au but tandis que Bordeaux se fait des frayeurs contre un club de 4e division.</p></div>
            </div>
        </a>
        </Template></>;
}