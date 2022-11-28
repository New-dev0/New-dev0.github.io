import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Notre Dame Football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Notre Dame Football"/>
        <meta name="description" content="Trending News about Notre Dame Football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Notre Dame Football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/27/NNDI/acc0e44b-2664-4c44-9575-8d3b1fea82f4-ap_nd_2.jpg?auto=webp&crop=1023,576,x0,y52&format=pjpg&width=1200" alt="Notre Dame Football"/>
            <h3>Recent News</h3>
            <a href='https://www.ndinsider.com/story/sports/football/2022/11/27/notre-dame-football-bowl-prospects-usc-loss-michael-mayer-isaiah-foskey-drew-pyne/69667409007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notebook: What are Notre Dame&#39;s bowl prospects after losing to USC?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSBMIRSTa0qgLmWOpgPwZ9oU1znOQyqd_71pBNB26rvuHgIP0a17yVSsaoYz8noKq6dsq_sHYp" alt="Notebook: What are Notre Dame&#39;s bowl prospects after losing to USC?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If Michael Mayer and Isaiah Foskey follow that recent trend, the record-setting duo would have played its final game in a Notre Dame uniform.</p></div>
            </div>
        </a><a href='https://www.onefootdown.com/2022/11/27/23480658/notre-dame-football-three-things-we-saw-against-southern-cal-notre-dame-football-irish-nd-news-usc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notre Dame Football: Three Things We Saw in a Loss to Southern Cal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRS2cI8m5GqqV0JAzEFVH8O7rw58n9xzmvSwhCuV18aUZckvJX-R6me5a3vBLmJXqKKvPg56TLh" alt="Notre Dame Football: Three Things We Saw in a Loss to Southern Cal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Notre Dame-USC game with major stakes for the first time in five years. One last night of Michael Mayer doing Michael Mayer things. Best of luck in the pros,&nbsp;...</p></div>
            </div>
        </a><a href='https://slapthesign.com/2022/11/27/notre-dame-football-three-takeaways-usc-loss/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notre Dame football: 3 takeaways from USC loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRlXzUk2aA0sMuDHrDjQUq1JPb0VQLV4p3USjYYwAOJRjmWo_98hkOZJVIPHzNlh94sm7IFNYxD" alt="Notre Dame football: 3 takeaways from USC loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Heisman frontrunner Caleb Williams proved too much for Notre Dame&#39;s defensive front to handle in the loss. However, while the Irish were missing a couple of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/notredame/football/notre-dame-football-key-takeways-from-the-defense-usc-loss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Key Takeaways Of The Notre Dame Defense From The Loss To USC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAzE2osuYYG9EAoRMFpVTdlr34mP0Tlnjff5lnc_dmSlFI806MIaMFU4p1qxtV82kG7LbZ6cIB" alt="Key Takeaways Of The Notre Dame Defense From The Loss To USC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Run Game Plan Was Puzzling - Notre Dame treated USC&#39;s offense like the USC offense of past years. In recent seasons the Irish defense almost dared USC to run,&nbsp;...</p></div>
            </div>
        </a><a href='https://fightingirishwire.usatoday.com/lists/notre-dame-usc-college-football-recap-irish-trojans-caleb-williams-marcus-freeman/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notre Dame vs USC: Perfect Hollywood Script Co-Written By The Irish</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8HduJkHEbl84ioMvVltuP5SLtdp_wzysqeoE53UBmapQo7xlz0blim1qpKj6XhYP3IpUufOqW" alt="Notre Dame vs USC: Perfect Hollywood Script Co-Written By The Irish" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Things couldn&#39;t have gone better for USC on Saturday night and now Notre Dame is playing from behind in a rivalry they&#39;ve recently owned.</p></div>
            </div>
        </a><a href='https://notredame.rivals.com/news/usc-loss-confirms-what-notre-dame-s-next-steps-need-to-look-like'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>InsideNDSports - USC loss confirms what Notre Dame&#39;s next steps ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2TW4q_03If3ZbpovJhFTbxTdLKGwj47ZlhwkDtku95bEzYDixKuPb2hfI3ZIXQOPWNQTODgkG" alt="InsideNDSports - USC loss confirms what Notre Dame&#39;s next steps ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trojans QB Caleb Williams spices up a USC-ND rivalry that&#39;s trending toward perpetual significance once again.</p></div>
            </div>
        </a><a href='https://247sports.com/college/usc/Article/USC-football-Trojans-beat-Notre-Dame-Fighting-Irish-physicality-silence-doubters-Lincoln-Riley-Calen-Bullock-Alex-Grinch-198779813/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trojan physicality stifles Notre Dame, silences more doubters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDSIW760Qe6GplHX39SlHlxAmld5Wknlbd-TscF_cRn4Uz5igKfn8daEjOOzbgw0rmlnhJEZgB" alt="Trojan physicality stifles Notre Dame, silences more doubters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A week after punctuating a week of UCLA trash talk with a thrilling 48-45 win over the Bruins in the Rose Bowl, USC mulled over all the talk of big, physical,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}