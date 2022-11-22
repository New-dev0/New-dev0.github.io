import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>HPV-Impfung</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,HPV-Impfung"/>
        <meta name="description" content="Trending News about HPV-Impfung" /></Head><Template>
            <h1 style={{fontSize: "30"}}>HPV-Impfung</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/21/3/31796413_XXL.jpg" alt="HPV-Impfung"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/c-gesundheit/kostenlose-hpv-impfung-bis-zum-21-lebensjahr_a5721469'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bereits ab Februar 2023: Kostenlose HPV-Impfung bis zum 21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR170On0358McHIydfddjn4VnVmtosfDnL40vYpsVTGfnoWjNaE43Sw-9sf2lW0tUexBg-zogpU" alt="Bereits ab Februar 2023: Kostenlose HPV-Impfung bis zum 21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lebensjahr kostenlos. Dies gaben Gesundheitsminister Johannes Rauch (Grüne) und Verteidigungsministerin Klaudia Tanner (ÖVP) gemeinsam mit dem Krebshilfe-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2862303'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schutz vor Krebsarten - Ab wann die HPV-Impfung jetzt gratis ist</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfZK5OL_0I_V4ilciRUQIlQskE6BqDs1LRow5APl0825BtK17AuC4cjtHQSxI2bCeJrN3CO2Ni" alt="Schutz vor Krebsarten - Ab wann die HPV-Impfung jetzt gratis ist" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die zusätzlichen Kosten für den Impfstoff betragen rund 8,3 Millionen Euro, sagte Gesundheitsminister Johannes Rauch (Grüne) am Montag in Wien. Die Impfung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221121_OTS0037/kostenlose-hpv-impfung-bis-zum-vollendeten-21-lebensjahr-bereits-ab-februar-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kostenlose HPV-Impfung bis zum vollendeten 21. Lebensjahr ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnnIZlqR19Efyn6BtlI_CBBUVkxJpDIBNwAA1RxsXEqha0yQKjc0KqT3GJEn_iu3up9zxgZ4Dp" alt="Kostenlose HPV-Impfung bis zum vollendeten 21. Lebensjahr ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ziel von Gesundheitsminister Johannes Rauch ist, dass sich künftig - wie von der WHO empfohlen - über 90 Prozent der jungen Menschen gegen HPV impfen lassen. „&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/pk-ausweitung-hpv-impfung-im-live-stream/7755853'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PK &quot;Ausweitung HPV-Impfung&quot; im Live-Stream</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqrE9WgPloBnXyqMbkStoBtNnS6ky3MO0uJkPGjHNTZ6WSJofnmn8S6uAdmCSXiQCiZLXvXF_M" alt="PK &quot;Ausweitung HPV-Impfung&quot; im Live-Stream" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unter anderem Gesundheitsminister Johannes Rauch (Grüne) und Verteidigungsministerin Klaudia Tanner (ÖVP) werden sich bei der Pressekonferenz Ausweitung&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}