import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/27/1600x900/ANI-20221127232-0_1669563796687_1669563796687_1669563816932_1669563816932.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/sports/football/messi-argentina-spark-to-life-101669563711538.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi, Argentina spark to life</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyzQv_9MsUyv_0k2GZwGFwPYZZog19SNEWWmp6GGbsHbg_CzKBSmXKrweOzGtju0PahI_sCiEq" alt="Messi, Argentina spark to life" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi&#39;s goal and that of Enzo Fernandes ended thoughts of a premature exit for the Albicelestes | Football News.</p></div>
            </div>
        </a><a href='https://www.thedispatch.in/fifa-world-cup-messis-magic-helps-argentina-beat-mexico-2-0/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup: Messi&#39;s magic helps Argentina beat Mexico 2-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnvEUz22Moy45oqGZyJr64g0TF98s_vZ0Xj1lciQb5eDy4KjHTT4U4siAU49BsmpGGnjDpRLpy" alt="FIFA World Cup: Messi&#39;s magic helps Argentina beat Mexico 2-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doha: Lionel Messi and Enzo Fernandez scored as Argentina defeated Mexico 2-0 in a crucial game at the FIFA World Cup on Saturday at the Lusail Stadium.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/fifa-world-cup-88966-fans-watched-argentina-mexico-game-live-in-stadium-biggest-crowd-in-28-years-537898'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup: 88966 fans watched Argentina-Mexico game in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNZLU1cn7hsce2B879Jy51ix_PsTNxAYnl7MGAvuiLXls5335Q1DxBG8CiWqod7cDDs34baArr" alt="FIFA World Cup: 88966 fans watched Argentina-Mexico game in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For reasons mainly related to on-field football, Argentina vs Mexico match on Saturday will be remembered for good. However, something else also made&nbsp;...</p></div>
            </div>
        </a><a href='https://foreignpolicy.com/2022/11/27/argentina-1985-film-review-junta-trial-military-dictatorship-democracy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Argentina, 1985&#39; Review: Argentina&#39;s Junta Trial Was More ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTj6SpIdKpHju2P13B8XKCE6ZC_qFTBVQpSFMFR5tqEmQubrzPxq-BFZRUrkhZWjHMDQ-ZQJhdb" alt="&#39;Argentina, 1985&#39; Review: Argentina&#39;s Junta Trial Was More ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At a time when many people feel helpless against the larger forces of war, fascism, and injustice, it feels good to see a civilian court take down a monster&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/fifa-world-cup/story/4815180/messi-saves-argentinas-world-cup-hopes-mexico-tactics-fail'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi saves Argentina&#39;s World Cup hopes, Mexico tactics fail</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGzhUExGed5cuDwoklMbDKQfn3rJvJfB4LBMAkZS2DZZbH6CSB6Y69Kbjz9f5jOb_kgspQQqy5" alt="Messi saves Argentina&#39;s World Cup hopes, Mexico tactics fail" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina would&#39;ve been eliminated from the World Cup with a loss to Mexico. After a tight, nervy first half, Messi stepped up.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/lionel-messi-says-all-of-argentinas-matches-are-finals-now-8292505/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi says all of Argentina&#39;s matches are finals now</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyp_GM9iXDuTVqNtFSDvVSq11_zlM0k3RF369-IHUePM0TLCxn8YKakfHpkJvOhH_IcGkQNqkg" alt="Lionel Messi says all of Argentina&#39;s matches are finals now" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We lived with discomfort and kept the defeat in the opening match in our minds, says Messi on the shocking defeat against Saudi Arabia.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/26/1139287266/lionel-messi-world-cup-argentina-wins-mexico-goal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi&#39;s goal revives Argentina&#39;s World Cup hopes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGkZNoqm6x3DjuB_LQlKuVx_WbhVq8Mdk7lv9LU9AYI7F_1kiTplUiTXfK-CTVpkXWpuDct-c7" alt="Lionel Messi&#39;s goal revives Argentina&#39;s World Cup hopes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Substitute Enzo Fernandez added a second goal in the 87th minute. Argentina bounced back from a shocking 2-1 loss to Saudi Arabia in its opening match. The team&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/en/news/argentina-qualify-fifa-world-cup-2022-knockout-round-of-16-chance'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How can Argentina qualify for FIFA World Cup 2022 round of 16 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMbzrHfUKavXTL-dE6KGhdlEG09z_UyfCv9Xzn7pjARHFpEsqrsRL4i7JStVilR8QH4KdrFpxq" alt="How can Argentina qualify for FIFA World Cup 2022 round of 16 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fortunately for Argentina and Lionel Messi, their qualification for the FIFA World Cup 2022 in Qatar is still in their own hands. A win against Poland in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/argentina-result-qualify-last-16-2022-world-cup/blt56e7535b1a36907f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What result do Argentina need to qualify for last 16 of 2022 World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6NLqNTH4tK_wpK1oS1mf4ph5gKRbSGD8jGG3dRu3AGDN94W4hup36VxUHMLrR_eGJb-Y1Hg0m" alt="What result do Argentina need to qualify for last 16 of 2022 World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and his Argentina team-mates have things in their own hands again following their win over Mexico, but what result do they need to progress?</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/how-can-argentina-qualify-for-the-world-cup-knockout-stages'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How can Argentina qualify for the World Cup knockout stages?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0gPOjwqkoDKnniTRJC28f7zNHU2m48TCAnyottvMoKuApN_YWq95K7G2UxQVv39sq71iM5xPz" alt="How can Argentina qualify for the World Cup knockout stages?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina, spearheaded by a 35-year-old Lionel Messi who may never get another&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}