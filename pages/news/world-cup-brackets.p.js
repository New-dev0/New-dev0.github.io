import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup brackets</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup brackets"/>
        <meta name="description" content="Trending News about World Cup brackets" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup brackets</h1>
            <Image width={800} height={500} src="" alt="World Cup brackets"/>
            <h3>Recent News</h3>
            <a href='https://morningstaronline.co.uk/article/s/about-far-it-gets-world-cup-tournament-desert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>About as far as it gets from a World Cup tournament in the desert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRI1S3I9mviksCm45ZROK71HDYLCdKu-lnViQ2e3rX6OaWhoIeXNByiMPwgNEEE7IaqX_qaI4ai" alt="About as far as it gets from a World Cup tournament in the desert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JIMMY GLASS is at Brunton Park to open a bar renamed in his honour. He&#39;s bearded in a smart coat and jeans and chats with fans outside the turnstiles,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}