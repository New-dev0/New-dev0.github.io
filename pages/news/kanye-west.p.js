import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kanye West</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kanye West"/>
        <meta name="description" content="Trending News about Kanye West" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kanye West</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95947479,width-1070,height-580,imgsize-33618,overlay-economictimes/photo.jpg" alt="Kanye West"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/world-news/musk-kicks-kanye-west-off-twitter-after-swastika-post/articleshow/95947475.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musk kicks Kanye West off Twitter after Swastika post</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnqhsD64RXxCuaI-eAyE_OUI0kaVobR5LkeeU5hh3hVIw6ypoaT0BnGmeA31EO7BkzRtX6EWPC" alt="Musk kicks Kanye West off Twitter after Swastika post" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elon Musk kicked Kanye West off Twitter on Friday &quot;for incitement to violence,&quot; after the rapper posted a picture that appeared to show a swastika&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/photo-gallery/entertainment/bollywood/elon-musk-suspended-kanye-west-twitter-account-for-this-reason'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West Twitter: अमेरिकी रैपर कान्ये वेस्ट का ट्वीटर अकाउंट हुआ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSw_SsVgoTQ_0EdmdpdXba657VxcubgIYNEbqsZDaALG6LZGlLTmniXlKvfdMcsme8rszaIwj3y" alt="Kanye West Twitter: अमेरिकी रैपर कान्ये वेस्ट का ट्वीटर अकाउंट हुआ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फिलहाल अब अमेरिकी रैपर कान्ये वेस्ट का ट्वीटर अकाउंट सस्पेंड कर दिया गया है। जानकारी के&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/business-63826675'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk suspends Kanye West from Twitter for inciting violence</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUdGawsqXdI6aw77OMA86c0WPR0lccPqVPsjwzhLuhEH_DQzLnmOobw863Q8ID5MdjjujEkPNI" alt="Elon Musk suspends Kanye West from Twitter for inciting violence" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The US rapper, who now goes by the name Ye, posted a series of erratic tweets - one of which appeared to show a symbol combining a swastika and a Jewish star.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/kanye-west-twitter-account-suspended-elon-musk-says-i-tried-my-best-2272588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West: &#39;हिटलर&#39; समर्थक कान्ये वेस्ट का ट्विटर अकाउंट सस्पेंड, एलन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-4_OCgCCdcdTr7fq44s3O0iUScBi5vVois9zYWeEp6SS7zJCmBTldOBNVESsJzILV7EHs8MIB" alt="Kanye West: &#39;हिटलर&#39; समर्थक कान्ये वेस्ट का ट्विटर अकाउंट सस्पेंड, एलन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>हिटलर का समर्थन करने पर कान्ये वेस्ट का ट्विटर अकाउंट सस्पेंड कर दिया गया है. इससे पहले&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/technology/2022/12/02/kanye-west-twitter-suspended-elon-musk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elon Musk says Kanye West suspended from Twitter after swastika ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLkIWacfbGrr9z3JTEQcRg7_ZSIxI7rvA-qhWBlN3EaBte3xi-mmuXOpDxkoSVuqCdrJQzy4Ch" alt="Elon Musk says Kanye West suspended from Twitter after swastika ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musk said Ye was suspended for “incitement to violence” after his swastika tweet and his praise of Hitler in an interview with Infowars&#39;s Alex Jones.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/12/2/musk-boots-kanye-west-off-twitter-for-swastika-star-of-david-post'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musk boots Kanye West off Twitter for swastika-Star of David post</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOrmZfujQDVgoK2hgARdcMvhM9QljXbDTpBg8Sn4g0baIY-3gKU1Z5InLp3pODw-Ii_DGgfDJB" alt="Musk boots Kanye West off Twitter for swastika-Star of David post" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Twitter has suspended rapper Ye, formerly known as Kanye West, after he tweeted a picture of a swastika merged with the Star of David.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/heres-why-kanye-west-s-twitter-account-was-suspended-11669973336961.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West&#39;s Twitter account suspended again. Here&#39;s why | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuMCjCATCGvFczrxT1yi6K5Ph6300B57YxFnQSQUO1oU9eyCvKKuNLOB3gvFIUkIj_38RBeOEa" alt="Kanye West&#39;s Twitter account suspended again. Here&#39;s why | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two months after it was reinstated, Twitter Inc on 2 December suspended Kanye West&#39;s account again. New microblogging site owner Elon Musk said he had&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/02/kanye-west-kim-kardashian-cheated-chris-paul-twitter/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kim Kardashian Did Not Cheat on Kanye West with Chris Paul ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSofFGSErWtmgyXsm2dhf6cAaNGvYv5A6okhsWrDpu2Rt9tDXcm5ZWrKBlnVjKWt2iW8RNA8ooE" alt="Kim Kardashian Did Not Cheat on Kanye West with Chris Paul ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanye West is doing everything he can to deflect attention away from his praising of Hitler, even throwing out false allegations about his ex-wife Kim&nbsp;...</p></div>
            </div>
        </a><a href='https://nymag.com/intelligencer/2022/12/not-even-alex-jones-can-help-kanye-west.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Not Even Alex Jones Can Help Kanye West</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRWoPmcr8tNxuZo3Px4jc-VyoWjoeNTdRrsupuc1sgfTQhhpyBOTUAkM5XQw-vS34F5GINV0lx" alt="Not Even Alex Jones Can Help Kanye West" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rapper now known as Ye made countless antisemitic comments and even praised Adolf Hitler during an episode of Alex Jones&#39; show.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/history/2022/12/02/hitler-kanye-west-black-germans-holocaust/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A history lesson for Ye: Hitler would have sterilized your children</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBcL-PqQpVJpoa2H2eEDD50Rp7APKy-IVqbGscDWjJs-cffjXDDG157CZoZL1x518fbMFZzDqB" alt="A history lesson for Ye: Hitler would have sterilized your children" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ye, the rapper formerly known as Kanye West, praised Adolf Hitler, despite the Nazi dictator&#39;s hatred of Black people.</p></div>
            </div>
        </a>
        </Template></>;
}