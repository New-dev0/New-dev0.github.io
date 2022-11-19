import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sarah Connor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sarah Connor"/>
        <meta name="description" content="Trending News about Sarah Connor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sarah Connor</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2220961/vdbe1f9/og_image.jpg" alt="Sarah Connor"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2860383'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weihnachts-Vorfreude - Sarah Connor: Fest wird „laut, lustig ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBQ5osSEJ1I3PHTL9yHx4XuMxtoTib0PLG_F-nWHqsG_SOYo6gnqL1rUTTFCqJ9kmhWBZVebIT" alt="Weihnachts-Vorfreude - Sarah Connor: Fest wird „laut, lustig ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sarah Connor (42) hat am Heiligen Abend einen vollen Kalender. „Ab Mittag bereiten mein Mann und ich den Gänsebraten vor, das dauert ja ein paar ...</p></div>
            </div>
        </a><a href='https://www.gala.de/stars/news/sarah-connor--so-sieht-ihr-weihnachtsfest-mit-der-familie-aus-22964692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sarah Connor: So sieht ihr Weihnachtsfest mit der Familie aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScEFEJWcGjcMbEFCFFYUcZSUPqVhxs2KaxMywwd73GM6TUcq2xZhmvrAoB0N_CxW0wVHxSnzer" alt="Sarah Connor: So sieht ihr Weihnachtsfest mit der Familie aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Rahmen ihres Album-Releases &quot;Not so Silent Night&quot; erzählt Musikerin Sarah Connor, 42, im Interview mit der &quot;Berliner Zeitung&quot; von der Entstehung ihrer Platte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/musik/Sarah-Connor-betoert-sogar-den-Weihnachtsmann-article23725555.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Von wegen Stille Nacht!: Sarah Connor betört sogar den ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcST7xQ4R_iIgVJvDqjOgpKi3zOXNqRouEuU0YneEBQ29vnwScrnExldgo5ePpUYqAXGMKbTJuRJ" alt="Von wegen Stille Nacht!: Sarah Connor betört sogar den ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ja, ist denn schon Weihnachten? Sarah Connor bringt uns mit ihrem Album &quot;Not So Silent Night&quot; jedenfalls bereits in Stimmung. Und das, obwohl es gar nicht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/18/neues-album-sarah-connor-singt-fuer-ihre-verstorbene-oma.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neues Album: Sarah Connor singt für ihre verstorbene Oma</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTw7Lgds0lsfBns84Z7MADC7Q1ce1CC3y7ikrm9V5MPVPzHnh48Rq7f3CRb3CEaO3NASfjsYgSE" alt="Neues Album: Sarah Connor singt für ihre verstorbene Oma" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sarah Connor (42) gedenkt ihrer verstorbenen Großmutter! Vor über 20 Jahren gelang der Sängerin mit ihrer Single &quot;Let&#39;s Get Back To Bed – Boy!</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/sarah-connor-sie-singt-wieder-auf-englisch-81987490.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sarah Connor: Sie singt wieder auf Englisch | Unterhaltung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-q8o0OVV-0E2CV9lMAx2N873hM9vMV1goU7VyVmL1NnnoitS2DTAJ9kr-P6DVnL5oNZYFYAKp" alt="Sarah Connor: Sie singt wieder auf Englisch | Unterhaltung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor zwölf Jahren erschien ihr letztes Album in englischer Sprache, dann war Sarah Connor mit Deutsch-Pop erfolgreich. Nun kehrt sie zurück zu den Wurzeln.</p></div>
            </div>
        </a><a href='https://www.rnd.de/promis/sarah-connor-wie-die-saengerin-weihnachten-feiert-A7XIV7Z6AJWYS4CPDTTLVM27TY.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sarah Connor: Wie die Sängerin Weihnachten feiert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXr2NIgITjHhgg0_2c44u439yw2Nxd_JU8Xj2OjX0SzfDLwpOEPhKCqbTKuOspLm0vVDvWJPJJ" alt="Sarah Connor: Wie die Sängerin Weihnachten feiert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 24. Dezember ist bei Sarah Connor und ihrer Familie viel los. Die Sängerin sagte, dass an Heiligabend der Gänsebraten vorbereitet werde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/sarah-connor-ganz-privat-diesen-weihnachtssong-widmet-sie-ihrer-toten-oma-5016891.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sarah Connor ganz privat: Diesen Weihnachtssong widmet sie ihrer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStm9JjrnXzCEJ-7MWyFvzKoCPzo4OJCA8rodQ3EKMGMWJoOwKnxYMgeVxvmOdfnPNV4VgwN_9v" alt="Sarah Connor ganz privat: Diesen Weihnachtssong widmet sie ihrer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit &quot;Not So Silent Night&quot; veröffentlicht die Sängerin ein Album mit neuen Weihnachtshits. Einer davon besingt eine ganz besondere Person in Sarahs Leben.</p></div>
            </div>
        </a><a href='https://diffusmag.de/p/die-wichtigsten-releases-der-woche-tokio-hotel-brockhampton-barany-sarah-connor-gast-1986zig-und-viele-mehr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die wichtigsten Releases der Woche: Tokio Hotel, Brockhampton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbp5ET4WjYKuNXSMj7P9LdRWxQKGTyRxuNAxj2ZmkONS_lLE6AqKHy19o2VPnd3p_cIAoyXeZR" alt="Die wichtigsten Releases der Woche: Tokio Hotel, Brockhampton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ob Alben, EPs oder Mixtapes: In unserem Releaseradar findet ihr immer die spannendsten Neuerscheinungen der Woche.</p></div>
            </div>
        </a>
        </Template></>;
}