import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lützerath</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lützerath"/>
        <meta name="description" content="Trending News about Lützerath" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lützerath</h1>
            <Image width={800} height={500} src="https://img.welt.de/img/vermischtes/weltgeschehen/mobile242233701/1711358037-ci16x9-w1200/Fernsehshow-Wetten-dass.jpg" alt="Lützerath"/>
            <h3>Recent News</h3>
            <a href='https://www.welt.de/newsticker/dpa_nt/infoline_nt/panorama_nt/article242233705/Wetten-dass-Gottschalks-Wettkoenig-spendet-seinen-Gewinn-fuers-Dorf-Luetzerath.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“: Gottschalks Wettkönig spendet seinen Gewinn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUxPn17DIS9Iy75MHxSB6KhPj1kwuEwUv8-a-YJj6llw_SJmope0LsWJortuaKAdBHY_SlMmbd" alt="„Wetten, dass..?“: Gottschalks Wettkönig spendet seinen Gewinn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Kampf gegen den Klimawandel hat es nun auch in die wohl bekannteste Unterhaltungsshow Deutschlands geschafft: In der ZDF-Sendung „Wetten, dass.</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/regional/nordrheinwestfalen/wdr-story-51907.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nordrhein-Westfalen: Klimaaktivist wird Wettkönig und will Lützerath ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9yRGMjAJQFBLo_LfvxDElMN7FKSVxHuN5Bsk3ecUwU5TRLu0_QdLcqNSnfnRXyC98s9QAfR_E" alt="Nordrhein-Westfalen: Klimaaktivist wird Wettkönig und will Lützerath ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Klimaaktivist, der mit anderen Aktivisten das Braunkohle-Dorf Lützerath besetzt, ist Wettkönig in der ZDF-Show &quot;Wetten, dass..?&quot; geworden.</p></div>
            </div>
        </a><a href='https://www.halternerzeitung.de/regionales/wetten-dass-gewinner-marten-reiss-luetzerath-thomas-gottschalk-w1813155-3000655654/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“-Gewinner will Lützerath retten: „Du hast einen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUP9d2fRFvQTZHlVUGUOWcacWm-ZVrPl5t0Mb4rAqrAhpsH4XgdcXNRrcpj-hFt1VlTVZVNNnT" alt="„Wetten, dass..?“-Gewinner will Lützerath retten: „Du hast einen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Gewinner von „Wetten, dass...?“ kommt aus dem von der Braunkohleförderung bedrohten Dorf Lützerath. Sein Preisgeld will er für dessen Erhalt einsetzen.</p></div>
            </div>
        </a><a href='https://rp-online.de/nrw/staedte/erkelenz/wetten-dass-wofuer-wettkoenig-marten-weiss-aus-luetzerath-sein-preisgeld-einsetzen-will_aid-80141791'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten, dass...?&quot;: Wofür Wettkönig Marten Weiß aus Lützerath sein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGBKvzEdJJJVIVuXinhGKSG3Hq1u68tDbBYNrI8SFQBNLsytOm15Z1_WAMUyEx7F3Jm6tkt_7B" alt="&quot;Wetten, dass...?&quot;: Wofür Wettkönig Marten Weiß aus Lützerath sein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es war der große Auftritt für Klimaaktivist Marten Reiß aus Lützerath: Bei „Wetten, dass...?“ wurde er mit 52 Prozent der Publikumsstimmen souverän&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000141013409/wetten-dass-2022-gottschalks-alterswerk-und-eine-gute-tat-fuer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten, dass...?&quot; 2022: Gottschalks Alterswerk und eine gute Tat für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6_XZpc1kuoN6FxPzHM23jo9XlHnWGudhnl-bWOmt-pHEhpsIGcP8sD84hwTiS6F76fsaHO1Qw" alt="&quot;Wetten, dass...?&quot; 2022: Gottschalks Alterswerk und eine gute Tat für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit Kreuzblick unter 2052 Fingerabdrücken den falschen erkennen – und mit 50.000 Euro Preisgeld ein Dorf retten: Der Samstagabend war für etwas gut.</p></div>
            </div>
        </a><a href='https://www.aachener-zeitung.de/lokales/heinsberg/wettkoenig-unterstuetzt-luetzerath-mit-50000-euro_aid-80216079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aktivist bei „Wetten, dass ...?“: Wettkönig unterstützt Lützerath mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStY0PeLhuF0t_PDoobOW0vn4hxcrbnw38XhUwW4UW11UM01OfB1YJi4siDiaN37sVC_3KzcZAi" alt="Aktivist bei „Wetten, dass ...?“: Wettkönig unterstützt Lützerath mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Ende steht Marten Reiß ziemlich verloren im Konfettiregen zwischen Michelle Hunziker und den Fußballfrauen Giulia Gwinn und Alexandra Popp. Reiß steht in der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/tv-show---luetzi-bleibt---klimaaktivist-als-wettkoenig-bei-gottschalk-32929716.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TV-Show: &quot;Lützi bleibt&quot;: Klimaaktivist als Wettkönig bei Gottschalk</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAcdZA_XFA2iU5sb7BtEhMuXMuZ06h-x-RSDxkgDJ09CBTdo8tlE-aNi8P372fQ2KpJ9bpfZro" alt="TV-Show: &quot;Lützi bleibt&quot;: Klimaaktivist als Wettkönig bei Gottschalk" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Friedrichshafen - Mehr als zehn Millionen Menschen haben am Samstag «Wetten, dass..?» im TV verfolgt. Eine große Bühne, die der Wettkönig des Abends für.</p></div>
            </div>
        </a>
        </Template></>;
}