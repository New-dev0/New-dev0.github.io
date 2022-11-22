import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erdbeben Indonesien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erdbeben Indonesien"/>
        <meta name="description" content="Trending News about Erdbeben Indonesien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erdbeben Indonesien</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470221708_BLD_Online.jpg" alt="Erdbeben Indonesien"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/mehr-als-40-tote-bei-erdbeben-in-indonesien/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehr als 40 Tote bei Erdbeben in Indonesien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQucB54g7hcHjIZm4nVawIi-Vx6pkOzPyuVszYBG3GdKk0UOpCqgMLdFjta2raY4Civ0_RTw7B3" alt="Mehr als 40 Tote bei Erdbeben in Indonesien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bisher gebe es 44 Todesopfer, sagte der Sprecher der Stadtverwaltung der am stärksten betroffenen Stadt Cianjur der Nachrichtenagentur AFP. &quot;Hunderte,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6218366/ueber-160-tote-nach-erdbeben-in-indonesien'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Über 160 Tote nach Erdbeben in Indonesien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYVuqdXprIoAPl6Cr_TUhtoDnsxZiLiRqwG5SKiW3BIualr3Nt8o8Mjh-shm1UGDQphN4qHPcE" alt="Über 160 Tote nach Erdbeben in Indonesien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Über 160 Tote und um die 700 Verletzte: Indonesien wurde am Montag von einem schweren Erdbeben heimgesucht.</p></div>
            </div>
        </a><a href='https://www.sn.at/panorama/international/erdbeben-in-indonesien-62-tote-und-hunderte-verletzte-bei-erdbeben-in-indonesien-130117756'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erdbeben in Indonesien: 62 Tote und Hunderte Verletzte bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnOsLQgOD0YcDMsOgkBrAox98dL0PEbs6CUWXIb0ycXhHkrbqklMGp2E0M9GGzxLEigO2k_yqK" alt="Erdbeben in Indonesien: 62 Tote und Hunderte Verletzte bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei einem Erdbeben der Stärke 5,6 sind am Montag auf der indonesischen Insel Java mindestens 62 Menschen ums Leben gekommen. Das teilte der Gemeindechef der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/panorama/erdbeben-indonesien-tote-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mindestens 162 Tote und Hunderte Verletzte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQg80aHOZzEQD3g5Ueo8_rkk-LQb_2Pw-8ZCjst1o_MA_WlJ5w-Max3jabKEgwSh6JFreQpdlD9" alt="Mindestens 162 Tote und Hunderte Verletzte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Erdbeben der Stärke 5,6 hat die indonesische Insel Java erschüttert und große Schäden verursacht. Mehr als 160 Menschen starben, Hunderte wurden verletzt.</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/ausland/asien/indonesien-erdbeben-117.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erdbeben in Indonesien: Zahl der Toten steigt auf mindestens 162</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtqeQowNmRyP7G6eCQENlbIiYC79yhopUX6e8S1yltgViLolSdMSiehiDYBB2NpFlZgfpruInE" alt="Erdbeben in Indonesien: Zahl der Toten steigt auf mindestens 162" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach einem Erdbeben auf der indonesischen Insel Java ist die Zahl der Toten weiter gestiegen. Nach Angaben des Gouverneurs gibt es zudem Hunderte Verletzte.</p></div>
            </div>
        </a>
        </Template></>;
}