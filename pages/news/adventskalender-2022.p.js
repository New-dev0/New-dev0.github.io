import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Adventskalender 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Adventskalender 2022"/>
        <meta name="description" content="Trending News about Adventskalender 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Adventskalender 2022</h1>
            <Image width={800} height={500} src="https://images.cgames.de/images/gsgp/4/pokémon-adventskalender-teaser_6208061.jpg" alt="Adventskalender 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.gamepro.de/artikel/pokemon-schnell-adventskalender-2022-amazon-sichern,3387460.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon: Jetzt noch schnell die Adventskalender 2022 bei Amazon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSU3TsDHNn7eud7Qc0MrmTSvdmzE2YoaHE6PzJxWc4AdEIsnfqrvpqZjfM6CAugMZXwV_yyHLEj" alt="Pokémon: Jetzt noch schnell die Adventskalender 2022 bei Amazon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist schon Dezember und ihr habt noch immer keinen Adventskalender? Kein Problem: Bei Amazon könnt ihr noch stilvolle Pokémon-Kalender kaufen. GamePro Deals</p></div>
            </div>
        </a><a href='https://www.krautundrueben.de/adventskalender-2022-2055'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adventskalender 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSE9WXtBpk53Mu5vKWm-Cdl438N-UHw0HbwTHHYEmEEGoWdalayYE6gJm-H82nC-_MeLath1u0" alt="Adventskalender 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In unserem Adventskalender warten 24 Überraschungen auf Sie: Gutscheine, Hanf-Bettwäsche, Säfte, Saatgutmischungen Schönes für den Garten und vieles mehr.</p></div>
            </div>
        </a><a href='https://www.play3.de/2022/12/01/playstation-adventskalender-2022-verdient-credits-und-gewinnt-zahlreiche-preise/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PlayStation-Adventskalender 2022: Verdient Credits und gewinnt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRi2UcnkgM5HFbDbRLBrRgGnB438P00MeckS3x9efHH7YOcyr1ht9RUE8HmD6kQ4DYm-GLV38UT" alt="PlayStation-Adventskalender 2022: Verdient Credits und gewinnt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sony hat den jährlichen PlayStation-Adventskalender gestartet. Einmal mehr können Teilnehmer allerlei größere und kleinere Preise abstauben.</p></div>
            </div>
        </a><a href='https://www.vfb.de/de/vfb/aktuell/neues/fans/2022/online-adventskalender-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Online-Adventskalender 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQylPF-n4-WuMsixyAi4JBwJoQJay6EDlgJ4OVj8Q4rTYGMTlhUCSznLK8orLTDRHxWxckDBu3c" alt="Online-Adventskalender 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es weihnachtet auf dem Wasen und wird Zeit für eine beliebte VfB-Tradition: Unser Online-Adventskalender 2022 ist da. Wieder einmal haben wir 24 Türchen mit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metal.de/news/der-metal-de-adventskalender-2022-465580/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Der metal.de Adventskalender 2022 • metal.de</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4h5fX3-eFP8qoduh0HT0J5ivinSzpKNA5_sNWYw6dkMjk1t-aEkiTKEcUHor6i-_oZ3XeBF3c" alt="Der metal.de Adventskalender 2022 • metal.de" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süßer die Gitarren nie klingen, als zu der metallenen Weihnachtszeit, wenn lauter laute Gaben sich finden, in uns&#39;rem Adventskalender – zum Gewinnen bereit!</p></div>
            </div>
        </a><a href='https://www.agrarheute.com/land-leben/26-preise-grosse-agrar-adventskalender-2022-600615'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>26 Preise: Der große Agrar-Adventskalender 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_XVleYDff9SMoUHYVofwZPFB6Oxy9XXjtpp1TAikyxGh8Vyi7sl5KS4a4FfpKezXxV0NQ4M_6" alt="26 Preise: Der große Agrar-Adventskalender 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wir versüßen Ihnen die Weihnachtszeit: Vom 1. bis 26. Dezember können Sie tolle Preise im Gesamtwert von über 5.000 Euro gewinnen.</p></div>
            </div>
        </a><a href='https://www.computerbild.de/artikel/cb-Aktuell-Internet-Adventskalender-Gewinnspiel-2022-online-34914197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adventskalender-Gewinnspiel 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3eFHZ2eRAdur0unbRXIgCsviB-iHTqoRSTq2AaYTEbHvTi1sGw2U6r5kVPY9XcmTR1Ur6xFCz" alt="Adventskalender-Gewinnspiel 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Smarte Soundbars, clevere Lampen, schlaue Kameras: Gewinnen Sie beim Adventskalender 2022 von tink und COMPUTER BILD spannende Preise rund ums Smart Home.</p></div>
            </div>
        </a>
        </Template></>;
}