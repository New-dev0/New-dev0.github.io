import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bayern Munich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bayern Munich"/>
        <meta name="description" content="Trending News about Bayern Munich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bayern Munich</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1665308362.webp?utm_source=fb" alt="Bayern Munich"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/sports/bundesliga-2022-23-anthony-modeste-to-the-rescue-as-borussia-dortmund-draw-with-bayern-munich-in-pics-photos-228588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bundesliga 2022-23: Anthony Modeste To The Rescue As Borussia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBYYfgJwN8O68vi0fPT5rAY4_1W_NUB_JPqd9xhEJx8uu64OwVzpPpWjUS3nG-OwtVZ1AineP7" alt="Bundesliga 2022-23: Anthony Modeste To The Rescue As Borussia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Modeste snatched a goal for Borussia Dortmund late on as they grabbed a draw against rivals Bayern Munich in the much-anticipated Der Klassiker.</p></div>
            </div>
        </a><a href='https://www.newindianexpress.com/sport/football/2022/oct/09/bundesliga-borussia-dortmund-make-comeback-to-secure-2-2-draw-against-bayern-munich-2506375.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bundesliga: Borussia Dortmund make comeback to secure 2-2 draw ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbJuJH4kO5SwhmuznUGLteYaE0eh5pVTOUE031XD1PUDGGxYiafaov2mIxJel5YfuW-v96XC-S" alt="Bundesliga: Borussia Dortmund make comeback to secure 2-2 draw ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was Youssoufa Moukoko who gave Dortmund hopes of a comeback at their home, scoring in the 74th minute.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/football/story/bayern-munich-defender-matthijs-de-ligt-after-der-klassiker-draw-not-the-best-game-for-us-2283003-2022-10-09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich defender Matthijs de Ligt after Der Klassiker draw ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsF6gIYpx8ALgW_uSwegsJc6XnR6M8kU-sDY3k57bQHRYG5Xk5e0LEDmRJI_JYh5BBQQ1IPy-4" alt="Bayern Munich defender Matthijs de Ligt after Der Klassiker draw ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich defender Matthijs de Ligt said it wasn&#39;t the best game for the defending champions as Borussia Dortmund nicked a late draw in Der Klassiker.</p></div>
            </div>
        </a><a href='https://www.bavarianfootballworks.com/2022/10/9/23359172/bayern-munich-transfer-analysis-awards-season-2011-manuel-neuer-jerome-boateng-emre-can-rafinha-ottl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Awards for Bayern Munich&#39;s business from the season of 2011/12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDx6e38N9ir2V7Fb0YqKUv_mCR3lpXIXUYX0BksynEzG7l_aumz3gMFRHFhCFZF3ur5bwcvhU9" alt="Awards for Bayern Munich&#39;s business from the season of 2011/12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2011-12 was the most painful season that any Bayern Munich fan could possibly endure. Runners-up in the DFB-Pokal, runners up in the Bundesliga,&nbsp;...</p></div>
            </div>
        </a><a href='https://therealchamps.com/2022/10/09/real-madrid-bayern-munich-german-star/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid battle Bayern Munich as both want German star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT68BVq1zEgEj-1d8KfvLXo0BWXAj8kZT40SbIq1Wd-ObX934dVXxJbn2C6vmm9ZxOvn4OPqPX6" alt="Real Madrid battle Bayern Munich as both want German star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the brightest young talents in football right now is Florian Wirtz, who currently plays for Bayer Leverkusen. He was playing some sensational football&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bavarianfootballworks.com/2022/10/9/23392882/bayern-munich-borussia-dortmund-der-klassiker-bundesliga-oliver-kahn-ceo-meme-champions-league-bvb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich&#39;s Oliver Kahn on his meme-worthy reaction to last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-O8oLefBQ9lXOjOjmYlpvanqvnoHuc3EWg3rjphM0BdVc4WMrEww6-2_zpFwCNPmj0b_wd4Rb" alt="Bayern Munich&#39;s Oliver Kahn on his meme-worthy reaction to last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Klassiker had an entertaining finish...for the neutrals. For the ex-Bayern keeper and current CEO, it was sheer agony.</p></div>
            </div>
        </a><a href='https://www.bavarianfootballworks.com/2022/10/9/23392058/bayern-munich-eric-maxim-choupo-moting-insult-online-abuse-hoffenheim-ronaldo-united-frankfurt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich&#39;s Eric-Maxim Choupo-Moting is the most insulted ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxxI0NEJGIS3J3AHDmpPbnyyWRKz97Z4DI5c9nnP1h8lWu5P5PXeuWNZuasrenHIFxJfHs1KuY" alt="Bayern Munich&#39;s Eric-Maxim Choupo-Moting is the most insulted ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With every online abuse study, it becomes more and more convincing just how much the beautiful game has been marred by social media.</p></div>
            </div>
        </a><a href='https://gulfnews.com/sport/football/last-gasp-borussia-dortmund-goal-through-modeste-rescues-point-against-bayern-munich-1.91151074'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Last gasp Borussia Dortmund goal through Modeste rescues point ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_ASKWarkHLu7CBc4-GQu3J502axRkQS03kNcWLryS7CUBfHuAbUj1M6IQnnFuJQtBSnnKwKsN" alt="Last gasp Borussia Dortmund goal through Modeste rescues point ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Complete a sensational two-goal comeback and snatch a 2-2 draw.</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20051974/bayern-munich-oliver-kahn-anger-borussia-dortmund-equaliser/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch Bayern Munich chief Oliver Kahn slip off his seat in anger as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdk_HJ_gfZPqSLtXIn6OdTt-_ZFi-BjO_5olm-nVn0MGVmEec4rytkyXSyya9dKGWGFm5I8Zwx" alt="Watch Bayern Munich chief Oliver Kahn slip off his seat in anger as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FUMING Oliver Kahn slipped off his chair as he watched Borussia Dortmund score a dramatic 95th-minute equaliser.The exasperated Bayern Munich CEO, 53,</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/football/rumor-bayern-munich-join-real-madrid-race-sign-german-international-reports'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich join Real Madrid in race to sign German ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdGxEsy1lVwV65ouMV5JCBa3BsQQZijT7aAKSAlsnLi4bDEvQvkRa-JcXcqreTkANyqYAwy410" alt="Bayern Munich join Real Madrid in race to sign German ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid have been joined by Bundesliga giants Bayern Munich in the race to sign Bayer Leverkusen prodigy Florian Wirtz.</p></div>
            </div>
        </a>
        </Template></>;
}