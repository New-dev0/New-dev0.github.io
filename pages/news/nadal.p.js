import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nadal"/>
        <meta name="description" content="Trending News about Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nadal</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/5/1/csm_moya_trainingMatch_7db87c3fea.jpg" alt="Nadal"/>
            <h3>Recent News</h3>
            <a href='https://www.tennisnet.com/news/carlos-moya-ueber-rafael-nadal-trainingsleistung-nicht-im-match-gezeigt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Moya über Rafael Nadal - Trainingsleistung nicht im Match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKQ2YzTpQX6Fwal9BEB53toWsMNWzg9zyC9q2fw-aD3FUGXfhcD0OagRlhUDZEWTwk0horpzVE" alt="Carlos Moya über Rafael Nadal - Trainingsleistung nicht im Match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Moya hat nach dem enttäuschenden Gruppenaus seines Schützlings Rafael Nadal bei den Nitto-ATP-Finals in Turin eine differenzierte Bilanz gezogen.</p></div>
            </div>
        </a><a href='https://www.tt.com/artikel/30837842/nadal-gewann-letztes-spiel-bei-atp-finals-fritz-schaltete-augier-aliassime-aus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal gewann letztes Spiel bei ATP Finals, Fritz schaltete Augier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxnLn2Q9qHvmG9Pn6gbMKVFwFDHhFRotBOri5uoGlwXF-165rKa1Qr8W6GkftxiKA1RI6IBuBD" alt="Nadal gewann letztes Spiel bei ATP Finals, Fritz schaltete Augier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Spanier Rafael Nadal setzte sich am Donnerstag in Turin gegen den Norweger Casper Ruud mit 7:5, 7:5 durch. Der Am...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/atp-finals-heute-rafael-nadal-casper-ruud-524408'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal verabschiedet sich mit Sieg von den ATP-Finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rafael Nadal verabschiedet sich mit Sieg von den ATP-Finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal gelingt am letzten Spieltag der grünen Gruppe in den ATP-Finals ein Sieg gegen Casper Ruud. Mit 7:5 und 7:5 behält der Spanier die Oberhand.</p></div>
            </div>
        </a><a href='https://www.tennisnet.com/news/atp-finals-rafael-nadal-verabschiedet-sich-aus-turin-mit-sieg-gegen-casper-ruud'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals: Rafael Nadal verabschiedet sich aus Turin mit Sieg ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmCIfyniLMhS9IYlkmldJDsUMeFdWh1107Zdzp3fFQ977r_inMH3WvoLyjhwTAXw5d1gxnMgNP" alt="ATP Finals: Rafael Nadal verabschiedet sich aus Turin mit Sieg ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Re-Match der French Open 2022 begann unter klaren Vorzeichen: Casper Ruud war bereits für das Halbfinale qualifiziert, Rafael Nadal wusste, dass dies sein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/jahresabschluss--erster-sieg-fuer-nadal-bei-atp-finals---fritz-im-halbfinale-32924126.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jahresabschluss: Erster Sieg für Nadal bei ATP-Finals - Fritz im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-sGvpznCgsMAH5DDFVfc72gY4Ekui8fslBcEtU6nbCu1UKfsXMHEWPNo5vLHj_sWkLheCokBB" alt="Jahresabschluss: Erster Sieg für Nadal bei ATP-Finals - Fritz im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>London - Rafael Nadal hat bei den ATP-Finals in seinem letzten Gruppenspiel den ersten Sieg gefeiert. Der Spanier gewann in Turin gegen den Norweger.</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/nadal-verabschiedet-sich-mit-sieg-von-atp-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal verabschiedet sich mit Sieg von ATP-Finals - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSRWCElrqGAhPYPh3YLaXp8wHUu76WfL5CJSv3XlrPYoYbrekGVSBECiJevHo61PijZlBwoV-D8" alt="Nadal verabschiedet sich mit Sieg von ATP-Finals - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennis-Superstar Rafael Nadal hat sich nach seinem vorzeitigen Vorrundenaus bei den ATP-Finals in Turin mit einem Sieg aus dem Turnier verabschiedet. Der.</p></div>
            </div>
        </a>
        </Template></>;
}