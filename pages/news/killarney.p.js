import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Killarney</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Killarney"/>
        <meta name="description" content="Trending News about Killarney" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Killarney</h1>
            <Image width={800} height={500} src="https://www.irishexaminer.com/cms_media/module_img/6603/3301640_8_seoimageog_Kerry_20ETB_20_26_20Minister_20Harris_205.jpg" alt="Killarney"/>
            <h3>Recent News</h3>
            <a href='https://www.irishexaminer.com/news/munster/arid-41011547.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Really big day for Killarney&#39; as centre of excellence for tourism ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSS76GVEzF5gSH_wFXYWtjjc8CFXu2VFOUVODTA13sdeNWcOmxCCcauTcVnHTRdzlM5i_lki8X" alt="&#39;Really big day for Killarney&#39; as centre of excellence for tourism ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Town&#39;s first third-level college will also provide apprenticeships for construction and new energy skills and will cater for 4000 students.</p></div>
            </div>
        </a><a href='https://www.rte.ie/news/munster/2022/1121/1337388-killarney-third-level/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Killarney set to get its first third-level college</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiaTypLZTsWL6b6XJZZffA0aq6uh6Gq0a1oAZBoBJITK5HJvk35R4t4J4koYJgKGgojfYaVne3" alt="Killarney set to get its first third-level college" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vacant factory in Killarney is set to become the town&#39;s first third-level college, focusing on the hospitality sector.</p></div>
            </div>
        </a><a href='https://www.independent.ie/regionals/kerryman/news/killarney-pretty-polly-site-to-welcome-students-as-new-third-level-college-announced-for-town-42160079.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Killarney Pretty Polly site to welcome students as new third level ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThri6pjP6FahjToLgG1pTeaPOVKF2ymNcR1BdZFFtapPURbfgbbBe5_tVNx52FfPzfv631d88V" alt="Killarney Pretty Polly site to welcome students as new third level ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There is good news for the town of Killarney this morning with the announcement by the Government that a new third level college is to be opened in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/regionals/kerryman/news/killarneys-crafty-ladies-give-new-life-to-much-loved-teddy-bears-for-christmas-42160417.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Killarney&#39;s Crafty ladies give new life to much loved teddy bears for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTcEEeQcfBrbGuuGKA4JDDjrJuw3LpaaJkgOb2ypuvnE5-zqkL3yWfgpVT8Nreku72y0uPIEOD" alt="Killarney&#39;s Crafty ladies give new life to much loved teddy bears for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Killarney Crafty Ladies have spent the past few months and COVID lock-downs lovingly stitching up the pre-loved bears, which they found in charity shops, and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiokerry.ie/news/killarneys-first-third-level-college-to-accommodate-4000-students-306630'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Killarney&#39;s first third level college to accommodate 4000 students</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJyDjaJhNWrnpJ58r94SbkXMsgzzguo4JBCJK3yMd4MoAnWUQ6sE5jVpJbjbXMwyTx8-cvlRv-" alt="Killarney&#39;s first third level college to accommodate 4000 students" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>November 21st, 2022: The Minister for Further and Higher Education, Simon Harris announced that the former Pretty Polly and Sara Lee site is to be developed&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}