import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers"/>
        <meta name="description" content="Trending News about Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers</h1>
            <Image width={800} height={500} src="https://media.bleacherreport.com/image/upload/x_404,y_251,w_1133,h_755,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1669944422/mrj9luwpefbhalg5dq9u.jpg" alt="Lakers"/>
            <h3>Recent News</h3>
            <a href='https://bleacherreport.com/articles/10057407-los-angeles-lakers-trade-ideas-based-on-latest-rumors'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Angeles Lakers Trade Ideas Based on Latest Rumors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQn_mrKUm6BGLykUaxoQGDzYIv8ELLLXdDqhy9CbsDkGZ-tEFsED2G_aIgk5U50TzBWytiziqrr" alt="Los Angeles Lakers Trade Ideas Based on Latest Rumors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trade winds are blowing in Laker Land again because, well, this franchise is a speculation factory first and a basketball team second at the moment.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/lakers/story/2022-12-01/lakers-trail-blazers-takeaways-darvin-ham-chauncey-billips'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeaways from the Lakers&#39; 128-109 win over Trail Blazers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS197Vy2jv-ykp3criaXz1ZDpsVc6DcymczIHYV-aDEpMegRoH0h-2w_nadKtJJetGPH6PYEF5M" alt="Takeaways from the Lakers&#39; 128-109 win over Trail Blazers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lakers coach Darvin Ham and Trail Blazers coach Chauncey Billups have been like brothers since winning an NBA title together with the Pistons in 2004.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/lakers/news/lakers-rumors-la-exploring-trade-options-centered-around-beverley-and-nunn-rm94'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Rumors: L.A. Exploring Trade Options Centered Around ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSW5jZ7htFVFiyp5MBD8hTNriHwNATY2hG0naq4ZIQdm4ttKXpCje6Sp3yMumhIimOGdnFe_im8" alt="Lakers Rumors: L.A. Exploring Trade Options Centered Around ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Westbrook trade package still isn&#39;t out of the question, especially with such a large contract they can get rid of, but it&#39;s looking more likely Beverley and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/lakers-trade-rumors-front-office-considering-three-different-paths-to-deals-as-dec-15-looms-per-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers trade rumors: Front office considering three different paths to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxtP3h0OeGZSnW2cT5g4OprTmCXbI4LXlhgYtNFUO1UxjvOghVyyLiFd1HKAkTtPy3onLkYq0l" alt="Lakers trade rumors: Front office considering three different paths to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When the season began, the Los Angeles Lakers leaked their intent to hold off on making any trades until around Thanksgiving or the 20-game mark.</p></div>
            </div>
        </a><a href='https://www.silverscreenandroll.com/2022/12/1/23489196/lakers-trade-report-rumor-russell-westbrook-december-15-kendrick-nunn-patrick-beverley'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Rumors: Insider says team will potentially make multiple trades</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqWWU-NdTR-5FcScSKPHYt_P_oYk-L4cH1CX94UdCmb9yZBwaHijAq56-gTfpImepPWV1FsVkq" alt="Lakers Rumors: Insider says team will potentially make multiple trades" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The frustration with the Lakers front office this season has largely centered on their hesitance to do a Russell Westbrook trade.</p></div>
            </div>
        </a><a href='https://www.hoopsrumors.com/2022/12/lakers-to-waive-matt-ryan.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Waive Matt Ryan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNplKlLLFcoCmjuFUurRf1waUx58IVcy6FZkEhHqZCciLpycepFsowAdWZVWI3BuyVbdeSgesC" alt="Lakers Waive Matt Ryan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles has no plans to immediately fill its newly opened roster spot.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/lakers/news/anthony-davis-praises-late-game-play-in-win-over-portland-ak1987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers News: Anthony Davis Praises L.A.&#39;s Late-Game Two-Way ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxxx3P0BFOnE_ovLXuZYm0JQIXQqQ_42pvFnDeMtfb37QxZ1zGapTlMPH2j-1ctKcp__xWn6w0" alt="Lakers News: Anthony Davis Praises L.A.&#39;s Late-Game Two-Way ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In strangling the life out of the visiting Portland Trail Blazers last night, 128-109, your Los Angeles Lakers submitted their first comfortable&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/lakers-leaning-toward-dealing-patrick-130025561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers leaning toward dealing Patrick Beverley and Kendrick Nunn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ70li9lHB6iyCklrNeiVpGNyKsI9s2Eonq8Q8HDulUi8DT5i5BicTyRAa2xelBRT47Q2Y2YpZX" alt="Lakers leaning toward dealing Patrick Beverley and Kendrick Nunn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just about everyone agrees the Los Angeles Lakers need to make a trade if they will have any hope of contending for the NBA championship this season.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/lakers-news-matt-ryan-sends-heartfelt-message-after-la-exit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Ryan sends heartfelt message after Lakers exit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeHqPt85af3KYl6XwV6Ofgjgrq2bqgcMw__7PAdyrHC_x9k3wNRbAWuLdDGBGhUGHcjNk_yJOA" alt="Matt Ryan sends heartfelt message after Lakers exit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matt Ryan thanked the Lakers for taking a chance on him despite being waived following their 128-109 win over the Blazers on Wednesday.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/lakers/news/la-set-to-release-matt-ryan-ak1987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers News: L.A. To Release Matt Ryan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT40XNdFiu8bjyQyZtshPttptdibJZMaPrGv1F_WL6xPDUJ5CdYadTwZLjU4ryath6LCYK84y9X" alt="Lakers News: L.A. To Release Matt Ryan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The team is cutting one of its best three-point shooters to open up a standard roster spot.</p></div>
            </div>
        </a>
        </Template></>;
}