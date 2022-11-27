import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anne Sylvestre</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anne Sylvestre"/>
        <meta name="description" content="Trending News about Anne Sylvestre" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anne Sylvestre</h1>
            <Image width={800} height={500} src="https://www.liberation.fr/resizer/-tvkn84zUobBP0JGwWGDyNf1nQU=/1200x0/filters:format(jpg):quality(70):focal(2925x1765:2935x1775)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/UPSE5T5U6RGTRNEFVJ7OUBY7KE.jpg" alt="Anne Sylvestre"/>
            <h3>Recent News</h3>
            <a href='https://www.liberation.fr/culture/musique/anne-sylvestre-detours-et-dernier-tour-20221126_4NO6G2TM2BARNNIMVURSGW6XTU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anne Sylvestre, Détours et dernier tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDJT93kJN477xy7aicqoOZC35gQhSbXf6s5haAPfMANrdyTtz6ClNsn4bV55-9XIKFWmVcfUtY" alt="Anne Sylvestre, Détours et dernier tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux ans après la disparition d&#39;Anne Sylvestre, paraît «Manèges», l&#39;album qu&#39;elle n&#39;a pas eu le temps d&#39;enregistrer, composé de magnifiques titres inédits&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/musique/20221125.OBS66399/anne-sylvestre-jesse-tabish-black-eyed-peas-les-disques-a-ecouter-ou-pas-ce-week-end.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anne Sylvestre, Jesse Tabish, Black Eyed Peas… Les disques à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEDI6ZZhf8Iyc0PQ7tTTmKzJSObFNldWoTZi2zuOekw2eFoBI7Zh_pUmmdjD97C4KiA1Ou65nc" alt="Anne Sylvestre, Jesse Tabish, Black Eyed Peas… Les disques à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au menu de la bande-son de « l&#39;Obs » : les ultimes intentions artistiques d&#39;Anne Sylvestre réunies dans un album posthume émouvant, mais aussi le premier&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}