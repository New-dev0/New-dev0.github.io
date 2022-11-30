import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Will Smith</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Will Smith"/>
        <meta name="description" content="Trending News about Will Smith" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Will Smith</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7440321/46-185758017.jpg" alt="Will Smith"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/stars/grund-fuer-oscar-ohrfeige-will-smith-verraet-was-bei-seinem-ausraster-in-ihm-vorging/402241008'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grund für Oscar-Ohrfeige: Will Smith verrät, was bei seinem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3e7QhQyVTBs2XUQg_15dE24_lPs3Xu3abzXCvL-mdDJcdQpeq_7psBpabqWo8v5wBV-wFBNgV" alt="Grund für Oscar-Ohrfeige: Will Smith verrät, was bei seinem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will Smith sprach offen über seinen Ausraster in der Oscarnacht, in der er Chris Rock vor den Augen der Öffentlichkeit ins Gesicht schlug.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/will-smith-ueber-ohrfeige-darum-schlug-er-wirklich-zu-100241423'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Smith über Ohrfeige – darum schlug er wirklich zu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsHTBJ7mFAHagy1EvmKFsD6fZqBT1t8DgXMNIPMenrofZ3Nrp7duFXN0IfezPRoRs2hfG9OSi5" alt="Will Smith über Ohrfeige – darum schlug er wirklich zu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lange ließ sich Will Smith nach der Oscar-Ohrfeige nirgendwo blicken. Am Montag zeigte er sich bei der Show von Trevor Noah.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6221452/will-smith-kann-komplett-verstehen-wenn-man-seine-filme-nicht-mehr-sehen-will'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Smith kann &quot;komplett verstehen&quot;, wenn man seine Filme nicht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuotwwLUwM1zNfOlcgExu1yP2RFTBPPMR3oSJfnik5A7SZqpqXFrPeONsGrdscbR77jTX8gA8N" alt="Will Smith kann &quot;komplett verstehen&quot;, wenn man seine Filme nicht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei der vergangenen Oscar-Verleihung bekam Will Smith eine Trophäe und teilte eine Ohrfeige aus. Dass es Menschen gibt, die ihn nun nicht auf der Leinwand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tt.com/artikel/30838939/will-smith-nach-oscar-skandal-habe-verstaendnis-fuer-kritiker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Smith nach Oscar-Skandal: Habe Verständnis für Kritiker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaVdyo5fhgsJjaDtjF5KqbWYfmfHgNfiJYXFlUxBKCGwa-LoyLflA6p2NgxXKqVQfLbIe_5_jg" alt="Will Smith nach Oscar-Skandal: Habe Verständnis für Kritiker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will Smith hofft nach seinem Skandal-Auftritt bei der diesjährigen Oscarverleihung dennoch auf Zuschauer für seinen neuen Film &quot;Emancipation&quot;.</p></div>
            </div>
        </a><a href='https://www.krone.at/2868998'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Schlaflose Nächte“ - Will Smith hat große Angst vor Zuschauer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmvenGzuOJ0bGEfG-6kvJBIBEtC5RcLO2LY2G5ihY-SkXRbbn_4P0pfwNiWSZMzn6Y_xpCCDcH" alt="„Schlaflose Nächte“ - Will Smith hat große Angst vor Zuschauer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Star, der wegen seiner handgreiflichen Oscar-Attacke auf Chris Rock in Hollywood in Ungnade gefallen ist, sagte dem TV-Sender „Fox5“: „Ich kann total&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/will-smith-spricht-ueber-oscar-ohrfeige---diese-nacht-war-schrecklich--32958666.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Smith spricht über Oscar-Ohrfeige: &quot;Diese Nacht war schrecklich&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQSguHtUNzJZcKnpU1haPmY0CYad9uM_XB06ODTz2QXcC9AF4w19ZCDNudwDvLdC_ZIrYx-h-s" alt="Will Smith spricht über Oscar-Ohrfeige: &quot;Diese Nacht war schrecklich&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will Smith hat im Rahmen seiner Werbetour für seinen neuen Film über die Oscar-Ohrfeige gesprochen. Bei der Verleihung hatte er Chris Rock eine Backpfeife&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.de/stars/news/will-smith--waehrend-interview-bricht-er-in-traenen-aus-22971382.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Smith: Während Interview bricht er in Tränen aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXQ4g_pZcXoyOSo57GA-BolsgKoDJwuEBPzw04zlRacYigJjBGYdk-42-nftHKh5GYkdC9pRUy" alt="Will Smith: Während Interview bricht er in Tränen aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Will Smith scheint auch acht Monate nach der alles verändernden &quot;Oscar-Ohrfeige&quot; mit sich selbst zu hadern. In einem Interview bricht der Schauspieler sogar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}