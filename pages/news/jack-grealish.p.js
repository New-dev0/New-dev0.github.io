import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jack Grealish</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jack Grealish"/>
        <meta name="description" content="Trending News about Jack Grealish" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jack Grealish</h1>
            <Image width={800} height={500} src="https://punditarena.com/wp-content/uploads/2021/07/jackgrealish-1-scaled.jpg" alt="Jack Grealish"/>
            <h3>Recent News</h3>
            <a href='https://punditarena.com/football/rudi-kinsella/jack-grealish-celebration-iran-england/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish keeps promise with celebration vs Iran</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQzu6IgJBtprTwjYxPMXb3ZYPbE2FVtFne-G79zTEnijDemXQherYvVZXPYGPGVAZ-YqVGLJOx" alt="Jack Grealish keeps promise with celebration vs Iran" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Grealish kept his promise with his celebration on Monday afternoon, following his goal against Iran in England&#39;s World Cup opener.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/blog-the-toe-poke/story/4808768/jack-grealish-kept-promise-to-fan-with-dance-at-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish kept promise to fan with dance at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcuzatRYhOyD29prQpeSvfdKblTv1RlSBN7tVwKNuzK7FB2bq23fg8lPCv1_5XYaYK8QSPKyTf" alt="Jack Grealish kept promise to fan with dance at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Grealish&#39;s shimmy on the sideline after scoring for England was dedicated to Finlay, an 11-year-old Manchester City fan with cerebral palsy.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2022/world-cup-jack-grealish-keeps-promise-to-manchester-city-fan-finlay-with-england-goal-celebration-in_sto9238348/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Jack Grealish keeps promise to Manchester City fan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1xPjyibWxPVDeteUi5WscZcf7Jo9QXX8LwqDGdbra_dFYB50vbiAxs4n8zpkAQqVZW0h6Useq" alt="World Cup: Jack Grealish keeps promise to Manchester City fan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Grealish kept his promise to a young fan at the World Cup as he performed a celebration after scoring in England&#39;s win over Iran.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/21/englands-jack-grealish-keeps-promise-to-fan-with-goal-celebration-against-iran'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England&#39;s Jack Grealish keeps promise to fan with goal celebration ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjsTZyXrD6OEi1v1MJtiZPxO1HgnnH3HC18_njAzfpnPtt4esHEe0Kw2by8pCNcwieYjMpx0wy" alt="England&#39;s Jack Grealish keeps promise to fan with goal celebration ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The midfielder, who scored England&#39;s sixth goal in their World Cup opener, planned the dance move with 11-year-old Finlay, who has cerebral palsy.</p></div>
            </div>
        </a><a href='https://www.limerickleader.ie/news/sport/970354/jack-grealish-honours-celebration-promise-to-disabled-fan-after-world-cup-goal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish honours celebration promise to disabled fan after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQugoPnVVjswZ3jVPrFHp6jkjbev3owwHufjBLLLLdNkSA8NslznfDjXQIT5lNt1wAKZXUjgyO3" alt="Jack Grealish honours celebration promise to disabled fan after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England&#39;s Jack Grealish kept his promise to a young fan after he marked his first World Cup goal with a special celebration. Grealish tapped home the Thre.</p></div>
            </div>
        </a>
        </Template></>;
}