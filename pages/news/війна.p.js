import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Війна</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Війна"/>
        <meta name="description" content="Trending News about Війна" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Війна</h1>
            <Image width={800} height={500} src="http://ipress.ua/media/gallery/full/1/5/15151515151515151515151515151515151515151515151515151515151515151515115.jpg" alt="Війна"/>
            <h3>Recent News</h3>
            <a href='http://ipress.ua/articles/viyna_v_ukraini_tryvatyme_nezalezhno_vid_doli_twittera_u_sotsmerezhah_obgovoryuyut_yogo_mozhlyvu_peredchasnu_smert__general_mik_rayan_336306.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Війна в Україні триватиме незалежно від долі Twitter&#39;а. У ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPqK89fO7BLCR7zSCItdBeO6hc--rviW_0VQi7tejNkNVggBehob3Y0O3yAARC3kdKZTUP5aA8" alt="Війна в Україні триватиме незалежно від долі Twitter&#39;а. У ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цього тижня, незважаючи на продовження російських бомбардувань в Україні та важливу зустріч G20 в Індонезії, тема можливого закриття Twitter домінувала в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}