import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tina Turner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tina Turner"/>
        <meta name="description" content="Trending News about Tina Turner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tina Turner</h1>
            <Image width={800} height={500} src="https://orf.at/mojo/1_4_1/storyserver//news/common/images/og-fallback-news.png" alt="Tina Turner"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3295887/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schweizer Gemeinde senkt wegen Tina Turner Steuern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5exa1Fk9WFThOlmLN21CviwHsMfemSawVtCNeVzcsfH-AVrPuJNqRpN98_dq2oEacFGKYXgU9" alt="Schweizer Gemeinde senkt wegen Tina Turner Steuern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tina Turner beschert den Einwohnerinnen und Einwohnern der Schweizer Gemeinde Stäfa am Zürichsee ein Weihnachtsgeschenk: Weil der Weltstar dort im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blick.ch/politik/verfruehtes-weihnachtsgeschenk-wegen-tina-turner-kann-staefa-steuern-senken-id18100637.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner beschert Stäfa tiefere Steuern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-bEoADNVsmf68k7nuiPOQ0zhWF7EGk6lG6t7tisvBxohEFnaJoio8tRPLsw9ugz1Ev_h9FvoR" alt="Tina Turner beschert Stäfa tiefere Steuern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rocksängerin Tina Turner beschert den Einwohnern von Stäfa ZH ein schönes Weihnachtsgeschenk: Wegen des Weltstars, der in der Gemeinde ein Anwesen gekauft&nbsp;...</p></div>
            </div>
        </a><a href='https://www.handelszeitung.ch/panorama/zuzug-von-us-rockdiva-wieso-stafa-dank-musikstar-tina-turner-die-steuern-senken-kann-551275'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner rockt die Gemeindekasse von Stäfa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIkR1OScH9l9Ez4ofku-vWkXg749DlaZVyA_LscVMhWPnTnEFhP-05qObnAqeaMdJauT3m9ryV" alt="Tina Turner rockt die Gemeindekasse von Stäfa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Rock-Queen hat am Zürichsee ein Anwesen gekauft – was Stäfa ausserordentlich hohe Steuererträge beschert. Die Bevölkerung profitiert.</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/goldkuesten-gemeinde-kann-dank-tina-turner-die-steuern-senken-259111467802'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stäfa senkt wegen Tina Turner die Steuern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3EvB692G5uDSg1OJiMQaq7m2ITRLUAlpfi9rGwpMQQQ8VoMIbgyZNGmzGBWB9bR-tRJ2CPWHw" alt="Stäfa senkt wegen Tina Turner die Steuern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Steuern in der Gemeinde werden von 80 auf 78 Prozent gesenkt. Das dürften sie wohl dem neuen Wochenendzuhause von Tina Turner und ihrem Mann Erwin Bach zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bluewin.ch/de/entertainment/tina-turner-beschert-staefa-tiefere-steuern-1499854.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner beschert Stäfnern tiefere Steuern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdeeQTIbcc8S8biTMeEnHSTJKvpLxtmA-5FR4ASDu_3K3ev3CUOgMtBQ2uu_qGVOICv6LAR-Lb" alt="Tina Turner beschert Stäfnern tiefere Steuern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Einwohner*innen von Stäfa ZH erhalten ein unerwartetes Weihnachtsgeschenk: Sie zahlen nächstes Jahr weniger Steuern. Zu verdanken haben sie das&nbsp;...</p></div>
            </div>
        </a><a href='https://zueriost.ch/gesellschaft/2022-11-30/tina-turner-beschert-staefa-tiefere-steuern'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner beschert Stäfa tiefere Steuern</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR212KnW-83u6KMGklK7MJ8fHaKtNNoTI21kmB3Am8_YURJvEJBOuqTkgQ6RX3D9gW6gZB1h3Wk" alt="Tina Turner beschert Stäfa tiefere Steuern" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Der Teufel scheisst immer auf den grössten Haufen», heisst es im Volksmund salopp – oder, um sich gewählter mit de.</p></div>
            </div>
        </a>
        </Template></>;
}