import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trevor Noah Daily Show</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trevor Noah Daily Show"/>
        <meta name="description" content="Trending News about Trevor Noah Daily Show" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trevor Noah Daily Show</h1>
            <Image width={800} height={500} src="https://hips.hearstapps.com/hmg-prod/images/index-noah-1670601896.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="Trevor Noah Daily Show"/>
            <h3>Recent News</h3>
            <a href='https://www.esquire.com/entertainment/tv/a42198520/trevor-noah-the-daily-show-farewell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah Signs Off From The Daily Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-HS9_46ygMn-DXKc92QN_-Tqttge1l78SLseT0OF0Wg6lnyABMc0VyZIPq3L02TkwQR2mJdcG" alt="Trevor Noah Signs Off From The Daily Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Please don&#39;t forget the world is a friendlier place than the Internet or the news would make you think,&quot; Noah said in his final sign-off from &#39;The Daily&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/09/arts/television/trevor-noah-daily-show-final-episode.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah&#39;s Optimism Set His Version of &#39;The Daily Show&#39; Apart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVBWuSsVfTbJTRv4kfct-BUFLtlTWAv9IjbgiBiCS1TMnGiaNgebyvq9TSS5EoVy6_J8VS9tG9" alt="Trevor Noah&#39;s Optimism Set His Version of &#39;The Daily Show&#39; Apart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Though his final episode made the mysterious reason for his departure a running joke, his specials and memoir suggest he was always comfortable with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/hollywood/2022/12/trevor-noah-daily-show-finale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah Says Goodbye to &#39;The Daily Show&#39; With Nostalgic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVKZtNqjDtkqwpOFxr4-S7P0JUsssDcTZGp9XS3QgOQPNyM73G2t80WsLvXFFr4icmcevGBST6" alt="Trevor Noah Says Goodbye to &#39;The Daily Show&#39; With Nostalgic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With cameos from Oprah, Issa Rae, Tracee Ellis Ross, Vice President Kamala Harris, and more.</p></div>
            </div>
        </a><a href='https://www.avclub.com/the-daily-show-trevor-noah-final-episode-goodbye-1849876350'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah gives one last tearful goodbye to The Daily Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQy36S6wPIs6P4jx-LW876mS3u5cOAR5vh_9j1CWNbJ0B2Yx8NKWWogF83L8EbWf_RncArF05Dm" alt="Trevor Noah gives one last tearful goodbye to The Daily Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After seven years, the comedian ended his hosting gig for the Comedy Central late show on Thursday night.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/culture/2022/dec/09/trevor-noah-daily-show-final-episode-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah on his final Daily Show: &#39;If you truly want to learn about ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_1roirEtnZaPvBo8HGSPWj8JG3cVLs_-wQeE9hWbuypirum-FQM942pE0N3DAUnCidUogT-9T" alt="Trevor Noah on his final Daily Show: &#39;If you truly want to learn about ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Noah says farewell after seven years on the Daily Show, and late-night hosts discuss Brittney Griner&#39;s release from Russian prison.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/09/trevor-noah-daily-show-last-episode-farewell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Noah Signs Off &#39;Daily Show&#39; with Emotional Farewell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCQsHFpgzw7YVkx4x12XHjd029X3Ldp_X5DkuyQe5QMyugQoXk17cE3AGQabVNXMMlZJJ79-AS" alt="Trevor Noah Signs Off &#39;Daily Show&#39; with Emotional Farewell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Noah said his final farewell to &quot;The Daily Show&quot; Thursday night and on his way to the exit, he got pretty emotional talking about who he credits for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}