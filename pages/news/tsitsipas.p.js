import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tsitsipas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tsitsipas"/>
        <meta name="description" content="Trending News about Tsitsipas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tsitsipas</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/f/5/csm_turin_ticker_tsitsipas_medvedev_3459d467c5.jpg" alt="Tsitsipas"/>
            <h3>Recent News</h3>
            <a href='https://www.tennisnet.com/news/atp-finals-live-stefanos-tsitsipas-vs-daniil-medvedev-im-tv-livestream-und-liveticker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals live: Stefanos Tsitsipas vs. Daniil Medvedev im TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXB6__A5T4XsHXKvo8fhJb91NMIo9PmSNJ9sLnpFi6OxHYxA2TmfaXL6nuzeKIhJWKOFpM8E1v" alt="ATP Finals live: Stefanos Tsitsipas vs. Daniil Medvedev im TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stefanos Tsitsipas und Daniil Medvedev treffen am Mittwochabend bei den ATP Finals in Turin aufeinander. Das Match gibt es ab 21 Uhr live im TV und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2858758'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals - Medwedew unterliegt Tsitsipas und ist raus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdID2qUh2o_f4s_NkbHlDQ-ERkZG3Mk_byxGPPciVR5Q4EtFM0rhOxT03nkNhTCb-WBM603pKJ" alt="ATP Finals - Medwedew unterliegt Tsitsipas und ist raus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im zweiten Spiel des Tages bezwang der Grieche Stefanos Tsitsipas bei den ATP Finals in Turin den Russen Daniil Medwedew mit 6:3,6:7(11),7:6 (1) und ...</p></div>
            </div>
        </a><a href='https://www.srf.ch/sport/tennis/atp-tour/atp-finals-in-turin-tsitsipas-beendet-die-finals-traeume-von-medwedew'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals in Turin - Tsitsipas beendet die Finals-Träume von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo-PA53CLxwk6asWmyrJNfwvuVQON_pqOac1nQhKJQN174K8hkWjIMq_0_Aj1-MaEfYNtmFdaj" alt="ATP Finals in Turin - Tsitsipas beendet die Finals-Träume von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Duell zweier ehemaliger ATP-Finals-Sieger ringt der Grieche den Russen in drei hart umkämpften Sätzen nieder.</p></div>
            </div>
        </a><a href='https://sportdaten.sportbild.bild.de/tennis/co965/atp-finals/ma9527881/stefanos-tsitsipas_daniil-medvedev/liveticker/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stefanos Tsitsipas gegen Daniil Medvedev Liveticker - ATP Finals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Stefanos Tsitsipas gegen Daniil Medvedev Liveticker - ATP Finals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch Medvedev vermeintlich mit einem Ass, diesmal setzt der Russe aber etwas zu seitlich an! Es geht mit Second Service weiter, letztlich retoruniert Medvedev&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/tennis/tennis-atp-finals-djokovic-mittwoch-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tsitsipas gewinnt Krimi gegen Medvedev</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVDp1LgdkmI8s6NyvLVxEH8MbGbOrnWj0Zl6vPMfmceioU8oQZ-R7kXDOyaEEBtgKBKCSbwroV" alt="Tsitsipas gewinnt Krimi gegen Medvedev" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stefanos Tsitsipas hat bei den ATP-Finals in Turin in einem hochdramatischen Match Daniil Medvedev geschlagen. Zuvor hatte Novak Djokovic vorzeitig das&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3103050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP-Finals: Medwedew vorzeitig out, Djokovic souverän</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrWEZOICOiiU42ANNWxmkNSe31XAwACnFopDICLkNa3GSVC8GXkC-BwG9Nl_T2z7KS9KWDoaYe" alt="ATP-Finals: Medwedew vorzeitig out, Djokovic souverän" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach Rafael Nadal hat auch Daniil Medwedew bei den ATP-Finals in Turin bereits nach zwei Spielen keine Chance mehr auf den Einzug ins Halbfinale.</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000140918853/djokovic-bei-atp-finals-im-halbfinale-und-in-australien-dabei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic bei ATP-Finals im Halbfinale und in Australien dabei</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0wxD7-01CWRafnfQqQbUBVJWU_eO-IrxW89WdaTOuTYzeJbi1ifTL1Wcg2AVjZLTwEhdkoFol" alt="Djokovic bei ATP-Finals im Halbfinale und in Australien dabei" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic ist bei den ATP Finals in Turin vorzeitig in das Halbfinale eingezogen. Der Serbe bezwang am Mittwochnachmittag den Russen Andrej Rublew&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}