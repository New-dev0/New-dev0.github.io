import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://www.atptour.com/-/media/images/news/2022/09/29/17/52/djokovic-tel-aviv-2022-thursday-forehand.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.atptour.com/en/news/rinderknech-djokovic-andujar-tel-aviv-2022-thursday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic Dominant In Tel Aviv Opener | ATP Tour | Tennis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVw6_pNSkdzgFqn1CJ3u_oM-N5wd_z_CO01dXyV-TeEQUhUCGWAx60k6LLnZQnftaK3MzOOSjj" alt="Novak Djokovic Dominant In Tel Aviv Opener | ATP Tour | Tennis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic has wasted no time finding his top form after more than two months away. The 88-time tour-level titlist cruised past Spaniard Pablo Andujar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/atp-roundup-novak-djokovic-returns-tour-play-wins-tel-aviv-2022-09-29/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP roundup: Novak Djokovic returns to tour play, wins in Tel Aviv</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyx9crPFsCu_KS5Cx-Bx8rxywXiwXYRXhlYOrXr6RNSz4OxbFtgx5CkKETrHJoxdgsgMzTcxLf" alt="ATP roundup: Novak Djokovic returns to tour play, wins in Tel Aviv" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Top-seeded Novak Djokovic looked sharp in his first ATP match in 2 1/2 months as he rolled to a 6-0, 6-3 win over Spain&#39;s Pablo Andujar on Thursday to reach&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/tennis/djokovic-beats-andujar-reaches-tel-aviv-atp250-quarterfinal/article65952393.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic dominates Andujar, reaches Tel Aviv quarterfinal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMX8UnYRkW96fdp5d1vZJLzqN9k2Q8_I1KDUyIDmoHVSecw_GSLYN67Gr5jlr1K-87mZ8dEFxF" alt="Djokovic dominates Andujar, reaches Tel Aviv quarterfinal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic eased to a 6-0, 6-3 win over 115th-ranked Spaniard Pablo Andujar in his first singles tournament since winning Wimbledon in July.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/tel-aviv-open-live-top-seed-novak-djokovic-meets-vasek-pospisil-in-quarterfinal-at-tel-aviv-open-follow-djokovic-vs-pospisil-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tel Aviv Open LIVE: Novak Djokovic faces Vasek Pospisil for a spot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSx0tyndwjqSBzaGTzbtyzaV6mugUfRcDy7UFFJymfhZdvNDbIBZPWudb9gUjTC1uQuHmwpxI9A" alt="Tel Aviv Open LIVE: Novak Djokovic faces Vasek Pospisil for a spot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tel Aviv Open LIVE: Top seed Novak Djokovic meets Vasek Pospisil in quarterfinal at Tel Aviv Open - Follow Djokovic vs Pospisil LIVE updates.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/atp-tel-aviv/2022/novak-djokovic-into-tel-aviv-open-quarter-finals-after-victory-featuring-longest-game-of-his-career_sto9165814/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic into Tel Aviv Open quarter-finals after victory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6ndtd65pPF5WwIC8EAYgO0N7i9kRh7yEVXYFaBzQa5R1lkUsaPiAJ0wScb6s4qyq90cMmsdh-" alt="Novak Djokovic into Tel Aviv Open quarter-finals after victory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic is into the quarter-finals of the Tel Aviv Open after a dominant 6-0 6-3 win over Spain&#39;s Pablo Andujar.</p></div>
            </div>
        </a><a href='https://www.northwalespioneer.co.uk/sport/national/22941871.novak-djokovic-sails-tel-aviv-open-quarter-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic sails into Tel Aviv Open quarter-finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQew-SzxTADEG1eVUjn-QHNmHxuOlyn-_81xXKyovCLHCa5e0t6FTnn56C2SzDrCQ0rnTALAo2" alt="Novak Djokovic sails into Tel Aviv Open quarter-finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 21-time grand-slam champion had only played at Roland Garros, Wimbledon and the Laver Cup this summer.</p></div>
            </div>
        </a>
        </Template></>;
}