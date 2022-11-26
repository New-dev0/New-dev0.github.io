import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NC State football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NC State football"/>
        <meta name="description" content="Trending News about NC State football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NC State football</h1>
            <Image width={800} height={500} src="https://d1qkubt1nbt8w1.cloudfront.net/images/2022/11/25/IMG_8956_vTa98.jpg?preset=large.socialmediaimage" alt="NC State football"/>
            <h3>Recent News</h3>
            <a href='https://gopack.com/news/2022/11/25/football-wolfpack-defeats-no-18-unc-in-double-overtime-thriller.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wolfpack Defeats No. 18 UNC in Double Overtime Thriller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhNd4rA7uI3TeODRQYCGJvgnmd6bvf5XnM2uB0934N6Xcg0_-kTsRgCB-01eHFH9nRUfmdljJu" alt="Wolfpack Defeats No. 18 UNC in Double Overtime Thriller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHAPEL HILL, N.C. – The NC State football team earned a 30-27 double overtime victory at No. 18 North Carolina on Friday night at Kenan Stadium.</p></div>
            </div>
        </a><a href='https://www.fayobserver.com/story/sports/college/acc/2022/11/26/nc-state-football-score-unc-tar-heels/69673880007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big Ben: Finley leads NC State football to double-overtime win at UNC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTe2P_lMpxepeEPnlMYQ9UsdZ5Ibu-2YMP2mqJilbY5IGU6yUbz6Zh_p0ublMLPGT1bGuDw98xC" alt="Big Ben: Finley leads NC State football to double-overtime win at UNC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ben Finley&#39;s first career start provided NC State football with its most memorable win over its most hated rival UNC during a disjointed 2022 season.</p></div>
            </div>
        </a><a href='https://www.newsobserver.com/sports/college/acc/nc-state/article269030282.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NC State football upsets North Carolina. Wolfpack tops Tar Heels 30 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjlb8Xq2ub5K-ZMzTByapLeN-5aCUKEV0yGViylq9vc646ZGWv_KuaC_mPLgAYhXgMyXv4ZqWPVg" alt="NC State football upsets North Carolina. Wolfpack tops Tar Heels 30 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who won UNC vs NC State football? Wolfpack upset Tar Heels in overtime at Kenan Stadium. Freshman Ben Finley throws two TDs, Drake Maye loss.</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/story/_/id/35109527/ben-finley-leads-nc-state-no-17-unc-first-career-start'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ben Finley leads NC State past No. 17 UNC in first career start</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWpKf4Z1kKN174ddy1og_xS-gQNjEtohPOBghCCy9OsF8ZRXmK7GWTaFN39LflL6K0-Wy16oSk" alt="Ben Finley leads NC State past No. 17 UNC in first career start" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NC State spiked weeks of frustration with a signature road win at rival UNC to end the regular season in QB Ben Finley&#39;s first career start.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/top-ranked-unc-mens-basketball-team-stunned-8-minutes-after-football-team-loses-to-rival-nc-state-013029240.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top-ranked UNC men&#39;s basketball team stunned 8 minutes after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT81ZzUQtSKaY7S0Rv4gkQ7Ckq_IS0td_GvTsqwLCdgZbB_QgVoddUzKttRtU5pDteVPgXgsUYJ" alt="Top-ranked UNC men&#39;s basketball team stunned 8 minutes after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>North Carolina has had better Black Fridays. The Tar Heel men&#39;s basketball and football teams both sustained upset losses — the basketball more shocking&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amny.com/sports/nc-state-vs-unc-preview-how-to-watch-more/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Week 13 College Football: N.C. State vs #18 UNC preview, how to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsBlu0bG6g9wiFCFGr_aYM5zi1FosIdZCp6BhPQFNdoaLWHAD4Fp57bvSbYS30pzoghbGi301z" alt="Week 13 College Football: N.C. State vs #18 UNC preview, how to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The N.C. State Wolfpack travel to Chapel Hill to take on 18th ranked UNC in a college football rivalry showdown on Saturday afternoon.</p></div>
            </div>
        </a>
        </Template></>;
}