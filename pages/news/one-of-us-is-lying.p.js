import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>One Of Us Is Lying</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,One Of Us Is Lying"/>
        <meta name="description" content="Trending News about One Of Us Is Lying" /></Head><Template>
            <h1 style={{fontSize: "30"}}>One Of Us Is Lying</h1>
            <Image width={800} height={500} src="https://media.wonderlandmagazine.com/uploads/2022/11/NUP_198926_00158R.jpg" alt="One Of Us Is Lying"/>
            <h3>Recent News</h3>
            <a href='https://www.wonderlandmagazine.com/2022/11/17/one-of-us-is-lying/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Cast of Peacock&#39;s One Of Us Is Lying Talk Season Two</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvgdH-hdjDlowBzdDpOVhJqRlXxPDNvhuu8aGw5l0DDq-vKg3_ush587GdPWpqzVn8f1wWgKfT" alt="The Cast of Peacock&#39;s One Of Us Is Lying Talk Season Two" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We get the low down from Marianly, Chib, Cooper van Grootel (Nate), Jess Mcleod (Janae) and Annalisa Cochrane (Addy) about returning for another season, how&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hitc.com/en-gb/2022/11/17/spoilers-who-is-simon-says-in-one-of-us-is-lying/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPOILERS: Who is Simon Says in One Of Us Is Lying season 2?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-R_IUrULnnmLIvzj98_eJ2nSggd4GTlmhQCM96147iRBGbL0ddpNUiDVhytlYWXDuAN3_8xg8" alt="SPOILERS: Who is Simon Says in One Of Us Is Lying season 2?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Developed by Eric Saleh, the American teen drama is based on Karen M McManus&#39; 2017 novel of the same name and dives into the world of five high schoolers in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cosmopolitan.com/uk/entertainment/a41987771/one-of-us-is-lying-season-2-ending-fan-reaction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One Of Us Is Lying fans aren&#39;t happy about the season 2 ending</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiwoivqLxyLzCr9YcFz-pDJCPd4gSipjnG92Lmdvz74A8EUDRcWIT2Dgw2iJO4vMoZazCvfTjS" alt="One Of Us Is Lying fans aren&#39;t happy about the season 2 ending" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(We don&#39;t blame you, we&#39;ve done the same before.) For some context, the drama series is based on Karen M. McManus&#39; New York Times best-selling novel of the same&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whattowatch.com/features/one-of-us-is-lying-season-2-cast-whos-who-in-the-teen-murder-mystery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>One of Us Is Lying season 2 cast: who&#39;s who in the teen murder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsomp1pR1St3SZf8b4RWX_gEmTIGjfMhjjWnR8EFBrOHWfGGIwOfUciO61sgHDTj8NmOAbeKkr" alt="One of Us Is Lying season 2 cast: who&#39;s who in the teen murder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It follows Belview High students Bronwyn, Addy, Nate, and Cooper, who all became suspects in the murder of Simon Kelleher. They all hold dark secrets that they&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}