import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erling Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erling Haaland"/>
        <meta name="description" content="Trending News about Erling Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erling Haaland</h1>
            <Image width={800} height={500} src="https://www.salzburg24.at/Meldungsliste%25281%2529%252820%2529.jpg/1280x720/129.837.586" alt="Erling Haaland"/>
            <h3>Recent News</h3>
            <a href='https://www.salzburg24.at/sport/fussball/irrer-plan-um-wm-verpasser-erling-haaland-129837601'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irrer Plan um WM-Verpasser Erling Haaland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtr8iooqGYaMkXj0hHfCGLuFW4Iny4hp3M-6PDHK0UYwxBhnjHbWKPfyXOR0qINmBizDYg87ub" alt="Irrer Plan um WM-Verpasser Erling Haaland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nachdem Star-Kicker Erling Haaland nicht an der WM in Katar teilnehmen kann, sorgt nun ein britischer Siebentligist für Aufsehen: Ashton United will den&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derwesten.de/sport/fussball/bvb/erling-haaland-ashton-united-borussia-dortmund-bvb-manchester-city-leihe-a-id300121949.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erling Haaland: Irre! Siebtligist will plötzlich den Ex-BVB-Star unter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUxHVrs4KBfxzMpCvPBl5QH4BoHFtLg4DAczXws6yYirI3stzOYMfa38FTImABSqdvhG7lK7fp" alt="Erling Haaland: Irre! Siebtligist will plötzlich den Ex-BVB-Star unter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erling Haaland in der siebten englischen Liga? Das wäre mehr als nur irre. Ein Siebtligist will den Ex-BVB-Star ausleihen. Hier mehr.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/internationaler-fussball/premier-league/2022/11/haaland-wird-zur-hulk-figur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haaland wird zur Hulk-Figur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQExEv6KUI9DvfCRwLjskeJ4v_eCID9mwLtSnLM5BIxuKIj5DWlxK9Zbr0b1b00oHlKwL5dcRuP" alt="Haaland wird zur Hulk-Figur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Premier League vermag Erling Haaland für so manchen Abwehrspieler furchteinflößend zu sein – was einen Künstler aus England zu einer verrückten Idee&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6215517/Waehrend-FussballWM-in-Katar_Englischer-Siebentligist-will-Erling'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Englischer Siebentligist will Erling Haaland für 28 Tage ausleihen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5YEBXYgUkl99rn_X_BtKci5pCl1VZOgEoM8JePUoY8Edb7tGgoRUCRXTJOi4Wzvte6dJN9vnZ" alt="Englischer Siebentligist will Erling Haaland für 28 Tage ausleihen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der englische Fußball-Siebentligist Ashton United hat mit einem ungewöhnlichen Vorschlag im Netz für Erheiterung und sogar für den Zusammenbruch seiner&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3102979/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball: Amateurclub angelt nach Torjäger Haaland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3tae4Hmr320Pn9CX-gnQ8v2kEiq1g4eeXUhevbETyYvXqAq5Q2w76v7E-3ExHaqBlyB6ZNSAL" alt="Fußball: Amateurclub angelt nach Torjäger Haaland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Ashton United Football Club hat sich am Montagabend mit einem ungewöhnlichen Angebot weit über die Grenzen Großbritanniens hinaus bekannt gemacht.</p></div>
            </div>
        </a><a href='https://www.4-4-2.com/premier-league/manchester-city/relaxen-trainieren-plan-erling-haaland-wm-pause/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Relaxen &amp; trainieren&quot; - Das plant Erling Haaland in der WM-Pause</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT74HoG2vSXKpzERsipV8TmwDPC9FyLscvLYHlUrhxiz05ivYp3kO7M_FB5iyYdhGsC6o4a0bol" alt="&quot;Relaxen &amp; trainieren&quot; - Das plant Erling Haaland in der WM-Pause" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erling Haaland darf im Gegensatz zu vielen seiner Teamkollegen von Manchester City nicht an die WM reisen, da er sich mit Norwegen nicht qualifiziert hat. In&nbsp;...</p></div>
            </div>
        </a><a href='https://www.4-4-2.com/primera-division-la-liga/real-madrid/real-madrid-2024-erling-haaland-versuch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid will es 2024 bei Erling Haaland versuchen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAiEtSnjS1A08IBMdU9jWFf0x6xjxcG37ScFwXTPgPEPB1LOBT3h0W8hoZXX05RAvUT9n-hjvD" alt="Real Madrid will es 2024 bei Erling Haaland versuchen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im vergangenen Sommer fokussierte man sich bei den Spaniern voll auf Kylian Mbappé: Umso grösser war die Enttäuschung als sich der Franzose gegen einen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/england-siebtligist-manchester-city-erling-haaland-wm-pause-angebot-reaktion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angebot für Erling Haaland: Siebtligist will ManCity-Star ausleihen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhfjK4L1bH1Kx-kXpTiMhayKc4CaJ3CsuE9d9Ex1JvmgO4-z_QOCvoGZGJiojUp25HdCdpFynm" alt="Angebot für Erling Haaland: Siebtligist will ManCity-Star ausleihen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der WM-Pause möchte ein Siebtligist aus England einen kuriosen Transfer tätigen. Wie der Verein Ashton United bekanntgab, will man Erling Haaland von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.watson.ch/sport/premier%20league/501054026-kuriose-anfrage-fuer-erling-haaland-siebtligist-will-ihn-ausleihen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kuriose Anfrage für Erling Haaland – Siebtligist will ihn ausleihen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQN1MG8xSSyib9lITzCuJ5-WFfT83pNY_EHMWJ1-SkiGj1OV9xzXmUFPCOOtaFWPd3juz2P_uwu" alt="Kuriose Anfrage für Erling Haaland – Siebtligist will ihn ausleihen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erling Haaland ist mit Norwegen nicht an der WM in Katar dabei. Deshalb will ein englischer Siebtligist dabei helfen, ihn «fit zu halten».</p></div>
            </div>
        </a>
        </Template></>;
}