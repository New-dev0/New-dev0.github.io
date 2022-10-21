import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rangoli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rangoli"/>
        <meta name="description" content="Trending News about Rangoli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rangoli</h1>
            <Image width={800} height={500} src="https://images.news18.com/ibnkhabar/uploads/2022/10/rangoli-166583012516x9.jpg" alt="Rangoli"/>
            <h3>Recent News</h3>
            <a href='https://hindi.news18.com/news/dharm/diwali-2022-history-of-rangoli-making-rangoli-banane-ki-parampara-kab-aur-kaise-shuru-hui-kee-4749181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali Rangoli: दिवाली पर रंगोली बनाने की परंपरा कब और कैसे शुरू हुई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTMRxhepfFXVEGXI3EUxQS35LFbVj4uWiurF5tClAKUBBN01l8C-QPOSjK0ShLK82ZiTRWnIk6j" alt="Diwali Rangoli: दिवाली पर रंगोली बनाने की परंपरा कब और कैसे शुरू हुई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दीपों का त्योहार दीपावली हर साल कार्तिक मास की अमावस्या तिथि पर मनाया जाता है.</p></div>
            </div>
        </a><a href='https://www.financialexpress.com/hindi/photos/business-gallery/make-your-own-rangoli-this-diwali-here-are-some-easy-designs/2722051/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali Rangoli: इस दिवाली आप भी खुद बनाएं अपनी रंगोली, ये हैं कुछ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtAVtDeMxFpwe64srUpPwtndAcNs48-yQZ7SRBwlVmO_3O3TqLnD7oWKcOt5NfbAT6XpVcaaMz" alt="Diwali Rangoli: इस दिवाली आप भी खुद बनाएं अपनी रंगोली, ये हैं कुछ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रंगोली बनाने के लिए पारंपरिक तौर पर रंगों में पिसा हुआ सूखा या गीला चावल, सिंदूर, रोली,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/jharkhand/hazaribagh/story-rangoli-competition-in-kn-plus-two-today-7249057.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>केएन प्लस टू में रंगोली प्रतियोगिता आज</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="केएन प्लस टू में रंगोली प्रतियोगिता आज" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दीपावली के अवसर पर केएन प्लस टू हाई स्कूल के छात्र-छात्राओं के बीच रंगोली प्रतियोगिता&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/life-and-style/diwali-rangoli-designs-2022-make-simple-rangoli-in-these-parts-of-the-house-on-deepawali-puja-tvi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali Rangoli Designs 2022: दिवाली पर घर के इन हिस्सों में बनायें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEXoD00Psg4nriSdEwP_6lvxinzjJbMoxO_kNm4SuOgXsAiOkysabL9GC8VeC9oHJhM_xXMFgb" alt="Diwali Rangoli Designs 2022: दिवाली पर घर के इन हिस्सों में बनायें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diwali Rangoli Design: दिवाली पर घर के आंगन, मेन डोर, एंट्रेंस एरिया, तुलसी स्थान, पूजा स्थल पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/trending/woman-makes-rangoli-design-with-nails-and-thread-for-diwali-viral-video-on-social-media-2242315'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>कील और धागे से इस दिवाली बनाइए अनोखी रंगोली, Video में देखिए कैसे</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfDgJc43ac_xoJIm9Yq-lPSZog2bO2h4WcBTcDVdGxYfdqP2VmzVkdKzw8lUzPq0uMf6XkQoFu" alt="कील और धागे से इस दिवाली बनाइए अनोखी रंगोली, Video में देखिए कैसे" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viral Rangoli Design Video: रंगोली बनाने का एक बिलकुल नया तरीका इंटरनेट पर ट्रेंड कर रहा है,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.naidunia.com/spiritual/kehte-hain-diwali-rangoli-tips-2022-rangoli-is-very-easy-to-make-just-follow-these-tips-7903424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali Rangoli Tips 2022: रंगोली बनाना है बहुत आसान बस इन टिप्स को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShsOFnCNbs-IwjTYI08VjYoNWcKiNmXYSlJS1mab6Mx_Ai-9thDNmPhqAq6L8b1MKCk1sNhx8T" alt="Diwali Rangoli Tips 2022: रंगोली बनाना है बहुत आसान बस इन टिप्स को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diwali Rangoli Tips 2022: दिवाली पर हर घर में रंगोली बनाई जाती है कुछ लोगों को रंगोली बनाना&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news24online.com/lifestyle/enhance-the-beauty-of-the-house-this-diwali-with-these-rangoli-designs/69544/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diwali 2022 Ragoli Designs: इस दिवाली इन रंगोली डिजाइन्स से बढ़ाएं घर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKIxw6X6wBVFYM3L3EMK39ikJhRb5q2KjLykGlmf1JHFgscxXKSbXm4DsGh0lvP7sqydxvyMFh" alt="Diwali 2022 Ragoli Designs: इस दिवाली इन रंगोली डिजाइन्स से बढ़ाएं घर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फूलों के पैटर्न के साथ दिवाली के रंगोली डिजाइन &middot; नारंगी फूल की रंगोली बनाएं &middot; सूरजमुखी का&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}