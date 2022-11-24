import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Daniel Ricciardo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Daniel Ricciardo"/>
        <meta name="description" content="Trending News about Daniel Ricciardo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Daniel Ricciardo</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/274287_mst.jpg?rf=1669210513" alt="Daniel Ricciardo"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/offiziell-daniel-ricciardo-kehrt-2023-zu-red-bull-zurueck-22112316'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Offiziell: Daniel Ricciardo kehrt 2023 zu Red Bull zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-s4cQwy-KtVy7VB1OeTqYRajHF_-Cts-rwBsX2iDAXJIFAVGN7zwUrzhgSwj3bCHgkz-oUiqN" alt="Offiziell: Daniel Ricciardo kehrt 2023 zu Red Bull zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zwar - allen Gerüchten zum Trotz - nur als dritter Fahrer, aber das ist jetzt immerhin offiziell bestätigt: Daniel Ricciardo kehrt 2023 zu Red Bull zurück.</p></div>
            </div>
        </a><a href='https://www.motorsport-magazin.com/formel1/news-280683-formel-1-offiziell-daniel-ricciardo-kehrt-zurueck-zu-red-bull-f1-2023-fahrermarkt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1, Offiziell: Daniel Ricciardo kehrt zurück zu Red Bull!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwD5W2cOAVYs39vFd9A9-RFb71I5elvJh7dmXE4hHKaKqWpIJ9pjhTAzTW2uk8QmmhxhP0cRou" alt="Formel 1, Offiziell: Daniel Ricciardo kehrt zurück zu Red Bull!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Bull bestätigt: Daniel Ricciardo kehrt 2023 zurück zu seinem alten Formel-1-Team. Er wird Test- und Entwicklungsfahrer für Verstappen &amp; Co.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/motorsport/formel1/6219266/Formel-1_Daniel-Ricciardo-kehrt-als-Testfahrer-zu-Red-Bull-zurueck'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daniel Ricciardo kehrt als Testfahrer zu Red Bull zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkSEZq-OSEW4SBhHvLoBzboOz-8x54H9t1RiqDNnHXFOF3eeepNsp9iPlO60M0KaKlNX3uz2ft" alt="Daniel Ricciardo kehrt als Testfahrer zu Red Bull zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Ricciardo kehrt wie erwartet als Test- und Ersatzfahrer zum Formel-1-Team Red Bull zurück. Der Australier ist bereits von 2014 bis 2018 für Red Bull&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/motorsport/formel-1-daniel-ricciardo-wird-wieder-ein-roter-bulle/402233436'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Daniel Ricciardo wird wieder ein Roter Bulle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4GBtXTGdwrlYN_eD9AQFFZer-Bhto-nBuPPtPmMLoACpNghcB50tAsFhUzbqdHUfYcf2Rijvu" alt="Formel 1: Daniel Ricciardo wird wieder ein Roter Bulle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Australier kommt von McLaren als Ersatzpilot zum Weltmeister-Team. Von 2014 bis 2018 war er bereits für Red Bull Racing im Einsatz.</p></div>
            </div>
        </a><a href='https://www.express.de/sport/motorsport/formel-1-daniel-ricciardo-ab-2023-wieder-bei-red-bull-373452'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Daniel Ricciardo ab 2023 wieder bei Red Bull</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-JWvanQLfnnTWTkqn1w5JUIU41CA928Mjbn-T2Mgw-KdytwUUN7KhV1f0tDs7h2iIMHz5nq8W" alt="Formel 1: Daniel Ricciardo ab 2023 wieder bei Red Bull" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der australische Rennfahrer Daniel Ricciardo wird in der kommenden Formel-1-Saison als Reserve-Fahrer für Red Bull an den Start gehen.</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/ruckkehr-zu-red-bull-fix-daniel-ricciardo-wird-formel-1-testpilot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Daniel Ricciardo gibt Comeback bei Red Bull als Testpilot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHjMbZ3wpfVseLtf34B-_LuZXeEdomgdrsd8aP0L8emgNZJa1Zab6NgORczu2Hzj2Zz8tbDk_p" alt="Formel 1: Daniel Ricciardo gibt Comeback bei Red Bull als Testpilot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Ricciardo wird ab der kommenden Formel-1-Saison wieder bei Red Bull im Cockpit sitzen. Der Australier verstärkt das Team hinter Weltmeister Max&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}