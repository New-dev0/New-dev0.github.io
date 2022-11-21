import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Loadshedding</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Loadshedding"/>
        <meta name="description" content="Trending News about Loadshedding" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Loadshedding</h1>
            <Image width={800} height={500} src="" alt="Loadshedding"/>
            <h3>Recent News</h3>
            <a href='https://www.iol.co.za/capeargus/news/eskom-announces-loadshedding-stages-4-and-5-this-week-city-of-cape-town-unable-to-spare-residents-83680938-2a47-4f58-a45f-ee1d51393fc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom announces loadshedding stages 4 and 5 this week, City of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAHLLNu9FtSYdQ9lqN6CpJXU0XBxjngOzSpiyfMqddjXilW0ulvvhc1q7VJya2fnQ7Jn9qpMJ-" alt="Eskom announces loadshedding stages 4 and 5 this week, City of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Less than five hours since it announced the suspension of load shedding, electricity service provider Eskom has once again announced that it will implement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sapeople.com/2022/11/20/south-africans-to-endure-stage-5-loadshedding-this-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Africans to Endure Stage 5 Loadshedding This Week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIY3sQEgcKO17plGDLuHlEs_M5nZ4VfjpOQHEEOkU7pgUNNbt4UDxWG9Vjxm7ypdtQx9NNEdX2" alt="South Africans to Endure Stage 5 Loadshedding This Week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unit 1 of Koeberg Nuclear Power Station will continue to generate at a reduced output over the next three weeks as the fuel is depleted ahead of the refuelling&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sowetanlive.co.za/news/south-africa/2022-11-20-stage-4-loadshedding-to-be-implemented-at-5pm-with-varying-stages-during-the-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stage 4 loadshedding to be implemented at 5pm with varying stages ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuGAxCs92DhjMU3y3U2TypSH9npoAZQPPCEcKLFtklU7aNFXrl9nXoGqA6l_D4tcM-wTZFJrxS" alt="Stage 4 loadshedding to be implemented at 5pm with varying stages ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a few hours&#39; relief from blackouts Eskom has announced that stage 4 load-shedding will be implemented from 5pm on Sunday until 4pm on Monday.</p></div>
            </div>
        </a><a href='https://www.capetownetc.com/news/like-the-dark-knight-loadshedding-rises-again-to-stage-5/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Like the dark knight, loadshedding rises again... to stage 5</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVEYHIjWWT-lLl7pHbqwuSb0qsvG-qe1pOHhwTzTxjZDK1aXpp_38i1pbm0B7mA76eyhNw7liE" alt="Like the dark knight, loadshedding rises again... to stage 5" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a brief suspension this morning, South Africa will continue to face dark times as stage 4 loadshedding resumes from 5pm this afternoon.</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/20/stage-4-load-shedding-resumes-sunday-afternoon-and-stage-5-from-monday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stage 4 load shedding resumes Sunday afternoon, and Stage 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNEkNR6NEGQffom1_Gdzm4sl9C8OnD-1PbgSUHzlHnNBPCcxw984SqBFCcXsmG-MMPrrGCkx0G" alt="Stage 4 load shedding resumes Sunday afternoon, and Stage 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stage 4 load shedding will be implemented at 17:00 this afternoon until 16:00 on Monday. Various stages of load shedding will be implemented during the week&nbsp;...</p></div>
            </div>
        </a><a href='https://www.citizen.co.za/news/south-africa/load-shedding/eskom-stage-4-stage-5-loadshedding-20-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom announces stage 4 and 5 loadshedding from Sunday afternoon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVK46iDvghIsFjFV8JZIiGfLVulD4KnoDXo0AI2XH-hJ-Y-Z-nhvyIUAgCvhjrX9-fALLRrkSO" alt="Eskom announces stage 4 and 5 loadshedding from Sunday afternoon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africans might have enjoyed a short reprieve from the rolling blackouts to cook their Sunday lunches, but it will be back to KFC and sarmies this&nbsp;...</p></div>
            </div>
        </a><a href='https://mybroadband.co.za/news/energy/469907-eskom-announces-stage-5-load-shedding-here-is-the-timetable.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom announces stage 5 load-shedding — here is the timetable</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfmsat53AAr-6cSbulWEZuCOvRKpcRH7IZBSggvVSw25MnypSd5-jBF0q4ggFkvgBQKFlBQ6KS" alt="Eskom announces stage 5 load-shedding — here is the timetable" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskom has announced its load-shedding schedule until the end of Wednesday — with up to stage 5 power cuts on the timetable.</p></div>
            </div>
        </a>
        </Template></>;
}