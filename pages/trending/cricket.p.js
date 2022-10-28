import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/27/600x338/women-cricket_1666855607857_1666855608242_1666855608242.jpg" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/sports/cricket-news/bcci-announces-equal-match-fee-for-men-and-women-cricketers-here-s-how-much-they-will-get-11666855022192.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI announces equal match fee for men and women cricketers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpRvnvwd1Rg08geYB7pv7P5yGBwgg9vPoMbNQMUmKkSMp68YU8VgXqQCO0gDorEIbAKgWN1BYO" alt="BCCI announces equal match fee for men and women cricketers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian women cricketers will be paid the same match fee as their male counterparts. .For test cricket match, the fee will be ₹15 lakh, for One Day&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/men-women-cricketers-to-get-equal-match-fees-101666895329358.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Men, women cricketers to get equal match fees</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRm-Soxn4GKtNDGQDU2fwngUj7Si5k0QgBeNgEljAfy6vDq4lDat6lyAmqfmjUbVaKLEYEFCsvt" alt="Men, women cricketers to get equal match fees" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From once being a cricket body reluctant to integrate women&#39;s cricket under its wings, the Board of Control for Cricket in India (BCCI) on Thursday took a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2876993'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI confirms equal match fees for India cricketers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSSrpoluOopNHkW4kJJHO5kpCwEJe8YOUn_kx4K_jVG-5RjsFXTAWKz-I8Dy8adBF2q6oA9FTz5" alt="BCCI confirms equal match fees for India cricketers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BCCI secretary Jay Shah confirmed that India&#39;s women cricketers would earn the same match fees as their male counterparts in international matches going&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/bcci-announces-pay-equality-for-women-internationals-8232746/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI bats for pay parity, same match fees for women &amp; men: &#39;New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNuf06Av19Yerz5blMptiLZOxMDG2PNsD8jaBTwymg4WYXF-cJx6P8zSWsmFl2CFf1Fo3Dl6kF" alt="BCCI bats for pay parity, same match fees for women &amp; men: &#39;New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IN A significant decision, the Board of Control for Cricket in India (BCCI) on Thursday announced a “pay equity policy”, saying that its&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/both-men-and-women-cricketers-will-be-paid-same-match-fee-says-jay-shah/article66060023.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI implements equal match fees for both men and women ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTroQMKH-cmoKheOKLRqMmi4Vzm79SjZAB-TONd-c2HWRirJ4pksK6l3MiYpGLP-tdKUdSA1dca" alt="BCCI implements equal match fees for both men and women ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Shah said &quot;Pay equity was my commitment to our women cricketers and I thank the apex council for their support.&quot;</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/indias-female-cricketers-to-earn-same-amount-of-match-fees-as-the-men-announces-jay-shah-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India&#39;s female cricketers to earn same amount of match fees as the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGGUpmMm-gT3KcBSjMoM6IUCaDv4VEvs9v_IkqI7JF-WmzQvKD8SXB_IJ-6qy6qYirJYeD0Y_j" alt="India&#39;s female cricketers to earn same amount of match fees as the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai: In a landmark moment to tackle gender &#39;discrimination&#39; in cricket, Jay Shah, the Secretary of the Board of Control for Cricket in India (BCCI),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.herzindagi.com/hindi/society-culture/indian-men-and-women-cricket-needs-more-similarities-article-212053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>देर आए दुरुस्त आए BCCI, पर अभी भी महिला क्रिकेट टीम की लंबी जंग है बाकी</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCqtmBBkJobOyBW-Fe2wlplmHov_dAFm_sV-Nrslpjh8THUkiGZ-gWai8078Qtm1quL27nz7ar" alt="देर आए दुरुस्त आए BCCI, पर अभी भी महिला क्रिकेट टीम की लंबी जंग है बाकी" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BCCI की तरफ से भारतीय महिला क्रिकेट टीम की सैलरी में बढ़ोतरी की गई है और ये बहुत ही अच्छा&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usacricket.org/media-release/usa-cricket-announces-inaugural-annual-volunteer-of-the-year-award-winners/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA Cricket Announces Inaugural Annual Volunteer of the Year ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4PqdJEmljAioOmx5VGHUbuhAkxAUOF_1NoiJ7YJ-TSHs-R9q7cil3uawasL5f5-QswV5pk5i2" alt="USA Cricket Announces Inaugural Annual Volunteer of the Year ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USA Cricket is delighted to announce the winners of its inaugural Volunteer of the Year Awards that recognize the commitment, dedication, and excellence&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-india-cricket-men-and-women-cricketers-to-receive-same-pay-says-bcci-secretary-jay-shah-7271241.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>महिला और पुरुष क्रिकेटरों को मिलेगी बराबर मैच फीस, BCCI सचिव जय शाह ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4iecK3IFZp2uF-n030dsrTOYrRvJWvhJKEG5e40mipJuU6Wl_5x5pBUWRG24J71LGQoL5Q94t" alt="महिला और पुरुष क्रिकेटरों को मिलेगी बराबर मैच फीस, BCCI सचिव जय शाह ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बीसीसीआई सचिव जय शाह ने बड़ा ऐलान करते हुए कहा कि भारत के पुरुष और महिला खिलाड़ियों को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/bcci-women-cricketers-match-fee-same-as-male-counterparts-bcci-central-contract-2022-salary-difference-updates-tspo-1563226-2022-10-27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BCCI Womens Cricketer Income: कितने गुना बढ़ गई महिला क्रिकेटर्स ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXgtGJgIZZ31yUv5xu8-afnZBzz9et69A66imeTRV8rhRxAG8DKZFLNb7EEmvLbj7gSIXft1PH" alt="BCCI Womens Cricketer Income: कितने गुना बढ़ गई महिला क्रिकेटर्स ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारतीय क्रिकेट बोर्ड ने गुरुवार को एक ऐतिहासिक फैसला सुनाया है. बीसीसीआई एक नई पॉलिसी&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}