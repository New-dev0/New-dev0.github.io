import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karnataka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karnataka"/>
        <meta name="description" content="Trending News about Karnataka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karnataka</h1>
            <Image width={800} height={500} src="https://th-i.thgim.com/public/incoming/m4h1jj/article66079367.ece/alternates/FREE_1200/Karnataka_Unification_02.jpg" alt="Karnataka"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/news/cities/bangalore/karnataka-a-50-year-old-name-centuries-of-legacy/article66077277.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karnataka: a 50-year-old name, centuries of legacy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7j92oOv5nI8rdCLZ31TwDZ-710tzpb6lx1Ln7zTbg__FAnr0YNnpuxxCcPeskv1ToiqOJiImk" alt="Karnataka: a 50-year-old name, centuries of legacy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doddameti, K.H. Patil, Gopal Gowda, and myself, put up a vociferous fight for renaming the State,” says former MLA and Kannada activist Vatal Nagaraj,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/bengaluru-news/on-camera-temple-chariot-falls-on-devotees-during-procession-in-karnataka-101667303821669.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On camera, temple chariot falls on devotees during procession in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKId4ed9e5DnQg-Am8sDDIf-y5BgutKKBYg6AIFSaDPzvkncVagftX0bfFHpmPQiZjVK8uMytX" alt="On camera, temple chariot falls on devotees during procession in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A huge number of devotees were gathered for the temple festival in Karnataka&#39;s Chamarajanagar district on the occasion of &#39;Rathotsav&#39;, which translates to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/karnataka/colourful-processions-cultural-programmes-mark-karnataka-rajyotsava/article66082035.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colourful processions, cultural programmes mark Karnataka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Colourful processions, cultural programmes mark Karnataka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Colourful processions and cultural programmes marked the “Karnataka Rajyotsava” in the districts of Dhawad, Haveri, Gadag, Uttar Kannada on Tuesday with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.deccanherald.com/state/top-karnataka-stories/puneeth-rajkumar-conferred-karnataka-ratna-posthumously-1158473.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Puneeth Rajkumar conferred &#39;Karnataka Ratna&#39; posthumously</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxgecEAOrbeaLwBqGCba2PNTqFx7Lmc2-s6CK-hpk7OZuzQzCt57ryKBRlzisjTcdyCjGQ78HG" alt="Puneeth Rajkumar conferred &#39;Karnataka Ratna&#39; posthumously" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karnataka&#39;s highest civilian award the &#39;Karnataka Ratna&#39; was conferred posthumously on late actor Puneeth Rajkumar on Tuesday, on the occasion of the 67th&nbsp;...</p></div>
            </div>
        </a><a href='https://www.royalchallengers.com/rcb-cricket-news/news/from-rcb-to-all-the-people-of-karnataka-a-very-happy-karnataka-rajyotsava'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>From RCB to all the people of Karnataka: A very Happy Karnataka ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQVBQqi_8Nb139btIVobjTrvS9Pg9_S7vDhz3GeBVVGQ0ROF8So3qAt1iIdl6WkSVnhZjXw4uv" alt="From RCB to all the people of Karnataka: A very Happy Karnataka ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the revolutionary Karnataka Ekikarana movement and decades of protest, all the Kannada speaking religions outside the Mysore Princely state was&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/bangalore/karnataka-tenders-restore-chandapura-muthanallur-lakes-8242270/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karnataka floats tenders to restore Chandapura, Muthanallur lakes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSB4ejuhbqJS34k55gEHKjW7Sz4MVRgxKaKNIESXnKOor4vgLkrm8JuMdq9XZr4wh_cQipOKbmV" alt="Karnataka floats tenders to restore Chandapura, Muthanallur lakes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The restoration work has to be completed by mid-2023, before the onset of monsoon. The work involves desilting the lakes and making arrangements for the&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/bangalore/karnataka-forest-land-converted-private-projects-data-8243235/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Govt converted over 1800 acre forest land for private projects in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd7rp_kh1anAximB2_8yS-WFwJnMFY3Lm05z_l4L0nkHKEUGW84X-JdgI_NIfgcKleB7hOuCB5" alt="Govt converted over 1800 acre forest land for private projects in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A senior forest official on condition of anonymity said, “These projects do disturb the ecology of the forest and, often, the forest department opposes such&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/karnataka/story/chariot-collapses-during-rathotsava-chamrajnagar-video-2291953-2022-11-01'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crowd has close shave as temple chariot collapses during ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRstwH9x2uT_6pYJ4VSbQ_0uAzunMOnUt47Nsbi36Qfu04RfsxrQcp63j_wTyKdwbD6w_FciiO-" alt="Crowd has close shave as temple chariot collapses during ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chariot collapsed during the Rathotsava in Karnataka&#39;s Chamrajnagar. No injury was reported.</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/karnataka-schools-to-include-lesson-on-puneeth-rajkumar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karnataka schools to include lesson on Puneeth Rajkumar | News ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDfvfLnUeg5egMfM1m6MUqjOEy4eQWHXYgjrG2z2NMAyFArHbsywWFp-cTDrUfuvKjYW_KFCeT" alt="Karnataka schools to include lesson on Puneeth Rajkumar | News ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bengaluru: Karnataka Chief Minister Basavaraj Bommai on Tuesday said that a lesson on late actor Puneeth Rajkumar will be included in the school syllabus.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/karnataka/karnataka-ratna-to-be-conferred-posthumously-on-puneeth-rajkumar-today/article66077490.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karnataka Ratna to be conferred posthumously on Puneeth ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmyVGhim2ncsT1B6bAVFKqKsOGxy1CvrAe7FLs13DBSFHb4Cvcn13g7RDSL-nlNcARfegQfPfG" alt="Karnataka Ratna to be conferred posthumously on Puneeth ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actors Rajinikanth and Junior NTR, and Infosys Foundation Chairperson Sudha Murty will be the guests at the event.</p></div>
            </div>
        </a>
        </Template></>;
}