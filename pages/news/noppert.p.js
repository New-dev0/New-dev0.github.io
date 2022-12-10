import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Noppert</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Noppert"/>
        <meta name="description" content="Trending News about Noppert" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Noppert</h1>
            <Image width={800} height={500} src="https://media1.faz.net/ppmedia/aktuell/sport/2399020867/1.8519489/facebook_teaser_fplus/potenzial-fuer-einen-kult.jpg" alt="Noppert"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/sport/fussball-wm/niederlandes-wm-torwart-noppert-im-viertelfinale-gegen-argentinien-18519456.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Niederlandes WM-Torwart: Die verrückte Geschichte um Andries ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGDBqIyi2DmpVcKHWBddAaSWyiGHDUlAR83spNgy3lYfk25nKjRIvAecnAhzEd33v_RX0FE1ev" alt="Niederlandes WM-Torwart: Die verrückte Geschichte um Andries ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohne internationale Erfahrung steht Andries Noppert bei der Fußball-WM im Tor der Niederländer und macht seine Sache bislang top – auch...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6225201/niederlande-torwart-andries-noppert-aus-der-zweiten-liga-in-das-wm-viertelfinale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Niederlande-Torwart Andries Noppert: Aus der zweiten Liga in das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWkrszNhcKS_Cc7rzbbbA5EOAMhgZ8dKuPfUggbnfJaVMPu3j79vZ9cvdhUgkjaivCAq44wyQ0" alt="Niederlande-Torwart Andries Noppert: Aus der zweiten Liga in das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bondscoach Louis van Gaal gilt als eitel und eigenwillig, viele Entscheidungen sorgen für Kopfschütteln. Dass der „Tulpen-General“ jedoch Andries Noppert&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/sport/fussball/wm/id_100094826/wm-2022-mafia-zigaretten-und-fast-polizist-das-ist-oranje-keeper-noppert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 | Mafia, Zigaretten und Fast-Polizist: Das ist Oranje ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlyPjMk5uSKZrzztzqze6orDSDZAPjC3gxp0jUKyQBA3CDtINcj52-3OWiWNCL5HzXeGy1umn9" alt="WM 2022 | Mafia, Zigaretten und Fast-Polizist: Das ist Oranje ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andries Noppert hat die wildeste Geschichte dieser WM: Eigentlich hätte der 28-Jährige schon vor zwei Jahren mit dem Fußball aufhören sollen.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-geraucht-gesoffen-arbeitslos-die-kuriose-geschichte-des-wm-helds-der-niederlande'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Geraucht, gesoffen &amp; arbeitslos! Die kuriose Geschichte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdtiKhFIpiskcpWNIZcLZmZYuQwgKLpETAk4Mpuoy0RlwOJMi9o7P1p58L7pPqsPREDydrV8JU" alt="WM 2022: Geraucht, gesoffen &amp; arbeitslos! Die kuriose Geschichte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor zwei Jahren noch arbeitslos, „geraucht wie ein Schlot“ und plötzlich auf der großen WM-Bühne! Die unfassbare Geschichte von Oranje-Keeper Andries&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/messi-ist-auch-nur-ein-mensch-die-verrueckte-geschichte-des-oranje-goalies-572123776289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andries Noppert: Seine Eltern rieten ihm zum Karriereende – jetzt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtmH7P61KbHFasoO25DSo8x7iHp0PTsZU5igMT9g_B1ZmR1LH_S1fnIEA6-_-xs8QIpAgpmPl3" alt="Andries Noppert: Seine Eltern rieten ihm zum Karriereende – jetzt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor zwei Jahren stand seine Karriere vor dem Aus. Nun könnte er seine Nation in den WM-Halbfinal hexen: Eine Geschichte, wie die des Niederlande-Goalies,&nbsp;...</p></div>
            </div>
        </a><a href='https://web.de/magazine/sport/fussball/wm/andries-noppert-kettenraucher-niederlaendischen-wm-hoffnung-37546390'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andries Noppert: Vom Kettenraucher zur niederländischen WM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZnC21UOxXubTQN55H0bcGe_VHSD1_qn6EaV4Wp7gOZrqHui3RgvS4wijALE_YyXVpm9uFIQvU" alt="Andries Noppert: Vom Kettenraucher zur niederländischen WM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Was für eine Geschichte! Noch 2019 und 2020 erhielt der Torwart Andries Noppert bei zwei Zweitliga-Klubs keinen neuen Vertrag mehr. Weder Calcio Foggia in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}