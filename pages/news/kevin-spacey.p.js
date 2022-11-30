import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kevin Spacey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kevin Spacey"/>
        <meta name="description" content="Trending News about Kevin Spacey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kevin Spacey</h1>
            <Image width={800} height={500} src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a04df6301e153cf52351bab7eef470c9.jpg" alt="Kevin Spacey"/>
            <h3>Recent News</h3>
            <a href='https://www.avclub.com/kevin-spacey-first-film-since-trial-disembodied-voice-1849830497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In rancid Hollywood tradition, Kevin Spacey gets a new movie role</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRraxZlkC70mVqbUJ7SYt8v7nTjYYC7YQzWGHfyTY9-ud70R3k_azYZNs-Z939Kpv9khCE5mUfg" alt="In rancid Hollywood tradition, Kevin Spacey gets a new movie role" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey will play a &#39;disembodied voice&#39; in Control, his first film since he was found not liable for $40 million in a sexual misconduct lawsuit.</p></div>
            </div>
        </a><a href='https://www.papermag.com/kevin-spacey-control-2658797855.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey Is Back to Work Amid Sexual Assault Cases</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLk6P1lLVz5V8UPSMbBgPkkNvLcELzj1RicOsxWG9mnMPuzR_zQrZjP-bxgF4naaYKuQrKCTa2" alt="Kevin Spacey Is Back to Work Amid Sexual Assault Cases" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Less than a month after a judge ruled in his favor in a $40 million sexual battery lawsuit filed by Anthony Rapp, the embattled actor is being welcomed back&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rollingstone.com/music/music-news/bryan-freedman-lawyer-sexual-assault-settlement-1234638354/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lawyer for Kevin Spacey, FKA Twigs Previously Settled His Own ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8ScG99NwtL3EZ71yAaqjfYUZBKNKG36KijnP2MlGcgnajGCAFTCFYjVMUHYrupJ66YtyAxMsf" alt="Lawyer for Kevin Spacey, FKA Twigs Previously Settled His Own ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Powerful Hollywood attorney Bryan Freedman paid $40000 in 1991 to settle a lawsuit alleging he sexually assaulted a teenager while he was in college.</p></div>
            </div>
        </a><a href='https://www.foxnews.com/entertainment/kevin-spacey-cast-british-indie-film-after-found-not-liable-sexual-misconduct-lawsuit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey cast in British indie film after being found not liable in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjYohtdyCITJZy_cK4W0OtTjKxJo4rILworJgnLkPHYv9n4LflyfcjGRY454ZOJrr7QKfLoYNj" alt="Kevin Spacey cast in British indie film after being found not liable in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey will appear in a voice-only role in the upcoming British indie film &quot;Control.&quot; The casting news comes one month after he was found not liable&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thetimes.co.uk/article/kevin-spacey-control-film-thriller-sexual-assault-trial-mwj2l5x7h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey gets role in UK film despite sexual assault charges</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHMBdU0DmXx2npFA7jKfVExYX2Rrn65UCzQXDAvu0TwENJuwHcDbD_nbhdNhiOin4ebDmkotne" alt="Kevin Spacey gets role in UK film despite sexual assault charges" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey is to star in a British independent film as he faces seven more charges in the UK relating to sexual offences. The American Beauty actor,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidenova.com/lifestyles/entertainment/kevin-spacey-cast-in-indie-film-control/article_cb3bf4ec-4424-5a6f-a15a-db7be6bbd340.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey cast in indie film Control</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9c1pcLeFmzxPrdXVRaYh4NUvpQpwjdONQJ_1Jdzqg8ARiL2cEE5Cszs_1iGTrEaduPzCjPIZu" alt="Kevin Spacey cast in indie film Control" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The disgraced actor, who is set to appear in court in the UK over multiple charges of sexual assault next summer, will feature in a voice-only role in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yahoo.com/entertainment/kevin-spacey-scores-first-gig-193009566.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey Scores First Gig After Huge $40 Million Sexual Battery ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyNKbUoSeUVYdyGmuEc0It9hNYnNFZd_5DAi9BfscNFA7B4Pt-7fonpA1Y97Obh69-M2hUyw68" alt="Kevin Spacey Scores First Gig After Huge $40 Million Sexual Battery ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey has bagged his first movie role since winning a sexual harassment charge brought against him by actor Anthony Rapp. Although it will be just a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thenews.com.pk/latest/1014974-kevin-spacey-returns-to-films-signs-first-project-after-lawsuit-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Spacey returns to films, signs first project after lawsuit win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKc9M6f8DWTSyNbI5UfzUumjEO3p4EtrcS8hJ5xYT4osuyCVXjJJMTcKfaR6HUEQiT9zZ9cY4J" alt="Kevin Spacey returns to films, signs first project after lawsuit win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey is all set to return to movie business as he has landed a role in an upcoming film after winning $40 million sexual battery lawsuit.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/news/article-11457431/Celebrity-powerhouse-lawyer-Bryan-Freedman-paid-120k-settle-rape-lawsuit-1991.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celebrity powerhouse lawyer Bryan Freedman paid $120k to settle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfmE0XoNF9YTrIXFxpZpn2-fpOVP05phgw6VX1oAccvLRfzEiQHuc0S4zxSNqLENj7EuV_o6vp" alt="Celebrity powerhouse lawyer Bryan Freedman paid $120k to settle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DailyMail.com can reveal the extent of the sexual allegations that celebrity attorney Bryan Freedman called &#39;unsubstantiated,&#39; before paying a chunk of a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}