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
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7366536/46-192109159.jpg" alt="Polarfuchs"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/chronik/niederoesterreich/illegal-in-oesterreich-gehaltener-polarfuchs-gerettet/402220764'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Illegal in Österreich gehaltener Polarfuchs gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2VZmkhe-fvOA0b2ZDQTuoVWsESCEOS4joOYpapqWAsJiZ0QC-frl1BfKQ6Xx8qgTf7L7X-bgQ" alt="Illegal in Österreich gehaltener Polarfuchs gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Polarfuchs ist aus einer illegalen Privathaltung in Niederösterreich gerettet worden. Das Tier wurde laut der Tierschutzorganisation &quot;Vier Pfoten&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://noe.orf.at/stories/3182403/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chronik: Illegal gehaltener Polarfuchs gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkyV-I5MuJ2_XjQXtuRaOiGPnnjsDE0nXYRbgo79tYy7Bf2JlLihki4TfrXxz1VWsirjiz6P8C" alt="Chronik: Illegal gehaltener Polarfuchs gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Polarfuchs ist aus einer illegalen Privathaltung im Bezirk Baden gerettet worden. Das Tier wurde laut der Tierschutzorganisation Vier Pfoten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kronehit.at/news/geretteter-polarfuchs-in-no/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Geretteter Polarfuchs in NÖ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREcoYYfAL737fg-zNrnVazMH0SRzoX_zM1-mKLFzC5AHygC_yPzKS53BXzOUdnIvIwJ0D5Xhah" alt="Geretteter Polarfuchs in NÖ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(17.11.2022) Der süße Polarfuchs Namens ,,Wukk&#39;&#39; wurde in NÖ aus einer illegalen Privathaltung gerettet. Laut Tierschutzorganisation ,,Vier Pfoten&#39;&#39; wurde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/geretteter-polarfuchs-wukk-auf-weg-in-neues-leben/7748560'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Geretteter Polarfuchs &quot;Wukk&quot; auf Weg in neues Leben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxf3njX44UxpEzlOJ83Dg6Ilz8m_4E6dmsdCCx8YFyO-kr2powqRpt64Ox3YeopbGoDJhpqFzg" alt="Geretteter Polarfuchs &quot;Wukk&quot; auf Weg in neues Leben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Polarfuchs Wukk, der aus einer illegalen Privathaltung in Österreich gerettet worden war, ist nun auf dem Weg in eine Wildtierstation der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2858152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tierbaby „Wukk“ - Illegal gehaltener Polarfuchs in NÖ gerettet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTOjbgrZbROUvAGq_Fr-8fZBrKE7XEuL7R1gcwpepjbARwD2Fc5435qkHkWmWMmgCa5WFPi_Ms" alt="Tierbaby „Wukk“ - Illegal gehaltener Polarfuchs in NÖ gerettet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein junger Polarfuchs namens „Wukk“ ist Ende Juli aus einer illegalen Privathaltung in Niederösterreich gerettet worden. Das Tierbaby wurde laut der ...</p></div>
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