import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Biathlon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Biathlon"/>
        <meta name="description" content="Trending News about Biathlon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Biathlon</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/7e9ce66b-e141-4838-b7ef-575c9993c6b2/1200x630" alt="Biathlon"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/wintersport/biathlon/2022/12/magisches-biathlon-comeback-das-marchen-der-lisa-theresa-hauser'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magisches Biathlon-Comeback! Das Märchen der Lisa Theresa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpxWFyqSpDf3pxut3_2xX3rPAx35rZo1siMbmEg4mpTywnPXVQzcmLcoc_S4BrUjRkih1LPsVZ" alt="Magisches Biathlon-Comeback! Das Märchen der Lisa Theresa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das erste Weltcup-Woche der Biathlon-Saison ist geprägt von einigen Überraschungen. Für eine Österreicherin läuft es überraschend gut, obwohl hinter ihr&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2873855'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vor Heimweltcup - Biathlon-Herren betreiben Schadensbegrenzung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDecLVEl5mBlLEWPe_3GlsnUzEHzr3amewW7khg4EwVndDbLxlbjq8m6OhgEGwlYB6BNj21wtN" alt="Vor Heimweltcup - Biathlon-Herren betreiben Schadensbegrenzung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die österreichischen Biathleten haben im letzten Rennen vor dem Heimweltcup in Hochfilzen Schadensbegrenzung betrieben. Nach dem schwachen Sprint in ...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/wintersport/2212/Artikel/biathlon-verfolgung-der-frauen-in-kontiolahti-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutsche Biathletinnen in der Verfolgung ohne Chance - Biathlon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSop2JXTKkUs5FCHS8L4aHB0pyPdtWRg2SJkNx2pzNGDIMkwmOc0YIJJ5EKGhqKUXrTk7XXU1aM" alt="Deutsche Biathletinnen in der Verfolgung ohne Chance - Biathlon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Abschluss des Biathlon-Weltcups im finnischen Kontiolahti gab es für die DSV-Frauen nichts zu holen. Bei der 10 Kilometer langen Verfolgung wurde&nbsp;...</p></div>
            </div>
        </a><a href='https://volksblatt.at/sport/sprintsiegerin-hauser-in-biathlon-verfolgung-neunte-742381/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sprintsiegerin Hauser in Biathlon-Verfolgung Neunte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRO-sRp4YTI1UZ5vB32mGscuYfmO2AlpjYAuPFXhy2kS6aasQj1_vg6YLDjRqimRRHpf9afa-cF" alt="Sprintsiegerin Hauser in Biathlon-Verfolgung Neunte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Biathletin Lisa Hauser hat ihre Pole Position in der Verfolgung von Kontiolahti nicht ausnützen können. Die Sprintsiegerin rutschte am Sonntag im letzten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/biathlon/live-die-verfolgung-der-damen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE | Die Verfolgung der Damen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR932elMfp61L8GwOQGZjJ4-mZB_Gl4_bPt3reNRwlmXc3Hqw7C5L2_5W_i_xySC6KpmnP32Ejr" alt="LIVE | Die Verfolgung der Damen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Sonntag steht im finnischen Kontiolahti die Biathlon-Verfolgung der Damen auf dem Programm. Los geht es ab 14:15 Uhr. Was ist drinnen für Dorothea Wierer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/biathlon/biathlon-verfolgung-frauen-kontiolahti-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon in Kontiolahti: Simon siegt in der Verfolgung - Voigt wird ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnPvMg2Rxe4AtRc0NwLdSA5OBODETh9VhvaqVNr3U0G_x92qespS463nGBUxTAk3eIh9TruS4k" alt="Biathlon in Kontiolahti: Simon siegt in der Verfolgung - Voigt wird ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vanessa Voigt hat den deutschen Biathlon-Frauen beim Weltcup in Kontiolahti das nächste Top-Ten-Ergebnis beschert.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/wintersport/2212/Artikel/biathlon-verfolgung-der-herren-kontiolahti-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verfolgung: Biathlet Rees knapp am Podest vorbei - Biathlon der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfvTqQvlDDhqPhUikN7jXIFhxtP3ey9z6nquFEHDTXleu8MqGO8ME-RigFUPvqRjeCnB-zGwPN" alt="Verfolgung: Biathlet Rees knapp am Podest vorbei - Biathlon der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wenig Überraschung bei der 12,5 Kilometer langen Verfolgung der Herren: Johannes Thingnes Bö siegt erwartungsgemäß vor seinem Landsmann Sturla Holm Laegreid&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/biathlon/biathlon-verfolgung-maenner-kontiolahti-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Roman Rees erneut bester Deutscher in der Verfolgung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHM4QHPfFW41PiO8wfxZNTOY5NIktXtU_a4dWfCT8HFtKOBlX23vuUO8vDo8F-LCb92kgiAOHF" alt="Biathlon: Roman Rees erneut bester Deutscher in der Verfolgung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Rees hat auch im Verfolgungsrennen von Kontiolahti einen überzeugenden Auftritt hingelegt. Der Sieg ging einmal mehr nach Norwegen.</p></div>
            </div>
        </a><a href='https://www.chiemgau24.de/wintersport/biathlon/biathlon-heute-im-liveticker-die-verfolger-am-sonntag-in-kontiolahti-zr-91955044.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Drei DSV-Athleten überzeugen zum Abschluss in Finnland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyxfiLZ-yLxxBrJeKF8pAAbN2D1g0l9niL-R4AGa3xnqbvbYf-06k8PYRAZ-rvjEkOgT-p3ys_" alt="Biathlon: Drei DSV-Athleten überzeugen zum Abschluss in Finnland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weltcup 2022/23 im Biathlon wurde am Sonntag fortgesetzt. Die Deutschen verpassten das Podest deutlich, reisen dennoch zufrieden weiter nach Hochfilzen.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/wintersport/2212/Artikel/biathlon-sprint-der-frauen-in-kontiolahti-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weidel bei Hauser-Sieg knapp am Podest vorbei</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUQvwlRUDGwaXYldSEXGdD3_gl5WiTBiVFRgeEDxTTQvhynZKBjrs651DYqlH47fnbpb0rghof" alt="Weidel bei Hauser-Sieg knapp am Podest vorbei" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anna Weidel ist beim Sprint der Frauen in Kontiolahti beste Deutsche vor Denise Herrmann-Wick. Der Sieg geht an eine Österreicherin.</p></div>
            </div>
        </a>
        </Template></>;
}