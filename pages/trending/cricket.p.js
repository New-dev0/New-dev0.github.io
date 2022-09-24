import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.usacricket.org/media-release/notice-of-usa-cricket-agm-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notice of USA Cricket AGM 2022 - USA Cricket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_61Zd1I5CDcyuPjEF9GtHFHEzn9plpRiUJeSPcL_IrJnkiP6VU-Thbe1DhhUVD5DhWwXtasXn" alt="Notice of USA Cricket AGM 2022 - USA Cricket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In accordance with the USA Cricket constitution, the 2022 Annual General Meeting of USA Cricket, will be held on Sunday, October 9th, at 3pm PST/6pm EST.</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/media-releases/2800653'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC U19 Men&#39;s Cricket World Cup 2024 Qualification continues as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHdwGLmWWlP4VMDtUk0MlVBfRHV_OpA5WmtSIjXk0eqQwkhrtJnjPhnI1QGl2k4eNrGKxx_VcC" alt="ICC U19 Men&#39;s Cricket World Cup 2024 Qualification continues as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ICC U19 Men&#39;s Cricket World Cup Asia Division 2 Qualifier takes place in Oman from 29 September to 7 October; Eight teams will compete for two places in the&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/photo-gallery-cricket-most-unique-records-and-stats-chris-gayle-sourav-ganguly-sunil-gavaskar/1365204'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cricket Records: क्रिकेट इतिहास के सबसे अजीबोगरीब रिकॉर्ड्स, सालों से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxpmZe2tAeXVyClEW4VVH-VDnlbCWMq15K-jq4cI7k1G2nkh3Ol3crwjU0qB3qBG3ztbySPvJL" alt="Cricket Records: क्रिकेट इतिहास के सबसे अजीबोगरीब रिकॉर्ड्स, सालों से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket Most Unique Records: खिलाड़ियों की दुनिया रिकॉर्ड्स के इर्द-गिर्द घूमती है. क्रिकेट में कई&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/telugu/sports/legends-league-cricket-viewership-legends-league-cricket-2022-recorded-16-million-plus-unique-viewers-in-india-77254'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Legends League Cricket Viewership: రికార్డ్ బ్రేకింగ్ వ్యూవర్‌షిప్‌ను ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBJU7OuBvTLISyYkhav6vJ5ObF6t9ex6LYGzm5oXLlhbUiCAiKeddiXViN0sjUKL1MQH3VeoY0" alt="Legends League Cricket Viewership: రికార్డ్ బ్రేకింగ్ వ్యూవర్‌షిప్‌ను ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Legends League Cricket 2022 Hits Record-breaking Viewership. భారత్‌లో జరుగుతున్న లెజెండ్స్‌ లీగ్‌ క్రికెట్ 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eenadu.net/telugu-news/sports/legends-league-cricket-hits-recordbreaking-viewership/0400/122181945'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Legends League Cricket: వ్యూవర్‌షిప్‌లో దూసుకుపోతున్న లెజెండ్స్‌ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRH2SA5EVtFLquiXyuUudfC_JhzRTWlVczj9DkPihPP1lcO_wx5es14GYOPX7nfnAM6f4_oEPN3" alt="Legends League Cricket: వ్యూవర్‌షిప్‌లో దూసుకుపోతున్న లెజెండ్స్‌ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>క్రికెట్ దిగ్గజం సచిన్‌ తెందూల్కర్‌ సహా దేశ విదేశాలకు చెందిన ఎందరో మహామహులు&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/moradabad-city-three-players-of-moradabad-division-selected-in-up-under-19-cricket-team-23094187.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moradabad News: यूपी अंडर-19 क्रिकेट टीम में मुरादाबाद मंडल के तीन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXpGRW2HWHT7ms1321JqvTvbmXG3lxwcsrbmL_eVm3k2HZh3cFwU55MVKFX0ltGVso0YKDPB79" alt="Moradabad News: यूपी अंडर-19 क्रिकेट टीम में मुरादाबाद मंडल के तीन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UP Under-19 Cricket Team उत्तर-प्रदेश क्रिकेट एसोसिएशन द्वारा यूपी अंडर-19 की टीम का चयन किया गया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttar-pradesh/siddharthnagar/district-cricket-team-become-winner-siddharthnagar-news-gkp4515594196'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>जिले की क्रिकेट टीम ने मंडल में मारी बाजी</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1yYQDgfNXUU3yB2Y_y7QfgRdDgHdxfXxaw3E26Iu-Ak8hVMFeKFl1SaERQPAqtfWFU1HXSopL" alt="जिले की क्रिकेट टीम ने मंडल में मारी बाजी" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>निर्णायक के रूप में स्पर्श वर्मा, सुनील चौरसिया, दौलत बाबू गुप्ता, लव सिंह, राजकुमार यादव&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/jharkhand/bokaro/story-rural-cricket-competition-will-be-organized-in-chas-7126957.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>चास में ग्रामीण क्रिकेट प्रतियोगिता का होगा आयोजन</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="चास में ग्रामीण क्रिकेट प्रतियोगिता का होगा आयोजन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>चास। भारत जोड़ो यात्रा अभियान के तहत अंतर्गत प्रखंड ग्रामीण क्रिकेट प्रतियोगिता का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/State/prizes-for-winning-teams-in-cricket-matches-799556'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>கிரிக்கெட் போட்டியில் வெற்றி பெற்ற அணிகளுக்கு பரிசு</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTB0GXmh2h9UKnpWMajr2APbiObGxKkNRFtGJtpBYAuv8IgNf1aVSHTN5KZElFmYfeQdK20bWbB" alt="கிரிக்கெட் போட்டியில் வெற்றி பெற்ற அணிகளுக்கு பரிசு" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>மேலத்தானியத்தில் கிரிக்கெட் போட்டியில் வெற்றி பெற்ற அணிகளுக்கு பரிசு&nbsp;...</p></div>
            </div>
        </a><a href='https://www.enavabharat.com/sports/cricket/gujarat-giants-revealed-what-the-teams-fanatics-do-before-the-match-621822/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>मैच से पहले क्या &#39;टोटका&#39; करते हैं टीम के धुरंधर, गुजरात जायंट्स ने किया खुलासा</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGDBbduRrMgEUKCbekRnJmwh933rQ1Aj3LCz_UwDibuansVMLadH4QiP_RheINdueahHa0Hg6L" alt="मैच से पहले क्या &#39;टोटका&#39; करते हैं टीम के धुरंधर, गुजरात जायंट्स ने किया खुलासा" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गुजरात जायंट्स और मणिपाल टाइगर्स के बीच होने वाला मुकाबला रद्द हो गया।</p></div>
            </div>
        </a>
        </Template></>;
}