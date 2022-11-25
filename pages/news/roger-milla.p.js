import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roger Milla</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roger Milla"/>
        <meta name="description" content="Trending News about Roger Milla" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roger Milla</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_nachrichten_paid/images/uploads_1200/6/1/f/6219295/63CCA406-C62F-4EC0-8354-9BF12396FE1F_v0_l.jpg" alt="Roger Milla"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6219295/roger-milla-der-mit-der-cornerfahne-tanzte'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roger Milla: Der mit der Cornerfahne tanzte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTup35_gIvlgQvsPBbQqJPWMY8dObJ5HqH6WGHeW91JzixYZ5xvIc5-T5LbHGk8eD_vQk8UAOOE" alt="Roger Milla: Der mit der Cornerfahne tanzte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WM-Ikonen. Sein Stern war bei der WM 1990 in Italien aufgegangen: Jedem Tor, das Kamerun-Stürmer Roger Milla erzielte, folgte ein Tänzchen.</p></div>
            </div>
        </a><a href='https://www.kicker.de/der-mit-der-eckfahne-tanzte-927080/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 kicker-Kolumne: Der mit der Eckfahne tanzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRD4lQBPvNJ0sxNUIfU2S7v2Iv63i_MhZFVQhQ0B5qP45mpmJCTpKRvah-uD0THjT80HdtEn8gg" alt="WM 2022 kicker-Kolumne: Der mit der Eckfahne tanzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Katar beobachtet kicker-Reporter Sebastian Wolff Kameruns Stürmer-Legende Roger Milla und erinnert sich an Weltmeisterschaften in seiner Kindheit.</p></div>
            </div>
        </a>
        </Template></>;
}