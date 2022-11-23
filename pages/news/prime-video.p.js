import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prime Video</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prime Video"/>
        <meta name="description" content="Trending News about Prime Video" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prime Video</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/prime_video-sixteen_nine.jpg?VersionId=zE9unDgxgIJa_JEnuf8QPH83K8fOEoBS" alt="Prime Video"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatoday.in/information/story/how-to-start-a-watch-party-on-prime-video-in-a-web-browser-2300350-2022-11-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to start a Watch Party on Prime Video in a Web Browser</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNVZUcw_kS7yYsWSvXlMoyZwZQdVAGq_pTMt0Fuu4IVhu8K6-3s_zGsuRW8zsnYvQfN4V7E-IK" alt="How to start a Watch Party on Prime Video in a Web Browser" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By India Today Web Desk: Amazon Prime is a subscription-based video-on-demand streaming service. The streaming service distributes films and television&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/prime-video-the-34-absolute-best-tv-shows-to-stream-in-november/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prime Video: The 34 Absolute Best TV Shows to Watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAmHHWxln6qOR9G50h2TQIbOSg_HxmzBOaaghdb3W_GVMw-xKOoN3pjRIkHmzxPXjFX0U25u2B" alt="Prime Video: The 34 Absolute Best TV Shows to Watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Make time for The English, a new Western drama series starring Emily Blunt. Meara Isenberg headshot. Meara Isenberg.</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/more-people-should-watch-this-trippy-sci-fi-horror-on-prime-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>More People Should Watch This Trippy Sci-Fi Horror on Prime Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRr08uilQ4_23KihPxcAXJF6DnFyxHcSsxWJOt2SdiBeiz2xntB8or6Lp9z8czIRiK_Fa2DjZOd" alt="More People Should Watch This Trippy Sci-Fi Horror on Prime Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mamoudou Athie. Amazon Prime Video. As part of a collaboration with horror movie factory Blumhouse, a slew of mediocre horror flicks have trundled out on Prime&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}