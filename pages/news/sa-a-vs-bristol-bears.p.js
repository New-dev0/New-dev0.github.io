import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SA A vs Bristol Bears</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SA A vs Bristol Bears"/>
        <meta name="description" content="Trending News about SA A vs Bristol Bears" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SA A vs Bristol Bears</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7712/bb8acf01dee442ffaee9b017e65cdb60.jpg" alt="SA A vs Bristol Bears"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/springboks/live-south-africa-a-v-bristol-bears-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa A produce horror show to go down to Bristol Bears | Sport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGEO_La8XTu3L3RiP9gBK3jKpdFr12Js7v8sB_2OdKERo0bacnOLTRiVJUAoUmsC4k6wELGl4K" alt="South Africa A produce horror show to go down to Bristol Bears | Sport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE scoring on the midweek match between Bristol Bears and South Africa A from Ashton Gate Stadium.</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/what-time-south-africa-v-25517372'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What time is South Africa A v Bristol Bears kick-off and how can I live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzO7Id5acP5GOMWq4Q8LjSpR8VT8p5krFot5FYcAUBMRDS42nmyjGb1o2LHmBpDugn4rtX2943" alt="What time is South Africa A v Bristol Bears kick-off and how can I live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Super Sport have the broadcasting rights in South Africa. What&#39;s the team news? There is a plethora of Springbok internationals named in this select 15 side for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.planetrugby.com/news/international-bristol-bears-power-past-south-africa-a-to-end-winless-streak'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>International: Bristol Bears power past South Africa &#39;A&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnLzvfqnRN_0ZwGEs3V8-znyCyZ-uBCj19K8GA9i9zVEbreBWLxGL9fhYXzbSZAm0NDLR33mPP" alt="International: Bristol Bears power past South Africa &#39;A&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bristol Bears got the better of the South Africa &#39;A&#39; side as they sealed a deserved 26-11 victory at Ashton Gate on Thursday evening.</p></div>
            </div>
        </a><a href='https://www.bristolpost.co.uk/sport/rugby/rugby-news/bristol-bears-south-africa-live-7821532'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bristol Bears v South Africa A LIVEL: Reaction as Bristol win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOGZEOfijSkvR5eS5r3PDbtwB5s_Fa78SH11Qv_Xm-OeGlgmxwlBWFqYiiP_MpyA2g8cSqoLGn" alt="Bristol Bears v South Africa A LIVEL: Reaction as Bristol win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the build-up, team news, live play-by-play match updates, reaction, analysis, stats and highlights from Ashton Gate.</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/rugby/springboks/south-africa-bristol-bears-what-time-is-kick-off-breaking-17-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africa &#39;A&#39; v Bristol Bears: What time is kick-off TODAY?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkmnKImdV4_cCxL2kE4MxA-eXeol8MtV4xab4BVV8Ns6a4KEKB_T0Kb6a382XPn0FyE8egV_XC" alt="South Africa &#39;A&#39; v Bristol Bears: What time is kick-off TODAY?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The South Africa &#39;A&#39; side will be looking to end their two-match tour on a winning note when they take on Bristol Bears on Thursday.</p></div>
            </div>
        </a><a href='https://supersport.com/rugby/general/news/e69e103a-04ab-4558-a9aa-7a228ce0b072/motivated-bears-condemn-sa-a-to-another-defeat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Motivated Bears condemn SA A to another defeat | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Motivated Bears condemn SA A to another defeat | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South African rugby has a huge reservoir of talent available to it but you wouldn&#39;t have thought so if you watched the national second stringers slip to a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}