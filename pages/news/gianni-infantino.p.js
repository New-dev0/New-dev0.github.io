import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gianni Infantino</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gianni Infantino"/>
        <meta name="description" content="Trending News about Gianni Infantino" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gianni Infantino</h1>
            <Image width={800} height={500} src="https://image.puls24.at/images/facebook/3199070/20221118-AFPBILD3126-1-1.jpg" alt="Gianni Infantino"/>
            <h3>Recent News</h3>
            <a href='https://www.puls24.at/news/sport/die-gefuehlswelt-des-gianni-infantino/281597'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die Gefühlswelt des Gianni Infantino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfTyMPvIU_cHHwQi1k53CB8_UDAvpOXCZHoL71NBZsJw3yLacBrThape2slDQxaQUAJ3LCE5R-" alt="Die Gefühlswelt des Gianni Infantino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einen Tag vor dem Beginn der Fußball-WM in Katar schoss FIFA-Präsident Gianni Infantino mit einer bemerkenswerten Pressekonferenz den Vogel ab.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/die-wichtigsten-aussagen-von-gianni-infantino'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die wichtigsten Aussagen von Gianni Infantino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMCjvBFOvG1TtOuGwObUuX4qnhMbZYMJCtTgzdE-LYxIbXIfnAEn7qVgq-Vu-qRcXXpWgXpJbb" alt="Die wichtigsten Aussagen von Gianni Infantino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA-Präsident Gianni Infantino hat auf der Auftaktpressekonferenz zur Fußball-WM in Katar zahlreiche Themen angepackt.</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/amnesty-international-reagiert-auf-skurrile-aeusserungen-von-gianni-infantino-32928850.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amnesty International reagiert auf skurrile Äußerungen von Gianni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiEe8Lx4EBY8kAGzwLbGvyjeO2sKiWMmWB1se67agr9mStmf8Eb_Anhx8o6jkoRxETf-zCq8V5" alt="Amnesty International reagiert auf skurrile Äußerungen von Gianni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Menschenrechtsorganisation Amnesty International kritisiert Gianni Infantino für seine PK-Aussagen am Samstag. Die viel diskutierte Rede von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.berneroberlaender.ch/gianni-infantino-treibt-es-auf-die-spitze-723480819567'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wirre Rede des Fifa-Präsidenten: Gianni Infantino treibt es auf die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtookKZosjgND786t7G0lKDX2unvUZOQhqzylu6OEfvk3tqEpmjjCREgnXbPq1t_XDZfwSbc3I" alt="Wirre Rede des Fifa-Präsidenten: Gianni Infantino treibt es auf die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Tag vor dem WM-Eröffnungsspiel in Katar gibt der Präsident des Weltverbandes Fifa eine denk- und fragwürdige Pressekonferenz.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2211/News/fifa-praesident-gianni-infantino-bezeichnet-kritik-an-weltmeisterschaft-als-reine-heuchelei.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: FIFA-Präsident Gianni Infantino bezeichnet WM-Kritik als ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUSNQ81xn75Ubi2PjA8jkQInrU6lgLhaUc8nYla3C6u4ZeLzaoIMhO1BIjBksdypjZQGTS-Dj5" alt="WM 2022: FIFA-Präsident Gianni Infantino bezeichnet WM-Kritik als ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gianni Infantino schießt zurück: In einer denkwürdigen Pressekonferenz hat der FIFA-Präsident die umstrittene WM in Katar verteidigt und der westlichen Welt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6217567/gianni-infantino-der-bizarre-fifa-praesident'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gianni Infantino, der bizarre Fifa-Präsident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTn1fYktpU2pP56xMIrHHJyYkQocjtphtTDchYFZIVL_kVCzxH46K5_wDJKQMMysVTyZ5mK1Cfk" alt="Gianni Infantino, der bizarre Fifa-Präsident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wer Menschenrechte in Katar negiert, WM-Partner irritiert und jede Kritik plump vom Tisch heuchelt, hat eigentlich verloren. Gianni Infantino aber bleibt&nbsp;...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3294470/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM in Katar: Kritik an Infantinos Rundumschlag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaxkLhYE89Kyv05wcJ54QW9PyjexecHeTLOkjcZ0xrAO-XqfTg2U0KcMcqNOM76qUhWKsktCD8" alt="Fußball-WM in Katar: Kritik an Infantinos Rundumschlag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>„Indem er die berechtigte Kritik an den Menschenrechten beiseiteschiebt, ignoriert Gianni Infantino den enormen Preis, den die Wanderarbeiter zahlen, um sein&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}