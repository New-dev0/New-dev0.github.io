import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Megan Fox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Megan Fox"/>
        <meta name="description" content="Trending News about Megan Fox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Megan Fox</h1>
            <Image width={800} height={500} src="https://aisvip-a.akamaihd.net/masters/1951699/megan-fox-und-heidi-klum.jpg" alt="Megan Fox"/>
            <h3>Recent News</h3>
            <a href='https://www.vip.de/cms/heidi-klum-megan-fox-matthew-mcconaughey-co-diese-stars-zeigen-sich-gern-nackt-5016331.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heidi Klum, Megan Fox, Matthew McConaughey &amp; Co.: Diese Stars ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz5pTHBfsK-lrSD4y3Z2eUNomlU-ZaL8h1_vI58bahEk3klaEtMdnMaxiqBUE9Eiy03JhB1gut" alt="Heidi Klum, Megan Fox, Matthew McConaughey &amp; Co.: Diese Stars ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dass Stars wie Heidi Klum, Megan Fox &amp; Co. nicht mit ihren Reizen geizen, ist längst kein Geheimnis mehr. So intim haben wir diese Celebrities noch nie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/hat-megan-fox-kein-geld-fuer-einen-rasierer-aufregung-um-bikinizone-der-schauspielerin-5016076.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hat Megan Fox kein Geld für einen Rasierer? Aufregung um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfqHDvx96kOdgb_RG3HTq7SJMlDE9YDzvShi7o4SivfzM6SdQVsLVeahQJ7RNwBIKSifWue6Ii" alt="Hat Megan Fox kein Geld für einen Rasierer? Aufregung um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Megan Fox&#39; (36) Intimbereich sorgt jetzt für Aufregung im Netz. Denn die Fans der Schauspielerin vermuten in deren Bikinizone ein &quot;haariges Problem&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}