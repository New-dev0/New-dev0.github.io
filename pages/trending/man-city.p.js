import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man City</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man City"/>
        <meta name="description" content="Trending News about Man City" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man City</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/893xbs/article66057416.ece/alternates/FREE_1200/GettyImages-1435597393.jpg" alt="Man City"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/pep-guardiola-irked-by-man-city-ongoing-penalty-problems/article66057432.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pep Guardiola irked by Man City&#39;s ongoing penalty problems</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT97t7QBkeUEfRODr6HJIdtPlpW_aI77taojyPsa0v3jLs6TsVMPDZYiQ_e-j54Cud0bJYVaKHw" alt="Pep Guardiola irked by Man City&#39;s ongoing penalty problems" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Since Guardiola took charge of City in 2016, the team has failed to score 25 of its 80 penalties in all competitions — excluding shootouts.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/man-city-winners-losers-ratings-haaland-draw-dortmund-return/blt35493e10f791bce8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City winners, losers and ratings as Haaland halted in dour draw ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlyOE9gQMa9kE7TetWB8CGcHXabLGzqcnCYSJraeOmzCyi8Aipe6neTEQ2w4rbwuCZwI_21HaR" alt="Man City winners, losers and ratings as Haaland halted in dour draw ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City striker Erling Haaland failed to fire on his return to Borussia Dortmund as Manchester City were held to a dour 0-0 draw at Signal Iduna&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league/ucl-borussia-dortmund-vs-manchester-city-live-steaming-info-squads-predicted-xi-bor-vs-mci-updates-highlights/article66053633.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights Dortmund 0-0 Manchester City, UEFA Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQc-u9m7w2Ew4td-NF75UFCid-5jZfIgAaXklt15tUIAWxh8DNlUEGnNtYBN1UMPrhd3M-8YFWg" alt="Highlights Dortmund 0-0 Manchester City, UEFA Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Borussia Dortmund vs Manchester City: Highlights of the BOR vs MCI UEFA Champions League from the Signal Iduna Park stadium in Dortmund, Germany.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/haaland-frustrated-on-dortmund-return-as-man-city-draws-00-101666751445557.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haaland frustrated on Dortmund return as Man City draws 0-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZKNs2HhdZUjx-c-bLKJBFlfA-R3KPT_U03uea0_BtEN2ZsuV02KpQJFZorSKpybqvUj74b3q5" alt="Haaland frustrated on Dortmund return as Man City draws 0-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dortmund goalkeeper Gregor Kobel also saved a second-half penalty from Riyad Mahrez to earn Dortmund the point it needed to be sure of finishing second in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/manuelveth/2022/10/25/mats-hummels-dortmund-star-underlines-germany-ambitions-against-man-city/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mats Hummels: Dortmund Star Underlines Germany Ambitions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7HAihkEaIjntYQg6Dr-hBjPPQcnzgdKVAb4fNJBXrGkAPv1micL6pr4aRpXoGCQVpa64KJAT5" alt="Mats Hummels: Dortmund Star Underlines Germany Ambitions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mats Hummels has further underlined his national team ambitions with an outstanding performance against Manchester City on Tuesday night.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/guardiola-admits-man-city-penalty-problem-champions-league-mahrez-miss-dortmund/bltcf2ae5e050d09bcb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guardiola admits Man City&#39;s &#39;penalty problem&#39; could derail ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjmWnUbCUw1piUs78LT16DivFGU-ZbJ9JVuElvAVvXp-Pu_fhgpGTmjD_ouUUL832xgVLgWNUg" alt="Guardiola admits Man City&#39;s &#39;penalty problem&#39; could derail ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola has admitted that Manchester City&#39;s &#39;&#39;penalty problem&#39;&#39; could hurt their Champions League ambitions. City held to a draw by Dortmund; Mahrez&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-city-mahrez-penalty-guardiola-25356982'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City have two obvious Haaland penalty deputies after Mahrez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgw_EwMoFb-DIpGUOCPfunG-eeDmlXTC5n3B0OJF2YwjtT0JW5AsXBAqs4tHXqHzKfi4IsmjE0" alt="Man City have two obvious Haaland penalty deputies after Mahrez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City have now missed 25 of the 80 penalties they have taken during Pep Guardiola&#39;s time as manager.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-city-stefan-ortega-debut-25364072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Three Man City players react to Stefan Ortega after debut vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUTzFqVJRv3M_flEfUijvi8ZEXx0I5M4_Ttf1ncM2paEoAoNWacvArYhOu-KIIM0NwwA2zS2nx" alt="Three Man City players react to Stefan Ortega after debut vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola had rung a number of changes to the starting XI with Kevin De Bruyne benched while Julian Alvarez was handed his fourth start of the season.</p></div>
            </div>
        </a><a href='https://www.planetsport.com/soccer/news/stefan-ortega-delighted-keep-clean-sheet-man-city-debut'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stefan Ortega delighted to keep a clean sheet on Man City debut</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHERb8j5qehSFCbJ8nGq91m7mm9fE5hTof9kQQCbbmeL8E6TsIfWh36l7hQrhQDEVPHQAIhUXb" alt="Stefan Ortega delighted to keep a clean sheet on Man City debut" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stefan Ortega described his Manchester City debut as perfect after keeping a clean sheet in the goalless Champions League draw away to Borussia Dortmund&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20230889/man-city-guardiola-penalty-record-revealed-sold-flops/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City have missed a THIRD of penalties under Guardiola with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvcA9oOT3dhONdAeiLIUzFA7Ri-FWludGyu3ThIhJWIy8t6Ta4gpJzvWRKvfSPEs_bBS1Jv1zH" alt="Man City have missed a THIRD of penalties under Guardiola with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MANCHESTER CITY&#39;S shocking penalty record under Pep Guardiola has been revealed.And the data suggests that the worst offenders get flogged by the form.</p></div>
            </div>
        </a>
        </Template></>;
}