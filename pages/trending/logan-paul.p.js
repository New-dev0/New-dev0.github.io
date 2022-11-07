import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Logan Paul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Logan Paul"/>
        <meta name="description" content="Trending News about Logan Paul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Logan Paul</h1>
            <Image width={800} height={500} src="https://phantom-marca.unidadeditorial.es/cea26cf05713714f44caf6426f42520d/resize/1200/f/jpg/assets/multimedia/imagenes/2022/11/06/16677375568111.jpg" alt="Logan Paul"/>
            <h3>Recent News</h3>
            <a href='https://prowrestling.net/site/2022/11/06/logan-paul-suffered-a-major-knee-injury-during-wwe-crown-jewel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul suffered a major knee injury during WWE Crown Jewel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Logan Paul suffered a major knee injury during WWE Crown Jewel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Paul announced that he tore his meniscus and MCL, and may have suffered a torn ACL during his WWE Crown Jewel main event with Roman Reigns. Powell&#39;s POV:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/wwe/2022/11/06/6367b80d268e3ef7268b4594.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Injured Logan Paul leaves Saudi Arabia in a wheelchair</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUS2Yts13sh6UPi0uxzYJcPOyD_oDHGGxeh01IftSoYVvSfgR3MgBZ-lOxOFdJKVdvysBlb1m5" alt="Injured Logan Paul leaves Saudi Arabia in a wheelchair" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Paul was one of the biggest stars of the WWE Crown Jewel event after a spectacular bout against Roman Reigns for the Unified Universal Championship.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10054776-whats-next-for-roman-reigns-after-win-vs-logan-paul-at-wwe-crown-jewel-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s Next For Roman Reigns After Win vs. Logan Paul at WWE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvQ9-oks80p-FIGJj6a-IITqPMOi993Y20khBEy5JtBIz00x0rRjpWpfLDjtFIO39iG3_Ya3qQ" alt="What&#39;s Next For Roman Reigns After Win vs. Logan Paul at WWE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When the dust settled at WWE Crown Jewel 2022, Roman Reigns remained the Undisputed WWE Universal champion with a win over Logan Paul. The contest wasn&#39;t...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/06/logan-paul-injured-vs-roman-reigns-at-wwe-crown-jewel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul says he suffered bad injury vs. Roman Reigns at WWE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqZRw5_dOhxCgFvATYt1cHiSM_QwZ-mVVmd8v0SdOruvKUgIchCvO0RyddCQ0wPRu1WOPDwoBP" alt="Logan Paul says he suffered bad injury vs. Roman Reigns at WWE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It will likely be a while before we see Logan Paul in a WWE ring again. He revealed on social media that he suffered a knee injury vs. Roman Reigns at Crown&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dexerto.com/entertainment/logan-paul-reveals-he-suffered-serious-knee-injury-in-wwe-universal-match-vs-roman-reigns-1977677/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul reveals he suffered serious knee injury in WWE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRv0MbRq3y50qye71Irq-N6BffKuyfFFIC55vxkmy1ZVPIetWNsalYu2TTKkrOOQswXAzQXEi5-" alt="Logan Paul reveals he suffered serious knee injury in WWE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Paul has reported serious injuries to his leg following his high-flying WWE title match against Universal Champion Roman Reigns.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/05/logan-paul-loses-crown-jewel-match-roman-reigns-jake-paul-wwe-debut/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul Loses To Roman Reigns At Crown Jewel, Jake Makes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8wWFh_gtBbI3zmppj6MLEfA49a4J5EeQ9kwEgbDn9TVmkq2KCIJX4b3uVhRzQQi2cEGWnm8_M" alt="Logan Paul Loses To Roman Reigns At Crown Jewel, Jake Makes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Paul proved once again he belonged in the ring on Saturday ... showing off his athleticism against Roman Reigns, the undisputed WWE Universal Champion&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}