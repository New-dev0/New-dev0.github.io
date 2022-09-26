import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Djokovic"/>
        <meta name="description" content="Trending News about Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Djokovic</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/tzqj3u/article65935280.ece/alternates/LANDSCAPE_615/djokovic.jfif" alt="Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/tennis/auger-aliassime-beats-djokovic-laver-cup-team-world-on-brink-of-win-tennis/article65935289.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Auger-Aliassime beats Djokovic to put Team World on brink of victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStJ8nSmLTllgh3W1ey1bCPjaNLeppbDX4CqQ-k5Fbx6MTET_HMvyg4zVYUsALX3TbU66KecM5I" alt="Auger-Aliassime beats Djokovic to put Team World on brink of victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Canada&#39;s Felix Auger-Aliassime stunned Novak Djokovic 6-3 7-6(3) to put Team World within sight of their first-ever victory over Team Europe in the Laver&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/tennis/auger-aliassime-beats-djokovic-team-world-leads-laver-cup-8172687/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Felix Auger-Aliassime defeats Novak Djokovic; Team World leads ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVOxAmiKle3U5vUNIXXM72Q1b0T5kmsQb0zmI9S_s8-Rfx5ipCRqQI0WlTkJIuAGiyMwwlNiK_" alt="Felix Auger-Aliassime defeats Novak Djokovic; Team World leads ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team Europe came into the week at the O2 Arena having won all four previous editions of the Laver Cup, which was founded by Roger Federer&#39;s management&nbsp;...</p></div>
            </div>
        </a><a href='https://scroll.in/field/1033637/laver-cup-auger-aliassime-defeats-djokovic-tiafoe-downs-tsitsipas-as-team-world-win-first-title'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laver Cup: Auger-Aliassime defeats Djokovic, Tiafoe downs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_mbqjLXl9BjTYW8xKUW6AxOyze3FklXVS67ZYLmUt2FkX82eQDrtB77Qr27aXfXHhILXV7DWV" alt="Laver Cup: Auger-Aliassime defeats Djokovic, Tiafoe downs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team World won 13-8 with a match to spare, sealing their first triumph in the competition after Team Europe won the previous four editions.</p></div>
            </div>
        </a><a href='https://theshillongtimes.com/2022/09/26/djokovic-defeats-tiafoe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic defeats Tiafoe - The Shillong Times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIsF_pCJbFBVFIjfGJuqMvOIoPop9E3sKGrUyQ_ITj9Av_MqpKBwVJtpaRD7ftJ_YPClJCpXfP" alt="Djokovic defeats Tiafoe - The Shillong Times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team Europe&#39;s Novak Djokovic, returns a ball to Team World&#39;s Frances Tiafoe during a match on second day of the Laver Cup tennis tournament at the O2 in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atptour.com/en/news/laver-cup-2022-saturday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Returning Novak Djokovic Does Double Duty At Laver Cup | ATP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-KC58r94LJAQEje42Cunp1ykFc5M7c_CH1M7TiMeKDLlBtkhrWSZDxV5YxPt9wAx3vO_6PMZh" alt="Returning Novak Djokovic Does Double Duty At Laver Cup | ATP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic wins a singles match against Frances Tiafoe and a doubles match alongside Matteo Berrettini on Saturday in London.</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/returning-novak-djokovic-wins-twice-at-laver-cup-gives-team-europe-8-4-lead/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Returning Novak Djokovic wins twice at Laver Cup, gives Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ1NkC_Am1ku57GKQ_xRgH1LhwR8VWIYmoPRRycwphH3c9aBnV4Bj7cBtgNPd22Ibzw6wz4n5r" alt="Returning Novak Djokovic wins twice at Laver Cup, gives Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>London: Novak Djokovic made a winning return at the Laver Cup, dispatching Frances Tiafoe 6-1, 6-3 and then partnering Matteo Berrettini past Alex de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}