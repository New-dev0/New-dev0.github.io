import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christoph Maria Herbst</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christoph Maria Herbst"/>
        <meta name="description" content="Trending News about Christoph Maria Herbst" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christoph Maria Herbst</h1>
            <Image width={800} height={500} src="https://ais-akamai.rtl.de/masters/1953091/1686x0/thomas-gottschalk-mit-seinen-gaesten-bei-wetten-dass.jpg" alt="Christoph Maria Herbst"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.de/cms/wetten-dass-fieser-koks-spruch-gegen-robbie-williams-ging-christoph-maria-herbst-zu-weit-5017084.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wetten... dass?&quot;: Fieser Koks-Spruch gegen Robbie Williams - ging ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlI4IpfLuB9IuFiDBz6bN11tcJbyLweAmmF_3ivh7qznyAGB4IaQzg7J69hIVokKlB3EYzK7Fe" alt="&quot;Wetten... dass?&quot;: Fieser Koks-Spruch gegen Robbie Williams - ging ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Hat Christoph Maria Herbst gerade Robbie Williams vor Millionen Zuschauern als Kokser bezeichnet?&quot;, melden sich Twitter-User entsetzt zu Wort.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/wetten-dass-premiere-bei-der-bagger-wette-81994638.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wetten, dass..?“: Haariger Koks-Gag über Robbie Williams ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJnl8pP_mMeEzvLrCqZZHIBEnbyQB2YpEXzlZbQ_L7U04QhUwq6CU93vE8pDSYY-5GQMP_TWtX" alt="„Wetten, dass..?“: Haariger Koks-Gag über Robbie Williams ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einen haarigen Spruch kloppte auch Schauspieler und Comedian Christoph Maria Herbst. Als Robbie Williams ausplaudert, einen Puder zu benutzen, der sein Haar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}