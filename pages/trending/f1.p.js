import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1"/>
        <meta name="description" content="Trending News about F1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1</h1>
            <Image width={800} height={500} src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/Singapore/Sunday/perez-podium.jpg" alt="F1"/>
            <h3>Recent News</h3>
            <a href='https://www.formula1.com/en/latest/article.perez-hails-best-performance-in-f1-in-singapore-grand-prix-as-he-gives-his.2bXvD5GhmApwL7YyoAC0BC.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Perez hails &#39;best performance&#39; in F1 in Singapore Grand Prix as he ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzD__EUrikstCYnK3xDT6MMkOFGNC0A-n9GaEpWVmWEvD9efjAPM9HXgXjG6Zd2_NlC6fvcTs_" alt="Perez hails &#39;best performance&#39; in F1 in Singapore Grand Prix as he ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Bull driver Sergio Perez hailed the best performance of his F1 career to date as he controlled an “intense” Singapore Grand Prix to beat Ferrari rival&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/f1-heavy-rain-delays-start-of-singapore-grand-prix-11664714850307.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Heavy rain delays start of Singapore Grand Prix | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJhXh6B0UY5op5ytMy3Th1aSG5KzIgZkN-RhktPU3AAEabwzVUfDgZvPgDOfwLBUD-5ChpHiI84A" alt="F1: Heavy rain delays start of Singapore Grand Prix | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The race, originally set to start at 2000 local time (1200GMT), will now begin at 2105 local time (1305GMT) with the cars scheduled to set off on their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/sports/f1-perez-wins-singapore-gp-faces-probe-for-safety-car-infringement-122100200827_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Perez wins Singapore GP, faces probe for safety car infringement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsHeyS0VOjWiS7_3xZSK4ZWCvqUOLC9Uys2Xvoc5YTO2u4Bxdmw3oV0sjdTzmPb4Imlj8OLzY6" alt="F1: Perez wins Singapore GP, faces probe for safety car infringement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Bull&#39;s Sergio Perez raced ahead of Ferrari&#39;s Charles Leclerc to win his first-ever Singapore Grand Prix.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/oct/02/sergio-perez-wins-singapore-f1-gp-as-max-verstappen-forced-to-wait-for-title'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sergio Pérez wins soggy Singapore F1 GP as Max Verstappen has ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIxLaWexxQZXC8C2WcR1rvmfb7Or0b9Ve36H7xXm0qpLJB1RVgeNJObmoC3NOrFkVocgeBNQAG" alt="Sergio Pérez wins soggy Singapore F1 GP as Max Verstappen has ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sergio Pérez won for the second time this season with Charles Leclerc second, Max Verstappen seventh and Lewis Hamilton in ninth in a rain-delayed race.</p></div>
            </div>
        </a><a href='https://www.fia.com/news/f1-perez-penalised-wins-singapore-ahead-leclerc-verstappen-finishes-seventh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 – Pérez penalised but wins in Singapore ahead of Leclerc as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqg7QlbabAkDjnzH57Z7ofUOgcpZ3dkbsjQ_MU-96p7MRG2_o_PB8YIn-JEbDI9E4GqKa_F59-" alt="F1 – Pérez penalised but wins in Singapore ahead of Leclerc as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sergio Pérez passed polesitter Charles Leclerc at the start and resisted race-long pressure from the Ferrari driver to take a hard-earned victory at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/f1/2022/10/02/633950ca051f0f001f13c08d-directo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Standings - Perez wins Formula 1s Singapore Grand Prix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSG22Oq5JeMI9SiEIITh7blSWeLxPtALo0sqW7mA7N_yw69XA2xlMXvJV_pRVMCL2OD-KbVMLIl" alt="F1 Standings - Perez wins Formula 1s Singapore Grand Prix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>F1 World Drivers Championship standings 1) Max Verstappen - 341 points 2) Charles Leclerc - 237 points 3) Sergio Perez - 235 points 4) George Russell.</p></div>
            </div>
        </a><a href='https://the-race.com/formula-1/our-verdict-on-f1-champions-errors-and-perezs-great-drive/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Our verdict on F1 champions&#39; errors and Perez&#39;s great drive - The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCiy-vABZoahCmXd3LxHFeq3y-Re1UbMUQcpC0vShYkbLDE7azmlTBfdrx-HUHwYJMGJ4r4JRJ" alt="Our verdict on F1 champions&#39; errors and Perez&#39;s great drive - The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Max Verstappen (and Lewis Hamilton) made a mess of the Singapore Grand Prix, Sergio Perez produced masterclass.</p></div>
            </div>
        </a>
        </Template></>;
}