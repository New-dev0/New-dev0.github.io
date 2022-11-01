import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Punjab State Diwali Bumper 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Punjab State Diwali Bumper 2022"/>
        <meta name="description" content="Trending News about Punjab State Diwali Bumper 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Punjab State Diwali Bumper 2022</h1>
            <Image width={800} height={500} src="https://static.tnnbt.in/thumb/msid-95190731,imgsize-100,width-1280,height-720,resizemode-75/95190731.jpg" alt="Punjab State Diwali Bumper 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.timesnowhindi.com/india/punjab-state-dear-diwali-bumper-lottery-2022-how-to-check-result-winners-list-article-95190731'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Punjab State Diwali Bumper Lottery Result 2022: इस टिकट नंबर को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqhubhF8GUKCW8TCl4D9dbvN3zhiuu-6zxLfnbOzrFqokRgGvg-Om8VV29Ogw7X2_xCPyN9LTa" alt="Punjab State Diwali Bumper Lottery Result 2022: इस टिकट नंबर को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Punjab State Dear Diwali Bumper Lottery Result 2022: वैसे, इस लॉटरी के तहत पहला ईनाम 2.60 करोड़ रुपए का है, पर इस&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}