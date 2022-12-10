import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Varalaru Mukkiyam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Varalaru Mukkiyam"/>
        <meta name="description" content="Trending News about Varalaru Mukkiyam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Varalaru Mukkiyam</h1>
            <Image width={800} height={500} src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/12/9/original/Varalaru_Mukkiyam1.jpg" alt="Varalaru Mukkiyam"/>
            <h3>Recent News</h3>
            <a href='https://www.cinemaexpress.com/malayalam/review/2022/dec/09/varalaru-mukkiyam-movie-review-a-stale-tasteless-comedy-37558.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Varalaru Mukkiyam Movie Review: A stale, tasteless comedy...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlYsjItID8ZK0JwQhLgWbHpr9h1AiUzHVaD5fF4yeBL2Yr2NJLLO9ItKYGMa4AEOFsyhwVhyRJ" alt="Varalaru Mukkiyam Movie Review: A stale, tasteless comedy..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jiiva is an actor with excellent comic timing. He has proved it time and again with films like Siva Manasula Sakthi, Nanban, and Endrendrum Punnagai.</p></div>
            </div>
        </a><a href='https://www.indiaherald.com/Breaking/Read/994558236/Varalaru-Mukkiyam-Review-A-SX-Comedy-that-is-Vulgar-and-Avoidable'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Varalaru Mukkiyam Review - A S*X Comedy that is Vulgar and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXmiQGjF8CSbblzWCAM7corQOSeOUT1GjVvY4K3oqZgX7QWzWtnw2pClVI2Pg829jQSGZMLlfc" alt="Varalaru Mukkiyam Review - A S*X Comedy that is Vulgar and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>breaking : The opening scene of Aralaaru Mukkiyam takes place in 2050, but before we can get our hopes up, the sequence itself completely deflates any&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}