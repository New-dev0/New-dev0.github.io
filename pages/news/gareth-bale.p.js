import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gareth Bale</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gareth Bale"/>
        <meta name="description" content="Trending News about Gareth Bale" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gareth Bale</h1>
            <Image width={800} height={500} src="https://images.sportbuzzer.de/v1/photos/raw/fussball-bundesliga-bayern-munchen-borussia-dortmund-28-spieltag-am-08-04--x6423/large-16-9" alt="Gareth Bale"/>
            <h3>Recent News</h3>
            <a href='https://www.sportbuzzer.de/artikel/phil-foden-gareth-bale-england-wales-ungleiches-duell-wm-katar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Duell der Generationen: Warum Phil Foden die Zukunft gehört – und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRo4VpJ64c9NA5IZdIbjG8DFGfFmRr_kt0BuEzh63kcj9pOeJ-SY-AaDNyMlcE7cJpht4sx7mDf" alt="Duell der Generationen: Warum Phil Foden die Zukunft gehört – und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England trifft am letzten Gruppenspieltag der WM im britischen Duell auf Wales. Im Mittelpunkt dabei stehen vor allem Englands Top-Talent Phil Foden sowie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fussballeuropa.com/news/nationalmannschaft-bale-mit-eindeutigem-statement-zu-karriereende-2022-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karriereende nach der WM? Gareth Bale gibt Statement ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSRmk9OyjCg8rWvxfiHMLU196IsJLhne6pdk58sQEQFyPh_yQy99zBKLiZdqzV945ZhbmUDRNTt" alt="Karriereende nach der WM? Gareth Bale gibt Statement ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gareth Bale (33) war im Sommer in die USA zum Los Angeles FC gewechselt. Allgemein wurde vermutet, dass der Waliser sich mit seinem Transfer lediglich für&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/nur-ein-katar-spieler-schlechter-als-bale-kane-auf-den-spuren-von-beckham-238735833972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alle Fakten zum WM-Spieltag: Gareth Bale versagt, Harry Kane wie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlMi4sA66jwz1EsQb1z26Kqofyr8kKP8RFJ174B97k30f-VIvHL8YLD_CWdZkr1j3PxTXtTqnP" alt="Alle Fakten zum WM-Spieltag: Gareth Bale versagt, Harry Kane wie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lange Durststrecke vorbei: Senegal wurde zum ersten afrikanischen Team, das bei einer Fifa-Weltmeisterschaft gegen ein südamerikanisches Team gewinnt,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-england-spaziert-ins-achtelfinale-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: England spaziert ins Achtelfinale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfPb7ZUOrBEuPTDj5NrN-lfJouCIoMbr9O0fDak7Lgy-x6tA2FLA1atpqadxOjHcYi08Ihxxe1" alt="WM 2022: England spaziert ins Achtelfinale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einem lockeren Sieg gegen Wales schafft England als Gruppensieger den Einzug ins Achtelfinale. Dort treffen die Three Lions auf den Senegal.</p></div>
            </div>
        </a><a href='https://www.krone.at/2868398'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Battle of Britain“ - England schickt Nachbar Wales mit 3:0 nachhause</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuNtOPmJ4WElmtSiwu7JVVVvQr50btgN6t9axhAPtcnKdydJcP5r4k0h2XQVsGVjbI6cxfuU37" alt="„Battle of Britain“ - England schickt Nachbar Wales mit 3:0 nachhause" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gareth Bale und Co. treten die Heimreise an. Die Waliser mussten sich im „Battle of Britain“ überlegenen Engländern mit 0:3 geschlagen geben und ...</p></div>
            </div>
        </a><a href='https://www.welt.de/sport/fussball/wm/article242400533/WM-2022-Gareth-Bale-der-stille-Abgang-eines-grossen-Stars-von-der-Weltbuehne.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Gareth Bale – der stille Abgang eines großen Stars von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDFfSsxaK8txLJCzlPRCpvnHjmqHr46lUh0ga_QRbmgffPr2dATjPKvNMK7kuPeJseUt0L3jgf" alt="WM 2022: Gareth Bale – der stille Abgang eines großen Stars von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das 111. Länderspiel endete für Gareth Bale ohne Happy End. Gegen den Erzrivalen England blieb Wales chancenlos. Endet mit dem WM-Aus nun auch eine ganz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/sport/fussball/wm2022/ab-20-uhr-live-battle-of-britain-zwischen-england-und-wales;art222716,3751121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England nach 3:0 gegen Wales als Gruppensieger weiter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAIZTDRgtrWGMj70yRUyWTwyNLpbQ7MbronsFYT8Z3n7-wghVo4CG1EmoAYsPL9cENFh2r8cLR" alt="England nach 3:0 gegen Wales als Gruppensieger weiter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AR-RAYYAN. England ist bei der Fußball-WM als Gruppensieger ins Achtelfinale eingezogen. Der Champion von 1966 setzte sich am Dienstag in Al Rayyan gegen&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/fussball-wm-england-stuermt-gegen-wales-ins-achtelfinale/402242004'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM: England stürmt gegen Wales ins Achtelfinale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRH-wUwoeI38RH2CC7gk_sXRERv7sY8KLN5GKVgZPvozCecVc9U4LJ88F2z9NPNCmMQmIRUE3Ea" alt="Fußball-WM: England stürmt gegen Wales ins Achtelfinale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein riesiges Fußball-Wunder gegen den großen Nachbarn England hätte Wales gebraucht, um doch noch ins WM-Achtelfinale einzuziehen.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/endrunde/gruppe-b/wales-england/spielbericht-three-lions-besiegen-cymru-3-0-tore-rashford-foden.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales - England 0:3: Marcus Rashford und Phil Foden führen Three ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7pB5_kOdrH7yCARjnGzm1EKTrRavyLBRY3IHaz6o6oGkSnVmyI5SE73drjQbnTcEJe10lsGc6" alt="Wales - England 0:3: Marcus Rashford und Phil Foden führen Three ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England nutzte die emotionale Partie gegen Wales zu einem Ausrufezeichen. Der Titeltraum der Three Lions lebt.</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/fussball/wm-2022/wm-gruppe-b-wales-gegen-england-im-liveticker_id_180414172.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales - England im WM-Liveticker: 0:3! Englands Achtelfinal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXXkhf6Zyb6QO9WMl3fHfoZMuG6qAApWpu4yGuqNC99mB-p259_cvLm49PSbBwLNr-sPMdK8kR" alt="Wales - England im WM-Liveticker: 0:3! Englands Achtelfinal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die englische Nationalmannschaft stürmt mit einem 3:0-Erfolg gegen Wales zum Gruppensieg. Marcus Rashford schnürt einen Doppelpack, auch Phil Foden trifft.</p></div>
            </div>
        </a>
        </Template></>;
}