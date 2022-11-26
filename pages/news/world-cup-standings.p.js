import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup standings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup standings"/>
        <meta name="description" content="Trending News about World Cup standings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup standings</h1>
            <Image width={800} height={500} src="https://soccer.nbcsports.com/wp-content/uploads/sites/14/2022/11/GettyImages-1244970612.jpg" alt="World Cup standings"/>
            <h3>Recent News</h3>
            <a href='https://soccer.nbcsports.com/2022/11/25/world-cup-tables-group-stage-standings-in-full/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup tables – Group stage standings in full</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqsAxC8dhe67dROOC7g-s4N_5DBcALkMYqLdOuWH_6vuZbW8WyQ7Gu7qJ_O5PnMv7XeQDLLVmJ" alt="World Cup tables – Group stage standings in full" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup tables are shaping up to be intriguing viewing as the group stage unfolds in Qatar and teams are scrambling to reach the last 16.</p></div>
            </div>
        </a>
        </Template></>;
}