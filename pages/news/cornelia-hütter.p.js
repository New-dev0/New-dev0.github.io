import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cornelia Hütter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cornelia Hütter"/>
        <meta name="description" content="Trending News about Cornelia Hütter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cornelia Hütter</h1>
            <Image width={800} height={500} src="https://img.blick.ch/incoming/18055850-v0-313112986-2231802393647014-7347507525079255027-n.jpg?imwidth=1000&ratio=16_9&x=0&y=117&width=1080&height=609" alt="Cornelia Hütter"/>
            <h3>Recent News</h3>
            <a href='https://www.blick.ch/sport/ski/irgendwann-ist-es-zeit-fuer-etwas-neues-liebes-aus-bei-oesterreichs-ski-traumpaar-id18055873.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Cornelia Hütter über ihr Liebes-Aus mit Christian Walder</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdbxqdm31xPaxmgulR3LIClC25JO0DgPBTWFsT6G8iwGA27xNV_PPRogPn8avFQGgzVvRI2LUP" alt="Ski alpin: Cornelia Hütter über ihr Liebes-Aus mit Christian Walder" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach unzähligen Verletzungen und Rückschlägen beginnt für Cornelia Hütter (30) ein neuer Lebensabschnitt. Die Österreicherin nimmt die neue Saison nach der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/wege-trennen-sich-liebes-aus-bei-oesterreichs-ski-traumpaar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Wege trennen sich“: Liebes-Aus bei Ski-Traumpaar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_hwMt2wDJMcu1e8ElOvjMet0-Y03k5oh2DDCDAmgz7cjEhId0LhspNI9pgjdxVivdmssoLpkl" alt="„Wege trennen sich“: Liebes-Aus bei Ski-Traumpaar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Langsam aber sicher wird es ernst im Ski-Zirkus. In den nächsten Wochen nimmt der Weltcup an Fahrt auf. Zwei Ski-Asse werden dabei aber nicht mehr als Paar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.weekend.at/promitalk/conny-huetter-trennung-single'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski-Ass Conny Hütter ist wieder solo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTa5o7rsqayfVg6J0bHG4fk_WAfAZQzaNvRKSzBmbZhqDdsK-bLrD8mFKJ36lQ7QZZcZ9avy9jO" alt="Ski-Ass Conny Hütter ist wieder solo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neben Mikaela Shiffrin und Alexander Aamodt Kilde gehörten auch die beiden ÖSV-Asse Conny Hütter und Christian Walder zu den Traumpaaren des Ski-Zirkus. Doch&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}