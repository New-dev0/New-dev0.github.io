import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France vs Australia"/>
        <meta name="description" content="Trending News about France vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France vs Australia</h1>
            <Image width={800} height={500} src="" alt="France vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/france-vs-australia-lineups-and-live-updates/bltf4ee12674b4425b4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France vs Australia: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRDDYEjaVH-fKOruKglVneNIswsNeeIoYQtSkqJs6MEXDx5AbnnsZ8HJkIA2WQB1uq4-QG462F" alt="France vs Australia: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2018 World Cup winners France will take centre stage when they begin their title defence against Australia at the Al Janoub Stadium.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/au/soccer/news/france-vs-australia-world-cup-live-score-result/rxunil3ordneozxpbyozjxfn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France vs. Australia final score, result: Olivier Giroud double ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS59M7EKp-UREFZ3tVNXO2rmzEJ3VLXSBvPjaEh7kOkBlYfA-VqnLRZdtGzYSHW9tj4fbiZxWfS" alt="France vs. Australia final score, result: Olivier Giroud double ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sporting News is tracking live scoring updates and highlights for France vs. Australia at the 2022 World Cup. Follow for complete results from the Group D&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/france-vs-australia-live-online-score-stats-and-updates-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France vs Australia summary: score, goals, highlights 4-1 | Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhrDNUNT1tlLNV43HmSOxJ1rOSkiyu8aMwZScYzySQgpaT0tPZW1NhTHejBLhsvaMU6yqX_BkA" alt="France vs Australia summary: score, goals, highlights 4-1 | Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Welcome back to another night of World Cup soccer. For this coming match, we have the game between France and Australia. Earlier today, in this group, Denmark&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/chelsea/world-cup/2022-fifa-world-cup-france-vs-australia-live-commentary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: France vs Australia LIVE Commentary</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIIkJuQAAuC_NZcKjxIPoMu3kiTBXpr-ZaUIQMxVgADI-KR_Ru1c61b9qkOzqHr_s7CjeQAe-a" alt="2022 FIFA World Cup: France vs Australia LIVE Commentary" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France take on Australia in the second game of the evening in Group B, and will be looking to get off to a great start in their pursuit of defending the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/liveblog/2022/11/22/live-france-vs-australia-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France vs Australia 4-1: World Cup 2022 – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_OYurrVtB4AxLIuldso5yO56-0N9f72J7SWlltRl-Z8Q-yC1ezDIZy1nsyHK1Wuc_krswo5HH" alt="France vs Australia 4-1: World Cup 2022 – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the updates from the FIFA World Cup 2022 Group D match between France and Australia at Al Janoub Stadium.</p></div>
            </div>
        </a><a href='https://www.sportsmole.co.uk/football/france/world-cup-2022/feature/world-cup-2022-france-vs-australia-head-to-head-record_500296.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: France vs. Australia head-to-head record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOqTnqwxCwtSyDT-mfKK0Mr2jao2ASQDVRwtuROMdAbuWrAOAjE2P0Iswm4bm3w-_lF2ydUDVH" alt="World Cup 2022: France vs. Australia head-to-head record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of Tuesday&#39;s World Cup clash between France and Australia, Sports Mole looks at the head-to-head record between the two sides.</p></div>
            </div>
        </a>
        </Template></>;
}