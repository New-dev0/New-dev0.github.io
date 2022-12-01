import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Respect for Marriage Act</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Respect for Marriage Act"/>
        <meta name="description" content="Trending News about Respect for Marriage Act" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Respect for Marriage Act</h1>
            <Image width={800} height={500} src="" alt="Respect for Marriage Act"/>
            <h3>Recent News</h3>
            <a href='https://www.booker.senate.gov/news/press/booker-applauds-passage-of-respect-for-marriage-act'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Booker Applauds Passage of Respect for Marriage Act | U.S. ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Booker Applauds Passage of Respect for Marriage Act | U.S. ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WASHINGTON, D.C. – Today, U.S. Senator Cory Booker (D-N.J.) issued the following statement celebrating the Senate passage of the Respect for Marriage Act:.</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/11/29/statement-from-president-joe-biden-on-bipartisan-senate-passage-of-the-respect-for-marriage-act/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement from President Joe Biden on Bipartisan Senate Passage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Statement from President Joe Biden on Bipartisan Senate Passage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With today&#39;s bipartisan Senate passage of the Respect for Marriage Act, the United States is on the brink of reaffirming a fundamental truth: love is.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/nation/2022/11/30/lgbtq-reaction-same-sex-marriage-bill/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Is it perfect? No&#39;: LGBTQ people respond to Respect for Marriage Act</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-Uh2zAwTVbeGLKC1fBalAtVTaX3r66eCk6suwcGMWcO1vg8rNbFqrb-rA6bi4wdvNcYwuts4l" alt="&#39;Is it perfect? No&#39;: LGBTQ people respond to Respect for Marriage Act" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reactions to the Senate&#39;s passage of the bill among LGBTQ advocates toggled between a sense of relief and dismayed resignation.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/29/politics/respect-for-marriage-act-what-matters/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The fine print of the Respect for Marriage Act</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOup_oDp2c3kURTYd70XnhArqmpnZ5ZG1NW6Cqi-GSAzudRswV1gJGORm_tdzEz1IT9c84cYQP" alt="The fine print of the Respect for Marriage Act" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Republicans and Democrats are coming together to protect same-sex marriage from the Supreme Court through the Respect for Marriage Act. But there is a fair&nbsp;...</p></div>
            </div>
        </a><a href='https://pingree.house.gov/news/documentsingle.aspx?DocumentID=4388'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pingree Urges Swift Approval of Respect for Marriage Act in House</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWla9DQ0ohSV8Z5-x54-c8rlUGIhSMdOPq9qInd-Bbn8_HN8ySAP7eMOQVRiM99wXyRfvq-R1h" alt="Pingree Urges Swift Approval of Respect for Marriage Act in House" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following Senate passage of bipartisan legislation to protect same-sex and interracial marriages, Congresswoman Chellie Pingree (D-Maine) called on House&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heritage.org/marriage-and-family/commentary/radical-respect-marriage-act-could-spell-end-religious-tax'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Radical “Respect for Marriage Act” Could Spell End of Religious Tax ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlcXnxBNQ_SuoJB4FLqHSFN1Ynt0HRKhG-NIxXE8oVwQ6FVNs0XIb0m8fFCiEcVVDQwcE38iF4Ew" alt="Radical “Respect for Marriage Act” Could Spell End of Religious Tax ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emma is a research associate in the Richard and Helen DeVos Center for Life, Religion, and Family at The Heritage Foundation.</p></div>
            </div>
        </a>
        </Template></>;
}