import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cassper Nyovest</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cassper Nyovest"/>
        <meta name="description" content="Trending News about Cassper Nyovest" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cassper Nyovest</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/anvgdve5spryhhigjndy" alt="Cassper Nyovest"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/12/02/cassper-nyovest-hoping-for-another-iconic-fill-up'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cassper Nyovest hoping for another iconic Fill Up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcJg-n9LlnczhYuO3V0vKYCtFS_S4w3S-S3IIwMqvNe38H4Y--9G7wuXfc4V_ZVTUKxPICIWhG" alt="Cassper Nyovest hoping for another iconic Fill Up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rapper will be performing on Saturday in his hometown at Mmabatho Stadium, Mafikeng.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/entertainment/celebrity-news/local/what-to-expect-from-cassper-nyovests-fillupmmabathostadium-concert-b3f9399d-ec8d-4824-ae3b-eff37b0f0cab'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What to expect from Cassper Nyovest&#39;s #FillUpMmabathoStadium ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQduyX6ymZ_3AGgR2BiAGFgHIpyBHGJTYQlmhlzFQ26ewN3aNJQ5frjTdTdK-KQPyMEHGeWHMak" alt="What to expect from Cassper Nyovest&#39;s #FillUpMmabathoStadium ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cassper Nyovest is set to embark on his latest attempt to fill up a major stadium this weekend as he heads to his home town of Mahikeng for his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/tshisa-live/tshisa-live/2022-12-02-makhadzi-wishes-cassper-nyovest-all-the-best-ahead-of-fillupmmabatho/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Makhadzi wishes Cassper Nyovest all the best ahead of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-GU3FDmnbq-RaHpZwu65h7VuooSXH175mDDn-Mh0x8FxCR_QE3WR8qHbh7ru6AC-YkaWAUMfa" alt="Makhadzi wishes Cassper Nyovest all the best ahead of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musician Makhadzi can&#39;t wait to perform at Cassper Nyovest&#39;s concert tomorrow. Image: Instagram/Makhadzi. Just one more sleep before&nbsp;...</p></div>
            </div>
        </a><a href='https://briefly.co.za/entertainment/celebrities/147767-cassper-nyovest-unveils-huge-lion-tattoo-fillupmmabthostadium/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cassper Nyovest Unveils Huge Back Tattoo Ahead of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0UfQ_pc4NF-DG5YlOh9ex6zm_Aqgl_xCTJfPIA1aBAq1bexofyl_8g_rM5RdgFZrXJmFHYEW8iw" alt="Cassper Nyovest Unveils Huge Back Tattoo Ahead of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cassper Nyovest is mentally psyching himself up for his #FillUpMmabatho concert taking place on Saturday; The rapper unveiled his new lion tattoo to go with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}