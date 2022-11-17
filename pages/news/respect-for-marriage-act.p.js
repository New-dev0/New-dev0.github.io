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
            <Image width={800} height={500} src="https://19thnews.org/wp-content/uploads/2022/11/marriage-act.jpg" alt="Respect for Marriage Act"/>
            <h3>Recent News</h3>
            <a href='https://www.blunt.senate.gov/news/press-releases/blunt-backs-respect-for-marriage-act-with-religious-liberty-amendment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blunt Backs Respect for Marriage Act with Religious Liberty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Blunt Backs Respect for Marriage Act with Religious Liberty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WASHINGTON – U.S. Senator Roy Blunt (Mo.) released the following statement today on the bipartisan religious liberty amendment to the Respect for Marriage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.toomey.senate.gov/newsroom/press-releases/toomey-respect-for-marriage-act-significantly-threatens-religious-liberty'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Toomey: Respect for Marriage Act Significantly Threatens Religious ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Toomey: Respect for Marriage Act Significantly Threatens Religious ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“For over 25 years, I have supported efforts to end discrimination on the basis of sexual orientation. The Supreme Court has recognized a right to same-sex&nbsp;...</p></div>
            </div>
        </a><a href='https://19thnews.org/2022/11/respect-for-marriage-act-equality-senate/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senate advances Respect for Marriage Act to protect recognition of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQF2kNe-9n6QqEyP7vIqxCU2kG7lJy2g_fK5NENaU_BOBI9QC3P3HsAX4mggTN-O9XmYeYoJm3N" alt="Senate advances Respect for Marriage Act to protect recognition of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The measure forces states to recognize same-sex marriages that take place in any other state and repeals the Defense of Marriage Act.</p></div>
            </div>
        </a><a href='https://www.hrc.org/press-releases/u-s-senate-invokes-cloture-for-bipartisan-respect-for-marriage-act-62-37-with-every-democrat-and-12-republican-votes-vote-moves-to-senate-floor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U.S. Senate Invokes Cloture for Bipartisan Respect for Marriage Act ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDGDu5g_7d6To5VlZTYfNAjz0c2gSY9KLsEmui6lpcP2vvyyYbMyTc9WnIdx82rzSH22hgT0HI" alt="U.S. Senate Invokes Cloture for Bipartisan Respect for Marriage Act ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bipartisan Vote to Invoke Cloture Overcomes Key Legislative Hurdle For The Respect For Marriage Act – And Makes It Clear that the Debate Over Marriage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/news/respect-for-marriage-act-senate-vote-same-sex-marriage-bill/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senate advances Respect for Marriage Act in bipartisan 62-37 vote</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwfn0XCVJp4Pl-QL4-JkANm3MhPYSInrKSO1jmrUvjdL7f9gbehsXdEnxifCOmBAAm-p0FydLl" alt="Senate advances Respect for Marriage Act in bipartisan 62-37 vote" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The bill would enshrine protections for same-sex and interracial marriages into federal law.</p></div>
            </div>
        </a><a href='https://www.rollingstone.com/politics/politics-news/respect-for-marriage-act-passes-senate-1234631989/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senate Passes Bill to Protect Same-Sex Marriage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZMJBFrUNwdkUVv-vZNigeacLOQwhG99BxogP8hkWMqohyDEtm182SHOBUMmbijm77LX8RmM5N" alt="Senate Passes Bill to Protect Same-Sex Marriage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Congress is moving to protect the right after Supreme Court Justice Clarence Thomas signaled it could be on the chopping block. By Nikki McCann Ramirez&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}