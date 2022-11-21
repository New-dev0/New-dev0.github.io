import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>India vs New Zealand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,India vs New Zealand"/>
        <meta name="description" content="Trending News about India vs New Zealand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>India vs New Zealand</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/IND-NZ-1.jpg" alt="India vs New Zealand"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/india-vs-new-zealand-2nd-t20i-live-score-updates-8278205/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ 2nd T20 Highlights: India wins by 65 runs, century for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJX0R_BHgEhzI4sIR_Z54TvlV1WH1fE0gvIteRCZoKRsDwuN8RmVG9ORp7mXHGpha0sdE689xw" alt="IND vs NZ 2nd T20 Highlights: India wins by 65 runs, century for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand T20 Highlights: India take on New Zealand in the 2nd T20I.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/live-score-india-vs-new-zealand-2nd-t20-2022-ind-vs-nz-latest-scorecard-at-mount-maunganui-101668919358212.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ Highlights 2nd T20: Suryakumar goes berserk as IND ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_fealVKwhzVzk5ii6SojaRBHS0E_yzwZVWrlD6Xk1qlizDH-Ytb9M7tBuxKA51Supvu5U_eXl" alt="IND vs NZ Highlights 2nd T20: Suryakumar goes berserk as IND ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand 2nd T20 Highlights: Suryakumar Yadav completed his second ton in T20Is as India went to beat New Zealand by 65 runs. The Men In Blue&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/new-zealand-vs-india-2022-23/ind-vs-nz-2nd-t20-match-india-vs-new-zealand-live-score-updates-3536746'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand, 2nd T20I, Highlights: Suryakumar Yadav ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIEyw4Ipa22CfpcqGs37aPJBbHXjC5i3IjbHVggNasZTfCWm9Q7GL3Vy0AFYwdTmhyO1s40iDy" alt="India vs New Zealand, 2nd T20I, Highlights: Suryakumar Yadav ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ, 2nd T20I, Highlights: Suryakumar Yadav&#39;s unbeaten 111-run knock followed by a spirited bowling performance by the bowlers saw Team India defeat&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/india-vs-new-zealand-2nd-t20i-surya-kumar-hits-a-ton-and-hattrick-for-tim-southee-353470-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand 2nd T20I: Surya Kumar hits a ton and hattrick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMH4zQJwSGsMKENrwaTkV6_58YJfSlKWfjm8GiPZt9wIm3OCRC53HozAvkJ0SyGicHH3PAfs7o" alt="India vs New Zealand 2nd T20I: Surya Kumar hits a ton and hattrick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian international cricketer Suryakumar Yadav on Sunday continued his breathtaking form in T20 cricket and notched up a blazing century against New&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/new-zealand-vs-india-2022-23/suryakumar-yadav-smashes-51-ball-111-vs-new-zealand-fans-flood-twitter-with-memes-3537442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suryakumar Yadav Smashes 51-Ball 111 Vs New Zealand; Fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrYa-69rfwFL5uwid3ipVMnvt1Y2TPNLsu_XSjWBuRsknardoVFv-INkkrzlk52bKuWFLZV2eH" alt="Suryakumar Yadav Smashes 51-Ball 111 Vs New Zealand; Fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand: After the century from Suryakumar Yadav, the social media got flooded with congratulatory messages and memes.</p></div>
            </div>
        </a><a href='https://www.firstpost.com/firstcricket/sports-news/india-vs-new-zealand-suryakumar-yadavs-blistering-ton-yuzvendra-chahals-comeback-and-more-talking-points-11662961.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five talking points from India vs New Zealand 2nd T20I</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRti4ZArb5cntFIvp7pgQvQjFtgkUlj-bZfuLa9HWjnwH_ZWUxCt3OdOn1SmfvAydM8CWa25qT" alt="Five talking points from India vs New Zealand 2nd T20I" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suryakumar Yadav smashed his second international ton, whereas Indian bowlers picked up 10 wickets to crush Kiwis for a 64-run win.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/india-vs-new-zealand-suryakumar-yadav-came-up-with-a-very-impressive-knock-today-says-tim-southee-2299647-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand: Suryakumar Yadav came up with a very ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsuU9YerGES5cI4vdUp2fHAqfJCxtYmanQHyF6Uf4TpTjpCM3vXtodyELlKYCnpuLzDCMA72QL" alt="India vs New Zealand: Suryakumar Yadav came up with a very ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand pacer Tim Southee has said Suryakumar Yadav came up with a very impressive knock against the Kiwis. Suryakumar smashed a 49-ball century to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/sports/live-updates-ind-vs-nz-t20-series-live-score-today-2022-india-vs-new-zealand-cricket-match-scorecard-weather-report-team-list-squads-live-streaming-telecast-channel-in-india-dd-sports-amazon-prime-app-208600'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs NZ 2nd T20 Match Highlights: Riding on sensational ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTv4MbNZPz_xXTmXEoHvBMUMnnr0khgOWXrI09KShOWtUK7TQCPgOWWVo2ODXvlYJMsZoeDrdrm" alt="Ind vs NZ 2nd T20 Match Highlights: Riding on sensational ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ind vs NZ 2nd T20 Match Highlights: Riding on Suryakumar Yadav&#39;s blistering hundred and the bowlers&#39; impressive showing, India defeated New Zealand by 65&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theweek.in/news/sports/2022/11/20/india-vs-new-zealand-2nd-t20i-suryakumars-century-powers-india-to-191-against-nz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand 2nd T20I: Suryakumar&#39;s century powers India ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpZ0TuAXPlQfYkmuQNYssjmKCisaBF169vvc19E3W4Rgck1rzcrEP1dE-i9uhLyeC7AFfObS6W" alt="India vs New Zealand 2nd T20I: Suryakumar&#39;s century powers India ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India&#39;s Suryakumar Yadav celebrates after scoring a century during the T20 cricket international between India and New Zealand at Bay Oval, Mount Maunganui,&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/india-vs-new-zealand-2nd-t20i-suryakumar-yadav-hooda-power-indian-team-to-a-commanding-65-run-win/videoshow/95640747.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand 2nd T20I: Suryakumar Yadav, Hooda power ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHWfDdASUkFqx1wz5IvxQ2rAh2JHgUZNyVxB_5Psy1T2tP4ha_zjh5aXFIawa3E1ZZ0IQJR68F" alt="India vs New Zealand 2nd T20I: Suryakumar Yadav, Hooda power ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suryakumar Yadav&#39;s batting masterclass of unbeaten 111 and Deepak Hooda&#39;s four-wicket haul helped India bundle out New Zealand for 126 runs to clinch the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}