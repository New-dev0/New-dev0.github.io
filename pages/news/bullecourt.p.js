import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bullecourt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bullecourt"/>
        <meta name="description" content="Trending News about Bullecourt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bullecourt</h1>
            <Image width={800} height={500} src="https://img-4.linternaute.com/w9BRzZ2NaRIB3gGiGZDtWmiO2J8=/1500x/smart/f7cdba1ebbad4918aac326357795ceb9/ccmcms-linternaute/39646989.jpg" alt="Bullecourt"/>
            <h3>Recent News</h3>
            <a href='https://www.linternaute.com/actualite/faits-divers/2679252-agent-des-impots-tue-a-bullecourt-que-s-est-il-passe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Agent des impôts tué à Bullecourt : le drame prémédité ?...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFXjrB-j3rBOLiYpy8CpN1kZmUEQY1CRMzWvHGaGhT4OB6YwNCHl43iOHUa_qPf9yrFpWows0j" alt="Agent des impôts tué à Bullecourt : le drame prémédité ?..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BULLECOURT. Après le meurtre d&#39;un agent des impôts lors d&#39;un contrôle fiscal à Bullecourt, dans le Pas-de-Calais, une enquête a été ouverte pour assassinat,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/actu/justice-faits-divers/meurtre-d-un-agent-du-fisc-par-un-brocanteur-je-ne-l-ai-jamais-vu-violent-temoigne-le-maire-de-bullecourt-7900208651'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre d&#39;un agent du fisc par un brocanteur : &quot;Je ne l&#39;ai jamais vu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeKjRBbwF5aEcRYjpaT_8pzF3ekXZFSYBb-3oM_5PvNpJBZrRppFdz7Mx1kWRdsHmU-XmT5f6y" alt="Meurtre d&#39;un agent du fisc par un brocanteur : &quot;Je ne l&#39;ai jamais vu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un brocanteur a tué un agent du fisc venu faire des vérifications chez l&#39;homme. Le maire de la commune de Bullecourt est sous le choc.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/hauts-de-france/pas-calais/arras/que-sait-on-du-brocanteur-tueur-presume-d-un-controleur-des-impots-a-bullecourt-2660156.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Un dossier compliqué pour le fisc&quot; : ce que l&#39;on sait de Sandy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRndoreAu5l0nYJ-ibWtkqDxWYt9Tj5zEAQJLmcxLBTxG8oDmLuSUVG1nUtWC7Ho0UuLJVHT8Gi" alt="&quot;Un dossier compliqué pour le fisc&quot; : ce que l&#39;on sait de Sandy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce chef d&#39;entreprise, arrivé en 2015 dans le village de Bullecourt (Pas-de-Calais), tenait un dépôt vente de biens d&#39;occasions rue de Quéant.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/police-justice/article/2022/11/22/rien-on-n-avait-rien-vu-de-change-chez-lui-dans-le-village-de-bullecourt-le-meurtre-d-un-agent-des-impots-par-un-brocanteur-interroge_6151135_1653578.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Rien, on n&#39;avait rien vu de changé chez lui » : dans le village de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGlpk6Iq3fc2cOyCCmv24tyYpRqosGSCKez3N-M5W_5WHjZwL6vp8rRiUnq7zmvmUT_y4U-V74" alt="« Rien, on n&#39;avait rien vu de changé chez lui » : dans le village de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les premiers éléments de l&#39;enquête « semblent se diriger vers un acte prémédité », a indiqué mardi le procureur de la République d&#39;Arras.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/faits-divers/pas-de-calais-le-maire-de-bullecourt-qui-connaissait-le-brocanteur-ne-comprend-pas-ce-geste-et-n-a-aucune-explication_5492862.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pas-de-Calais : le maire de Bullecourt, qui connaissait le brocanteur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEJRYrp3c1mkC0NWi81NHHC67PmkIqvIKP1wg84GmCWThhSclZydQQuCaj_Trz5zgm5PE4bsS7" alt="Pas-de-Calais : le maire de Bullecourt, qui connaissait le brocanteur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le brocanteur a séquestré l&#39;agent du fisc et sa collègue, qui intervenaient pour un contrôle fiscal. Il l&#39;a tué de plusieurs coups de couteaux, avant de se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.weo.fr/dossier/bullecourt-un-agent-du-fisc-tue-par-un-brocanteur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bullecourt : un agent du fisc tué par un brocanteur - Wéo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhUd-NaaKqkMoRDMF2HbToOPR0Sl8QgJYqsvmOPJpLb0DOm-pJYzzYGCXK6itiWjqZtGUAtq0h" alt="Bullecourt : un agent du fisc tué par un brocanteur - Wéo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le drame s&#39;est produit lundi 21 novembre peu après 19h, dans la petite commune de Bullecourt, dans le Pas-de-Calais.Un agent du fisc de 43 ans est mo…</p></div>
            </div>
        </a>
        </Template></>;
}