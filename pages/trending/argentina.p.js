import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://fotos.perfil.com/2022/09/24/trim/1140/641/messi-argentina-purple-1425616.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://batimes.com.ar/news/sports/messi-scores-twice-as-argentina-down-honduras.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi scores twice as Argentina down Honduras</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXuNKwr87oIhE_OpPIJhG1-Pw_84gqqCcJ4e9EdFpZwSDY7jKutp-J-qvo8fj3VG4f6fTpkbbY" alt="Messi scores twice as Argentina down Honduras" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi&#39;s expertly taken double helped seal a comprehensive 3-0 win for Argentina over Honduras in Miami on Friday to extend their impressive unbeaten&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/lionel-messi-powers-argentina-past-honduras-in-miami-8169691/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi powers Argentina past Honduras in Miami</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxHRAqpxWa698hrLLQh2r64Y8q-cPeKfDoL0YLx2IijJxIxReYFfOdQfT4_vZfySkyj2-TmAO_" alt="Lionel Messi powers Argentina past Honduras in Miami" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi was at the center of the action from the opening whistle, lobbing a pass to the charging Papu Gomez who found Lautaro Martinez for an early 1-0 lead.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/09/24/632ed936e2704e03958b456f.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi leads Argentina to another victory and World Cup optimism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQa0dygYjWqemKg7o646xTxEIb4U1UKRazXaPOYIBIu8xQEtjATNuQIXGzhUj82cxLZJXcqaDwn" alt="Messi leads Argentina to another victory and World Cup optimism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina beat Honduras 3-0 on Friday night, with Lionel Messi scoring two goals in what turned out to be a party for the Albiceleste fans in Miami.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/argentina-vs-honduras-live-score-updates-highlights-lineups/i4khmuj34snvecgjtibcckm0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Honduras result, score: Lionel Messi nets two goals as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0aFgBplw1N48knce8VHEwXLqRQM6C4C0vmXeZ-Bw_vfGvIauvBHDC0duGgpdw6KzX7_CTIhb9" alt="Argentina vs. Honduras result, score: Lionel Messi nets two goals as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi had a hand in all three goals, including scoring two himself, as Argentina brushed off Honduras 3-0 in a World Cup tuneup friendly just two&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/sep/24/against-all-odds-lionel-messi-has-one-last-shot-at-world-cup-glory-with-argentina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Against all odds, Lionel Messi has one last shot at World Cup glory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLClfTlSGI6LyIh0pX7NImI-a2QWkriENRUhbf6k4vOTvRb7U4eKaYOMo8JynA_Rp_3iF8H7bR" alt="Against all odds, Lionel Messi has one last shot at World Cup glory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>And at last the Argentinian Football Association had managed to appoint, in Jorge Sampaoli, a dynamic and progressive coach who promised to restore the days of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/messi-argentina-team-mates-protect-honduras-mass-scuffle/bltaf7c9f8e6d0e1d29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi&#39;s Argentina team-mates race over to protect him after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTa7aCtw2zkCmktjI9xj3jSVk0nPj5zHTS7i89NgD_RAtAMFzi1pwprnSKqbMdHiNsowX6WI1Vq" alt="Messi&#39;s Argentina team-mates race over to protect him after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi&#39;s Argentina team-mates were left furious with Honduras midfielder Deiby Flores after he knocked over the PSG star in Friday&#39;s friendly.</p></div>
            </div>
        </a>
        </Template></>;
}