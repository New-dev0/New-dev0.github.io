import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ran NFL</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ran NFL"/>
        <meta name="description" content="Trending News about Ran NFL" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ran NFL</h1>
            <Image width={800} height={500} src="https://i3-img.p7s1.io/pis/ezone/c08aqgELBzZ_waV9V4ynsPl9Xpy8O3hdBAB1Mz91uEoH8-It6HoCCx_XYUgUKNUYRuAFzZ9Z84_6DCDEqtvS59DzbWiVbnPKfg0XpYKiENaqJ80oLFBSJVU0AQR6mI67ACzr1x1HGA5A9CyTJ1Vt615gQSEQVAcD57yD9gIxzjQ8eGA-dHNO/profile:ezone-teaser620x348?source" alt="Ran NFL"/>
            <h3>Recent News</h3>
            <a href='https://www.ran.de/us-sport/nfl/video/sergeant-schultz-bringt-die-cowboys-wieder-in-fuehrung-clip'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL - &quot;Sergeant Schultz&quot; bringt die Cowboys wieder in Führung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNb3wYqhsrjRg1cFCRL7fXTayQOhVuFdMtP-UIGbpVtMTo0cML8v0Io-zjoj97dTgfFKE5mAFL" alt="NFL - &quot;Sergeant Schultz&quot; bringt die Cowboys wieder in Führung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Sergeant Schultz&quot; bringt die Cowboys wieder in Führung: Roman Motzkus ist sich sicher: &quot;Alles wird gut für die Dallas Cowboys. Dank Sergeant Schultz!</p></div>
            </div>
        </a><a href='https://www.ran.de/us-sport/nfl/bildergalerien/nfl-honors-wettquoten-fuer-mvp-rookie-of-the-year-und-co'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL - NFL Honors: Wettquoten für MVP, Rookie of the Year und Co.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9vFkRBpET0ABtcsDR2k9dx307hSYgsjIhM2lXvvWe_PuWENrtX5CInrWt7S1dK-AkJ-0W_Z6D" alt="NFL - NFL Honors: Wettquoten für MVP, Rookie of the Year und Co." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In den USA kann man beinahe auf alles wetten. So auch auf die Gewinner der wichtigen Auszeichnungen bei den NFL Honors im Februar. Dort werden MVP, Coach of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ran.de/us-sport/nfl/video/cowboys-in-der-redzone-gib-den-ball-zu-zeke-clip'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL - Cowboys in der Redzone: Gib den Ball zu Zeke!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUR9-IdTn0d1_5Ls4h89sZW1BooPJ-jbPnqym7mhIESn3ej_A_WNqh8a2Lbasd76ZpGyELQHuK" alt="NFL - Cowboys in der Redzone: Gib den Ball zu Zeke!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cowboys in der Redzone: Gib den Ball zu Zeke!: Was machen die Dallas Cowboys, wenn sie kurz vor der Endzone stehen? Natürlich den Ball an Ezekiel Elliot&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ran.de/us-sport/nfl/video/einmal-im-fernsehen-voellige-eskalation-im-studentenwohnheim-clip'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL - Einmal im Fernsehen: Völlige Eskalation im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ91hXk6I-qNcRDQXFwWXKLOq0wJ34bmV_Uv6P1CXHkGTYwJDY900dbTUZGYH2iOqWN9lUCVwA" alt="NFL - Einmal im Fernsehen: Völlige Eskalation im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einmal im Fernsehen: Völlige Eskalation im Studentenwohnheim: Weil Netman Max Zielke den Tweet in unserer Sendung gezeigt hat, rastet die Studentengruppe&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}