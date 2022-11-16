import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bear Grylls</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bear Grylls"/>
        <meta name="description" content="Trending News about Bear Grylls" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bear Grylls</h1>
            <Image width={800} height={500} src="https://www.irishtimes.com/resizer/sFWO69YitVGw56wE31VlLsILUjw=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/AZ4ZP2LJ35HVLACAP5SHNTGZDA.jpg" alt="Bear Grylls"/>
            <h3>Recent News</h3>
            <a href='https://www.irishtimes.com/culture/tv-radio/2022/11/15/bear-grylls-im-crying-my-parents-are-crying-i-dont-think-i-dealt-with-it-particularly-well/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bear Grylls: &#39;I&#39;m crying, my parents are crying ... I don&#39;t think I dealt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZdkVZa7kngIqx7O9K1ugj8SVtYZpEAzRCb1TStptxWygEA4f3z4UPvT7qHogNh6ylrkY2LzBd" alt="Bear Grylls: &#39;I&#39;m crying, my parents are crying ... I don&#39;t think I dealt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Television: Louis Theroux hits his stride when he talks to the boy&#39;s own adventure made flesh about boarding school, among other revealing topics.</p></div>
            </div>
        </a><a href='https://www.edinburghnews.scotsman.com/lifestyle/louis-theroux-interviews-bear-grylls-how-to-watch-bbc-two-show-3919145'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis Theroux Interviews… Bear Grylls - how to watch BBC Two show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZX3gf2yy3Ij6HUH4IY4G0qpgv2mbjTj-T6kV-H056yxmlF5kypMvTUaHf6VDjJecAX2lty01v" alt="Louis Theroux Interviews… Bear Grylls - how to watch BBC Two show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Louis Theroux returned to our small screens last month with his new BBC Two show where he unearths stories and reflections from celebrities such as Dame Judie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tvandshowbiz/9736162/when-bear-grylls-in-sas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>When was Bear Grylls in the SAS?...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMZlBtHu8MUX5GdMhOhtXHWSf2vyFo31tgQZtY8z8vTfcAH1Zc3xUC1ji7GVZw9iOZbeW4-dcm" alt="When was Bear Grylls in the SAS?..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SURVIVALIST Edward Michael&quot;Bear&quot; Gryllshas become one of the most well-known outdoorsmen thanks to his TV programs.But before his TV appea.</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/film/20221115157091/meet-bear-grylls-wife-shara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Bear Grylls&#39; wife?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQi59pyXyB0_i9R82UdDfyDYL2L_2M5lUUIlSv0l9LMb1fkkLWoc6aPpK4Bo7ZN80g6AiB7phWT" alt="Who is Bear Grylls&#39; wife?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bear Grylls is married to Shara Grylls, née Cannings Knight. As well as being a mum to her and Bear&#39;s three sons, Jesse, 19, Marmaduke, 16, and Huckleberry, 13,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/lifestyle/tv/how-big-bear-grylls-private-25522358'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How big is Bear Grylls&#39; private Welsh island and how much did it ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzW3tYNvQqzB-8WzDZNfTuqnUfY8jDtKhkDjYVHTRcy9dp3Pmxp7QXAzwk6nTUNgQkqneLGZch" alt="How big is Bear Grylls&#39; private Welsh island and how much did it ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BBC&#39;s Louis Theroux Interviews will head to North Wales on Tuesday, November 15 to meet survivalist Bear Grylls. The presenter&#39;s new documentary series has&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thetimes.co.uk/article/louis-theroux-interviews-review-bear-grylls-0jbgnxxdq'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis Theroux Interviews review — Grylls gets a grilling and shows ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgLMefeq3c67z1mEAot8lGpx6xPeWKl4bwj3ONmYMKatnXQFE9eyDmJTNR2UHQorWRFaacNSv4" alt="Louis Theroux Interviews review — Grylls gets a grilling and shows ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Being a man known for eating raw goat&#39;s testicles, rat&#39;s brains, bulging grubs etc, what food could possibly make Bear Grylls turn his nose up? Lentils.</p></div>
            </div>
        </a><a href='https://www.devonlive.com/news/celebs-tv/bear-grylls-shares-louis-theroux-7824683'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bear Grylls shares Louis Theroux Interviews sneak peek on Instagram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRz_Xu3SP07lPPle30K28YuaAoVROE-_E44Y7fAcLB9-q1EQy9FJsw3Qsfzrvogck6dPZKJ1Tyd" alt="Bear Grylls shares Louis Theroux Interviews sneak peek on Instagram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans of the show have shared their excitement in comments on the star&#39;s Instagram post. One person wrote: &quot;Can&#39;t wait to watch this!&quot; Another said: &quot;The team&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/life-style/health/1697135/bear-grylls-health-vegan-diet-sore-kidneys'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bear Grylls says a vegan diet &#39;negatively&#39; impacted his health ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrIoPYY4sFqbVuZHr1R4LS0WA-zhnBIBkzEj1Ai4unsLUHgNe8RNH9duAgtrNgsQLeLHEmYJ06" alt="Bear Grylls says a vegan diet &#39;negatively&#39; impacted his health ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bear Grylls is under the spotlight by Louis Theroux as the documentary presenter delves deep into the adventurer&#39;s lifestyle.</p></div>
            </div>
        </a><a href='https://www.birminghammail.co.uk/news/showbiz-tv/who-bear-grylls-louis-theroux-25510950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Bear Grylls? Louis Theroux Interviews star&#39;s wife, real name ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzW3tYNvQqzB-8WzDZNfTuqnUfY8jDtKhkDjYVHTRcy9dp3Pmxp7QXAzwk6nTUNgQkqneLGZch" alt="Who is Bear Grylls? Louis Theroux Interviews star&#39;s wife, real name ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bear Grylls – whose full name is Edward Michael Grylls – is a 48-year-old adventurer and television presenter from London. He first rose to fame after embarking&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}