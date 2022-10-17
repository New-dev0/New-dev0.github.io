import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Food Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Food Day"/>
        <meta name="description" content="Trending News about World Food Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Food Day</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/16102022/16_10_2022-fruits_and_vegetable_f_23143638.jpg" alt="World Food Day"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/lifestyle/health-world-food-day-colourful-fruits-and-vegetables-may-reduce-the-risk-of-many-diseases-23143638.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day: कई सारी बीमारियों का टल जाएगा खतरा, जब खानपान में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKxHDoxzW5ADK5oQ-KOon_ef30YpSGxcvd9ROPur_USeYAd3DFBNDS7WehBJf58u229q_p_lv8" alt="World Food Day: कई सारी बीमारियों का टल जाएगा खतरा, जब खानपान में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Food Day खानपान में रंग-बिरंगे फल व सब्जियों को शामिल कर आप कोलेस्ट्रॉल से लेकर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/10/16/statement-by-president-joe-biden-on-world-food-day/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Statement by President Joe Biden on World Food Day - The White ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Statement by President Joe Biden on World Food Day - The White ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today, we reaffirm our commitment to ending hunger and malnutrition—creating a world in which no child has to go to bed hungry, no parent has to worry about&nbsp;...</p></div>
            </div>
        </a><a href='https://currentaffairs.adda247.com/world-food-day-2022-leave-no-one-behind/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day 2022: Leave NO ONE behind</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzb0N-_gyAQw6zgUjFVyQhjWhwbFnMkv-VLkiQ9_iGUI4ytFRCBu4IkXSUY0GvgxJ_NCyOiS2_" alt="World Food Day 2022: Leave NO ONE behind" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Food Day 2022: Every year on October 16 in observance of the date the Food and Agricultural Organization (FAO) of the United Nations was established&nbsp;...</p></div>
            </div>
        </a><a href='https://reliefweb.int/report/democratic-republic-congo/world-food-day-salesian-missions-highlights-feeding-programs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day: Salesian Missions highlights feeding programs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="World Food Day: Salesian Missions highlights feeding programs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>News and Press Release in English on Democratic Republic of the Congo and 3 other countries about Food and Nutrition and Epidemic; published on 16 Oct 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.state.gov/world-food-day/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day - United States Department of State</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="World Food Day - United States Department of State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conflicts are driving unconscionable levels of hunger as violence stops food from getting to the neediest. Pandemic disruptions to supply chains have&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hrw.org/news/2022/10/16/world-food-day-amid-global-food-crisis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day Amid a Global Food Crisis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcNwNTxlqYFrpcLbnfNJ6Yd_CeJBaxGbaczvmaNm0llTGdecu2aiTjHm3Gtx4-_i3wgwWduokU" alt="World Food Day Amid a Global Food Crisis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amid a global food crisis, the theme of this year&#39;s World Food Day marks a call to action for governments, UN agencies, private actors, and humanitarian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/lifestyle/healthy-food/world-food-day-2022-theme-history-and-importance-all-you-need-to-know'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day: विश्व खाद्य दिवस आज, जानें भोजन से जुड़े इस दिन का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBiXzRtbG1Budy-xA6QWIyZmBuDz8dDzLT2RrTB-_7RsAHRWEPFIMf0-8zTwx3xvKdOcdP48us" alt="World Food Day: विश्व खाद्य दिवस आज, जानें भोजन से जुड़े इस दिन का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आइए जानते हैं विश्व खाद्य दिवस का इतिहास और महत्व। जानिए स्वास्थ्य के लिए सेहतमंद&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailypioneer.com/2022/state-editions/world-food-day-held-by-kvk--khordha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day held by KVK, Khordha</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="World Food Day held by KVK, Khordha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Krishi Vigyan Kendra-Khordha in collaboration with the Sambalit Farmer&#39;s Producer Company, Balipatna, Khordha, celebrated the World Food Day with the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gnttv.com/offbeat/story/world-food-day-2022-real-life-heroes-collecting-extra-food-feed-poor-people-459259-2022-10-16'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day 2022: हर दिन गरीब लोगों तक खाना पहुंचा रहे हैं ये लोग ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqSAnazMQNMNx0f4iSh6ZIYKi3WSnNs9KE7k9acH96NOhD-ccplNoEXAM04BRdqlYPAVwArDJ0" alt="World Food Day 2022: हर दिन गरीब लोगों तक खाना पहुंचा रहे हैं ये लोग ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Food Day 2022: विश्व खाद्य दिवस 1945 में संयुक्त राष्ट्र खाद्य और कृषि संगठन (एफएओ) की&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/magazines/panache/world-food-day-harry-potters-chocolate-frogs-to-famous-fives-cold-ham-sandwich-revisiting-some-of-the-most-memorable-food-in-fiction/articleshow/94892570.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Food Day: From Harry Potter&#39;s&#39; &#39;Chocolate Frogs&#39; to &#39;Famous ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShCYDUb1oNoJYHUjjWxZ4UxhjOmbOQN5QnKStLFVkI7NCMht4loEcvpKIBZWkJm-i5CCP2nhPh" alt="World Food Day: From Harry Potter&#39;s&#39; &#39;Chocolate Frogs&#39; to &#39;Famous ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>J.K Rowling&#39;s Chocolate Frogs, Roald Dahl&#39;s candy shrubs, Enid Blyton&#39;s hearty picnics... many of our favourite authors have given food a starring role in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}