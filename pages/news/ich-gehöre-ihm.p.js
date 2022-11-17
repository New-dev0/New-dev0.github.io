import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ich gehöre ihm</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ich gehöre ihm"/>
        <meta name="description" content="Trending News about Ich gehöre ihm" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ich gehöre ihm</h1>
            <Image width={800} height={500} src="https://www.swp.de/imgs/07/1/0/6/1/5/6/1/9/3/tok_cb69e0055c3d0ff8bf9f8c7704e5d0d4/w1200_h675_x641_y268_18_Ich_gehoere_ihm-a9c952391d1d3326.jpeg" alt="Ich gehöre ihm"/>
            <h3>Recent News</h3>
            <a href='https://www.swp.de/unterhaltung/tv/ich-gehoere-ihm-ard-sendetermine-mediathek-stream-handlung-besetzung-drehorte-kritik-16-11-2022-67151423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ich gehöre ihm: Alle Infos zum ARD-Film rund um Besetzung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT23duRmqiPaaoN3D2_0QefPxkMLAxyp1rC1JjZ0fpPm1Mb86TzVdRoHRWPmuqE2z9_SVJDaPas" alt="Ich gehöre ihm: Alle Infos zum ARD-Film rund um Besetzung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 16.11.2022 wird das Drama „Ich gehöre ihm“ im Rahmen des „FilmMittwoch im Ersten“ gezeigt. Alle Infos rund um Handlung, Cast, Drehorte &amp; Co.</p></div>
            </div>
        </a><a href='https://www.news.de/tv-aktuell/856595361/ich-gehoere-ihm-im-tv-und-online-als-live-stream-in-der-ard-mediathek-hier-koennen-sie-am-16-11-2022-den-film-im-tv-sehen/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ich gehöre ihm&quot; bei ARD im Livestream und TV: Der Spielfilm von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRubNDwmr5iLH_QCHsIa3_5Lk7kLt_TKTjPzjzcQZZxkGyTUJ3BJt0ZlddrhNxk20O_13OD0WV_" alt="&quot;Ich gehöre ihm&quot; bei ARD im Livestream und TV: Der Spielfilm von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute, am 16.11.2022, zeigt ARD den Spielfilm &quot;Ich gehöre ihm&quot; von Thomas Durchschlag im Fernsehen. Wann Sie einschalten sollten, ob es im Netz einen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}