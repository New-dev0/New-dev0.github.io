import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michael Jordan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michael Jordan"/>
        <meta name="description" content="Trending News about Michael Jordan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michael Jordan</h1>
            <Image width={800} height={500} src="https://cdn-wp.thesportsrush.com/2022/11/562f2fa6-untitled-design-2022-11-29t181013.835.jpg" alt="Michael Jordan"/>
            <h3>Recent News</h3>
            <a href='https://thesportsrush.com/nba-news-harassment-from-chicago-people-saw-michael-jordan-and-juanita-vanoy-dish-out-14-million-on-their-mansion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harassment From Chicago People Saw Michael Jordan and Juanita ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXkKSyp4ql3givJbeeJaqiGIhJObGvcL1tjSOv12Iqi84cTGTFXs5skKjUMBnBn5OmlWf0-EXj" alt="Harassment From Chicago People Saw Michael Jordan and Juanita ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael Jordan and Juanita Vanoy built their Highland Park mansion as a way to avoid interactions with their fans at their home.</p></div>
            </div>
        </a>
        </Template></>;
}