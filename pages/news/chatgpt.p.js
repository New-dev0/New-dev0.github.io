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
        </a><a href='https://techcrunch.com/2022/12/02/chatgpt-isnt-putting-me-out-of-a-job-yet-but-its-very-good-fun/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT isn&#39;t putting me out of a job yet, but it&#39;s very good fun</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ChatGPT isn&#39;t putting me out of a job yet, but it&#39;s very good fun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I had to see if I was in near-term employment trouble, so I ran a little test with the ChatGPT model. Here are the results.</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/tech/tech-news/chatgpt-ai-chatbot-viral-rcna59628'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT, an AI chatbot, has gone viral. Some say it&#39;s better than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFXayenZ2z1WdmFMkeLO-Jeg5UMpAUmaZaDDRvrNCs-6UE58s0ETvDz1YR9J3i0uG4ivC2nzL9" alt="ChatGPT, an AI chatbot, has gone viral. Some say it&#39;s better than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ChatGPT, which launched this week, is a quirky chatbot developed by artificial intelligence company OpenAI. On its website, OpenAI states that ChatGPT is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/technology/features/story/chatgpt-using-open-ai-solves-coding-problems-for-free-may-put-jobs-of-many-coders-at-risk-in-future-2304491-2022-12-02'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ChatGPT using Open AI solves coding problems for free, may put ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS59imf9DG3o3ntqoxRs_e1Ar6yExM2uAFeb1qzndjrmd-7V4uvr2dbf3pP8zfv5R-wrMuJvbo0" alt="ChatGPT using Open AI solves coding problems for free, may put ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Notably, the same company is known for creating Dall-e, which also leverages artificial intelligence and machine learning to generate a caricature of almost&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/technology/explained-what-is-chatgpt-an-ai-chatbot-which-can-give-every-answer-101669994906168.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explained: What is ChatGPT, an AI chatbot which can give &#39;every ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQT89wGvwufnv1uIZBBCrJhw6m8YuiTMNL4ypnIKASAh8hySxRy_RBhr_jDYQb7lg8WAENZDyAR" alt="Explained: What is ChatGPT, an AI chatbot which can give &#39;every ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is said that ChatGPT, an artificial intelligence chatbot developed by OpenAI can can respond on everything - from stories, mathematical solutions to&nbsp;...</p></div>
            </div>
        </a><a href='https://slate.com/technology/2022/12/chatgpt-openai-artificial-intelligence-chatbot-whoa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Finally, an A.I. Chatbot That Reliably Passes “the Nazi Test”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWgnVSVlgWtE97bSjFolbkmlsURCLNzH2Pkegg4Iye2tzqkd_N23nLtdEKuVSWMUmmGiVh2iOq" alt="Finally, an A.I. Chatbot That Reliably Passes “the Nazi Test”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chatbot that meets the hype is finally here. On Thursday, OpenAI released ChatGPT, a bot that converses with humans via cutting-edge artificial intelligence.</p></div>
            </div>
        </a>
        </Template></>;
}