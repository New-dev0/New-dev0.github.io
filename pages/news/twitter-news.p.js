import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Twitter news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Twitter news"/>
        <meta name="description" content="Trending News about Twitter news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Twitter news</h1>
            <Image width={800} height={500} src="https://npr.brightspotcdn.com/dims4/default/e430d06/2147483647/strip/true/crop/5328x2797+0+599/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F11%2F18%2Fbirdtwitter-06398bbc4c779374658d9be95fd0f0457df7b2c0.jpg" alt="Twitter news"/>
            <h3>Recent News</h3>
            <a href='https://www.kosu.org/technology/2022-11-18/how-likely-is-a-complete-twitter-meltdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How likely is a complete Twitter meltdown?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxVTYlkyKPx9YQztlsEdxiEix-Lta8k0rxQYoSsyQI3GM6LivFzLycvdaZx-WyoLQoqxK1CIZ9" alt="How likely is a complete Twitter meltdown?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter employees who&#39;ve quit say risks are growing of service outages, glitches and even hacks on the influential social network.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/end-of-twitter-riptwitter-trends-as-experts-warn-of-tough-days-under-elon-musk-s-ownership-11668815228358.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Twitter shutting down? #RIPTwitter starts trending as experts issue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkoBs1C8BmpJD1-U1lNVX7QnBiDtbXshabgEruKEVJVEXPvBOymWxWe_wCxran7MFT2cJsDBcL" alt="Is Twitter shutting down? #RIPTwitter starts trending as experts issue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Since Elon Musk took over at the end of October, Twitter&#39;s headcount has decreased through layoffs and resignations to a tiny fraction of its original&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/technology/twitter-fate-in-doubt-as-employees-defy-musks-ultimatum/article66155327.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter fate in doubt as employees defy Musk&#39;s ultimatum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6k3lOaltww_6eMo1nCrGdE6bxt52Yvqsoo2Hwc13RN1CYfGVbh2tYXIi1sJSJcvjrxq5RJL3E" alt="Twitter fate in doubt as employees defy Musk&#39;s ultimatum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk asked engineers critical to the site&#39;s functioning to make their way to Twitter&#39;s headquarters in San Francisco to meet him in person.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/business-63672307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter locks staff out of offices until next week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAGNUTBuyEaTJZwpsvMsGKP8P8OL8uhoCoUXAF0LPoKFE2tIdTE6kxcza1BDncITgsT5-JVq3S" alt="Twitter locks staff out of offices until next week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter has told employees that the company&#39;s office buildings will be temporarily closed, with immediate effect. In a message seen by the BBC, workers were&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/business/twitter-drops-into-a-pitless-chaos/cid/1898954'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter drops into a pitless chaos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCOIem6o9k5UJbEtcBahqyBfFAT38J9qxXwjRfb4Gfn51CIsTHzC5_qJeTNQgaLz5nBcQjX2Z-" alt="Twitter drops into a pitless chaos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter&#39;s new owner Elon Musk has said that he is “not super worried” about the future of the social media giant as “the best people are staying” after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/technology/2022/nov/18/elon-musk-twitter-engineers-workers-mass-resignation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk summons Twitter engineers to headquarters amid mass ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9iuOykjRSQW6H4sQ6ZX-8887cKirt3Unb3du9Bl761ElHDYR6-z_9CCsY0ZfuJ-JUARWJoZ86" alt="Elon Musk summons Twitter engineers to headquarters amid mass ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reports show nearly 1200 workers left the company after an ultimatum that demanded &#39;long hours at high intensity&#39;</p></div>
            </div>
        </a><a href='https://www.amarujala.com/technology/social-network/users-urged-to-archive-tweets-amid-rumors-of-twitter-shutdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>क्या बंद होने वाला है ट्विटर, #RIPTwitter कर रहा ट्रेंड, यूजर्स ने की ट्वीट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBrNRMBHIqRBkM01SyXSZ1rvG6h-ajE8gEF19pxjOr-IDIUk3Zqe4yfRjrgPhs9_MBWwpwHIpN" alt="क्या बंद होने वाला है ट्विटर, #RIPTwitter कर रहा ट्रेंड, यूजर्स ने की ट्वीट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter यूजर्स ट्विटर पर ही #RIPTwitter और #GoodByeTwitter के साथ ट्वीट कर रहे हैं।</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/america-elon-musk-announces-new-twitter-policy-reinstates-banned-users-griffin-and-peterson-accounts-23213753.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter New Policy: एलन मस्क ने ट्विटर की नई पालिसी का किया ऐलान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5fsgOMJ5QD8Rbblay_FyPPGh8dGh-t6o62DCxLSs-2eieyeo3Ngk8foZW4hi1-nJR4sX5ds6D" alt="Twitter New Policy: एलन मस्क ने ट्विटर की नई पालिसी का किया ऐलान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एलन मस्क ने शुक्रवार को नई ट्विटर पालिसी का ऐलान किया। उन्होंने कहा कि नई ट्विटर नीति&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/business/twitter-employees-left-meeting-as-elon-musk-continued-speaking/1447287'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Layoff: छंटनी के बाद सामने आया Elon Musk का बयान, बोले-Twitter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbdCODCQdyPlVNTljD640RITLZxWOh-Lfl62z5qK_wc1XejH6BorEpGcgh1TA8DzbkNceo7w04" alt="Twitter Layoff: छंटनी के बाद सामने आया Elon Musk का बयान, बोले-Twitter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ट्विट्टर से एक साथ हजारों कर्मचार‍ियों को न‍िकालने के बाद एलन मस्क कठोर कदम उठाने से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/elon-musk-announces-negative-and-hate-tweets-to-be-deboosted-demonetised-under-the-new-twitter-policy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Twitter Policy: नई नीति के तहत नकारात्मक ट्वीट को आगे नहीं ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTY-RdZo1a1YirazM4NOVTE5HssKBY151SQg62APgGFV5WY1qo9a2hjVQKR6sqQ-MpkCoti-Aak" alt="New Twitter Policy: नई नीति के तहत नकारात्मक ट्वीट को आगे नहीं ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>एलन मस्क माइक्रोब्लॉगिंग साइट का नियंत्रण संभालने के बाद से ही ट्विटर को नया रूप देने&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}