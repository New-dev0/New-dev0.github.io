import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Al Nassr</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Al Nassr"/>
        <meta name="description" content="Trending News about Al Nassr" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Al Nassr</h1>
            <Image width={800} height={500} src="https://www.vienna.at/2022/11/WCup_Portugal_Uruguay_Soccer_55095-4-3-227036432732-3643x2732.jpg" alt="Al Nassr"/>
            <h3>Recent News</h3>
            <a href='https://www.vienna.at/ronaldo-nach-saudi-arabien-superstar-laut-bericht-kurz-vor-unterschrift-bei-al-nassr/7775209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo nach Saudi Arabien? Superstar laut Bericht kurz vor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvamvaoY1h3AS4AeR2Lj_FrBsGoWI4h8GE-FrvPqp7MdBVji3WEQWdlR_bXJltTu2sY7YtE5pQ" alt="Ronaldo nach Saudi Arabien? Superstar laut Bericht kurz vor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wird Cristiano Ronaldo in Zukunft in Saudi Arabien im Einsatz sein? Der Fußball-Superstar steht laut einem Bericht der Marca kurz vor der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/sport/ronaldo-vor-wechsel-al-nassr-will-cr7-1.5706799'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Al-Nassr will CR7</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Al-Nassr will CR7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der fünfmalige Weltfußballer Cristiano Ronaldo wird möglicherweise künftig für Al-Nassr aus Saudi-Arabien spielen. Dies berichtet die spanische Zeitung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/bericht-cristiano-ronaldo-kurz-vor-unterschrift-bei-al-nassar-mega-gehalt-winkt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bericht: Transfer von Cristiano Ronaldo vor dem Abschluss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-uENSzHlhT9MvnfXJJXmGgLam2p4_wbG-OwChEwuhTZwN0dHvtxCXTzLB5QjvhgwBKlCB0Y_w" alt="Bericht: Transfer von Cristiano Ronaldo vor dem Abschluss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der derzeit vereinslose Superstar Cristiano Ronaldo steht einem Medienbericht zufolge kurz vor der Vertragsunterschrift beim saudischen Klub Al-Nassr. Der 37&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kicker.de/fifa-23-cristiano-ronaldo-zu-al-nassr-magisches-dreieck-mit-wm-star-927756/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA 23: Cristiano Ronaldo zu Al Nasr - magisches Dreieck mit WM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzuvsKd09Rj6mWSiVdLY5k05uCRgZnuNbpE2vuZgeKKQhtraXGK7bQExz564HJfiZXrzfj4Q6x" alt="FIFA 23: Cristiano Ronaldo zu Al Nasr - magisches Dreieck mit WM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach der &quot;einvernehmlichen Vertragsauflösung&quot; ist Cristiano Ronaldo auf der Suche nach einem neuen Verein. Eine heiße Spur führt zu Al Nasr nach Saudi&nbsp;...</p></div>
            </div>
        </a><a href='https://neunzigplus.de/featured/cristiano-ronaldo-wechsel-saudi-arabien/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo vor Unterschrift in Saudi-Arabien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTsoMXot8IP0wXFqtsmLtc9vSnP-OvaJgJYJb1UQYtog9pwlCRd6K_NNd2daD9eXtyXvwDPSgh" alt="Ronaldo vor Unterschrift in Saudi-Arabien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo zieht es wohl - für mehrere hunderte Millionen Euro - nach Saudi-Arabien zu Al Nassr.</p></div>
            </div>
        </a><a href='https://www.goal.com/de/meldungen/cristiano-ronaldo-al-nassr-saudi-arabien-gehalt-wechsel/blt403b69f5eb0c65b8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mega-Vertrag: Cristiano Ronaldo offenbar vor Einigung mit neuem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUqlZiUEJya0Y0pArAs3xfUKHs2C8D3E-IxDyp0JvNeeqBWP4MHhMcVpl6Dj2BNMgdvJaxGlFE" alt="Mega-Vertrag: Cristiano Ronaldo offenbar vor Einigung mit neuem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WAS IST PASSIERT? Ein Wechsel von Cristiano Ronaldo nach Saudi-Arabien rückt offenbar immer näher. Wie die Marca berichtet, steht eine Einigung zwischen dem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/bericht--cristiano-ronaldo-findet-neuen-verein---deal-vor-abschluss--32962476.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bericht: Cristiano Ronaldo findet neuen Verein - Deal vor Abschluss!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRz7kHnZcijkHtr4hRaTGX6F1Py0fH7runOOSM8XuQfEX7FuyeN-eaNJbKdP4yKyiaqLYQSD9z9" alt="Bericht: Cristiano Ronaldo findet neuen Verein - Deal vor Abschluss!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo steht offenbar kurz davor, sich einem neuen Verein anzuschließen. Die Wahl scheint auf Al Nassr aus Saudi-Arabien gefallen zu sein.</p></div>
            </div>
        </a>
        </Template></>;
}