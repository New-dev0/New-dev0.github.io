import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Deutschland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Deutschland"/>
        <meta name="description" content="Trending News about Deutschland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Deutschland</h1>
            <Image width={800} height={500} src="https://www.btc-echo.de/wp-content/uploads/2022/11/shutterstock_2149934137-scaled.jpg" alt="Deutschland"/>
            <h3>Recent News</h3>
            <a href='https://www.btc-echo.de/schlagzeilen/solana-baut-einen-krypto-hub-in-deutschland-154564/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit Superteam DAO: Solana baut Krypto-Hub in Deutschland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUlgma6G_A2xOEzZJFss495kfz7ufJ_Xw0d6du2sm7egFBSqAEImcFqS8LqUzSsuI3zENRuU_F" alt="Mit Superteam DAO: Solana baut Krypto-Hub in Deutschland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einer Entwickler-Strategie will das Solana Superteam im Krypto-Standort Deutschland Fuß fassen. Bisher verlief 2022 erfolglos.</p></div>
            </div>
        </a><a href='https://www.finanzen.net/nachricht/aktien/moebelbranche-in-deutschland-steigert-umsatz-deutlich-perspektiven-eingetruebt-11916596'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Möbelbranche in Deutschland steigert Umsatz deutlich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Möbelbranche in Deutschland steigert Umsatz deutlich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Die Umsatzzuwächse sind in erster Linie preisgetrieben und bilden die dramatisch gestiegenen Material- und Energiekosten ab&quot;, sagte Verbände-Geschäftsführer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/politik/inland/neue-partei-buendnis-deutschland-wird-gegruendet-18468258.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Bündnis Deutschland“: Enttäuschte Anhänger der Union gründen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmC7D3upb_BC4HO79buJIC9etBSYNfa7BsTE5vZ3qPCSNMIKwFgOlZtXWArz0F6SGXU_479jBx" alt="„Bündnis Deutschland“: Enttäuschte Anhänger der Union gründen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einstige Mitglieder und Funktionsträger aus CSU und CDU wollen die Partei „Bündnis Deutschland“ gründen und der Union Konkurrenz machen....</p></div>
            </div>
        </a><a href='https://www.zeit.de/2022/47/nordeuropa-finnland-russland-ukraine-krieg-sicherheitspolitik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutschland und Nordeuropa: Deutschlands fatale Kurzsichtigkeit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4VnOc8RCYnsphibjQpDNa96MYc0POd9J2_Y0mMHXl5kDAnw8wRTWX4ugDdghA6YOvDeT8eLPM" alt="Deutschland und Nordeuropa: Deutschlands fatale Kurzsichtigkeit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deutschland sollte seine Beziehungen zu den nordöstlichen Ländern der EU aufbessern. Es könnte ihm nützen, schreibt die finnische Politikwissenschaftlerin&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}