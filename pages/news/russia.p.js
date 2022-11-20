import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russia"/>
        <meta name="description" content="Trending News about Russia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russia</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/84B9/production/_127677933_wreckage.jpg" alt="Russia"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-europe-63673919'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MH17: Australia asks Russia to hand over three who downed airliner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT19nYBwhz63NcEn8hIaAwJeNFdNKnZ2e7Rh_bKyG09PWofI1zqGiQO3DigWj9hkDYbF6u7KK4p" alt="MH17: Australia asks Russia to hand over three who downed airliner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than eight years after flight MH17 was shot down by a Russian-made missile over eastern Ukraine, the court concluded on Thursday that the missile had been&nbsp;...</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/18/russia-accuses-ukraine-of-executing-more-than-10-prisoners-of-war/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia Accuses Ukraine Of Executing More Than 10 &#39;Prisoners Of War&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVH93HIDDP1FousXE1SV4VlZVZdBHw1OL1ywr-CfXZH42zyJeoFv1r5LfbXI3RvO2Q51n8VVxl" alt="Russia Accuses Ukraine Of Executing More Than 10 &#39;Prisoners Of War&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russia on Friday accused Kyiv of executing several surrendering soldiers in what Moscow said constituted a “war crime,” the latest allegation of abuse after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/18/russia-says-ukrainian-soldiers-executed-prisoners-of-war-in-donbas-region'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia says Ukrainian soldiers executed prisoners of war in Donbas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBbhocA1pgpSaeu6NJixaX29xIo1eu2yKTMiJO8RmJKNWCrkd5dN8oxHbS5QTFVvwZRAWGmWln" alt="Russia says Ukrainian soldiers executed prisoners of war in Donbas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A video has circulated on social media reportedly showing Ukrainian soldiers shooting at least 12 men.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/11/18/russia-signals-openness-to-prisoner-swap-with-us'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia signals openness to prisoner swap with US</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkoT-FKX4xRj19IZXO77lokNRIe3lFGtVVly1uq5MNBi2wUZVFsRPZrRpPgBi0ZdXDsWxazpGm" alt="Russia signals openness to prisoner swap with US" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deputy foreign minister says convicted Russian arms deal Viktor Bout is among those being discussed in potential swap.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/18/russia-viktor-bout-brittney-griner-us-prisoner-swap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia hopeful of Brittney Griner-Viktor Bout prisoner swap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuyUuheKD_DW6-yKP7MxA_anBb_KhijkYx7chTjNlDxaQ5XcLQt9qR94cCu7rm2HeMtWbhFumI" alt="Russia hopeful of Brittney Griner-Viktor Bout prisoner swap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moscow says it wants US to return convicted arms trafficker in swap that would include basketball star jailed on drug charges.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/russia-hopeful-us-prisoner-swap-including-arms-dealer-bout-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia warms to U.S. prisoner swap for weapons trader Bout</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTiWhPkURZaDe0rxo1keoG5baG6Bdf2ztAXndJS3A5sfHggGRAYxj_UrL7yOeOv77So51ht6il" alt="Russia warms to U.S. prisoner swap for weapons trader Bout" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The countries are exploring a deal that could see imprisoned Americans including Brittney Griner return to the U.S. in exchange for weapons trafficker&nbsp;...</p></div>
            </div>
        </a><a href='https://von.gov.ng/russia-hopeful-of-us-prisoner-swap/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia hopeful of US prisoner swap – Voice of Nigeria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdF-GSxLq6LnJ4gqlvEsI_Xzr-x5eAUy_eoYvSJjLEq1mQSzaNtYWnTAELq0_0FB5OBdz5lVyY" alt="Russia hopeful of US prisoner swap – Voice of Nigeria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russia says it hopes to secure a prisoner swap with the United States to return convicted Russian arms trafficker Viktor Bout, known as the “Merchant of&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056111-russia-failing-to-seriously-negotiate-brittney-griners-release-state-dept-says'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia Failing to &#39;Seriously Negotiate&#39; Brittney Griner&#39;s Release ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBTjiGwsKiFo8GRXDfNkPQJteJsEOhH4tv9vqX4gjlRoofMMHqP3Nh3cSS61hFqkgCE4g6tpS1" alt="Russia Failing to &#39;Seriously Negotiate&#39; Brittney Griner&#39;s Release ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A spokesperson for the U.S. State Department said Friday in a statement that Russia has not yet been serious in its negotiations for a prisoner swap&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/wnba/story/_/id/35054176/us-tamps-russia-update-brittney-griner-talks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U.S. tamps down Russia&#39;s update on Brittney Griner talks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQm9UMLm1vg_QuJCRserz_9zHyB5zOkkv1zOXDyPn_8QUQw4AZV9G7SXvW4DpI4o-VcSW3FEU25" alt="U.S. tamps down Russia&#39;s update on Brittney Griner talks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sergei Ryabkov, the Russian deputy foreign minister, was quoted by Russian media early in the day saying there was new &quot;activity&quot; in talks that could see&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/18/europe/russia-bout-exchange-talks-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia says it hopes for &#39;positive outcome&#39; on Viktor Bout prisoner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWAMuay2tVU_8JC-5nNydVnt_Y6InoxW7tQ0nmIQ5Of-inJ43IGYn-aAAjQv8fHwYf10ziAI-9" alt="Russia says it hopes for &#39;positive outcome&#39; on Viktor Bout prisoner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hopes rose on Friday for a potential prisoner exchange between the US and Russia that could free two detained Americans, after a top Russian official said&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}