import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anthony Johnson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anthony Johnson"/>
        <meta name="description" content="Trending News about Anthony Johnson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anthony Johnson</h1>
            <Image width={800} height={500} src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/11/anthony-johnson-sbc-graphic.png?w=1024&h=576&crop=1" alt="Anthony Johnson"/>
            <h3>Recent News</h3>
            <a href='https://mmajunkie.usatoday.com/2022/11/ufc-video-remembering-anthony-rumble-johnson-after-death'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video: Memories of Anthony &#39;Rumble&#39; Johnson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcIGjSId7-nVviyeJbxBVNmltYTRjVHuUc7gyPjTVlGH9ZraQ0orNtVjK94MsYdPPt8BJSwOHb" alt="Video: Memories of Anthony &#39;Rumble&#39; Johnson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of MMA&#39;s all-time knockout artists, Anthony Johnson should appear on any list of greatest fighters to never win a UFC title.</p></div>
            </div>
        </a><a href='https://www.ufc.com/news/anthony-rumble-johnson-1984-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony Johnson, 1984-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTN4xCEfQWx0rnnfzM7e3suJLsP5boUs38l5dy1KWOIyfu9jhKHV3sfOW4eZvPzWjA6DV9N8xbo" alt="Anthony Johnson, 1984-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony &quot;Rumble&quot; Johnson was one of the hardest punchers to ever grace the Octagon, a knockout artist of the highest order, and a young man taken too soon,&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/anthony-rumble-johnson-former-ufc-fighter-dead-at-38-215300816.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony &#39;Rumble&#39; Johnson, former UFC fighter, dead at 38</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpg6ppIoy0uBGBFr_7mV6hUjPcM2t15A7LDXCyu30SeVSsW9LnVIvRAwNKOwBwCwJ9sJRhusxA" alt="Anthony &#39;Rumble&#39; Johnson, former UFC fighter, dead at 38" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony &#39;Rumble&#39; Johnson, 38, who spent a decade in the UFC from 2007 through 2017 as one of the hardest-hitting fighters in mixed martial arts history,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/ufc/2022/11/15/6373188c46163f82518b45d2.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony &#39;Rumble&#39; Johnson: official cause of death revealed after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQvCrL3gbfGG8tYXaM15amamY4eQS2ClMgYxOc194sRaLAyuuS1aW-d-mD4EVWqWFDqOIXjwV3" alt="Anthony &#39;Rumble&#39; Johnson: official cause of death revealed after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony &#39;Rumble&#39; Johnson passed away over the weekend, shocking MMA fans all over the world. Born in Dublin, Georgia. The fighter with a wrestling&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/mma/story/_/id/35021397/anthony-rumble-johnson-dies-lengthy-illness-bellator-mma-says'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony &#39;Rumble&#39; Johnson dies after lengthy illness, Bellator MMA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLWXT05niVOJu9we98Eqmpm0Y1lXvzZT-tB13hTsLxWP4FLeD2exI6nOcjkDOEV8xk7Q15HR86" alt="Anthony &#39;Rumble&#39; Johnson dies after lengthy illness, Bellator MMA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony &quot;Rumble&quot; Johnson died at age 38. A Bellator spokesman said he had been ill for more than a year.</p></div>
            </div>
        </a><a href='https://www.bloodyelbow.com/2022/11/15/23459309/anthony-rumble-johnsons-cause-of-death-revealed-ufc-mma-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>More details on UFC vet Anthony &#39;Rumble&#39; Johnson&#39;s illness, cause ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSd390l1LlCeECzEzAMAvUnhb7NCroMxl36PagzUEC2BJ88BbnTQYlXVJ7QPyN3-AC4ueYf7j8o" alt="More details on UFC vet Anthony &#39;Rumble&#39; Johnson&#39;s illness, cause ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A few more details have emerged regarding the death of former UFC title contender Anthony &quot;Rumble&quot; Johnson.</p></div>
            </div>
        </a>
        </Template></>;
}