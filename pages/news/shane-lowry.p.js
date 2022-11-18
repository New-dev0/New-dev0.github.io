import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shane Lowry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shane Lowry"/>
        <meta name="description" content="Trending News about Shane Lowry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shane Lowry</h1>
            <Image width={800} height={500} src="https://img2.thejournal.ie/article/5922301/river/?height=400&version=5922308" alt="Shane Lowry"/>
            <h3>Recent News</h3>
            <a href='https://www.the42.ie/rory-mcilroy-dp-world-tour-championship-3-5922301-Nov2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>McIlroy six off the lead after opening round at DP World Tour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQa1fvm4NF_6ywIRYXQhUAGI7PpSoUB-Qz8wNdzzqqSLnVDG1L8iwKO0H8SnlAcY63fMvcstUAF" alt="McIlroy six off the lead after opening round at DP World Tour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shane Lowry is two further shots back as Tyrrell Hatton and Matt Fitzpatrick set the early pace in Dubai.</p></div>
            </div>
        </a><a href='https://www.rte.ie/sport/golf/2022/1117/1336699-slow-start-for-mcilroy-and-lowry-in-dubai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slow start for McIlroy and Lowry in Dubai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRENwwQ-2I18dr0OStZf9bNfySj6kNxOr0OvCNBhSPZr1zgeCOkv1UFS-9EN7BkqXieztpMsuCJ" alt="Slow start for McIlroy and Lowry in Dubai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rory McIlroy and Shane Lowry have made pedestrian starts at the DP World Tour Championship with English pair Matthew Fitzpatrick and Tyrrell Hatton leading&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiokerry.ie/sport/birdies-for-lowry-and-mcilroy-to-wrap-up-day-1-in-dubai-306020'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Birdies For Lowry And McIlroy To Wrap Up Day 1 In Dubai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTMNZsDvfIP8o7iuRGMwkGKIsLAJ3yvqdBOTA3_UwmR7jXDfZaCZYUq-HhvTD0zekqyezXIl5R" alt="Birdies For Lowry And McIlroy To Wrap Up Day 1 In Dubai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rory McIlroy has just finished his opening round at the season ending DP World Tour Championship in Dubai. The world number 1 birdied the final hole to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midlands103.com/news/sports/lowry-getting-set-to-tee-off-in-dubai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lowry Getting Set To Tee-Off In Dubai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5XY1C8goujtJbVX2dSeyQxohJFZnJCNpEifxPha-5rWsHiTKnDBmkXP_YcgNL3KYaF5nmP3Bj" alt="Lowry Getting Set To Tee-Off In Dubai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shane Lowry is set to tee off in his first round at the DP World Tour Championship in Dubai in the next ten minutes. The Offaly man will need to win this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/golf/news/dp-world-tour-championship-leaderboard-matt-fitzpatrick-tyrrell-hatton-share-round-1-lead-in-dubai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DP World Tour Championship leaderboard: Matt Fitzpatrick, Tyrrell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThQPcyuFGs9eP1VikGa7xU14sqCH8nft93OkPeGL6fWKz6MzlefdGeDPm2ELucntKzH2gJXDpb" alt="DP World Tour Championship leaderboard: Matt Fitzpatrick, Tyrrell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rory McIlroy and Jon Rahm are also still within striking distance of the season-long points race.</p></div>
            </div>
        </a><a href='https://www.golfchannel.com/news/matthew-fitzpatrick-tyrrell-hatton-share-lead-rory-mcilroy-struggles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthew Fitzpatrick, Tyrrell Hatton share lead as Rory McIlroy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmVCXqwzPqOPyOdKKqHSHeh_zjcEGq7ic4b-ae6D-Z4kkmOtmGqK8zTlhnsveKewplxsvdRrxz" alt="Matthew Fitzpatrick, Tyrrell Hatton share lead as Rory McIlroy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthew Fitzpatrick and Tyrrell Hatton each shot 7-under 65 to share the lead after the first round of the DP World Tour Championship.</p></div>
            </div>
        </a><a href='https://www.skysports.com/golf/news/12176/12749508/dp-world-tour-championship-matt-fitzpatrick-and-tyrrell-hatton-share-early-lead-in-dubai'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DP World Tour Championship: Matt Fitzpatrick and Tyrrell Hatton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsaWUjNpVL2-D2VSa3n1ulvpoEXx_5kBHxVy5cnwWTWtSAXdtxikC2gX5dxhEkKCiiIAI8kAdr" alt="DP World Tour Championship: Matt Fitzpatrick and Tyrrell Hatton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matt Fitzpatrick made the dream start to his bid for a third DP World Tour Championship victory by grabbing a share of the lead after a low-scoring opening&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}