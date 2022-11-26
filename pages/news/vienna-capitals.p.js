import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vienna Capitals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vienna Capitals"/>
        <meta name="description" content="Trending News about Vienna Capitals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vienna Capitals</h1>
            <Image width={800} height={500} src="https://boerse-express.com/public/images/socialshare/share_placeholder.jpg" alt="Vienna Capitals"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/vienna-capitals-starke-reaktion-auf-bittere-klatsche-526956'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vienna Capitals: Starke Reaktion auf bittere Klatsche</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Vienna Capitals: Starke Reaktion auf bittere Klatsche" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schlussendlich war es nicht mehr als ein knallharter Bauchfleck, den die Vienna Capitals beim 3:9 im Innsbrucker Haifischbecken hinlegten.</p></div>
            </div>
        </a><a href='http://sportreport.biz/2022/11/25/live-vienna-capitals-vs-red-bull-salzburg-25112022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: Vienna Capitals vs. Red Bull Salzburg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7PLVOJ0yQoGoBk5Ci5lHUYnhjnnz2WjwHAAti9ow93AUUY6BA6REVguX4x2NwDqm25xBmlCW7" alt="LIVE: Vienna Capitals vs. Red Bull Salzburg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der win2day ICE Hockey League steht in der Steffl Arena das Duell Vienna Capitals vs. Red Bull Salzburg auf dem Programm. Beide Teams.</p></div>
            </div>
        </a><a href='https://ecrbs.redbulls.com/keine-punkte-fuer-die-red-bulls-wien'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Keine Punkte für die Red Bulls in Wien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNqXcX38jsyntXHcuJxWPVOSCGn5_mt2OVXt9IqoTjGf5eAQ4BGVPHLbCHqsab-Fa9SUNnRD6Z" alt="Keine Punkte für die Red Bulls in Wien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freitag, 25. November 2022. Der EC Red Bull Salzburg unterlag im Auswärtsspiel der win2day ICE Hockey League gegen die spusu Vienna Capitals mit 0:3. Nach einem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oe24.at/sport/wintersport/eishockey/capitals-schiessen-bullen-im-hit-eiskalt-ab/537018851'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Capitals schießen Bullen im Hit eiskalt ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQy4Md5m7oU9yHMSR9zSJqq3hKlBRP0Uw1tXp2wVGGD56NL1XEyrfAW1IPZz-CmG_OUjKB_qzqt" alt="Capitals schießen Bullen im Hit eiskalt ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die spusu Vienna Capitals zeigen gegen Meister Red Bull Salzburg eine starke Leistung und feiern einen verdienten 3:0-Erfolg.</p></div>
            </div>
        </a>
        </Template></>;
}