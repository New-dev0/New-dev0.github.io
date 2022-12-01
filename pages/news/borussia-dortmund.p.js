import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Borussia Dortmund</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Borussia Dortmund"/>
        <meta name="description" content="Trending News about Borussia Dortmund" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Borussia Dortmund</h1>
            <Image width={800} height={500} src="https://www.sportsunfold.com/wp-content/uploads/2022/11/bundesliga-1-1.jpg" alt="Borussia Dortmund"/>
            <h3>Recent News</h3>
            <a href='https://www.sportsunfold.com/borussia-dortmund-reportedly-show-interest-in-us-internationals-weston-mckennie-and-christian-pulisic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Borussia Dortmund reportedly show interest in US Internationals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSAUKp1uVzS9A63lvAqrC94z4-BPH4-ArpPpMrLfct4YSZZ1z44ydlZYHrr2tA-FLEwK6GEuKx" alt="Borussia Dortmund reportedly show interest in US Internationals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The move would likely come after the 2022/23 season runs its course, as Chelsea seem like they would be willing to let the player go before his contract is&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}