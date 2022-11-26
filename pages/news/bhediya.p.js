import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bhediya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bhediya"/>
        <meta name="description" content="Trending News about Bhediya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bhediya</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Nov/1669407716_new-project-2022-11-26t015135-394.jpg" alt="Bhediya"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/entertainment/bhediya-is-a-one-time-watch-for-varun-dhawans-hot-bod-and-has-good-news-for-stree-fans/cid/1900270'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya is a one-time watch for Varun Dhawan&#39;s hot bod</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSetcerBiMqIpkoguPo_Dj9iDdA0Bf-H_F3yVaSpRpU6Q2s5WpIKYD8NEO-bCUDRpIFSdEktTSq" alt="Bhediya is a one-time watch for Varun Dhawan&#39;s hot bod" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The film is indeed a metaphor for coronavirus that virtually brought life to a full stop for close to two years.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/navbharatgold/breaking-news-in-hindi/varun-dhawan-and-kriti-senon-starrer-bhediya-movie-review-in-hindi/story/95753325.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Movie Review: कैसी है वरुण धवन और कृति सेनन की फिल्म &#39;भेड़िया&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_Uj1EkFmQgj2ZkvPa1BxoRxv1IJ7pdsNJQ5KQUCBJnll_0cge-KnpN69cIyQbqsmSKTWtJ8Kf" alt="Bhediya Movie Review: कैसी है वरुण धवन और कृति सेनन की फिल्म &#39;भेड़िया&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bhediya Movie Review in Hindi: हॉरर और कॉमिडी के कॉम्बिनेशन को फिल्मकार हमेशा से रिस्की मानते रहे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/entertainment/bollywood/bhediya-box-office-collection-day-one-varun-dhawan-kriti-sanon-abhishek-banerjee-movie-friday-earnings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Box Office Collection: बॉक्स ऑफिस पर &#39;भेड़िया&#39; की सधी हुई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfApkiv3DfQEVeLwefLFJ7nxzSeljItZWwPrif5wWEd-CXXfKyasyyrdet4XTXQhxLYRXQFTwV" alt="Bhediya Box Office Collection: बॉक्स ऑफिस पर &#39;भेड़िया&#39; की सधी हुई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वरुण धवन स्टारर &#39;भेड़िया&#39; ने सिनेमाघरों में दस्तक दे दी है। आज ( 25 नवंबर ) रिलीज हुई इस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/entertainment/box-office-bhediya-box-office-collection-day-1-varun-dhawan-kriti-sanon-starrer-bhediya-gets-a-good-opening-earn-more-than-7-crore-on-first-day-23228432.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Box Office Collection Day 1: वरुण की भेड़िया को मिली बढ़िया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_ayROTtFd_B09xex1WKywSyWNQXnrbddob8dsGEwnBE7at0qlPIsFrSsA5NhT4Z3sEe67MfRn" alt="Bhediya Box Office Collection Day 1: वरुण की भेड़िया को मिली बढ़िया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ट्रेलर रिलीज के साथ ही दर्शकों में फिल्म का काफी क्रेज है। लोग &#39;भेड़िया&#39; बने वरुण धवन को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/entertainment/film-review/story/bhediya-film-review-varun-dhawan-kriti-sanon-comedy-powerful-message-tmovh-1583008-2022-11-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Film Review: &#39;भेड़िया&#39; बनकर वरुण धवन ने जीता दिल, VFX ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXagcj1sB-Zj88eNQ30VNC7Om2gwDB1jEOhhT5nqm1gLSWYcHOpEMNh5hmctBErnv2rpyI9dGi" alt="Bhediya Film Review: &#39;भेड़िया&#39; बनकर वरुण धवन ने जीता दिल, VFX ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वरुण धवन की फिल्म भेड़िया रिलीज हो गई है. इसमें वे इच्छाधारी भेड़िया बने हैं.</p></div>
            </div>
        </a><a href='https://www.koimoi.com/reviews/box-office-reviews/bhediya-box-office-review-varun-dhawans-monster-inside-me-show-isnt-a-monster-for-ticket-windows/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Box Office Review: Varun Dhawan&#39;s &#39;Monster Inside Me ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJ-CaslNhxuLjbLi9NG57dSKMpVX_3Hdw5pe8d90U3QnDuGxVCOyeDznUH1V5smCxUkFX621HI" alt="Bhediya Box Office Review: Varun Dhawan&#39;s &#39;Monster Inside Me ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Star cast: Varun Dhawan, Abhishek Banerjee, Kriti Sanon, Paalin Kabak, Deepak Dobriyal &amp; Saurabh Shukla. Director: Amar Kaushik. Producers: Dinesh Vijan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/movie-review/entertainment/movie-review-bhediya-movie-review-hindi-varun-dhawan-kriti-senon-abhishek-banerjee-2267007'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya Movie Review: दमदार है वरुण-कृति की &#39;भेड़िया&#39;, अभिषेक बनर्जी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzjDLtDHChjr7F4N6m27UzCi8QhXmSm7hPePnQhiYOyWdCIYYHGSDwFW9F1H2eq8Ja1US9se3r" alt="Bhediya Movie Review: दमदार है वरुण-कृति की &#39;भेड़िया&#39;, अभिषेक बनर्जी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bhediya Movie Review: वरुण धवन और कृति सेनन की ये फिल्म दमदार है, अभिशेक बनर्जी ने लूट ली महफिल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/bollywood/bhediya-movie-review-varun-dhawan-starrer-is-high-on-comedy-and-novelty-101669346535183.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya movie review: Varun Dhawan-starrer is high on comedy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWXH-MPXz2IVbwUkPJLN11-jFvHL5K49A2B-HzzkpDTV4RHxeSWdhu8CT9kZfEFUreX1VgQj7k" alt="Bhediya movie review: Varun Dhawan-starrer is high on comedy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bhediya movie review: The Amar Kaushik directorial is an immersive experience with intense but funny dialogues and clever writing.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/movie-review/bhediya-movie-review-varun-dhawan-kriti-sanon-amar-kaushik-8288772/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bhediya movie review: This Varun Dhawan-Kriti Sanon rumble in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8Lu-VqMIbC7_qN3LQ1CGc5TxgIGu_McqFOuD_tpVYnOsMzGt4JFd9ZKNOKpWjHXSHYkrDARFL" alt="Bhediya movie review: This Varun Dhawan-Kriti Sanon rumble in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bhediya movie review: Varun Dhawan does a good job of aligning with the tone of the film-- the horror is pretty much &#39;naam-ke-vaaste&#39;, comedy is what it is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/entertainment/movies/bhediya-movie-review-varun-dhawans-creature-comedy-is-a-modern-day-fable-with-a-timely-message/article66182666.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Bhediya&#39; movie review: Varun Dhawan&#39;s creature comedy is a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSea-7XF0wxx6Uq13uxhsDYLnTCtu3J2x0L6HVaQF5_0SqDk6PvabBxkRTqpdukRiWuTPu5AFg6" alt="&#39;Bhediya&#39; movie review: Varun Dhawan&#39;s creature comedy is a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ensconced between layers of fun and fantasy, director Amar Kaushik and writer Niren Bhatt explore the fun side of fables and punctuate the storyline with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}