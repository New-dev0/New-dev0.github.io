import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iran</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iran"/>
        <meta name="description" content="Trending News about Iran" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iran</h1>
            <Image width={800} height={500} src="https://www.consilium.europa.eu/media/60079/20221114-iran-press-release.png" alt="Iran"/>
            <h3>Recent News</h3>
            <a href='https://www.consilium.europa.eu/en/press/press-releases/2022/11/14/iran-eu-adopts-additional-sanctions-against-perpetrators-of-serious-human-rights-violations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran: EU adopts additional sanctions against perpetrators of serious ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXHSxrvSEKmX3tUqCsGPZbauLKfp-ftBU2i6SeomuNj-yWTamXCdejbV96ryeEXGVYz3LVxVQn" alt="Iran: EU adopts additional sanctions against perpetrators of serious ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Council adopted further restrictive measures in view of the human rights situation in Iran.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/us-envoy-rules-out-push-for-iran-nuclear-talks-amidst-protests-and-drone-sales-11668456621530.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US envoy rules out push for Iran nuclear talks amidst protests and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2PiBervcAYcIjmSrQPDzVtRgi7NCuPz6M7K4bM8DH7yxWTm6f7NKoXvNXt_QI6yifK40yOIH4" alt="US envoy rules out push for Iran nuclear talks amidst protests and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran&#39;s crackdown on protesters and the sale of drones to Russia have turned the United States&#39; focus away from reviving a nuclear deal with Iran.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/world/death-term-for-iran-protester/cid/1898105'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Death term for Iran protester</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSx2wtFXEFbxZhzZyJrLr8Xg0EXaz0sMLp_xtkodMk8_rKsOwx5Sm0sPDOGKgBQaYstrWgp0pu1" alt="Death term for Iran protester" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mizan, a news website linked to Iran&#39;s judiciary, said the death sentence followed charges of the protester setting fire to a government building.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-middle-east-63621330'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran protests: Tehran court sentences first person to death over unrest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwLdrgmUTzBeeZXCfcurURvlQzFy2S02pUcWYfBJBDmCjLKuyXwl5gIEUOPLG5TP30fDCKXaWy" alt="Iran protests: Tehran court sentences first person to death over unrest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The anti-government protests began two months ago after the death of a young woman in custody.</p></div>
            </div>
        </a><a href='https://www.reuters.com/business/energy/five-iran-related-oil-tankers-lose-their-flags-following-us-sanctions-2022-11-14/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five Iran-related oil tankers lose their flags following U.S. sanctions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkrrlHgkU1L5nWgQ316ynxyKrSIsgNgWIlTe8Qov2NBMMukEw5UXK97Yna9hPqpRnlv5oSe9Xh" alt="Five Iran-related oil tankers lose their flags following U.S. sanctions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The international ship registries of Djibouti and the Cook Islands suspended the flags on five oil tankers, following sanctions by the United States this&nbsp;...</p></div>
            </div>
        </a><a href='https://theprint.in/world/eu-imposes-fresh-sanctions-on-iran-over-protest-crackdown/1216601/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EU imposes fresh sanctions on Iran over protest crackdown</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCl8CVPRlvWE5lW09VkidF0Jqks8PuGL4xPpjwjlri3R_1WUuhGGbVuotGhT0Va-RXyM_4ijHC" alt="EU imposes fresh sanctions on Iran over protest crackdown" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brussels [Belgium], November 15 (ANI): The European Union (EU) has imposed additional sanctions on Iran, targeting 29 individuals and three organizations&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/no-push-for-iran-nuclear-talks-due-to-protests-drone-sales-to-russia-us-3520579'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Push For Iran Nuclear Talks Due To Protests, Drone Sales To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF_NsG7OVMIVlWVovmH-TA404fjq9CCSLODikGdbn4vZtoZUoiZxlj5VDVZbfft7v6nci2e0xm" alt="No Push For Iran Nuclear Talks Due To Protests, Drone Sales To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran&#39;s crackdown on protesters and the sale of drones to Russia have turned the United States&#39; focus away from reviving a nuclear deal, which Tehran has so&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/international/iran-targets-kurdish-opposition-group-in-neighbouring-iraq-news-237383'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran Targets Kurdish Opposition Group In Neighbouring Iraq</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqN-atwdQ99BQabOk-WI2ahvRnLMjBb1blhRJNXI-AS0ocp07THownbe3YkOrj1thlrF14MxQu" alt="Iran Targets Kurdish Opposition Group In Neighbouring Iraq" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iran&#39;s paramilitary Revolutionary Guard confirmed the attack and said it had targeted the bases of &#39;terrorist groups&#39; by drones and missiles, according to&nbsp;...</p></div>
            </div>
        </a><a href='https://eurasiantimes.com/refusing-to-sing-the-american-song-iran-russia-collaborate/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Refusing To Sing The &#39;American Song&#39;, Undeterred Iran &amp; Russia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQl3UNJ7toM9AHxZvtrqx5vGHWaJol_45KrLdfu4_QSoZsSnwHddjN3hcLt4_0JyNP5_HY4VoPH" alt="Refusing To Sing The &#39;American Song&#39;, Undeterred Iran &amp; Russia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Refusing To Sing The &#39;American Song&#39;, Undeterred Iran &amp; Russia Collaborate In Proliferating The Arms Industry &middot; US Support To Israel Over Iranian Nuclear Threats.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/14/iran-issues-first-death-sentence-protests-mahsa-amini'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran issues first death sentence over protests</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0W6Rxbd-sRb-Fc5tAeo1NYoJuNZDylDzI2SXn9cj4mYVtghyDEunCQGKy83VKyJFnZ2-cn6GX" alt="Iran issues first death sentence over protests" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unnamed person faces execution for alleged arson as part of crackdown on unrest triggered by death of Mahsa Amini.</p></div>
            </div>
        </a>
        </Template></>;
}