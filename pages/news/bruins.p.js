import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruins"/>
        <meta name="description" content="Trending News about Bruins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruins</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1125%2Fr1096918_1296x729_16%2D9.jpg" alt="Bruins"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nhl/story/_/id/35107665/bruins-net-nhl-record-12th-straight-home-win-open-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins net NHL-record 12th straight home win to open season</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTjLGbnEAkb6pdYPF37MGSWhTZ6o4emlFLTeqhJ_yPFp31f9c8-HOieDJ-SocFFJQ7TH-Bq42Yf" alt="Bruins net NHL-record 12th straight home win to open season" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Bruins beat the Carolina Hurricanes 3-2 in overtime Friday, setting the NHL record for most home victories to start a season with the win.</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/boston-bruins/2022/11/25/bruins-hurricane-recap-analysis/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 takeaways from the Bruins&#39; 3-2 triumph over the Hurricanes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIXJYPhUlL8AJ283cPuFtFrwtOI7aesb5atzzn_tFg4-anrinXLNlx7bJN4czK6kFzw7Px1KQj" alt="3 takeaways from the Bruins&#39; 3-2 triumph over the Hurricanes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boston Bruins&#39; Nick Foligno celebrates with Jeremy Swayman (1) after defeating the Carolina Hurricanes in overtime during an NHL hockey game, Friday, Nov.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/linus-ullmark-injury-latest-update-bruins-goalies-upper-body-issue'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Linus Ullmark injury: Latest update on Bruins goalie&#39;s upper body ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Linus Ullmark injury: Latest update on Bruins goalie&#39;s upper body ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bruins lost goalie Linus Ullmark to injury in Friday&#39;s win over the Hurricanes. Here&#39;s the latest update on his status.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/bruins-set-impressive-nhl-record-extending-perfect-home-record'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins set impressive NHL record by extending perfect home record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Bruins set impressive NHL record by extending perfect home record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bruins made NHL history and set a new record Friday afternoon by beating the Hurricanes and continuing their dominance at TD Garden this season.</p></div>
            </div>
        </a><a href='https://theathletic.com/3936324/2022/11/25/bruins-nhl-record-home-start/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins set an NHL record with a 12-0-0 home start. How did they do it?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSL0kgUupdC7f8fvQ95p0jN_7X-l2WfMfhCmnXvCEsnzP4UahUwsJf7WPrWZUfSfM_272eI29_b" alt="Bruins set an NHL record with a 12-0-0 home start. How did they do it?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But coach Jim Montgomery saw an opportunity. If the Bruins rallied, they would win their 12th straight game to start the season on home ice. No other team in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stanleycupofchowder.com/2022/11/25/23478500/boston-bruins-carolina-hurricanes-nhl-hockey-recap-pastrnak-krejci-davids-czechs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RECAP: Bruins come back against Canes to win 3-2 in OT!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT76AGrFJMvVms6q5LE7-XVgMOlbKha8k83wHe2a6H4RgpZeMZT7W7hEsQaomuk8IuKXhOreliM" alt="RECAP: Bruins come back against Canes to win 3-2 in OT!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Things started miserably. The Bruins were playing about as poorly as you can to start a game, and the Canes capitalized twice, first it was Stefan Noesen.</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/boston-bruins/2022/11/25/bruins-reveal-2023-winter-classic-jerseys-photos-image/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Look: Bruins reveal their 2023 Winter Classic jerseys</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIyZiR_ZI-uFcyinXgB4jrLJAPYN68jDsR8Gz9tKVMdlKNZvoaDK5hOM3VwBRi3AUwg88xds_x" alt="Look: Bruins reveal their 2023 Winter Classic jerseys" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Like their prior Winter Classic uniforms, the 2023 jerseys will also pay homage to past Bruins logos and designs. Read more on Boston.com.</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/jim-montgomery-used-nhl-history-as-motivation-for-bruins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jim Montgomery Used NHL History As Motivation For Bruins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSBwj1fQeLJxoTr99A4Cy_cbAPwnosOh3arNwPzmoA9D1D0fqVL24ohpPjlkfhD0d-TygL_Ead" alt="Jim Montgomery Used NHL History As Motivation For Bruins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Boston Bruins had a chance to make NHL history Friday afternoon at TD Garden, and for a little while it looked a tad bleak.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/bruins/bruins-penguins-reveal-jerseys-2023-nhl-winter-classic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins, Penguins reveal jerseys for 2023 NHL Winter Classic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9X23uNCXjemj-QeGVsKnRuZ8D_zNzILwB4s6KZVcuNDCsjy5YE9ZZkOaLgnJvYk1DheI1fX8N" alt="Bruins, Penguins reveal jerseys for 2023 NHL Winter Classic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bruins and Penguins have both unveiled the jerseys they&#39;ll wear for the 2023 NHL Winter Classic at Fenway Park on Jan. 2. Check them out here.</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/bruins-notes-jim-montgomery-provides-update-on-linus-ullmark/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruins Notes: Jim Montgomery Provides Update On Linus Ullmark</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNld3ekeFjQA098R7-_7Lhw5VSGJQD33aeiiSb-JDdw-fBVcMxXDOHxZ3tR4KOQjW_OjMGeX7l" alt="Bruins Notes: Jim Montgomery Provides Update On Linus Ullmark" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just as Jeremy Swayman returned from injury did the Bruins lose Linus Ullmark. Jim Montgomery provided an update on the goalie after the win.</p></div>
            </div>
        </a>
        </Template></>;
}