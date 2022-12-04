import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ChatGPT</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ChatGPT"/>
        <meta name="description" content="Trending News about ChatGPT" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ChatGPT</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/12/openai-featured.jpg" alt="ChatGPT"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/technology/tech-news-technology/what-is-chatgpt-the-ai-taking-the-web-by-storm-8302375/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is ChatGPT, the AI chatbot that&#39;s taking the internet by storm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBee-jC2fzd1_m5KI7VVkohvjAS5lOPIqbm2XkarCR0MQZzrAkvLm4KgBYhlq8ysb_Q6jjmkW7" alt="What is ChatGPT, the AI chatbot that&#39;s taking the internet by storm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artificial Intelligence (AI) research company OpenAI on Wednesday announced ChatGPT, a prototype dialogue-based AI chatbot capable of understanding natural&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/openais-new-chatbot-chatgpt-to-generate-more-conversational-responses-but-is-still-prone-to-create-disinformation-claims-report/articleshow/95942534.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OpenAI&#39;s new chatbot ChatGPT to generate more conversational ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpqscgaZFxDblihPATzkUInZlZbUoB0UmVGZ8cbFe4cGjZRg-U64RzNgZEu9X5DIF1xCp8Hwc-" alt="OpenAI&#39;s new chatbot ChatGPT to generate more conversational ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT, an AI chatbot, has been taught to respond to user inquiries in a conversational manner. It&#39;s exceptionally skilled, yet it&#39;s still prone to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/tech/tech-news/chatgpt-ai-chatbot-viral-rcna59628'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT, an AI chatbot, has gone viral. Some say it&#39;s better than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFXayenZ2z1WdmFMkeLO-Jeg5UMpAUmaZaDDRvrNCs-6UE58s0ETvDz1YR9J3i0uG4ivC2nzL9" alt="ChatGPT, an AI chatbot, has gone viral. Some say it&#39;s better than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT has become social media&#39;s latest favorite tool for getting answers online. But some have warned bad actors could take advantage of the bot.</p></div>
            </div>
        </a><a href='https://analyticsindiamag.com/will-100x-better-chatgpt-really-be-the-google-killer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will &#39;100x Better&#39; ChatGPT Really be The Google Killer?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD54Q_wXOuOwko5Qu02FhnRmSwEsh2GWt-_2fMctJLcENMXkkFxBlLZKi_1PE_BbLXs6rtGPyy" alt="Will &#39;100x Better&#39; ChatGPT Really be The Google Killer?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While a simple query on Google Search throws multiple links at you, ChatGPT gives you answers upfront.</p></div>
            </div>
        </a><a href='https://techcrunch.com/2022/12/02/chatgpt-isnt-putting-me-out-of-a-job-yet-but-its-very-good-fun/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT isn&#39;t putting me out of a job yet, but it&#39;s very good fun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWV5LimFMhjDdU-GPmop77PzXrzmwXhxPF9UUTmb2IE7cadIVN-4fAU0XdEFHU6edGHy15-GFo" alt="ChatGPT isn&#39;t putting me out of a job yet, but it&#39;s very good fun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(You can make a free OpenAI account and give the service a shake yourself. Just don&#39;t identify as a journalist during the onboarding process — you&#39;ll get jammed&nbsp;...</p></div>
            </div>
        </a><a href='https://techcrunch.com/2022/12/02/daily-crunch-chatgpts-user-experience-and-implementation-should-have-google-scared/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daily Crunch: ChatGPT&#39;s user experience and implementation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZCoP9BF75_t3lIBYelMGFEFQczvPChT8GqwV3nVdmWO0nS_xhCOPF4_U9U9XVRvKi9XT-3ULm" alt="Daily Crunch: ChatGPT&#39;s user experience and implementation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/technology/features/story/chatgpt-using-open-ai-solves-coding-problems-for-free-may-put-jobs-of-many-coders-at-risk-in-future-2304491-2022-12-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT using Open AI solves coding problems for free, may put ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRO9Bwl49ajxraJ6zoOw1WUxQOxnfS4zjtQT6SQQzKKkWAgvQmdQln-d4sLn40keIOaF1PdK2JX" alt="ChatGPT using Open AI solves coding problems for free, may put ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Notably, the same company is known for creating Dall-e, which also leverages artificial intelligence and machine learning to generate a caricature of almost&nbsp;...</p></div>
            </div>
        </a><a href='https://www.digitaltrends.com/computing/how-to-use-openai-chatgpt-text-generation-chatbot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT: how to use this viral, often hilarious AI chatbot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1xBbAnF9JX_OHrmCRjZV-HiEm5vrHG1FgLckEXp532ZpYgcCt_aUknwa7_zlIzOLbRKqGwEn6" alt="ChatGPT: how to use this viral, often hilarious AI chatbot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ChatGPT chatbot by OpenAI is now available for testing as a free research preview.</p></div>
            </div>
        </a>
        </Template></>;
}