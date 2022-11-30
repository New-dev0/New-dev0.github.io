import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mario Ferri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mario Ferri"/>
        <meta name="description" content="Trending News about Mario Ferri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mario Ferri</h1>
            <Image width={800} height={500} src="https://i.ds.at/WZhVNQ/rs:fill:1200:600/plain/2022/11/29/ferri.jpg" alt="Mario Ferri"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141338613/mario-ferri-der-superman-mit-den-drei-botschaften'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mario Ferri: Der Superman mit den drei Botschaften</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtonnBFtFOQobahfgH7QJBOjUg3h-MXU-QCbW7JfJ-Xvf_LjGaMMnA8UfoEOJUVHWlFw8iPXS4" alt="Mario Ferri: Der Superman mit den drei Botschaften" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Platzstürmer von Katar ist ein Weltenbummler und Regelbrecher. &quot;Die Welt muss sich verändern&quot;, sagt er.</p></div>
            </div>
        </a><a href='https://www.moment.at/mario-ferri-wm-katar-flitzer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politischer WM-Flitzer in Katar: Wer ist Mario Ferri?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQdGIOXBhTnWddfIQIwLwbXCQvBFHA34-d8dgI8rJOLNlEFqtiRLzZVo0QBxs4bCrTPxEJjGBxg" alt="Politischer WM-Flitzer in Katar: Wer ist Mario Ferri?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein &quot;Flitzer&quot; hat bei der umstrittenen Fußball-WM in Katar politische Botschaften angebracht, die die Veranstalter lieber unterdrückt hätten.</p></div>
            </div>
        </a><a href='https://www.salzburg24.at/sport/fussball/mario-ferri-erster-flitzer-bei-fussball-wm-in-katar-130497313'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mario Ferri: Erster Flitzer bei Fußball-WM in Katar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS--SmFv4vx_KMgqKZnauNE7UrpWY_7Y3HrSb2E5_LcURv0H2pDZ2dgx7zwoKAe4ak0ridempXp" alt="Mario Ferri: Erster Flitzer bei Fußball-WM in Katar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die umstrittene Fußball-WM in Katar hat ihren ersten Flitzer: Die um sich greifende Langeweile beim Spiel zwischen Portugal und Uruguay durchbrach zu Beginn&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6221800/Serientaeter-Mario-Ferri_WMFlitzer-wohlauf_Sie-haben-alles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Flitzer wohlauf: &quot;Sie haben alles verhindert, nur mich nicht&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzaaNvOIBorZyERw8J1zzYJIP2dWh8S09zNVAYMRAVdqSUjOpOnJdoVp1Be3dFQ_gXDrLymx6a" alt="WM-Flitzer wohlauf: &quot;Sie haben alles verhindert, nur mich nicht&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nachdem er im Spiel zwischen Portugal und Uruguay auf das Feld gestürmt war, meldete sich der Italiener Mario Ferri zu Wort. Er sei wohlauf und wolle wieder&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mopo.de/sport/wm2022/politische-statements-beim-portugal-spiel-der-flitzer-ist-selbst-fussball-profi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Regenbogen-Flitzer Mario Ferri meldet sich nach WM-Aufreger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvQ5GtzJltiEBFGihJNOeKqiRQg7haMiVITJZY3Axs6kK4BT6mhjV_m-tfvq4kNrqzCcbsFrb3" alt="Regenbogen-Flitzer Mario Ferri meldet sich nach WM-Aufreger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Flitzer aus dem Spiel zwischen Portugal und Uruguay, Mario Ferri, ist selbst als Fußballer aktiv. Foto: imago/Laci Perenyi.</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/fussball/wm-2022/netzreaktionen-flitzer_id_180413256.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Ganz viel Liebe“ für den „wahren Superman“ - Lobeshymnen auf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNg7hRq1DRBMKwudwkJisd2TkOXHK4cSWrwW-LhOcsONCn3437y1Tzg2A_c_pis3kGI7eUnuOd" alt="„Ganz viel Liebe“ für den „wahren Superman“ - Lobeshymnen auf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Flitzer Mario Ferri Falco für ein Statement. Der Italiener sprintete in der 53. Minute des Portugal-Spiels gegen Uruguay mit einer Regenbogenfahne sowie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.waz.de/sport/warum-flitzer-mario-ferri-bei-der-wm-in-katar-mut-beweist-id237032759.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warum Flitzer Mario Ferri bei der WM in Katar Mut beweist</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnHu2wFqpWAmBYwtSbUoLtdHT-y3V203ghBO2s9jAJRBe8NPL5v_7lJ71Wna4LgOToxZX4o9-h" alt="Warum Flitzer Mario Ferri bei der WM in Katar Mut beweist" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flitzer sind bei großen Turnieren oft ein Ärgernis. Der Fall Mario Ferri ist anders - er lief für einen guten Zweck. Ein Kommentar.</p></div>
            </div>
        </a>
        </Template></>;
}