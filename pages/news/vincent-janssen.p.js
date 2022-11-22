import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vincent Janssen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vincent Janssen"/>
        <meta name="description" content="Trending News about Vincent Janssen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vincent Janssen</h1>
            <Image width={800} height={500} src="https://cdn1.tbrfootball.com/uploads/27/2022/11/TBR-FB-link-63.jpg" alt="Vincent Janssen"/>
            <h3>Recent News</h3>
            <a href='https://tbrfootball.com/mccoist-impressed-by-vincent-janssens-improvement-since-spurs-exit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>McCoist impressed by Vincent Janssen&#39;s improvement since Spurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPU7DzZUYP2DYeOl-QfHkmmDVOwh3so2ZUd9Z1YqU5w50sBG1s4GMapJaw0QZPyni77ky8A6xw" alt="McCoist impressed by Vincent Janssen&#39;s improvement since Spurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ally McCoist has praised the improvement of Vincent Janssen since he left Tottenham Hotspur three years ago.</p></div>
            </div>
        </a><a href='https://www.fmfstateofmind.com/2022/11/21/23472073/vincent-janssen-netherlands-senegal-qatar-2022-fifa-world-cup-group-a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Rayados star unable to make difference in Netherlands&#39; victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRemZ4B5KSDCtKdJHpi4lmoVbvEHTiDR6I2e97nkBwkTYlDzHv4TvphPSamFwgDFTldteneHMDP" alt="Ex-Rayados star unable to make difference in Netherlands&#39; victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Head coach Louis van Gaal was so convinced by the striker, he inserted him in the starting lineup for their opening 2022 World Cup match earlier today against&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}