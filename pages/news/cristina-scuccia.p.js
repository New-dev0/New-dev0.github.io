import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cristina Scuccia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cristina Scuccia"/>
        <meta name="description" content="Trending News about Cristina Scuccia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cristina Scuccia</h1>
            <Image width={800} height={500} src="https://www.vienna.at/2022/11/cross-g9132566b3_1920-4-3-1405016391230-1639x1230.jpg" alt="Cristina Scuccia"/>
            <h3>Recent News</h3>
            <a href='https://www.vienna.at/italiens-singende-nonne-cristina-scuccia-tritt-aus-ihrem-orden-aus/7757443'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italiens &quot;singende Nonne&quot; Cristina Scuccia tritt aus ihrem Orden aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3xKSAK5uC0h97KEKr8oO-Cb9xNPwhF0C-4GYvMjwpM_LmdEmcllgxkeapzyPukaomFgrPes0P" alt="Italiens &quot;singende Nonne&quot; Cristina Scuccia tritt aus ihrem Orden aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die singende Nonne aus Italien, Ordensschwester Cristina Scuccia hat sich entschieden, aus ihrem Orden auszutreten. 2014 hat Scuccia The Voice Of Italy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2862071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irdische Karriere - Italiens singende Nonne tritt aus ihrem Orden aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZUX9Kr0ACJUT-fHctK2kSeGyas4249a-uPsh8pqe4TNVRgi3yXcWk9gVWkjCEaFEDIyKJeFMT" alt="Irdische Karriere - Italiens singende Nonne tritt aus ihrem Orden aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italiens als „singende Nonne“ bekannte Ordensschwester Cristina Scuccia, die Gewinnerin von „The Voice Of Italy“ 2014, hat sich entschieden, einen ...</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/italien-singende-nonne-cristina-scuccia-verlaesst-orden-und-ist-jetzt-kellnerin-in-spanien-5017358.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italien: &quot;Singende Nonne&quot; Cristina Scuccia verlässt Orden und ist ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkWTiuj-8JYVi4VYokzj-ecca99djeeztR5O4VcL30qItoF2VgTdk4A6sedsEkRIIRBDRIvZWv" alt="Italien: &quot;Singende Nonne&quot; Cristina Scuccia verlässt Orden und ist ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neues von Italiens vielleicht bekanntester Ordensfrau: Die „singende Nonne“ Cristina Scuccia hat ihren Orden verlassen.</p></div>
            </div>
        </a><a href='https://www.katholisch.de/artikel/42151-singende-nonne-cristina-scuccia-aus-orden-ausgetreten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Singende Nonne&quot; Cristina Scuccia aus Orden ausgetreten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCDL1x0IY1Bv4cY_QAColjyGhA1PgPHgAfKSAeP8ivXKub7cf9BiwDEGD7s2_idNkETph9-IXAUQ" alt="&quot;Singende Nonne&quot; Cristina Scuccia aus Orden ausgetreten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als &quot;singende Nonne&quot; im Habit erlangte Cristina Scuccia große Bekanntheit in der Musikbranche. 2014 gewann die Ordensschwester sogar die italienische&nbsp;...</p></div>
            </div>
        </a><a href='https://www.domradio.de/artikel/singende-nonne-cristina-scuccia-aus-orden-ausgetreten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Singende Nonne Cristina Scuccia aus Orden ausgetreten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9vDDOSPmUC4PAM5TfvgTEjGsgsHeFJDHSuef2yev9k3vYKhMjamtUcwP9pRQgZ-oQSNiwtRj8" alt="Singende Nonne Cristina Scuccia aus Orden ausgetreten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die als &quot;singende Nonne&quot; populär gewordene Italienerin Cristina Scuccia, hat ihren Austritt aus dem Ursulinen-Orden verkündet. Sie habe in den vergangenen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}