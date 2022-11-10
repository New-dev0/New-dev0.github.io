import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>School Education</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,School Education"/>
        <meta name="description" content="Trending News about School Education" /></Head><Template>
            <h1 style={{fontSize: "30"}}>School Education</h1>
            <Image width={800} height={500} src="https://static.businessworld.in/article/article_extra_large_image/1512729258_6mMTmh_education_image.jpeg" alt="School Education"/>
            <h3>Recent News</h3>
            <a href='http://bweducation.businessworld.in/article/Ficci-Arise-To-Organise-Conference-For-School-Education-/09-11-2022-453474'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ficci Arise To Organise Conference For School Education</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSm7fYT4w78Aay_kSJcP10U74Ki7P0VBHasRk7QoVdqOFQjykJZs9YvAtbQS5JlI5VRxNKJ1rc7" alt="Ficci Arise To Organise Conference For School Education" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BW Education - , K12-The conference will witness participation of delegates including state and central government officials, regulators,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}