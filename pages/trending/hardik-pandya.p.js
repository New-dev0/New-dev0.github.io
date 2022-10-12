import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hardik Pandya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hardik Pandya"/>
        <meta name="description" content="Trending News about Hardik Pandya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hardik Pandya</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/11102022/11_10_2022-hardik_pandya_team_india_all_rounder_23132498.jpg" alt="Hardik Pandya"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/cricket/headlines-happy-birthday-hardik-pandya-most-promising-all-rounder-of-team-india-who-can-be-x-factor-in-t20-world-cup-turn-29-year-today-23132498.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Happy Birthday Hardik Pandya: 29 के हुए हार्दिक, वर्ल्ड कप में इंडिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHOvBs9NrJuGWCZ1uoHSm5iuDkrkwgfinMbCQV9RxM635kfnTqJ9sQiXTLOczn3ep090d661WE" alt="Happy Birthday Hardik Pandya: 29 के हुए हार्दिक, वर्ल्ड कप में इंडिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Happy Birthday Hardik Pandya टीम इंडिया के ऑलराउंडर हार्दिक पांड्या आज 29 साल के हो गए हैं।</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/hardik-pandya-birthday-virat-kohli-kl-rahul-dinesh-karthik-krunal-pandya-natasa-stankovic-wishes-hardik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Birthday: विराट-राहुल समेत इन खिलाड़ियों ने हार्दिक को दी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6Fi1jg6D_MFRxiyAVv5dTiGVyqV7mmLK92hptdK6LiL9Bsf5Pju_uNtylGPO_mSdqujBwhdko" alt="Hardik Birthday: विराट-राहुल समेत इन खिलाड़ियों ने हार्दिक को दी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hardik Pandya Birthday Virat kohli KL Rahul Dinesh karthik Krunal pandya natasa stankovic wishes hardik: हार्दिक आगामी टी20 वर्ल्ड कप&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onmanorama.com/sports/cricket/2022/10/11/hardik-pandya-celebrates-birthday.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya celebrates birthday | Cricket News | Onmanorama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpNB7uNuQgkSYbDu3deTJsgaAsw8yLASI0VlECeYYYYER2tf82xnT2xkjxIur7N2Nw3MwyHlHE" alt="Hardik Pandya celebrates birthday | Cricket News | Onmanorama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The BCCI took to Twitter to greet the Baroda all-rounder..Hardik Pandya. birthday. Team India. T20 World Cup.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-hardik-pandya-misses-his-son-agastya-on-birthday-calls-him-the-best-gift-i-have-received-watch-video-4725823.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya Birthday: हार्दिक पंड्या बर्थडे पर सबसे ज्यादा मिस कर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3A3xEqBsXObyUtCzyoMnCWQWlT5ULrOXvNfE-VligQfS56lqUWqXgKuPG6gYR1Iz3Cd4-tLkX" alt="Hardik Pandya Birthday: हार्दिक पंड्या बर्थडे पर सबसे ज्यादा मिस कर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hardik Pandya 29th birthday: टीम इंडिया के सुपरस्टार ऑलराउंडर खिलाड़ी हार्दिक पंड्या अपने 29वें&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/happy-birthday-hardik-pandya-son-agastya-give-birth-gift-pandya-wife-natasa-stankovic-tspo-1553891-2022-10-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Happy Birthday Hardik Pandya: 2 साल के बेटे से मिला अनमोल बर्थडे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlvTYWFutCq-XD3uebl6k2XskglqqQtJY1ny957RY_4E6Wztajjnnst_pL9-QoOwKrAOoVfReq" alt="Happy Birthday Hardik Pandya: 2 साल के बेटे से मिला अनमोल बर्थडे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया के स्टार ऑलराउंडर हार्दिक पंड्या आज (11 अक्टूबर) अपना 29वां बर्थडे सेलेब्रेट&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/sports/cricket/cricket-news/natasa-stankovic-shares-special-message-to-hardik-pandya-on-his-birthday/articleshow/94776947.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya Birthday: हार्दिक पंड्या पर नताशा स्टेनकोविक ने भर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTu8NQyUyr4ZR8yHHeLqjflh2dXlm5VevAJVDu5r_SYKcWhTFYrwXmBQtFg3qLGXOI6-OciQigy" alt="Hardik Pandya Birthday: हार्दिक पंड्या पर नताशा स्टेनकोविक ने भर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Happy Birthday Hardik Pandya: हार्दिक पंड्या के लिए उनकी वाइफ नताशा ने एक वीडियो शेयर किया है।</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/trending/sports/happy-birthday-hardik-pandya-fans-remember-his-innings-against-pakistan-in-asia-cup-99453'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya Birthday: 29 साल के हुए &#39;कुंग फू पंड्या&#39;, फैंस ने क्यों याद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSK-RsVbl9ZVTNB7CI2cbzVPvad17YYjPdiDmPu2xZGKdhy5jwxNTF8NPQj5h0SqPsZCz2l3JkS" alt="Hardik Pandya Birthday: 29 साल के हुए &#39;कुंग फू पंड्या&#39;, फैंस ने क्यों याद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हार्दिक को फैंस कुंग-फू पंड्या (Kung Fu Pandya) भी कहते हैं. बर्थडे पर सोशल मीडिया पर फैंस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/cricketnext/news/forever-by-your-side-natasa-stankovic-wishes-hardik-pandya-on-his-birthday-watch-6142381.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Forever By Your Side&#39; - Natasa Stankovic Wishes Hardik Pandya on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRghX57IbYyijM-7kM9E-RP2IMUSSj11doJ6XIqh38AYbn1T3y-ox7dOHLSX08ctpTmfVBtSBBa" alt="&#39;Forever By Your Side&#39; - Natasa Stankovic Wishes Hardik Pandya on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian cricketer Hardik Pandya celebrated his 29th birthday on October 11. The cricketer received loads of wishes from friends, family and fans on his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/bollywood/natasa-stankovic-wishes-hardik-pandya-on-birthday-with-family-pics-videos-with-son-watch-101665466646773.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Natasa Stankovic wishes Hardik Pandya on birthday with family pics ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSq8gIQjOPGB-IJpzx7lrosUuxDn8jpdhwHQYlvcmdksNEwKU1Eauc4LG1CZHnvtGgJYdEwSUzF0Q" alt="Natasa Stankovic wishes Hardik Pandya on birthday with family pics ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Natasa Stankovic shared Instagram Reels for cricketer-husband Hardik Pandya&#39;s 29th birthday on Tuesday. The video comprised of their beautiful family&nbsp;...</p></div>
            </div>
        </a><a href='https://telugu.news18.com/news/sports/t20-world-cup-2022-hbd-hardik-pandya-team-india-all-rounder-emotional-post-goes-viral-srd-1466548.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hardik Pandya: అయ్యో, హార్దిక్ కి ఎంత కష్టమొచ్చింది.. తీవ్రబాధలో ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQk1qjCn23soBzhm4adOolwHdsEWCdNVxOuPlPprL-SDNazYMEIzFjO5DfWPmKwNZ4JsvP_DbOv" alt="Hardik Pandya: అయ్యో, హార్దిక్ కి ఎంత కష్టమొచ్చింది.. తీవ్రబాధలో ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022 HBD Hardik Pandya Team India All Rounder Emotional Post Goes Viral srd - Hardik Pandya: ప్రస్తుతం టీమిండియాతో&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}