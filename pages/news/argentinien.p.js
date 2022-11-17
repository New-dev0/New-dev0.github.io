import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentinien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentinien"/>
        <meta name="description" content="Trending News about Argentinien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentinien</h1>
            <Image width={800} height={500} src="" alt="Argentinien"/>
            <h3>Recent News</h3>
            <a href='https://www.skysportaustria.at/deutschland-mueht-sich-zu-sieg-gegen-oman-klarer-argentinien-erfolg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutschland müht sich zu Sieg gegen Oman - klarer Argentinien ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0B5RTBJ90juCBy-mtH37zFbct2WpbcHwaENBhBLubbYYatmlcC2nroMHvEKFqu5fh3oJoHm3K" alt="Deutschland müht sich zu Sieg gegen Oman - klarer Argentinien ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angeführt von Kapitän Lionel Messi hat Titel-Mitfavorit Argentinien das letzte Testspiel vor der Fußball-Weltmeisterschaft klar gewonnen. Die Albiceleste.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2010/2211/News/testspiele-argentinien-besiegt-vae-kroatien-polen-chile-mexiko-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Argentinien schießt sich warm - Polen schont Robert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT52Y82LQPrykEwdEdomFrcKeN5yoViG4aPHIORX5nJXDWHZ2_vYTcz0PUKaQVOjJHnLjACYix7" alt="WM 2022: Argentinien schießt sich warm - Polen schont Robert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der zweimalige Weltmeister Argentinien reist mit einem klaren Sieg im Gepäck zur WM nach Katar.</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/argentinien-vor-rekord-bei-wm-messi-und-co-schlagen-vae-reaktionen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentinien bei WM 2022 vor Rekord: Starke Serie setzt sich fort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVbHjEc4oJSvCNqRQDZzXKKZ_8sXStPKLfuTAWvkHrZQFpiL7ZpSQbjsnV3J84SzyAoxAyMC03" alt="Argentinien bei WM 2022 vor Rekord: Starke Serie setzt sich fort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die argentinische Nationalmannschaft ist am Mittwoch auch im 36. Spiel in Folge ungeschlagen geblieben. Damit kann die Superstar-Elf um Lionel Messi und Co.</p></div>
            </div>
        </a><a href='https://www.sportschau.de/fussball/fussball-laenderspiele-mittwoch-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentinien schießt sich für die WM warm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK3ysaObTohkywM1PxxZLpFnOJDtZczne7OtTvqr5AvZpnZVEjopDJPS1IAfKKnCTUk8KHG1_P" alt="Argentinien schießt sich für die WM warm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angeführt von Kapitän Lionel Messi hat Titel-Mitfavorit Argentinien das letzte Testspiel vor der Fußball-WM klar gewonnen. Auch Polen und Kroatien glückte&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}