import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morocco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morocco"/>
        <meta name="description" content="Trending News about Morocco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morocco</h1>
            <Image width={800} height={500} src="https://www.caribbeannationalweekly.com/wp-content/uploads/2022/12/Morocco_coach.webp" alt="Morocco"/>
            <h3>Recent News</h3>
            <a href='https://www.caribbeannationalweekly.com/sports/morocco-reaches-last-16-of-world-cup-beats-canada-2-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco reaches last 16 of World Cup, beats Canada 2-1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1AI4qGevpMCf33yURgs6AUoTU87NX46itGUYHKzJtq_tCW_yp5uTyjujXbAVrT6u6aVRdbXRv" alt="Morocco reaches last 16 of World Cup, beats Canada 2-1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Walid Regragui stood in the middle of a team huddle as his players reached out and patted him vigorously on the head. Then they threw their.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4821707/morocco-reach-round-of-16-as-canada-world-cup-campaign-ends'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco reach round of 16 as Canada World Cup campaign ends</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpFdahIwn_BHjpL3hVFNjdevCJquqmOO3iwd4ONJI51Yq3yZK8Gz1ctgHjQ98eFGB_zgoKOXL3" alt="Morocco reach round of 16 as Canada World Cup campaign ends" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Achraf Hakimi was brilliant while fellow wing-back Noussair Mazraoui was outstanding on the opposite flank. Then there was the trickery and brilliance of Ziyech&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/morocco-through-last-16-after-beating-canada-2022-12-01/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco through to last 16 after beating Canada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGoPfy7Un9hiSq7NrjRYcKnGCbiiJVHtsYkPgCttu_geG1GeT50Zypa3JfhLd7X821_c5JzVoU" alt="Morocco through to last 16 after beating Canada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two first-half goals set Morocco on their way to top place in World Cup Group F but they had to hold on for a 2-1 win over Canada at the Al Thumama Stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://www.middleeastmonitor.com/20221202-arabs-cheer-morocco-as-it-becomes-last-arab-team-in-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arabs cheer Morocco as it becomes last Arab team in World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQa1e1KZkzcySjMd-E-uaUvzMe3uGG0QO5Mc9sSf5dBtrUDxY36ugNzobzNFkHdVDlNky30hpIX" alt="Arabs cheer Morocco as it becomes last Arab team in World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moroccan fans celebrated on Thursday as their country became the only Arab nation to reach the knockout rounds of the first World Cup held in an Arab&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mlssoccer.com/news/world-cup-player-ratings-canada-go-out-with-dignity-against-morocco'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup Player Ratings: Canada go out with dignity against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0mWKGEBYOgmox3vcPKM35DNAfDrZH615Os9wVhP0i7qngYv5HDq_ogyVWBbhM3nfFWoon873o" alt="World Cup Player Ratings: Canada go out with dignity against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Canada ended their participation in the 2022 FIFA World Cup on Thursday with a 2-1 loss against Morocco for their final game in Group F.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/canada-vs-morocco-world-cup-2022-live-score-updates-result/v9xEtyp1mBLg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup result: Morocco advanced to knockout stage with win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMjRtV62-DbdCGie3vEfFh7g7N8Jy0uIGKyyI4dscIOloj5QsqN5X3wXjboJseEi4BFWvUSEEH" alt="World Cup result: Morocco advanced to knockout stage with win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Canada play Morocco in the final round of group games. Morocco will qualify for the knockout stages if they avoid defeat, and could win the group if they&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jpost.com/conferences/article-723926'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kingdom of light: Tourism campaign creates desire to come, return</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7Al9LyHs7_ZZN8XY3k3jVaE0RGITIthdC8B1CfMNZd2IbOBxBtaKOlEIsqEG-j5BCjwkYO7E5" alt="Kingdom of light: Tourism campaign creates desire to come, return" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moroccan National Tourism Office shares why and how it launched a new brand communications campaign.</p></div>
            </div>
        </a><a href='https://atalayar.com/en/content/german-exports-morocco-grow-twelfth-year-row'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>German exports to Morocco grow for the twelfth year in a row</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThNc_Jg0UBkdJktfvHs4IJLNumkd46xn1T-jaZ99sVTPe78wkZpfzbcIvSDQSRYi3eB3jI1blA" alt="German exports to Morocco grow for the twelfth year in a row" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>German investments have increased by 643 % since 2010. On the other hand, the North African country is no longer only exporting agricultural products,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.surfline.com/surf-news/morocco-surf-season-officially-open/166613'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco Surf Season Is Officially Open</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ18Nx27ok4gCyxjVSoF7drQrhD4-eA9Uw4iK_XBzxXWOw2ThAJifucfCtG7_Gwvbaaiox-EuFZ" alt="Morocco Surf Season Is Officially Open" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Video by Amine Nader, Edited by Tom Vaughan. Late last week, the North Atlantic offered up a funny old swell for a select few spots along Europe&#39;s western&nbsp;...</p></div>
            </div>
        </a><a href='https://northafricapost.com/63186-sixty-guinean-security-officers-wrap-up-three-month-training-in-morocco.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sixty Guinean Security officers wrap up three-month training in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwmq59movQlvdBcHiaDRkXg67HBaRCO7Epd-zgkwome9jEMNa3aw4g972HRgGXgcJz4HT9C14O" alt="Sixty Guinean Security officers wrap up three-month training in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sixty security officers from Guinea-Conakry graduated Thursday from Morocco&#39;s Kenitra Royal Police Institute after three months of training on a range of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}