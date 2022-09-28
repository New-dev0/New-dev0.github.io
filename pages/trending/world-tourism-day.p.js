import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Tourism Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Tourism Day"/>
        <meta name="description" content="Trending News about World Tourism Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Tourism Day</h1>
            <Image width={800} height={500} src="https://lagatar24.com/wp-content/uploads/2022/09/IMG-20220927-WA0118.jpg" alt="World Tourism Day"/>
            <h3>Recent News</h3>
            <a href='https://lagatar24.com/ramgarh-sri-agrasen-school-bhurkunda-organises-exhibition-on-world-tourism-day/123245/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ramgarh: Sri Agrasen School, Bhurkunda organises exhibition on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwEv6RGl007_qDxk8ewaSVp7cpOcY1ZQvQrJwcU8CiUS1nGLW9zgXPt5VCUkxHpOfULCFVzV3GXw" alt="Ramgarh: Sri Agrasen School, Bhurkunda organises exhibition on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MANOJ SINHA. Ramgarh, Sept 27: An exhibition was organized at Sri Agrasen School, Bhurkunda on Tuesday on the occasion of World Tourism Day.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/sachin-tendulkar-travel-diary-on-world-tourism-day-watch-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day: विश्व पर्यटन दिवस पर सचिन तेंदुलकर को याद आए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5Oa9uB8ctHXVLVeY8rgwC3H2aXnvT0jN11NGLl99UWMM_obLqLA2BO868DZ1Ugx_0Rv9UK2Rw" alt="World Tourism Day: विश्व पर्यटन दिवस पर सचिन तेंदुलकर को याद आए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सचिन ने ट्विटर पर एक वीडियो पोस्ट किया, जिसमें उन्होंने कुछ विदेशी पर्यटन स्थलों की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/world-tourism-day-2022-discover-india-s-top-tourist-destinations-this-year-11664244306798.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day 2022: Discover India&#39;s top tourist destinations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRytKyjeMnnj4YU4etOVgIQm1pY4KnLm1OIFWts7B7huaezGyPPFTGy-QJM469j4aAr4boWg9HO" alt="World Tourism Day 2022: Discover India&#39;s top tourist destinations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Tourism Day is widely celebrated across the world as a remembrance to the important role played by tourism in enhancing socio-cultural value,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/cities/Tiruchirapalli/world-tourism-day-celebrated-in-tiruchi/article65942662.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day celebrated in Tiruchi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUiV7W0-NPPCWkiRA_MBjeadx73D5B59nJWzXPG66KrKx49nPk6TN16kPE5SQeD0v6U2mWFsQh" alt="World Tourism Day celebrated in Tiruchi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The exhibition was a photo tour of various sculptures, paintings, inscriptions, monuments and archaeological sites under the jurisdiction of Tiruchi Circle. “On&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/bengaluru-news/world-tourism-day-five-off-beat-places-in-karnataka-that-you-must-visit-101664270634714.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day : Five off beat places in Karnataka that you must ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuCWevgfaBytxpWjB-GJAJFqVONRdfdKonVJMLshWj4miuEv4WyyakcU9V7-gTGsnvZUtx87aW" alt="World Tourism Day : Five off beat places in Karnataka that you must ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karnataka is a favorite tourist destination for many people and places like Hampi, Gokarna and Udupi are on the list of many travel enthusiasts. There are&nbsp;...</p></div>
            </div>
        </a><a href='https://currentaffairs.adda247.com/world-tourism-day-2022-celebrates-on-27th-september/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day 2022 celebrates on 27th September</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRehLomqqI_sRf9t_TYNES6AeteFxqLAkJ6nYzqbTO8CvhC_ev9XOBb4wf08iLFnmAXkd-qU3-w" alt="World Tourism Day 2022 celebrates on 27th September" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Tourism Day 2022 is observed on 27 September globally. This day is celebrated every year to focus on promoting tourism in various parts of the world.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/world-tourism-day-september-27-2022-theme-host-country-history-and-all-you-need-to-know/articleshow/94481168.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day September 27, 2022: Theme, host country ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQY82Y6MNWRY50F5_iGP0J1Ikyiuc2iwxkD4LU79vfoqPCqKdSOuU4fQgYNL7r5SXgS07SzNFcC" alt="World Tourism Day September 27, 2022: Theme, host country ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Tourism Day 2022 has been marked on September 27 since 1970 globally. This day is celebrated annually to promote tourism in various parts of the world&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/business/world-tourism-day-story-behind-the-success-of-indian-startup-oyo-prdm-4656583.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day : कैसे पड़ी OYO Hotels की नींव, रितेश ने सपने पूरे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbFe4WrdQ0wTMuz7b7V7XeAqbmestwPyYTukrf6LClcVjMGKgFSXlcHQR-pATCaZeRbupLlxcQ" alt="World Tourism Day : कैसे पड़ी OYO Hotels की नींव, रितेश ने सपने पूरे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>विश्‍व पर्यटन दिवस के मौके पर आज ऐसे भारतीय स्‍टार्टअप और उसकी सफलता की बात करेंगे,&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/business/world-tourism-day-study-says-demand-for-travel-loan-grew-10x-in-last-one-year-mlks-4655657.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day: ट्रैवल लोन की डिमांड में 10 गुना वृद्धि, किस शहर के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnp584ahOALw-0VZ3tO6MpigmNoXXfwyQinZ73Kr6Gia-b0H9_1vEzySn6sGkqeO-ml6Nf28rv" alt="World Tourism Day: ट्रैवल लोन की डिमांड में 10 गुना वृद्धि, किस शहर के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 साल से अधिक समय तक चारदीवारों में बंद रहने के बाद लोगों ने अब धड़ल्ले से घूमना-फिरना&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/dehradun/world-tourism-day-record-devotees-visit-char-dham-and-kanwar-yatra-in-uttarakhand'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Tourism Day: उत्तराखंड में पर्यटन ने पकड़ी रफ्तार, चारधाम और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQgX_BLkE7AsHmwxOZmMnI2-5VmuK_dzgZyxqlwIYRhaXDTszw-ydx4tlWTjFGNNInZc4NgiVt" alt="World Tourism Day: उत्तराखंड में पर्यटन ने पकड़ी रफ्तार, चारधाम और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>केदारनाथ, बदरीनाथ, गंगोत्री व यमुनोत्री धाम के दर्शन के लिए यात्रा में श्रद्धालुओं का&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}