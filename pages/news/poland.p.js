import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Poland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Poland"/>
        <meta name="description" content="Trending News about Poland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Poland</h1>
            <Image width={800} height={500} src="https://149520306.v2.pressablecdn.com/wp-content/uploads/2022/10/North-Korea-missile-test.jpg" alt="Poland"/>
            <h3>Recent News</h3>
            <a href='https://businessday.ng/world/article/missile-explodes-in-poland-ukraine-border/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missile explodes in Poland-Ukraine border</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTj2Uv8Hic8z70kmHBquGseEFA1go9Kc6XrJehjpNQ3JcPlcDkYpTzENhuSBQOqHuTJhtmuJV0S" alt="Missile explodes in Poland-Ukraine border" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poland said what was likely a “Russian-made missile” crashed on a town in the country&#39;s east on Tuesday, killing two people, but there...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/ukraine-russia-war-search-continues-for-who-fired-missile-to-poland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Russia war: Search continues for who fired missile to Poland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNo6LwKAWwkXhaVGMXJPTnRcnaJ3hTlMoZM9fS6iJKZkyHohe6rV6QhY0fumzs0WNFfdlO4xhI" alt="Ukraine-Russia war: Search continues for who fired missile to Poland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It came as Russia fired dozens of missiles at targets in Ukraine and Ukrainian forces tried to shoot them down with its own missiles – part of its air defence&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arise.tv/poland-nato-say-missile-strike-wasnt-a-russian-attack-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland, NATO Say Missile Strike Wasn&#39;t a Russian Attack - Arise News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoiz2aWJilr2YN9ky-_YiUcTyshPMVOh_9yXqkgH4FijRDJCV7Q1F-CCzTqg8VTr-PcmO_Bf5m" alt="Poland, NATO Say Missile Strike Wasn&#39;t a Russian Attack - Arise News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stoltenberg and others laid overall but not specific blame on Russian President Vladimir Putin&#39;s war. said. Zelenskyy told reporters he had “no doubts”&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-europe-63656664'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine war: Kyiv not to blame for Poland missile - Zelensky</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQVZT7eVdbkqfAFGvJW8jnR7uIeXlSmWg8XgZ0-MdFxvMqB-bUcSIspzne-Fal3aYD6o7DdBJ7" alt="Ukraine war: Kyiv not to blame for Poland missile - Zelensky" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Zelensky says he has &quot;no doubts&quot; that Ukraine wasn&#39;t behind a blast that killed two people.</p></div>
            </div>
        </a><a href='https://guardian.ng/news/poland-says-blast-likely-caused-by-ukraine-missile-in-accident/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland says blast likely caused by Ukraine missile in accident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT18v9gsiVd-EzYYMIg_KEwobCRlcu7qKTYH-2qsm3P22j3HgZcXyPPg6570nsuB3HLOWwgVhi-" alt="Poland says blast likely caused by Ukraine missile in accident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Western leaders played down fears Wednesday that a deadly missile blast in eastern Poland could herald a dangerous escalation in the war Russia launched&nbsp;...</p></div>
            </div>
        </a><a href='https://www.defensenews.com/global/europe/2022/11/17/poland-will-not-invite-ukraine-to-co-host-missile-strike-investigation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland will not invite Ukraine to co-host missile strike investigation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdq_QO9o5rFRISjdT4nFc8TFgVWPlmSVzrQZlxnpAP4SGG8MHX3JL62E8xkhuo-0nDxlFXaNn9" alt="Poland will not invite Ukraine to co-host missile strike investigation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest announcement comes in response to declarations by Ukrainian President Volodymyr Zelenskyy who has disputed the preliminary findings of the Polish&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}