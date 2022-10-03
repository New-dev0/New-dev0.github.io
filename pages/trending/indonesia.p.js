import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indonesia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indonesia"/>
        <meta name="description" content="Trending News about Indonesia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indonesia</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Indonesia-1200.jpg" alt="Indonesia"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-sports/what-led-to-the-football-tragedy-in-indonesia-killing-174-people-8185820/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What led to the football tragedy in Indonesia, killing 174 people</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9lL1yCsVvj2oL4bsgEt_cE_TYdpllVYuxs_bbiKaTdSdZLTG9ZHW5d21XGqlQmLZwuo5jTLka" alt="What led to the football tragedy in Indonesia, killing 174 people" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What happened at the stadium in Malang, East Java, which led to such a high number of casualties? What have been some other stadium tragedies, in India and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/explainer-what-s-behind-indonesia-s-deadly-soccer-match-11664699933648.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explainer: What&#39;s behind Indonesia&#39;s deadly soccer match? | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7FLSgsYrruuYmsI7OShT_aJEqklmFWwRT44WnftV-POmprRh-rNY7Vgho05J4-nLDQwu__CFA" alt="Explainer: What&#39;s behind Indonesia&#39;s deadly soccer match? | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Violence and a deadly stampede that erupted following a domestic league soccer match Saturday night marked another tragedy in Indonesian football.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/international/indonesia-football-match-stampede-many-dead-october-2-2022/article65961720.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia football stampede live updates | Death toll rises to 174 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6OeOUgl25pJj1Kux5H2oBtnYQH_li8kpb4NKUUiz0NIDgsxsLHzsX-AdsgcWrMAAE_RR3vq9J" alt="Indonesia football stampede live updates | Death toll rises to 174 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least 125 killed in Indonesia football stadium stampede &middot; Explained | What&#39;s behind Indonesia&#39;s deadly soccer match? &middot; More than 320 injured; police fire tear&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/sports/football/news/more-than-120-killed-several-injured-in-indonesia-stampede-after-football-fans-invade-pitch-cops/articleshow/94592879.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia Football Riots: इंडोनेशिया में &#39;मौत का मैच&#39;, भयंकर बवाल में 174 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtplPpsvBB2EkRm0Ia2-nBqrVoG73TnpcJ_PaR0Mck4EGwJGqR3YhS1NPAXSYR8ZoUbTzm_Cf7" alt="Indonesia Football Riots: इंडोनेशिया में &#39;मौत का मैच&#39;, भयंकर बवाल में 174 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंडोनेशिया के जावा में एक फुटबॉल मैच के बाद हिंसा और भगदड़ में 174 लोगों की मौत की खबर है&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-asia-63105945'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia: At least 125 dead in football stadium crush</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB-dERdDGHVTtCPS8XnWKSLxAYEIxi3_PBe3C7YhNYFH6sVzpd7WbdGm1k6G7Px-JnEJ3aalYX" alt="Indonesia: At least 125 dead in football stadium crush" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Supporters who invaded the pitch are tear-gassed by police, leading to one of the world&#39;s worst stadium disasters.</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/international/at-least-127-killed-in-mass-riots-during-football-match-in-indonesia-122100200056_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>125 die as tear gas triggers crush at Indonesia football match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQs-Zel2xFoR2eU5mXsmpq2pqLW_gdqaUHeRh9vPA7GkAFrfp8s_f3rfZnrEBlSLKhrbrN6sG3K" alt="125 die as tear gas triggers crush at Indonesia football match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Panic and a chaotic run for exits after police fired tear gas at an Indonesian soccer match to drive away fans upset with their team&#39;s loss left at least&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/at-least-125-dead-in-indonesia-football-stadium-stampede/articleshow/94606115.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least 125 dead in Indonesia football stadium stampede</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaeWC9rp2XPQMlsDJK1oZ28ls14QnclqaN0P6UMpScv6Q2Y1JHzN28_NNfEz3vom77mJvBopOg" alt="At least 125 dead in Indonesia football stadium stampede" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tragedy on Saturday night in the city of Malang, which also left 323 injured according to police, was one of the world&#39;s deadliest sporting stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/indonesia-football-riot-situation-worsened-due-to-the-use-of-police-force'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia: पुलिस के बल प्रयोग से और बिगड़ गए हालात, फुटबॉल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPiXaJD90AWS5O5EFVLrdSgg8Z5KUAfmT42BbDThMl1rZIu4pFiKGRIzU7Qyox4M2SEBHaCBVv" alt="Indonesia: पुलिस के बल प्रयोग से और बिगड़ गए हालात, फुटबॉल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फुटबॉल के वैश्विक शासकीय निकाय फीफा ने कहा कि अधिकारियों ने कई नियमों का उल्लंघन भी किया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/indonesia-football-fans-clash-top-worst-riots-in-football-many-fans-killed-2228610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia से पहले इन जगहों पर भी हो चुका है फुटबॉल मैच के दौरान बवाल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQMqoNbTzgAolZimkYx9GhVVFDZb0eO6el1Zdj6gA4WbdfcPdonP_xnYRFrGxT-tC0NBb7z36P" alt="Indonesia से पहले इन जगहों पर भी हो चुका है फुटबॉल मैच के दौरान बवाल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Football Riots: इंडोनेशिया में एक फुटबॉल मैच के बाद हुए दंगे में अब तक 150 से ज्यादा लोगों की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/news/story/what-happened-in-indonesia-football-match-tragedy-riot-death-violence-in-sports-tspo-1548197-2022-10-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonesia Football Match Tragedy: भारत-पाकिस्तान की तरह हुआ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSauxTcOCTIHN8_TSXOYVkyA6RI5QgQZyCvjhnKraBuOIeSwZSS7MWO0NENfQ9cucg3kr-pMpPG" alt="Indonesia Football Match Tragedy: भारत-पाकिस्तान की तरह हुआ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंडोनेशिया में ईस्ट जावा के केपंजेन शहर में यह दर्दनाक हादसा हुआ, जहां घरेलू फुटबॉल&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}