import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Modric</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Modric"/>
        <meta name="description" content="Trending News about Modric" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Modric</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/8ad41272-3bc7-4877-9fc0-057102471d05/1200x630" alt="Modric"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-modric-und-casemiro-mit-trikottausch-zur-halbzeit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Modric und Casemiro mit Trikottausch zur Halbzeit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtOtsP4XTqC0p9Q0wVaggTUeV9hzy5ZcM30T_67SK7OCIkXyPRCm6PPy0M3OUfJqrWpzuT6FY2" alt="WM 2022: Modric und Casemiro mit Trikottausch zur Halbzeit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luka Modric und Casemiro haben im Viertelfinale zwischen Brasilien und Kroatien ihre Trikots getauscht. Der Zeitpunkt dabei überrascht.</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/kroatien-luka-modric-spielmacher-brasilien-ewig-jung-analyse-wm-viertelfinale/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luka Modric beim WM-Viertelfinale im Fokus: Das zeichnet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzknjILzP4ahWjxKXWG2Uku7XRBfp98Hel8a0Jpwz9Tpc7ApE7JwMKhWUuNuQWR1LJJLOkOMIE" alt="Luka Modric beim WM-Viertelfinale im Fokus: Das zeichnet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>37 Jahre ist Kroatiens Mittelfeldspieler Luka Modric inzwischen alt. In seiner Nationalmannschaft ist er trotzdem noch der wichtigste Mann und steht auch&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/sport/fussball/wm/id_100095318/dalic-feiert-modric-einer-der-besten-spieler-der-welt-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM | Dalic feiert Modric: &quot;Einer der besten Spieler der Welt&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqpHWEmaljCmUvjPst31_Hv1mmakDjZoj2bJiRRDWAPmRT7MWnBVoL9aBy_ZJA--hPrhA3kTky" alt="Fußball-WM | Dalic feiert Modric: &quot;Einer der besten Spieler der Welt&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kroatiens Cheftrainer Zlatko Dalic hat seinen Spielmacher Luka Modric nach der WM-Überraschung gegen Rekord-Champion Brasilien gelobt.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2212/Artikel/brasilien-kroatien-viertelfinale-luka-modric-und-casemiro-tauschen-schon-zur-halbzeit-trikots.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 - Viertelfinale zwischen Brasilien und Kroatien: Casemiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQuJdywju3Velm1xJ78aR-xHfyRZGT39067gc1vIrD2IBiNfoS8mo61LQn2LLV1ysiwfQi4-a-" alt="WM 2022 - Viertelfinale zwischen Brasilien und Kroatien: Casemiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casemiro und Luka Modric haben bereits in der Halbzeit des WM-Viertelfinals zwischen Brasilien und Kroatien die Trikots getauscht.</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/fussball-wm/Alternder-Magier-Modric-beunruhigt-Kroatien-article23773397.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schmale Schultern, riesige Last: Alternder Magier Modric beunruhigt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKyWWhRGmvDvQ6PNg0FwD-pO0A38P5NpNnSvokro6HjPObYJh9VCSWMGfR0Y7KNSLiOY-dFDx6" alt="Schmale Schultern, riesige Last: Alternder Magier Modric beunruhigt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei der Fußball-Weltmeisterschaft 2018 in Russland führte Luka Modric die kroatische Nationalmannschaft bis ins Finale. Nun, vier Jahre später,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/de/meldungen/wm-2022-casemiro-luka-modric-trikot-tausch-brasilien-kroatien/bltcbb84b5897c859d6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Casemiro und Luka Modric tauschen im Viertelfinale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTTArVdH6jXvvsKNDm5Zk5pAYWEn5IZjZS49QKk4otmthb63ifGLboV-JMWbZXODQtvcPcEpAd" alt="WM 2022: Casemiro und Luka Modric tauschen im Viertelfinale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die ehemaligen Real-Kollegen stellten schon zum Pausentee sicher, dass sie das Trikot des anderen bekommen.</p></div>
            </div>
        </a><a href='https://rblive.de/news/wm-kroatien-mit-modric-und-gvardiol-erster-haertetest-fuer-brasilien-3502459'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM: Kroatien mit Modric und Gvardiol erster Härtetest für Brasilien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcAiATVujPlJyTgiTfHJtgR4Jgk_PWEpq64zNB_FcvZodphT2O3nBHEmBbRWAMQXRZogUJUsyP" alt="WM: Kroatien mit Modric und Gvardiol erster Härtetest für Brasilien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manch einer dürfte sich fragen: Wer soll diese Brasilianer aufhalten? Die Kroaten um Luka Modric und RB-Leipzig-Verteidiger Josko Gvardiol haben vor dem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}