import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christian Ortner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christian Ortner"/>
        <meta name="description" content="Trending News about Christian Ortner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christian Ortner</h1>
            <Image width={800} height={500} src="https://i.ds.at/nFXuQg/rs:fill:1200:600/plain/2022/11/21/835B78FF-D4E1-4E96-BC76-DF974473DC9E.jpg" alt="Christian Ortner"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141033932/heeresgeschichtliches-museum-direktor-christian-ortner-mit-mobbingvorwuerfen-konfrontiert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heeresgeschichtliches Museum: Christian Ortner mit Mobbing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwPmw0cb2XHlu0PnUROM4M0XfuIdo0sV74OIC4P7W0wXUC3PyEHfVKg6ILn-6ewjPHabpCaVom" alt="Heeresgeschichtliches Museum: Christian Ortner mit Mobbing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mitarbeiter des Museums erheben Vorwürfe gegen den HGM-Direktor, der eine Verlängerung seines Amts anstrebt. Historiker Georg Hoffmann gilt als möglicher&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/kultur/mehr-kultur/2168515-Mario-Christian-Ortner-auf-Leitungs-Dreiervorschlag-doch-mit-Vorwuerfen-konfrontiert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mario Christian Ortner auf Leitungs-Dreiervorschlag, doch mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRS5-38l9Sgyo1TsSSwOvS9Ldpr5wOW0YfYeNj6xq9dLH1CKT5Y1sFRLRGLZJ-KOE13GFgbu2B0" alt="Mario Christian Ortner auf Leitungs-Dreiervorschlag, doch mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mitarbeiter des Heeresgeschichtlichen Museums erheben schwere Mobbing-Vorwürfe gegen den Direktor.</p></div>
            </div>
        </a><a href='https://www.weekend.at/politik/mobbingvorwuerfe-gegen-hgm-direktor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Direktor des Heeresgeschichtlichen Museums unter Beschuss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWHYvFAI9epawm9wIaR_xWNTJwvCaqIcnfEPEYZ-YLDW5HNaM3SjCojdm1hKDzwCPqm4WkX2SB5Q" alt="Direktor des Heeresgeschichtlichen Museums unter Beschuss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein anonymer Brief wirft dem bisherigen Direktor Christian Ortner &quot;Mobbing&quot; der Belegschaft vor. Ortner bewirbt sich gerade um eine neue Amtszeit.</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/landstrasse/c-lokales/mobbing-vorwuerfe-gegen-direktor-ortner_a5723230'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heeresgeschichtliches Museum Wien: Mobbing-Vorwürfe gegen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcUmPqtJnUe8r351FQWjO3PTcm4tQyDghGi2IduZAg1DMQGyNRWGNZBOE4CzgV5qXGbmg0KcWl" alt="Heeresgeschichtliches Museum Wien: Mobbing-Vorwürfe gegen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Belegschaft im Heeresgeschichtlichen Museum beschwerte sich an das Verteidigungsministerium wegen des amtierenden Direktors Christian Ortner.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6218016/wer-soll-kuenftig-das-hgm-leiten-vorwuerfe-gegen-ortner'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wer soll künftig das HGM leiten? Vorwürfe gegen Ortner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJS_EP8zZjO7Mb0lHEE76CsjxPfcb5TUEtmaya_t1_fJfPU8d0Wnoukud01bGiGgVfcdXB4_Bx" alt="Wer soll künftig das HGM leiten? Vorwürfe gegen Ortner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die lange Liste an Kandidaten hat sich auf drei reduziert. Der Amtsinhaber ist dabei, Mitarbeiter erheben aber schwere Mobbing-Vorwürfe gegen ihn.</p></div>
            </div>
        </a><a href='https://www.vienna.at/wiener-hgm-ortner-auf-dreiervorschlag-und-mit-vorwuerfen-konfrontiert/7755838'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wiener HGM: Ortner auf Dreiervorschlag und mit Vorwürfen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEuSdsXcJWHIPkhQuKuJME__7M0PujRe8JdlSj10TsJvvtBHjy18YCVuGR253kRRK1OlRkiS_Q" alt="Wiener HGM: Ortner auf Dreiervorschlag und mit Vorwürfen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kritik am Heeresgeschichtlichen Museum (HGM) in Wien gibt es schon seit langem, der Rechnungshof hatte vor cirka zwei Jahren Missstände festgestellt.</p></div>
            </div>
        </a>
        </Template></>;
}