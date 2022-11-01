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
            <Image width={800} height={500} src="https://newsroomodisha.com/wp-content/uploads/2022/10/ef319a0b22cb5fc00242aafbff37e07f-oiCqTt.jpeg" alt="Indira Gandhi"/>
            <h3>Recent News</h3>
            <a href='https://newsroomodisha.com/sonia-kharge-pay-tributes-to-indira-gandhi-on-her-death-anniversary/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sonia, Kharge pay tributes to Indira Gandhi on her death ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTb1mLpKtIG_2XqTggKMBt_dXl5tb8ibX4lnQg5PvnTbv5DusM-A7kL1iCvZ-_5vOflOKa34iKS" alt="Sonia, Kharge pay tributes to Indira Gandhi on her death ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi: Congress President Mallikarjun Kharge and Congress Parliamentary party (CPP) Chairperson Sonia Gandhi on Monday offered their homage to former&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-former-pm-indira-gandhi-38th-death-anniversary-sonia-gandhi-rahul-gandhi-and-mallikarjun-kharge-paid-tribute-23172770.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi Death Anniversary: इंदिरा गांधी की 38वीं पुण्यतिथि ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNS6jTAr51BMB8EMSvePGHFZmhdw6wooHDmy_IIxozQ5uwLh6btVDN0-X-a6yvyoo6Tgf1lw8M" alt="Indira Gandhi Death Anniversary: इंदिरा गांधी की 38वीं पुण्यतिथि ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कांग्रेस की पूर्व अध्यक्ष सोनिया गांधी ने शक्ति स्थल पर पूर्व प्रधानमंत्री इंदिरा&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/chandigarh-news/sgpc-marks-death-anniversary-of-indira-gandhi-s-assassin-101667250354540.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SGPC marks death anniversary of Indira Gandhi&#39;s assassin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX-jEWY5FJqBosY5h3Rs7qOGqrPzraJhY_eSNOmrT71BOAxXK-Md64ePYJ1soikNqCpszCKpKK" alt="SGPC marks death anniversary of Indira Gandhi&#39;s assassin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The death anniversary of Beant Singh, one of the two assassins of former Prime Minister Indira Gandhi, was observed by the Shiromani Gurdwara Parbandhak&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/national/sonia-gandhi-and-rahul-gandhi-remembered-indira-gandhi-zzz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi: &#39;मैं भारत को नहीं गिरने दूंगा&#39;, दादी को याद करते हुए राहुल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPLXtWY62ZSL6hfTGPX2h9pJKs0LLews9JUuFVrTeJz-vFng2Hb74jsCotFYHsisItc2qKl5CX" alt="Indira Gandhi: &#39;मैं भारत को नहीं गिरने दूंगा&#39;, दादी को याद करते हुए राहुल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कांग्रेस ने पूर्व प्रधानमंत्री इंदिरा गांधी को पुण्यतिथि पर श्रद्धांजलि अर्पित की.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/indira-gandhi-death-anniversary-what-you-need-to-know-about-the-iron-lady-of-india/articleshow/95198760.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi death anniversary: What you need to know about the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJ9YTIMUHYCMQfn4l1YQ0epbIC_hNlr2Kk2uDP4-OVPaNNXFIyMCfmNTi12MDU91pSSfynjklw" alt="Indira Gandhi death anniversary: What you need to know about the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi came to power after the sudden death of Lal Bahadur Shastri in 1966. Some of the big events during her tenure were Bangladesh&#39;s liberation,&nbsp;...</p></div>
            </div>
        </a><a href='https://odishatv.in/news/miscellaneous/landmark-decisions-where-indira-gandhi-demonstrated-who-is-the-boss-189220'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Landmark decisions where Indira Gandhi demonstrated who is the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSaApSFi_9-egBov_2NYwxlVA45RnD4Zru829yPEyrj4EvTJxln7sMKKSRyfWwBnwFwKQvyXIkJ" alt="Landmark decisions where Indira Gandhi demonstrated who is the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi (1917-1984) has been one of the most prominent figures to have dominated Indian politics, post Independence. Elected as the first woman Prime&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/rahul-gandhis-emotional-post-on-dadi-indira-gandhis-death-anniversary-3476684'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rahul Gandhi&#39;s Emotional Post On &quot;Dadi&quot; Indira Gandhi&#39;s Death ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmPYqiwHim1oFtHeYE1lJjEnftD82Lc9Q8bw6mSdAXmTX04ohCtE9-qyg7BHEu3VYn2qJS8vJj" alt="Rahul Gandhi&#39;s Emotional Post On &quot;Dadi&quot; Indira Gandhi&#39;s Death ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Congress leader Rahul Gandhi today shared an emotional tweet for his grandmother and former Prime Minister Indira Gandhi on her death anniversary,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/india/indira-gandhi-death-anniversary-iron-lady-of-india-congress-15039371.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi death anniversary: Remembering the Iron Lady of India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXComzC5Re2rpRWWGV4fe_CcVNSng_EtzDlHh5WmZ9E74AsTaGAZZpg0QYJDsusv8VUFsJQ30O" alt="Indira Gandhi death anniversary: Remembering the Iron Lady of India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Born on November 19, 1917, in Allahabad, Indira Gandhi was the only child of independent India&#39;s first Prime Minister Jawaharlal Nehru.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/shakti/indira-gandhi-death-anniversary-2022-remembering-iron-lady-of-india-first-female-prime-minister-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi Death Anniversary: इंदिरा गांधी की पुण्यतिथि आज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0aIibb4f82qs0fsGXPFGHSdiDsAoUHgFZ6FK58gOkRqaUeOKZObYf9ARROQNY3M9ye_aMDc2o" alt="Indira Gandhi Death Anniversary: इंदिरा गांधी की पुण्यतिथि आज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi Death Anniversary: 31 अक्तूबर को इंदिरा गांधी की पुण्यतिथि मनाई जा रही है।</p></div>
            </div>
        </a><a href='https://www.rajexpress.co/india/leaders-pay-tribute-on-indira-gandhi-38th-death-anniversary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indira Gandhi Death Anniversary: मज़बूत राष्ट्र के रूप में पहचान दिलाने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRv0tDX1dBlGD4kqKUx4oOqrhqL95rXQZSFhyZj9CVtqmwy-aTpLyNfSFqH0W1UhO1mbVkVUsNq" alt="Indira Gandhi Death Anniversary: मज़बूत राष्ट्र के रूप में पहचान दिलाने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indira Gandhi Death Anniversary: देश की प्रथम महिला प्रधानमंत्री इंदिरा गांधी की आज 38वीं पुण्यतिथि&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}