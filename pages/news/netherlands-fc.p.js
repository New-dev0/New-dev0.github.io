import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands fc"/>
        <meta name="description" content="Trending News about Netherlands fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands fc</h1>
            <Image width={800} height={500} src="https://i2-prod.football.london/incoming/article25719411.ece/ALTERNATES/s1200/0_Netherlands.jpg" alt="Netherlands fc"/>
            <h3>Recent News</h3>
            <a href='https://www.football.london/arsenal-fc/news/martinelli-arsenal-netherlands-argentina-paredes-25719358'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;When it&#39;s Martinelli&#39; - Arsenal fans fume amid Argentina vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQm4JTHaS_VlF7Kbd94Ud1P157AKa53PddDdaaYVXr1u7tcR73-EM9Aj01MQb0FEBAeAEFhZoq_" alt="&#39;When it&#39;s Martinelli&#39; - Arsenal fans fume amid Argentina vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal fans were annoyed over refereeing decisions in Argentina vs Netherlands, comparing it to a situation involving Gabriel Martinelli.</p></div>
            </div>
        </a>
        </Template></>;
}