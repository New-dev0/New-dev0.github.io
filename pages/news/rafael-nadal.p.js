import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7355829/46-192088322.jpg" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/sport/tennis/tennis-star-rafael-nadal-ist-bei-den-atp-finals-ausgeschieden/402219522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis-Star Rafael Nadal ist bei den ATP-Finals ausgeschieden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeJTwGn5mo602Ly0TSfE9r6Ut_JmqKJAxDZdNW73dhItp4bL2XXB_aeZGZJIvtrIBHYNClAvQW" alt="Tennis-Star Rafael Nadal ist bei den ATP-Finals ausgeschieden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der als Nummer 1 gesetzte Spanier verlor auch sein zweites Gruppenspiel. Casper Ruud schlug Taylor Fritz.</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/atp-finals-heute-rafael-nadal-felix-auger-aliassime-523696'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal verliert auch zweites Spiel bei ATP-Finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rafael Nadal verliert auch zweites Spiel bei ATP-Finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal verliert nach seiner Auftaktniederlage gegen Taylor Fritz auch sein zweiten Gruppenspiel bei den ATP Finals in Turin gegen Felix&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennisnet.com/news/atp-finals-live-rafael-nadal-vs-felix-auger-aliassime-im-tv-livestream-und-liveticker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals live: Rafael Nadal vs. Félix Auger-Aliassime im TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRbYgqi64PDzRxVOl59JQTEsHmWOU7Vnx-a-1HC9kyiAp5baKHEKT7rtE9xJGOqxZiMsZD0pVk" alt="ATP Finals live: Rafael Nadal vs. Félix Auger-Aliassime im TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal trifft im zweiten Gruppenspiel bei den ATP Finals in London auf Félix Auger-Aliassime. Das Match gibt es ab 14 Unr live im TV und Livestream&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/sport/mehr-sport/tennisprofi-rafael-nadal-kassiert-zweite-niederlage-bei-atp-finals-18463467.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP-Finals: Nächste Niederlage für Rafael Nadal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgci73u26DeWXlfbAk1IWHQqgUhiQ11FoU13hwCF4AbuyeWRRJ90tclCkjqXG3XO8VR-U_p-j2" alt="ATP-Finals: Nächste Niederlage für Rafael Nadal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennisprofi Rafael Nadal muss bei den ATP-Finals in Turin seine zweite Niederlage verkraften. Gegen den Kanadier Felix Auger-Aliassime...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/tennis/2211/Artikel/atp-finals-rafael-nadal-nach-klarer-niederlage-bereits-ausgeschieden.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals: Rafael Nadal nach zweiter Pleite bereits gescheitert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5LvEVBXHpl40gmSJK4oHgKGuPlVzHUND3xi5DYw1LJVOZsPrXBNAlTRwXeRspik4sZoMLa9eh" alt="ATP Finals: Rafael Nadal nach zweiter Pleite bereits gescheitert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grand-Slam-Rekordgewinner Rafael Nadal ist beim ATP-Finale der acht besten Tennisprofis des Jahres in Turin früh gescheitert und hat den Sprung zurück an&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/sport/tennis/atp-finals-rafael-nadal-verliert-zweites-gruppenspiel-gegen-felix-auger-aliassime-a-9bb0eae8-613d-45f1-8dbe-b50b4d6fd073'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals: Nadal verliert auch sein zweites Match beim Turnier der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStNIKIjk41InAJzjP-5PZb2_yrP_CByrNGzphOQJBtt7VKFzi5_uycanaRaEEqSKhPJruz3goj" alt="ATP Finals: Nadal verliert auch sein zweites Match beim Turnier der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um die Saison als Nummer eins der Weltrangliste zu beenden, muss Rafael Nadal die ATP Finals gewinnen. Doch danach sieht es momentan nicht aus.</p></div>
            </div>
        </a>
        </Template></>;
}