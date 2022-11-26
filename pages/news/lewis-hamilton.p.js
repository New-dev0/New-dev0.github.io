import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lewis Hamilton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lewis Hamilton"/>
        <meta name="description" content="Trending News about Lewis Hamilton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lewis Hamilton</h1>
            <Image width={800} height={500} src="https://img.blick.ch/incoming/18082692-v2-316444581-667070448338511-518081381481184786-n.jpg?imwidth=1000&ratio=16_9&x=210&y=497&width=750&height=422" alt="Lewis Hamilton"/>
            <h3>Recent News</h3>
            <a href='https://www.blick.ch/sport/formel1/kann-nicht-glauben-dass-sie-nicht-mehr-da-ist-emotionaler-hamilton-trauert-um-fuenfjaehrige-isla-id18082975.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Lewis Hamilton trauert um fünfjährigen Fan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkg9si-Nh6gAK1z2eYjCCafusHDa7LyNTXGfIRPSJU6bVXr7_HDbLe63kyTPpEn4vtst0yUxvH" alt="Formel 1: Lewis Hamilton trauert um fünfjährigen Fan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Isla beeindruckte Lewis Hamilton mit ihrer Stärke. Nun trauert er um seinen kleinen Fan. Die Fünfjährige hat den Kampf gegen ihre unheilbare Krankheit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport-total.com/formel-1/news/mercedes-zwischenfall-mit-sainz-nicht-schuld-an-hamiltons-ausfall-22112402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercedes: Zwischenfall mit Sainz nicht schuld an Hamiltons Ausfall</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYoznTef_Vdud-Q1rNowKLrQVcs339YVXYwc8KD7KA3wvjUd2Xt8sFwsgfp6xgsl6dO1cLkmBq" alt="Mercedes: Zwischenfall mit Sainz nicht schuld an Hamiltons Ausfall" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mercedes-Chefstratege James Vowles erklärt, warum man Lewis Hamilton in Abu Dhabi nur einmal stoppte und wie sehr sein Auto tatsächlich beschädigt war.</p></div>
            </div>
        </a>
        </Template></>;
}