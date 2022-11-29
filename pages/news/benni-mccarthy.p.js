import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benni McCarthy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benni McCarthy"/>
        <meta name="description" content="Trending News about Benni McCarthy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benni McCarthy</h1>
            <Image width={800} height={500} src="https://cdn1.unitedinfocus.com/uploads/14/2022/11/GettyImages-1242235250.jpg" alt="Benni McCarthy"/>
            <h3>Recent News</h3>
            <a href='https://www.unitedinfocus.com/news/manchester-united-coach-benni-mccarthy-tipped-to-get-managerial-job-in-england/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United coach Benni McCarthy tipped to get managerial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShRNT-TNhWpFdNZE1tjlFA5drQyiv8FLBgOWBg2t8u_E3VRlADzS-w_KewPT5K7qh3MObDUcEj" alt="Manchester United coach Benni McCarthy tipped to get managerial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United forward coach Benni McCarthy has been tipped to get a managerial job in England by South African manager Gavin Hunt.</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/soccer/psl-south-africa/gavin-hunt-kaizer-chiefs-pitso-mosimane-benni-mccarthy-monday-28-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gavin Hunt wants to join the likes of Pitso Mosimane and Benni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjjQHv1hdK4PJf4FMZnqDXQKiU6m3pxVa0j6b7HD7iW40DIqz3L51Q4RdfUisdi4W6lGltrMGC" alt="Gavin Hunt wants to join the likes of Pitso Mosimane and Benni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Kaizer Chiefs coach and SuperSport United head coach Gavin Hunt wants to join the likes of Pitso Mosimane and Benni McCarthy abroad.</p></div>
            </div>
        </a>
        </Template></>;
}