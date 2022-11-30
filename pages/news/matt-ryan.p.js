import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matt Ryan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matt Ryan"/>
        <meta name="description" content="Trending News about Matt Ryan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matt Ryan</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/rcdbhtnjfppqm1kigjon" alt="Matt Ryan"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/colts-matt-ryan-frustrated-after-loss-to-steelers-it-s-one-thing-one-week-it-s-a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colts&#39; Matt Ryan frustrated after loss to Steelers: &#39;It&#39;s one thing one ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjcwLS1oSgWEM-mRY2-fg1w-dWa03z1jdxUt22M6yq3aBwhmbG26QzS8CmLq3ckDD7YBv8VEv-" alt="Colts&#39; Matt Ryan frustrated after loss to Steelers: &#39;It&#39;s one thing one ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following a close loss to the Steelers on Monday night, QB Matt Ryan aired out his frustrations of an offense that totaled just 71 yards in the first half.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/colts/news/matt-ryan-colts-offensive-line-underperform-steelers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Ryan, Colts Offensive Line Underperform in Loss to Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB79NdQZId_yaJIeTJ2cjYxLUhwEoT9WcKbBV1JDUYn191K-qqsbMS5Vqfb2H1Vr8HdHdD02HI" alt="Matt Ryan, Colts Offensive Line Underperform in Loss to Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indianapolis Colts squandered an opportunity for an uplifting win on Monday night against the Pittsburgh Steelers in another frustrating display from&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/29/matt-ryan-i-think-all-of-us-in-the-building-are-disappointed/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Ryan: I think all of us in the building are disappointed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTISkNv8QYYfjucZ5f9QLFYeEJsrGgF3aEQc-xHpHlR8wVz28r1Z9M2XUOtgs2-GCFvaeMPAlv2" alt="Matt Ryan: I think all of us in the building are disappointed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interim coach Jeff Saturday addressed the Colts not using more of their timeouts in the game&#39;s final sequence, saying he felt the team had plenty of time.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/fantasy/football/news/colts-matt-ryan-comeback-bid-comes-up-short/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colts&#39; Matt Ryan: Comeback bid comes up short</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Colts&#39; Matt Ryan: Comeback bid comes up short" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ryan completed 22 of 34 passes for 199 yards, one touchdown and one interception in Monday&#39;s 24-17 loss to the Steelers. He added 22 yards on four rushing&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10057066-matt-ryan-will-remain-colts-starting-qb-after-steelers-loss-says-jeff-saturday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Ryan Will Remain Colts&#39; Starting QB After Steelers Loss, Says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcQlD07IWAYeY6KAiA7x76TgrubbnK80CWYq72p03UBEWu4cEEQB84R0ZB7jtXrXAFy5OLCtRF" alt="Matt Ryan Will Remain Colts&#39; Starting QB After Steelers Loss, Says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indianapolis Colts head coach Jeff Saturday announced Matt Ryan will remain the team&#39;s starting quarterback in the aftermath of Monday night&#39;s 24-17 loss to&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsnaut.com/takeaways-from-matt-ryan-performance-vs-pittsburgh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 takeaways from Matt Ryan&#39;s putrid performance vs Pittsburgh</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkJZ9XKJVrp0Jwspm8GflpCsVICUm0A-yFsHasyMGj-41AevQh9rR27YvyjYP7ywdtrUs47G0J" alt="3 takeaways from Matt Ryan&#39;s putrid performance vs Pittsburgh" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indianapolis Colts may have played a competitive game on Monday Night Football, but that doesn&#39;t mean Matt Ryan was any better in Week 12.</p></div>
            </div>
        </a>
        </Template></>;
}