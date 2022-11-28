import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kevin Kilbane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kevin Kilbane"/>
        <meta name="description" content="Trending News about Kevin Kilbane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kevin Kilbane</h1>
            <Image width={800} height={500} src="https://punditarena.com/wp-content/uploads/2022/11/kilbane.jpg" alt="Kevin Kilbane"/>
            <h3>Recent News</h3>
            <a href='https://punditarena.com/football/james-fenton/kevin-kilbane-xenophobic-paul-peschisolido/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Kilbane calls out former teammate for &quot;xenophobic&quot; comments</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-N2R2mZbZ2lvl1O8OoQFgo37RwkdTpt6OUQNX254LhxiUyg773_7U9LIERYhSghR4TKjYIzC_" alt="Kevin Kilbane calls out former teammate for &quot;xenophobic&quot; comments" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Kilbane has referred to comments made by former teammate Paul Peschisolido about his appearances on Canadian TV as &quot;xenophobic.&quot;</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/soccer/soccer-news/kevin-kilbane-accuses-former-teammate-28596193'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Kilbane accuses former teammate of &#39;xenophobia&#39; over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTz7L_0qRbdJoX9pD2yIrncMraCWOXsJhojYug1fwzSpY5VbVcnJGLx_oRizjYeBPbO2-FN9wFp" alt="Kevin Kilbane accuses former teammate of &#39;xenophobia&#39; over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Since moving to Canada in 2020 after marrying Canadian professional skater Brianne Delcourt, Kilbane has been a regular pundit for broadcaster TSN. READ MORE:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9806143/kevin-kilbane-blasts-xenophobic-criticism-canadian-tv-punditry/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Ireland star Kevin Kilbane blasts &#39;xenophobic&#39; criticism of his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLLiItSUOQtRYb3rstPw1OFG0xPQwYPPyiy0dQ1rloARGBdU8y2QwNrzlGuS5074bIl_G4giaa" alt="Ex-Ireland star Kevin Kilbane blasts &#39;xenophobic&#39; criticism of his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FORMER Ireland stalwart Kevin Kilbane has hit back at criticism of his role on Canadian television, which he describes as having &#39;xenophobic undertone.</p></div>
            </div>
        </a><a href='https://www.balls.ie/football/kevin-kilbane-canada-world-cup-534501'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Kilbane Hits Back At &#39;Xenophobic&#39; Tone To Criticism Of His ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQoZY2xF-zedZ2hD20ORE9OnN41WXSoa4izrxocGfmn-Y0p2LUNadPTcQ6HSnk6klwDIu3v3qE" alt="Kevin Kilbane Hits Back At &#39;Xenophobic&#39; Tone To Criticism Of His ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Irish midfielder Kevin Kilbane has been forced to defend himself on Twitter after certain fans were displeased with his presence on Canadian TV.</p></div>
            </div>
        </a>
        </Template></>;
}