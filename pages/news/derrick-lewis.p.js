import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Derrick Lewis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Derrick Lewis"/>
        <meta name="description" content="Trending News about Derrick Lewis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Derrick Lewis</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1115%2Fr1091611_1296x729_16%2D9.jpg" alt="Derrick Lewis"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/mma/story/_/id/35060883/ufc-fight-night-main-event-derrick-lewis-illness'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC Fight Night main event off due to Derrick Lewis illness</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZ7N4RPlFVf2od5oJFtxGJ0jLZXSH3Vxx3_GD7eocTnfYRksq2rq3HOU1ESDqBvd70hHotRnGI" alt="UFC Fight Night main event off due to Derrick Lewis illness" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saturday&#39;s UFC Fight Night main event between Derrick Lewis and Serghei Spivac was bumped from the card after Lewis pulled out of the bout with an illness.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/ufc-vegas-65-main-event-canceled-due-to-undisclosed-derrick-lewis-illness-221839917.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC Vegas 65: Main event canceled due to undisclosed Derrick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSURG29MdqOSkerhQoOL-9-09RihufQPqOLkQIAzFHA4t_Ud0gKuAxTfcc_VaPEi_vQGvPoWGLJ" alt="UFC Vegas 65: Main event canceled due to undisclosed Derrick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Derrick Lewis vs. Sergey Spivak headliner cancellation news broke during the Saturday broadcast.</p></div>
            </div>
        </a><a href='https://fansided.com/2022/11/19/ufc-vegas-65-derrick-lewis-vs-sergey-spivak-live-results/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC Vegas 65: Derrick Lewis vs. Sergey Spivak live results</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRV9pa1hQXOjMUMH4kZFv6wkaFxIZNcYJGui5SFWP-ALFPO72fJ9jIJJvXLXdvFJ_hQ5cu6Wijw" alt="UFC Vegas 65: Derrick Lewis vs. Sergey Spivak live results" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Derrick Lewis looks to further cement himself in the UFC record books, as while Sergey Spivak looks to continue to rise at UFC Vegas 65.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/mma/news/ufc-fight-night-derrick-lewis-vs-serghei-spivac-main-event-canceled-during-event-because-of-illness/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC Fight Night: Derrick Lewis vs. Serghei Spivac main event ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAUU9BwTM-IIBIuxc2lVDq_mwQP5xfBPtX9jj86u0e7GNU0AGP7LUNECK1iAWB0eHyg27eL4O4" alt="UFC Fight Night: Derrick Lewis vs. Serghei Spivac main event ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reports trickled out online during the prelims that the fight may be in jeopardy. UFC commentators Brendan Fitzgerald, Michael Bisping and Paul Felder&nbsp;...</p></div>
            </div>
        </a><a href='https://mmajunkie.usatoday.com/2022/11/ufc-news-derrick-lewis-hospitalized-main-event-vs-serghei-spivac-canceled'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Derrick Lewis reportedly hospitalized, UFC Fight Night 215 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQh_YJMMcdaPBu3DGw81CqBQZKpwIEmuBr_s90kwUWyOMcLoZH1ahZijQw42Tt0hTZsFkjJdGva" alt="Derrick Lewis reportedly hospitalized, UFC Fight Night 215 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The UFC Fight Night 215 main event between Derrick Lewis and Serghei Spivac was called off in the middle of Saturday&#39;s card.</p></div>
            </div>
        </a><a href='https://www.si.com/mma/2022/11/19/derrick-lewis-vs-serghei-spivac-canceled-ufc-fight-night-215-headliner'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC Fight Night 215 Headliner Canceled as Derrick Lewis Deals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGM9XQEM5YeGfEIv0Z4qX3W7Ve4gg4O52q1GFS5ZOlmc3T4N4jiG3YmDih_3QJhCyECoqBSy2k" alt="UFC Fight Night 215 Headliner Canceled as Derrick Lewis Deals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UFC officials revealed a Lewis illness was the culprit for the late scratch.</p></div>
            </div>
        </a><a href='https://www.mmanews.com/2022/11/derrick-lewis-weighs-in-on-israel-adesanyas-ufc-281-gameplan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Derrick Lewis Weighs In On Israel Adesanya&#39;s UFC 281 Gameplan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSibSQn9eum_X91qdPZn9886VVvh-kM2NN32OUaXX_b0LzKCGeZYk-hsazbDN3htINgmBnYkLw" alt="Derrick Lewis Weighs In On Israel Adesanya&#39;s UFC 281 Gameplan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Derrick Lewis thinks that Israel Adesanya was fighting well at UFC 281 but admits that sometimes plans can change in the midst of a fight.</p></div>
            </div>
        </a>
        </Template></>;
}