import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mastodon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mastodon"/>
        <meta name="description" content="Trending News about Mastodon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mastodon</h1>
            <Image width={800} height={500} src="https://assets.medpagetoday.net/media/images/101xxx/101836.jpg" alt="Mastodon"/>
            <h3>Recent News</h3>
            <a href='https://www.medpagetoday.com/special-reports/exclusives/101836'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Med-Mastodon Gains Users Amid Uncertainties at Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2YxYwghLie0jDZNuvkjqGWTxNRtmI52AociEDybxyFCX-_xC-Y5J0wt6uD6jm_OcMoQHo-oh0" alt="Med-Mastodon Gains Users Amid Uncertainties at Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One physician likened the process to &#39;hedging your bets&#39;</p></div>
            </div>
        </a><a href='https://www.marketplace.org/2022/11/18/can-mastodon-replace-twitter-or-is-it-a-different-beast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can Mastodon replace Twitter or is it a different beast?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJwAQEOJb3qb1Vt7ZaDNCEulR_psei3Q5g9J-4Cl6sJFwOiLKz_jQFdR39U_oUE0u5UOvbIc-O" alt="Can Mastodon replace Twitter or is it a different beast?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Since Elon Musk bought Twitter, gutted its staff, and began an overhaul of its financial model, a previously overlooked social media platform has entered&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-18/volkswagen-joins-mastodon-as-concerns-over-twitter-mount'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Volkswagen Joins Mastodon as Concerns Over Twitter Mount</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvu9yUSyMGFKkcyXZeihJWLm71ZtmCqXNhbynOh_qpi7OoPrxJkqEZ4d1Xq33mi6xSR9ai1IDo" alt="Volkswagen Joins Mastodon as Concerns Over Twitter Mount" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Volkswagen AG has set up accounts on fast-growing Twitter Inc. alternative Mastodon amid questions over the future of the social network under Elon Musk.</p></div>
            </div>
        </a><a href='https://www.buzzfeednews.com/article/katienotopoulos/mastodon-twitter-replacement'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Joined Mastodon And All It Took Was My Sanity And Self-Esteem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaqw26WUqyOO4_uq1-ZTaE5EyZ-IgwW5VRDOE0HTxLg079Ff_uj3DCS4MY6v8JfB6wjup_npzg" alt="I Joined Mastodon And All It Took Was My Sanity And Self-Esteem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is an excerpt from Please Like Me, the BuzzFeed News newsletter about influencers and internet culture. You can sign up here. In our new column,&nbsp;...</p></div>
            </div>
        </a><a href='https://centraloregondaily.com/mastodon-twitter-toot-tweet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You tooted: Here&#39;s what to know about Twitter alternative Mastodon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7CZWVbRtIx1Ar9EtVNn_KAim08p__WISMKTP_Ywy2kh_7fp2L8Wz0QTTDD5gss7DOZ58Rdw26" alt="You tooted: Here&#39;s what to know about Twitter alternative Mastodon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A couple weeks ago, there were reports of mass layoffs at Twitter. And in the past few days, there has been mass quitting after Musk pushed workers to sign&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cmswire.com/digital-experience/how-to-pick-a-mastodon-server/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Pick a Mastodon Server</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPyafiDM0BdjUfD-uk_GSlnKKAOYvXnnzpx-dbSotBaY8SagsIwoI6yn1JNARUFfNx354RD8xi" alt="How to Pick a Mastodon Server" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mastodon has a learning curve compared to other social media. To sign up, you have to pick a server. Learn what servers are and how you can pick the best&nbsp;...</p></div>
            </div>
        </a><a href='https://hackaday.com/2022/11/18/this-week-in-security-mastadon-fake-software-company-and-shufflecake/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Week In Security: Mastodon, Fake Software Company, And ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQUfm7zXQ_WHBgKimNI5LjuPizchFmMtXELnD1vr4051FLZ1lWVYNqJVUyvGNl7lZoAstU4IM6" alt="This Week In Security: Mastodon, Fake Software Company, And ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Due to Twitter&#39;s new policy of testing new features on production, the interest in Mastodon as a potential replacement has skyrocketed.</p></div>
            </div>
        </a>
        </Template></>;
}