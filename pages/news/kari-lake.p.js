import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kari Lake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kari Lake"/>
        <meta name="description" content="Trending News about Kari Lake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kari Lake</h1>
            <Image width={800} height={500} src="https://www.sn.at/kari-lake-scheitert-in-arizona-41-102774662.jpg/size-1600x840/129.852.907" alt="Kari Lake"/>
            <h3>Recent News</h3>
            <a href='https://www.sn.at/politik/weltpolitik/kari-lake-scheitert-in-arizona-129852916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kari Lake scheitert in Arizona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnsKJhG8RlXBcKo4YJAlWzufJzX5FtjNkH402ZeDP_ic9OkWJWudcGoUJQ_C5OwiGIt2kj6jwl" alt="Kari Lake scheitert in Arizona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie wurde von den Republikanern wie ein Popstar gefeiert, unterstützt Donald Trumps Lüge von der gestohlenen Wahl. Nun verlor Kari Lake in Arizona das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.berneroberlaender.ch/auch-die-trumpistin-kari-lake-verliert-436314257101'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wahlen in den USA: Auch die Trumpistin Kari Lake verliert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS75Tphi-wsgRUGw3p56-1cufnu6M1deooxvRt6DjmGPSuO2krZ2w_qT6e-6gOCuoJys7WMLa9I" alt="Wahlen in den USA: Auch die Trumpistin Kari Lake verliert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Knapper Ausgang der Gouverneurswahlen in Arizona: Die Republikanerin verliert das Duell gegen die Demokratin Katie Hobbs.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/politik/ausland/trump-anhaengerin-kari-lake-scheitert-bei-gouverneurswahl-in-arizona-18462131.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Niederlage für Kari Lake: Trump-Anhängerin scheitert bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXjJK6KNsqLP42qM9O7CMp23fD0afcLEiV3U83Z_6WC8CiEXDzkFEFfOi4WxMs-fNDcEB3GkgQ" alt="Niederlage für Kari Lake: Trump-Anhängerin scheitert bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kari Lake wurde von Donald Trump unterstützt und zweifelte die Rechtmäßigkeit der amerikanischen Präsidentenwahl 2020 an. Bei der Gouverneurswahl in Arizona&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fr.de/politik/kandidatin-gouverneurin-arizona-wahl-midterms-2022-usa-kari-lake-trump-91909862.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Midterms: Trump-Kandidatin beschimpft Wahlleitung in Arizona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpF9d8IH0MhfuaTmkqUVT8thCZ40UOzkRa1XPLrW46rXcpQrBEcY_8p_KKwKq7IE4hdWQ-ykF-" alt="Midterms: Trump-Kandidatin beschimpft Wahlleitung in Arizona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Update vom 15.11.2022, 10.24 Uhr: Kari Lake hat ihre Wahl bei den Midterms verloren. Die ehemalige TV-Moderatorin wird nicht die nächste Gouverneurin Arizonas -&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/politik/Prognosen-Trump-Schuetzling-Kari-Lake-verliert-Gouverneurswahl-article23718219.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Demokratin in Arizona vorn: Prognosen: Trump-Schützling Kari Lake ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCI78R1fPJHVDn7iW5-RZeXvkaeW4BdNlPijKQoYFjHSZ_wOChk-zLIcjlPA5_ph90VV5lY9LO" alt="Demokratin in Arizona vorn: Prognosen: Trump-Schützling Kari Lake ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Und noch ein Rückschlag für Donald Trump: Kari Lake, ehemalige TV-Moderatorin und Shooting-Star der rechten Republikaner, verliert offenbar das Rennen um&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeit.de/politik/ausland/2022-11/usa-arizona-gouverneurswahl-katie-hobbs-kari-lake'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gouverneurswahl: Demokratin siegt in Arizona offenbar gegen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDR9mmW5s6bWiiNIRVU2uCx0iBhbUr3FfKtxCgPnREuvX8xWDX8uCOoFL35A1I2Nu-ZEpnxHOW" alt="Gouverneurswahl: Demokratin siegt in Arizona offenbar gegen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei der Gouverneurswahl in Arizona scheitert die von Donald Trump unterstützte Rechtsaußen-Kandidatin. Umgehend schüren sie und ihr Förderer Zweifel an dem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/politik/ausland/usa--trump-anhaengerin-kari-lake-scheitert-bei-gouverneurswahl-in-arizona-32911494.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA: Trump-Anhängerin Kari Lake scheitert bei Gouverneurswahl in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkcDQmrKqEzE7FIiF6BTKYLG_-Ff1j_6UUxUKJj3tQ983-1V6XobXvS2v09xb2Gdrlpo3AH_Pv" alt="USA: Trump-Anhängerin Kari Lake scheitert bei Gouverneurswahl in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die ehemalige TV-Nachrichtensprecherin und glühende Trump-Befürworterin Kari Lake hat die Gouverneurswahl im US-Bundesstaat Arizona verloren – und stellt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}