import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Mental Health Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Mental Health Day"/>
        <meta name="description" content="Trending News about World Mental Health Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Mental Health Day</h1>
            <Image width={800} height={500} src="https://cdn.who.int/media/images/default-source/people/who-people/devora-kestel.tmb-1200v.jpg?sfvrsn=7eabea0b_30" alt="World Mental Health Day"/>
            <h3>Recent News</h3>
            <a href='https://www.who.int/news-room/commentaries/detail/world-mental-health-day-is-an-opportunity-for-us-to-embrace-our-sense-of-community-and-normalize-mental-health'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health Day is an opportunity for us to embrace our ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSC8F4oN3PJABeWwtbjT0OKhMwiEUMI_MwB_6opS47LcY7WpNcsO8mWuc-v1nPpKugeN8GrPafa" alt="World Mental Health Day is an opportunity for us to embrace our ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the pervasive issues the report covers is stigma. Stigma, discrimination, and human rights violations against people with mental health conditions are&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/science/health/telemanas-initiative-launched-on-occasion-of-world-mental-health-day-11665414069199.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tele-MANAS initiative launched on occasion of World Mental Health ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3dzRLf0nQj7-QLJhN7aelEmHGV0xLhM24r9SXg4uKKqHsu2DTkwLioLrGyWXLvEfV4dF7Nc8Q" alt="Tele-MANAS initiative launched on occasion of World Mental Health ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acknowledging the mental health crisis in wake of the COVID-19 pandemic and an urgent need to establish a digital mental health network that will withstand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/world-mental-health-day-centre-launches-tele-manas-to-provide-affordable-services-101665419352551.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mental Health Day: Centre launches &#39;Tele Manas&#39; to provide ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqcRRo2JQu2MTA7Nkgatv3f7bnFEyWjjWcEbugx6lnTtkTZ4eEV2NBlUpl3ra9_YcWOyvLtGJu" alt="Mental Health Day: Centre launches &#39;Tele Manas&#39; to provide ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The mental health programme along with a toll-free helpline number - 14416 - were virtually launched by Karnataka governor Thawar Chand Gehlot at the&nbsp;...</p></div>
            </div>
        </a><a href='https://pm.gc.ca/en/news/statements/2022/10/10/statement-prime-minister-world-mental-health-day'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement by the Prime Minister on World Mental Health Day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTg5jD7YgF4YKT7SzJXsTlm-DZoBmPf1ceryeZDXkkXKAJMQaPZpKCsVSbjKzrjsQn59XUGKWoX" alt="Statement by the Prime Minister on World Mental Health Day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mental health is health. Over the past couple of years, Canadians have experienced rising levels of depression and anxiety. That&#39;s why we launched the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/lifestyle/miscellaneous-world-mental-health-day-2022-importance-history-theme-and-how-it-celebrated-23130094.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health day 2022: किस थीम के साथ मनाया जा रहा है इस बार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8_1q59C897QVqxwhGV5tBDVc0ggd3K3PUMVNXCz7k0x3C_QrPWfEhnNEBGSPBAGl60zD2gILL" alt="World Mental Health day 2022: किस थीम के साथ मनाया जा रहा है इस बार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Mental Health day 2022 &#39;वर्ल्ड मेंटल हेल्थ डे&#39; दुनियाभर में हर साल 10 अक्टूबर को मनाया जाता है&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/personal-finance/world-mental-health-day-what-will-your-health-policy-cover-9305421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health Day: What will your health policy cover?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKeudemThr7Po87KKsjihglbG9XJz83kgdSQ49Yh0-QZ5iGckIAnq38uWn6Aqx4wtyMH3Zb7EA" alt="World Mental Health Day: What will your health policy cover?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Insurance firms will pay for any hospitalisation linked to mental ailments, but OPD treatment will be covered only if specifically included in the policy.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/business/world-mental-health-day-insurance-for-mental-health-problems-news-228914'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health Day: Insurance For Mental Health Problems</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZqaIYtKt_AoRT_WezD7sVQYAOovKOM4JnrD1kZ-O2UVTqTAESy8DQ3CFP2iTWwDcBuBbxq--O" alt="World Mental Health Day: Insurance For Mental Health Problems" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Now, insurance coverage for mental illnesses is also possible, thanks to the Mental Healthcare Act of 2017. This act prioritises the treatment of both physical&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/health/world-mental-health-day-world-mental-health-day-2022-theme-happiness-index-2022-10-10-891931'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health Day: इन 10 सवालों के जवाब से जान सकते हैं, कितने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDGmYiSxE_-P0ySaTR2Ml3S5Whx8HuYwyic4quMoGMV276paWIaJpgCyfswY0sAUufxRpQFA_9" alt="World Mental Health Day: इन 10 सवालों के जवाब से जान सकते हैं, कितने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मेंटल हेल्थ एक ऐसा विषय है जिसके बारे में या तो लोगों में ज्यादा जागरूकता नहीं है या फिर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.weforum.org/agenda/2022/10/world-mental-health-day-4-recent-reads/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Four articles to read on World Mental Health Day 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQ4aDG_9VvmQKbPeypRENcxPMc_JHuVvItu8FjYhhtBM4ZAet3uadPQuvrX_ce4mI75SxS-xjP" alt="Four articles to read on World Mental Health Day 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Mental Health Day 2022 on 10 October is a chance to &quot;rekindle our efforts and improve mental health&quot; according to the World Health Organization.</p></div>
            </div>
        </a><a href='https://www.hrw.org/news/2022/10/10/world-mental-health-day-support-conflict-survivors'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Mental Health Day: Support Conflict Survivors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmblIVYPiVsT9b17fS2PsamkWyhkFnYVKMtEIYBZ8M2hhd0q5niVUU4ECUbPjRIkMhVvOZvkUI" alt="World Mental Health Day: Support Conflict Survivors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Governments, UN agencies, and humanitarian organizations should take concrete steps to develop and invest in psychosocial support for people affected by&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}