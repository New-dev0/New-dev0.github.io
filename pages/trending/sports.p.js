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
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2021/12/03/750x506/unnao_1638529415.jpeg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/uttar-pradesh/unnao/sports-person-won-medal-unnao-news-knp726236171'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>कराटे खिलाड़ियों ने दो गोल्ड, एक सिल्वर व तीन कांस्य पदक जीते</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2_vqZRM5lVANu1OFHEvsaT879VE7uLTcQARoERFK0VLXLHL9q9co6KnH4Asr_7YXemejpPUaB" alt="कराटे खिलाड़ियों ने दो गोल्ड, एक सिल्वर व तीन कांस्य पदक जीते" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>लखनऊ के चौक इंडोर स्टेडियम में 30 व 31 अक्तूबर को आल इंडिया ओपन कराटे चैंप&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/jammu-and-kashmir/udhampur/sports-udhampur-news-jmu271430328'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>जूनियर बालिका वर्ग में सोनिका देवी बनी चैंपियन</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpiEIInFzk6YngISmjrtBVvzAvMJm-PuoVdvQD7uaf1w_BeoAt0syrqpCqDIGOgMgFrSyenUFH" alt="जूनियर बालिका वर्ग में सोनिका देवी बनी चैंपियन" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>उधमपुर। सुभाष स्टेडियम के इंडोर हॉल जिला टेबल टेनिस एसोसिएशन की तर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttarakhand/nainital/sports-in-pantnagar-pantnagar-news-hld4807161106'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पंतनगर में तीन दिवसीय अखिल भारतीय वेटरिनेरियन बैडमिंटन, टेबिल टेनिस ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMaSEYyK-rK2Z-Ya4veMTmDLYyMne6pq46-yd0Mv4dL-pQvADSG1DR-hRpNXx3tpfnuxtpslJz" alt="पंतनगर में तीन दिवसीय अखिल भारतीय वेटरिनेरियन बैडमिंटन, टेबिल टेनिस ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इसकी प्रोफेशनल क्विज पंतनगर विवि की टीम ने जीती। बैडमिंटन प्रतियो&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}