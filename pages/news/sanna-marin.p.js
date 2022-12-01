import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sanna Marin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sanna Marin"/>
        <meta name="description" content="Trending News about Sanna Marin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sanna Marin</h1>
            <Image width={800} height={500} src="https://media0.faz.net/ppmedia/aktuell/1653473625/1.8499784/facebook_teaser/die-finnische.jpg" alt="Sanna Marin"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/gesellschaft/menschen/sanna-marin-und-jacinda-ardern-kontern-sexistische-frage-18499785.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministerpräsidentinnen: Sanna Marin und Jacinda Ardern kontern ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBDubb2HEHiH1OvBX-qRZ0WTQjI9g5jyN75PCO_KEpYzaRaCWwjCM07aXR97AhIGmq5uVF7oKD" alt="Ministerpräsidentinnen: Sanna Marin und Jacinda Ardern kontern ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die beiden Spitzenpolitikerinnen wurden bei einer gemeinsamen Pressekonferenz befragt, ob sie sich wegen ihres Alters und Geschlechts...</p></div>
            </div>
        </a><a href='https://kurier.at/politik/ausland/treffen-nur-wegen-gleichen-alters-ardern-und-marin-sind-empoert/402243405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Treffen nur &quot;wegen gleichen Alters&quot;? Junge Premierministerinnen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfC-LxaOuacChNwH5eQ1uyJ0U8VW7NqQTXq-U-W8QZrim4y3CmFqhAKn6RWfd3qOoeh26OQbWG" alt="Treffen nur &quot;wegen gleichen Alters&quot;? Junge Premierministerinnen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die finnische Ministerpräsidentin Sanna Marin hat bei einem Besuch in Neuseeland eine ungewöhnlichen Reporterfrage nach dem Zweck ihrer Reise schlagfertig&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/politik/ausland/sanna-marin-besucht-jacinda-ardern---weil-sie-frauen-und-jung-sind---32962768.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sanna Marin besucht Jacinda Ardern – weil sie Frauen und jung sind?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3VM9i_jEYsaqewLJXH0ViuCQ0J3fVekZFpD-2pre20JT5zM5sCOqApwQ7pIU2seSboJWbhFEU" alt="Sanna Marin besucht Jacinda Ardern – weil sie Frauen und jung sind?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30.11.2022, 14:22 2 Min. Die finnische Ministerpräsidentin Sanna Marin ist zu Besuch in Neuseeland. Bei einer gemeinsamen Pressekonferenz mit Amtskollegin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000141363661/treffen-nur-wegen-gleichen-alters-eklat-bei-pressekonferenz-mit-ardern'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Treffen nur &quot;wegen gleichen Alters&quot;? Eklat bei Pressekonferenz mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnAXcTbAs5haoECyWBU6b-XsJVUy7htQ5vuksmLQ_aegHE22hu8fsucLJHElO_AClQujWxTRJD" alt="Treffen nur &quot;wegen gleichen Alters&quot;? Eklat bei Pressekonferenz mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wellington – Bei der gemeinsamen Pressekonferenz von Neuseelands Premierministerin Jacinda Ardern und ihrer finnischen Amtskollegin Sanna Marin ist es am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rnd.de/politik/sanna-marin-und-jacinda-ardern-kontern-reporterfrage-treffen-uns-weil-wir-ministerpraesidentinnen-5BKBJYBNVBGQJFY63DRWUV7LH4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sanna Marin und Jacinda Ardern kontern Reporterfrage: „Treffen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgRCg8VkttXVCn4c6aSnpyFvong6rgMDFExeGLcQAlOSr_dr4Dlef-ebhtPNUF1afqzKz4HotZ" alt="Sanna Marin und Jacinda Ardern kontern Reporterfrage: „Treffen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Finnlands Premierministerin Sanna Marin ist zu Besuch in Neuseeland. Bei einer Pressekonferenz mit Amtskollegin Jacinda Ardern werden beide gefragt,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mopo.de/news/politik-wirtschaft/daemliche-reporterfrage-finnlands-ministerpraesidentin-reagiert-schlagfertig/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ziemlich dämliche Reporterfrage: Finnlands Ministerpräsidentin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT07H2R4RM37ppbWrSH1y6P6Tn3Ci3_YxxkQISZOpGRlny5HCkrwTzHZ9ThVIgaZ6Wentkny4xX" alt="Ziemlich dämliche Reporterfrage: Finnlands Ministerpräsidentin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reporterinnen und Reporter sollten lieber gut vorbereitet in ein Gespräch mit Sanna Marin gehen. Die finnische Regierungschefin wurde bei einem Besuch in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141382929/wie-frau-die-luft-rauslaesst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wie frau die Luft rauslässt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDK-OTgPIgN78qZUTwb-xijVaBOki3a_aw-cQyD6tfXWtw7xcPgX500O68PAtQQms-TYHUDlLt" alt="Wie frau die Luft rauslässt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei einem Besuch in Neuseeland bei ihrer Kollegin Jacinda Ardern wurde die finnische Ministerpräsidentin Sanna Marin gefragt, ob sie sich mit Ardern nur wegen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}