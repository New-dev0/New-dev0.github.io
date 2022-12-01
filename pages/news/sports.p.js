import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/30/1600x900/Joy_Bhattacharjya_1669805172424_1669805183033_1669805183033.jpg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/sports/others/fantasy-sports-is-single-biggest-fan-engagement-tool-for-sports-leagues-joy-bhattacharjya-101669804752017.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fantasy Sports is single biggest fan engagement tool for sports ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSF0ggIB-NqzH1rkyC79cRBcjw3QvxMXGyDqv9TGE03PqUdnPk41juOpxNakOtee-io0EwvzsKR" alt="&#39;Fantasy Sports is single biggest fan engagement tool for sports ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joy Bhattacharjya, director general, Federation of Indian Fantasy Sports and Amit Purohit, CEO and founder, Fantasy Akhada engaged in a deep discussion on how&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/sports/president-droupadi-murmu-presents-national-sports-awards-2022-to-players-and-coaches-see-complete-list'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports Awards: शरत कमल खेल रत्न बनने वाले दूसरे टेबल टेनिस खिलाड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZruE39sMRaT-cpOorg7FmA8shjqzsrbQQgtmMuynZocD9oHkkNM7mkmtFp3KsvY7OLm3Nk0EX" alt="Sports Awards: शरत कमल खेल रत्न बनने वाले दूसरे टेबल टेनिस खिलाड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>राष्ट्रपति द्रौपदी मुर्मू ने खेल जगत में उत्कृष्ट प्रदर्शन करने वाले 30 खिलाड़ियों को&nbsp;...</p></div>
            </div>
        </a><a href='https://thelivenagpur.com/2022/11/30/hanuman-sports-academy-felicitated-naina-m-gokhale/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hanuman Sports Academy felicitated Naina M. Gokhale - The Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOMvFweucEfockQxopwUGK7Bq6M7VolF-5apFoq90REO5T6Mr3E0cufyaqyhy5Giiv4EiBY4O-" alt="Hanuman Sports Academy felicitated Naina M. Gokhale - The Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Naina M. Gokhale bagged 4 gold medals (45-49) in 50m, 100m free style and 50m, 100m Breast stroke along with 2 silver in 4X50m Free style relay,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailypioneer.com/2022/state-editions/odos-to-make-up-number--one-in-country-in-sports.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ODOS to make UP number one in country in sports</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ODOS to make UP number one in country in sports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In his mission to promote sports and sportspersons of Uttar Pradesh, Chief Minister Yogi Adityanath has launched the One District One Sport (ODOS) scheme on&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/achanta-sharath-kamal-bestowed-with-khel-ratna-in-glittering-national-sports-awards-ceremony-8298886/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Achanta Sharath Kamal bestowed with Khel Ratna in glittering ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbJmOAbN_1Ped8nTuO3knEdyqUyp3-iEXW0-anyTqdrhCYUWtAiPevkQAw_-ddidPGExPto9iB" alt="Achanta Sharath Kamal bestowed with Khel Ratna in glittering ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sreeja, who partnered with Sharath to win the mixed doubles gold in Birmingham, described the moment as unforgettable.</p></div>
            </div>
        </a><a href='https://www.daijiworld.com/news/newsDisplay?newsID=1024864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sharath Kamal, Lakshya Sen, Nikhat Zareen and others get ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPkogzHgVmshTxPCnqy8nL2Rbn2W9APQzbqIyHxjD0pXt1ziqVa9XsK4bp_6nPF9Wa0TDMdlzW" alt="Sharath Kamal, Lakshya Sen, Nikhat Zareen and others get ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi, Nov 30 (IANS): President Droupadi Murmu on Wednesday conferred national sports awards to Indian table tennis veteran Sharath Kamal, boxing world&nbsp;...</p></div>
            </div>
        </a><a href='https://www.drishtiias.com/daily-updates/daily-news-editorials/role-of-sport-in-aspirational-india'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Role of Sport in Aspirational India</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Role of Sport in Aspirational India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pursuing sports as a career face numerous obstacles in India, including socio economic problems that hinder a huge chunk of India&#39;s young aspiring&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/other-sports/indian-sports-news-wrap-november-30/article66205058.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian Sports News Wrap, November 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRt_qLZ0I72kBNSbsW5jUzcSRI3nqndNpCM_KD6RV2YWTauAbbcadVbgt8Yblydn4lCfkstpai" alt="Indian Sports News Wrap, November 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Khel Ratna: Sharath Kamal (table tennis). Dronacharya: Dinesh Jawahar Lad (cricket), Bimal Ghosh (football), Raj Singh (wrestling), Jiwanjot Singh Teja (archery)&nbsp;...</p></div>
            </div>
        </a><a href='https://newsonair.com/2022/11/30/national-sports-awards-2022-sharath-kamal-conferred-with-major-dhyan-chand-khel-ratna-award/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>National Sports Awards 2022: Sharath Kamal conferred with Major ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgNsm5uThRENqNIvOjyPIaoiKjtL4f4oU3ljECdSU0g5DsX2zp2c9L80qmBH4XGmg21TIiEyan" alt="National Sports Awards 2022: Sharath Kamal conferred with Major ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sharath Kamal, the record-breaking Indian table tennis player becomes the sole recipient of India&#39;s highest sporting honour this year.</p></div>
            </div>
        </a><a href='https://www.aninews.in/news/sports/others/union-sports-minister-anurag-thakur-mos-nitish-pramanik-meet-national-sports-awardees20221201021151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Union Sports Minister Anurag Thakur, MoS Nitish Pramanik meet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_xAwIA--ZwAcakEdMsRn1OKBAdHN70DSwQUFDBQn_iLH9SBdylRoSzmjjNQ1MHRX0k7yt1oJ_" alt="Union Sports Minister Anurag Thakur, MoS Nitish Pramanik meet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The President of India, Droupadi Murmu presented the National Sports and Adventure Awards 2022 (Major Dhyan Chand Khel Ratna Awards-2022,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}