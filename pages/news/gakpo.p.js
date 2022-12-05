import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="https://s.hs-data.com/picmon/14/3Xoc_6b3T8Z_l.jpg" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/oranje-shootingstar-gakpo-laesst-zukunft-offen-529117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oranje-Shootingstar Gakpo lässt Zukunft offen</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Oranje-Shootingstar Gakpo lässt Zukunft offen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo will sich erst nach der WM 2022 mit seiner Zukunft auseinandersetzen. Im Anschluss an den 3:1-Sieg über die USA, der ihn und seine Niederländer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport.de/news/ne5133686/wechsel-zum-fc-bayern-cody-gakpo-aeussert-sich-zu-geruechten/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wechsel zum FC Bayern? Gakpo äußert sich zu Gerüchten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTizqUNHO120DRY20hTROAk7N35SkUdWCOdvIcs4zvHK6hvxr1mRFPSNf0O5hYRfs586OiO7NoW" alt="Wechsel zum FC Bayern? Gakpo äußert sich zu Gerüchten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo ist bislang eine der großen Entdeckungen bei der Fußball-Weltmeisterschaft in Katar. Der Niederländer, der bei PSV Eindhoven unter Vertrag steht,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fussballtransfers.com/a7715483519794997455-gakpo-laesst-zukunft-offen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gakpo lässt Zukunft offen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB5hI2o_uckn4lfHgI_S9MC57IA9IIa7jWJqy0FqBSvUMAXNuFXPHXJ5CclTH0ppyttW8F3P_g" alt="Gakpo lässt Zukunft offen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo will sich erst nach der WM mit seiner Zukunft auseinandersetzen. Im Anschluss an den 3:1-Achtelfinalsieg über die USA sagte der nieder (...)</p></div>
            </div>
        </a>
        </Template></>;
}