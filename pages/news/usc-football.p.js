import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>USC Football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,USC Football"/>
        <meta name="description" content="Trending News about USC Football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>USC Football</h1>
            <Image width={800} height={500} src="https://d3jycsk0m72ya7.cloudfront.net/images/2022/12/2/usc-trojans-football-caleb-williams-pac-12-championship.jpg?preset=large.socialmediaimage" alt="USC Football"/>
            <h3>Recent News</h3>
            <a href='https://usctrojans.com/news/2022/12/2/usc-trojans-football-game-recap-utah-utes-pac-12-championship-game-caleb-williams.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 4 USC Football Falls To No. 11 Utah At Pac-12 Championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKDiFsVFgEF6OiyS6hHhE1pXALHb9g_rOfl5YoISQwsrumKhQ_6WJoufEeDe13ZRUF6T-QPVEH" alt="No. 4 USC Football Falls To No. 11 Utah At Pac-12 Championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Caleb Williams threw for 363 yards and three TDs as the Trojans await their bowl destination on Selection Sunday.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/usc-football-3-people-most-to-blame-for-pac-12-title-game-loss-to-utah'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC football: 3 people most to blame for Pac-12 title game loss to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSx8MHP5PaVGlTOZRcepcqWXT0lTEBTgQRqbV9aZqbpeOvNKeB5pAKKPROC7WdfIim7etBE4JzB" alt="USC football: 3 people most to blame for Pac-12 title game loss to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We name the people most at fault for USC football&#39;s loss to Utah in the Pac-12 Championship on Friday Night.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/bowl-projections-ohio-state-slides-into-college-football-playoff-after-usc-falls-in-pac-12-championship-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bowl projections: Ohio State slides into College Football Playoff after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRO1unQA9yXhdFf3TngbJpYFYGx2R3p3JUSsspyAk4Z8vQTx0_un2aA1XvRoHZrCwFyOTzM7pPj" alt="Bowl projections: Ohio State slides into College Football Playoff after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio State beat Clemson 49-28 in the semifinal two years ago before ultimately falling to Alabama in the 2021 CFP National Championship. The No. 6 Crimson Tide&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/college/usc/LongFormArticle/USC-football-recap-Pac-12-championship-game-Utah-football-Utes-Trojans--199371755/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five takeaways from USC&#39;s loss to Utah in Pac-12 championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSs1tEUrN9ZILMzfCMygBI6ZyLHKYD4EqUOy29pdxfQ5M1rqjwpjKChA4y6yILlLBbhgLB8Z5Q6" alt="Five takeaways from USC&#39;s loss to Utah in Pac-12 championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After the Trojans led 17-3 with 12:08 left in the second quarter, the Utes scored 24 straight points and finished the game on a 44-7 run. USC cut Utah&#39;s lead to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/story/2022-12-03/la-times-sports-letters-usc-utah-college-football-playoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Letters: So long USC and the College Football Playoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUPy9GToQMXk2zd1ID8GdSeFc4pW1ArpPb9RFsl8vungfGyX19THZWfYdxvegTrGNHLrK0RuIh" alt="Letters: So long USC and the College Football Playoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An injured Caleb Williams, a porous defense and Lincoln Riley&#39;s hubris turn into a Pac-12 championship loss for USC on Friday night.</p></div>
            </div>
        </a><a href='https://www.uscannenbergmedia.com/2022/12/02/despite-the-loss-usc-football-is-officially-back/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Despite the loss, USC football is officially back</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbNtGaSh7STDn2DfWW7BmUiIjUCmNR7guWxOEwls5Zw0nQT5TvSYUALQzGdxsWaqfcAQ-0k5s8" alt="Despite the loss, USC football is officially back" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Caleb Williams is looking down the field. He is wearing a cardinal helmet with a. Sophomore quarterback Caleb Williams scans the field in USC&#39;s loss to Utah in&nbsp;...</p></div>
            </div>
        </a><a href='https://deadspin.com/usc-craps-out-in-vegas-but-trojans-were-playing-entire-1849850378'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC craps out in Vegas, but Trojans were playing entirely with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmm-oa5pnZx9vamsVOaBMR9ZvlOaSOztg_1r_pVZLgAtWYTbE80zffi1vcHh1B-JfHoupO4zVi" alt="USC craps out in Vegas, but Trojans were playing entirely with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Utah wins Pac-12 for second straight season, ending Lincoln Riley and Caleb Williams&#39; hopes of a playoff bid.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/adamzagoria/2022/12/03/ohio-state-favored-to-make-college-football-playoff-after-utah-knocks-off-usc-in-pac-12-title-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State Favored To Make College Football Playoff After Utah ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZjcbLsl54_ns7p6qja69mo2CzZEikRWGB5_vslpSSNogEVcZ9rflDYEQHRBBeLj76x3ewsE7E" alt="Ohio State Favored To Make College Football Playoff After Utah ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cameron Rising and Utah dominated Southern California in the Pac-12 title game on Friday night in Las Vegas, opening the door for Ohio State to make the&nbsp;...</p></div>
            </div>
        </a><a href='https://reignoftroy.com/posts/ex-usc-football-head-coach-qb-collapse-finish-season-sec-kiffin-dart'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-USC Football Head Coach, QB collapse to finish season in SEC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4FB_kU2LhJATkKZ-wBpisIiiVzS9ZJoUlrwI4gsIjiJsDF-W7hGIl4p6mJCv291VXH5rbAfdw" alt="Ex-USC Football Head Coach, QB collapse to finish season in SEC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former USC Football Head Coach Lane Kiffin and former USC Football QB Jaxson Dart&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/12/03/usc-loss-opens-college-football-playoff-door-for-ohio-state/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC loss throws college football playoff into chaos, Ohio State lurks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0W4Y4SU89xlG2lAKzTca_YsUPDy4lflGdWZJNVSrfgKWOE15LM4WVtriKT8JWoDMactfJKC2H" alt="USC loss throws college football playoff into chaos, Ohio State lurks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USC got decimated by Utah, 47-24, in the Pac-12 championship game in Las Vegas on Friday night, opening the door for the likelihood that they will get&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}