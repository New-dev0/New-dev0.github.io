import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Willis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Willis"/>
        <meta name="description" content="Trending News about Bruce Willis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Willis</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7713/83a8101e1f644b41bbaf7476a9135b62.jpg" alt="Bruce Willis"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/you/celebs/international/sylvester-stallone-shares-update-on-pal-bruce-willis-hes-going-through-really-difficult-times-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvester Stallone shares update on pal Bruce Willis: &#39;He&#39;s going ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRo41b-0P7bZFdgsBRbGhJNcYhXJvYwyAJi7bqHvrdJ2N-KtdgY-I6yMqmZWW70srGgt_9Ft5kK" alt="Sylvester Stallone shares update on pal Bruce Willis: &#39;He&#39;s going ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sylvester Stallone has shared an update on fellow actor Bruce Willis&#39; battle with aphasia, saying the Die Hard star is “going through some really,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.snopes.com/fact-check/bruce-willis-death-hoax/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis Is Not Dead, Despite &#39;Very Sad News&#39; Facebook Death ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTE4k9Jh4YLRUqFGFtjVN0DEcfTZOfyso_tuBb_xEiz9ev-4Jup5tcic43mBheNf8gTmxRCPH_H" alt="Bruce Willis Is Not Dead, Despite &#39;Very Sad News&#39; Facebook Death ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The same site that pushed the Willis death hoax was doing the same for actor Dwayne &quot;The Rock&quot; Johnson and musicians Garth Brooks and Alan Jackson.</p></div>
            </div>
        </a><a href='https://www.wrestlinginc.com/1109255/cj-perry-describes-what-it-was-like-to-work-with-bruce-willis/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CJ Perry Describes What It Was Like To Work With Bruce Willis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbUPyAoP-qzeKY3DklcvL03ChPnAxF4zIkL-gGR01j9SSX_pt_FzaRCWXxZIk4kUgQE1tX-7PA" alt="CJ Perry Describes What It Was Like To Work With Bruce Willis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former WWE Superstar CJ Perry once had the opportunity to work on a film with Bruce Willis, and recently elaborated on what that experience was like for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/entertainment/bruce-willis-going-through-difficult-times-after-aphasia-diagnosis-says-friend-sylvester-stallone-3527960'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis Going Through &quot;Really Difficult Times&quot;: Sylvester Stallone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgTiH4koHxBpm4ffCqeYJ8xjc3UwUEa7TJ7h-BknBHH4KRFwNs7vy9YRNNz86SOsS0rABNEqg5" alt="Bruce Willis Going Through &quot;Really Difficult Times&quot;: Sylvester Stallone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The National Health Service (NHS) of the UK defines aphasia as a psychological condition in which a person has trouble speaking and understanding.</p></div>
            </div>
        </a><a href='https://dailytimes.com.pk/1028834/sylvester-stallone-says-bruce-willis-is-having-tough-time-with-aphasia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvester Stallone says Bruce Willis is having &#39;tough time&#39; with aphasia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhQeLTeqRG4-H3FZzFnH0Rzz9iFZ72mtnAcgBGn11V1wQDJ0d0QgUdg5q6w06ZNhYUa_d83nzS" alt="Sylvester Stallone says Bruce Willis is having &#39;tough time&#39; with aphasia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Action star Bruce Willis has been having a &#39;tough time&#39; with his aphasia diagnosis, friend and co-actor Sylvester Stallone told Hollywood Reporter.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/health/bruce-willis-going-through-a-tough-time-with-aphasia-friend-sylvester-stallone-know-all-about-the-speech-disorder-article-95571609'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis going through a tough time with aphasia: friend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsG_Z2FUAjBvDVAodYwwPf5wjF27LBGOQ56GMFWKffI3om5FubvK3Hnf1W9WIJbwkxjZa9UnuG" alt="Bruce Willis going through a tough time with aphasia: friend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aphasia is a psychological condition that affects a person&#39;s speech and communication. Read to know all about the ailment that can be caused due to stroke or&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indulgexpress.com/sex-health/wellness/2022/nov/17/learn-more-about-aphasia-the-physiological-condition-bruce-willis-was-diagnosed-with-45509.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Learn more about aphasia, the physiological condition Bruce Willis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwFmHWBFM_13pJTDZ8uu7ES7F_Gqq_Vj6ULHFWZ2MCqVPknT80IXZ2_QGvbjBNpDHnTuW7B33v" alt="Learn more about aphasia, the physiological condition Bruce Willis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hollywood actor Bruce Willis announced in March 2022 that he was suffering from a physiological condition called Aphasia. Due to the illness, the star&nbsp;...</p></div>
            </div>
        </a><a href='https://gulfnews.com/entertainment/hollywood/hollywood-star-sylvester-stallone-says-actor-bruce-willis-is-having-a-tough-time-with-his-aphasia-1.1668691219111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hollywood star Sylvester Stallone says actor Bruce Willis is having a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXHBO6bVZ6Gj9SIySDeK44DQDSccHgAowrMvgGLCJnxM2zCI_Vt5SVYzURmluSq3fwlvsUfsXk" alt="Hollywood star Sylvester Stallone says actor Bruce Willis is having a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Die Hard&#39; actor was diagnosed with the condition in March.</p></div>
            </div>
        </a><a href='https://english.jagran.com/entertainment/sylvester-stallone-says-bruce-willis-is-going-through-tough-time-with-aphasia-10054557'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sylvester Stallone Says Bruce Willis Is Going Through &#39;Tough Time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcK1fyFCM6hyQSPxP4iEx5t8rdZVcHaAPo6L77fgJKLSro2g-Xku4Lw556ATC2CEqPAMTJfiou" alt="Sylvester Stallone Says Bruce Willis Is Going Through &#39;Tough Time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American actor Sylvester Stallone recently revealed that his friend Bruce Willis is having a tough time with Aphasia. Here&#39;s all you need to know about this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latestly.com/socially/social-viral/fact-check/special-thank-you-to-the-reader-who-alerted-us-to-a-deceitful-facebook-post-that-read-latest-tweet-by-snopes-com-2-4473535.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Special &quot;thank You&quot; to the Reader Who Alerted Us to a Deceitful ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdbe6VQMVV4Mrj5TbrzRjmx8c16rwp6A3FJZSJJrRJF23gLI28a34d-rYyCYP7lX6BhrCgOAjk" alt="Special &quot;thank You&quot; to the Reader Who Alerted Us to a Deceitful ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest Tweet by snopes.com states, &#39;Special &amp;quot;thank you&amp;quot; to the reader who alerted us to a deceitful Facebook post that read: &amp;quot;We announce&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}