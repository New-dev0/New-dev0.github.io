import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Salzburg AG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Salzburg AG"/>
        <meta name="description" content="Trending News about Salzburg AG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Salzburg AG</h1>
            <Image width={800} height={500} src="https://www.salzburg24.at/%2BTHEMENBILD%2B%2BENERGIE%2B%2BKLIMA%2B%2BSTROM%2B%2BENERGIEKOSTEN%2B%2BTEUERUNG%2B%2BSTROMPREIS%2B%253D%25283%2529.jpg/1280x720/127.002.067" alt="Salzburg AG"/>
            <h3>Recent News</h3>
            <a href='https://www.salzburg24.at/news/salzburg/scharfe-kritik-an-strompreiserhoehung-der-salzburg-ag-129900520'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scharfe Kritik an Strompreiserhöhung der Salzburg AG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWFYp7CZ90kzzPZ0_OiaJig86VeWG2EURXnfPlW-Bjjk3VmBLQLhpdp-RiNJ9na-pxuzuODnJj" alt="Scharfe Kritik an Strompreiserhöhung der Salzburg AG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die von der Salzburg AG angekündigte Strompreiserhöhung sorgte am Mittwoch für scharfe Kritik seitens der Arbeiterkammer und den Oppositionsparteien.</p></div>
            </div>
        </a><a href='https://salzburg.orf.at/stories/3182430/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wirtschaft: Salzburg AG verdoppelt ab Jänner Strompreis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQD0FLVUDKbQ2PS86KapgA0EkBHaU9LU_uKyr65g81YwHe6KOLUtn9DgrhGBsGVxBSXwPqLHci" alt="Wirtschaft: Salzburg AG verdoppelt ab Jänner Strompreis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Salzburg AG erhöht die Strompreise ab 1. Jänner. Für Private steigt der Preis von aktuell 13,6 Cent pro Kilowattstunde auf 32,4 Cent pro Kilowattstunde.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140901593/salzburg-ag-erhoeht-mit-1-jaenner-2023-die-strompreise-deutlich'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Salzburg AG erhöht mit 1. Jänner 2023 die Strompreise deutlich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdiK_dA8-jiVeCMjd1GXnJ0M3qzTGDmK_aqqP9HkPJzZxRri51FreIeUMAiWwCV1H18sUHLlRf" alt="Salzburg AG erhöht mit 1. Jänner 2023 die Strompreise deutlich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Arbeitspreis steigt beinahe um das Zweieinhalbfache an. Die Strompreisbremse soll aber Mehrkosten für Privatkunden weitgehend abfangen.</p></div>
            </div>
        </a><a href='https://www.krone.at/2858237'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preisbremse dämpft - Salzburg AG erhöht die Strompreise deutlich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCmm9nSxOZU4g-8GnwILEjP0BTXLr6AtIN3cc-t47eKgfRst1_LKZgCK14mA593T35WuztWl3M" alt="Preisbremse dämpft - Salzburg AG erhöht die Strompreise deutlich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Strompreisbremse der Bundesregierung entschärft den Anstieg aber. So müssen Haushalte mit einem Jahresverbrauch von 2900 kWh mit einer um 1,83 Euro pro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/salzburg/c-wirtschaft/salzburg-ag-erhoeht-strompreis-fuer-haushalte-und-gewerbe_a5712754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ab 1. Jänner 2023: Salzburg AG erhöht Strompreis für Haushalte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1OqVhl6UOB6mzK5kzh62xldjn8dlrxIpDP7UaB7qjYt1cxcrVQG9wMKgyEpAJhUu7Nbx7b3UL" alt="Ab 1. Jänner 2023: Salzburg AG erhöht Strompreis für Haushalte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Salzburg AG informierte über bevorstehende Preisanpassungen – sprich Preiserhöhungen – bei Strom für Haushalte und Gewerbe ab 1. Jänner 2023.</p></div>
            </div>
        </a><a href='https://www.weekend.at/bundesland/salzburg/salzburg-ag-kuendigt-strompreiserhoehung'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Salzburg AG kündigt drastische Strompreiserhöhung an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMlmz-dQ2sTOwpursS6KrXm7hJMlGTrxMxDOc5pgvPc9dTFAulmxZveLVPzlURoPpAKwZOkByZ" alt="Salzburg AG kündigt drastische Strompreiserhöhung an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>40 Cent/kWh netto vom Staat übernommen. Zwei Drittel der Haushaltskunden in Salzburg verbrauchen bis zu 2.900 kWh pro Jahr – für sie wird dank des staatlichen&nbsp;...</p></div>
            </div>
        </a><a href='https://news.wko.at/news/salzburg/bremse-daempft-preisanstieg-bei-den-gewerbekunden.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bremse dämpft Preisanstieg bei den Gewerbekunden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSztgBqjUAGkX9Fy6nceayyo7Cs7eejTRR6xx_nYFt0vV7Jup38O6XdaXv2ZtJQUD6zYps0ga7j" alt="Bremse dämpft Preisanstieg bei den Gewerbekunden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Salzburg AG erhöht die Strompreise ab 1. Jänner deutlich. Die Erhöhung bei den Gewerbekunden wird durch 100 Freistromtage gedämpft. Bei den Privatkunden&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}