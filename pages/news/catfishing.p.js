import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Catfishing</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Catfishing"/>
        <meta name="description" content="Trending News about Catfishing" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Catfishing</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/04/28/USAT/72e55242-88b2-489e-a3d0-2d8d347eeec2-ILMD_vertical_notitle1e.jpg?auto=webp&crop=1999,1124,x0,y686&format=pjpg&width=1200" alt="Catfishing"/>
            <h3>Recent News</h3>
            <a href='https://www.usatoday.com/story/news/nation/2022/11/29/what-is-catfishing-why-do-people-catfish/10794619002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why do people catfish? What are the signs of it? Here&#39;s what you ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQOajsmFuICydemNbEkXc-bbMlq34vWaLLY-QNXhE4M5bCtQ-JVnc7IRLi1GF7ZHKMsXxsZapo" alt="Why do people catfish? What are the signs of it? Here&#39;s what you ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catfishing is a deceptive activity where someone creates a fake identity on social media to target a victim. Here&#39;s how to spot a con.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/29/us/austin-edwards-riverside-catfishing-murders-what-we-know/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The man accused of killing a teen&#39;s family after &#39;catfishing&#39; her was ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTflcI5cX67Hqnmy7UtHfDeoexnK6Tw-QZ6ebRxgJEacsbAFViwxYDp6qj7kOUWVy-QgUenXo6u" alt="The man accused of killing a teen&#39;s family after &#39;catfishing&#39; her was ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roughly 10 days after a former Virginia state trooper was hired by a sheriff&#39;s office in that state, he traveled to Southern California and allegedly killed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/29/riverside-police-15-year-old-not-complicit-catfish-murder/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cops Don&#39;t Believe 15-Year-Old Girl Was Complicit in &#39;Catfish&#39; Triple ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDiXB5DY70vrMwADD37HbxWZZClw5uVz9XHgkewyA82sOoTIFgLjyDlNlMf2VBhS9oCV_ogua2" alt="Cops Don&#39;t Believe 15-Year-Old Girl Was Complicit in &#39;Catfish&#39; Triple ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cops investigating the murder of a 15-year-old girl&#39;s grandparents and mother don&#39;t believe the teen was complicit in their killings in a stunning&nbsp;...</p></div>
            </div>
        </a><a href='https://ktla.com/news/local-news/kidnapper-killer-in-riverside-triple-slaying-passed-all-background-checks-tests-for-law-enforcement-jobs-in-virginia-sheriff-says/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Killer in California triple murder, &#39;catfishing&#39; case passed background ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXPXl37JeAMPcA7IcQyvApeJh3tSV3KffSrxpoAZ1Scy8dEz6Loh6b4MLl-vTJBVZyoebWUUYy" alt="Killer in California triple murder, &#39;catfishing&#39; case passed background ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The police officer accused of killing three people and kidnapping a girl in Riverside on Friday passed a background check and psychological testing before&nbsp;...</p></div>
            </div>
        </a><a href='https://nbcpalmsprings.com/2022/11/28/catfishing-led-to-riverside-triple-homicide-ways-to-detect-and-prevent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Catfishing” Led to Riverside Triple Homicide, Ways to Detect and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR28re_8_vwAP2_3OrgNGhWmJUd4vsytW58Moi1O01kExD_LM3_CW3Oezff9H_c-UZcgExeDtrB" alt="“Catfishing” Led to Riverside Triple Homicide, Ways to Detect and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catfishing is when someone pretends to be somebody else, either for the purpose of a financial scam or to gain someone&#39;s trust.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/losangeles/news/what-is-catfishing-and-why-is-it-dangerous/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is &quot;catfishing&quot; and why is it dangerous?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsJw4_tHunKlvPf83dCXIzPcZx7lL8pqPFb2xMkslZ6uZgegYo9YNLFaptRS3yUeX2CcWlz2_O" alt="What is &quot;catfishing&quot; and why is it dangerous?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Advocates are calling on residents to stay vigilant online after police revealed that &quot;catfishing&quot; played a major factor in a triple homicide in Riverside.</p></div>
            </div>
        </a><a href='https://www.foxla.com/news/catfishing-social-media-online-dating-apps-dangers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is catfishing? Safety tips for parents</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJvtxQmiMf0B7p2j4vl5yyQ6YGaRFGp4w9Z5fEd8fK6HSiyTNi9Tmzsic3shvd2cSakFF0MmFa" alt="What is catfishing? Safety tips for parents" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A teenage girl in California was “catfished” by a man who then murdered her mother and grandparents, police said. Now authorities are warning parents to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.weau.com/2022/11/28/man-accused-catfishing-teen-before-killing-her-family-police-say/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man accused of &#39;catfishing&#39; teen before killing her family, police say</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnXGBe1L2AqRjjlOQhLD7kYAYBcgkOJNDsxBceaYh9EVJvxzR0xu0F4vYbbkiYavRwbifuCP6Z" alt="Man accused of &#39;catfishing&#39; teen before killing her family, police say" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RIVERSIDE, Calif. (Gray News) - Police in California say a triple homicide suspect “catfished” a teenager, traveled across the country to her home and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/california/story/2022-11-29/catfishing-a-girl-an-abduction-plot-and-a-thanskgiving-horror-for-riverside-family'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Riverside&#39;s Black Friday horror: a catfished teen, three killings and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKDnBJJ7vTclaPam1JNwCsPzsE-yLEaAW1jCK4MrAQKqhcAfGzK3Tb1PeACMxMOzY8yolOVSgo" alt="Riverside&#39;s Black Friday horror: a catfished teen, three killings and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Police say a cop from Virginia went on a horrific rampage Friday in Riverside, catfishing a teen girl, then killing her mother and grandparents.</p></div>
            </div>
        </a><a href='https://www.newsnationnow.com/crime/former-trooper-killed-catfishing-teen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former trooper killed after catfishing and kidnapping teen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcfnS1ArhCgEDdiOHF_sFzeogayjjW7XIBR5MFGeJwfpqAIcqHkiUMrt8qW6DpxMKsTxr3OD1f" alt="Former trooper killed after catfishing and kidnapping teen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A former Virginia state trooper was killed by police after he kidnapped a teen girl and killed her family.</p></div>
            </div>
        </a>
        </Template></>;
}