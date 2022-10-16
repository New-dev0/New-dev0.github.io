import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rishi Sunak</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rishi Sunak"/>
        <meta name="description" content="Trending News about Rishi Sunak" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rishi Sunak</h1>
            <Image width={800} height={500} src="https://images.contentstack.io/v3/assets/bltf04078f3cf7a9c30/blt43d534564940a8c6/634aed10748bd96513646178/GettyImages-1211766881.jpg" alt="Rishi Sunak"/>
            <h3>Recent News</h3>
            <a href='https://www.spectator.co.uk/article/the-plot-to-make-rishi-sunak-prime-minister'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The plot to put Rishi Sunak in No. 10</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdgroz9avXjA4RfJVM7KrIxCBvWq3tApytDkvZ0_1yg4a4JEkXPieS8N39LSlN3zGCNd7E-ltN" alt="The plot to put Rishi Sunak in No. 10" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When Rishi Sunak resigned over Boris Johnson&#39;s leadership, he acknowledged that it might be the end of his political career. His dreams of leading the Tory&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/politics/2022/10/15/rishi-sunak-camp-jubilant-eyes-path-10-downing-street/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rishi Sunak camp jubilant as it eyes path to 10 Downing Street</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRY4TCthvBHsbDvN4jy1tlf-yDhNdYxIyOLQh72fk0Ha9DPjYbJYQuQRH22UHj91JCA4ATu0mbN" alt="Rishi Sunak camp jubilant as it eyes path to 10 Downing Street" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr Sunak&#39;s supporters believe he is vindicated by the fallout from the mini-Budget as they welcome arrival of Jeremy Hunt in the Treasury.</p></div>
            </div>
        </a>
        </Template></>;
}