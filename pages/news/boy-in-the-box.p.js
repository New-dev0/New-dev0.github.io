import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boy in the Box</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boy in the Box"/>
        <meta name="description" content="Trending News about Boy in the Box" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boy in the Box</h1>
            <Image width={800} height={500} src="https://metrophiladelphia.com/wp-content/uploads/2022/12/AP22342626002907-1200x675.jpg" alt="Boy in the Box"/>
            <h3>Recent News</h3>
            <a href='https://metrophiladelphia.com/boy-in-the-box-gets-his-name-back/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Boy in the Box&#39; gets his name back, 65 years later – Metro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREVO7Pt2NeZrj_l2zgyV43Eaaf7XbWLTmZlqKEEXh2gKsaCzJUXBPF3nH8VqGWpzL0lA3B0avL" alt="&#39;Boy in the Box&#39; gets his name back, 65 years later – Metro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Investigators used DNA evidence and genealogical research to identify the “Boy in the Box” as Joseph Augustus Zarelli, a 4-year-old from West Philadelphia.</p></div>
            </div>
        </a><a href='https://www.terracestandard.com/news/police-reveal-identity-of-phillys-slain-boy-in-the-box/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police reveal identity of Philly&#39;s slain &#39;Boy in the Box&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLzzfCnqvGsQTthE6Vu6_qLSvuNuJgPWkHnmdo9ZZVJkYSR8dr8OMSOr4YlRPwGI23Fc-qTxtf" alt="Police reveal identity of Philly&#39;s slain &#39;Boy in the Box&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>His name was Joseph Augustus Zarelli. Nearly 66 years after the battered body of a young boy was found stuffed inside a cardboard box, Philadelphia police&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/08/us/boy-in-the-box-philadelphia-homicide.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After 65 Years, Philadelphia Police Identify the &#39;Boy in the Box&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLt4a_WYvmjXwAIB9XknpmLAQX6O4Q5gzNlrHs8f38IoOBctllFrMeXBgRJmORIHe7K8385WBj" alt="After 65 Years, Philadelphia Police Identify the &#39;Boy in the Box&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Detective work and DNA analysis helped officials learn the identity of a 4-year-old boy whose beaten body was found inside a cardboard box in Philadelphia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/08/us/philadelphia-boy-in-box-thursday/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Philadelphia police reveal identity of child found dead inside a box ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSZkwZOmbvHWjF2XRzmeiqUiXjQIw8AT1WKv2KHgnxOcp3l9-mBHD6ruiY_R-z3CLsNWAaZavA" alt="Philadelphia police reveal identity of child found dead inside a box ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This facial reconstruction from the National Center for Missing and Exploited Children shows the boy found dead in a box in Philadelphia in 1957. National&nbsp;...</p></div>
            </div>
        </a><a href='https://abcnews.go.com/US/boy-box-victim-finally-idd-philadelphias-oldest-homicide/story?id=94687156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Boy in the box&#39;: Victim finally ID&#39;d in Philadelphia&#39;s oldest unsolved ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQ5n0dZV6HFT8XtrAFrjwka57GlKngET9TW9rVjr5VTR9QG5oFir_G0Hy_XW-32dMHxPTkvFGJ" alt="&#39;Boy in the box&#39;: Victim finally ID&#39;d in Philadelphia&#39;s oldest unsolved ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A little boy killed more than 60 years ago has finally been identified thanks to police work and DNA analysis, the Philadelphia Police Department said.</p></div>
            </div>
        </a><a href='https://www.wokv.com/news/phillys-slain-boy/LFTNDZNT3L4RKJAKPAIOQULTKI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Philly&#39;s slain &#39;Boy in Box&#39;: 66 years later we know his name</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZXxfVuJfvLboHsziBmpAj-L0CbT2tArqD5RUvskAG1LRChCco2sCVdKqgS6BMkrB-g4I9EozL" alt="Philly&#39;s slain &#39;Boy in Box&#39;: 66 years later we know his name" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>His name was Joseph Augustus Zarelli. Nearly 66 years after the battered body of a young boy was found stuffed inside a cardboard box, Philadelphia police&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}