import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nancy Faeser</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nancy Faeser"/>
        <meta name="description" content="Trending News about Nancy Faeser" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nancy Faeser</h1>
            <Image width={800} height={500} src="https://media1.faz.net/ppmedia/aktuell/sport/965944172/1.8483173/facebook_teaser/innenministerin-nancy-faeser.jpg" alt="Nancy Faeser"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/sport/fussball-wm/sportpolitik/one-love-nancy-faeser-bei-fussball-wm-in-qatar-mit-kapitaens-binde-18372572.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Faeser mit Armbinde im Stadion: Wird aus „One Love“ jetzt ein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsgWDGOvAZuuY8YkG_DTHD6--w15VGMXfTum_R84rgHz-HMfKfbnjpGv84UWAtjYpO4Owyuw-k" alt="Faeser mit Armbinde im Stadion: Wird aus „One Love“ jetzt ein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die deutsche Innenministerin Nancy Faeser trägt in Qatar beim deutschen WM-Auftaktspiel auf der Tribüne die von der FIFA auf dem Rasen...</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/wm-2022/wm-2022--nancy-faeser-traegt--one-love--armbinde-bei-deutschlandspiel-32941022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Nancy Faeser trägt &quot;One Love&quot;-Armbinde bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_q5DYks4pxsuunup4p94MXTPJMOn1tE7Gv2TCx9RO81Vhv_VYBmLaGVKBrGVYnu9FrH27iQV5" alt="WM 2022: Nancy Faeser trägt &quot;One Love&quot;-Armbinde bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bundesinnenministerin Nancy Faeser trägt beim WM-SPiel der deutschen Nationalmannschaft gegen Japan die umstrittene &quot;One Love&quot;-Armbinde.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/politik/fussball-wm-faeser-one-love-katar-2022-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Faeser mit &quot;One Love&quot;-Binde im Stadion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTOrMlZcVHDY-qDTSZ-p1llMh62Hx3xHWdx3ha_GfkzfNHqv_NB_VacoliA8tc9CYLrhzoOUaVk" alt="Faeser mit &quot;One Love&quot;-Binde im Stadion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit &quot;One Love-Binde&quot; auf der Tribüne: Bundesinnenministerin Nancy Faeser hat bei der Fußball-WM in Katar ein Zeichen für Menschenrechte gesetzt.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2211/News/dfb-team-aussenministerin-nancy-faeser-traegt-one-love-binde-bei-deutschland-spiel.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DFB-Team: Innenministerin Nancy Faeser trägt &quot;One Love&quot;-Binde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQU9GUWIe6jImRx6_OSUPIwrSrVFroF5FI4nJ91vvnySP6RoSblEZtJ60jwNziDVrToh22qx6Xl" alt="DFB-Team: Innenministerin Nancy Faeser trägt &quot;One Love&quot;-Binde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicht nur die deutsche Nationalmannschaft hat beim WM-Spiel des DFB-Teams gegen Japan ein Zeichen für Meinungsfreiheit gesetzt .</p></div>
            </div>
        </a><a href='https://www.mopo.de/sport/wm2022/bei-deutschland-auftakt-nancy-faeser-traegt-one-love-binde-im-stadion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neben Infantino: Ministerin Nancy Faeser trägt bei WM „One Love ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRE-WCa2KXE1OMKvXpOOJ_bmM76etI_9DrvTlgfoQaBYtMxHqaDWqVtaJC0VVj-xqNzLofxQT4t" alt="Neben Infantino: Ministerin Nancy Faeser trägt bei WM „One Love ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bundesinnenministerin Nancy Faeser hat beim WM-Spiel der deutschen Nationalmannschaft gegen Japan die für DFB-Kapitän Manuel Neuer verbotene „One&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100085512/innenministerin-nancy-faeser-mit-one-love-binde-rettung-in-letzter-sekunde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Innenministerin Nancy Faeser mit &quot;One Love&quot;-Binde: Rettung in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSb9l26usDMIycXxQRXRl3wdNKB6iZdG5ldZ9v4_uwxHAafrKxLfUD3XCzXefZDbFOz81rQowV6" alt="Innenministerin Nancy Faeser mit &quot;One Love&quot;-Binde: Rettung in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nancy Faeser trägt in Katar die &quot;One Love&quot;-Binde. Eine simple Geste, die aber bitter notwendig ist: Nicht mit uns.</p></div>
            </div>
        </a>
        </Template></>;
}