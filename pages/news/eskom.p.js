import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eskom</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eskom"/>
        <meta name="description" content="Trending News about Eskom" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eskom</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/4493/4c75489ea1ff4bf68476a0edf5d8ccdd.jpg" alt="Eskom"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/fin24/economy/mantashe-eskom-agitates-for-overthrow-of-the-state-by-not-dealing-with-load-shedding-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mantashe: Eskom agitates for &#39;overthrow of the state&#39; by not dealing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlTAX6m7bWJFmFaFYcXS_coc3yYgA4LM7Br-qc2v3_dYvMit_Qo6ddM1Qsx3vJi6XZ6HQeqdUQ" alt="Mantashe: Eskom agitates for &#39;overthrow of the state&#39; by not dealing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mineral Resources and Energy Minister Gwede Mantashe said load shedding is becoming worse than state capture because of how it is directly affecting&nbsp;...</p></div>
            </div>
        </a><a href='https://www.engineeringnews.co.za/article/eskoms-desperate-scramble-to-avoid-stage-7-2022-12-08'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom&#39;s desperate scramble to avoid Stage 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlqVOPWpv5jTzs4MqotrZ3E8l_R9Bqf55Aino8VqszG7Kw6EXwHP4Dz58TiH6EuQ67wUdGMT-p" alt="Eskom&#39;s desperate scramble to avoid Stage 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskom on Wednesday evening called off the planned outage of Koeberg unit 1 at the eleventh hour as the utility scrambled to avoid moving to Stage 7&nbsp;...</p></div>
            </div>
        </a><a href='https://businesstech.co.za/news/energy/650023/eskom-holds-off-shutting-down-koeberg-but-not-for-long/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom holds off shutting down Koeberg – but not for long</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrS3wfueAGBdHcwgDOqySaEC6pDMg5yZXSagKPYzxvjbYruWS5NOuC7mKn53lhlnZAUWhvPU6h" alt="Eskom holds off shutting down Koeberg – but not for long" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Power utility Eskom said that it has delayed its plan to take unit 1 of the Koeberg Nuclear Power Station offline to later on Thursday.</p></div>
            </div>
        </a><a href='https://www.news24.com/fin24/economy/worst-nightmare-eskoms-desperate-scramble-to-avoid-stage-7-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Worst nightmare&#39;: Eskom&#39;s desperate scramble to avoid Stage 7</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAWdUsh1_9i7KiOeppS3A2FwTnqaA4Y3TiHqhA0uT1Y7UcJdfDPwypPVz1xhkxDwzcVMnJvoye" alt="&#39;Worst nightmare&#39;: Eskom&#39;s desperate scramble to avoid Stage 7" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskom on Wednesday evening called off the planned outage of Koeberg unit 1 at the eleventh hour as the utility scrambled to avoid moving to Stage 7 load&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneyweb.co.za/news/south-africa/pravin-gordhan-urges-eskom-to-take-sa-out-of-stage-6/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gordhan urges Eskom to immediately ease load shedding</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuYw_dg1-AqcRao1I6kakMV6tDewsqrTnOVF9nqiz1yE4RHSX1Scr43abXfxIutRrigEaFrox3" alt="Gordhan urges Eskom to immediately ease load shedding" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minister of Public Enterprises Pravin Gordhan on Thursday urged Eskom&#39;s management and board to get the country out of Stage 6 load shedding with immediate&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymaverick.co.za/article/2022-12-08-mantashe-slams-eskom-as-1759mw-of-renewables-signed-up/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gwede Mantashe has harsh words for Eskom as additional 1759MW ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJtPnDWzEl8hZKCV2nJHCdkSjO_STDPZfLTJE2df0RcVMNNiy6q2pLd92HPeT98PDire2Pzbhd" alt="Gwede Mantashe has harsh words for Eskom as additional 1759MW ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskom, by not attending to load shedding, is agitating for the overthrow of the state,&#39; Mineral Resources and Energy Minister Gwede Mantashe said as his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/south-africa/kwazulu-natal/eskom-delays-switching-off-koeberg-unit-1-to-allow-power-grid-to-stabilise-5f529eec-0bd3-4d36-9771-0441cf1ea3d2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom delays switching off Koeberg Unit 1 to allow power grid to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCkPlQzKbRQ9RmqNGHFXuqdaUOy6S8M5NyE0unVhvFUT-9iUHz6scO9ThQQziu96HiuqSo5gwy" alt="Eskom delays switching off Koeberg Unit 1 to allow power grid to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskom said delaying the start of the outage of Unit 1 of the Koeberg Nuclear Power Station is to allow time to stabilise the system and the recovery of some&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/12/08/eskom-not-being-honest-about-extent-of-its-problems-ted-blom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskom not being honest about extent of its problems - Ted Blom</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRS_RGjeZNbWR4iJg2en2RcIhsJ32kvtrBALYamhhsQ73NZXDN6W5ASNGB-mf_qmZmdithtr72l" alt="Eskom not being honest about extent of its problems - Ted Blom" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Energy expert Ted Blom said that the country should brace itself for the power cuts to get worse.</p></div>
            </div>
        </a><a href='https://www.engineeringnews.co.za/article/construction-starts-on-eskoms-first-battery-energy-storage-project-2022-12-08'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Construction starts on Eskom&#39;s first battery energy storage project</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNCUvhQhT0FsORGvZQJanvso3sUiExnbZdsBr6DBCR0FkKRF6sPCp27LtQN6Mgq7A0DTNQ4cb-" alt="Construction starts on Eskom&#39;s first battery energy storage project" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Power utility Eskom and Hyosung Heavy Industries on December 7 marked the beginning of construction of the first energy storage facility under Eskom&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://mybroadband.co.za/news/energy/473207-total-blackout-remote-chance-despite-high-load-shedding-stages-energy-expert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Total Eskom blackout chance “remote” despite high load-shedding ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSH3qrrGXxfRI1EHcYmgCdfYIb17PldykmIPGS4hskHX-XFQM9IKwUESbxJ8HtC7ooF1_aqa6mJ" alt="Total Eskom blackout chance “remote” despite high load-shedding ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Energy expert Chris Yelland said that it was important to understand the stage of load-shedding was not necessarily a direct indication of the proximity to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}