import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ishan Kishan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ishan Kishan"/>
        <meta name="description" content="Trending News about Ishan Kishan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ishan Kishan</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/09102022/09_10_2022-ishankishanap5_23129196.jpg" alt="Ishan Kishan"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/cricket/bouncer-ishan-kishan-ind-vs-sa-ishan-kishan-played-the-best-innings-of-odi-career-in-ranchi-missed-his-first-century-and-he-also-broke-rohit-sharma-and-sourav-ganguly-record-23129196.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ishan Kishan: इशान किशन ने रांची में खेली वनडे करियर की बेस्ट पारी, रोहित ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRLLrmQFVobvh1qgD1wczhJEAoahu1H1USCcxanjP38bpu1a4RARLUrm1BDzVrwfh-Ssx4SPjh" alt="Ishan Kishan: इशान किशन ने रांची में खेली वनडे करियर की बेस्ट पारी, रोहित ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ishan Kishan missed century भारतीय क्रिकेट टीम के युवा विकेटकीपर-बल्लेबाज इशान किशन ने एम एस धौनी&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/ishan-kishan-ind-vs-sa-2nd-odi-ranchi-shreyas-iyer-8199570/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Mere jaisa koi chakka bhi utna jaldi nahi maar pata hai&#39; (Not many ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRC1AA7sRpspoijtCgNu53YAkyuY252Dqo8Lk7pJ-Wzi-ZX09KE4K1_xUdsOwMIt6dLmB1GT0f9" alt="&#39;Mere jaisa koi chakka bhi utna jaldi nahi maar pata hai&#39; (Not many ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;That is my strength. Hitting sixes. So if I can do my bit by hitting sixes then I don&#39;t think of rotating that much,&quot; said Kishan.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/shreyas-iyer-ishan-kishan-steer-india-to-series-levelling-win-101665335036905.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shreyas Iyer, Ishan Kishan steer India to series-levelling win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnF87FVbsHUFrYBkyh7JZDnKG8yVoU4bbubMBT14GQcqTFwTqYAcscxByP_VnDF0CctRTtJXGO" alt="Shreyas Iyer, Ishan Kishan steer India to series-levelling win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iyer&#39;s 113 not out and Kishan&#39;s attacking 93 and their century partnership helped coast to the target after Mohammed Siraj the bowling fightback to peg&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-unfortunately-i-missed-hundred-but-happy-my-team-won-ishan-kishan-after-smashing-93-runs-india-vs-south-africa-2nd-odi-ranchi-shreyas-iyer-4718313.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ईशान किशन ने खेली 93 रन की तूफानी पारी, लगाए 7 छक्के; बोले- शतक तो ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlnbrfcv5gMQOuof9K9d9n0TrZB_FgW6BQNRR9a-jx-T60PyE-D3spENlRIuGN00O8YkLVXhjj" alt="ईशान किशन ने खेली 93 रन की तूफानी पारी, लगाए 7 छक्के; बोले- शतक तो ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>श्रेयस अय्यर (नाबाद 113) की शतकीय पारी और ईशान किशन (93) के साथ 161 रन की साझेदारी की बदौलत&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-sa-ishan-kishan-missed-his-century-but-won-the-heart-of-many-people-2022-10-09-891625'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ishan Kishan: शतक से चूकने के बाद भी लोगों का दिल जीत ले गए ईशान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFn9szAZgd_q4viHpkyxd8ev0uJ2zTR5Xluuf1oDWSaTdHDnbwLJPJEGPXWBfTFB1Hd_o8BEi5" alt="Ishan Kishan: शतक से चूकने के बाद भी लोगों का दिल जीत ले गए ईशान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ishan Kishan: ईशान किशन की शानदार पारी ने भारत की मैच में वापसी करा दी। हालांकि ये बल्लेबाज&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/ind-vs-sa-2nd-odi-shreyas-iyer-ishan-kishan-india-south-africa-2022-series-level-ranchi/article65989818.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA 2nd ODI: Shreyas Iyer-Ishan Kishan show floors South ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQoWTBRmS7BVfpKe_DjqJgtRyFc5UeMElDtKtm5E1BO_D8kma9XK3xiC6O8dzLo6fKmBj7M7cAE" alt="IND vs SA 2nd ODI: Shreyas Iyer-Ishan Kishan show floors South ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa was at the receiving end of a spectacular display of batting by Ishan Kishan (93, 84b, 4x4, 7x6) and Shreyas Iyer (113 not out, 111b,&nbsp;...</p></div>
            </div>
        </a><a href='https://cricxtasy.com/watch/ishan-kishan-brings-back-ipl-memories-hits-anrich-nortje/cid8760659.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Ishan Kishan brings IPL memories back; smashes Anrich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmTxhU6AUaR_RbY56H4YJnBGgnCuRT_PKJd5z7hQ9RxcMtvEH9dJv2yygLreRRlsIJRuauqI3_" alt="WATCH: Ishan Kishan brings IPL memories back; smashes Anrich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ishan Kishan went into beast mode at the sight of Anrich Nortje and smashed the South African bowler away in Ranchi.</p></div>
            </div>
        </a><a href='https://www.aninews.in/news/sports/cricket/unfortunate-i-missed-out-on-hundred-ishan-kishan20221010000651'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unfortunate I missed out on hundred: Ishan Kishan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_wbKR71G3k2dOOpU4MwhkyttWDB8NvjtIN4Q9MCXGKpOaNm-d-yszmy5dp6IHvuIoZbGZqiON" alt="Unfortunate I missed out on hundred: Ishan Kishan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANI | Updated: Oct 10, 2022 00:06 IST. Ranchi (Jharkhand)[India], October 10 (ANI): Ishan Kishan played an important knock of 93 off 84 balls to help India&nbsp;...</p></div>
            </div>
        </a><a href='http://www.millenniumpost.in/sports/shreyas-iyer-ishan-kishan-set-up-series-levelling-win-for-india-495438'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shreyas Iyer, Ishan Kishan set up series levelling win for India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQu7tFbmUSFVefx8nWw_TTNxDGY0dKE0ay9UFS0aYTLA0ILa4NqxqhFmypUVx_i1BUpjP_I87FO" alt="Shreyas Iyer, Ishan Kishan set up series levelling win for India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ranchi: Shreyas Iyer struck a sublime century while Ishan Kishan displayed his brute force against a formidable South African attack to set up a series&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/cricket/india-vs-south-africa-ranchi-odi-ind-vs-sa-2nd-odi-shreyas-iyers-century-ishan-kishans-93-guide-india-to-series-levelling-win-10051373'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs SA 2nd ODI: Shreyas Iyer&#39;s Century, Ishan Kishan&#39;s 93 Guide ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSciT5_wglene45HY46cS2oJfnlOpzJMqUB8ouWpAuXQZJN9UGcNt6qbSofryrg-dt6NI9eeLuV" alt="IND vs SA 2nd ODI: Shreyas Iyer&#39;s Century, Ishan Kishan&#39;s 93 Guide ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shreyas Iyer&#39;s unbeaten century combined with Ishan Kishan&#39;s 84-ball 93 runs guided India to series levelling seven-wicket win against South Africa in the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}