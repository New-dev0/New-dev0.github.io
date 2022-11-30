import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>WhatsApp news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,WhatsApp news"/>
        <meta name="description" content="Trending News about WhatsApp news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>WhatsApp news</h1>
            <Image width={800} height={500} src="https://www.helsinkitimes.fi/images/2022/11-Nov/whatsapp_fs.jpg" alt="WhatsApp news"/>
            <h3>Recent News</h3>
            <a href='https://www.helsinkitimes.fi/themes/themes/science-and-technology/22582-whatsapp-data-breach-controversy-follow-these-tips-to-make-your-chats-more-secure.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Whatsapp data breach controversy: Follow these tips to make your ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnJfO18Vj7IT93nqYOLwXLdy162U9FA19zBKOuepqQpDcNZstN6mk3ORr89OgqQQZu2jXANLM4" alt="Whatsapp data breach controversy: Follow these tips to make your ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In today&#39;s data-driven world, data breaches can affect millions or possibly even billions of people at a time. This was seen in the recent alleged Whatsapp&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gsmarena.com/newscomm-56677.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp starts rolling out Message Yourself feature - comments</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="WhatsApp starts rolling out Message Yourself feature - comments" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The data you store on google isn&#39;t encrypted. They have access to your keyboard all the time &amp; they can easily replicate your chats even if it&#39;s encrypted using&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/mobile/whatsapp-now-lets-you-send-notes-to-yourself-how-to-get-started/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp Now Lets You Send Notes to Yourself: How to Get Started</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTblLrVCT34EijRS-PD3q0K-canTw3ZqOK91e_vAwoCXKxZsz6JEt1McK-8LAA5PXx3Ojzw4qXu" alt="WhatsApp Now Lets You Send Notes to Yourself: How to Get Started" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The feature began rolling out Monday, and it can be helpful for quickly organizing notes and reminders.</p></div>
            </div>
        </a><a href='https://www.pcmag.com/news/whatsapp-makes-messaging-yourself-easy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp Makes Messaging Yourself Easy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5JdurDBYkqY-nhs_-QdXF64-yj2dgPXE7LTKbZof-k2C0gOWDQo8BnU2qkY8Q7uyVZcHW6gzh" alt="WhatsApp Makes Messaging Yourself Easy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Android and iOS users can tap their name to talk to themselves.</p></div>
            </div>
        </a><a href='https://www.pocket-lint.com/apps/news/whatsapp/163646-massive-whatsapp-data-leak-may-affect-500-million-people'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Massive WhatsApp data leak may affect 500 million people</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgB0opP7tv4hoWPVK1qhhX5u8T7pQM1x5vo-WEQvWEzClcV25lm89i7AGjq32G2vBZ0eU7DGHs" alt="Massive WhatsApp data leak may affect 500 million people" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A leak of WhatsApp data could mean that 500 million people&#39;s up-to-date phone numbers are being sold online for as little as $2000.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/tech-news-technology/whatsapp-for-windows-share-contact-cards-8296011/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp rolls out contact cards sharing feature on Windows beta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXBLBtkWHFDyqFVto5F-wDfvlgKg9PXBSJYaPMt0mu25BJAJHNPcT5FL9GYvIXImc2gcb-OwOc" alt="WhatsApp rolls out contact cards sharing feature on Windows beta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The WhatsApp for Windows app will soon let users share contact cards with others, which the recipients can easily add to their address book.</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/trending/news/whatsapp-data-leaked-once-again-netizens-react-end-to-end-encryption-privacy-breach-latest-news-2022-11-29-827442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alert! WhatsApp data leaked once again? Netizens spark memefest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPeaILjhNWBDgRd2d2lhPGtnlGPwz4pwIzHQLo9M6AlnuSz1AlRLxrjE68p-4i7eD_bRzUZvg_" alt="Alert! WhatsApp data leaked once again? Netizens spark memefest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WhatsApp data leak rumours have alarmed the internet and spurred a meme fever on Twitter. Here&#39;s what the netizens have to say.</p></div>
            </div>
        </a><a href='https://www.dignited.com/104070/whatsapp-rolls-out-message-yourself-feature-to-ios-and-android-users/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp rolls out &#39;Message Yourself&#39; feature for iOS and Android ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA5vfAQ0E14UsUjPoA92OV7sbxdYoL2G3lqQdl4aOv2on4d3PtRH4w8FhVZW2b6QIJrBEUzNil" alt="WhatsApp rolls out &#39;Message Yourself&#39; feature for iOS and Android ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While arguably the most popular instant messaging platform on the internet today, Meta&#39;s WhatsApp is far from the most feature-rich or feature-packed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thestatesman.com/technology/whatsapp-seeds-message-yourself-feature-with-latest-update-1503134934.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WhatsApp seeds Message Yourself feature with latest update</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTr-6Ij41lVlprzxdcmCFOtazh1daPWKSntNU9bVUYfwVjYU2vrZbmeNWE9ZT-8L3DhG-klow4n" alt="WhatsApp seeds Message Yourself feature with latest update" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some users have in the past created groups, then removed other members to effectively establish their own private chat, to get around its absence.</p></div>
            </div>
        </a><a href='https://technave.com/gadget/487-million-of-WhatsApp-users-phone-numbers-put-on-sale-including-11-million-from-Malaysia-32604.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>487 million of WhatsApp users&#39; phone numbers put on sale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpEz4WBHDCuvHkaVV70w9y6-CmL-9PYSTQmEVG_BToFai3M3wHnrthLzqsofkRxE5izeOPAnQr" alt="487 million of WhatsApp users&#39; phone numbers put on sale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;re receiving any suspicious calls or texts recently, it&#39;s best that you don&#39;t respond to them. The latest source claims 487 million WhatsA.</p></div>
            </div>
        </a>
        </Template></>;
}