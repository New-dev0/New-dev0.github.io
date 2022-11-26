import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Toys R Us</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Toys R Us"/>
        <meta name="description" content="Trending News about Toys R Us" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Toys R Us</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/23/PASH/c476ddf5-0fa0-4b6f-b390-3a2e18b7a5cc-PopeyesConstruction_11172022_0006.jpg?auto=webp&crop=4651,2617,x0,y236&format=pjpg&width=1200" alt="Toys R Us"/>
            <h3>Recent News</h3>
            <a href='https://www.citizen-times.com/story/news/local/2022/11/25/answer-woman-is-popeyes-opening-in-old-toys-r-us-brevard-road/69666486007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Answer Woman: Is Popeyes opening in the old Toys R Us on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwUti0b1SgaSUbSjptcRNqerHQ3pTjuqFTu3Sm80vy6Cq4xjkwq_mjHN-qmWehE3_7IUzfdIH3" alt="Answer Woman: Is Popeyes opening in the old Toys R Us on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest on the development plan for the commercial site and former home of Toys R Us on Brevard Road in Asheville.</p></div>
            </div>
        </a>
        </Template></>;
}