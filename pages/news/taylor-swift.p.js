import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taylor Swift</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taylor Swift"/>
        <meta name="description" content="Trending News about Taylor Swift" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taylor Swift</h1>
            <Image width={800} height={500} src="https://www.swr3.de/musik/poplexikon/lyrics/1653516013429,taylor-swift-2020-100~_v-16x9@2dL_-6c42aff4e68b43c7868c3240d3ebfa29867457da.jpg" alt="Taylor Swift"/>
            <h3>Recent News</h3>
            <a href='https://www.swr3.de/musik/poplexikon/lyrics/taylor-swift-anti-hero-songtext-deutsche-uebersetzung-lyrics-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taylor Swift: „Anti-Hero“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsnUk9ihCiDVm-txNhIhvg1_o5VUlxuynrHaAHDeHjHMlqb2h8YlAZvBPV6hY4cgzWo6md7hdb" alt="Taylor Swift: „Anti-Hero“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ich schau immer direkt in die Sonne, dafür nie in einen Spiegel. Es muss ganz schön anstrengend sein, immer eine Anti-Heldin anzufeuern (…)</p></div>
            </div>
        </a>
        </Template></>;
}