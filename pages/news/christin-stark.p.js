import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christin Stark</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christin Stark"/>
        <meta name="description" content="Trending News about Christin Stark" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christin Stark</h1>
            <Image width={800} height={500} src="https://cdn.mdr.de/meine-schlagerwelt/christin-stark-168_v-variantBig16x9_wm-true_zc-ecbbafc6.jpg?version=1381" alt="Christin Stark"/>
            <h3>Recent News</h3>
            <a href='https://www.mdr.de/meine-schlagerwelt/christin-stark-neue-moderatorin-schlager-des-monats-bernhard-brink-nachfolge-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nachfolgerin von Bernhard Brink: Christin Stark moderiert &quot;Die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNNouE7QC8UXE5hhtn2Dmkvkgsa2hFpx3RWt40GS9L3ZlzoajKIJoAQi-s27UhwtQQLsARvozu" alt="Nachfolgerin von Bernhard Brink: Christin Stark moderiert &quot;Die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Powerfrau des Popschlagers Christin Stark präsentiert ab Februar 2023 die erfolgreiche Chartshow im MDR Fernsehen. Das gab sie bei Florian Silbereisens&nbsp;...</p></div>
            </div>
        </a><a href='https://www.schlager.de/news/2022/12/02/bernhard-brink-show-ende-christin-stark-moderiert-jetzt-die-schlager-des-monats/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernhard Brink Show-Ende: Christin Stark moderiert jetzt &quot;Die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSLPILuAuq6w5UcuNp0l7pjrlMper2EPNPh6luZUrLCYUFxh1q-_UnOP3tWzGiLJoGjuuWV4pT" alt="Bernhard Brink Show-Ende: Christin Stark moderiert jetzt &quot;Die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie tritt die Nachfolge von Bernhard Brink an: Christin Stark moderiert ab Februar die &quot;Schlager des Monats&quot; beim MDR.</p></div>
            </div>
        </a><a href='https://schlagerprofis.de/39772/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHRISTIN STARK neue Moderatorin von &quot;Schlager des Monats&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1Y2yVuSeZOLJRPULLU_itj_8CDLvUuaA6epAZQTUaWxd14imidXO--NifG8iHiiTN2vTn4Ysv" alt="CHRISTIN STARK neue Moderatorin von &quot;Schlager des Monats&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nun steht fest - natürlich auch noch &quot;ausgerechnet&quot; bei FLORIAN SILBEREISEN verkündet: Als neue Moderatorin von &quot;Schlager des Monats&quot; steht nun CHRISTIN&nbsp;...</p></div>
            </div>
        </a><a href='https://www.schlager.de/news/2022/12/02/matthias-reim-mieser-verrat-hat-er-seine-junge-frau-schamlos-ausgenutzt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim: Mieser Verrat? Hat er seine junge Frau schamlos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0rIuk9aAuDBrBRCxsBgeT6ESNkJ7l01jHOx2fs2HyRdz97FcFWsAO-gDY2dCJ8VBzxFFkMqka" alt="Matthias Reim: Mieser Verrat? Hat er seine junge Frau schamlos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baby Zoe ist gerade mal neun Monate alt und auch Christin Stark möchte vielleicht ihre Tour nachholen. Doch Matthias Reim denkt nur an sich!</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/tv/id_100091520/mdr-dieser-schlagerstar-wird-der-nachfolger-von-bernhard-brink.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MDR: Dieser Schlagerstar wird der Nachfolger von Bernhard Brink</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNDS5S-MIkLYpw18UvdTWTQVPJ3tOnrB0Jnux2fz-obUNHonLLQDRTMCEZ8ZpfStfD9AGBPhV7" alt="MDR: Dieser Schlagerstar wird der Nachfolger von Bernhard Brink" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach fünf Jahren hört Bernhard Brink als Moderator bei &quot;Die Schlager des Monats&quot; auf. Nun hat der Sender Ersatz gefunden – und für den ist der Job Neuland.</p></div>
            </div>
        </a>
        </Template></>;
}