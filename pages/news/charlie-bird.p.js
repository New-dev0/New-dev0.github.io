import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charlie Bird</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charlie Bird"/>
        <meta name="description" content="Trending News about Charlie Bird" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charlie Bird</h1>
            <Image width={800} height={500} src="https://extra.ie/wp-content/uploads/2021/12/Vicky-Phelan-Charlie-Bird-Feature.jpeg" alt="Charlie Bird"/>
            <h3>Recent News</h3>
            <a href='https://extra.ie/2022/11/24/entertainment/celebrity/charlie-bird-award-vicky-phelan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlie Bird Dedicates Book Award To Friend Vicky Phelan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJgq0bzgdaGZl8zIrtCXkqf6PY8t4kak_qAyYti_6BJer04lu68n6l2oR7PTxmLHLjQFi1QUtc" alt="Charlie Bird Dedicates Book Award To Friend Vicky Phelan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charlie Bird has dedicated his An Post Book Award to the memory of his late friend Vicky Phelan, who passed away earlier this month.</p></div>
            </div>
        </a>
        </Template></>;
}