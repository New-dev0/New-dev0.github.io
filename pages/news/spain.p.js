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
            <Image width={800} height={500} src="https://www.just-drinks.com/wp-content/uploads/sites/29/2022/10/shutterstock_703272178-scaled-1038x778.jpg" alt="Spain"/>
            <h3>Recent News</h3>
            <a href='https://www.just-drinks.com/news/pepsico-to-hold-staff-talks-over-spain-review/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PepsiCo &#39;to hold staff talks over Spain review&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP4QE7kQy2HfO8kcZszAceSE6pe8FRWsOSRhjcpDjJcXLl5KFgJJ-qozi5l1g-4wc7xSgcwbbW" alt="PepsiCo &#39;to hold staff talks over Spain review&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Local media reports say Spanish trade union CCOO has told employees the review could lead to up to 550 jobs being lost across the business. The manufacturing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/soccer/spain-calls-up-balde-to-replace-injured-gaya-for-world-cup/2022/11/18/58c96340-674d-11ed-b08c-3ce222607059_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain calls up Balde to replace injured Gayà for World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpeXjGwkcX0lIDBlY4bNiIW_2tPUuetykhFo3HnMSO0Z9AdgMSGhBEDXDRgMO6NnqhfAuLfoPz" alt="Spain calls up Balde to replace injured Gayà for World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain has called up Barcelona defender Alejandro Balde to replace injured left back José Gayà less than a week before the team&#39;s opening World Cup match&nbsp;...</p></div>
            </div>
        </a><a href='https://supersport.com/football/fifa-world-cup-2022/news/eb67a410-38d1-43a5-a57d-6b0c32a1facb/spain-replace-injured-gaya-with-barca-s-balde-for-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain replace injured Gaya with Barca&#39;s Balde for World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKFD_7huipBadzPUDBOzdxOlB2n0qfzbahO_3uLtJ5GKqKaM3_1p5yKJ-Q9GyPh1bo8WpYjXyU" alt="Spain replace injured Gaya with Barca&#39;s Balde for World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain dropped injured left-back Jose Gaya from their World Cup squad on Friday, with teenager Alejandro Balde replacing him. The Valencia defender sprained&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/spain-defender-gaya-out-world-cup-with-injury-balde-called-up-2022-11-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain defender Gaya out of World Cup with injury, Balde called up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCsamr2eevg9uH7mGiCuKStSfrTdipOk7UAPvmWzqMG7aR8gsKugdtXGqSRrUk5Lt3lI4ymbtD" alt="Spain defender Gaya out of World Cup with injury, Balde called up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain left back Jose Gaya has withdrawn from their squad for the World Cup in Qatar after suffering an ankle injury in training, the team announced on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.planetsport.com/soccer/news/spain-left-back-jose-luis-gaya-withdraws-world-cup-squad-due-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain left-back Jose Luis Gaya withdraws from World Cup squad ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0JZDtLUaNwWMq4tMuZjttCg0AzcLzKgF7tn_A5DdhQDPKjj5v8zYFr2IwKfoiCZWyIy1whhJP" alt="Spain left-back Jose Luis Gaya withdraws from World Cup squad ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gaya sprained his ankle in Spain training on Monday and has been replaced by Barcelona youngster Alejandro Balde, who must be pinching himself at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4805677/alejandro-balde-replaces-jose-gaya-in-spain-world-cup-squad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alejandro Balde replaces Jose Gaya in Spain World Cup squad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWD5P4HeILQgtB-aujAGO74Hv-ot8O7CncFJSYfKX_a1KKeThvMKy4BWvXOxb6YFM2vD6ARogK" alt="Alejandro Balde replaces Jose Gaya in Spain World Cup squad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona youngster Alejandro Balde has been called up to Spain&#39;s World Cup squad to take the place of the injured Jose Luis Gaya.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/spain-world-cup-2022-squad-balde-gaya-injury-b1041011.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain call up uncapped Barcelona star after injury drop-out on eve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCMw7SAqL5fTHdGCbLMKz1Kb1EL0Jtw0xYoxKzWnkeXcwX4uug6gVye0ylcWDfVwspEjdNQuW9" alt="Spain call up uncapped Barcelona star after injury drop-out on eve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona teenager Alejandro Balde has been called up to Spain&#39;s World Cup squad as a late injury replacement.</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/barcelona-balde-spain-worldcup-callup-28527676'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona youngster added to Spain World Cup squad as late ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvWWGxrpDSqqRF3IJCCWz0gStcdscBpZETkH9bWk019nm-aWabF5MNwt9fZB4MZaD8RdbC47CM" alt="Barcelona youngster added to Spain World Cup squad as late ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona defender Alejandro Balde has received a late call-up from Spain ahead of their World Cup opener against Costa Rica after Jose Gaya sprained his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}