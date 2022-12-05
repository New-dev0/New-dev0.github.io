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
            <Image width={800} height={500} src="https://c.ndtvimg.com/2022-12/0a7t0c9c_computer-generic_625x300_04_December_22.jpg" alt="ChatGPT"/>
            <h3>Recent News</h3>
            <a href='https://www.ndtv.com/world-news/chatgpt-all-you-need-to-know-about-the-new-dialogue-based-ai-chatbot-3577284'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT: All You Need To Know About The New Dialogue-Based ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRD28EBlKD1bOYivetqfrE78bVCdu3zWvMkQbxzBamNWLOjah5hGHy_qAVoEgXtIuQlpZPT_3w0" alt="ChatGPT: All You Need To Know About The New Dialogue-Based ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Developed by a OpenAI, an artificial intelligence research and development company, the chatbot can interact in a “conversational way”. According to OpenAI, it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/viral/people-reveal-what-a-conversation-with-chatgpt-the-sophisticated-ai-chatbot-sounds-like-article-95985146'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>People reveal what a conversation with ChatGPT, the sophisticated ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZxZAFA3acumikRxf78iAQuXkv50T7eq82a7qmAU5J4a1Sw13WlX7fTP08lMqn-s5xL-3M4fkr" alt="People reveal what a conversation with ChatGPT, the sophisticated ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The conversations with ChatGPT, posted on Twitter by fascinated users, show a kind of omniscient machine, capable of explaining scientific concepts and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.financialexpress.com/life/technology-chatgpt-decoded-everything-to-know-about-openais-new-chatbot-internet-cant-seem-to-get-enough-of-2900086/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT decoded: Everything to know about OpenAI&#39;s new chatbot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_g3dp1diVfDFxu1nOHGP1ukS-ztPMi-6CSHtyBAAxeG2Y_3H6AUeuGuQ9wq1pHmSgJtDogi0k" alt="ChatGPT decoded: Everything to know about OpenAI&#39;s new chatbot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>OpenAI is an Artificial Intelligence (AI) research company. Recently it announced ChatGPT, which is a prototype dialogue-based AI chatbot that is capable of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/technology/explainer-everything-you-need-to-know-about-ai-bot-chatgpt-9647341.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MC Explains | Everything you need to know about AI bot ChatGPT</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTR1GCSyzg1MK9ApD1rLlizquF4FeI0lrqL33FHvjrDqQ4s7J4GQNlsrRAYzLgt7zcOtG5YHlb" alt="MC Explains | Everything you need to know about AI bot ChatGPT" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT is a dialogue based AI chat bot that can understand and respond in natural language.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/tech-news-technology/what-is-chatgpt-the-ai-taking-the-web-by-storm-8302375/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is ChatGPT, the AI chatbot that&#39;s taking the internet by storm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBee-jC2fzd1_m5KI7VVkohvjAS5lOPIqbm2XkarCR0MQZzrAkvLm4KgBYhlq8ysb_Q6jjmkW7" alt="What is ChatGPT, the AI chatbot that&#39;s taking the internet by storm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artificial Intelligence (AI) research company OpenAI on Wednesday announced ChatGPT, a prototype dialogue-based AI chatbot capable of understanding natural&nbsp;...</p></div>
            </div>
        </a><a href='https://mashable.com/article/chatgpt-amazing-wrong'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT from OpenAI is a huge step toward a usable answer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7t0NFWmIVC-Ltp8o6arOaFtt8EZ8YNTlU3yigLWJgmZsACreYINowoKrRXBiO-She6ZBJFAFu" alt="ChatGPT from OpenAI is a huge step toward a usable answer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT answers prompts in a straightforward way and can also provide useful common sense when a question doesn&#39;t have an objectively correct answer.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/openais-new-chatbot-chatgpt-to-generate-more-conversational-responses-but-is-still-prone-to-create-disinformation-claims-report/articleshow/95942534.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OpenAI&#39;s new chatbot ChatGPT to generate more conversational ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpqscgaZFxDblihPATzkUInZlZbUoB0UmVGZ8cbFe4cGjZRg-U64RzNgZEu9X5DIF1xCp8Hwc-" alt="OpenAI&#39;s new chatbot ChatGPT to generate more conversational ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT, an AI chatbot, has been taught to respond to user inquiries in a conversational manner. It&#39;s exceptionally skilled, yet it&#39;s still prone to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}