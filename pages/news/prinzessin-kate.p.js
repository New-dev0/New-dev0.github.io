import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prinzessin Kate</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prinzessin Kate"/>
        <meta name="description" content="Trending News about Prinzessin Kate" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prinzessin Kate</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2873081/v8660d2/og_image.jpg" alt="Prinzessin Kate"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2873087'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ungläubiges Staunen: - Prinzessin Kate kommt im Billig-Miet-Kleid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1VLOosRIxziU_3n5_obzmyOUA-_eAFttuy4Kb_x5YNhKT7sxd9fPgizzpf3eiFfHLZGUbo7qw" alt="Ungläubiges Staunen: - Prinzessin Kate kommt im Billig-Miet-Kleid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es war ein Geheimnis bis zum Schluss, das Kleid, mit dem Kate, die Prinzessin von Wales, jetzt alle bei der Umweltpreisverleihung „The Earthshot ...</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/besondere-hommage-prinzessin-kate-traegt-prinzessin-dianas-kette-5019348.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Besondere Hommage! Prinzessin Kate trägt Prinzessin Dianas Kette</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBM0jsq_G_QeA4ay9GtBoPwZl24_z-4iw4-PSi-IVZ8t-tGwiqQ6VHM0qWvo8Xi9wQw5dz8X1b" alt="Besondere Hommage! Prinzessin Kate trägt Prinzessin Dianas Kette" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prinzessin Kate trug bei den Earthshot Prize Awards in Boston eine besondere Halskette, die ihrer verstorbenen Schwiegermutter Prinzessin Diana gehörte.</p></div>
            </div>
        </a><a href='https://www.bunte.de/royals/britisches-koenigshaus/prinzessin-kate-vor-zehn-jahren-begann-ihr-familienglueck.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate: Vor zehn Jahren begann ihr Familienglück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhoQi_phX97EdOC_ydKa-CTlW3L_6Yy1XiwSCSepfq565XzOTeQ9LMWK_5S0Guk3Ln1-1UnKXv" alt="Prinzessin Kate: Vor zehn Jahren begann ihr Familienglück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor zehn Jahren verkündeten Prinz William und Prinzessin Kate, dass sie zum ersten Mal Eltern werden. Inzwischen ist der royale Nachwuchs richtig groß&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stuttgarter-nachrichten.de/inhalt.prinzessin-kate-das-sind-ihre-preiswertesten-looks.8ccbed91-1b2b-49f1-b36e-f9c9b360fbd4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate - Das sind ihre preiswertesten Looks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTq8duOKwztJWNQ8uSE6fDZ_RCIdPZj0T7LlG-cfx6uqN3KatgXDHypWgavXNRE9MRa_VnYtba5" alt="Prinzessin Kate - Das sind ihre preiswertesten Looks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zara, Mango, Topshop – Prinzessin Kate trägt nicht nur Mode vom Laufsteg, sondern oft auch von der Stange. Wenn sie günstige Label trägt, machen die das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/royals/id_100092006/prinzessin-kates-engste-mitarbeiterin-hat-gekuendigt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kates engste Mitarbeiterin hat gekündigt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLN7hGahPis1sAjPZQttDCu6e0PXblTsjYnv0ruaJc6_lu_V94_n41c-7AuLSghDjNiKC3zONt" alt="Prinzessin Kates engste Mitarbeiterin hat gekündigt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate und William touren durch die USA. Wie sich nun herausstellt, ist es für das Paar eine Reise ohne eine langjährige Assistentin. Denn die hat kurz zuvor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bunte.de/royals/britisches-koenigshaus/prinzessin-kate-punktet-im-schnaeppchen-look-und-erinnert-an-diana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate punktet im Schnäppchen-Look – und erinnert an ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUQlNYb60orHo5vWGHrNXa0AQE549Lou19DlCJqPn9ZtN9ZylzBkJOVz26peRmYjOJ-iJVj8bd" alt="Prinzessin Kate punktet im Schnäppchen-Look – und erinnert an ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In einem neongrünen Schlitz-Kleid und mit den Juwelen ihrer Schwiegermutter Diana (†) legte Prinzessin Kate in den USA nun einen echten Wow-Auftritt hin.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6223477/prinzessin-kate-traegt-smaragd-kette-von-lady-diana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate trägt Smaragd-Kette von Lady Diana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTw98NNUhLSMAriYW_ZnoIIjie3SB4v0rpHbfWUjT8HjISYuCvaP1V_lbChl7_vIBxFQI1hSARF" alt="Prinzessin Kate trägt Smaragd-Kette von Lady Diana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dass Kate ausgerechnet in den USA zu einem Schmuckstück ihrer verstorbenen Schwiegermutter greift, wird von einigen als Affront gegen Harry und Meghan&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/leben/mode-beauty/prinzessin-kate-zeigt-sich-glatt-gebuegelt-und-mit-kette-von-lady-di/402247095'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate zeigt sich glatt gebügelt und mit Kette von Lady Di</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTquw6RDdy_-4kmHAt1liHC4YXmwrjKxq0SPo3ez4pYKbk90XjASTPao4935wx-GnmZ9njSMh2l" alt="Prinzessin Kate zeigt sich glatt gebügelt und mit Kette von Lady Di" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate trug die Smaragd-Kette ihrer Schwiegermutter zu einem grünen Kleid bei einer Gala in den USA.</p></div>
            </div>
        </a><a href='https://www.stern.de/kultur/prinz-william-und-prinzessin-kate--hingucker-paar-der-earthshot-preisverleihung-32973306.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prinzessin Kate glänzt bei Earthshot-Gala in Boston im geliehenen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKjbZ-zx7kRLVN-_YtJZ94EwguVREVwX8O4s5y31eJcGNtXykuPLEg7FkX-SKpRb5asYOmqZWU" alt="Prinzessin Kate glänzt bei Earthshot-Gala in Boston im geliehenen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prinz William und Prinzessin Kate krönten ihren Boston-Besuch mit der glamourösen Earthshot-Preisverleihung. Zu der Gala erschienen die beiden Royals in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/12/04/gewusst-dieses-outfit-muss-prinzessin-kate-immer-mitnehmen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gewusst? Dieses Outfit muss Prinzessin Kate immer mitnehmen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRN8oA4aorBciSa3Z5Sg81SSDbexaHGFQcKMJ2r0LphpnIbZp4xn5HSp5H5DXhaAVqaj9ydd1J4" alt="Gewusst? Dieses Outfit muss Prinzessin Kate immer mitnehmen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Outfit steht wohl immer auf Prinzessin Kates (40) Packliste! Das Leben an der Seite von Prinz William (40) beinhaltet nicht nur diverse offizielle&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}