import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michigan State basketball</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michigan State basketball"/>
        <meta name="description" content="Trending News about Michigan State basketball" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michigan State basketball</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/25/PDTF/9f3726f5-84c1-4923-b2fb-7f55e1a30524-GTY_1444334723.jpg?auto=webp&crop=4242,2387,x0,y282&format=pjpg&width=1200" alt="Michigan State basketball"/>
            <h3>Recent News</h3>
            <a href='https://www.freep.com/story/sports/college/michigan-state/spartans/2022/11/25/michigan-state-basketball-score-oregon-tv-channel-phil-knight-invitational/69676647007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan State basketball vs. Oregon: TV, time, radio info for Phil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAeI-boRUQN45D9JwU-EJzgOV__qsu2lagTNc4huMq2IWCMj3U-qMAD5N0XyELbQ0GA1VJLVtr" alt="Michigan State basketball vs. Oregon: TV, time, radio info for Phil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan State Spartans basketball game time, TV channel info, radio, score updates and analysis as they play the Oregon Ducks on Nov. 26, 2022.</p></div>
            </div>
        </a><a href='https://spartanswire.usatoday.com/lists/michigan-state-basketball-vs-oregon-stream-broadcast-info-three-things-to-watch-prediction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan State basketball vs. Oregon: Stream, broadcast info, three ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbBV8tnDJfIaOZXlQRmfmM7oUA9Ld3R-kT5e80MDeNfz08rc_VNwf8z8f5g9c0Qa5O41ljGwP5" alt="Michigan State basketball vs. Oregon: Stream, broadcast info, three ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Midnight hoops between the Spartans and Ducks is on the slate for tonight -- here&#39;s what you need to know for this matchup between MSU and Oregon.</p></div>
            </div>
        </a><a href='https://www.theonlycolors.com/2022/11/25/23478299/michigan-state-spartans-mens-basketball-oregon-ducks-phil-knight-invitation-preview-nov-25-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan State Men&#39;s Basketball Oregon Ducks Preview Phil Knight ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzunYJePPaeFuIjvebOm647dUIKkJkuDffWd80WbeLOYrHAXksMWOWRCvUEEZjB2rRYmUFIz5y" alt="Michigan State Men&#39;s Basketball Oregon Ducks Preview Phil Knight ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phil Knight Invitational Game Info/How to Watch: Where: Veterans Memorial Coliseum, Portland, Oregon When: Friday, Nov. 25, 2022 at 11:59 p.m. ET&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/college/michigan-state/Article/How-to-watch-Michigan-State-Alabama-basketball-game-TV-channel-stream-radio-PKI-Phil-Knight-Invitational-198431575/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Michigan State basketball vs. Alabama: TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRird_wnheeCv_LRyvA8skG8xguHiKiv7RhiSNX4PsF9KO9NcYg-scEKWzmecfoNJzGsSnhRkZB" alt="How to watch Michigan State basketball vs. Alabama: TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UPDATE: Michigan State&#39;s game against Alabama has been delayed until 10:40 p.m. It will begin on ESPNEWS before transitioning to ESPN at the conclusion of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/college/michigan-state-university/spartans/2022/11/25/michigan-state-spartans-basketball-falls-to-alabama-crimson-tide/69676001007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shorthanded No. 12 Michigan State basketball falls to No. 18 Alabama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQrskffR74bzxDY75XzK6Zey0rFXQ_a6sIgauwq-OWNQ8z9U4DCvpXn2i2ETF7U_yrcd19Yr9b" alt="Shorthanded No. 12 Michigan State basketball falls to No. 18 Alabama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 12 Michigan State fell to No. 18 Alabama in the opening round of the Phil Knight Invitational, 81-70, on Thursday night in Portland, Oregon.</p></div>
            </div>
        </a><a href='https://www.rollbamaroll.com/2022/11/25/23477464/alabama-basketball-takes-down-michigan-state-at-phil-knight-invitational'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alabama Basketball Beats Michigan State at Phil Knight Invitational</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcakM7i6e_W_u0ybFY6ZBpC_lAPKL6p25wBCzew7G38Y9-ds_Be9GODygyn0KuiZnDxtJ21As0" alt="Alabama Basketball Beats Michigan State at Phil Knight Invitational" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 18th ranked Alabama Crimson Tide basketball team improved to 5-0 on the young season by taking down 12th ranked Michigan State 81-70 in Portland,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tuscaloosanews.com/story/sports/college/basketball/2022/11/25/brandon-miller-alabama-basketball-michigan-state-phil-knight-invitational/69659037007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brandon Miller shines on national stage as Alabama basketball ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAPh4wX6wvNPjumr-bjBSfaM5KbSUTOMwbxVXho17OG_3OsGwBfYkQKhYDH-TfCzESWBvPLrgX" alt="Brandon Miller shines on national stage as Alabama basketball ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alabama basketball faced Michigan State in the first round of the Phil Knight Invitational in Portland, Oregon.</p></div>
            </div>
        </a><a href='https://247sports.com/college/alabama/Article/Alabama-basketball-opens-PKI-with-win-over-No-12-Michigan-State-Brandon-Miller-198485554/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alabama basketball opens PKI with win over No. 12 Michigan State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyxH9fiNdvyRZGws3_tOUAHXcqYiiKJpTE9mwXDDbQ1XIwZVejocAKZn2II4DLJLA1mFqNoR1W" alt="Alabama basketball opens PKI with win over No. 12 Michigan State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brandon Miller led the way for the Crimson Tide, scoring a game-high 24 points to go along with nine rebounds and two blocks.</p></div>
            </div>
        </a><a href='https://spartanswire.usatoday.com/lists/michigan-state-basketball-vs-alabama-stream-broadcast-info-three-things-to-watch-prediction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan State basketball vs. Alabama: Stream, broadcast info ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5rwXdqDeS5DY6GyITCAS7OoiBggtfg4ssBgyuJYPgSwtlS63T7ECN1f3USkSNuSpIxMbE2I5c" alt="Michigan State basketball vs. Alabama: Stream, broadcast info ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MSU basketball takes on Alabama tonight in their PK85 opener -- here&#39;s what you need to know for this matchup between the Spartans and Crimson Tide.</p></div>
            </div>
        </a><a href='https://spartanavenue.com/2022/11/25/michigan-state-basketball-takeaways-loss-alabama-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan State basketball: 3 takeaways from loss to No. 18 Alabama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbjXlOwvbRK0xtbVsy__hxrL2rEjuldfB-HWtw1lOPOTG_HOTfNpn-8JemPh9boUwx4bPb_1WS" alt="Michigan State basketball: 3 takeaways from loss to No. 18 Alabama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Not having Malik Hall or Jaden Akins really hurt this team. What did we learn from this Phil Knight Invitational loss? 3. Yes, the lack of depth was the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}