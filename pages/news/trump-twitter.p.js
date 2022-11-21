import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trump Twitter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trump Twitter"/>
        <meta name="description" content="Trending News about Trump Twitter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trump Twitter</h1>
            <Image width={800} height={500} src="https://i.ds.at/oByr-g/rs:fill:1200:600/plain/2022/11/20/trump.jpg" alt="Trump Twitter"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141026994/nach-twitter-freischaltung-trump-laesst-musk-zappeln'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Twitter-Freischaltung: Trump lässt Musk zappeln</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfcyEHQvAHvKqfA1Tz4iL9YwLuVmkiGU-DyG1ZDeNDeJ8SOJ8djf3yWql_--fSAzQc_mHTrI0S" alt="Nach Twitter-Freischaltung: Trump lässt Musk zappeln" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Twitter-Chef rollt dem US-Präsidentschaftsbewerber den roten Teppich aus. Dieser aber will vorerst nicht zum Kurznachrichtendienst zurückkehren.</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/kultur/medien/2168435-Twitter-entsperrt-Trump-Account.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter entsperrt Trump-Account</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBs5FDxrwd8lHQ7cQcOE8gJ8tUegwr6oqAuf8CFxauvSbYhM3kejb0CCHOphVsRRkup5GeII9a" alt="Twitter entsperrt Trump-Account" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter hat den seit Anfang 2021 gesperrten Account von Ex-US-Präsident Donald Trump wiederhergestellt. Das Profil des Republikaners war am Samstagabend&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/wirtschaft/unternehmen/nach-umfrage-elon-musk-hebt-twitter-sperre-fuer-donald-trump-auf-18475208.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Umfrage: Elon Musk hebt Twitter-Sperre für Donald Trump auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShMTUQGYLHE8zbVl1fcXT7ByyKQGC9SPfYBEBwgkurNn_SEHZyOHU1Q-mpJzyMaQCQKUjHp_37" alt="Nach Umfrage: Elon Musk hebt Twitter-Sperre für Donald Trump auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der neue Twitter-Eigentümer macht den Weg für die Rückkehr des früheren Präsidenten frei – aber in ganz anderer Form, als er das vorher...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/politik/Kritik-an-Musks-Twitter-Abstimmung-zu-Trump-article23730728.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Scheindemokratisch&quot;: Kritik an Musks Twitter-Abstimmung zu Trump</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM9qlf8rTOmn_Y0_k8ZNvoaSEWre3HbNcJMM36qYzlbLMDg_LFmur7HegDU69a732AE4o0w1nu" alt="&quot;Scheindemokratisch&quot;: Kritik an Musks Twitter-Abstimmung zu Trump" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der umstrittene Ex-US-Präsident Trump darf wieder twittern - nach einer Online-Abstimmung lässt der neue Twitter-Eigner Musk den bislang gesperrten Account&nbsp;...</p></div>
            </div>
        </a><a href='https://www.finanzen.at/nachrichten/aktien/roundup-sonderermittler-fuer-trump-untersuchungen-twitter-account-entsperrt-1031927051'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ROUNDUP: Sonderermittler für Trump-Untersuchungen - Twitter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ROUNDUP: Sonderermittler für Trump-Untersuchungen - Twitter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WASHINGTON (dpa-AFX) - Ex-Präsident Donald Trump, der im Mittelpunkt diverser Ermittlungen steht und wieder ins Weiße Haus will, bekommt wieder Zu...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/-das-volk-hat-gesprochen---elon-musk-begnadigt-donald-trump-auf-twitter-32929578.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Das Volk hat gesprochen&quot;: Elon Musk begnadigt Donald Trump auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHS9A29fe9FMH8UvBtZUxRoiQcKfNbXRw40Gi_qGMVKk2n8--FxY9AWkfz5BXjps8g6RfKQ1T6" alt="&quot;Das Volk hat gesprochen&quot;: Elon Musk begnadigt Donald Trump auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump ist zurück - (noch) nicht im Weißen Haus, aber immerhin auf Twitter. Elon Musk und &quot;dem Volk&quot; sei Dank.</p></div>
            </div>
        </a>
        </Template></>;
}