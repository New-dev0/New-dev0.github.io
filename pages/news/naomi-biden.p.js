import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Naomi Biden</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Naomi Biden"/>
        <meta name="description" content="Trending News about Naomi Biden" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Naomi Biden</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7396800/46-192196638.jpg" alt="Naomi Biden"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/politik/ausland/historische-feier-joe-bidens-enkelin-heiratet-im-weissen-haus/402227751'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Historische Feier: So heiratete Joe Bidens Enkelin im Weißen Haus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIBVQSXB0BzFNWWN2yLrPmrF-ubaGZZKmrDXYUAeilsgT9Zt4WJi8oToj9X8OqoNVmWmeg-12N" alt="Historische Feier: So heiratete Joe Bidens Enkelin im Weißen Haus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Hochzeit von Naomi Biden ist die 19. Vermählung im Amtssitz der US-Präsidenten - und dennoch einzigartig.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/gesellschaft/menschen/hochzeit-im-weissen-haus-enkelin-von-joe-biden-heiratet-18473824.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Event in Washington: Biden-Enkelin Naomi heiratet im Weißen Haus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNshbQxHtmuXRImX89L70kqOPmAkwjZGJXZSBTDcWbDYs-S9eZqt5EOSqiFBRQFdbSvJovh5NY" alt="Event in Washington: Biden-Enkelin Naomi heiratet im Weißen Haus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erstmals seit fast drei Jahrzehnten hat wieder eine Trauung im Weißen Haus stattgefunden. Die Enkelin von Präsident Joe Biden gab ihrem...</p></div>
            </div>
        </a><a href='https://www.krone.at/2860983'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pompöse Feier - Bidens Enkelin Naomi heiratete im Weißen Haus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbkPnZp2Jos2MAZA27MkSiewpn6j_INP-0LMHH2qUpUdE5gIDtNUenKTIoRZdtiIir7_jexSmF" alt="Pompöse Feier - Bidens Enkelin Naomi heiratete im Weißen Haus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach über 25 Jahren hat erstmals wieder ein Familienmitglied des Präsidenten im Weißen Haus in Washington D.C. geheiratet. Joe Bidens älteste Enkelin ...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/panorama/naomi-biden-ja-wort-im-weissen-haus-a-3ba80950-70b1-448b-bfa9-0861951dc747'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hochzeit von Biden-Enkelin Naomi: Ja-Wort im Weißen Haus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRD82zMoWvCEDyIo4pMkWw7bdIw-1oy-QWU5OYaLtS1DwpRNJoG_KwuFQI_3w8gyoIvX1Owvv15" alt="Hochzeit von Biden-Enkelin Naomi: Ja-Wort im Weißen Haus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf der Südwiese des Weißen Hauses landet sonst der Präsidenten-Hubschrauber – nun hat hier Joe Bidens Enkelin Naomi Biden geheiratet.</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/19/im-weissen-haus-naomi-biden-hat-ihren-peter-geheiratet.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Im Weißen Haus: Naomi Biden hat ihren Peter geheiratet!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVBuv136v9nyPx94ATuXcEN563KrXbH2aMLjXBCqSocvt1lorqF_CQJnsFwvnfyfi_hrYPCSe5" alt="Im Weißen Haus: Naomi Biden hat ihren Peter geheiratet!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das hat es lange nicht gegeben! Seit 2013 fand in dem Wohnsitz des Präsidenten der USA, dem Weißen Haus, keine Hochzeit mehr statt.</p></div>
            </div>
        </a><a href='https://www.volksstimme.de/panorama/hochzeit-im-weissen-haus-bidens-enkelin-naomi-heiratet-3488689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Washington: Hochzeit im Weißen Haus: Bidens Enkelin Naomi heiratet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTW_XdOna9fYYShP4AcJrVGzZqWJ4ClH-ljYw6k9xtzDT5yAhOG9Oy1jmiXFHFXtuwyUgVLcD2k" alt="Washington: Hochzeit im Weißen Haus: Bidens Enkelin Naomi heiratet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vom Weißen Haus aus werden die Geschicke der amerikanischen Politik gelenkt. Manchmal wird dort tatsächlich geheiratet. So auch an diesem Wochenende.</p></div>
            </div>
        </a><a href='https://www.suedostschweiz.ch/ereignisse/hochzeit-im-weissen-haus-bidens-enkelin-naomi-heiratet-auf-suedwiese'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hochzeit im Weissen Haus: Bidens Enkelin Naomi heiratet auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGZVSfuW_SxJxLOdzqtVMFXdFzGnG1-xM6HNgDk7pLGYm6Pqrwyh7gzkXCzTt3MbUOuW0a2vGC" alt="Hochzeit im Weissen Haus: Bidens Enkelin Naomi heiratet auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Weissen Haus ist erstmals seit Jahren wieder geheiratet worden. Naomi Biden, die 28-jährige…</p></div>
            </div>
        </a>
        </Template></>;
}