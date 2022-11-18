import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pelosi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pelosi"/>
        <meta name="description" content="Trending News about Pelosi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pelosi</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/17/gettyimages-1442266935-edit_wide-436be2b3fafd2a4cbfca0c74803bc352f75f8502-s1400-c100.jpg" alt="Pelosi"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/17/1133397685/house-speaker-pelosi-step-down'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Speaker Pelosi says she will step down as party leader after two ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhOSYD5ZkraBxOSAqiNoMBpbjiYA0gfwtpo194YuASk0CV8hOh9k9vTPSssm8EX56oLSuzn7Nh" alt="Speaker Pelosi says she will step down as party leader after two ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaker Nancy Pelosi&#39;s announcement paves the way for a new generation of Democratic lawmakers to fill the leadership ranks.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/us/politics/nancy-pelosi-photos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi&#39;s Most Enduring Photo Moments</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVFU9VggbYLx22zN6hkqQZ5Dkk2if6plTJBBWZ6NgQsI_uXYiz84UM8ybKJYssX9ORenya_qmu" alt="Nancy Pelosi&#39;s Most Enduring Photo Moments" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From becoming the first woman speaker to leading the impeachments of Donald J. Trump, Nancy Pelosi has been one of the most visible women in Washington.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/17/politics/nancy-pelosi-house-speaker-democrats-future/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi announces she won&#39;t run for leadership post, marking ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBo9885nTTgwTXJyHpryIqgTrKXe_IJtDhTMxpF0xn8t9UgLzy9KAElIAR70EKBtCKhViXm2iG" alt="Nancy Pelosi announces she won&#39;t run for leadership post, marking ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Speaker Nancy Pelosi announced on Thursday that she will relinquish her leadership post after leading House Democrats for two decades, building a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/17/pelosi-first-woman-speaker-to-depart-dem-leadership-in-seismic-shift-00069222'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelosi, first woman speaker, to depart Dem leadership in seismic shift</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYC3UajZ-y95lWq2YZezT6j-w1piB5CE_swCuqsJCaANTyvcKdAPr5w2AzRErNqjexv8fj9XSd" alt="Pelosi, first woman speaker, to depart Dem leadership in seismic shift" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nancy Pelosi, a legislative giant regarded as one of the most powerful speakers in modern U.S. history, announced Thursday she will forgo another run for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox21online.com/2022/11/17/pelosi-wont-seek-leadership-role-plans-to-stay-in-congress/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelosi Won&#39;t Seek Leadership Role, Plans To Stay In Congress ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZNI8Y1u1kGOO1cx3tq6FU7CjtAr8bZExU92WQ9FkkDATfFMeF8-4w2KupYwKmPIJV3UgK0iVF" alt="Pelosi Won&#39;t Seek Leadership Role, Plans To Stay In Congress ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WASHINGTON (AP) — House Speaker Nancy Pelosi said Thursday that she will not seek a leadership position in the new Congress, a pivotal realignment making&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gov.ca.gov/2022/11/17/governor-newsom-statement-on-announcement-by-speaker-pelosi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governor Newsom Statement on Announcement by Speaker Pelosi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Governor Newsom Statement on Announcement by Speaker Pelosi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SACRAMENTO – Governor Gavin Newsom issued the below statement today following House Speaker Nancy Pelosi&#39;s announcement that she will step down from House&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/us/elections/hakeem-jeffries-house-democrats-pelosi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries Is Poised to Succeed Nancy Pelosi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-qKoD2dHkzDtt6-VNgvzMVJl_XnZ3zwLBPR29O6ZennzUHovNTEHuaHUA7tafrIKYAdBjl4Kz" alt="Hakeem Jeffries Is Poised to Succeed Nancy Pelosi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Jeffries, a Democrat, would be the first Black politician to head a House or Senate caucus for either major party.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/17/pelosi-future-house-republican-majority/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Post Politics Now: Pelosi, Hoyer open door to new generation of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEsM3ZKfAKvNOihGBGYPv2erZm0SjtaEpzWcxaILVdealvNsme8AW4ILDEUebFPdXk_sT81vSx" alt="Post Politics Now: Pelosi, Hoyer open door to new generation of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today, House Speaker Nancy Pelosi (D-Calif.) and House Majority Leader Steny H. Hoyer (D-Md.) announced that they would not seek leadership positions in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/17/politics/hakeem-jeffries-next-democratic-leader/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Democrats poised to pick Hakeem Jeffries as Nancy Pelosi&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbvGI2gE5qjCm_ggnmCN3A9WRtWHvHHR07U3CrQlte7GS-CokyaGSDARs_CHDEs5UDF73_6QYk" alt="Democrats poised to pick Hakeem Jeffries as Nancy Pelosi&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Democrats appear likely to choose New York Rep. Hakeem Jeffries to succeed Speaker Nancy Pelosi, a potentially historic move to elect the first Black&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/politics/democrats-jockey-to-replace-pelosi-after-20-years-as-leader'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries believed to be in the driver&#39;s seat to succeed Pelosi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQf3OfjFv3kaM_OXd4iCsiOqqE_kEyFQgyJdmfzqGmk1Kpl7jYhhJ8goFtjFkAUoZMb4x_lMCD4" alt="Hakeem Jeffries believed to be in the driver&#39;s seat to succeed Pelosi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Democratic Caucus Chair Hakeem Jeffries is believed to be the leading candidate to replace House Speaker Nancy Pelosi as Democratic leader after her&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}