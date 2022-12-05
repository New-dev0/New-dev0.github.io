import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trevor Lawrence</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trevor Lawrence"/>
        <meta name="description" content="Trending News about Trevor Lawrence" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trevor Lawrence</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fblackandteal.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F19562572.jpeg" alt="Trevor Lawrence"/>
            <h3>Recent News</h3>
            <a href='https://blackandteal.com/2022/12/04/jaguars-trevor-lawrence-injury-return-lions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars QB Trevor Lawrence back and playing vs. Lions following ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzKubWp_wZJo_PVL_dUwIb0xFomfsESdVarArnnHUc8C9fm8XmGhB9OKG11WKqFQC_Sax0Z7r_" alt="Jaguars QB Trevor Lawrence back and playing vs. Lions following ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars are probably feeling relieved following a lower-leg injury Trevor Lawrence suffered in the first half of Week 13.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/trevor-lawrence-scare-jaguars-qb-grabs-leg-after-awkward-sack-but-soon-returns-against-lions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Lawrence scare: Jaguars QB grabs leg after awkward sack ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGE38sJCcmxvaUX6eWjGkfDIL-4fdjUxkvEUrxKmdAXRnGVOvFp91x7HjcwXjm7NAhIFTfm5dz" alt="Trevor Lawrence scare: Jaguars QB grabs leg after awkward sack ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars quarterback was hit low by Lions outside linebacker James Houston and got twisted as he went down. He walked away under his own power,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bigcatcountry.com/2022/12/4/23492875/trevor-lawrence-injured-against-the-lions'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Lawrence returns from injury against Detroit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHp_iRq0BPiwNRjtdltV3xHktHMASeO4VGZoErEvzg26bWKuiX-wZG88MU1Tm1KxJPkvlyLVAB" alt="Trevor Lawrence returns from injury against Detroit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars are getting their butts handed to them by the Detroit Lions. The score at halftime is 23-6, bad guys. To make matters worse,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/2022/12/04/jaguars-quarterback-trevor-lawrence-injury-scary-play-lions'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars QB Trevor Lawrence Appears to Get Injured on Scary Play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlE_dWq2uEtiwSANSQmZ1JUfn9RqUZ8a8GoPhet_dR96B84Sf--KJOZDF-Gm_ZnLNXsGLtZVp3" alt="Jaguars QB Trevor Lawrence Appears to Get Injured on Scary Play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lawrence was taken down by Detroit linebacker James Houston, who twisted the quarterback while he was being tackled. After Lawrence was on the ground, he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news4jax.com/sports/2022/12/04/bad-news-trevor-lawrence-suffers-leg-injury-on-sack-during-game-against-lions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Lawrence suffers leg injury on sack during game against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQoo1714y5WoVCbG_-6rlJIyQTTpvx5HlmrvXOWsg0K_TqChS8QDVhgFmOoWCHMjtjAOBTAepnZ" alt="Trevor Lawrence suffers leg injury on sack during game against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Lawrence suffered an injury to his left leg at the end of the first half of Sunday&#39;s game against the Lions, an injury that looked devastating when&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jacksonville.com/story/sports/nfl/2022/12/04/trevor-lawrence-injury-jacksonville-jaguars-qb-hurt-vs-lions/10833850002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacksonville Jaguars quarterback Trevor Lawrence back in game ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5SUGm4v8HPB4jzMt6w9KjFiChKEy1YLvpwAwqEhAyuWCV48SuGtbZGCdZspKFKYaTnA5riEet" alt="Jacksonville Jaguars quarterback Trevor Lawrence back in game ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just before halftime, Jags quarterback Trevor Lawrence went down with a injury after being sacked by the Lions&#39; James Houston.</p></div>
            </div>
        </a><a href='https://jaguarswire.usatoday.com/2022/12/04/trevor-lawrence-injury-update-jaguars/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Lawrence says foot was hurting, but &#39;not anything serious&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaCrMtrUpBG8xm7XZ8vS7bNS5uhl_81761c_3DQ5F57vNbtqZFD7jUiZKsPff9CeApZz_JiBbO" alt="Trevor Lawrence says foot was hurting, but &#39;not anything serious&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jacksonville Jaguars fans feared the worst when quarterback Trevor Lawrence went down and reached for the back of his knee after an awkward sack Sunday.</p></div>
            </div>
        </a>
        </Template></>;
}