import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal World Cup"/>
        <meta name="description" content="Trending News about Portugal World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal World Cup</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221128154625-01-portugal-uruguay-match-pitch-invader-1128.jpg?c=16x9&q=w_800,c_fill" alt="Portugal World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/28/football/pitch-invader-rainbow-flag-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pitch invader with rainbow flag interrupts World Cup match between ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGNy2_8hUBM4PbOgDZfS3LhzyY5tEFx0jTwfzLLxwGqSUNRYUkrefzYZktZYvL27lCo_zOcgzu" alt="Pitch invader with rainbow flag interrupts World Cup match between ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup match between Portugal and Uruguay was briefly interrupted by a pitch invader waving a rainbow flag on the field at the Lusail Iconic Stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/live/2022/11/28/sports/world-cup-portugal-uruguay-score'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal and Brazil Join France in the Round of 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9uZr296Xpu_K1FJatLt33IKQDFJoKAC0X0PTOGxMv-48LRRYdsosTLnmmtjh19-iaRHebIz18" alt="Portugal and Brazil Join France in the Round of 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghana beat South Korea, and Cameroon and Serbia tied to keep its World Cup hopes alive.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/soccer/2022/11/28/23482736/world-cup-protester-rainbow-flag-photos-video-shirt-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup protester runs onto field with rainbow flag during Portugal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQOi22GBMaLUo66oyJhkYCR_YM3yp0H9Ey-A_QnMqsPojjRxK-Po3JEWJKf1t2JY4kd3AvlRwFV" alt="World Cup protester runs onto field with rainbow flag during Portugal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man carrying a rainbow flag ran into the field during the Portugal-Uruguay match in the World Cup.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/soccer/worldcup/2022/11/27/world-cup-updates-brazil-ghana-portugal/10786884002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monday World Cup recap: Bruno&#39;s brace lifts Portugal over Uruguay ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-88h5V6J9p9lyT0NlpV3OX34EKQFCnBqmwb9uzwMNP4o0685LvYtWdGh_NosuwqZWVJv6YzZZ" alt="Monday World Cup recap: Bruno&#39;s brace lifts Portugal over Uruguay ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The pre-tournament World Cup favorites, Brazil, secured a spot in the knockout round without Neymar.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/portugal-vs-uruguay-live-updates-confirmed-line-ups-score-stats-and-highlights-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs Uruguay summary: Fernandes double, score and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmzuwW_K8sH8NpVTlnbhxtTDPgvdhGl1RqGl0BxB4t97hYRnSQz1TFF2PFXL6W46O0Q-WqVXoC" alt="Portugal vs Uruguay summary: Fernandes double, score and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After that Messi goal against Mexico, the football world will look at what Cristiano Ronaldo has stored to keep up with the Argentinian. Like in their best&nbsp;...</p></div>
            </div>
        </a><a href='https://kslsports.com/495921/portugal-advances-to-last-16-beats-uruguay-2-0-at-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal Advances To Last 16, Beats Uruguay 2-0 At World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHtnW45Sl842RqD-C2Rpi6zCDui-vXmt4luJQwKHn9M_v6mQY8cjFzwyKjv2mGwBGvH527YLcb" alt="Portugal Advances To Last 16, Beats Uruguay 2-0 At World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruno Fernandes was eventually credited with the goal that set up Portugal&#39;s 2-0 win over Uruguay, advancing the team into the last 16.</p></div>
            </div>
        </a>
        </Template></>;
}