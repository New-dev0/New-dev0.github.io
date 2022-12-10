import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thiago Silva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thiago Silva"/>
        <meta name="description" content="Trending News about Thiago Silva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thiago Silva</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-12/Thiago%20Silva%20Brazil%201272022%281%29%282%29.jpg?itok=wwyS8G0k" alt="Thiago Silva"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/us/soccer/news/brazil-captain-world-cup-thiago-silva/deturbzctioeukgq2vq3ysdl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Brazil team captain? Why Thiago Silva wears armband for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7SkeXu5I3hyVBqI3PrWo87dPUdLXTRmMSN7z-wedrvinKyQ8hj4IKSrksraLmmThC3UcrAVNp" alt="Who is Brazil team captain? Why Thiago Silva wears armband for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Every footballer dreams of captaining Brazil and hoisting the World Cup trophy high, which player is leading Brazil out in Qatar?</p></div>
            </div>
        </a>
        </Template></>;
}