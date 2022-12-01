import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Donald McEachin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Donald McEachin"/>
        <meta name="description" content="Trending News about Donald McEachin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Donald McEachin</h1>
            <Image width={800} height={500} src="" alt="Donald McEachin"/>
            <h3>Recent News</h3>
            <a href='https://www.law.virginia.edu/news/202211/memoriam-us-rep-donald-mceachin-86-democratic-congressman'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In Memoriam: U.S. Rep. A. Donald McEachin &#39;86, Democratic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSw4ff9nYq1pzJaI08g0PzaZ_lVPdK8CgJrzMeeNREnDrLxL5PwHdCjIjfUspyo2e5PU9-jWpNk" alt="In Memoriam: U.S. Rep. A. Donald McEachin &#39;86, Democratic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. Rep. A. Donald McEachin &#39;86, a University of Virginia School of Law alumnus who was reelected to his fourth term in Congress this month, died Monday of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/11/29/statement-from-president-joe-biden-on-the-passing-of-congressman-donald-mceachin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement from President Joe Biden on the Passing of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Statement from President Joe Biden on the Passing of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jill and I are saddened by the death of Congressman Don McEachin of Virginia, following a battle with cancer. We send our deepest condolences to Don&#39;s.</p></div>
            </div>
        </a><a href='https://www.virginiamercury.com/2022/11/30/appreciation-congressman-a-donald-mceachin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Appreciation: Congressman A. Donald McEachin - Virginia Mercury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIcQe0aze2WrNo_gxywX6FMdaRK73MIZm8olLRJ11SvjHwu69H7t-RIWvpqkcrnJFXoiEAHmma" alt="Appreciation: Congressman A. Donald McEachin - Virginia Mercury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>To me, Rep. A. Donald McEachin would always be just Don, a sweet man with a friendly smile, a warm handshake and an innate likeability.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/28/politics/donald-mceachin-virginia-congressman-dies/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virginia Rep. Donald McEachin dies at age 61</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJWVZOPN_k9Rkz9vcmS-tZI53kk_FQBgmU2bEpmEtq9OFFbkGX8VNlMyAJGGjeAgPRyBjs_LnD" alt="Virginia Rep. Donald McEachin dies at age 61" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Rep. Donald McEachin, a Virginia Democrat, died Monday, according to a statement from his office. He was 61.</p></div>
            </div>
        </a><a href='https://www.nbc12.com/2022/11/30/funeral-arrangements-congressman-donald-mceachin-announced/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Funeral arrangements for Congressman Donald McEachin announced</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpHtm3CRcYcJF5vVTOM8s9d7v5okcNaTFVJ6ZBKn6HwJMUjielirG2nBrrSb0V10nmHv0ZUiX_" alt="Funeral arrangements for Congressman Donald McEachin announced" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The service will take place at 11 a.m. at St. Paul&#39;s Baptist Church at 4247 Creighton Road in Richmond. McEachin died at 61 years old of complications from&nbsp;...</p></div>
            </div>
        </a><a href='https://governor.nebraska.gov/press/flags-fly-half-staff-honor-congressman-donald-mceachin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flags to Fly at Half-Staff to Honor Congressman Donald McEachin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtF4cmxlD2LKnhwwF8hnXSzcNpP6f6pxvBTVFjjtpkLWTr6TSXXHuOko1yCehQYh2Pco1382yy" alt="Flags to Fly at Half-Staff to Honor Congressman Donald McEachin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LINCOLN – Today, Governor Pete Ricketts, in accordance with a request from the White House, announced that all U.S. and Nebraska flags are to be flown at half-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}