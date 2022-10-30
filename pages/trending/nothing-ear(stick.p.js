import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nothing Ear(stick</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nothing Ear(stick"/>
        <meta name="description" content="Trending News about Nothing Ear(stick" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nothing Ear(stick</h1>
            <Image width={800} height={500} src="https://www.deccanherald.com/sites/dh/files/articleimages/2022/10/30/nothing-earstick-cs-1-1157461-1667088901.jpg" alt="Nothing Ear(stick"/>
            <h3>Recent News</h3>
            <a href='https://www.deccanherald.com/business/technology/gadgets-weekly-nothing-earstick-and-more-1157461.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gadgets Weekly: Nothing Ear(stick) and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKCsdU6pcebgtlrNNTJ_P6z2EKaU9jzI1sJz26Ptc_lqT3vHJ_P4RROLmhY2XTcurvkjLJlacY" alt="Gadgets Weekly: Nothing Ear(stick) and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Technology companies such as Apple, Nothing, and Xiaomi, launched a new line of smartphones, iPads and earphones this week (October 24-31).</p></div>
            </div>
        </a>
        </Template></>;
}