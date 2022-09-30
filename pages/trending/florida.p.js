import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida"/>
        <meta name="description" content="Trending News about Florida" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Sep/1664476619_new-project-2022-09-30t000519-010.jpg" alt="Florida"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/world/hurricane-ian-barrels-across-florida-leaves-a-trail-of-destruction/cid/1889527'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian barrels across Florida, leaves a trail of destruction</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTyDlyEXI6KGEhHsjwWuWT_K6oan9Je0ArkF52PvYoGnCDwc2oScvDo1AuzeME-a1RnoD8cxLkb" alt="Hurricane Ian barrels across Florida, leaves a trail of destruction" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hurricane Ian left a path of destruction in southwest Florida, trapping people in flooded homes, cutting off the only bridge to a barrier island,&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/world-news/floods-trap-many-in-florida-as-ian-heads-to-south-carolina/articleshow/94543560.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Floods trap many in Florida as Ian heads to South Carolina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJreK-fVyBWzKogLfhIvloRI2E1Xn8ixAY3I9Nekbz_NIoc2DZ3kM-PQ-yIAHZvH5A9XBLRG-X" alt="Floods trap many in Florida as Ian heads to South Carolina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The storm flooded homes on both of the state&#39;s coasts, cut off the only bridge to a barrier island, destroyed a historic waterfront pier and knocked out&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/world/hurricane-ian-wreaks-havoc-on-florida-joe-biden-warns-of-substantial-death-toll-article-94544543'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian wreaks havoc on Florida; Joe Biden warns of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRd8KJX71Znxs1-Em7JT6ET999dGSDVjdFbe0_Iv_wz7G7nVsIfwbN3hJFRogSqQMe9-st1gvsn" alt="Hurricane Ian wreaks havoc on Florida; Joe Biden warns of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The storm, one of the most powerful ever to hit the United States, churned towards South Carolina as a Category 1 hurricane after hammering Florida,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/hurricane-ian-leaves-trail-of-wreckage-in-florida-as-it-heads-to-carolinas-101664488689220.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian leaves trail of wreckage in Florida as it heads to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzKYNNsFcTEtZirX6zeucrZ3bkt10bhaQPADLmJlxMqxDxK1AT2Xf74mRZkyI706cNPLc1tKtg" alt="Hurricane Ian leaves trail of wreckage in Florida as it heads to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida Governor Ron DeSantis said that Chinook and Black Hawk helicopters had rescued people from flooded islands. He spoke with Biden, who approved a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/sep/29/florida-rescue-crews-search-residents-trapped-hurricane-ian-floods'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian: &#39;catastrophic&#39; damage in Florida as trapped residents ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1LM96kAYgXi1Sm9DoEoRoUAI4M3bqSdRU-_yXz2IOc2Tjtve4dyvViwchDPuGEY6JPVXd8CLB" alt="Hurricane Ian: &#39;catastrophic&#39; damage in Florida as trapped residents ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Biden says storm could &#39;be deadliest in state&#39;s history&#39; as authorities express fears of a growing death toll.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/world/story/hurricane-ian-florida-residents-unwilling-unable-to-evacuate-ride-out-2006145-2022-09-29'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unwilling or unable to evacuate, some Florida residents ride out ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-K54BhL3ss618rBm_NWULQKPaqLJNzeeNnyk8AC4sen-Ow1PCFwDq4WMd82B06rXohBs1inn8" alt="Unwilling or unable to evacuate, some Florida residents ride out ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ian hit Florida&#39;s Gulf Coast with catastrophic force on Wednesday, gripping the state with howling winds, torrential rain and a treacherous surge of ocean&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/hurricane-ian-in-florida-news-hurricane-ian-in-florida-updates-hurricane-ian-in-florida-news-today-hurricane-ian-in-florida-latest-hurricane-ian-shark-sweeps-into-streets-amid-rain-tornadoes-in-florida-video-101664443258303.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian: Shark sweeps into streets amid rain, tornadoes in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxCxfiL7zdq_wDVWo7UglTpVK96E0BBdHTjwTMjoOtp8o4ZmkhVCx77hzZ3LJrT88LCQ9oE5jZ" alt="Hurricane Ian: Shark sweeps into streets amid rain, tornadoes in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hurricane Ian In Florida: In a video widely shared on social media, a shark was seen swept into the street in Fort Myers in Florida. | World News.</p></div>
            </div>
        </a><a href='https://www.npr.org/sections/pictureshow/2022/09/29/1125903958/hurricane-ian-florida-photos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: This is what Florida looks like after Hurricane Ian</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJhAEGXXACYoj_Ys6o8gKjgZuJ23peY5XGbaeed0rRRpPwEA61i9QBBtcbQQqcerAj-TiWo6WT" alt="Photos: This is what Florida looks like after Hurricane Ian" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Images of the aftermath show a glimpse of the destruction caused by the powerful Category 4 hurricane: homes washed out, boats yanked from their moorings,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/us/waning-hurricane-ian-creeps-across-florida-after-battering-gulf-coast-2022-09-29/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Death toll in Florida uncertain as Ian takes aim at Carolinas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReT6UeiYZItpd8rfM9aGjo-xJmkhXOp26l7EhWOgxPQ4tJfx9HOhoXz6RaatZaolQniXUfbXy4" alt="Death toll in Florida uncertain as Ian takes aim at Carolinas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emergency crews tried on Thursday to reach stranded Florida residents as a resurgent Hurricane Ian veered toward the Carolinas after cutting a path of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-us-canada-63078885'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurricane Ian: Florida governor warns of &#39;historic&#39; destruction</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKd0_atnWMHOWXgmWL4kKn1oJZrlULQCyGDyoL4draRGO8Bov4Tzy8HDMJhlqQYbpgHxevdssw" alt="Hurricane Ian: Florida governor warns of &#39;historic&#39; destruction" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida Governor Ron DeSantis warned Hurricane Ian will leave historic devastation, as the storm batters the state with catastrophic wind and rain.</p></div>
            </div>
        </a>
        </Template></>;
}