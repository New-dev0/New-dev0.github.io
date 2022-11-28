import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Advent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Advent"/>
        <meta name="description" content="Trending News about Advent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Advent</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/4df27a2/2147483647/strip/true/crop/3500x1838+0+248/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3c%2Fe9%2Fd122b1e845959b262bdc8fe6e9e3%2Fistock-886942586.jpg" alt="Advent"/>
            <h3>Recent News</h3>
            <a href='https://www.sandiegouniontribune.com/news/religion/story/2022-11-27/for-christians-of-all-persuasions-advent-is-a-season-of-preparation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>For Christians of all persuasions, Advent is a season of preparation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfQ4RSXwK2KQ_zCeozab78Mg4__6OivVBAu1MBccOhkEtZSBxqm2_RKx1uy6V_YGYnMnE813mG" alt="For Christians of all persuasions, Advent is a season of preparation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cute little boy lights a row of candles for the Advent season, a time of remembrance and reflection on the coming birth of Jesus Christ and the Christmas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncregister.com/commentaries/a-particularly-eucharistic-advent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Particularly Eucharistic Advent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmxHu_Y0ZM6l2_-6c0laY379fleDhewQLKVOTlO0RjjFSYDFndKVLOe4gsojiL0oHfeYubB1tw" alt="A Particularly Eucharistic Advent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COMMENTARY: Both Advent and the Holy Eucharist are about not just our desires but God&#39;s much greater desire.</p></div>
            </div>
        </a><a href='https://www.thenews-messenger.com/story/news/local/2022/11/27/today-is-advent-sunday/69656847007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today is: Advent Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQeFVpdjYdIjQTgLMp53ILYIWejf1SWf17mJW3JLw2ol33xqsvchitjbXXpV-Iy1LJ3jP-eedHZ" alt="Today is: Advent Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A past Advent service being held at Grace Lutheran Church. Advent Sunday is celebrated by Christians all around the world — in particular by those whose&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/lifestyle/christmas-time-reclaim-season-advent-south-carolina-faith-leader'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Christmas nears, it&#39;s time to &#39;reclaim&#39; the season of Advent, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdlpoCi0k3vd7ScA3dFfLlxzoOydyeZNnG0RjUpY8_9MjpxJGYm2yceM3uz0Tza2zjs_LqAFji" alt="As Christmas nears, it&#39;s time to &#39;reclaim&#39; the season of Advent, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Christmas nears, Fr. Jeffrey Kirby of Indian Land, South Carolina, explains why we need to reinvigorate our observance of Advent: It&#39;s a &quot;demanding&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sungazette.com/news/religion/2022/11/footsteps-to-follow-the-season-of-advent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Footsteps to Follow: The season of advent</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Footsteps to Follow: The season of advent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We are beginning to celebrate the season of Advent. We have two seasons in the church that help us prepare for the coming of major events within the church.</p></div>
            </div>
        </a><a href='https://trib.com/opinion/columns/rudkin-step-into-advent/article_b9d6d1ce-6cf5-11ed-a5b4-fbd5e8ec30cd.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rudkin: Step into Advent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBGY5jIIi-tjUINi3K8xjW3NYroauITIeoSXJv8BqP6lOP6RHgQicRkioI-1LGDjWJ7i0Vt_14" alt="Rudkin: Step into Advent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The turkey carcass is simmering on low, slowly the pumpkins are disappearing, and the special decorations are tucked away for another season.</p></div>
            </div>
        </a><a href='https://www.lowellsun.com/2022/11/27/the-column-a-lowell-advent-countdown-to-christmas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Column: A Lowell Advent countdown to Christmas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrOShTjComab42pMgEe5TNU289rGB1yySV1-TBbRFn5PcR5S5rYpWECwPzidP61ERZO83i7MeC" alt="The Column: A Lowell Advent countdown to Christmas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BLACK FRIDAY is over. Santa came to town. The Lowell City Council has a bye week. And today marks the first of four Sundays in the Christian church&nbsp;...</p></div>
            </div>
        </a><a href='https://relevantradio.com/2022/11/01-make-it-a-great-advent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Make it a great Advent! - Relevant Radio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAMAnf4SOiXqTonr6N-ugFRw7KUUf90mv_A63PAl14ob7xzZN8IKQzTSGVDrIliFjpaZzo12M_" alt="Make it a great Advent! - Relevant Radio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hi, this is Fr. Rocky with an Advent Inspiration just for you! St. John the Baptist prepared people for the coming of Christ by calling them to conversion and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncregister.com/cna/detroit-bishop-calls-for-penitential-advent-after-passage-of-michigan-abortion-initiative'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Bishop Calls for Penitential Advent After Passage of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSltg3P6AHpnN585LWuKx6fVgZ6kMNUYBsGZN3MHnF84PcA7BKUNNJ2f97nDjGdthxGhzsv3PBb" alt="Detroit Bishop Calls for Penitential Advent After Passage of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Archbishop Vignernon calls on Michigan Catholics to spend the first two weeks of Advent doing penance following the passage of a constitutional amendment to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}