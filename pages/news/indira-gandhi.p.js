import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indira Gandhi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indira Gandhi"/>
        <meta name="description" content="Trending News about Indira Gandhi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indira Gandhi</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/19/1600x900/6c9ec202-6810-11ed-b7f8-ce09d82c1fb2_1668865733827.jpg" alt="Indira Gandhi"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/india-news/sonia-lauds-indira-gandhi-even-her-critics-recognised-her-core-personality-101668865809252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sonia lauds Indira Gandhi: &#39;Even her critics recognised her core ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxC2b-eWB3BRLlv13oy6hU-m7EsuAbvKvP1xhWdBJzwPjcB9CbD9NLBTPe_BYzg0vq948KsNjt" alt="Sonia lauds Indira Gandhi: &#39;Even her critics recognised her core ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sonia Gandhi was speaking at the Indira Gandhi Peace Prize ceremony in New Delhi on the occasion of the former Prime Minister&#39;s 150th birth anniversary.</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/allahabad-city-indira-gandhi-jayanti-2022-congressmen-paid-tribute-to-former-prime-minister-indira-at-historic-anand-bhavan-in-prayagraj-23214331.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi Jayanti 2022: प्रयागराज के ऐतिहासिक आनंद भवन में जुटे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7r_WUTex1r-BgcGGrCcVRDrFb_h_H9XDyG1K2YblFtQb3Dy-lTZhBb3q5mM5V2F938JVYIsis" alt="Indira Gandhi Jayanti 2022: प्रयागराज के ऐतिहासिक आनंद भवन में जुटे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>प्रयागराज, जागरण संवाददाता। भारत रत्न पूर्व प्रधानमंत्री इंदिरा गांधी की 105वीं&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/former-prime-minister-indira-gandhi-birth-anniversary-shakti-sthal-floral-tributes-latest-news-update'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi: पूर्व पीएम इंदिरा गांधी की 105वीं जयंती, PM मोदी-सोनिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtpJ9jCL9LSZqH3B54hfeIP4zJ1u7LnfsW0vDQ2CVr0vtbQWxIG7Nh7jN3rsCLEx0GcC0G_MtM" alt="Indira Gandhi: पूर्व पीएम इंदिरा गांधी की 105वीं जयंती, PM मोदी-सोनिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi: पूर्व पीएम इंदिरा गांधी की 105वीं जयंती, PM मोदी-सोनिया गांधी समेत दिग्गजों ने दी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/state/jharkhand/bokaro/indira-gandhi-showed-anger-on-dvc-officers-at-chandrapura-bokaro-know-why-mtj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi News: डीवीसी अधिकारियों पर गुस्से से लाल हो गयीं थीं इंदिरा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5u53PxOWzqg06SXI8qYHBbHAVN4xFGi3yg3liSh95hics7e3Ad0RflJ_m0SZuPOdtn_f-skjo" alt="Indira Gandhi News: डीवीसी अधिकारियों पर गुस्से से लाल हो गयीं थीं इंदिरा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi News: डीवीसी की ओर से आम लोगों के लिए पंडाल नहीं बनाया गया था. इंदिरा गांधी ने इस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagranjosh.com/general-knowledge/indira-gandhi-the-iron-lady-of-india-gk-quiz-and-facts-you-need-to-know-1668858110-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi, The Iron Lady of India : GK Quiz and facts you need to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSreNezk95dMRpp3YcsxxUDOvVeamS04Dg2mXr0WBu60eIVsyRnFcU-LwqZb96fTALt0BW6SGqi" alt="Indira Gandhi, The Iron Lady of India : GK Quiz and facts you need to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi, the first female prime minister of India, who was born on 19 November, 1917, Allahabad, India served for three consecutive terms (1966-77).</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/india/narendra-modi-mallikarjun-kharge-rahul-gandhi-pay-tributes-to-indira-gandhi-on-her-105th-birth-anniversary/cid/1899035'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Modi, Kharge, Rahul Gandhi pay tributes to Indira Gandhi on her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA6KzPFu5EtiyWQSzHBxMpTycaPuPvlVbSZRGQB7BQzQw6AVQp5SVOmtW-g9VzjSdyevlNE659" alt="Modi, Kharge, Rahul Gandhi pay tributes to Indira Gandhi on her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Congress president Sonia Gandhi pays tribute to former prime minister Indira Gandhi on her birth anniversary at Shakti Sthal, in New Delhi, Saturday,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/himachal-pradesh/indira-gandhi-jayanti-2022-connection-of-indira-gandhi-from-himachal-pradesh-ann-2262977'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi Jayanti 2022: इंदिरा गांधी का हिमाचल से था खास लगाव ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7MFvrjLwvsQazZrXTU-oPN-W1wGW_YbY7SmINOM6E7_xYicY6JO86gcNvgX7KUEGvqmJ8FdzQ" alt="Indira Gandhi Jayanti 2022: इंदिरा गांधी का हिमाचल से था खास लगाव ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi 105th Birth Anniversary: पूर्व प्रधानमंत्री इंदिरा गांधी (Indira Gandhi) की 105 वीं जयंती के मौके&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/web-stories/indira-gandhi-remembering-the-iron-lady-of-india-on-her-105th-birth-anniversary-11668841212553'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INDIRA GANDHI: REMEMBERING THE IRON LADY OF INDIA ON ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSV92Czm0DrUHYkplDDLOn_V6iWCXS0XRymH9Zf6YTdN-BNmQJqLR0bKSDJKX5JnxhlNw21Zba_" alt="INDIRA GANDHI: REMEMBERING THE IRON LADY OF INDIA ON ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Born on November 19, 1917 Indira Gandhi was the daughter of Pt. Jawaharlal Nehru. Smt. Indira Gandhi founded the, &#39;Vanar Sena&#39; of children to help the&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/india/even-her-critics-recognise-her-patriotism-staunch-secularism-empathy-for-poor-sonia-on-indira-gandhi-8278100/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Even her critics recognise her patriotism, staunch secularism ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSflFR4Zfs2ojhoZx7wXT5Mrn_Dywgaf9AMNCPh4uSxnsd6x2rVGLF69PO58SAN20KeZJzTeZtM" alt="Even her critics recognise her patriotism, staunch secularism ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senior Congress leader Sonia Gandhi on Saturday said former prime minister Indira Gandhi left an indelible mark on the country and even her critics&nbsp;...</p></div>
            </div>
        </a><a href='https://theprint.in/india/indira-gandhi-left-indelible-imprint-on-the-country-sonia-gandhi/1225876/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi left indelible imprint on the country: Sonia Gandhi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRK4oMttdBw39ZaRtcGQH09-YnGhtZo7e3Hxqz1WRTnQwNvUpfZabe9vongVXzs3JByaa57jAnB" alt="Indira Gandhi left indelible imprint on the country: Sonia Gandhi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi [India], November 19 (ANI): There was an unchanging core to Indira Gandhi&#39;s personality including her fierce commitment to an all-inclusive&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}