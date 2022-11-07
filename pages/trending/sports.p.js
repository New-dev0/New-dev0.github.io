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
            <Image width={800} height={500} src="" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/bihar/purnia/story-hariom-sports-academy-won-the-series-3-2-7317734.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>हरिओम स्पोर्ट्स अकादमी ने 3-2 से जीता सीरीज</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvY4r5VCja-8divEhoM_qAbsDxYBZ9Iu-xrKGLZmbccHxBfcsRhqtZveWmx6-O0OV-G78lmowN" alt="हरिओम स्पोर्ट्स अकादमी ने 3-2 से जीता सीरीज" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जिला स्कूल खेल मैदान में भूतपूर्व मुख्यमंत्री स्व. भोला पासवान शास्त्री क्रिकेट सीरीज&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/haryana/karnal-amazing-archer-daughter-of-kalpana-chawla-city-karnal-riddhi-and-isha-won-medals-in-goa-23185829.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports News: कल्पना चावला के शहर की तीरंदाज बेटी का कमाल, रिद्धि और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyv6ZHe1kApApEgLoQ6sYI_32LPF9uMLli8zvMbdGaB6U5Ye8BDEIPdShPHm_aKVfjJiAr5BOI" alt="Sports News: कल्पना चावला के शहर की तीरंदाज बेटी का कमाल, रिद्धि और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कल्‍पना चावला के शहर करनाल की दो बेटियों रिद्धि और ईषा ने कमाल कर दिया।</p></div>
            </div>
        </a><a href='https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-721637'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Israel to host 5th annual Sports Tech Nation Summit in Tel Aviv</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbbHLQEbwS2zQ8xFyDc8oRv67AZsSuvPBdBwF454O78FRdm3AAs5jlGu_li4OUXNj94mGmayW-" alt="Israel to host 5th annual Sports Tech Nation Summit in Tel Aviv" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All of this is with the hope of scoring this new goal: Turning the Start-Up Nation of Israel into the site for the future of sports innovation and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttar-pradesh/pilibhit/sports-pilibhit-news-bly503020985'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>एथलेटिक्स प्रतियोगिता : अव्यवस्थाएं आगे, खिलाड़ी पीछे</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQOarEn0aTMrrJtwHDx0iWKwbZTv9j5342L18J-MXZuSvJwfjWZPJJUPxPsyJlmUf2PSzTNA9dD" alt="एथलेटिक्स प्रतियोगिता : अव्यवस्थाएं आगे, खिलाड़ी पीछे" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पीलीभीत। न समय से प्रतियोगिता के बारे में जानकारी दी गई और न ही खाने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttar-pradesh/jalaun/sports-orai-news-knp726943180'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>राज्य स्तरीय चैंपियनशिप के लिए महिला और पुरुष टीम का चयन</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEJ70JAmoxyjFbsWOMlBWpcLaw0Rhpo11m26AZPJy2gUTJTtz-ylhLCBViS8OBRZtOkb1qeDJU" alt="राज्य स्तरीय चैंपियनशिप के लिए महिला और पुरुष टीम का चयन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>उरई। मऊ जिले में नौ से 13 नवंबर को होने वाली राज्य स्तरीय सीनियर महिल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.globaltimes.cn/page/202211/1278829.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Diplomats&#39; Sport Games Invitational 2022 concludes, facilitating ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSg8d5ZU811abDB6-jtmLJT6xunOGIuKv-lijzv5yaffflhTnsRW2Dn0Xc9WREdQ-Hi6R3RGbn" alt="The Diplomats&#39; Sport Games Invitational 2022 concludes, facilitating ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Diplomats&#39; Sport Games Invitational 2022 concluded in Beijing on Saturday, which witnessed the participation of 15 foreign embassies in Beijing,&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/auto/car-bikes/best-sports-bike-in-affordable-price-for-youth-see-tvs-bmw-bajaj-suzuki-yahama-honda-hero-ktm-sports-bikes/articleshow/95335687.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>युवाओं को पसंद आते हैं ये 10 स्पोर्ट्स मोटरसाइकल, स्टाइलिश लुक और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeoWTJZuscHhZE-hM7hUNWeS-Px7BWxXKhOy6yxK_SHCkBcXYa827f-1X7WQmbYL13YGJQGhTV" alt="युवाओं को पसंद आते हैं ये 10 स्पोर्ट्स मोटरसाइकल, स्टाइलिश लुक और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत में बजट स्पोर्ट्स मोटरसाइकल सेगमेंट में हीरो मोटोकॉर्प, बजाज, टीवीएस, सुजुकी,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttarakhand/champawat/sports-collage-wins-in-tanakpur-tanakpur-news-hld4811007116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>सीनियर बालक वर्ग में खेल कॉलेज देहरादून जीता</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTe-wE3CrpVBYMaxF2ISZUvNGMvMRGbYFJwBB7-x3nMjTV7AUDVeE_8DyFjSqqviFicDcAireog" alt="सीनियर बालक वर्ग में खेल कॉलेज देहरादून जीता" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>निर्णायक मनीष जोशी, भनु प्रकाश, तरुण बेलवाल, चंद्रा पांडेय, पंकज रा&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}