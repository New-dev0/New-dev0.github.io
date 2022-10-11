import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Barcelona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Barcelona"/>
        <meta name="description" content="Trending News about Barcelona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Barcelona</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1665378953.jpg?utm_source=fb" alt="Barcelona"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/sports/la-liga-2022-23-pedri-gonzalez-scores-as-barcelona-record-seventh-straight-victory-with-win-over-celta-vigo-news-228755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga 2022-23: Pedri Gonzalez Scores As Barcelona Record ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMb8wIZHKfZq5R7CuzJCOyNnDxWi86UhvX_RiD0jf59n0c-wllePYAZfYZ_bvVH5zXeTiZvtSW" alt="La Liga 2022-23: Pedri Gonzalez Scores As Barcelona Record ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The win gave Barcelona confidence before decisive UEFA Champions League group game against Inter Milan.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/spanish-laliga/story/4765429/teens-pedri-and-gavi-extend-barcelona-win-streak-to-7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Teens Pedri and Gavi extend Barcelona win streak to 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9n6DUYAwNvIy7_2HScS_b5EZ03oAN5AysQ2S3pDUa_5vKxjGOlLdjZ_aQS-igRXvdoD5q3mpe" alt="Teens Pedri and Gavi extend Barcelona win streak to 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two Barcelona youngsters did well against Celta Vigo. Can they repeat in the upcoming Champions League fixture or El Clasico?</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/pedri-to-the-rescue-barcelona-winners-losers-ratings-narrow-win-celta-vigo/bltf769027b24667a0a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedri to the rescue for Barcelona! Winners, losers &amp; ratings as injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZhS6ntywhRVW4KR4gIADoiI-_21IXhXsr_aLPCTKZ-tklGCMwpd3Y2cFE-MefyQlNbaZl7Vv_" alt="Pedri to the rescue for Barcelona! Winners, losers &amp; ratings as injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona moved back to the top of the La Liga table with a 1-0 win over Celta Vigo at Camp Nou, thanks to a first half goal from Pedri.</p></div>
            </div>
        </a><a href='https://www.newindianexpress.com/sport/football/2022/oct/10/champions-league-barcelona-needs-to-beat-inter-milan-to-avoid-another-early-exit-2506631.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Barcelona needs to beat Inter Milan to avoid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7tsn_q0W7ycpzCcorrYWdjnbkG_8dOD0awxUYM_yElNiTagwDCwmqG8L0Qw2o5556yvJglfF4" alt="Champions League: Barcelona needs to beat Inter Milan to avoid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inter Milan will be hoping the victory against Barcelona signalled a turning point in its season after a mediocre start to the domestic campaign.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/sports/football/la-liga-seven-in-a-row-for-barcelona/cid/1891334'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga: Seven in a row for Barcelona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwVywOTfW-9NJyzU5lN3Btoj7OgVOmoPO8Q48w1E8wOHi3YyKqRL7IkUyEs0Fm3Dpreq9v6chy" alt="La Liga: Seven in a row for Barcelona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barca have not been able to repeat their league success in the group stage of the European competition.</p></div>
            </div>
        </a><a href='https://football-italia.net/barcelona-fans-insult-inter-during-1-0-win-over-celta-vigo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona fans insult Inter during 1-0 win over Celta Vigo - Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyG7tEt-svi0Q98DdhnXutGE4WyxXE-ECtKls5cpCIOQ3mc838S9UynAht39JFSoE9wI4AxcUL" alt="Barcelona fans insult Inter during 1-0 win over Celta Vigo - Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They allegedly sang &#39;Inter, Inter vaffan…&#39; while President Joan Laporta said the refereeing at San Siro last week was &#39;shameful.&#39; According to Tuttosport, Inter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/barcelona/2022/10/10/6344352e268e3ed00c8b45b6.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The causes of Barcelona&#39;s slump ahead of a key week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiWv6S4bXYGocUHdR4fF1wTHMUjApl_0XcwACwTmBjtlvUhf6ZJ31XaJiGd5wVZ8qqGNj4QgXr" alt="The causes of Barcelona&#39;s slump ahead of a key week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Three weeks ago we were flying and now we&#39;re not,&quot; Barcelona coach said Xavi after the game against Celta. The Catalans are going through a small slump&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/atletico-de-madrid-signs-antoine-griezmann-from-barcelona/article65992858.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atletico de madrid confirm signing of Antoine Griezmann from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHXq3KZWl9BHW5w3fBHiX2OFJtWj81azyW0CpTOq8MXym4UpDChDR8f_jKf739qi0oOu_8V0fY" alt="Atletico de madrid confirm signing of Antoine Griezmann from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With the World Cup approaching and Griezmann keen to feature more, Atletico and Barcelona negotiated a new deal, with Barcelona president Joan Laporta&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/soccer/2022/10/10/atltico-reaches-deal-with-barcelona-to-keep-griezmann/50819883/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atlético reaches deal with Barcelona to keep Griezmann</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRjXid6DGof_1qJjmr0R1UBQpO3lcf04_ws2SZQkCtHWuyvzVGOc5OSsz96_3i6g-AwEwEiyMWn" alt="Atlético reaches deal with Barcelona to keep Griezmann" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atlético Madrid has reached a deal with Barcelona to sign forward Antoine Griezmann on a permanent transfer.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/la-liga-barcelona-celta-vigo-pedri-winner-spanish-football-league-table-topper-real-madrid-xavi/article65991097.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga: Pedri strike gives Barcelona 1-0 win over Celta Vigo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbImwlOv2CZTvw4S07Czbc21leZUSPJivhTNAyueUNZ3IoGr9NV8tgR4DJKJZYyY9RX-OrJGzH" alt="La Liga: Pedri strike gives Barcelona 1-0 win over Celta Vigo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barca are level on 22 points with Real Madrid after eight games but has a better goal difference before the pair face each other next Sunday in El Clasico&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}