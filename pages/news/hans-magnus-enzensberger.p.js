import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hans Magnus Enzensberger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hans Magnus Enzensberger"/>
        <meta name="description" content="Trending News about Hans Magnus Enzensberger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hans Magnus Enzensberger</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470296988_BLD_Online-1.jpg" alt="Hans Magnus Enzensberger"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/schriftsteller-hans-magnus-enzensberger-93-jaehrig-gestorben-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schriftsteller Hans Magnus Enzensberger 93-jährig gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgz4ET9JGemgTabB3AZIGou3JGli66B_dCqn4XZN0GbTuAeZuAzdM1K9KeEolc1cnlNXEEwzSn" alt="Schriftsteller Hans Magnus Enzensberger 93-jährig gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neben Günter Grass, Martin Walser, Uwe Johnson und Heinrich Böll war der am 11.</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295258/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autor Hans Magnus Enzensberger mit 93 Jahren gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsGlgAfWJy2c47jTospQQdxcRHAZxC5iLW1yhbH1iKbHcXnC20oQFJP9qMijLrMMHWshVNaWF2" alt="Autor Hans Magnus Enzensberger mit 93 Jahren gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der deutsche Schriftsteller Hans Magnus Enzensberger ist tot. Er starb gestern im Alter von 93 Jahren in München, wie der Suhrkamp Verlag in Berlin heute&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/buecher/autoren/hans-magnus-enzensberger-im-alter-von-93-jahren-gestorben-18487368.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hans Magnus Enzensberger: So leicht und elegant wie niemand in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoqfplSu5599JTiFs0e7HhSI68o2wifeA-UAFyuQjngTrJQnVmDEuZwI7LdlR4pg5llglNRDnNsQ" alt="Hans Magnus Enzensberger: So leicht und elegant wie niemand in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit dem großen Dichter, Essayisten und Herausgeber Hans Magnus Enzensberger geht eine der literarischen Gründungsfiguren der...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6220080/hans-magnus-enzensberger-ist-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hans Magnus Enzensberger ist gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7BXF1Oz5vzWxQZ2tjbSIg24x2Yse0Si_3l2TddoIn8lSegCMzKxaxe2IUBbgwUI5hNQMXjiXp" alt="Hans Magnus Enzensberger ist gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er studierte Literaturwissenschaft und Philosophie. Bereits mit 33 Jahren erhielt er den Büchner-Preis. Dutzende Bücher – Lyrik, Prosa, Essays, Dramen,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2866129'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wurde 93 Jahre alt - Schriftsteller Hans Magnus Enzensberger ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVE-fFewD3yV3qbSw4IhkQBeMxVSXZj9I4QiDUu3KM8y5gzJvfXpRs395yu-QMjWldJ1_OF8L1" alt="Wurde 93 Jahre alt - Schriftsteller Hans Magnus Enzensberger ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einer der renommiertesten deutschen Autoren nach 1945 ist tot. Hans Magnus Enzensberger starb am Donnerstag im Alter von 93 Jahren in München, wie ...</p></div>
            </div>
        </a><a href='https://www.ndr.de/kultur/buch/Hans-Magnus-Enzensberger-ist-tot-Meister-der-Ironie,enzensberger128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hans Magnus Enzensberger ist tot: Meister der Ironie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ70KdWbooPv_h52j9Jn4I1FtCDYklx3XNMpkILHsrl-By0F_cbLbtf1l1Kt_VR9WA82hqsbUJv" alt="Hans Magnus Enzensberger ist tot: Meister der Ironie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schriftsteller Hans Magnus Enzensberger ist im Alter von 93 Jahren in München gestorben. Das einstige Mitglied der Gruppe 47 war ein Meister der Ironie&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}