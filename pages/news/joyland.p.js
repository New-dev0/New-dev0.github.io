import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joyland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joyland"/>
        <meta name="description" content="Trending News about Joyland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joyland</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221115041352-pakistan-joyland-release-ban.jpg?c=16x9&q=w_800,c_fill" alt="Joyland"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/15/asia/pakistan-joyland-release-blocked-intl-hnk/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan blocks national release of &#39;Joyland,&#39; a story of sexual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbbAUM5tAqiUuyitexX8_mrdl2Ht0VzpgmQ61Axau16XPBHzHWct9gG1mRSSlyKrTQXMWuFoDu" alt="Pakistan blocks national release of &#39;Joyland,&#39; a story of sexual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan&#39;s government has blocked the nationwide release of &quot;Joyland,&quot; the first Pakistani film to debut at Cannes Film Festival, one week before it was due&nbsp;...</p></div>
            </div>
        </a><a href='https://collider.com/joyland-oscar-qualifying-theatrical-release-france/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Joyland&#39; Gets Oscar-Qualifying Release in France After Ban in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4Az8WsD7iJAKZmP7j3aTGDo9obXo_C_fiNkVp6U4HwDoMX9QTJ4BrZHwomKMRwJ4exNZ5cNnJ" alt="&#39;Joyland&#39; Gets Oscar-Qualifying Release in France After Ban in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joyland is set for a theatrical run in France to qualify for the Oscars after its ban in Pakistan for its central love story involving a trans woman.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/opinion/editorials/pakistans-ban-of-its-own-oscar-pick-joyland-and-why-it-must-reconsider-8270397/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan&#39;s ban of its own Oscar pick, Joyland and why it must ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaMfLxVar0ScQJmYvWumlEamNlrdtIBUPUcED3_-OcsodMziEzdGfN4fxKJNX5M9W3sJ265b5C" alt="Pakistan&#39;s ban of its own Oscar pick, Joyland and why it must ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cuts of censorship are cruel and take time to heal – consider how long it has taken the Pakistani film industry to recover from the scissor-happy years&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/15/1136741888/pakistans-prime-minister-orders-review-of-ban-on-oscar-entry-joyland-an-aide-say'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan&#39;s prime minister orders review of ban on Oscar-entry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP3TzZoMMH7z5bc3NrFI6JNi9UoRru-74Lk0JTMGBWpr6Zg-i9piZXLQXfFhAR1H_EXFeyDQQV" alt="Pakistan&#39;s prime minister orders review of ban on Oscar-entry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The movie Joyland, which features a love story between a married man and a transgender woman, is Pakistan&#39;s entry for next year&#39;s Academy Awards and caused&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/joyland-banned-pakistan-bans-joyland-joyland-movie-pakistan-bans-its-own-official-oscar-entry-joyland-here-s-why-101668497921189.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan bans its own official Oscar entry &#39;Joyland&#39;. Here&#39;s why</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7HfnDPhj5uqfoG3jVCJgKJESmjME37yzAGaSfqhgWQA1lY3EH0lbjPtmEpD6PbwqSMKytVgLU" alt="Pakistan bans its own official Oscar entry &#39;Joyland&#39;. Here&#39;s why" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joyland Banned: With this, the film-which became the first Pakistani film to be screened at the Cannes Film Festival- can no longer be screened in Pakistan.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/world/pakistan-bans-movie-joyland-after-religious-backlash/cid/1898282'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan bans movie &#39;Joyland&#39; after religious backlash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd3NfODFM6yB7nCPakfFUrYBKNdmcucTHR0hlAzRphig5cZnd0SDSUsmnDVWHSW3_E9En7xzKS" alt="Pakistan bans movie &#39;Joyland&#39; after religious backlash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Critically acclaimed film, and country&#39;s Oscar entry, came under pressure from religious leaders, Pakistani authorities have now prohibited its screening in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}