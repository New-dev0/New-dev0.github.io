import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahce</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahce"/>
        <meta name="description" content="Trending News about Fenerbahce" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahce</h1>
            <Image width={800} height={500} src="https://i0.wp.com/www.ligablatt.de/wp-content/uploads/2022/12/12a117dadf1441ac889ce693c00de79f.jpg?fit=940%2C626&ssl=1" alt="Fenerbahce"/>
            <h3>Recent News</h3>
            <a href='https://www.ligablatt.de/fenerbahce/sky-italia-inter-mailand-an-fenerbahce-torwart-bayindir-interessiert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Sky Italia&quot;: Inter Mailand an Fenerbahçe-Torwart Bayındır interessiert!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRr6bqBMS2NHcIenT1El2oMzSFDraPsFwsZUmYZKSgFEWvvay30qMCLOwEk2AbpwgOPul1RWopr" alt="&quot;Sky Italia&quot;: Inter Mailand an Fenerbahçe-Torwart Bayındır interessiert!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie &quot;Sky Italia&quot; vermeldet, ist Fener-Keeper und Kapitän Altay Bayındır auf dem Rader von Inter Mailand gelandet. Neben dem 24-Jährigen soll auch Yann&nbsp;...</p></div>
            </div>
        </a><a href='https://gazetefutbol.de/fenerbahce-gewinnt-test-gegen-den-fc-villarreal-mit-21/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahce gewinnt Test gegen den FC Villarreal mit 2:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqahhBXkH03gYPOq-gnEYE_psaPgzdRm3lCteECZwi0A-DONfn9JrekM7lOlWascPnm6XP6yzO" alt="Fenerbahce gewinnt Test gegen den FC Villarreal mit 2:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Etienne Capoue (24.) brachte die Spanier mit 1:0 in Führung. In der 29. Minute wurde Serdar Dursun nach einer Flanke von Ezgjan Alioski im Strafraum zu Fall&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}