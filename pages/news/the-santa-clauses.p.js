import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Santa Clauses</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Santa Clauses"/>
        <meta name="description" content="Trending News about The Santa Clauses" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Santa Clauses</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/6373a6b7fc687a6a9561196b/0x0.jpg?format=jpg&crop=1894,1065,x0,y369,safe&width=1200" alt="The Santa Clauses"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/jeffconway/2022/11/16/tim-allen-on-the-business-of-hollywood-and-his-christmas-comeback-in-the-disney-series-the-santa-clauses/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tim Allen On The Business Of Hollywood And His Christmas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9dj0OD7yCiRGusMigHjpn4woXb60YX6T--TAKwEcq8qn0UJo3OyRDXSt0YIjDUWEihSl4C1XQ" alt="Tim Allen On The Business Of Hollywood And His Christmas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The longtime actor and comedian opens up about reprising his popular holiday role and reveals how his approach in Hollywood has evolved over the years.</p></div>
            </div>
        </a><a href='https://www.avclub.com/the-santa-clauses-saying-merry-christmas-problematic-1849792146'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saying &quot;Merry Christmas&quot; is apparently problematic in The Santa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoLkEpz0i_0gCli2sVM9o9kPKAAzGonW6mllrsAaB6pME6bryMuxYvKGBjdS4TxLgFUROCWBXe" alt="Saying &quot;Merry Christmas&quot; is apparently problematic in The Santa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Santa Clauses showrunner Jack Burditt has no explanation for Tim Allen&#39;s snarky &quot;problematic&quot; line.</p></div>
            </div>
        </a><a href='https://www.digitaltrends.com/movies/the-santa-clauses-series-review/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Santa Clauses review: right-wing Santa is weird | Digital Trends</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJfu1XWZQGJs2WNLTMb77pBzlOTQK5MFJi-F0HaFwXy_GCmEqof9T_EYceCVOAd-ShnACQkfHJ" alt="The Santa Clauses review: right-wing Santa is weird | Digital Trends" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Santa Clauses, Disney&#39;s revival of The Santa Clause franchise, has the potential to be a welcome gift or the TV equivalent of an old fruit cake.</p></div>
            </div>
        </a><a href='https://tvline.com/2022/11/16/the-santa-clauses-recap-episode-1-who-is-sara-casey-wilson-cast-explained/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tim Allen and The Santa Clauses Team Explain How [Spoiler]&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSApeBugCKibeCgTLJCvoK2fmhT0YifIJigIAIWwlwGoNnYpI6laqUAHxSORyMEL2sOepXY54oV" alt="Tim Allen and The Santa Clauses Team Explain How [Spoiler]&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tim Allen&#39;s Scott Calvin visits an original movie character in Episode 1 of The Santa Clauses on Disney+, now played by Casey Wilson.</p></div>
            </div>
        </a><a href='https://www.thecosmiccircus.com/review-the-santa-clauses-premiere-episodes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Review: &#39;The Santa Clauses&#39; Premiere Episodes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1nbz3PDx-DQjDFfWzVcdqaR0j3EF3Uw80e6f7ya5-Y4flXp_5phaj1AVOUUE3RMEhtRG1ni7o" alt="Review: &#39;The Santa Clauses&#39; Premiere Episodes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brian Kitson reviews The Santa Clauses&#39; 2-episode premiere, starring Tim Allen as Santa and Elizabeth Mitchell as Mrs. Claus. On Disney+.</p></div>
            </div>
        </a><a href='https://www.polygon.com/23460432/santa-clauses-bernard-elf-david-krumholtz-disney-plus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All the times Disney Plus&#39; Santa Clauses brings back Hot Bernard</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6V_F6lzRwYr6nXo9WYt7Nbt-jtu19tXhy1IaKpSIjtUZMBgmTXmh92T-Lwn9l0euB6S2IXnHA" alt="All the times Disney Plus&#39; Santa Clauses brings back Hot Bernard" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney Plus has a new series based on The Santa Clause, and we&#39;re tuning in every week to see if Bernard the Elf, as played by David Krumholtz,&nbsp;...</p></div>
            </div>
        </a><a href='https://abc11.com/the-santa-clauses-disney-plus-tim-allen-nyc/12459083/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Experience the holiday magic at this pop-up inspired by Disney+&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHNDytZCizQzUjWdJK2iLyITdG1X03NOvsKPxekbGCOUMkTfjjZL6ZdeFRMrLKsuaBykf9lscT" alt="Experience the holiday magic at this pop-up inspired by Disney+&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now through 01/15, Watermark at Pier 15 will transform into Santa Claus&#39; headquarters at the North Pole to celebrate &quot;The Santa Clauses,&quot; now streaming on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/charlie-from-the-santa-clause-now'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Where Is Charlie From &#39;The Santa Clause&#39; Now? He&#39;s Back!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMMcRakXrcpqpJqHEMI2HGpQ1oDrkp7pmaZFaiwq1XprQ_cXGx09zrDFBs3rG00_6h39T0x039" alt="Where Is Charlie From &#39;The Santa Clause&#39; Now? He&#39;s Back!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With the arrival of Disney Plus&#39;s limited series &#39;The Santa Clauses,&#39; fans want to know: Where is Charlie Calvin (Eric Lloyd) now? Here&#39;s the scoop.</p></div>
            </div>
        </a>
        </Template></>;
}