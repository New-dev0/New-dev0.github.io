import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Im A Celeb</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Im A Celeb"/>
        <meta name="description" content="Trending News about Im A Celeb" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Im A Celeb</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cdd87-1600.jpg" alt="Im A Celeb"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1122/1337561-im-a-celeb-star-had-no-plans-to-discuss-adoption-story/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m a Celeb star had no plans to discuss adoption story</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT17gqJ6kgDlMu5G-IOjXnrwiINRVQ0r1AJ9Ahdu9vSWpFAB5uehW54DngRDv3DN4Zt-4H5O5pa" alt="I&#39;m a Celeb star had no plans to discuss adoption story" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coronation Street star Sue Cleaver said she had not intentionally spoken about her adoption on I&#39;m A Celebrity... Get Me Out Of Here! but she felt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/entertainment/celebrities-chants-turn-to-screams-during-latest-im-a-celebrity-trial-1395640.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celebrities&#39; chants turn to screams during latest I&#39;m A Celebrity trial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKTSe1xVUBfq3zqFKNYTuTgvJrFDAO-i_4nzquMcu-RoNyn_gM7nMexmoU1KL-KiIGdbv1usCB3A" alt="Celebrities&#39; chants turn to screams during latest I&#39;m A Celebrity trial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A preview of Tuesday&#39;s episode shows three campmates endure a challenge titled Grot Yoga.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9777164/im-a-celebrity-fans-stars-go-hungry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m A Celeb fans spot trend in evictions as they predict campmates ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiti4l6kenppn0IulVjWNAMdZOcmCYsq-EXp_GKBKk9zHxxwWPqX5JCHVz9E7Pks2wj3NQTePF" alt="I&#39;m A Celeb fans spot trend in evictions as they predict campmates ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;M a Celebrity fans think they&#39;ve spotted a trend in the evictions - and it&#39;s not good news for the remaining stars.News anchor Charlene White, TV pr.</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/tv/reality-tv/a42043149/im-a-celebrity-2022-fourth-campmate-leaving/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m a Celebrity announces fourth campmate leaving the show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSswJ7vMr96C5v6Xn5FUsG9QRdxjrbifjrGVJ55H1XYHkPeqHccNzHBY2BWH5pKpGSTukDqGq10" alt="I&#39;m a Celebrity announces fourth campmate leaving the show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ant and Dec came into camp live at the end of the latest instalment to announce that Boy George would be leaving the jungle and going back to the world of warm&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/film/20221122157778/im-a-celeb-boy-george-upsets-chris-moyles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m A Celeb&#39;s Boy George upsets Chris Moyles in tense moment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQk1O6dYNmbdYBcE-_l8BXYwpHZmx_zE4SqOVRtmJiKMxcdkEAgm78nJFEdehhp60LMPEa34-yO" alt="I&#39;m A Celeb&#39;s Boy George upsets Chris Moyles in tense moment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;m A Celeb star Chris Moyles was left feeling upset in Tuesday night&#39;s episode. Read what happened here…</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/film/20221122157777/im-a-celeb-mike-tindall-talks-divorce-from-camp-wife-sue/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m A Celeb&#39;s Mike Tindall talks &#39;divorce&#39; following tough day in camp</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQIRk7LFSMdTy8TMHbxJLdVtAB-B5h4FDiWmUJMThbfeNH5rEncV66CsV69FfTW5CUh1xM9OQis" alt="I&#39;m A Celeb&#39;s Mike Tindall talks &#39;divorce&#39; following tough day in camp" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Tuesday&#39;s instalment of the ITV show, the former rugby player said he felt like he&#39;d been through a &quot;divorce&quot; following the departure of the actress, whom he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/tvshowbiz/article-11458939/Chloe-Ferry-gushes-Im-Celebs-Owen-Warner-dated-six-months.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chloe Ferry gushes over I&#39;m A Celeb&#39;s Owen Warner after they ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCwCbZlXfPTP6-G9WaWAQkk6fS42Unl4QV7M3M2IWx5dxTER5IhNPJP-Vx7raw1rlL0gxdj78X" alt="Chloe Ferry gushes over I&#39;m A Celeb&#39;s Owen Warner after they ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Geordie Shore star, 27, dated the Hollyoaks actor, 23, for six months after first meeting online , declaring him the &#39;full package&#39;.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9777564/im-a-celeb-owen-warner-chloe-ferry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m A Celeb&#39;s Owen Warner is &#39;the full package&#39; gushes his ex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYoC3SkFMSy_rtVpfbfdk5crxg58pjTThL4ZdsBx-nIheJ46c9nokOtfgwWZ85AwRkBYz6VgoY" alt="I&#39;m A Celeb&#39;s Owen Warner is &#39;the full package&#39; gushes his ex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celebrity Big Brother star Chloe Ferry, 27, dated the Hollyoaks actor for six months — and wished it had worked out. Advertisement. Owen Warner&#39;s ex Chloe Ferry&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9774988/im-a-celeb-chris-moyles-boy-george-eviction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fuming I&#39;m A Celeb fans slam camp&#39;s &#39;arrogant&#39; duo – and call for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4p65VMHT9wmKTfFfJBP4WmxF75t_IQYAB_X5Uy348_f8SV2T37EoAWBg9kj_XI00E2MsDzMaE" alt="Fuming I&#39;m A Celeb fans slam camp&#39;s &#39;arrogant&#39; duo – and call for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;M A Celebrity fans have turned on two campmates - saying they want to see them kicked out next.Some reckon the show needs to lose Boy George and Chr.</p></div>
            </div>
        </a><a href='https://www.leeds-live.co.uk/news/celebs-tv/im-celeb-viewers-blast-manchild-25582599'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m a Celeb viewers blast &#39;manchild&#39; Chris Moyles for hissy fit at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnMzSjJt7okczNwnhSYRnTtBRMYk3ZR1TFAQ09fIbWSYFw6oDHAigE6F_IfUSQYmwPNPIdpZ9b" alt="I&#39;m a Celeb viewers blast &#39;manchild&#39; Chris Moyles for hissy fit at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The radio presenter was not happy tonight, because he was passed over for a trial.</p></div>
            </div>
        </a>
        </Template></>;
}