import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nick Fuentes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nick Fuentes"/>
        <meta name="description" content="Trending News about Nick Fuentes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nick Fuentes</h1>
            <Image width={800} height={500} src="https://media0.faz.net/ppmedia/aktuell/feuilleton/4152128630/1.8492122/facebook_teaser/neue-kampagne-alter-kandidat.jpg" alt="Nick Fuentes"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/politik/ausland/treffen-mit-nick-fuentes-trump-ist-der-kandidat-der-antisemiten-18492124.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dinner mit Nick Fuentes: Trump ist der Kandidat der Antisemiten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZlP5KC_i08KG9zPac_A-uK3bnPv0npiD9c6uuLNZYhGz_uZ0FqVuG6Xt_wGJl1Bl9VbWkrNva" alt="Dinner mit Nick Fuentes: Trump ist der Kandidat der Antisemiten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere Präsident kultiviert seine angebliche Unbedarftheit. Doch er weiß ganz genau, dass Amerikas Rechtsradikale auf ihn setzen.</p></div>
            </div>
        </a><a href='https://www.rnd.de/politik/donald-trump-trifft-sich-mit-kanye-west-und-holocaust-leugner-nick-fuentes-Q4WFE2GAHJDHZFKAOZQJJQI2SM.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump trifft sich mit Kanye West und Holocaust-Leugner Nick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDE-oNXy2SwNh6JhHQZi2Tu5oJbSODkOMTyuu_1BRLu8zmp-3gh-Uviv6pya7lNRul7GXWW4T6" alt="Donald Trump trifft sich mit Kanye West und Holocaust-Leugner Nick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der republikanische Präsidentschaftsbewerber Donald Trump fühlt sich vom rechtsextremen Holocaust-Leugner Nick Fuentes offenbar gut verstanden.</p></div>
            </div>
        </a><a href='https://www.t-online.de/nachrichten/ausland/usa/id_100087940/nach-empfang-von-rassist-nick-fuentes-parteifreunde-kritisieren-trump.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Empfang von Rassist Nick Fuentes: Parteifreunde kritisieren ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ35yFSyrx_fsuysyRoeM9fKDzaBLHm-PvHmJbni1bu1K2ajDdz9fC8g5abvptY0tlubW2ldVkh" alt="Nach Empfang von Rassist Nick Fuentes: Parteifreunde kritisieren ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaum hat Trump seine Kandidatur fürs Weiße Haus erklärt, macht er mit zwielichtigen Dinner-Gästen von sich reden. Beschwerden kommen nun auch von seinen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/ausland/donald-trump-parteifreunde-kritisieren-ehemaligen-us-praesidenten-nach-empfang-von-nick-fuentes-a-7ddd0eea-fcc2-4eae-8988-86c4b2a01781'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Empfang von bekanntem Rassisten: Parteifreunde kritisieren ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfL7siV1dYy5fbLhdOVzVMhKZaGDyloX1yOYKNlmaKkxri8LAHK4lNoc7eOdkZYiVckq1IvMYS" alt="Nach Empfang von bekanntem Rassisten: Parteifreunde kritisieren ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump hat auf seinem Anwesen Mar-a-Lago neben dem Rapper Kanye West auch Nick Fuentes begrüßt, einen prominenten Rassisten.</p></div>
            </div>
        </a><a href='https://www.zeit.de/politik/ausland/2022-11/usa-donald-trump-nick-fuentes-rassismus-kanye-west-antisemitismus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA: Republikaner fordern &quot;besseres Urteilsvermögen&quot; von Donald ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnBjto5tq4ypl_TZFlJH8ZZWomuf5iSQqd0jRGjgRFQX_7otXY0kG8H5BIUJ55xmyr2hW1d1mZ" alt="USA: Republikaner fordern &quot;besseres Urteilsvermögen&quot; von Donald ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere US-Präsident sieht kein Problem in seinem Treffen mit Kanye West und dem Rassisten Nick Fuentes. Doch nun sprechen auch frühere Unterstützer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.srf.ch/news/international/mar-a-lago-treffen-mit-kanye-west-und-antisemiten-trump-in-erklaerungsnot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mar-a-Lago - Treffen mit Kanye West und Antisemiten – Trump in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRG3i4pltPLJhKCKHvnwuc0W5tW80BI9RHHkaODJl74kT_Svz6umk6dxdF7aTTXuHSepf1FrTOP" alt="Mar-a-Lago - Treffen mit Kanye West und Antisemiten – Trump in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trump traf sich mit US-Rapper Kanye West und Antisemit Nick Fuentes. Nun erntet er Kritik – auch aus den eigenen Reihen.</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/ausland/amerika/trump-kritik-rassisten-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Treffen mit Rassisten: Kritik an Trump aus eigener Partei</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxIhYpLb0CukPZxe0OWtypodsPd3XRDoyluapBv5mGJFSm7cmF76MJGyWy_Lw7mp5R2A8v1COv" alt="Treffen mit Rassisten: Kritik an Trump aus eigener Partei" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Präsident Trump ist nach dem Empfang eines bekannten Rassisten von Republikanern scharf angegriffen worden. Auch US-Rapper Kanye West war vor Ort. Beide&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}