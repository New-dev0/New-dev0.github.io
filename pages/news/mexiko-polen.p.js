import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexiko Polen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexiko Polen"/>
        <meta name="description" content="Trending News about Mexiko Polen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexiko Polen</h1>
            <Image width={800} height={500} src="https://boerse-express.com/public/images/socialshare/share_placeholder.jpg" alt="Mexiko Polen"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/wm-heute-mexiko-polen-525628'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewa-Elfer kostet Polen den Sieg gegen Mexiko</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Lewa-Elfer kostet Polen den Sieg gegen Mexiko" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexiko und Polen trennen sich in einem ausgeglichenen Spiel der Gruppe C bei der FIFA-Weltmeisterschaft in Katar mit einem torlosen Unentschieden.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/lewandowski-drama-bei-nullnummer-zwischen-mexiko-polen/281829'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewandowski-Drama bei Nullnummer zwischen Mexiko - Polen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgt3L6xKSVIPOH0vsGTIp_SizzdfBEBCU5uUDVNHVm9pifrrTdBihZJxweozLdRw54wQbNIvfk" alt="Lewandowski-Drama bei Nullnummer zwischen Mexiko - Polen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexiko und Polen sind mit einer Nullnummer in die Fußball-WM in Katar gestartet. Nachdem Turniermitfavorit Argentinien gegen Saudi-Arabien zuvor&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3103286/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA WM 2022: Angriff bei Polen und Mexiko im Fokus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQSS-LINnUlq5gip9sRacNafU0LPZ825V_4NscBfTUauQ8XHKbqNUTqhOLITfol14Egy75XL2f" alt="FIFA WM 2022: Angriff bei Polen und Mexiko im Fokus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Polen und Mexiko geht es bei ihrem ersten Auftritt bei der WM 2022 in Katar bereits um viel. Im direkten Duell am Dienstag (17.00 Uhr) fällt in Doha von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/wm-2022-mexiko-polen-im-liveticker/281720'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Mexiko - Polen im Liveticker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREorVDCl0dz6wyzrv6ZStHRLfy4k0O6NdejzzUaG9xGWLi00mVI_6IYrU_tN-dq_mlq52Yw2AR" alt="WM 2022: Mexiko - Polen im Liveticker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das WM-Match zwischen Mexiko und Polen im Liveticker auf PULS 24 und live auf zappn.tv.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/endrunde/gruppe-c/mexico-polen/mexiko-vs-polen-gruppenspiel-heute-im-Liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexiko vs. Polen: Gruppenspiel bei der WM 2022 - Das 0:0 zum ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5w8IOfvz0U1ktbbusf_k9KtoT8n3TDrZcD1dccWfCSHaUXRb8W_yrlcs8jsLv1oubsF8tntNA" alt="Mexiko vs. Polen: Gruppenspiel bei der WM 2022 - Das 0:0 zum ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Gruppe C bei der WM in Katar haben sich Mexiko und Polen um Superstar Robert Lewandowski mit einem torlosen Unentschieden getrennt.</p></div>
            </div>
        </a>
        </Template></>;
}