import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup stats</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup stats"/>
        <meta name="description" content="Trending News about World Cup stats" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup stats</h1>
            <Image width={800} height={500} src="https://sportshub.cbsistatic.com/i/r/2022/11/23/1b934088-46c5-4541-b572-cfb4b80e6fb9/thumbnail/1200x675/e3ab1b2921d141401698f6555977a421/ferran-torres-getty.png" alt="World Cup stats"/>
            <h3>Recent News</h3>
            <a href='https://www.cbssports.com/soccer/news/2022-world-cup-stats-ferran-torres-joins-olivier-giroud-bukayo-saka-in-golden-boot-race/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup stats: Ferran Torres joins Olivier Giroud, Bukayo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPVZDaGKJ4-2ZPZSuwy6kZ3FA3cy49x9z-OrD7Pjhw3UbUeIbUYjF7gIfawxyjWwkI-KIa2Fo6" alt="2022 World Cup stats: Ferran Torres joins Olivier Giroud, Bukayo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 World Cup is underway and we already have five players with at least two goals to heat up the Golden Boot race. The latest to score a brace is&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}