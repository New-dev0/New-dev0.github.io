import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar"/>
        <meta name="description" content="Trending News about Qatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/18/gettyimages-452125040_wide-c58b069d81ad3ba9f88941067f79dfbb52210a1e-s1400-c100.jpg" alt="Qatar"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/19/1137783957/world-cup-qatar-fan-restrictions-alcohol'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here are things World Cup fans are restricted from doing in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRda9HuufLCxNEUcmBdIn50Lyr4BojT_HGD9TKWp6g1M866I2JvCNQntuxiguTgSZONDajvq1aW" alt="Here are things World Cup fans are restricted from doing in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A FIFA boss once said, &quot;Alcoholic drinks are part of the FIFA World Cup.&quot; But that was then. A beer ban in stadiums is just one of the changes fans face in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/19/1137962269/fifa-president-gianni-infantino-qatar-world-cup-hypocrisy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA chief blasts critics ahead of World Cup in Qatar and accuses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmqxaWJ_fQ0EZ9gLOQoZeCtLT9W-zo25xS380VD-zR2U7v7AEm3Y7UDuNlHb0Abt1DqVBFyfJn" alt="FIFA chief blasts critics ahead of World Cup in Qatar and accuses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In an extraordinary opening news conference before the World Cup, FIFA President Gianni Infantino defended the host country&#39;s decision to ban beer at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/world/2022/11/19/qatar-world-cup-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>For Qatar, the World Cup is a high-stakes test and a show of clout</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyl-X0vVTb4VnvxkHgdrooQgr1sOZP3LoNczifAP04i7twdy73nGclju-eXkpbvqe-mjYe_dVk" alt="For Qatar, the World Cup is a high-stakes test and a show of clout" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For all Qatar&#39;s progress, the country will be tested over the next month as it hosts the World Cup, inviting a rare degree of scrutiny and criticism.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4806837/pitfalls-in-fifa-presidents-speech-before-qatar-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pitfalls in FIFA President&#39;s speech before Qatar World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT-psfVaSa13D0nq8Zakwndc9qzcfASMDYGglpufk6TLZiB9pBErZFqkOeVo9D1mSohxqbU_jF" alt="Pitfalls in FIFA President&#39;s speech before Qatar World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Infantino&#39;s monologue touched on the criticisms and issues related to the 2022 Qatar World Cup, but felt tone deaf and detached.</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/2022/11/19/qatar-world-cup-2022-beer-stadium-ban-fifa-gianni-infantino'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar&#39;s World Cup Stadium Beer Ban Is About So Much More</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSjYJbAYp13uYwAmfSxb9Qp1NQGouyucaQVLadmQoqpmke3u1xL-_KcjA878P2W5cQaKOT2vEF" alt="Qatar&#39;s World Cup Stadium Beer Ban Is About So Much More" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Power. Hypocrisy. Control. You name it. The World Cup U-turn sends a message on the eve of the competition, and FIFA is content to do the host nation&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/qatar-bans-alcoholic-beer-in-and-around-world-cup-stadiums-114232288.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Qatar bans alcoholic beer in and around World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQfp9IR-N-SbVNYLXBtCdumae10Hw6wNR5GzDdGXBqszKRy6iBYWeadiev7B01JZBnAqhD851XJ" alt="World Cup 2022: Qatar bans alcoholic beer in and around World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ban means that the compromise of selling beer outside of stadiums but not in them is no more.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/19/football/qatar-world-cup-2022-lgbtq-rights-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;It&#39;s not safe and it&#39;s not right.&#39; Qatar says all are welcome to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1Q4JOnfQHhpP-gbSYXBlLCwko3xVykbnGjhPltROTv9w0VGvt07BxQFSm3jtPFEkyvN1hfwMH" alt="&#39;It&#39;s not safe and it&#39;s not right.&#39; Qatar says all are welcome to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visitors gather at the FIFA World Cup countdown clock in Doha on October 30, 2022. Jewel Samad/AFP/Getty Images. As the first World Cup to be held in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/19/sports/soccer/world-cup-gianni-infantino-fifa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On Eve of World Cup, FIFA President Gianni Infantino Defends Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLzayaSBGPoMke7MAZm4vn49lrAy52acOsNIvkmz2cVz625w3V1oQmmaow1a6cTEInmkrIq0iG" alt="On Eve of World Cup, FIFA President Gianni Infantino Defends Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gianni Infantino defended the host country&#39;s decision to ban the sale of beer at stadiums and fired back at the “hypocrisy” of Western criticisms.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/19/football/gianni-infantino-speech-reaction-qatar-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Crass&#39; and an &#39;insult&#39;. FIFA president criticized for speech on Qatar&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDMjeWj7nyxPb7ZTI40YvhNZJVxcfYiRW1NnYmw3k0x1rUZJ6r4i5BsApMpn-9WtmrAn5ge5-p" alt="&#39;Crass&#39; and an &#39;insult&#39;. FIFA president criticized for speech on Qatar&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA President Gianni Infantino&#39;s near hour-long speech on the eve of the 2022 World Cup in Qatar has been described as &quot;crass&quot; and an &quot;insult&quot; to migrant&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/18/1137204271/qatar-world-cup-controversies'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Qatar is a controversial host for the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_DP3rujLAp-owEaZvRmWQ6_f0djNwUiBJ3-kPTIRUHtX_Aed7cJfKQRTMenDouSYwUATH4BtZ" alt="Why Qatar is a controversial host for the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA&#39;s choice of Qatar to host the World Cup has long been marred by criticism over human rights abuses, the safety of migrant workers and the logistics of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}