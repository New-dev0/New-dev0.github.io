import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo"/>
        <meta name="description" content="Trending News about Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/153b0fd1-5d8d-4b9a-8831-b59d4a0f74e9/1200x630" alt="Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/fernando-santos-will-ronaldo-polemik-endgueltig-beenden-530725'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fernando Santos will Ronaldo-&quot;Polemik&quot; endgültig beenden</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Fernando Santos will Ronaldo-&quot;Polemik&quot; endgültig beenden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugals Superstar Cristiano Ronaldo hat nach Aussage seines Trainers Fernando Santos mit Enttäuschung und Verwunderung auf seine Reservisten-Rolle im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-niedergang-ist-selbstverschuldet-deutliche-kritik-an-cristiano-ronaldo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: &quot;Niedergang ist selbstverschuldet&quot; - deutliche Kritik an ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXPEp7m3X3RS1FroR-E8IO61arYbih0y27du_ZwkHQL2yzGm67yXmjV7ieUhjEKVaDluA7MzSr" alt="WM 2022: &quot;Niedergang ist selbstverschuldet&quot; - deutliche Kritik an ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Verzockt Cristiano Ronaldo auf der Zielgerade seiner Karriere alle Sympathien? Auch in Portugal wird das Verhalten von CR7 bei der Weltmeisterschaft in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2878011'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mangel an Respekt - Ronaldo nur „dicker Mann“? Kaka schießt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJ1sevST7ikaHyLiU6I6wFfnUn0Pb9A2Ntp_MvVQCiP1raaTQSB3HoSnWs0WtT4v_ySbCIktza" alt="Mangel an Respekt - Ronaldo nur „dicker Mann“? Kaka schießt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während für Brasiliens Fußball-Nationalteam bei der WM in Katar nach wie vor alles nach Plan läuft, ärgert sich Ex-Superstar Kaka über das Verhalten ...</p></div>
            </div>
        </a><a href='https://www.krone.at/2877930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutliches Ergebnis - Portugal-Fans wenden sich komplett von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJB9-Bf5CDpZb9sCRI5tjBfOEVbdQaRhqrQHr0sfyqOFMdp_w5ZmzOP36PVxqaEVNCn8vHwQHF" alt="Deutliches Ergebnis - Portugal-Fans wenden sich komplett von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rückschlag für den Superstar: Vor dem Viertelfinal-Spiel von Portugal bei der Weltmeisterschaft in Katar sprechen sich über 90 Prozent gegen einen ...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-ex-weltfussballer-kaka-ronaldo-in-brasilien-nur-ein-dicker-mann'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: „Ronaldo ist nur ein dicker Mann“ - Ex-Weltfußballer Kaká ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0g-wU-v_wyvydl86BDqVjvTqRpqptSCzqgeqf_fU0I3KTXTV0UnfRoWQaxfuDzWfufrmEUoZ7" alt="WM 2022: „Ronaldo ist nur ein dicker Mann“ - Ex-Weltfußballer Kaká ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Weltfußballer Kaká geht mit den brasilianischen Fans hart ins Gericht. Er vermisst den Respekt gegenüber sportlichen Legenden und nennt Ronaldo als&nbsp;...</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/fussball/wm-2022/gastbeitrag-von-rhetorik-experte-ehlers-ronaldo-zeigt-immer-absolute-selbstkontrolle-bis-auf-einen-tv-moment_id_180443543.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo zeigt immer absolute Selbstkontrolle - bis auf einen TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBI-BAsHt-Zf08saNULdTdRXH780M7tfRc9y1wKmtETL6dSRypKwKeT1W1mgeg1ROPVA-ZVW-x" alt="Ronaldo zeigt immer absolute Selbstkontrolle - bis auf einen TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal hat mit Ronaldo das WM-Viertelfinale erreicht. Der eitle Weltsstar zeigt dabei wie immer seine einstudierten Gesten. Diese völlige Kontrolle hat er&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/wieder-aerger-um-ronaldo-fans-wenden-sich-vom-superstar-ab/402253437'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wieder Ärger um Ronaldo: Fans wenden sich vom Superstar ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXwGwnKVbRInK0ZvxvFidvyPkY7q7yMggL-eoo8oSO9x8hXfQjssbG0lyt6a5RtY6TXfsfAEkP" alt="Wieder Ärger um Ronaldo: Fans wenden sich vom Superstar ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei einer Umfrage sprachen sich mehr als 90 Prozent gegen eine Rückkehr des Superstars Cristiano Ronaldo in die portugiesische Startelf aus.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-mehr-respekt-zeigen-mesut-ozil-verteidigt-ronaldo-harte-kritik-an-medien-experten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: &quot;Mehr Respekt zeigen!&quot; - Mesut Özil verteidigt Ronaldo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmoJQ8Yf5__VKz8-Mo2QRBKu8zoJ7CmXS2j_XrgpUOdbn5BY4psy2Nn3O8MfDsgDsZCEMCygH4" alt="WM 2022: &quot;Mehr Respekt zeigen!&quot; - Mesut Özil verteidigt Ronaldo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesüt Özil verteidigt Cristiano Ronaldo in einem Statement und beschuldigt dabei Medien und Experten, CR7 für Klicks auszunutzen. Weiter fordert er mehr&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2212/Artikel/mesut-oezil-medienschelte-cristiano-ronaldo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 - Mesut Özil: Medienschelte wegen Cristiano Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfkGGF-_o23Gtd_Z1Xb04ctexZ0VvMI2sykxkOhqDiUhIRaS9UxV2sHVyNSswKpGuelRv5y0nP" alt="WM 2022 - Mesut Özil: Medienschelte wegen Cristiano Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesut Özil hat Kritik am Umgang mit Cristiano Ronaldo geübt. Dabei nahm der frühere deutsche Nationalspieler vor allem die Presse ins Visier.</p></div>
            </div>
        </a><a href='https://www.welt.de/sport/fussball/wm/article242593641/WM-2022-Portugals-Fans-wollen-Ronaldo-nicht-in-Startelf-sehen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Portugals Fans wollen Ronaldo nicht in Startelf sehen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDIPYMM4OJ4BLRmMT8DXHk0vbxBOKWScmMNucUs7uylGb_9FQbFONiHKnp5mFGon3g4xEAJeqL" alt="WM 2022: Portugals Fans wollen Ronaldo nicht in Startelf sehen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Santos degradiert Cristiano Ronaldo bei der WM zu einem Ersatzspieler. So etwas hätte sich ein portugiesischer Nationaltrainer lange nicht trauen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}