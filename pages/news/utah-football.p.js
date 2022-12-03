import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Utah football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Utah football"/>
        <meta name="description" content="Trending News about Utah football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Utah football</h1>
            <Image width={800} height={500} src="https://wp.clutchpoints.com/wp-content/uploads/2022/12/utah-football-x-bold-utes-predictions-for-pac-12-championship-vs-usc.jpeg" alt="Utah football"/>
            <h3>Recent News</h3>
            <a href='https://clutchpoints.com/3-bold-utah-football-predictions-for-pac-12-championship-vs-usc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Utah football: Utes predictions in Pac-12 Championship vs. USC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxg_F1M2qrd0nCm4LgiPN37akqz-1c1_iyGqDj0u57zJZ-RTPWwgWd7bU4QHAn3qtxn_4ezHup" alt="Utah football: Utes predictions in Pac-12 Championship vs. USC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of their Pac-12 Championship battle with USC, we reveal our three bold predictions for the Utah Utes.</p></div>
            </div>
        </a><a href='https://www.sltrib.com/sports/utah-utes/2022/12/02/how-watch-utah-football-set-meet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pac-12 championship live blog: Utah football set to meet USC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3cK78Ul9jvC1-SinOk5_EQX4CJHouj67ucRzpCrmTTjZhHPQxGReF0Blx7JwvvkQVFVzUIizO" alt="Pac-12 championship live blog: Utah football set to meet USC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pac-12 championship live blog: Utah football set to meet USC (again) with conference title on the line.</p></div>
            </div>
        </a><a href='https://kslsports.com/496071/former-utah-football-head-coach-chuck-stobart-passes-away-at-88/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Utah Football Head Coach Chuck Stobart Passes Away</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf_HarLXWOOapycCAd4vxZJBiURBuTeDsRO_jySvFW9xdmuVbgv4AUD_yrrQxp0NYjkQkOaY0R" alt="Former Utah Football Head Coach Chuck Stobart Passes Away" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former University of Utah head football coach and longtime college assistant Chuck Stobart passed away on November 29 at 88 years old.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/usc-vs-utah-score-live-updates-college-football-scores-2022-pac-12-championship-game-coverage/live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC vs. Utah score: Live updates, college football scores, 2022 Pac ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZbJuqbmggDHe2E9mPfI1sOV_qU0RHeFaAa1VPc9l_kg9anDjs34bfhVI602n8-CU_Co_50tJu" alt="USC vs. Utah score: Live updates, college football scores, 2022 Pac ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A College Football Playoff bid is on the line for the Trojans, while the Utes aim to knock their rivals from contention.</p></div>
            </div>
        </a><a href='https://www.cleveland.com/sports/college/2022/12/usc-vs-utah-football-watch-pac-12-championship-game-2022-for-free-12222.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC vs. Utah football: Watch Pac-12 Championship Game 2022 for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoDoltH9NAIXahni3gcKHEbv-PvhcdQZExPkwldegV5SRL9gvsQKwD8w6l5HuUtn_XJAy72v0p" alt="USC vs. Utah football: Watch Pac-12 Championship Game 2022 for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Caleb Williams and No. 4 USC can potentially earn a spot in the College Football Playoff if they beat No. 11 Utah on Friday night in the Pac-12 Championship&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/12/02/college-football-predictions-utah-vs-usc-and-more/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College football predictions: Utah vs. USC, Kansas State vs. TCU ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3D7ndNVH__0V612ltPlFbYSIBNIwSgWYjoGVlyCGLYMYtq0QVu-5oH7nZlYXs_nW7EmNmTqH3" alt="College football predictions: Utah vs. USC, Kansas State vs. TCU ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Three college football picks for conference championship weekend featuring Utah vs. USC, Kansas State vs. TCU and more.</p></div>
            </div>
        </a><a href='https://www.oregonlive.com/collegefootball/2022/12/what-tv-channel-is-usc-vs-utah-football-pac-12-championship-game-free-live-stream-odds-how-to-watch-trojans-vs-utes-online-1222022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What TV channel is USC vs Utah football Pac-12 championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0PqEA9d67gPwgtX6gauIvG04kbi5sCyYWR69AtfHEs0AOUscaJ5oNBVfhYmI6VFOjXL93O7KD" alt="What TV channel is USC vs Utah football Pac-12 championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USC vs. Utah in the Pac-12 Championship Game. Can the Trojans punch a ticket to the College Football Playoff? We&#39;ll find out on Friday night.</p></div>
            </div>
        </a><a href='https://www.sltrib.com/sports/byu-cougars/2022/12/02/utahs-kyle-whittingham-built-his/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kyle Whittingham&#39;s Utah Utes vs. Lincoln Riley&#39;s USC Trojans is a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxZsle-n3OLFlkOMBv2eHlz8cPu2qgMhUy3_HbkG8B1OF2jYFaNtX_D-ZN_qSC1b-Xf7GV6iht" alt="Kyle Whittingham&#39;s Utah Utes vs. Lincoln Riley&#39;s USC Trojans is a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Utah and USC have built their programs in different ways. What does that mean for Kyle Whittingham and Lincoln Riley in the future?</p></div>
            </div>
        </a><a href='https://www.deseret.com/2022/12/2/23489528/former-utah-football-coach-chuck-stobart-dies-at-90'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Utah football coach Chuck Stobart dies at 90</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Former Utah football coach Chuck Stobart dies at 90" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chuck Stobart was Utah&#39;s head coach from 1982-1984, where he guided the Utes to a 16-17-1 record.</p></div>
            </div>
        </a>
        </Template></>;
}