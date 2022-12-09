import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warriors</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warriors"/>
        <meta name="description" content="Trending News about Warriors" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warriors</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/4_FX7QS0CtllMGmCU0RJMg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/csnbayarea.com/83df1fab0028448f7569bcba82bffd8e" alt="Warriors"/>
            <h3>Recent News</h3>
            <a href='https://sports.yahoo.com/klay-thompson-admits-falling-asleep-171024160.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klay Thompson admits falling asleep late in Warriors&#39; frustrating loss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMNahgCSShPtLbX7yT4BNaiU1sWYmxSjK-mjLgk6sGmaqVoQic9aEHYix_z7Y4eMGGkNV9PLiK" alt="Klay Thompson admits falling asleep late in Warriors&#39; frustrating loss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Klay Thompson made a crucial mistake late in the Warriors&#39; 124-123 loss to the Utah Jazz.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/dec/08/simone-fontecchio-dunk-utah-jazz-golden-state-warriors-nba-basketball'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;What happened?&#39; Warriors blow four-point lead with 13.9sec left ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXKShx5WpLADNAXIL7XaiyumLY8ej9EWz50GXWExCPN-YDItaDp2C0O1pcsXWNiMb-GDp4YfGn" alt="&#39;What happened?&#39; Warriors blow four-point lead with 13.9sec left ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simone Fontecchio dunked with 1.4 seconds left as the Utah Jazz beat the Golden State Warriors 124-123 on Wednesday night in a breathless finish.</p></div>
            </div>
        </a><a href='https://theathletic.com/3981308/2022/12/08/warriors-collapse-utah-lose-heartbreaker/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors collapse late in Utah, lose heartbreaker to Jazz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqipd-4TQhZQK-KcEkPJModgCLDzVnMQ-8-Vtw6ytXyi3eRlf6_X7v3QbJ7QJ_k_9cmlpiyDIu" alt="Warriors collapse late in Utah, lose heartbreaker to Jazz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two blunders combined to erase what would&#39;ve been an important win without Steph Curry, Draymond Green and Andrew Wiggins.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/jazz/news/jazz-defeat-warriors-takeaways'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jazz 124, Warriors 123: Four Encouraging Takeaways</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1Rj2p2U6QdgOi9hYuVsA6CBqoK2vLYzSzX1rNIpS2whDSyCKYvX6WCipidl_goP4zx4dvVSUW" alt="Jazz 124, Warriors 123: Four Encouraging Takeaways" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The team&#39;s 9-1 record after 10 games raised scrutiny, placing additional sports media attention on the Jazz. Then there were more wins and more losses.</p></div>
            </div>
        </a><a href='https://larrybrownsports.com/basketball/local-radio-jazz-warriors-steal-finish/608315'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Local radio call of thrilling Warriors-Jazz finish was awesome</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxkgrjbSLyoitJahc3jYAoRy94blSe97YIvUPhf3An8wigDdukrgQV9-O42_9qih_n3vVxZ3L7" alt="Local radio call of thrilling Warriors-Jazz finish was awesome" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warriors guard Jordan Poole made a free throw with 13.3 seconds left to give the Warriors a 123-119 lead. Malik Beasley then cut the lead to 123-122 when he hit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goldenstateofmind.com/2022/12/8/23499609/warriors-jazz-jonathan-kuminga-defense-film-breakdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jonathan Kuminga shines in Warriors&#39; loss to Jazz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3vVHkpVNTxLCBoa8_IetUnXFMEd3xXaSOed7nsZoo8v5mvRYIsMSIaVciWVQOLYfUqBtv0PNz" alt="Jonathan Kuminga shines in Warriors&#39; loss to Jazz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kuminga had a big offensive night — but it&#39;s his defense that could be key to the Warriors&#39; success.</p></div>
            </div>
        </a><a href='https://www.newsobserver.com/sports/article269754166.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fontecchio lifts Jazz past Warriors in short-handed matchup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSe0MFsmnuSX6bcVVORnrFF_mOyPYKp0B4X6w8qDOJvnZ0kcFYZYGFXM6Z3AY35gKGE8htrXEQ9" alt="Fontecchio lifts Jazz past Warriors in short-handed matchup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simone Fontecchio dunked with 1.4 seconds remaining off Nickeil Alexander-Walker&#39;s steal and the Utah Jazz beat the Golden State Warriors 124-123 on&nbsp;...</p></div>
            </div>
        </a><a href='https://hoopshabit.com/2022/12/08/kuminga-defense-golden-state-warriors/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jonathan Kuminga&#39;s defense is becoming crucial to the Warriors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2tNnPx7OqYElRzih425vYP1QImAFdxhaIGZJVllEU7cg9V2smSHsHJUlvVYQCUIbvqZ4eGy0J" alt="Jonathan Kuminga&#39;s defense is becoming crucial to the Warriors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jonathan Kuminga joined the Golden State Warriors as the 7th overall pick in the 2021 NBA Draft after the team&#39;s injury-ridden downfall. As a lottery pick,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/real-sports/nba/lakers-vs-warriors-series-history-all-time-records-wins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers vs. Warriors: Series History, All-Time Records, Wins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYy0iI52zOM7sg6DybqmfWYtx_wcr2x5dviBMXgFb8wWSuo2zvP73j3TNO03yexbM6NVfUAQxC" alt="Lakers vs. Warriors: Series History, All-Time Records, Wins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When one thinks of transcendent basketball franchises, the Los Angeles Lakers and Golden State Warriors immediately come to mind.</p></div>
            </div>
        </a><a href='https://dchieftain.com/lady-warriors-rally-to-beat-capitan-33-31/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lady Warriors rally to beat Capitan 33-31 - El Defensor Chieftain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWimeJH8Dbxb6JVUsM1SRvpYxCVmhG8N1O6FSC-2axbkfUcUfM8K9Thrt8O1Cv923wQAOCspSj" alt="Lady Warriors rally to beat Capitan 33-31 - El Defensor Chieftain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lady Warriors basketball coach Brad Bailey keeps a close eye on the game. “They&#39;re doing it, and they didn&#39;t give up because we were down,” Bailey said. “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}