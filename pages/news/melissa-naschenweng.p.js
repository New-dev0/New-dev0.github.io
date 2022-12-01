import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Melissa Naschenweng</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Melissa Naschenweng"/>
        <meta name="description" content="Trending News about Melissa Naschenweng" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Melissa Naschenweng</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/11/29/b99af1e2-0e02-4dcc-a84e-daa93bd469ef.jpeg?rect=0%2C484%2C1536%2C768&w=1280&auto=format" alt="Melissa Naschenweng"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/melissa-naschenweng-ging-beinahe-in-flammen-auf-100241337'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schock: Fast ging Melissa Naschenweng in Flammen auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxDUJFpC22ekuSomd-9gU5wqO0umh5cem06Q7hrVtvbSw0LM7HsrV5Pqw7RuO0waf__VbKKAOQ" alt="Schock: Fast ging Melissa Naschenweng in Flammen auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lichterloh brannte der Tannenbaum beim Videodreh zu Melissa Naschenwengs neuer Single &quot;Christkindl&quot;. Doch der Schlagerstar behielt kühle Nerven.</p></div>
            </div>
        </a><a href='https://www.5min.at/202211590005/melissa-naschenweng-brand-bei-dreharbeiten-sorgt-fuer-schock/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melissa Naschenweng: Brand bei Dreharbeiten sorgt für Schock</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBjhD0u-aurWPLZ1Z8Q954_QKahnZJQOkBX-8pnYcxGiPEzb1472-2hDxwCKowAeam_NUIQC3s" alt="Melissa Naschenweng: Brand bei Dreharbeiten sorgt für Schock" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein brennender Christbaum und Melissa Naschenweng, die versucht, den Brand zu löschen: Dieses Bild zierte die gestrige Instagram-Story der Kärntner.</p></div>
            </div>
        </a><a href='https://www.tz.de/stars/weihnachtsbaum-in-flammen-vollbrand-beim-videodreh-von-schlagerstar-melissa-naschenweng-91948138.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weihnachtsbaum in Flammen: Vollbrand beim Videodreh von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8nI-SWcbWZsoTj9ppX12Qsqa6tTyslasyChXe19Q5OIrh0mV74uysY-bAg0bEfxPqZIouVPBB" alt="Weihnachtsbaum in Flammen: Vollbrand beim Videodreh von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ach du Schreck statt „O du fröhliche“? Bei Melissa Naschenweng stand kürzlich ein ganzer Christbaum in Flammen. Die Schlagersängerin erklärte nun den&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}