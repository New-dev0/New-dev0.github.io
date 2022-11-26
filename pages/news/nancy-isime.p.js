import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nancy Isime</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nancy Isime"/>
        <meta name="description" content="Trending News about Nancy Isime" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nancy Isime</h1>
            <Image width={800} height={500} src="https://www.gistreel.com/wp-content/uploads/2022/11/gdfgdfg.jpeg" alt="Nancy Isime"/>
            <h3>Recent News</h3>
            <a href='https://www.gistreel.com/the-old-one-was-better-reactions-trail-nancy-isimes-transformation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“The old one was better” — Reactions trail Nancy Isime&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEyYsufvm0fEL8VnOswgKT0G0tN90J4cwXQq2-RevfS7SYT1iJ-ryAZeg3FlonF3Y-TryAMPVy" alt="“The old one was better” — Reactions trail Nancy Isime&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans of the famous TV host, Nancy Isime, share their takes as she shows off her transformation after months of gym activities.</p></div>
            </div>
        </a><a href='https://www.yabaleftonline.ng/what-has-she-done-with-her-body-nigerians-react-as-nancy-isime-shows-off-her-curvaceous-body/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;What has she done with her body?&quot; - Nigerians react as Nancy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvXZLyr7yqGAz9q-TmTJaI2cmuUfbYg7dNT9bhJie2kEs9h_UlsPEbOzZEKLYQygfsh08QrWXM" alt="&quot;What has she done with her body?&quot; - Nigerians react as Nancy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular Nigerian TV Host and Actress, Nancy Isimi is trending on social media due to a recent short video she shared. In the video, Isime seemingly flaunted&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}