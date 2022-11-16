import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leopold Museum</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leopold Museum"/>
        <meta name="description" content="Trending News about Leopold Museum" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leopold Museum</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470116122_BLD_Online-1.jpg" alt="Leopold Museum"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/klimt-werk-im-leopold-museum-von-aktivisten-ueberschuettet-3/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klimt-Werk im Leopold Museum von Aktivisten überschüttet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXr6KMAMvd0EaS-MXeH0KoeIgfUCF2cWxQpGLQSmAirqIazA56ttkIFaYz5d1hLEx2KVQ9i7ni" alt="Klimt-Werk im Leopold Museum von Aktivisten überschüttet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Klimaaktivisten der Gruppe &quot;Letzte Generation&quot; haben Dienstagvormittag im Wiener Leopold Museum das Gemälde &quot;Tod und Leben&quot; von Gustav Klimt mit schwarzer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6215619/aktivisten-schuetten-klimt-gemaelde-im-wiener-leopold-museum-an'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aktivisten schütten Klimt-Gemälde im Wiener Leopold Museum an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThQE7G6YoEggeC7apcKfQZYt52bB5pUzfdfd6zrw7IPN1-BjKWCDp39zPb1_tl_2rWrnGteNzO" alt="Aktivisten schütten Klimt-Gemälde im Wiener Leopold Museum an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Klimt-Gemälde „Tod und Leben“ wurde Ziel einer Protestaktion der sogenannten Letzten Generation: Sie schütteten „ungiftiges Fake-Öl“ auf das Bild und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140852320/klimaaktivisten-schuetteten-oel-auf-klimt-bild-im-leopold-museum'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klimaaktivisten schütteten Öl auf Klimt-Bild im Leopold-Museum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHY0WDEfn-PAAYC1wIwpVLGFkAsA-Bpiwnq-4WtmR_fG75zUwygSE8KKAoV5UOUVYwwZR1vDT8" alt="Klimaaktivisten schütteten Öl auf Klimt-Bild im Leopold-Museum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Gemälde war durch Sicherheitsglas geschützt. Die Aktivisten protestierten gegen neue Öl- und Gasbohrungen.</p></div>
            </div>
        </a><a href='https://www.salzburg24.at/news/oesterreich/klimt-bild-im-leopold-museum-von-klima-aktivisten-mit-oel-ueberschuettet-129844081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klimt-Bild im Leopold Museum von Klima-Aktivisten mit Öl überschüttet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXfZy6D5faWgJQJa0mIwyMJi99O4Z8ntKch1FjzFnvEOhIcvtKmNyucsOpaO3YkeL6mQZxchqN" alt="Klimt-Bild im Leopold Museum von Klima-Aktivisten mit Öl überschüttet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Gemälde &quot;Tod und Leben&quot; von Gustav Klimt im Wiener Leopold Museum wurde heute von Klima-Aktivsten mit Öl überschüttet. Mit der Aktion der Gruppe &quot;Letzte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221115_OTS0147/klimt-meisterwerk-tod-und-leben-im-leopold-museum-von-aktivistinnen-der-letzten-generation-attackiert-bild'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klimt-Meisterwerk &quot;Tod und Leben&quot; im Leopold Museum von Aktivist ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4BNniOPV9KtT_RdyjoPGm_m8m29ojp1ctM6vB0eaS15bniQzX7AkjOXYVN_tqZ4QanAN6-JVh" alt="Klimt-Meisterwerk &quot;Tod und Leben&quot; im Leopold Museum von Aktivist ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Anliegen von Klimaaktivist*innen wie jenen der &quot;Letzten Generation&quot; sind berechtigt, aber der Angriff auf Kunstwerke ist definitiv der falsche Weg um&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}