import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Strompreisbremse</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Strompreisbremse"/>
        <meta name="description" content="Trending News about Strompreisbremse" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Strompreisbremse</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/tir?image=https%3A%2F%2Foekastatic.orf.at%2Fmims%2F2022%2F49%2F75%2Fcrops%2Fw%3D1200%2Ch%3D627%2Cq%3D75%2F1592216_master_583075_1492466_opener_541569_stromkosten.jpg%3Fs%3Dbc053c65f1d9877ceee51053e5a76bac0f41e348" alt="Strompreisbremse"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/zangerl-strompreisbremse-laesst-mehrwertsteuer-unberuecksichtigt-528589'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zangerl: „Strompreisbremse lässt Mehrwertsteuer unberücksichtigt!“</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Zangerl: „Strompreisbremse lässt Mehrwertsteuer unberücksichtigt!“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BAK-Vizepräsident Erwin Zangerl übt Kritik an Berechnungsmodus bei der Strompreisbremse.Die ab heute gültige Strompreisbremse wurde so angekündigt,&nbsp;...</p></div>
            </div>
        </a><a href='https://tirol.orf.at/stories/3184632/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politik: Viel Kritik an Strompreisbremse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQc-i5imo_ZDK5WL53g1AjsSHzQ_q-2_naSOvIro-ryneZ_L0FKd61PN_gmpnajuUKe6oA45abNQ" alt="Politik: Viel Kritik an Strompreisbremse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Arbeiterkammer (AK) Tirol hat den Berechnungsmodus der Stromkostenbremse kritisiert. Diese trat am Donnerstag für jeden Haushalt mit aufrechtem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221201_OTS0228/bak-vizepraesident-erwin-zangerl-regierung-pfeift-auf-fast-zwei-millionen-menschen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BAK-Vizepräsident Erwin Zangerl: „Regierung pfeift auf fast zwei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="BAK-Vizepräsident Erwin Zangerl: „Regierung pfeift auf fast zwei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Innsbruck (OTS) - Während immer mehr politisch Verantwortliche versuchen, Lösungen für die hohen Energiekosten zu finden, lehnt Finanzminister Magnus Brunner&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}