import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jake Flint</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jake Flint"/>
        <meta name="description" content="Trending News about Jake Flint" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jake Flint</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/3D89/production/_127835751_jakeflint.jpg" alt="Jake Flint"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-us-canada-63811219'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US singer Jake Flint dies hours after wedding</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyPc-IS6Uc----x7LOZrOSuyWJ5yndagew76zFHi2rwNjE2mzbWDpQLzf1CGSYbyfCPPgK_6ig" alt="US singer Jake Flint dies hours after wedding" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cause of Oklahoma country musician&#39;s death remains unknown as tributes begin to pour in.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/30/entertainment/jake-flint-musician-death-oklahoma/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musician Jake Flint dies just hours after his wedding</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMdvy2JOO_7mWlrNI3AH7k9bEPRUfBA2QN0MVV2mDaQj8QHQLel2m2NpwCg5-EBiludGU_BWuN" alt="Musician Jake Flint dies just hours after his wedding" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oklahoma musician Jake Flint died unexpectedly over the weekend, hours after getting married, his publicist Clif Doyal told CNN.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/30/1139846396/jake-flint-died-married-wedding'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>An Oklahoma country singer was married on Saturday, and died a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbNqkFeosXgPUpWOkcLhn9SThGdicN12XyRpeDJueXWrY19Rm6Q5E-LvBtFn4g7mcOhWY3TlwE" alt="An Oklahoma country singer was married on Saturday, and died a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jake Flint married his wife Brenda on Saturday and died in his sleep a few hours later on Sunday morning, according to news reports.</p></div>
            </div>
        </a><a href='https://www.joe.ie/music/country-singer-jake-flint-37-dies-sleep-just-hours-wedding-760825'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Country singer Jake Flint, 37, dies in his sleep just hours after his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVsHnIuJcHSvve1VZNjkHA85g6fjACfhI-0G8FjGocGoZiUa3O_KV6I2mLpuuXj9gLmL8WpJf_" alt="Country singer Jake Flint, 37, dies in his sleep just hours after his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US country music singer Jake Flint died suddenly at the age of 37 shortly after his wedding on Saturday (26 November), his publicist has confirmed.</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/music/story/2022-11-30/country-musician-jake-flint-dead-37-wedding'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Country singer Jake Flint dies at 37, hours after wedding</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiJZl93v1jnI_HAY5OjqcMqevvgISgTUXeirJVPL18rg6SXHMsPXrUFXjfTykqfrUw9GUG-QPC" alt="Country singer Jake Flint dies at 37, hours after wedding" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Country musician Jake Flint died in his sleep Saturday at age 37. The Tulsa, Okla.-based singer-songwriter had tied the knot earlier that day.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/pop-culture/music/country-singer-jake-flint-dies-37-years-old-hours-wedding-rcna59335'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Country singer Jake Flint, 37, dies just hours after getting married</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBFLB3H0V2uSgnAfwXFd2rGPohQNggtDlMaPrZLyanlMi87N4gLtJEZzGBHWDMuTSvCLnK_Zig" alt="Country singer Jake Flint, 37, dies just hours after getting married" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flint died in his sleep Saturday, his publicist told The Oklahoman. “We should be going through wedding photos but instead I have to pick out clothes to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}