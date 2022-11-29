import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Musiala</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Musiala"/>
        <meta name="description" content="Trending News about Musiala" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Musiala</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/47DF/production/_127799381_jamalmusiala.jpg" alt="Musiala"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.co.uk/sport/football/63776700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The next Messi&#39; - Musiala destined for greatness</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROppmjsw0M7uKbYuK74lYPvoII_xj5IS-qbULZ3tiagm8ki88hEM3FrY50seA1pAplwwe2ZilI" alt="&#39;The next Messi&#39; - Musiala destined for greatness" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Germany teenager Jamal Musiala&#39;s performance in the 1-1 draw against Spain again shows how exciting his future in the game can be.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11476841/Jamal-Musiala-hailed-future-Ballon-dOr-winner-Germany-draw-Spain-World-Cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamal Musiala hailed as a &#39;future Ballon d&#39;Or winner&#39; after Germany ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ-9bHXyBlxwjSmhv5s8am-S87gx1bNEhXw1YK2Y840We9q1mbeFpfcG2_nPTs30C2vRbzUyue" alt="Jamal Musiala hailed as a &#39;future Ballon d&#39;Or winner&#39; after Germany ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala has been widely lauded after his eye-catching display on Sunday night, with fans comparing the German teenager to Lionel Messi and backing him&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bavarianfootballworks.com/2022/11/28/23480611/spain-vs-germany-fifa-2022-world-cup-musiala-flick-fullkrug-kimmich-sane-muller-qatar-sule-gnabry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After disappointing miss against Spain, Germany&#39;s Jamal Musiala ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbpaqdagmicGRRAK8-i-xbwRPdvpYbvL9jTTnYdVedNgcEG292upw_vux-gnGhsLRZZL4YWbcv" alt="After disappointing miss against Spain, Germany&#39;s Jamal Musiala ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was almost too perfect. Germany was desperate and things had not looked great for just about the entire World Cup match against Spain.</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/28930-zambian-legend-kalusha-bwalya-reveals-jamal-musiala-opted-play-germany-nigeria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zambian Legend Kalusha Bwalya Reveals Why Jamal Musiala ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZmlJG8nVY_Y2QIsWwfg49B6fDUZ1cuOEuqfka19zG4LnOMWqWQoWOEuwGqdR7b-_F59g4YO9X" alt="Zambian Legend Kalusha Bwalya Reveals Why Jamal Musiala ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News - Jamal Musiala has been impressive for the German national football team, but he could have featured for Nigeria, where his father&nbsp;...</p></div>
            </div>
        </a><a href='https://metro.co.uk/2022/11/28/world-cup-germanys-jamal-musiala-can-be-next-lionel-messi-lothar-matthaus-17839350/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Germany&#39;s Jamal Musiala can be next Lionel Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTc_dXUUQlQBF62liLrJTWMHo1fZRFLCa2Yk0A19pdkolSWG56SdBB6mirJMNHCEAjgyUe_N7NX" alt="World Cup: Germany&#39;s Jamal Musiala can be next Lionel Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup winning captain Lothar Matthaus believes that young Germany star Jamal Musiala could be as good as the legendary Lionel Messi. 19-year-old Musiala&nbsp;...</p></div>
            </div>
        </a><a href='https://www.givemesport.com/88089026-jamal-musiala-german-wonderkid-compared-to-messi-made-world-cup-football-look-easy-v-spain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamal Musiala: German wonderkid compared to Messi made World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Jamal Musiala: German wonderkid compared to Messi made World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala made World Cup football look easy with his brilliant performance agains Spain in Qatar on Sunday. On a night where his Germany teammates&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}