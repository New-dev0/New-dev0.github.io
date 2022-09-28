import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NASA DART</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NASA DART"/>
        <meta name="description" content="Trending News about NASA DART" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NASA DART</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/09/27/600x338/NASA-DART_1664287252709_1664287252903_1664287252903.jpg" alt="NASA DART"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/science/news/nasa-dart-is-first-step-to-prevent-asteroid-strike-on-earth-like-the-one-that-killed-dinosaurs-indian-scientists-11664280475611.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA DART is first step to prevent asteroid strike like the one that ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrYYQxEMCmqoG54hhA1aISyotIvpLdRR60ActoRukI0DN0nV6-lbz0jxkIZx3QWfBruuI-2fZwzA" alt="NASA DART is first step to prevent asteroid strike like the one that ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Double Asteroid Redirection Test (DART) spacecraft of the National Aeronautics and Space Administration (NASA) on Tuesday successfully crashed into an&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/google-celebrates-success-of-nasas-dart-test-see-how/articleshow/94486921.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google celebrates success of NASA&#39;s DART test. See how</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSBV-ceqZZjDMXCq1dOlPJ7_RMz63tkuAPuYiNO3W7kRhaDhu7EoIwDBFKpCuPdnRaxGqBseKI" alt="Google celebrates success of NASA&#39;s DART test. See how" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As NASAs DART test is now a success, Google has introduced a special smashing demonstration to celebrate the triumph. CEO Sundar Pichai confirmed the same&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/09/27/1125314926/nasa-dart-asteroid-photos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This is what NASA&#39;s spacecraft saw just seconds before slamming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQffLKkPl84Ntd6QobxoO2vKYP0S9oCzeXa51WVkACq0wZZ6rFNFNx1q41psGDuvLsdIWhggtr_" alt="This is what NASA&#39;s spacecraft saw just seconds before slamming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA successfully crashed a spacecraft into an asteroid on Monday night. These are the final images it captured as it hurtled toward the rocky surface.</p></div>
            </div>
        </a><a href='https://www.newscientist.com/article/2339764-first-images-show-aftermath-of-nasas-dart-asteroid-collision-mission/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>First images show aftermath of NASA&#39;s DART asteroid collision ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb046u132zLeUQPUjUBG6TtVz_3t4D2H18-KYdbO9Uion6i4x4amXLTkORNRlwFOa3p-8YP5Aa" alt="First images show aftermath of NASA&#39;s DART asteroid collision ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As NASA&#39;s DART spacecraft slammed into an asteroid, a small satellite called LICIACube watched from afar – now it has sent back its first images of the&nbsp;...</p></div>
            </div>
        </a><a href='https://techcrunch.com/2022/09/27/nasas-dart-anti-asteroid-satellite-successfully-smashes-into-space-rock/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA&#39;s DART anti-asteroid satellite successfully smashes into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7ysLxnwEkVu-TwWbkvcG-X-f_AorLS3du0VCtB6XRVLzAbAwZZahvHC9W6aI9Qclx9ETULT1L" alt="NASA&#39;s DART anti-asteroid satellite successfully smashes into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA smashed its DART satellite into an asteroid moon in hopes it&#39;ll prove we can prevent an apocalyptic extinction event.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/science/space/nasa-dart-photos-asteroid-impact-mission-rcna49621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New photos show successful DART asteroid collision in NASA mission</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSugbGqz_71ksfDwT2ffOfP-sDMk7i1k6wWQEc-6JlosZq18rcGHVqPsDJjIC1FGPMJ50dE_hst" alt="New photos show successful DART asteroid collision in NASA mission" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA&#39;s DART mission was a success. Images taken by satellite show plumes from the asteroid impact, but it could take weeks to monitor for changes in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/hindi/dna-explainer/report-nasa-dart-mission-spacecraft-successfully-hit-asteroid-dimorphos-will-scientists-be-able-save-earth-4053210'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA के लिए क्यों खास था DART मिशन, क्या धरती को बचाने में कामयाब ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCnEP0pmBmRwzt_DcLj75ynI0j3rgt0VnzUGK30ZxEmTbjZeolehIzmvokXansjgHrRSnBZBQn" alt="NASA के लिए क्यों खास था DART मिशन, क्या धरती को बचाने में कामयाब ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA DART Mission: नासा के एयरक्राफ्ट ने पृथ्वी से लगभग 1,13000 किमी दूर करीब 22 हजार किलोमीटर की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/life-and-style/nasa-dart-mission-was-successful-in-saving-earth-bml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA Dart Mission: धरती को बचाने का टेस्ट सफल, नीले ग्रह को था सबसे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXESFp6eqoT9437C_ZULkCP5uLFG6_5-mOHbTZJtV6M57bvosQmTYXu2woeXOa5khnP4RCmd-d" alt="NASA Dart Mission: धरती को बचाने का टेस्ट सफल, नीले ग्रह को था सबसे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA Dart Mission: मिशन के तहत ये परीक्षण सफल रहा. नासा की इस सफलता के मायने ये हैं कि भविष्य&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thelallantop.com/technology/post/nasa-dart-mission-hitting-google-screen-tweet-by-ceo-sundar-pichai'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>गूगल पर ये सर्च करो, स्क्रीन पर ब्लास्ट हो जाएगा!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSXOS-HsoKs9Zc3W-quPo06FaW872ODcEP1rFsLnP2aJVXNCo8R-8wUWEtGgJrRqZirWl63KN4" alt="गूगल पर ये सर्च करो, स्क्रीन पर ब्लास्ट हो जाएगा!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अमेरिकी स्पेस एजेंसी National Aeronautics and Space Administration यानी NASA ने पृथ्वी की तरफ बढ़ रहे एक&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gnttv.com/science/video/nasa-dart-mission-save-earth-successful-451970-2022-09-27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA DART Mission: एस्टेरॉयड से टकराया सैटेलाइट, पृथ्वी को बचाने का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1b1l5rl5mL-UXiURi0r8l2m0xHyhJ8NCaiMHkfKTxgfaYeaBUKoQevc2p5FyG5Gs9P6QfqOHL" alt="NASA DART Mission: एस्टेरॉयड से टकराया सैटेलाइट, पृथ्वी को बचाने का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>धरती को महफूज बनाने के मिशन के पहले पड़ाव को कामयाबी के साथ पार कर लिया गया.</p></div>
            </div>
        </a>
        </Template></>;
}