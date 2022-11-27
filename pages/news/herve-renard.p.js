import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Herve Renard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Herve Renard"/>
        <meta name="description" content="Trending News about Herve Renard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Herve Renard</h1>
            <Image width={800} height={500} src="https://media1.faz.net/ppmedia/aktuell/sport/282966670/1.8488511/facebook_teaser/fussball-ist-magisch-sagt.jpg" alt="Herve Renard"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/sport/fussball-wm/fussball-wm-saudi-arabiens-trainer-herve-renard-im-fokus-18488512.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trainer von Saudi-Arabien: Hervé Renard ist der Spezialist für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKeOuS7uolxbn82lFF_h0y_ORnzFiXdPcVVGy0eHuxjamSpQPLbrJa63OaKkzEVrhDSjjL1Umh" alt="Trainer von Saudi-Arabien: Hervé Renard ist der Spezialist für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er war Gebäudereiniger und wurde als Trainer Sambias zum Helden einer ganzen Nation. Nun arbeitet Hervé Renard mit Saudi-Arabien an der...</p></div>
            </div>
        </a><a href='https://www.nd-aktuell.de/artikel/1168823.fussball-wm-in-katar-herve-renard-ist-vom-glueck-gekuesst.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hervé Renard ist vom Glück geküsst</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGH6VVIWv2oMaT3Ja6WZ_i0uSS5kB9Pq2bE5fmhXFfVDJ8siazbQ0Zq9V9Wv26yjjW1MYnwAex" alt="Hervé Renard ist vom Glück geküsst" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Trainer ist ein Spezialist für Außenseitererfolge. Sein Sieg mit den Saudis gegen Argentinien bewegt sogar die Weltpolitik. Von Daniel Theweleit, Doha&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/fussball/fifa-wm-2022/wm-2022-saudi-arabien-herve-renard-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Globetrotter Renard auch mit Saudi-Arabien auf Erfolgskurs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0EzoySpKhhjXJeHobahFB76zrGdLmKAGV28aEFQLgZ4A9iG89PO_19842kGmXuu765FkdZi3x" alt="Globetrotter Renard auch mit Saudi-Arabien auf Erfolgskurs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der französische Trainer Hervé Renard wird in Afrika als &quot;weißer Zauberer&quot; verehrt, seit er Sambia und die Elfenbeinküste zum Afrika-Cup-Titel führte.</p></div>
            </div>
        </a><a href='https://www.wolfenbuetteler-zeitung.de/sport/article237006757/Herve-Renard-bei-der-WM-Blonder-Zauberer-fuer-Saudi-Arabien.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hervé Renard bei der WM: Blonder Zauberer für Saudi-Arabien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDG2UqKf2s1rvxyju3UaF8C_Tec2TKIDTFezOfBi6qRgHUd41wDn6-WlTIJF8VPACitN1bgi5-" alt="Hervé Renard bei der WM: Blonder Zauberer für Saudi-Arabien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WM Inside - Der Experten-Vodcast: DFB-Fehlstart gegen Japan. Nach dem misslungenen WM-Auftakt gegen Japan spricht Weltmeisterin Linda Bresonik im&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}