import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hindu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hindu"/>
        <meta name="description" content="Trending News about Hindu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hindu</h1>
            <Image width={800} height={500} src="https://th-i.thgim.com/public/latest-news/iksc9k/article66112931.ece/alternates/FREE_1200/Bhagwat-Buxar.jpg" alt="Hindu"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindu.com/news/national/mohan-bhagwat-tempers-demand-for-akhand-bharat-at-hindu-religious-meet-in-buxar-with-cautionary-advice/article66112291.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mohan Bhagwat issues word of caution at Hindu religious event in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO7A_x79NCuFSfctG1sTr5lfSGcPqYco_v800gLJPqKcVBgYSWhAyDWBL5yHF8XIAjoyV5d4WH" alt="Mohan Bhagwat issues word of caution at Hindu religious event in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Hindu religious leaders pitched for “freeing” Pakistan Occupied Kashmir (POK) and territory contested by China in Galwan at the &#39;Mujhme Ram - Sanatan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/hindu-term-is-come-from-persia-and-its-meaning-is-horrible-says-kpcc-working-pres-satish-jarkiholi-ann-2254185'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karnataka: &#39;हिंदू एक फारसी शब्द... इसका अर्थ भयानक है&#39;, कांग्रेस नेता ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9YIb5WZiNTMCsrTzAC9ZwAEzIVsaSx_6C_ozWKDBjJgRKftKBLI7GhIRPz0UUdtZ55bxgAs8o" alt="Karnataka: &#39;हिंदू एक फारसी शब्द... इसका अर्थ भयानक है&#39;, कांग्रेस नेता ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Satish Jarkiholi Controversial Statement: कर्नाटक में कांग्रेस नेता सतीश जरकीहोली ने विवादित बयान देकर&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news24online.com/astrology/list-of-hindu-festivals-in-november-december-2022/82053/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hindu Festivals: नवंबर में आएंगे ये हिंदू पर्व, इन उपायों से आप भी बदल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtjvKbDQD6EMXq84IWxELjM3Udd93Jek4le6EWTfcmSGc10iqb-r2qZ1WetPK6W_9kG_FPJOKs" alt="Hindu Festivals: नवंबर में आएंगे ये हिंदू पर्व, इन उपायों से आप भी बदल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hindu Festivals: 9 नवंबर, बुधवार से मार्गशीर्ष मास आरंभ हो जाएगा। इस माह में कई धार्मिक&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/national/story-congress-leader-satish-jarkiholi-hindu-is-persian-word-meaning-very-dirty-bjp-attacks-7320935.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>फारसी है हिंदू शब्द, मतलब बहुत गंदा, कांग्रेस नेता के बयान से बवाल; BJP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStNG6u-scmyG5Edx7mdyCMiYAOsHT4h3UOG9xLgVsOV7SjhjyPNksVGfioPM3Bl2sodasPAVcv" alt="फारसी है हिंदू शब्द, मतलब बहुत गंदा, कांग्रेस नेता के बयान से बवाल; BJP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जारकीहोली ने कहा, &#39;&#39;वे हिंदू धर्म के बारे में बोलते हैं ... यह कि, हिंदू शब्द कहां से आया?</p></div>
            </div>
        </a><a href='https://www.naidunia.com/national-congress-on-hindu-hindu-is-a-parsi-word-controversy-over-karnataka-congress-leader-statement-read-the-entire-rhetoric-7925318'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Congress on Hindu: पारसी है हिंदू शब्द अपने नेता के बयान से घिरी कांग्रेस ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5EgS3dP881u9oyRP5TwMW_Xy5rAU06ameIyfHY4gj9EErk0kseTTiZ4w8-ceGaWnVXCmsDrEc" alt="Congress on Hindu: पारसी है हिंदू शब्द अपने नेता के बयान से घिरी कांग्रेस ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hindu is Persian: 6 नवंबर को एक कार्यक्रम में सतीश जारकीहोली ने कहा था हिन्दू शब्द कहां से आया&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bhaskar.com/national/news/karnataka-pcc-president-said-this-persian-word-bjp-called-the-statement-instigating-130532094.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>कांग्रेस नेता बोले- हिंदू शब्द का अर्थ बहुत गंदा: यह फारसी से आया; भाजपा ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSmbHtNF8EE8iMa_WzlTx4eW-UJnjmYQZ3ON4fI7oN0B-gN2u8gbZ_1jVcYbSFjWfspCgJTPXZ" alt="कांग्रेस नेता बोले- हिंदू शब्द का अर्थ बहुत गंदा: यह फारसी से आया; भाजपा ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कर्नाटक प्रदेश कांग्रेस के कार्यकारी अध्यक्ष सतीश जारकीहोली ने कहा है कि हिंदू शब्द&nbsp;...</p></div>
            </div>
        </a><a href='https://www.india.com/hindi-news/india-hindi/congess-on-backfoot-over-jarkiholi-hindu-remark-row-engaged-in-damage-control-5730948/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hindu Remark Row : जरकीहोली के &#39;हिंदू&#39; शब्द को फारसी बताने के बाद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpdgqR523mXJOfr1xTjz2eVyGLdy7jGVFQIYsM34FXGNB654rZR2plFdWtybIRP_imASz9qTp3" alt="Hindu Remark Row : जरकीहोली के &#39;हिंदू&#39; शब्द को फारसी बताने के बाद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>कर्नाटक प्रदेश कांग्रेस कमेटी (KPCC) के सचिव सतीश जरकीहोली की उस विवादित टिप्पणी पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/rajya/karnataka-pradesh-congress-leader-satish-jarkiholi-said-if-proved-wrong-i-will-resign-as-mla-not-apologise-for-statement/2463727/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hindu Remark Row: &#39;हिंदू मतलब…&#39; पर कांग्रेस नेता सतीश जरकीहोली ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRU4qVmJmH3Piwkcq9-Y7ZSAk-n2y5i_Su0z5P7rlCtWqOib3TyswSz9MTZpTfxBPrW5foqPr_Q" alt="Hindu Remark Row: &#39;हिंदू मतलब…&#39; पर कांग्रेस नेता सतीश जरकीहोली ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Congress Leader Satish Jarkiholi Controversial Statement On Hindu News in Hindi: सतीश जरकीहोली ने रविवार को कर्नाटक के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/State/hindu-peoples-party-protest-against-ambur-municipality-832639'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ஆம்பூர் நகராட்சியை கண்டித்து இந்து மக்கள் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-oGp6G5DhscdnN4yyNRO0kFI9MkQ5cn-emds0ghNua_0ne_uYoNdiGY_vs6DdD7iRskTmsvGV" alt="ஆம்பூர் நகராட்சியை கண்டித்து இந்து மக்கள் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ஆம்பூர் நகராட்சியை கண்டித்து இந்து மக்கள் கட்சியினர் நூதன போராட்டத்தில்&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}