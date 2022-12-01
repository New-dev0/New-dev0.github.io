import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England"/>
        <meta name="description" content="Trending News about England" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England</h1>
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1129%2Fr1099223_1296x729_16%2D9.jpg" alt="England"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/fifa-world-cup/story/4819485/2022-world-cup-england-advance-send-wales-home-as-rashford-enters-golden-boot-race'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: England into knockout stage, send Wales home</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdmWkaMPm2Ygt1HziS66ozquLtBNYb3cnVd6KPUlq2sJdDfH2_Uku2vk288KqKo2Y9QZwdwCbO" alt="2022 World Cup: England into knockout stage, send Wales home" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>And after Southgate was criticised for his in-game management against Wales, it should be noted that Foden&#39;s goal was in part the product of Rashford and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/29/uk/england-wales-christianity-census-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England and Wales are no longer majority Christian, census data ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5TFHGrkqP5OV_fKQsPb0lWHZIlo44cxfOMoU9WhZTgjSDfiQmb2m4bljUQyfpYbN0ORMf2dRv" alt="England and Wales are no longer majority Christian, census data ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two British nations have fallen from 59% self-described Christian in 2011 to 46% in 2021, the Office for National Statistics (ONS) announced Tuesday. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/entertainment-arts-63808150'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: More than 16 million watch England knock out Wales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbMmkNX9qdyIiaq7QHNZkzdCxa_wnW0Vk5kL3mY1_XcF-bEmkoR8MKA_8mapGLNazmvTgKpU5q" alt="World Cup 2022: More than 16 million watch England knock out Wales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An average UK audience of 16.59 million TV viewers watched England&#39;s 3-0 win over Wales on BBC One on Tuesday night. The figure comes from overnight figures&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/29/sports/world-cup/england-wales-win-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England Remakes the Case for Itself With a 3-0 Win Over Wales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6xZHVOYL1dkBsBklGyhsFyc8ANqL3Urk25eKiQhlWWCTu32Iqtbxb-uoJru5Cckvk-uqnysr7" alt="England Remakes the Case for Itself With a 3-0 Win Over Wales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England&#39;s World Cup soccer players wearing white jerseys with blue sleeves celebrate with each other on. England&#39;s Marcus Rashford, center, celebrating with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.barrons.com/news/ben-white-out-of-england-world-cup-squad-fa-01669834807'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ben White Out Of England World Cup Squad: FA</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ben White Out Of England World Cup Squad: FA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England defender Ben White was ruled out of the remainder of the World Cup after leaving the squad for &quot;personal reasons&quot;, the Football Association said on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/30/rashfords-resurgence-enhances-englands-attack-for-senegal-tie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rashford&#39;s resurgence enhances England&#39;s attack for Senegal tie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlPj3OrH9sER0aYDCIcQ6cF-pskE5z-9XQ1X14RJEITHlVHG-odcAryk6ESjgpnFtUwWwpye1j" alt="Rashford&#39;s resurgence enhances England&#39;s attack for Senegal tie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gareth Southgate has a wealth of attacking talent to fit into England&#39;s forward line with multiple combinations possible for the last-16 tie against&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3951697/2022/11/30/brendan-perlini-hockey-england-soccer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watching England&#39;s football best with Brendan Perlini, one of its ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJ2IEVZy-w6GAcNBDU0f08659wiw7q6yCa9nxRsT-A38hm89sq4mFmxTy6kK_SrIJyDzDhTWQR" alt="Watching England&#39;s football best with Brendan Perlini, one of its ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Athletic&#39;s Scott Powers invited Chicago Wolves forward Perlini, who was born in England, to watch England face Wales in the World Cup.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-63792408'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Less than half of England and Wales population Christian, Census ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2Qifj4f6QiA2zscWzz1S2daD6N04tG9b3nM5JRcDcTo8z7Zw5AEsapaAjn_Y2Dlubn4N_KhUw" alt="Less than half of England and Wales population Christian, Census ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The number of people who say they have no religion has risen, the 2021 Census for England and Wales shows.</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/england-defender-white-leaves-world-cup-personal-reasons-2022-11-30/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England defender White leaves World Cup for personal reasons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcp8HfeGUEldF067n1ECaAIjN5Jyx23Eqn77eU5jLZdFmtXuMeEuB0qmfY37kkVKPM0DUk3Aqg" alt="England defender White leaves World Cup for personal reasons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defender Ben White has left the England camp and gone home for personal reasons, the FA said in a statement on Wednesday, adding that he was not expected to&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/england-vs-wales-world-cup-2022-live-score-updates-result/rTE2jzpx4Tzn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England clinch top spot in Group B with 3-0 win over Wales: Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9os_tqlL4VDTMstbE7vcgbNkaYDp1fuvcQ1lR4_qTsJvHNSt5jQqjSvFMpvQBL1ccBEfjYZFM" alt="England clinch top spot in Group B with 3-0 win over Wales: Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England took top spot in Group B at the World Cup after beating Wales 3-0.Marcus Rashford hit a brilliant free-kick before Phil Foden doubled his nation&#39;s&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}