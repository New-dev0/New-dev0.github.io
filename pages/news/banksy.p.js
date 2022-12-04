import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Banksy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Banksy"/>
        <meta name="description" content="Trending News about Banksy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Banksy</h1>
            <Image width={800} height={500} src="https://orf.at/mojo/1_4_1/storyserver//news/common/images/og-fallback-news.png" alt="Banksy"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3296255/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Banksy-Bild aus Hauswand geschnitten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvT0JIntgBHBUUmnf8-voJgh6-FTXfIokZC1s6w2xPliCkzGXp1Wg7I6DAB60J6sCl1FGCz_1O" alt="Banksy-Bild aus Hauswand geschnitten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Ukraine ist kurz nach der Entstehung ein Bild des Streetart-Künstlers Banksy von Kriminellen aus der Wand geschnitten worden.</p></div>
            </div>
        </a><a href='https://www.krone.at/2872992'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aus Mauer geschnitten - Kiew: Kriminelle wollten Banksy-Bild stehlen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3tpgBAjKGcctHbhBsQWO3lLMfYTtTH6EGIT1Em0UOBV4D_R9hDfDLv5ZBIntY7QBGuIdzU1Nt" alt="Aus Mauer geschnitten - Kiew: Kriminelle wollten Banksy-Bild stehlen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erst vor Kurzem hat der britische Street-Art-Künstler Banksy bestätigt, dass er insgesamt sieben Graffiti auf Ruinen in der Ukraine hinterlassen ...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/kunst-und-architektur/kriminelle-schneiden-banksy-bild-aus-hauswand-18507378.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukrainekrieg: Kriminelle schneiden Banksy-Bild aus Hauswand</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7VY4LVfsF6YJORg3F0OOm9WUynZDVva16pTRXs7BwB-06fUBY9tPhM_8bsUXYd0jqzNmsckUa" alt="Ukrainekrieg: Kriminelle schneiden Banksy-Bild aus Hauswand" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Ukraine ist kurz nach der Entstehung ein Bild des Streetart-Künstlers Banksy von Kriminellen aus der Wand geschnitten worden. Im...</p></div>
            </div>
        </a><a href='https://de.euronews.com/2022/12/03/dreister-diebstahl-eines-banksy-werkes-in-kiew-polizei-greift-rechtzeitig-ein'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dreister Diebstahl eines Banksy-Werkes in Kiew - Polizei greift ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT44lwM9tPjOtow_MZcI3JXeoAbS2ecNnXaopvvKUrCu4IFmbXnsporiNHekfNFSUlULGn-1XDf" alt="Dreister Diebstahl eines Banksy-Werkes in Kiew - Polizei greift ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acht Menschen zwischen 27 und 60 Jahren versuchen in Kiew, ein Banksy-Werk zu stehlen. Der dreiste Raub missglückt, weil Anwohner die Polizei verständigen.</p></div>
            </div>
        </a><a href='https://www.spiegel.de/panorama/justiz/ukraine-kriminelle-versuchen-banksy-bild-zu-stehlen-a-889700ff-14a8-4099-885d-0c41ca95cbae'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine: Kriminelle versuchen, Banksy-Bild zu stehlen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAmDl4V-uTjZtLXKRg5xO0NLUdvQ5X9z3YstiGsNxSDhV_-sZ8-yvpP6MqDVNqOXxrg33ThB0D" alt="Ukraine: Kriminelle versuchen, Banksy-Bild zu stehlen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sieben Bilder soll der britische Street-Art-Künstler auf ukrainischen Kriegsruinen hinterlassen haben. Eines davon nahmen mutmaßliche Diebe ins Visier – und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welt.de/vermischtes/kriminalitaet/article242467755/Banksy-Bild-in-Kiew-Kriminelle-schneiden-Graffiti-direkt-aus-der-Hauswand.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Banksy-Bild in Kiew: Kriminelle schneiden Graffiti direkt aus der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjQ6rYu_xsCmX3G-plkSFRnYu-twbAB3fOK5Fp-gFLGiGqBz-kgZZgGK0q5vp0dkb30VxfzIJb" alt="Banksy-Bild in Kiew: Kriminelle schneiden Graffiti direkt aus der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Ukraine ist ein Bild des Streetart-Künstlers Banksy von Kriminellen kurzerhand aus der Wand geschnitten worden. Im Kiewer Vorort Hostomel hätten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}