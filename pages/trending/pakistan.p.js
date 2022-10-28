import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pakistan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pakistan"/>
        <meta name="description" content="Trending News about Pakistan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pakistan</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2019/12/10/750x506/pakistan-flag_1575967131.jpeg" alt="Pakistan"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/world/surge-in-crime-rates-in-pakistan-karachi-residents-has-created-fear-psychosis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan: कराची की सड़कों पर बढ़ते अपराधों से लोगों के मन में बैठा डर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAYvwk5rVZq_oekFRyaJtT8q_hED3GDM7M0BqHbQ77yCyN3CA_GCA2gydWvrgZv5V6WSFYd0dj" alt="Pakistan: कराची की सड़कों पर बढ़ते अपराधों से लोगों के मन में बैठा डर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पाकिस्तान के कराची में बढ़ते अपराधों के चलते यहां के निवासियों में डर बैठ गया है।</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/nine-year-old-girl-found-chained-by-employers-in-pakistan-faisalabad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan: पाकिस्तान के फैसलाबाद में नौ साल की बच्ची जंजीर से बंधी पाई गई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pakistan: पाकिस्तान के फैसलाबाद में नौ साल की बच्ची जंजीर से बंधी पाई गई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फैसलाबाद शहर के पुलिस अधिकारी (सीपीओ) ओमर सईद मलिक के एक बयान के अनुसार,&nbsp;...</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/t20-world-cup-spirited-zimbabwe-stun-pakistan-snatch-thrilling-1-run-victory/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: Spirited Zimbabwe stun Pakistan, snatch thrilling 1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0CsJIuWDbb8NX9m43jdQU-vq8yOQTttUSQN96KA1dlf4GXgWj8t6NQdSjmpa_h7ItcfgnUQ_m" alt="T20 World Cup: Spirited Zimbabwe stun Pakistan, snatch thrilling 1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Perth: A spirited Zimbabwe team held its nerves to beat Pakistan by one run in a thrilling ICC Men&#39;s T20 World Cup 2022 Super 12 match that went down to the&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/how-did-zimbabwe-win-the-last-over-thriller-against-pakistan-hard-lengths-hard-lengths-8233955/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How did Zimbabwe win the last-over thriller against Pakistan? Hard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQdbYDDMxDEE5lLRvagdwz1ZdbYmB3SrTZMiK2RKAU_UJoiX_hytmKg3jRRVUFI_XBgKqiGLIl" alt="How did Zimbabwe win the last-over thriller against Pakistan? Hard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chasing 131 runs, Pakistan went agonizingly close as they fell short by only 1 run and lost their second match in a row in the T20 World Cup.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/defence/pakistan-army-personnel-can-make-mistakes-but-they-can-never-be-traitors-or-conspirators-army-spokesman/articleshow/95126970.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan Army personnel can make &#39;mistakes&#39;, but they can never be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaGtum1K72CXFajB4J5nK7RKUD_6gIq4NOkn4NEYnMbH9A1g12fW3X0Hq9Ybu1rIaVJujxIP4L" alt="Pakistan Army personnel can make &#39;mistakes&#39;, but they can never be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Military spokesperson Maj Gen Babar Iftikhar made the remarks during an unprecedented press conference by the country&#39;s powerful spy agency Inter-Services&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/oct/27/raza-stars-as-zimbabwe-claim-last-ball-win-over-pakistan-at-t20-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raza stars as Zimbabwe claim last-ball win over Pakistan at T20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4p8UpYVD_ev9_jFXAePELvlEwOE_nUGsqmqAZh97bAfFRNW-YfpObCjrh8JrhOLFF-IAvjeb1" alt="Raza stars as Zimbabwe claim last-ball win over Pakistan at T20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan&#39;s T20 World Cup hangs by a thread after defeat to Zimbabwe, while India and South Africa registered comfortable wins.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/srinagar/rajnath-singh-kashmir-pakistan-infantry-day-speech-8232725/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan will have to bear consequences for atrocities in PoK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTakGW7mpHJb6k936Y287yJJv1lz4qNvFQNBle6mBBiNz-eBBcJipL6J0VOKNo-fJnqfaXmDrwY" alt="Pakistan will have to bear consequences for atrocities in PoK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Defence Minister said, &quot;Is the terrorist act done seeing whether there is a Hindu or a Muslim in front? Terrorists only know how to execute their plans&nbsp;...</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2877598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan&#39;s route to redemption explained as Babar Azam vows to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdAiUcoFQHhHNemXzE34HuYMzb6MUot7PyQjbOiftzlN6AwxvP4q58U5YLgmgHVnyNJ4JovC8l" alt="Pakistan&#39;s route to redemption explained as Babar Azam vows to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zimbabwe pull off stunning win against Pakistan to throw Group 2 wide open in the ICC Men&#39;s T20 World Cup 2022. Two defeats by the narrowest of margins have&nbsp;...</p></div>
            </div>
        </a><a href='https://factly.in/video-of-an-elderly-man-admitting-his-heinous-crime-is-from-pakistan-not-india/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video of an elderly man admitting his heinous crime is from Pakistan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRB6lZlH1Ze-7lel7r3EwYQp0xPtW1J85x0grtLYL6FTeuDg1JOayG-0ibIwqjKgkIix_Jhu2o4" alt="Video of an elderly man admitting his heinous crime is from Pakistan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Video of a 60-year-old Muslim man admitting that he sexually assaulted his daughter is from Pakistan, not India.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/us-pledges-another-usd-30-million-in-assistance-for-flood-hit-pakistan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flood in Pakistan: अमेरिका ने बाढ़ प्रभावितों के लिए पाकिस्तान को दी और ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRylW8-aREqc9G7I7k0ScsvM67-6BFx0Cdioad8l3zSQGZUGV55B1hr7JN0Z9bCBLl1gCAqw3LS" alt="Flood in Pakistan: अमेरिका ने बाढ़ प्रभावितों के लिए पाकिस्तान को दी और ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अमेरिकी दूतावास के एक बयान के अनुसार, राजदूत ने बाढ़ प्रभावित लोगों की मदद के लिए&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}