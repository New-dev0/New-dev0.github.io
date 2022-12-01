import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RS-Virus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RS-Virus"/>
        <meta name="description" content="Trending News about RS-Virus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RS-Virus</h1>
            <Image width={800} height={500} src="https://image.puls24.at/images/facebook/3254312/i-copknjob7jh5.jpg" alt="RS-Virus"/>
            <h3>Recent News</h3>
            <a href='https://www.puls24.at/news/chronik/rs-virus-infektion-darauf-ist-bei-saeuglingen-zu-achten/282497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus-Infektion: Darauf ist bei Säuglingen zu achten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSa7bE4iL2IKE6FYs5YPIsrmBbrkPM-LpTIlyCS72CTaUMYOKN3n32F8QW8VpvT5uHus8_YhnIm" alt="RS-Virus-Infektion: Darauf ist bei Säuglingen zu achten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Derzeit grassiert das RS-Virus in Österreich. Während es für Erwachsene nicht gefährlich ist, sollte man gerade bei kleinen Kindern ein Auge auf eine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sat1regional.de/rs-virus-welle-im-norden-die-aktuelle-lage-in-den-kliniken/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus-Welle im Norden: Die aktuelle Lage in den Kliniken - SAT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQbNv_LxenRdECEJIW8B9PAKE57F0xuxRkLqMT299q5nZduMZFxJHyjz-07ygGdkdfbRRf7dhp" alt="RS-Virus-Welle im Norden: Die aktuelle Lage in den Kliniken - SAT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Immer mehr Kinder infizieren sich derzeit deutschlandweit mit dem RSV, dem Respiratorischen Synzytial-Virus, einer Erkrankung der Atemwege.</p></div>
            </div>
        </a><a href='https://www.krone.at/2870110'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anzeichen erkennen - RS-Virus geht um: Ist mein Kind betroffen?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjnVu3Lm3nDWq6Rd1o9Q1SbGBMSI5er5E4PwLezrN6AqwxqpOlohYznameDr3meH-Bv-T6cybv" alt="Anzeichen erkennen - RS-Virus geht um: Ist mein Kind betroffen?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durch die derzeit besonders hohe Zahl an Infektionen mit dem Respiratorischen-Synzytial-Virus (RSV) bei kleinen Kindern sind viele Eltern ...</p></div>
            </div>
        </a><a href='https://www.5min.at/202211589863/babys-besonders-betroffen-rs-virus-in-kaernten-wieder-auf-dem-vormarsch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babys besonders betroffen: RS-Virus in Kärnten wieder auf dem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeVFbYM6t5EK-IrF4_zqGN07KkcOfslXJt5NquoSrlSy90tR-4u12MSomDYb0Ae2rWgdQVXJ7F" alt="Babys besonders betroffen: RS-Virus in Kärnten wieder auf dem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tatsächlich beobachten Mediziner in Kärnten sowohl im Klinikum Klagenfurt als auch im LKH Villach einen Anstieg bei den Kindern, die mit einer RS-Infektion&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dervinschger.it/de/news/rs-virus-bei-kindern-anstieg-der-infektionen-auch-in-suedtirol-wahrscheinlich-10511'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RS-Virus bei Kindern: Anstieg der Infektionen auch in Südtirol ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaRGoH1614cox9VF6sk12mNu2QehUQLQ6PFXMLmD4vf0bNS9Yl_9Z-Gh-jS7S-7pHxph1ldX0X" alt="RS-Virus bei Kindern: Anstieg der Infektionen auch in Südtirol ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In ganz Europa stecken sich immer mehr Säuglinge und Kleinkinder mit dem RS-Virus (Respiratorisches Synzytial-Virus) an. Dieses saisonale Virus verursacht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.morgenpost.de/ratgeber/article237028607/rsv-infektion-kinder-symptome-grippe.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV-Infektion: Das sind die Symptome</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0Nc89NKycIktw_ZqgMOui3hnKGr7XBLRwwXxkkLD_l-mqUBfeSIvjaypOYq0y3qkrqTAZla7f" alt="RSV-Infektion: Das sind die Symptome" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Berlin. Grippe und viele weitere Infektionen haben derzeit Hochkonjunktur. So auch die Infektion mit dem Respiratorische Synzytial-Virus (RSV).</p></div>
            </div>
        </a><a href='https://www.swp.de/baden-wuerttemberg/rsv-infektionen-in-bw_-warum-viele-kinder-mit-rs-virus-auf-kinderkliniken-liegen-67890209.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RSV-Infektionen in BW: Warum viele Kinder mit RS-Virus auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCe3lBx8jmRLSqSIhZLINiFHhCTk7jeGbKo8hYzfoila17MzGmGo4uYRc0oCppffXgpXyyKrWl" alt="RSV-Infektionen in BW: Warum viele Kinder mit RS-Virus auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kleinkinder trifft die aktuelle Infektionswelle besonders hart. Sie sind gleich mehreren Erregern ausgesetzt. Vor allem das RS-Virus (RSV) grassiert – und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.shz.de/lokales/husum/artikel/rs-virus-hoher-krankenstand-bei-schuelern-in-nordfriesland-43656030'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wenn die Viren um sich greifen: RS-Virus und Grippe-Welle sorgt für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQ7G5veTIAirnpnF_9E2WAbxFVdMWM_YQNXfzuhCjYBqEwVBf7Qjcgfve7voK6AqDNaB0at_Ky" alt="Wenn die Viren um sich greifen: RS-Virus und Grippe-Welle sorgt für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durch Masken, Abstand, Desinfektion und vor allem durch das harte Einschränken von Menschenansammlungen, wurden Ansteckungen deutlich heruntergefahren. Jetzt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}