import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trump news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trump news"/>
        <meta name="description" content="Trending News about Trump news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trump news</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/news?image=https%3A%2F%2Fassets.orf.at%2Fmims%2F2022%2F47%2F87%2Fcrops%2Fw%3D1200%2Ch%3D630%2Cq%3D75%2F1573408_master_575587_usa_trump_praesidentschaft_kandidatur_r.jpg%3Fs%3D287576cc2d27ef1bb787bbee1afbeab2589cd56d" alt="Trump news"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3293858/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Amerikas Comeback beginnt“: Trump will wieder Präsident werden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHB5jzFXjtCgm8Mmx8wIUXWTdRVYufJJpqU5RsIlWfsWXwynJSb4zml1Yie4P2AVY-OKIit2em" alt="„Amerikas Comeback beginnt“: Trump will wieder Präsident werden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere US-Präsident Donald Trump will bei der Präsidentenwahl 2024 erneut für die Republikaner antreten. Das kündigte er am Dienstagabend (Ortszeit)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/politik/aussenpolitik/viel-sand-im-getriebe-der-trump-show;art391,3743543'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viel Sand im Getriebe der Trump-Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4VRbsJbC7WTiYfJ0oNBEpcMy_X075iOMXfCga50oOf5UuDK1FQtPm0kczfKMPnnu0kjUNlbyH" alt="Viel Sand im Getriebe der Trump-Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lieblingstochter Ivanka schaffte es nicht, von Miami auf einen Sprung nach Palm Beach zu kommen, um live dabei zu sein, als ihr Vater versprach, &quot;Amerika wieder&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140880009/trump-kandidiert-2024-erneut-fuer-die-us-praesidentschaft'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump kandidiert 2024 erneut für die US-Präsidentschaft</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwI0Co9f8Z0aDbUZ3CKnIH-s2ZDOMVQOzfrzl3dkioEnrpgUUR1J6VM1SQ1yQ7OWTsMaoZ_fuE" alt="Trump kandidiert 2024 erneut für die US-Präsidentschaft" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Republikaner und ehemalige US-Präsident hat die Unterlagen für seine Kandidatur eingereicht. Trump hatte 2020 gegen den Demokraten Joe Biden verloren.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6216160/trump-2024-was-die-simpsons-vorhersahen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Trump 2024&quot;: Was &quot;Die Simpsons&quot; vorhersahen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgwI7LulEOfC3is0CPxpywgPr2CidEQqF1-fqHlqfs-NhT4Lqs_ygrYCo2XHL_PkdrHM2rCiBk" alt="&quot;Trump 2024&quot;: Was &quot;Die Simpsons&quot; vorhersahen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Zeichentrick-Familie &quot;Die Simpsons&quot; hat mal wieder die Zukunft vorhergesagt. Unmittelbar nach der erneuten Kandidatur von Donald Trump für das Amt des US-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140901054/die-simpsonstrump-2024-haben-es-mal-wieder-vorhergesehen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Die Simpsons&quot; sahen erneute Trump-Kandidatur bereits 2015 voraus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjc7FjHW91ZOSBOiH38Z4Flp441eWA3En_tpq9Hbhi8ML8xSXbwRU5se23dZCC11ffI5mbMISk" alt="&quot;Die Simpsons&quot; sahen erneute Trump-Kandidatur bereits 2015 voraus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Showrunner postete auf Twitter ein Standbild aus alter Folge mit Wahlkampfschild &quot;Trump 2024&quot;</p></div>
            </div>
        </a><a href='https://kurier.at/politik/ausland/das-comeback-des-donald-trump-gelangweilte-wiederkandidatur/402221526'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das Comeback des Donald Trump: Gelangweilte Wiederkandidatur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdbdjdr0D4OvUt_1KagDcgKsC-NXmR9G5lrdo8z_yWSjJwqxLWvHZKQlR5kS0LtA3Av6X500ib" alt="Das Comeback des Donald Trump: Gelangweilte Wiederkandidatur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump erklärte mit wenig Enthusiasmus und alten Parolen, ins Rennen ums Weiße Haus 2024 gehen zu wollen. Vielen prominenten Republikanern gefällt das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/politik/pensionist-so-brutal-lassen-rechte-us-medien-donald-trump-fallen/281337'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Pensionist&quot;: So brutal lassen rechte US-Medien Donald Trump fallen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6UDxl2zZkWBln1nmwkdt48r2DmR9jcLbnAlFjkEIabzJqFs9SdCG8Ixa0wWzNL0cGihrJX2m2" alt="&quot;Pensionist&quot;: So brutal lassen rechte US-Medien Donald Trump fallen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einst haben Fox TV und Co. Donald Trump hochgejubelt und die Treue gehalten, nun lassen sie ihn brutal gegen die Wand laufen.</p></div>
            </div>
        </a><a href='https://www.krone.at/2858329'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gelbe Prophezeiung - Trump 2024: Simpsons lagen schon wieder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWU6Z8-cS5JL-7WSXcGCNyAKNb8qUkkVpMRzQw34ooXV4fBZtp0hxGFNGXe-kI2-LQUad8lz-3" alt="Gelbe Prophezeiung - Trump 2024: Simpsons lagen schon wieder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Und auch diesmal hätte man auf die gelbe Zeichentrick-Familie aus Springfield vertrauen und mit Wetten viel Geld verdienen können. Denn der Wiederantritt Donald&nbsp;...</p></div>
            </div>
        </a><a href='https://tvthek.orf.at/profile/Langfassung/13893271/Langfassung-Trump-Kritiker-William-Kristol-ueber-Kandidatur-von-Donald-Trump/14157211/Langfassung-Trump-Kritiker-Bill-Kristol-ueber-Kandidatur-von-Donald-Trump/15271424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Langfassung: Trump-Kritiker Bill Kristol über Kandidatur von Donald ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKYct95jNshZpkbn3hy9Wuu7o9Nj5203c40pDPQ9se9MD1TbDF0iQ47KjrdmeVOxPP73BXmCFc" alt="Langfassung: Trump-Kritiker Bill Kristol über Kandidatur von Donald ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>William &quot;Bill&quot; Kristol ist einer der schärfsten Kritiker des ehemaligen US-Präsidenten Donald Trump. Kristol hat schon im Weißen Haus für Ronald Reagan und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nzz.ch/international/donald-trump-mit-diesen-methoden-bekaempft-er-seine-gegner-ld.1711826'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump: Mit diesen Methoden bekämpft er seine Gegner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTW2JSGRSqSLEhitUqn2HIvwtVTrVvTgEVsqiID1JmOt43mYfo8hHDS34dexXW7uHMzH_-CN_xE" alt="Donald Trump: Mit diesen Methoden bekämpft er seine Gegner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wer mit Trump in den Ring steigt, nimmt Schaden. Über die Wirkung von Spitznamen und die Logik der Verleumdung.</p></div>
            </div>
        </a>
        </Template></>;
}