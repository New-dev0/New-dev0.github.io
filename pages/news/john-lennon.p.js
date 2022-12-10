import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>John Lennon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,John Lennon"/>
        <meta name="description" content="Trending News about John Lennon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>John Lennon</h1>
            <Image width={800} height={500} src="https://americansongwriter.com/wp-content/uploads/2021/11/John-Yoko-1970-Photo-by-Richard-DiLello-©-Yoko-Ono-Lennon-e1616731787261.jpeg" alt="John Lennon"/>
            <h3>Recent News</h3>
            <a href='https://americansongwriter.com/john-lennon-yoko-ono-love-story-10-songs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon and Yoko Ono&#39;s Love Story in 10 Songs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5TsPaWKB7T90rlcBiLKFzDFNmD4r6CIJ1TBy3L2mtenjslYxqz2Ud8dWjQwRQPuhdZbCVb8G1uw" alt="John Lennon and Yoko Ono&#39;s Love Story in 10 Songs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Much of John Lennon and Yoko Ono&#39;s relationship is documented somewhere in a song. Here&#39;s s a timeline of the Lennons&#39; relationship.</p></div>
            </div>
        </a>
        </Template></>;
}