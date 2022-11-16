import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Istanbul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Istanbul"/>
        <meta name="description" content="Trending News about Istanbul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Istanbul</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/13/gettyimages-1441181832_wide-18a8d829dba29470ea43334dc502a22f835f8262-s1400-c100.jpg" alt="Istanbul"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/13/1136348046/istanbul-explosion-deaths-istiklal-avenue'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkey calls the blast in Istanbul an attack. At least 6 are dead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpHBLY1XK3h7nehocNG_Ce2l78XcuN1foqTM_qus7A_wclN8qOh4n24VAGLlNqpHM0Y25do3nc" alt="Turkey calls the blast in Istanbul an attack. At least 6 are dead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was no immediate claim of responsibility for the blast on Istiklal Avenue. President Recep Tayyip Erdogan has vowed that the nation will not bow to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-europe-63615076'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul: Six dead, dozens wounded in Turkey explosion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyM9XvOT5XZI29XofcZmdsdjvvoob3aCVadagti0IHXCEKGXCg3F3ruWeXftyLtVOxv1h00ANU" alt="Istanbul: Six dead, dozens wounded in Turkey explosion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vice-President Fuat Oktay earlier said the blast was thought to be a terrorist attack carried out by a woman. President Recep Tayyip Erdogan said the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/liveblog/2022/11/14/istanbul-explosion-live-news-syrian-woman-arrested'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul updates: Attacker came to city months ago, police say</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS20YQbSTtm4tl7tSgC9CIxB0dvk3qpG_lAXc7c4B2RGN30kmQNDNBBmebqh1PcSFV7lo03r7Q7" alt="Istanbul updates: Attacker came to city months ago, police say" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The suspect in the Istiklal Avenue bombing came to Istanbul about four months before the attack, police say. Turkish police say they have arrested a Syrian&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/14/turkey-accuses-kurdish-pkk-over-istanbul-bomb-attack'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turkey accuses Kurdish PKK over Istanbul bomb attack</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4-bloAXkaiIR1iLnT325ynScsPxY-hwaH343l_ITCYvXh-RSf4gENoRgDAmow382tNg-z2oWZ" alt="Turkey accuses Kurdish PKK over Istanbul bomb attack" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The explosion tore through Istiklal Street, a popular shopping destination for locals and tourists, on Sunday afternoon, wounding dozens.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/middle-east/istanbul-police-says-syrian-woman-main-suspect-detains-46-over-bombing-2022-11-14/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Istanbul police says Syrian woman main suspect, detains 46 over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMuWhPErYSUbcsV0Bxhk8xDD5QlAySMeYtJL2FHkLoEbO8JdQqSobb-F1IxMPsMTLhXrT6AsBH" alt="Istanbul police says Syrian woman main suspect, detains 46 over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Police and emergency service members work at the scene after an explosion on busy pedestrian Istiklal street in Istanbul, Turkey, November 13, 2022.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/13/europe/istanbul-turkey-explosion-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suspect in custody in Istanbul blast that killed 6 and injured 81 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8csiAvNLySPFc9WpHzziumMP9JbI0p8bHDWVw5TBOEKmyCQu7zul5J67gI-HWLClYQQU4TCrs" alt="Suspect in custody in Istanbul blast that killed 6 and injured 81 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An explosion that killed at least six people and injured at least 81 others in Istanbul on Sunday is considered to be a terrorist attack, Turkish Vice&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}