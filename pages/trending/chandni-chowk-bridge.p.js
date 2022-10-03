import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chandni Chowk Bridge</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chandni Chowk Bridge"/>
        <meta name="description" content="Trending News about Chandni Chowk Bridge" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chandni Chowk Bridge</h1>
            <Image width={800} height={500} src="" alt="Chandni Chowk Bridge"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cities/pune-news/chandni-chowk-bridge-demolished-but-bigger-challenge-lies-ahead-101664734796231.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chandni chowk bridge demolished but bigger challenge lies ahead</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDvUVDSwR7OqHJVK7yJPi7_xqvqJPFh65FbBhSFioqvwEOKykwPqjml4s3fVdUN4e9xABbb3K9" alt="Chandni chowk bridge demolished but bigger challenge lies ahead" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The challenge is to speed-up the work of constructing and extending the lanes of the highway road in the next eight days.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/watch-pune-s-old-bridge-in-chandani-chowk-demolished-through-controlled-implosion-11664670192142.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Pune&#39;s old bridge in Chandani Chowk demolished through ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7yWIdqk7gtJwRX4sKkkfu55L6xUpZjXfvSUhsWHSn2H-4SBrbOi1p9ZseXUA7AeEK5E44qCzO" alt="Watch: Pune&#39;s old bridge in Chandani Chowk demolished through ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A team of Edifice Engineering that demolished Noida&#39;s Supertech Twin Towers, carried out the demolition of the bridge along with the NHAI authorities.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/pune/pune-chandani-chowk-bridge-demolition-mumbai-bengaluru-highway-traffic-resumes-8185659/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Traffic on Mumbai-Bengaluru highway resumes after Pune&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvrQrh5rT7tyw0Hm1x8iPMdY2BYBxK-s-hQFEUFAPhdaMD0e0oEOhLVqB5sZjdSc6fO-iAgPYt" alt="Traffic on Mumbai-Bengaluru highway resumes after Pune&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Although the authorities had earlier announced that the traffic through the stretch will be reinstated at 8 am, it was delayed by a few hours as the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/maharashtra/maharashtra-chandni-chowk-bridge-of-pune-demolished-at-midnight-operation-was-not-completely-successful-2228519'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: आधी रात को ढहा दिया गया पुणे का चांदनी चौक पुल, पूरी तरह से सफल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbzo-iS4yQ3PZORuio-eSv-L5ta0ZIpaWQ87i4WhaLXeOfIgRJttNDuWBXPl5SKEedl0s5t9lF" alt="Watch: आधी रात को ढहा दिया गया पुणे का चांदनी चौक पुल, पूरी तरह से सफल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pune News: पुणे स्थित चांदनी चौक पुराने पुल को गिरा दिया गया है. बीती रात 2 बजे इसे ब्लास्ट&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/chandni-chowk-bridge-of-pune-to-be-demolished-tonight'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pune: नोएडा के ट्वीन टावर की तर्ज पर आज रात गिराया जाएगा पुणे का चांदनी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtQfEU9fSrVofZ619WQua7nCJh8hXfx48yfJ56S937jnx93Rk-EUiAwaBK0Q6G_shsmcauqaV6" alt="Pune: नोएडा के ट्वीन टावर की तर्ज पर आज रात गिराया जाएगा पुणे का चांदनी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>महाराष्ट्र के पुणे का पुराना व जर्जर चांदनी चौक ब्रिज आज आधी रात के बाद ढहाया जाएगा।</p></div>
            </div>
        </a><a href='https://indtoday.com/chandani-chowk-bridge-demolition-takes-longer-than-expected-traffic-remains-shut-for-a-few-more-hours/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chandani Chowk bridge demolition takes longer than expected ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2qNiodDUanpwvTksRM_GS453qzVKavRolp8NsLuLk79RXQTDHD20GvXFMXCaa6K9XHzzMNEr9" alt="Chandani Chowk bridge demolition takes longer than expected ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pune: An old bridge in Pune&#39;s Chandani Chowk area was demolished through a controlled implosion at 1 am on Sunday.</p></div>
            </div>
        </a><a href='https://bharat.republicworld.com/india-news/general-news/pune-bridge-demolition-the-chandni-chowk-bridge-in-pune-was-demolished-this-is-a-big-reason-to-destroy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pune Bridge Demolition: पुणे का Chandni Chowk ब्रिज हुआ जमींदोज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbNrkk75b-dK1g3tdwyAm486g5Y-vQNpBIgQczpvZbrMT78l7fgcPnsQ3600bGCh-jeo19R8kU" alt="Pune Bridge Demolition: पुणे का Chandni Chowk ब्रिज हुआ जमींदोज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pune Chandni Chowk Bridge: पुणे में चांदनी चौक ब्रिज को 2 अक्टूबर की सुबह ब्लास्ट तकनीकी से&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/india/punes-chandani-chowk-bridge-demolished-in-controlled-explosion-watch-10050749'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pune&#39;s Chandani Chowk Bridge Demolished In Controlled ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCInJjw_WHfVR4PeLOX85SHQ5TW2OT1tf7SkOLoGxhiRnxQumG0sW_rMvc-VfR040JxRINIPfk" alt="Pune&#39;s Chandani Chowk Bridge Demolished In Controlled ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An old bridge on National Highway 4 (Pune Banglore highway) was demolished on Sunday night through a controlled impulsion, the demolition of the bridge (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.punekarnews.in/pune-old-bridge-at-chandni-chowk-demolished-delay-in-road-opening/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pune: Old Bridge At Chandni Chowk Demolished, Delay In Road ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcvOYdDr7QOA8TzlABHmhxVICYbNGMj2Umevh1IuXH7gDyBHJXoDXRIwSg7tgIQpPQH4hMlQa1" alt="Pune: Old Bridge At Chandni Chowk Demolished, Delay In Road ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Punekarnews.in is the first and only English language hyper-local news portal of Pune and Pimpri Chinchwad. It was launched in July 2015.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/nation/watch-video-in-5-second-chandni-chowk-bridge-in-pune-demolished-600-kilogram-explosive-fit-at-1300-places-know-more-nodmk3-4679815.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO: नोएडा ट्विन टावर की तर्ज पर पलक झपकते ही पुणे का चांदनी चौक ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWiM-kEPHpJkvnwT0J8ieZ27meDTk8YJQUIiKAOb8RHCwbzwL4_1kEa9RkyPJUtjzd3Bb7X9yC" alt="VIDEO: नोएडा ट्विन टावर की तर्ज पर पलक झपकते ही पुणे का चांदनी चौक ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chandni Chowk Bridge Blast: दशकों पुराने चांदनी चौक पुल को आखिरकार ध्‍वस्‍त कर दिया गया.</p></div>
            </div>
        </a>
        </Template></>;
}