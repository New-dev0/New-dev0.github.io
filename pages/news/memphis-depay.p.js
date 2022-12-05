import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Memphis Depay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Memphis Depay"/>
        <meta name="description" content="Trending News about Memphis Depay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Memphis Depay</h1>
            <Image width={800} height={500} src="https://www.4-4-2.com/wp-content/uploads/2022/12/memphis-depay-imago-1000.jpg" alt="Memphis Depay"/>
            <h3>Recent News</h3>
            <a href='https://www.4-4-2.com/primera-division-la-liga/fc-barcelona/mourinho-will-memphis-depay-zur-as-rom-locken/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mourinho will Memphis Depay zur AS Rom locken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZGIgcnxB8DB17bg6v-bLSbxSn-twKsqlcEXI79mh_5qThcUpJoQBqSIAP7XFPNLDekDvjKVBK" alt="Mourinho will Memphis Depay zur AS Rom locken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Memphis Depay könnte den FC Barcelona zeitnah verlassen. Die AS Rom soll scharf sein auf die Dienste des Niederländers.</p></div>
            </div>
        </a><a href='https://www.fussballtransfers.com/a5762067008328349746-ueberzeugt-mourinho-depay-von-roma-wechsel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Überzeugt Mourinho Depay von Roma-Wechsel?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-plb1EVd-9mERtB4W2302seb0qLmtWDO2KaWWyFk80ZvKKJGKp9Q3nQ_FMQJOXzDaWtXAvRxZ" alt="Überzeugt Mourinho Depay von Roma-Wechsel?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Memphis Depay könnte den FC Barcelona im Januar verlassen. Wie ‚El Nacional&#39; berichtet, konnte José Mourinho den niederländischen Stürmer von ein (...)</p></div>
            </div>
        </a>
        </Template></>;
}