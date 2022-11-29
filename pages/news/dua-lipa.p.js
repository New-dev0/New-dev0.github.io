import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dua Lipa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dua Lipa"/>
        <meta name="description" content="Trending News about Dua Lipa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dua Lipa</h1>
            <Image width={800} height={500} src="https://image.k.at/images/facebook/6880169/81452305866656182_BLD_Online.jpg" alt="Dua Lipa"/>
            <h3>Recent News</h3>
            <a href='https://k.at/entertainment/dua-lipa-albanische-staatsbuergerschaft/402240237'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa: Back to the roots – Sängerin nimmt neue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmQRPQKP2iZmcWdhryeK1W_AhA_JnHuCYDItWqj2RuAMfKrzlpVzEvdqkfym4lJeWpTW1AeO7j" alt="Dua Lipa: Back to the roots – Sängerin nimmt neue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ebenso erfreut zeigten sich albanische Spitzenpolitiker, dir ihr neues Staatsmitglied auf Instagram begrüßten. Als der Bosnienkrieg 1992 ausbrach, flohen die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/gesellschaft/smalltalk/dua-lipa-erhaelt-albanischen-pass-18493996.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neues von den Promis: Dua Lipa erhält albanischen Pass</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4k9gjFxnXKsiq8LBxZCPMCDLlqmQF70tSDw_ti9JKwbkPROcLcmq3MYCE1uziyv60wF7ByL_h" alt="Neues von den Promis: Dua Lipa erhält albanischen Pass" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die britische Sängerin und Tochter albanischer Einwanderer legte am Sonntag den Eid in Tirana ab. Der Präsident des Balkanlandes, Bajram...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/Dua-Lipa-ist-jetzt-Albanerin-article23748553.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Popstar mit neuem Pass: Dua Lipa ist jetzt Albanerin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThB9ma1vjdDpwk3EeMpiFOUN7IwFEBjlGb96g9qvNfGoB0DoxZY0HsWy5YUrOKBdb80vE7RQo0" alt="Popstar mit neuem Pass: Dua Lipa ist jetzt Albanerin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als ihre Eltern aus dem Kosovo nach Großbritannien flüchten, ist Dua Lipa noch nicht einmal geboren. Trotzdem bekennt sich die Sängerin stets zu ihren&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rnd.de/promis/dua-lipa-ist-jetzt-albanierin-staatsbuergerschaft-angenommen-BYE5HETHV7V3ZBE7K43R2CWRV4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa ist jetzt Albanierin - Staatsbürgerschaft angenommen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrg9GgaYQqxEu_ccbCscpWr_6meT52WWv6J345tU7OUbZB0ZzD-MAGz38mnX5LvACIBelV53X3" alt="Dua Lipa ist jetzt Albanierin - Staatsbürgerschaft angenommen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popstar Dua Lipa wurde in London geboren, bekannte sich aber stets zu den kosovarisch-albanischen Wurzeln ihrer Eltern. Jetzt vollzieht sie einen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/promis/dua-lipa-hat-die-albanische-staatsbuergerschaft-angenommen-art-861467'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa hat die albanische Staatsbürgerschaft angenommen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGlDEkQrQpsQ_llbAD310U3XHH6S91S9VuxaqmojWa1kz_X6JYWMLZhhyH7E-CIf4cgciTaF96" alt="Dua Lipa hat die albanische Staatsbürgerschaft angenommen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dua Lipa kehrt zurück zu ihren Wurzeln - die britische Pop-Sängerin ist nun offiziell Albanerin und stolz auf ihren neuen Pass. Ebenso erfreut zeigten sich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100088546/dua-lipa-hat-einen-neuen-pass-albanische-staatsbuergerschaft-fuer-popstar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa hat einen neuen Pass: Albanische Staatsbürgerschaft für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzQv0AIbRoGJNUH65c8Hec7NJr0s33Pk6cj3elYm0CuEV7ae0VnIyujJaWFM7sqOcc3zhSM9gi" alt="Dua Lipa hat einen neuen Pass: Albanische Staatsbürgerschaft für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dua Lipa kehrt zurück zu ihren Wurzeln: Die britische Popsängerin ist nun offiziell Albanerin und stolz auf ihren neuen Pass.</p></div>
            </div>
        </a><a href='https://www.rollingstone.de/mick-jagger-und-dua-lipa-gipfeltreffen-der-generationen-2524687/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mick Jagger und Dua Lipa: Gipfeltreffen der...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBGPd_bI9-lI98fmAHK1t_e2fUd0JB2dvXmpRZalOvKYQXSNBc6RbwczqS71aD7urb_d6AWoLi" alt="Mick Jagger und Dua Lipa: Gipfeltreffen der..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sind sich die beiden zufällig über den Weg gelaufen oder haben sie an einem gemeinsamen Stück Musik gearbeitet? Eine Tatsache macht uns Hoffnung.</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/sie-hat-uns-stolz-gemacht-dua-lipa-erhaelt-den-albanischen-pass-907587615343'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dua Lipa bekommt den albanischen Pass</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaZ86wkDT5q7bil168KX6mQ92XfB9Rh_qZ6y0UG2elm71SgPFTsOaKv6_stCx_WFxoWO32bJjX" alt="Dua Lipa bekommt den albanischen Pass" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Sängerin wurde in London als älteste Tochter kosovo-albanischen Eltern geboren. Der albanische Präsident ehrt sie für ihr soziales Engagement und ihre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiohamburg.de/aktuelles/musik/Arbeitet-Dua-Lipa-an-einem-gemeinsamen-Song-mit-Mick-Jagger-id786345.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arbeitet Dua Lipa an einem gemeinsamen Song mit Mick Jagger?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjU-khYOyhWTXAQIoeHM7dc9J2IiXpI1vsKyglQkejFn5L3x3i0qCPcwo0LT8yTFeXRmrL37bRDA" alt="Arbeitet Dua Lipa an einem gemeinsamen Song mit Mick Jagger?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dua Lipa arbeitet momentan an ihrem dritten Album. Bisher ist kaum etwas dazu bekannt. Jetzt wird jedoch spekuliert, dass die Sängerin einen Song mit&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}