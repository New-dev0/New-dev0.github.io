import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday Deals!</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday Deals!"/>
        <meta name="description" content="Trending News about Black Friday Deals!" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday Deals!</h1>
            <Image width={800} height={500} src="https://www.dailymaverick.co.za/wp-content/uploads/2022/11/DM-ANC-Black-Friday-2000px.jpg?w=1280" alt="Black Friday Deals!"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymaverick.co.za/article/2022-11-25-black-friday-deals-50-off-all-politicians/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Deals! 50% Off All Politicians!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9cljjJ2dkESOGgue_mUguduLTp-4nn21X0YOuhv2kXy5IFP78xgX4F4LQ_1ZC8moC5N4dg2cv" alt="Black Friday Deals! 50% Off All Politicians!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everybody has an opinion but not everyone has the knowledge and the experience to contribute meaningfully to a discussion. That&#39;s what we want from our members.</p></div>
            </div>
        </a>
        </Template></>;
}