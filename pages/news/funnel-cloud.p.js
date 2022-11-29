import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Funnel cloud</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Funnel cloud"/>
        <meta name="description" content="Trending News about Funnel cloud" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Funnel cloud</h1>
            <Image width={800} height={500} src="https://netstorage-briefly.akamaized.net/images/1632c5c69669c50d.png" alt="Funnel cloud"/>
            <h3>Recent News</h3>
            <a href='https://briefly.co.za/south-africa/147232-yoh-footage-a-funnel-cloud-forming-east-rand-leaves-south-africans-mesmerised-tornado-brewing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Footage of a Funnel Cloud Forming Over East Rand Leaves South ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQ6Yb0uFiGRAmZLHuL3jFQ1C74WzBql3OJvXRcQl2ftMGjy59Idao2kKkwHGTDjXJgVsxh82MI" alt="Footage of a Funnel Cloud Forming Over East Rand Leaves South ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africans were utterly mesmerised and concerned when some pictures of a funnel cloud forming over the East Rand in Gauteng were seen and posted online.</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/news/watch-did-you-see-funnel-cloud-over-gauteng-breaking-news-video-27-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Did you see the funnel cloud over Gauteng?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWIYDv5Z4Y4Mp75QbLKldXFKLAkXFqzMr01sM1_0PcvBE39I9JOHmzXuhk82MAbnVudkz_E_0K" alt="WATCH: Did you see the funnel cloud over Gauteng?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Storms can produce funnel clouds but never produce a tornado. A tornado, on the other hand, is when that rotating column of air and that tight circulation&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}