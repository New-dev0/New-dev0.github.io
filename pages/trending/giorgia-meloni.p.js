import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Giorgia Meloni</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Giorgia Meloni"/>
        <meta name="description" content="Trending News about Giorgia Meloni" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Giorgia Meloni</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94460579,width-1070,height-580,imgsize-69076,overlay-economictimes/photo.jpg" alt="Giorgia Meloni"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/us/italy-elections-who-is-giorgia-meloni-read-to-know/articleshow/94459893.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy elections: Who is Giorgia Meloni? Read to know</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvlOMPjbXN0vELjvamUDP4DHcHvnr3w1TFhTWlBKtfmUgoI9hROgnCpIFocnIuir1nqsyyRY6c" alt="Italy elections: Who is Giorgia Meloni? Read to know" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Politician Giorgia Meloni has decided to keep her party&#39;s office in a historic building that once was visited by the followers of Benito Mussolini,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-europe-63042305'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giorgia Meloni: Italy&#39;s new leader arrives at a critical time for Europe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREBPW0QEKGhXNpGGVfRY9x1r462Nf28BjPZSCgHHNMP3zbcesFXKpYxnYMncEH7m3A63V7Bm4R" alt="Giorgia Meloni: Italy&#39;s new leader arrives at a critical time for Europe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From political wilderness to pole position to become Italy&#39;s first female prime minister, this is the moment Giorgia Meloni has been waiting for all her&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/ideas/archive/2022/09/italy-election-far-right-winner-giorgia-meloni-fascism/671556/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giorgia Meloni&#39;s Election Win Is Not a Vote for Fascism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLzD9_yRXdB_952eFVJQ1tntvYQ1jQoCKvcrF2XnFZGm5IQYYZnVvZ5RDspGbMy4GkraVxk896" alt="Giorgia Meloni&#39;s Election Win Is Not a Vote for Fascism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The electoral victory of Giorgia Meloni is nothing to be complacent about, but Italians are cynical about how long any government will last.</p></div>
            </div>
        </a><a href='https://www.railfreight.com/beltandroad/2022/09/26/italy-likely-to-leave-the-belt-and-road-under-giorgia-meloni/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy likely to leave the Belt and Road under Giorgia Meloni</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUVFNsi_nySj79JjCNpnMAYZmDTVAWvq1NCmrxAyST4Jf_Z-4MCj35wRjKrFBy6SOrlXIYxJS2" alt="Italy likely to leave the Belt and Road under Giorgia Meloni" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Just after she claimed victory in the national elections in Italy, Giorgia Meloni, leader of the far-right party Fratelli d&#39;Italia and the future Italian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagranjosh.com/general-knowledge/who-is-giorgia-meloni-the-first-woman-pm-of-italy-1664200073-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Giorgia Meloni, the first woman PM of Italy?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvxgC2t1Qgjwn7SMNU2-ii_cQ5XiXFXGTV29T7QEDzEplU-0bI-msHL3sM44Kve9H7utRBG6W_" alt="Who is Giorgia Meloni, the first woman PM of Italy?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giorgia Meloni has become the first woman prime minister of Italy with majority votes. Read the article to know about Giorgia Meloni, her early life,&nbsp;...</p></div>
            </div>
        </a><a href='https://frontline.thehindu.com/news/giorgia-meloni-star-of-the-italian-far-right/article65937509.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giorgia Meloni: Star of the Italian far right</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwooMYajxjtcA5mYmiT8GSl81LapXHhq4MYcBhxw_eVv62fr1r_TLTkBZfCz92gk9ggvAMqDlp" alt="Giorgia Meloni: Star of the Italian far right" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her critics warn she is flirting with Italy&#39;s fascist history.</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/other-who-will-be-the-first-women-pm-of-italy-giorgia-meloni-she-makes-a-statement-on-abortion-23099564.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Giorgia Meloni: इटली में शरणार्थियों के मुद्दे पर काफी मुखर हैं ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1LPKePzZTaxFoEpYfb9cYIWT_t4ppVr5gWZn2Skwm1KKBnRhO8fSPhu1UZRUWtpxZgK1ZwJgg" alt="Who is Giorgia Meloni: इटली में शरणार्थियों के मुद्दे पर काफी मुखर हैं ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इटली में जियोर्जिया मेलोनी के लिए देश की पहली महिला पीएम बनने का रास्‍ता साफ हो चुका है&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/world/rest-of-europe/giorgia-meloni-italy-elections-news-who-is-giorgia-meloni-first-female-prime-minister/articleshow/94462389.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giorgia Meloni Italy: मुसोलिनी की समर्थक, मुसलमानों की विरोधी... कौन हैं ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAywwB4ukXZizo-yPj4wJX9CkHoy072kwtPE0pJ4C7XsSMfPeW7ci6aBOhTGZFr2Etv1O47e-o" alt="Giorgia Meloni Italy: मुसोलिनी की समर्थक, मुसलमानों की विरोधी... कौन हैं ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जॉर्जिया मेलोनी की ब्रदर्स ऑफ इटली पार्टी के नेतृत्व में धुर-दक्षिणपंथी पार्टियों का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/italy-election-victory-made-giorgia-meloni-the-face-of-the-far-right-of-europe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy Election: इटली में जीत ने जियोर्जिया मेलोनी को बनाया पूरे यूरोप के धुर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfEchsmBwGeRzxtvcgI0188jBzwLfj0cOqln0uNxR4CWZR1oM-vvWFYgSCjEj0ZCE4AHa427cw" alt="Italy Election: इटली में जीत ने जियोर्जिया मेलोनी को बनाया पूरे यूरोप के धुर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy Election: इटली के चुनाव में जीत के बाद जियोर्जिया मेलोनी को अब यूरोप में धुर दक्षिणपंथ&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.newsroompost.com/world/know-who-is-giorgia-who-can-become-the-new-prime-minister-of-italy/797673.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giorgia Meloni: जानिए कौन हैं जियोर्जिया? जो बन सकतीं हैं इटली की नई ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSni1hW0Apxh8Nw_xYQX9aAtKuxzafUSX8Jy7HLjq6o4oIizgTEgEhN1ArVXcwOXvGHAk2V3FZ1" alt="Giorgia Meloni: जानिए कौन हैं जियोर्जिया? जो बन सकतीं हैं इटली की नई ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आपको बता दें कि जियोर्जिया का जन्म 15 जनवरी 1977 को हुआ। वह एक इतालवी पत्रकार और&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}