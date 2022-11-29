import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mesut Özil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mesut Özil"/>
        <meta name="description" content="Trending News about Mesut Özil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mesut Özil</h1>
            <Image width={800} height={500} src="https://cdn.prod.www.spiegel.de/images/46a0845f-7f69-4e7c-8ef3-844a0b0f9674_w1280_r1.77_fpx33.32_fpy49.98.jpg" alt="Mesut Özil"/>
            <h3>Recent News</h3>
            <a href='https://www.spiegel.de/sport/fussball/wm-2022-was-steckt-hinter-den-mesut-oezil-bildern-im-al-bait-stadion-a-b545ac80-1290-4626-9fb0-4e5c338169ca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bei deutschem WM-Spiel: Was steckt hinter den Özil-Bildern im Al ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTa1De1DoRDjLQ7wFg_JIvF-sis7MPmCYADP0poSyOYVOpTQ5AqeqJqczRkAwaCk7xz54zfQrNk" alt="Bei deutschem WM-Spiel: Was steckt hinter den Özil-Bildern im Al ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während der deutschen Partie gegen Spanien hielten Zuschauer Fotos des früheren Nationalspielers Mesut Özil hoch und imitierten die Mund-zu-Geste der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/sport/fussball-wm-zuschauer-protest-oezil-dfb-katar-2022-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katar: Stadionbesucher protestieren gegen DFB</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTE6OoZbGojD-4mfBQCzcaqAua95hP69YRgwbjCDH29vqb4SL65zmcIc66wu1bpTraLm-kn9PgZ" alt="Katar: Stadionbesucher protestieren gegen DFB" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Unentschieden zwischen Deutschland und Spanien bei der Katar-WM ist im Stadion mit Özil-Bildern offenbar gegen den DFB protestiert worden.</p></div>
            </div>
        </a><a href='https://www.ran.de/fussball/weltmeisterschaft/wm-news/katar-spott-deutschland-dfb-team-plakat-mesut-oezil-kuriositaet-162954'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Plakate von Mesut Özil - Katarer verspotten Deutschland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_uPHN2Gg_JH2KjGAdIKtITK2ZzGdfoiH67aSNbO9PTQRZG_QxcqeWi4e0deIU7uvUxjBr1Hw0" alt="WM 2022: Plakate von Mesut Özil - Katarer verspotten Deutschland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei der WM 2022 haben sich einige Katarer über Deutschland lustig gemacht - mit Plakaten des 2018 zurückgetretenen Nationalspielers Mesut Özil.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-katar-zuschauer-halten-ozil-plakate-wahrend-dfb-spiel-hoch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 Katar: Zuschauer halten Özil-Plakate während DFB-Spiel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcj6uv5AtKHFzYaCrgNb2QlQ83hv0T2KAM2V4a70At_phCevCe9UMdVXEcrz3tPoc-M6xscyID" alt="WM 2022 Katar: Zuschauer halten Özil-Plakate während DFB-Spiel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während des DFB-Spiels gegen Spanien zeigen einige Zuschauer Plakate mit dem Konterfei von Ex-Nationalspieler Mesut Özil. Dabei halten sie sich die Münder&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/fussball-wm/Katar-Sender-erklaert-Protest-mit-Ozil-Bildern-article23748626.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Westliche Doppelmoral&quot;: Katar-Sender erklärt Protest mit Özil-Bildern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb_5TF7ZoDCERsJ-PddPeqmRCE3Bl-6MXxXwweofpIBsxwnz4Vwpl1DNodJpOerhbj14dM4xHz" alt="&quot;Westliche Doppelmoral&quot;: Katar-Sender erklärt Protest mit Özil-Bildern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bizarre Szene bei der Wüsten-WM: Auf den Rängen halten Zuschauer während des Deutschlandspiels gegen Spanien Bilder vom ehemaligen DFB-Offensivmann Mesut&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/sport/fussball-wm-katar-mesut-oezil-schilder-1.5704953'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM: Özil-Schilder im Stadion von al-Chaur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhQzql-ASS6OiDlyXYDECbxD7vH8IqokrtSXI5rZlc6zDKNpSAMaFjoF9unghS4jjCMefn1ycg" alt="Fußball-WM: Özil-Schilder im Stadion von al-Chaur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar: Vielen Katarern gilt der Umgang mit Mesut Özil als Beleg für die westliche Doppelmoral. Daran ist manches wahr - und vieles falsch.</p></div>
            </div>
        </a>
        </Template></>;
}