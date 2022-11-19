import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spain</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spain"/>
        <meta name="description" content="Trending News about Spain" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spain</h1>
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1118%2Fr1092795_1296x729_16%2D9.jpg" alt="Spain"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/fifa-world-cup/story/4805677/alejandro-balde-replaces-jose-gaya-in-spain-world-cup-squad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alejandro Balde replaces Jose Gaya in Spain World Cup squad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWD5P4HeILQgtB-aujAGO74Hv-ot8O7CncFJSYfKX_a1KKeThvMKy4BWvXOxb6YFM2vD6ARogK" alt="Alejandro Balde replaces Jose Gaya in Spain World Cup squad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona youngster Alejandro Balde has been called up to Spain&#39;s World Cup squad to take the place of the injured Jose Luis Gaya.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-spain-jose-gaya-out-of-world-cup-injury-qatar-wc-news-football/article66153832.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup: Injured Gaya out of Spain squad; Balde announced ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqlf-E-A3ZKRV4vPQvE7i8aWOIpkl1QQCRTlEwIqSpgG-6B2M6BTob0teFiNFudvY_3tjKKrzx" alt="FIFA World Cup: Injured Gaya out of Spain squad; Balde announced ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain&#39;s Jose Gaya has been ruled out of the World Cup with an injury, The Royal Spanish Football Federation confirmed on Friday.</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/spain-defender-gaya-out-world-cup-with-injury-balde-called-up-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain defender Gaya out of World Cup with injury, Balde called up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCsamr2eevg9uH7mGiCuKStSfrTdipOk7UAPvmWzqMG7aR8gsKugdtXGqSRrUk5Lt3lI4ymbtD" alt="Spain defender Gaya out of World Cup with injury, Balde called up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain left back Jose Gaya has withdrawn from their squad for the World Cup in Qatar after suffering an ankle injury in training, the team announced on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/soccer/2022/11/18/spain-calls-up-balde-to-replace-injured-gay-for-world-cup/50949653/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain calls up Balde to replace injured Gayà for World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW0LFWSFNSv6GIcoaqV1cjGMhXgB_H4kPzVoim96RmYsB2axCU63snnwuC7CO3hpjfYiC9L_Co" alt="Spain calls up Balde to replace injured Gayà for World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain has called up Barcelona defender Alejandro Balde to replace injured left back José Gayà less than a week before...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/fifa-world-cup-2022/spain-replace-injured-lef-back-jose-gaya-with-barcas-alejandro-balde-for-world-cup-3533593'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain Replace Injured Left-Back Jose Gaya With Barca&#39;s Alejandro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBgdxTD7ZHgxtOkJeIuJOYYb8vQZaYJj44aVZjOwYXdkzt6mmFaFYEQdfja8C2Qv5vrViwnRQh" alt="Spain Replace Injured Left-Back Jose Gaya With Barca&#39;s Alejandro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nineteen-year-old Barcelona full-back Balde has burst into the limelight this season at Camp Nou with impressive performances on both the left and the right&nbsp;...</p></div>
            </div>
        </a><a href='https://www.beinsports.com/au/2022-fifa-world-cup/video/spain-calls-up-uncapped-barca-teenager-balde/1989102'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain calls up uncapped Barca teenager Balde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmQlsF0YGwhutk3ZtLyK31A8Dna7utULOUbflSJJNPtNmijZI-5uJRCY3ax36_GPqe1VKvbmxv" alt="Spain calls up uncapped Barca teenager Balde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alejandro Balde has enjoyed a breakthrough season for Barcelona and could now make his first appearance at a major international tournament.</p></div>
            </div>
        </a><a href='https://www.planetsport.com/soccer/news/spain-left-back-jose-luis-gaya-withdraws-world-cup-squad-due-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain left-back Jose Luis Gaya withdraws from World Cup squad ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0JZDtLUaNwWMq4tMuZjttCg0AzcLzKgF7tn_A5DdhQDPKjj5v8zYFr2IwKfoiCZWyIy1whhJP" alt="Spain left-back Jose Luis Gaya withdraws from World Cup squad ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain have suffered a blow ahead of the World Cup with the withdrawal of Valencia captain and left-back Jose Luis Gaya due to injury.</p></div>
            </div>
        </a>
        </Template></>;
}