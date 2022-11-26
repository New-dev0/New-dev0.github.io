import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enzensberger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enzensberger"/>
        <meta name="description" content="Trending News about Enzensberger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enzensberger</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470296988_BLD_Online-1.jpg" alt="Enzensberger"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/schriftsteller-hans-magnus-enzensberger-93-jaehrig-gestorben-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schriftsteller Hans Magnus Enzensberger 93-jährig gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgz4ET9JGemgTabB3AZIGou3JGli66B_dCqn4XZN0GbTuAeZuAzdM1K9KeEolc1cnlNXEEwzSn" alt="Schriftsteller Hans Magnus Enzensberger 93-jährig gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neben Günter Grass, Martin Walser, Uwe Johnson und Heinrich Böll war der am 11.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/buecher/autoren/hans-magnus-enzensberger-im-alter-von-93-jahren-gestorben-18487368.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hans Magnus Enzensberger: So leicht und elegant wie niemand in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoqfplSu5599JTiFs0e7HhSI68o2wifeA-UAFyuQjngTrJQnVmDEuZwI7LdlR4pg5llglNRDnNsQ" alt="Hans Magnus Enzensberger: So leicht und elegant wie niemand in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit dem großen Dichter, Essayisten und Herausgeber Hans Magnus Enzensberger geht eine der literarischen Gründungsfiguren der...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295258/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autor Hans Magnus Enzensberger mit 93 Jahren gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsGlgAfWJy2c47jTospQQdxcRHAZxC5iLW1yhbH1iKbHcXnC20oQFJP9qMijLrMMHWshVNaWF2" alt="Autor Hans Magnus Enzensberger mit 93 Jahren gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der deutsche Schriftsteller Hans Magnus Enzensberger ist tot. Er starb gestern im Alter von 93 Jahren in München, wie der Suhrkamp Verlag in Berlin heute&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndr.de/kultur/buch/Hans-Magnus-Enzensberger-ist-tot-Meister-der-Ironie,enzensberger128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hans Magnus Enzensberger ist tot: Meister der Ironie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ70KdWbooPv_h52j9Jn4I1FtCDYklx3XNMpkILHsrl-By0F_cbLbtf1l1Kt_VR9WA82hqsbUJv" alt="Hans Magnus Enzensberger ist tot: Meister der Ironie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schriftsteller Hans Magnus Enzensberger ist im Alter von 93 Jahren in München gestorben. Das einstige Mitglied der Gruppe 47 war ein Meister der Ironie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2866129'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wurde 93 Jahre alt - Schriftsteller Hans Magnus Enzensberger ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVE-fFewD3yV3qbSw4IhkQBeMxVSXZj9I4QiDUu3KM8y5gzJvfXpRs395yu-QMjWldJ1_OF8L1" alt="Wurde 93 Jahre alt - Schriftsteller Hans Magnus Enzensberger ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einer der renommiertesten deutschen Autoren nach 1945 ist tot. Hans Magnus Enzensberger starb am Donnerstag im Alter von 93 Jahren in München, wie ...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/kultur/6220079/Nachruf_Kein-Mann-der-leisen-Toene_Hans-Magnus-Enzensberger-93'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kein Mann der leisen Töne: Hans Magnus Enzensberger (93 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDoBnUqOWOXJ_Lf5RFNSMDrbDc3q9o0S7J408rTppiueLBn5BWe5IjVfoNUrT5HYBQ9RKhFAfu" alt="Kein Mann der leisen Töne: Hans Magnus Enzensberger (93 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schriftsteller Hans Magnus Enzensberger ist im Alter von 93 Jahren verstorben. Neben Alexander Kluge und Jürgen Habermas gehörte er zu den einflussreichsten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}