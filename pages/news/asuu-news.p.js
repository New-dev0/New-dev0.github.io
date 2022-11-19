import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ASUU news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ASUU news"/>
        <meta name="description" content="Trending News about ASUU news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ASUU news</h1>
            <Image width={800} height={500} src="" alt="ASUU news"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/pay-our-withheld-salaries-or-risk-scuttled-academic-session-asuu-tells-fg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pay withheld salaries or risk scuttled academic session, ASUU ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxvO0TTUVoH01W6NNqawZdbpY-hNEKyinq9xg-wLMNAhl2KECVfWwy0Rj72ue3IfgadQaJMVnS" alt="Pay withheld salaries or risk scuttled academic session, ASUU ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By James Ogunnaike, Abeokuta. Members of the Academic Staff Union of Universities (ASUU) of the Olabisi Onabanjo University (OOU) Ago-Iwoye, yesterday,&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/fg-asuu-begin-fresh-showdown-minister-tackles-lecturers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG, ASUU begin fresh showdown, minister tackles lecturers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRu1dIWw9yS4J0ZuEWSHB8pebITIy5BcgPwH9o8bRWTsHSFnjPHNqwC2yVeOHaWJWjmsOhuR3vN" alt="FG, ASUU begin fresh showdown, minister tackles lecturers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Government and the Academic Staff Union of Universities may be preparing for another showdown as the Minister of Education, Adamu Adamu,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/buhari-why-asuu-should-stop-using-strike-to-press-home-demands'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buhari: Why ASUU should stop using strike to press home demands</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqPDJTD4pVd4g0pOw3suoguPbna4A0Y4vYNC2kLMX9aI3UzX0zYGsVtoOT9VljdUNnXcmhMDYf" alt="Buhari: Why ASUU should stop using strike to press home demands" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Muhammadu Buhari has asked the Academic Staff Union of Universities (ASUU) and other trade unions to employ negotiations and shun strike as a tool&nbsp;...</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/17/asuu-protest-against-casualization-of-academic-staff-in-jigawa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ASUU Protest Against Casualization of Academic Staff in Jigawa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYWYA41jI3xyPDfbQ3lTBQdebWUlpgvSoe6u8VJvVdOQYHrKnHXlJKkpOjliTHoT-Xqe0yflbx" alt="ASUU Protest Against Casualization of Academic Staff in Jigawa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ASUU Chairman of the FUD branch, Dr. Bashir Yusuf disclosed this during the protest, noting that the action is against all conventional laws, international&nbsp;...</p></div>
            </div>
        </a><a href='https://aljazirahnews.com/you-wont-be-paid-for-work-not-done-fg-tells-asuu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You Won&#39;t Be Paid For Work Not Done, FG Tells ASUU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3mCx9y5T4dcXj5LflXlKcGi9_jFQJqrjZ9KTDpnu0D0oTRRFO-0_bJq1YI7VBVWw5CLiqGxTj" alt="You Won&#39;t Be Paid For Work Not Done, FG Tells ASUU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Government has insisted that public university lecturers will not be paid for work not done in line with the &#39;No work no pay&#39; policy. Minister of&nbsp;...</p></div>
            </div>
        </a><a href='https://guardian.ng/news/uniben-asuu-rejects-half-salaries/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UNIBEN ASUU rejects half salaries</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSz7sx5pz9g0xcUl2mqu_RXZa4FGHgN77RBGr54WH3pJJgaH7TZGAh9yz2YdeHcRWaBs1rbLCeC" alt="UNIBEN ASUU rejects half salaries" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Members of the Academic Staff Union of Universities (ASUU), University of Benin (UNIBEN) chapter, yesterday, said the Federal Government&#39;s action concerning&nbsp;...</p></div>
            </div>
        </a><a href='https://hausa.legit.ng/news/1504764-mambobin-asuu-sun-yi-zanga-zangan-lumana-a-jigawa-kan-biyansu-rabin-albashi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mambobin ASUU Sun Yi Zanga-Zangan Lumana A Jigawa Kan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCdnQcMTSUnXREddaWSYNq4qA3iA9VZHAZzfN0MG9Ig7p3s3CsEiXhWHBFTYYWqKKG0DMufXYL" alt="Mambobin ASUU Sun Yi Zanga-Zangan Lumana A Jigawa Kan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kungiyar malaman jami&#39;o&#39;i, ASUU, na Jami&#39;ar Tarayya da ke Jigawa ta yi zanga-zangan lumana don nuna fushinta kan zabtare albashin mambobinta da gwamnati ta&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}