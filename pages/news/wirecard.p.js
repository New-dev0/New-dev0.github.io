import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wirecard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wirecard"/>
        <meta name="description" content="Trending News about Wirecard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wirecard</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/12/88010011370542714_BLD_Online-2.jpg" alt="Wirecard"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/wirecard-prozess-in-muenchen-begonnen-3/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wirecard-Prozess in München begonnen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqiASqUQ2xAdXqeFRIkBOCoUy2fpLlIHLGdF7sOZBE20eH1awU5Jzi7UveUbJHqVTE8XtNCMER" alt="Wirecard-Prozess in München begonnen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Staatsanwaltschaft wirft dem seit zweieinhalb Jahren in Untersuchungshaft sitzenden Braun vor, mit seinen Komplizen im Vorstand, weiteren Managern des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/wdhroundup-auftakt-im-wirecard-prozess-groesster-betrugsfall-seit-1945-530389'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WDH/ROUNDUP: Auftakt im Wirecard-Prozess - größter Betrugsfall ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="WDH/ROUNDUP: Auftakt im Wirecard-Prozess - größter Betrugsfall ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wiederholung: Im 3. und 9. Absatz &quot;Staatsanwalt&quot; statt &quot;Oberstaatsanwalt&quot;.) MÜNCHEN (dpa-AFX) - Zweieinhalb Jahre nach der Wirecard-Pleite hat der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141630101/anklage-in-wirecard-prozess-drei-milliarden-euro-schaden'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anklage in Wirecard-Prozess: Drei Milliarden Euro Schaden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIOwEYKkwYKueseJbQivfC88TpoCsgt07RvCbmGiaAVY2P4aKnbbMhpexwpXzSm3jUr3b8K_xu" alt="Anklage in Wirecard-Prozess: Drei Milliarden Euro Schaden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dem ehemaligen Wirecard-Vorstandschef Markus Braun wird vorgeworfen, Bilanzen gefälscht zu haben und Kreditgeber um mehr als drei Milliarden Euro betrogen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sn.at/wirtschaft/welt/beim-wirecard-prozess-stehen-oesterreicher-im-mittelpunkt-130939441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beim Wirecard-Prozess stehen Österreicher im Mittelpunkt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTC1IGUkocYpK7HmqgjPOtZkaxD17XIhv_d7tpvbSuKlEhNqkVTi1tLULTFx6HXByeUEqZ-dDFA" alt="Beim Wirecard-Prozess stehen Österreicher im Mittelpunkt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit 3,1 Milliarden Euro angeklagtem Schaden begann der bisher größte Betrugsprozess der deutschen Nachkriegsgeschichte.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/wirtschaft/6225079/Anklage-sieht-MilliardenBetrug_Mammutprozess-gestartet_Jetzt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mammutprozess gestartet: Jetzt steht Ex-Wirecard-Boss Braun vor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvGC5IKge8_2FD4dQ-ESK9gi4OQAogKqtfU7t8v_qvkZExZWNN0WTni_bFYQwqdektbqW1TYd5" alt="Mammutprozess gestartet: Jetzt steht Ex-Wirecard-Boss Braun vor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Startschuss in München gefallen: Einer der größten Wirtschaftsskandale der deutschen Geschichte ist aufzuklären – Beweisaufnahme wird umfangreich und&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/wirtschaft/drei-milliarden-schaden-wirecard-prozess-in-muenchen-gestartet/402252333'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Drei Milliarden Schaden: Wirecard-Prozess in München gestartet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWJQWmhzqzMo5ToMti9AU_A6kmbNh5MlE3jjp3oOZYwxAl46-FE084Q4cEifyWSi0QzM4kCda-" alt="Drei Milliarden Schaden: Wirecard-Prozess in München gestartet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Drei frühere Manager, darunter Ex-Chef Braun, sind angeklagt. Mutmaßliche weitere Schlüsselfigur, Marsalek, ist weiterhin flüchtig.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/wirtschaft/de-masi-duffy-wirecard-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De Masi: Wirecard war &quot;Geldwäscheanlage&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSj-tFzV06wRAy0b2AHsJiLiUGx2jM1DHDLp5kCINPEufKOLLr74Om4ke3a-7Hhy8kwXIbWIXIE" alt="De Masi: Wirecard war &quot;Geldwäscheanlage&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie konnte es zum Wirecard-Skandal kommen? Dazu geben die Experten Fabio De Masi und Konrad Duffy Einschätzungen im ZDF.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/finanzen/bislang-sind-wirecard-anleger-leer-ausgegangen-18519697.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viele Prozesse: Bislang sind Wirecard-Anleger leer ausgegangen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmBxSnAm0VRB6v03OgzENzXduTgkeITjaXYIyJHQms0OMopWRNFW0jNws6lw5vHYc9M0UBylyq" alt="Viele Prozesse: Bislang sind Wirecard-Anleger leer ausgegangen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An verschiedenen Landgerichten wurde klargestellt, dass aus der Insolvenzmasse nicht viel zu holen ist. Viele Investoren setzen auf eine...</p></div>
            </div>
        </a>
        </Template></>;
}