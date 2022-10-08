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
            <Image width={800} height={500} src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/10/Untitled-design-22.png?fit=1280%2C720&ssl=1" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.eastmojo.com/nagaland/2022/10/07/nagaland-sports-scene-going-from-bad-to-worse-mla-nienu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagaland sports scene going from &#39;bad to worse&#39;: MLA Nienu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRut_XFl6Xnb6g4Dqo3YOpYZ7LQyngw9ufOwmdt5lR2m8jCiqJHpu7ovd0deQZCWjKCBg7MC41q" alt="Nagaland sports scene going from &#39;bad to worse&#39;: MLA Nienu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leader of the Naga People&#39;s Front Legislative Party (NPFLP) and co-chairman of the United Democratic Alliance (UDA) Kuzholuzo Nienu on Friday stated that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manoramaonline.com/children/padhipurra/2022/10/07/ultimate-sports-quiz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>അൾട്ടിമേറ്റ് സ്പോർട്സ് ക്വിസ് ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCV5i20wckCklZtuXMKWNU97xmm6EX6ujwfF9SFVpea-vTEyclGWuQ-mNqgGh-oUdJ2tuj_Qxt" alt="അൾട്ടിമേറ്റ് സ്പോർട്സ് ക്വിസ് ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tags: Manorama Online Quiz &middot; Sports Quota Trials &middot; Kids Club &middot; Children. Disclaimer. നിങ്ങളുടെ കുട്ടിക്ക് എന്തിലെങ്കിലും&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/other-sports/indian-sports-news-wrap-news-highlights-updates-scores-october-6/article65977042.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian sports news wrap, October 6</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZtjOUG_jScb13OhfilOAouyRYPl3ZaD1kjJ82rzm5d4DeR8mje-O0us9fJTfov6Zli-iGPgEF" alt="Indian sports news wrap, October 6" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 19th HCL International bridge championship, featuring about 950 players from across the world, will be staged in Gurugram from October 11 to 16, offering a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manoramaonline.com/education/career-guru/2022/10/07/careers-with-sports-psychology-degree.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>മികച്ച കരിയറാണോ സ്വപ്നം?; കായിക ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvbxZPSqLgPyfa9wOV-ucWbFNicwJv7CTvqwGN4VP9nNu53Z6s1JZFPFUKpyCqrSMDjGDffe3F" alt="മികച്ച കരിയറാണോ സ്വപ്നം?; കായിക ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tags: Clinical Psychology &middot; Career Guru &middot; Career Guidance &middot; Career &middot; Jobs. ഐഎഎസ് /ഐപിഎസ് പരീക്ഷകൾക്ക് ഒരുങ്ങാം ഓൺലൈനായി.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/uttar-pradesh/mahoba/two-swimming-pools-to-be-built-in-sports-stadium-with-3-71-crores-mahoba-news-knp721934013'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>स्पोर्ट्स स्टेडियम में 3.71 करोड़ से बनेंगे दो तरणताल</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjyBE344BonY1KpGlq_w5UsU2T7o9u3IGnycp8jmmm-Ep2Z5c8uKNzdXZc5-fHqJ8hr1oikys3" alt="स्पोर्ट्स स्टेडियम में 3.71 करोड़ से बनेंगे दो तरणताल" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>महोबा। जिला स्पोर्ट्स स्टेडियम में दो तरणताल का निर्माण होगा। इसके&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}