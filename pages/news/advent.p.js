import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Advent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Advent"/>
        <meta name="description" content="Trending News about Advent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Advent</h1>
            <Image width={800} height={500} src="https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20221122091124_8bd2001e42f5defeeeda0d9af5d8bac311b33934028ca3f31565a759b0504f92.jpg" alt="Advent"/>
            <h3>Recent News</h3>
            <a href='https://www.ncregister.com/commentaries/a-particularly-eucharistic-advent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Particularly Eucharistic Advent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmxHu_Y0ZM6l2_-6c0laY379fleDhewQLKVOTlO0RjjFSYDFndKVLOe4gsojiL0oHfeYubB1tw" alt="A Particularly Eucharistic Advent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COMMENTARY: Both Advent and the Holy Eucharist are about not just our desires but God&#39;s much greater desire.</p></div>
            </div>
        </a><a href='https://www.vaticannews.va/en/pope/news/2022-11/pope-may-advent-awaken-us-to-god-s-presence-in-our-daily-lives.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope: May Advent awaken us to God&#39;s presence in our daily lives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiBvAP2A5VfFTiOR1Y-c6Tarwz62udFCP2ahUNKJfZTpGsck51-PzGKPt0ZTD3rO_aXpxQCeeg" alt="Pope: May Advent awaken us to God&#39;s presence in our daily lives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the first Sunday of Advent, Pope Francis calls on us to “awaken from our slumber” and to always be aware of the presence of God and to welcome Him ...</p></div>
            </div>
        </a><a href='https://catholicreview.org/ready-or-not-its-advent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ready or not, it&#39;s Advent - Catholic Review</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTDmJQJ2FqN3QnUczndIxy3T5regKdfkSxKlRAlRVRBVYepOhWTqNpcUWTPIh7CURfZD0H9ADn" alt="Ready or not, it&#39;s Advent - Catholic Review" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maybe you don&#39;t remember where you put the Advent wreath—or if you even own one. Maybe your candles are lost or stubs or melted from being in the attic.</p></div>
            </div>
        </a><a href='https://www.sandiegouniontribune.com/news/religion/story/2022-11-27/for-christians-of-all-persuasions-advent-is-a-season-of-preparation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>For Christians of all persuasions, Advent is a season of preparation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfQ4RSXwK2KQ_zCeozab78Mg4__6OivVBAu1MBccOhkEtZSBxqm2_RKx1uy6V_YGYnMnE813mG" alt="For Christians of all persuasions, Advent is a season of preparation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cute little boy lights a row of candles for the Advent season, a time of remembrance and reflection on the coming birth of Jesus Christ and the Christmas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.exaudi.org/pope-francis-happy-advent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope Francis: &quot;Happy Advent&quot; – Exaudi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZuG_gNiAS5COy1ZKRjc5Udw4uNMPhHTY3F3_BCg-Lj2-5y8Xkav_zLGvbJyW_VnsncNFpU3kQ" alt="Pope Francis: &quot;Happy Advent&quot; – Exaudi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In his words after the Angelus prayer this Sunday, 27 November 2022, the Pope expressed his closeness to the peoples of Palestine and Israel.</p></div>
            </div>
        </a><a href='https://www.catholicworldreport.com/2022/11/27/living-advent-in-an-age-of-functional-paganism/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Living Advent in an age of functional paganism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4pD9mzbPwPc9mDftqNflrSbpXh7qEmTFZzl9y3TxudFho_HGXLemnBcNP5KbxPTJkM8QFkbJa" alt="Living Advent in an age of functional paganism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Our own efforts in the present may not save our republic or our civilization, but I know — as I know my Savior lives — that living as Christians is the only&nbsp;...</p></div>
            </div>
        </a><a href='https://catholicstarherald.org/advent-and-the-need-for-humanity-humility/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Advent and the need for humanity, humility - Catholic Star Herald</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_KAVWfj26AEViDuQSM28Ol3-WFkTckvfbbqtot-rXYsGT7TPWwE8yye7alrVNrbqnPJOoeonL" alt="Advent and the need for humanity, humility - Catholic Star Herald" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Church this week transitions from the end of the liturgical year – where we focus on both remembrances of the dearly departed and the eschatological&nbsp;...</p></div>
            </div>
        </a><a href='https://relevantradio.com/2022/11/01-make-it-a-great-advent/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Make it a great Advent! - Relevant Radio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAMAnf4SOiXqTonr6N-ugFRw7KUUf90mv_A63PAl14ob7xzZN8IKQzTSGVDrIliFjpaZzo12M_" alt="Make it a great Advent! - Relevant Radio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hi, this is Fr. Rocky with an Advent Inspiration just for you! St. John the Baptist prepared people for the coming of Christ by calling them to conversion and&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.com/christmas-nears-time-reclaim-season-120013045.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Christmas nears, it&#39;s time to &#39;reclaim&#39; the season of Advent, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBtsWXcPYHYMCp6bI84vW6WRn0SAn03aekoan8Ml7L2n1QXpoVUxdcgfnnqrSYM_s0BnpY3nrE" alt="As Christmas nears, it&#39;s time to &#39;reclaim&#39; the season of Advent, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 season of Advent begins on Sunday, November 27, and lasts four weeks until Saturday, December 24. &quot;In the Church worship, Advent is the four-Sunday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cantonrep.com/story/opinion/columns/2022/11/27/charita-goshay-advent-invites-us-accept-the-true-gift-of-christmas/69667528007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Advent invites us to accept the true gift of Christmas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReqox04OCY6BADgZLJZDEuE7M1yb7s8t3qNXt5-llIOjEBOQDHJylNs_bykfGcJBIAbbla71lc" alt="Advent invites us to accept the true gift of Christmas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At times, information feels like a raging river that threatens to overwhelm us, creating anxiety and leaving us unsettled and frustrated. Advent, the days of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}