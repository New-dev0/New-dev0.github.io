import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roland Kaiser</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roland Kaiser"/>
        <meta name="description" content="Trending News about Roland Kaiser" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roland Kaiser</h1>
            <Image width={800} height={500} src="https://www.ok-magazin.de/sites/default/files/styles/facebook/public/2022-09/roland-kaiser-genervte-miene-imago0162909198h.jpg?h=d8b2eae1" alt="Roland Kaiser"/>
            <h3>Recent News</h3>
            <a href='https://www.ok-magazin.de/schlager/roland-kaiser-endgueltiges-aus-ist-offiziell-83479.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roland Kaiser: Endgültiges Aus ist offiziell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcLBN_lVsbgMsvQ1VWHJ8Kfav6vSZ0OHoW1yBiVjlaLXdJF3uMUiOcWJO6J_X27a3v0OWIc9DI" alt="Roland Kaiser: Endgültiges Aus ist offiziell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Besonders große Enttäuschung bei den Fans von Roland Kaiser: In Zukunft werden sie bei einer Veranstaltung auf den Kaiser verzichten müssen ...</p></div>
            </div>
        </a><a href='https://www.ok-magazin.de/schlager/roland-kaiser-bewegende-worte-rund-um-tochter-annalena-84143.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roland Kaiser: Bewegende Worte rund um Tochter Annalena</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT25IkB3utJlBnH5ztjUcAlgz5XVprPjprGqgKjsK0bBYYc2Up7P6gtyHKPpZd1BVR2UuRAUaBM" alt="Roland Kaiser: Bewegende Worte rund um Tochter Annalena" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schlagerstar Roland Kaiser spricht über seine Tochter Annalena Kaiser und platzt dabei fast vor Stolz.</p></div>
            </div>
        </a><a href='https://www.express.de/promi-und-show/roland-kaiser-ueber-affaeren-geruechte-mit-maite-kelly-absurd-33730'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roland Kaiser über Affären-Gerüchte mit Maite Kelly: „Absurd“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYw_RcwKsrePR_6tbg60aFhuA9rG3aYDC2Yb2ewajJvtAEFhsq4lYL-kJm-m8xUgxNxl9v-f1M" alt="Roland Kaiser über Affären-Gerüchte mit Maite Kelly: „Absurd“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maite Kelly und Roland Kaiser ergänzen sich auf der Bühne perfekt. Immer wieder werden daher Gerüchte über eine heimliche Beziehung laut.</p></div>
            </div>
        </a>
        </Template></>;
}