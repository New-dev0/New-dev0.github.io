import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tobias Langhoff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tobias Langhoff"/>
        <meta name="description" content="Trending News about Tobias Langhoff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tobias Langhoff</h1>
            <Image width={800} height={500} src="https://image.gala.de/22972724/t/QY/v4/w1440/r1.7778/-/tobias-langhoff.jpg" alt="Tobias Langhoff"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/stars/news/tobias-langhoff--der-schauspieler-ist-an-seinem-60--geburtstag-gestorben-22972722.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tobias Langhoff: Der Schauspieler ist an seinem 60. Geburtstag ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhlOcd850mE5Uc0uadLD9kfUVTqTbhfdwtqPupq92M70szFINuq86XQlFPtHAQw0g8xIW6vJeg" alt="Tobias Langhoff: Der Schauspieler ist an seinem 60. Geburtstag ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trauer um Tobias Langhoff: Der Schauspieler ist am Montagmorgen, 28. November 2022, überraschend in Berlin verstorben.</p></div>
            </div>
        </a><a href='https://www.ndr.de/kultur/Schauspieler-Tobias-Langhoff-am-Montag-mit-60-Jahren-gestorben,kulturkurzmeldung2666.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schauspieler Tobias Langhoff am Montag mit 60 Jahren gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAiRlvtexe71rJC_6x1vzs3MmmuwhcpzuInhNb9A6NggtSL6YCXeyeZe0C2kqN5GMsk1RyQvmB" alt="Schauspieler Tobias Langhoff am Montag mit 60 Jahren gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tobias Langhoff ist tot. Er sei am Montagmorgen, seinem 60. Geburtstag, überraschend in Berlin gestorben, sagte seine Agentin Marketa Modra unter Berufung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6222237/von-tatort-bis-bad-banks-schauspieler-tobias-langhoff-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von &quot;Tatort&quot; bis &quot;Bad Banks&quot;: Schauspieler Tobias Langhoff gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXAhFFV7mBK2mD35Hte4J4cZJhceZSNkbMBGoJuqQMpDmYVuojf8Wu0rVizwPFztZjIBC0gda3" alt="Von &quot;Tatort&quot; bis &quot;Bad Banks&quot;: Schauspieler Tobias Langhoff gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der deutsche Schauspieler Tobias Langhoff ist tot. Er sei am Montagmorgen, seinem 60. Geburtstag, überraschend in Berlin gestorben, sagte seine Agentin am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/schauspieler-tobias-langhoff-stirbt-an-seinem-60-geburtstag-5018900.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schauspieler Tobias Langhoff stirbt an seinem 60. Geburtstag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCMoHG3HUXzhIdRLjK2Bvj05b79K-SLQJfnG1WXC0baqigbiUj3gHM208gpHxDnhckRC0TdMhB" alt="Schauspieler Tobias Langhoff stirbt an seinem 60. Geburtstag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schauspieler Tobias Langhoff ist am 28. November 2022, seinem 60. Geburtstag, überraschend in Berlin gestorben.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/tobias-langhoff-ist-tot-schauspieler-stirbt-an-seinem-60-geburtstag-82112090.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tobias Langhoff ist tot: Schauspieler stirbt an seinem 60. Geburtstag ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrBXDgC-I-RER4NYl03eoGuLhUWI-CxICPLc6cZpgQy6ipa_MSzy3ie_AgNlrGgKurAzeMv_7O" alt="Tobias Langhoff ist tot: Schauspieler stirbt an seinem 60. Geburtstag ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schauspieler, bekannt aus „Tatort“ und „Babylon Berlin“ ist überraschend am Montag in Berlin gestorben.</p></div>
            </div>
        </a><a href='https://www.berliner-kurier.de/berlin/schauspieler-tobias-langhoff-tod-am-morgen-seines-60-geburtstags-li.292660'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schauspieler Tobias Langhoff: Tod am Morgen seines 60. Geburtstags</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo7yt7QDDw4-khNyTjV6o1S2oZP-aev1Ve6fmFPYdrZFtbUxvqBao4XPJWS8FWpdMfl6I6XRr6" alt="Schauspieler Tobias Langhoff: Tod am Morgen seines 60. Geburtstags" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Berliner Schauspieler Tobias Langhoff („Im Westen nicht Neues“) ist am Morgen seines 60. Geburtstages in Berlin gestorben.</p></div>
            </div>
        </a><a href='https://www.berliner-zeitung.de/kultur-vergnuegen/nachruf-tod-schauspieler-jan-josef-liefers-ueber-tobias-langhoff-unser-letzter-tag-war-richtig-gut-li.292694'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jan Josef Liefers über Tobias Langhoff: „Unser letzter Tag war ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbPhlVEPLkmUi7t068HNs-jHhuB1KimTfwy5Q1UMqZlnT48owGy4ZCC-AbD1Xp6BOXfd_tcuK2" alt="Jan Josef Liefers über Tobias Langhoff: „Unser letzter Tag war ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schauspieler Tobias Langhoff ist am 28. November gestorben, an seinem 60. Geburtstag. Jan Josef Liefers erinnert sich an seinen ältesten und besten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}