import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Salzburger Festspiele 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Salzburger Festspiele 2023"/>
        <meta name="description" content="Trending News about Salzburger Festspiele 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Salzburger Festspiele 2023</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/e/e/7/6225639/Johann_Heinrich_Fssli_019_1670596482572357_v0_l.jpg" alt="Salzburger Festspiele 2023"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6225639/von-figaro-bis-haneke-die-salzburger-festspiele-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von Figaro bis Haneke: Die Salzburger Festspiele 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMxucYQikPCi-fJQobjvNJ8nIUN6Aw06WWCsB_NudqwkLIXXurPzteebKyki4ojluIPSFY793P" alt="Von Figaro bis Haneke: Die Salzburger Festspiele 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein geschlechtlich ungewöhnlicher Nathan der Weise, ein Rollendebüt für Asmig Grigorian und ein Generationenwechsel am Dirigentenpult: Die Salzburger&nbsp;...</p></div>
            </div>
        </a><a href='https://salzburg.orf.at/stories/3185659/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kultur: Salzburger Festspiele 2023 mit Kusej und Currentzis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKr0HuIJimXaVoNZ17dJnD1Bvb_5XHmJdNN-FAdJaA2iRHILnvlENE0ZjOM8M3C62MYqqxAtTV" alt="Kultur: Salzburger Festspiele 2023 mit Kusej und Currentzis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>179 Aufführungen sind bei den Festspielen 2023 geplant. Den Auftakt macht Wolfgang Amadeus Mozart – erstmals wieder seit 2015 steht die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/kultur/buehne/2171114-Das-Programm-der-Salzburger-Festspiele-2023.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In Salzburg ist die &quot;Zeit aus den Fugen&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfme3rB7qV33bxq9a2uHuBRepb8GR7_Va-AU9HPZfOiiueJ-avteizlZAVyLosrQcUtbSbx7L2" alt="In Salzburg ist die &quot;Zeit aus den Fugen&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine neue Buhlschaft (Valerie Pachner), einen neuen Jedermann (Michael Maertens) - und ein reichhaltiges Opern- und Schauspielprogramm nieten die Salzburger&nbsp;...</p></div>
            </div>
        </a><a href='https://www.br-klassik.de/aktuell/news-kritik/kommentar-programm-salzburger-festspiele-2023-hinterhaeuser-maennerverein-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kommentar – Programm der Salzburger Festspiele 2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeq9xUSHsno4ORcjWPYU6W6QwREZIm41ZgmU9zIqI8ZCa1lH_XnxgPtNuv8JD-mz9b2xY2JaXr" alt="Kommentar – Programm der Salzburger Festspiele 2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Salzburger Festspiele haben ihre kommende Spielzeit vorgestellt. Das Motto klingt disruptiv, das Opern- und Konzertprogramm ist es nicht.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141654792/salzburger-festspiele-2023-mit-kusej-marthaler-rasche-currentzis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Salzburger Festspiele 2023: Junge Dirigenten und alte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxJOz3NB1in_HE8RZN6iD8Tw41xqk8bzuABF3BNaZbhMuja27HACH2K9WNcTiEIIoxEz6CuxYC" alt="Salzburger Festspiele 2023: Junge Dirigenten und alte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kušej inszeniert den &quot;Figaro&quot;, Stone &quot;Die griechische Passion&quot;, Asmik Grigorian singt Lady Macbeth. Auch Marthaler, Rasche, Currentzis sind dabei.</p></div>
            </div>
        </a><a href='https://kurier.at/kultur/salzburger-festspiele-2023-aus-den-fugen-auf-der-flucht/402253878'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Salzburger Festspiele 2023: Aus den Fugen, auf der Flucht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROPIBKaXvYufvLqiz5fP5UR7g0QzDuNq1MNGPJ4I5czVcQgbLA-PruMnv99CS-iIklRrvTaFIk" alt="Salzburger Festspiele 2023: Aus den Fugen, auf der Flucht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Markus Hinterhäuser präsentierte das Programm: Sachen zum Lachen wird es in ernsten Zeiten nicht geben – nicht einmal bei „Falstaff“</p></div>
            </div>
        </a><a href='https://www.sn.at/festspiele/salzburger-festspiele/das-programm-der-salzburger-festspiele-2023-haneke-currentzis-und-fallwickl-130961569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das Programm der Salzburger Festspiele 2023: Haneke, Currentzis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP6bkScQtIEMRHeixvcQy2as6TjXsbMKLEy-A-Ub-ilFmryG_ASZ76wCQOskX4Dif2HNj8Yv7v" alt="Das Programm der Salzburger Festspiele 2023: Haneke, Currentzis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch wenn &quot;die Zeit aus den Fugen&quot; ist, tischen die Salzburger Festspiele für 2023 ein reiches Programm auf. Michael Hanekes &quot;Liebe (Amour)&quot; kommt auf die&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}