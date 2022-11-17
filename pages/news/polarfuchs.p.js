import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Polarfuchs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Polarfuchs"/>
        <meta name="description" content="Trending News about Polarfuchs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Polarfuchs</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/noe?image=https%3A%2F%2Foekastatic.orf.at%2Fmims%2F2022%2F47%2F20%2Fcrops%2Fw%3D1200%2Ch%3D627%2Cq%3D75%2F1573513_master_575620_575552_..._mit_einem_gruenen_und_einem_blauen_auge.jpg%3Fs%3D62294ed87f4f4ee6bba558aa81c2142f082d1c0c" alt="Polarfuchs"/>
            <h3>Recent News</h3>
            <a href='https://noe.orf.at/stories/3182403/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chronik: Illegal gehaltener Polarfuchs gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkyV-I5MuJ2_XjQXtuRaOiGPnnjsDE0nXYRbgo79tYy7Bf2JlLihki4TfrXxz1VWsirjiz6P8C" alt="Chronik: Illegal gehaltener Polarfuchs gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Polarfuchs ist aus einer illegalen Privathaltung im Bezirk Baden gerettet worden. Das Tier wurde laut der Tierschutzorganisation Vier Pfoten&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/chronik/niederoesterreich/illegal-in-oesterreich-gehaltener-polarfuchs-gerettet/402220764'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Illegal in Österreich gehaltener Polarfuchs gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2VZmkhe-fvOA0b2ZDQTuoVWsESCEOS4joOYpapqWAsJiZ0QC-frl1BfKQ6Xx8qgTf7L7X-bgQ" alt="Illegal in Österreich gehaltener Polarfuchs gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Polarfuchs ist aus einer illegalen Privathaltung in Niederösterreich gerettet worden. Das Tier wurde laut der Tierschutzorganisation &quot;Vier Pfoten&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2858152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tierbaby „Wukk“ - Illegal gehaltener Polarfuchs in NÖ gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTOjbgrZbROUvAGq_Fr-8fZBrKE7XEuL7R1gcwpepjbARwD2Fc5435qkHkWmWMmgCa5WFPi_Ms" alt="Tierbaby „Wukk“ - Illegal gehaltener Polarfuchs in NÖ gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein junger Polarfuchs namens „Wukk“ ist Ende Juli aus einer illegalen Privathaltung in Niederösterreich gerettet worden. Das Tierbaby wurde laut der ...</p></div>
            </div>
        </a><a href='https://www.vienna.at/geretteter-polarfuchs-wukk-auf-weg-in-neues-leben/7748560'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Geretteter Polarfuchs &quot;Wukk&quot; auf Weg in neues Leben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxf3njX44UxpEzlOJ83Dg6Ilz8m_4E6dmsdCCx8YFyO-kr2powqRpt64Ox3YeopbGoDJhpqFzg" alt="Geretteter Polarfuchs &quot;Wukk&quot; auf Weg in neues Leben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Polarfuchs Wukk, der aus einer illegalen Privathaltung in Österreich gerettet worden war, ist nun auf dem Weg in eine Wildtierstation der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noen.at/moedling/voesendorf-deutschland-polarfuchs-baby-wukk-uebersiedelt-in-neues-leben-in-wildtierstation-voesendorf-ausland-polarfuchs-wildtierstation-vier-pfoten-tierrettung-343557506'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polarfuchs-Baby Wukk übersiedelt in &quot;neues Leben&quot; in Wildtierstation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRP0y6XLlkX7Jr2uH9j1ii2HjHPmzgHIPHiJ19FN-QIizhdPoJ6QLySTqHNJeeCVSPFVrL8tvhm" alt="Polarfuchs-Baby Wukk übersiedelt in &quot;neues Leben&quot; in Wildtierstation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor ein paar Wochen zog das Polarfuchs-Baby &quot;Wukk&quot; ins Tierheim Vösendorf. Heute Mittwoch tritt er die Reise in sein neues Zuhause an: die Wildtierstation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/baden/c-lokales/geretteter-polarfuchs-findet-endgueltiges-zuhause_a5712682'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aus illegaler Privathaltung: Geretteter Polarfuchs findet endgültiges ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_DJ52MzoOPIrJDdxWGixyGmzN6Nyp0aaUTpbt9aYf0fTGKG8J1UHOhA-xgiphN3AjgpqgxpbL" alt="Aus illegaler Privathaltung: Geretteter Polarfuchs findet endgültiges ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Polarfuchs ist aus einer illegalen Privathaltung im Bezirk Baden gerettet worden. &quot;Wukk&quot; wurde von den Behörden ins Tierheim nach Vösendorf gebracht.</p></div>
            </div>
        </a>
        </Template></>;
}