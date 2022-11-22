import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sadio Mane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sadio Mane"/>
        <meta name="description" content="Trending News about Sadio Mane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sadio Mane</h1>
            <Image width={800} height={500} src="https://sportbild.bild.de/fotos/sadio-mane-verletzte-sich-im-bayern-spiel-gegen-bremen-faellt-monatelang-aus-90d67d6903004cc7a228a7f669365587-82008446/Bild/2.sport.jpg?1669018234000" alt="Sadio Mane"/>
            <h3>Recent News</h3>
            <a href='https://sportbild.bild.de/fussball/wm-2022/fifa-wm-2022/wm-2022-bayern-star-sadio-man-meldet-sich-zu-wort-82008346.sport.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Bayern-Star Sadio Mané meldet sich zu Wort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzCZyy5NkUlIi2JGS6Z7Du10Lx2B5sx8sCtQOmZ-snRtbAd-diS9Kkj1t6MU3Q3B5qveP2MFAl" alt="WM 2022: Bayern-Star Sadio Mané meldet sich zu Wort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern-Star Sadio Mané hat sich nach seinem WM-Aus auf Instagram zu Wort gemeldet. Dem Senegal macht er Mut für das Turnier in Katar.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/verletzter-mane-uberzeugt-werden-uber-uns-hinauswachsen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Verletzter Mané meldet sich nach Operation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ5SfKun87sziKYKsug7g8c9AziouwCP1U4HQKWElL-WADFRaVYhAT_4GEVrIYkBqi1mA759AV" alt="WM 2022: Verletzter Mané meldet sich nach Operation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sadio Mané meldet sich vor dem WM-Start des Senegal gegen die Niederlande via Instagram zu Wort. Er wünscht seinem Team alles Gute.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6217859/Jetzt-im-Liveticker_Duell-zwischen-Senegal-und-Niederlande-bislang'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Duell zwischen Senegal und Niederlande bislang noch torlos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_znzqU4gPkDvh00W8EMThOTanKTT8caWlSzU4R_Wjm8BsaaqCafAb16YeVLGNkD4lt2aWVFnf" alt="Duell zwischen Senegal und Niederlande bislang noch torlos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf dem Weg zum WM-Finale stellt sich den ambitionierten Niederländern zum Auftakt am Montag (17.00 Uhr/live ServusTV) Afrikameister Senegal in den Weg.</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/werden-fuer-sadio-mane-fuer-das-land-und-fuer-ganz-afrika-weiterkaempfen-506315448882'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seny Dieng vor Senegal-Spiel: «Werden für Sadio Mané ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9TpKsMMhKuEehXAhNxb--GrcnwZ7WG7hyNEq_6S0UKWSqpX6o-O9RRc1pv8f_hl1NGctww3th" alt="Seny Dieng vor Senegal-Spiel: «Werden für Sadio Mané ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als Goalie von QPR hat sich Seny Dieng einen Namen gemacht. Nun darf der in Zürich aufgewachsene Senegalese an die WM 2022 in Katar.</p></div>
            </div>
        </a><a href='https://fcbinside.de/2022/11/21/nach-op-schock-und-wm-aus-mane-aeussert-sich-zu-seiner-aktuellen-situation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach OP-Schock und WM-Aus: Mané äußert sich zu seiner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwu7A2LYFYSkzUMrCHI1OsRJ6VIEqm8Vrg9Db5jMS3D2wMCqBHnnJz5UbYz0XynPucjBRL6BCx" alt="Nach OP-Schock und WM-Aus: Mané äußert sich zu seiner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aufgrund einer Knie-OP wird der FC Bayern monatelang auf Sadio Mané verzichten müssen. Der Senegalese verpasst zudem die Fußball-Weltmeisterschaft.</p></div>
            </div>
        </a><a href='https://www.tag24.de/sport/fussball/verein/fc-bayern-muenchen/wird-sadio-mane-vom-fc-bayern-muenchen-fuer-champions-league-kracher-gegen-paris-saint-germain-fit-2669672'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wird Sadio Mané vom FC Bayern München für Champions-League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyTlh6ggctlMB1FsyI7U4eGlJIlJH91O1r4MQ_0YCjPV60DTkgj7dGfTq4ymRU-px5MGns8jQS" alt="Wird Sadio Mané vom FC Bayern München für Champions-League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sadio Mané vom FC Bayern München musste operiert werden, kann verletzungsbedingt nicht für den Senegal bei der WM 2022 auflaufen.</p></div>
            </div>
        </a><a href='https://www.srf.ch/sport/fussball/fifa-wm-2022/wm-auftakt-gegen-niederlande-no-mane-no-party-und-aufgepasst-auf-gelbe-karten-senegal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Auftakt gegen Niederlande - No Mané, no Party? Und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSItZE7gNsxQynksUogo8j5bDe6ZWIQfN4HaGr-V_-XDjk6fuWPojsY5_PnEihQrhjadyP-FQiy" alt="WM-Auftakt gegen Niederlande - No Mané, no Party? Und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie kommt der Senegal ohne Sadio Mané zurecht? Eine erste Antwort dürfte das Duell mit der Niederlande liefern.</p></div>
            </div>
        </a><a href='https://www.ran.de/fussball/weltmeisterschaft/wm-news/verletzter-mane-ueberzeugt-werden-ueber-uns-hinauswachsen-162391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verletzter Mane überzeugt: &quot;Werden über uns hinauswachsen&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVhqNF45-C7qdMiVrtW6OLjLtl021C-uSWJLRKUoVmAj14qXdeHimt-NrdKXMoW41yLbz0wv9F" alt="Verletzter Mane überzeugt: &quot;Werden über uns hinauswachsen&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senegals Sadio Mane hat seinen Teamkollegen vor dem WM-Start gegen die Niederlande die besten Wünsche mit auf den Weg gegeben.</p></div>
            </div>
        </a>
        </Template></>;
}