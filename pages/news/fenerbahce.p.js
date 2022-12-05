import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahce</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahce"/>
        <meta name="description" content="Trending News about Fenerbahce" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahce</h1>
            <Image width={800} height={500} src="https://i0.wp.com/www.ligablatt.de/wp-content/uploads/2022/12/fbl-wc-2022-match48-cmr-bra-scaled.jpg?fit=2560%2C1707&ssl=1" alt="Fenerbahce"/>
            <h3>Recent News</h3>
            <a href='https://www.ligablatt.de/fenerbahce/fenerbahce-vertritt-vincent-aboubakar-den-verletzten-joao-pedro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe: Vertritt Vincent Aboubakar den verletzten João Pedro?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYjgG1_xjL8ZJ7_ylpk-q34MH9PKHDecRxYTryPzlfn8h8Zr5btFOlJSf1zrPw3KoSxQGSkVDI" alt="Fenerbahçe: Vertritt Vincent Aboubakar den verletzten João Pedro?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durch die schwere Verletzung von João Pedro im Testspiel gegen den spanischen Erstligisten Rayo Vallecano (das LIGABlatt berichtete) werden die &quot;Kanarienvögel&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://gazetefutbol.de/juan-mata-unser-gegner-ist-fenerbahce/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juan Mata: „Unser Gegner ist Fenerbahce“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1llrFOfLKqQ9rrpyKTrdoXXw9FQ6cHLHjLoV1bCPWW77Yh5VWB2s-i1d1GVZndeOavWrK3_ZJfg" alt="Juan Mata: „Unser Gegner ist Fenerbahce“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray-Profi Juan Mata erklärte Fenerbahce zum großen Titelrivalen in der Spor Toto Süper Lig.</p></div>
            </div>
        </a><a href='https://gazetefutbol.de/fenerbahce-ali-koc-will-aenderungen-auslaenderregelung/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahce-Boss Ali Koc äußert sich zur Ausländerregelung in der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMSMgSccy3QmTrcVwmojBPQs_iudH67Lz3ZN_EZOajFv8Sl4GAfX1CB-vb3iiLr1uIu5k5MAcR" alt="Fenerbahce-Boss Ali Koc äußert sich zur Ausländerregelung in der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie sind nicht erfolgsbasiert, denn eine Korrelation zum Abschneiden unserer Vereine in Europa und unserer Nationalmannschaft besteht nicht. Der einzige Punkt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ligablatt.de/fussball-tuerkei/top-vorlagengeber-der-sueper-lig-karaguemruek-trennt-sich-von-ex-fenerbahce-star-erkin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top-Vorlagengeber der Süper Lig: Karagümrük trennt sich von Ex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPy_7JcUX8Dvp1nq79JoG8vkMmR0li-Gp0qsNyBifXfD25PV3AGQz7NhZL5-gaRRlfZ2_qsbq2" alt="Top-Vorlagengeber der Süper Lig: Karagümrük trennt sich von Ex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie der Verein in einer Pressemitteilung offiziell bestätigt, wird Caner Erkin nicht mehr für den von Weltmeister Andrea Pirlo trainierten Istanbuler Klub&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ligablatt.de/fenerbahce/sky-italia-inter-mailand-an-fenerbahce-torwart-bayindir-interessiert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Sky Italia&quot;: Inter Mailand an Fenerbahçe-Torwart Bayındır interessiert!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRr6bqBMS2NHcIenT1El2oMzSFDraPsFwsZUmYZKSgFEWvvay30qMCLOwEk2AbpwgOPul1RWopr" alt="&quot;Sky Italia&quot;: Inter Mailand an Fenerbahçe-Torwart Bayındır interessiert!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie &quot;Sky Italia&quot; vermeldet, ist Fener-Keeper und Kapitän Altay Bayındır auf dem Rader von Inter Mailand gelandet. Neben dem 24-Jährigen soll auch Yann&nbsp;...</p></div>
            </div>
        </a><a href='https://gazetefutbol.de/fenerbahce-gewinnt-test-gegen-den-fc-villarreal-mit-21/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahce gewinnt Test gegen den FC Villarreal mit 2:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqahhBXkH03gYPOq-gnEYE_psaPgzdRm3lCteECZwi0A-DONfn9JrekM7lOlWascPnm6XP6yzO" alt="Fenerbahce gewinnt Test gegen den FC Villarreal mit 2:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Etienne Capoue (24.) brachte die Spanier mit 1:0 in Führung. In der 29. Minute wurde Serdar Dursun nach einer Flanke von Ezgjan Alioski im Strafraum zu Fall&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}