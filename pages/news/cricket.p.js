import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="https://www.usacricket.org/wp-content/uploads/2022/11/Womens-U19s.jpg" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://www.usacricket.org/media-release/usa-cricket-womens-under-19s-to-tour-uae-for-critical-world-cup-preparation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA Cricket Women&#39;s Under 19s to Tour UAE for Critical World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4TO5b2dssfNJ2Szn9Ny1gFgtnIqT-qQ-YuuzzdnuUrrk2X67dVPEA3LuSAKeicuZ4Va5Vdh7K" alt="USA Cricket Women&#39;s Under 19s to Tour UAE for Critical World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USA Women&#39;s Under 19s will undertake a tour of the United Arab Emirates including 5 x T20Is as part of a bilateral series with UAE next week.</p></div>
            </div>
        </a><a href='https://www.bhaskar.com/local/mp/guna/news/selection-trial-in-cricket-team-today-130579307.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>इंटर डिवीजन क्रिकेट टूर्नामेंट: क्रिकेट टीम में चयन का ट्रायल आज</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="इंटर डिवीजन क्रिकेट टूर्नामेंट: क्रिकेट टीम में चयन का ट्रायल आज" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मप्र क्रिकेट एसोसिएशन द्वारा एमएम जगदाले अंडर 15 इंटर डिवीजन क्रिकेट टूर्नामेंट&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/punjab/chandigarh-tie-chandigarh-cricket-league-smart-data-beat-property-and-paisa-by-11-runs-23212164.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TIE Chandigarh Cricket League: रोमांचक मुकाबले में स्मार्ट डेटा ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXWJWbXp-2a2F7Z6w7fGkuMo_mTli70RY_p2EQme2Jsnd7AhUeuAfotW8DM5bhKM4-cPzHWkFx" alt="TIE Chandigarh Cricket League: रोमांचक मुकाबले में स्मार्ट डेटा ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मोहाली में आज से टाई चंडीगढ़ क्रिकेट लीग -2022 का आगाज हो गया। इस प्रतियोगिता में देश की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/State/kamaraj-government-arts-college-cricket-association-mou-839700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>காமராஜர் அரசு கலைக்கல்லூரி- கிரிக்கெட் சங்கம் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoxhSdzd9K4LQJReVAhAM424C-DQcUCbvWd6M-La9d2I2igyTm8PwXqWnx9Vf57WzKNsejeady" alt="காமராஜர் அரசு கலைக்கல்லூரி- கிரிக்கெட் சங்கம் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>சுரண்டை காமராஜர் அரசு கலைக்கல்லூரியும், மாவட்ட கிரிக்கெட் சங்கமும் புரிந்துணர்வு&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/News/Maharashtra/Mumbai/5-arrested-in-cricket-gambling-remand-till-22nd-839625'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>கிரிக்கெட் சூதாட்டத்தில் கைதான 5 பேருக்கு 22-ந் தேதி ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxv772DXpRZXjN9yNrGf75y7DaY7CQ5fqpa-KFD-8fIs_GODoPBEVkMhCk72Ug9xtqA7Mg0M2n" alt="கிரிக்கெட் சூதாட்டத்தில் கைதான 5 பேருக்கு 22-ந் தேதி ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>கிரிக்கெட் சூதாட்டத்தில் கைதான 5 பேருக்கு 22-ந் தேதி வரை போலீஸ் காவலில் வைத்து&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailythanthi.com/Sports/Cricket/2nd-odi-australia-vs-england-clash-today-840154'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2-வது ஒருநாள் கிரிக்கெட் போட்டி: ஆஸ்திரேலியா ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ30FAc-MDqjzyxhRfnA0kx9sTa3FuqKi0lT3eHl135zIQJey9eUU4AmLhNTmdPzIW-KHo12Bh8" alt="2-வது ஒருநாள் கிரிக்கெட் போட்டி: ஆஸ்திரேலியா ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ஆஸ்திரேலியா-இங்கிலாந்து மோதும் 2-வது ஒருநாள் கிரிக்கெட் சிட்னியில் இன்று நடக்கிறது.</p></div>
            </div>
        </a>
        </Template></>;
}