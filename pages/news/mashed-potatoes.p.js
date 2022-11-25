import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mashed potatoes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mashed potatoes"/>
        <meta name="description" content="Trending News about Mashed potatoes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mashed potatoes</h1>
            <Image width={800} height={500} src="https://on3static.com/uploads/dev/assets/cms/2022/11/24140703/kentucky-players-thanksgiving.png" alt="Mashed potatoes"/>
            <h3>Recent News</h3>
            <a href='https://www.on3.com/teams/kentucky-wildcats/news/mashed-potatoes-egg-nog-and-uk-basketballs-other-thanksgiving-favorites/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mashed Potatoes, Egg Nog and UK Basketball&#39;s Other Thanksgiving ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4cMqiZpUCeQU_7iN-eeTsbbbZUwnuY5YWNQ0_DCIYyT_JfMz4wFSdanBqMyQENTYZoYwaFOtVxg" alt="Mashed Potatoes, Egg Nog and UK Basketball&#39;s Other Thanksgiving ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oscar Tshiebwe, Jacob Toppin, and Antonio Reeves talk Thanksgiving.</p></div>
            </div>
        </a>
        </Template></>;
}