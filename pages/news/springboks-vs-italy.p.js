import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Springboks vs Italy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Springboks vs Italy"/>
        <meta name="description" content="Trending News about Springboks vs Italy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Springboks vs Italy</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7721/777fd8c4bdb04e7ba3ce9e78d9cd8722.jpg" alt="Springboks vs Italy"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/springboks/live-italy-v-springboks-20221118-5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nine-try Springboks turn on the style in second half to hammer Italy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRB-hjkHkN19GyfhZM1t5K2g_LmS05-JvpVjjkZsu2lwey-Tgyk3eEX3_a0vUDawhfpRIs_33ZK" alt="Nine-try Springboks turn on the style in second half to hammer Italy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE scoring and interactive commentary on the Test between Italy and South Africa from Genoa.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/springboks-player-ratings-vs-italy-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Springboks player ratings vs Italy | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-r2NwfEWuIumkLVc8M1P7905_rDy39MKhYbVSMFC8rpzwzyKUFc7fM2vriS5GJbXiVhO1TbI6" alt="Springboks player ratings vs Italy | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Springboks player ratings: It is six years to the day that Italy beat South Africa in Florence, but there was to be no repeat of that...</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/rugby/rugby-union/italy-south-africa-live-stream-score-result-b2228621.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy vs South Africa LIVE: Rugby result and reaction from autumn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZsASIL_rj0pkQKy9YdE6P205UKt21F27as7mf3x83P1dUB9jHTiV6tplQX4LgyHqxPyta6Pi8" alt="Italy vs South Africa LIVE: Rugby result and reaction from autumn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy 21-63 South Africa: The Springboks ran riot in the second half in Genoa to pick up their first win of the autumn.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/italy-v-south-africa-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa turn on the style in second half to slam plucky Italy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZBBaU-zP0FirnHzV6gUUXVoV_3pRWc8ohoa50PsBlbYgqVVxrb63aPzNIAIZvhJHFlKQedMvp" alt="South Africa turn on the style in second half to slam plucky Italy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On paper, it might look as if the Springboks pummelled their Italian counterparts in Genoa, bouncing back to form with the sort of raw, rugged rugby which has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/springboks/slow-depressing-sa-national-anthem-leaves-springbok-fans-amused-on-social-media-20221119'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Slow&#39;, &#39;depressing&#39; SA national anthem leaves Springbok fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTn1Mw88ThNi7LDsPseSnKQGLX-b65T_M4zTNI44JgamCtfGomX3SgFDW1ljITdjp61l-n_vrCa" alt="&#39;Slow&#39;, &#39;depressing&#39; SA national anthem leaves Springbok fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saturday&#39;s 63-21 win for the Springboks over Italy in Genoa was a much-needed injection of positivity for South African rugby, with the lively showing of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/rugby/springboks/italy-vs-south-africa-live-scores-breaking-updates-result-saturday-19-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy vs South Africa: Springboks win try-fest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLSFIFsPK15Lqib0QVtK1Due1sajnGBrSO41DwoWToICBR-L0lZ6fJ6T4zuOBcgij0zp-hbsJY" alt="Italy vs South Africa: Springboks win try-fest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy vs South Africa: Seven second-half tries, saw the Springboks record a resounding 63-21 win in Genoa.</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/time-tv-italy-south-africa-25536978'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy v South Africa kick-off time, TV channel and team news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1wPbCTffXtiP39eBXOxSA3E2Em76PzdPMNvrkUnSonZGQog-UaV4VdBQyuUYPM_qIUhrysFqy" alt="Italy v South Africa kick-off time, TV channel and team news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Azzurri stunned the rugby world with a historic win over Australia last time out while the reigning world champions are searching for their first win of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}