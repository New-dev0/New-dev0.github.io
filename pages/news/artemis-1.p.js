import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Artemis 1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Artemis 1"/>
        <meta name="description" content="Trending News about Artemis 1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Artemis 1</h1>
            <Image width={800} height={500} src="http://astronomy.com/~/media/26819BAF0344490CA7CFB425DD67E0D5.jpg" alt="Artemis 1"/>
            <h3>Recent News</h3>
            <a href='https://astronomy.com/news/2022/11/photos-artemis-1-captures-first-images-of-earth-on-trip-to-moon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Artemis 1 captures first images of Earth on trip to Moon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnXO0jg1vdJg8zX9rXgFJ0ubEynpphruC6MfrCUcxCMSYdEqlfTmttrfQ7b9w0QT_DwBSAE4Vt" alt="Photos: Artemis 1 captures first images of Earth on trip to Moon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lofted to space via NASA&#39;s Space Launch System (SLS), the Orion spacecraft&#39;s trip to the Moon as part of Artemis 1 is off to a fantastic start.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/science/nasa-artemis-1-earth-image-orion-8274543/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA Artemis 1 Moon mission: Watch the Earth from Orion&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbob-dHMIoHzVU1cnguJX-IFB-qBiFrwt-hBDHi7WApOCrqZNr1cW007tdA-7wk6YvsXpOpUb_" alt="NASA Artemis 1 Moon mission: Watch the Earth from Orion&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NASA Artemis 1 mission: The Orion spacecraft has captured a view of the Earth from a distant human-rated spacecraft that has not been seen since the last&nbsp;...</p></div>
            </div>
        </a><a href='https://www.space.com/nasa-celebrates-artemis-1-launch-success'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA celebrates successful Artemis 1 launch by cutting ties</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRzt2i8V-cgG-f1OJMe8T4Aryylag-oOOSlR2GD1VnwwFiQng1_LGZXJWCs1TAo6KI8iVjEXTN" alt="NASA celebrates successful Artemis 1 launch by cutting ties" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artemis 1 has finally taken flight, and NASA officials took a bit of time to savor the success.</p></div>
            </div>
        </a><a href='https://currentaffairs.adda247.com/us-space-agency-nasa-launches-artemis-1-rocket-on-a-mission-to-the-moon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US space agency NASA launches Artemis-1 rocket on a mission to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIRC00zCNkwmnqG84-5M92M6C8h95uwAt98zgwlc5O5MfN8o8PX_PKAXKnAFGhfGOkg0Cm7Tvl" alt="US space agency NASA launches Artemis-1 rocket on a mission to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The United States space agency NASA has launched its Artemis-1 mission from Kennedy Space Centre, Florida.</p></div>
            </div>
        </a><a href='https://www.sciencealert.com/first-space-pics-from-artemis-1-remind-us-of-classic-apollo-images'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>First Space Pics From Artemis 1 Remind Us of Classic Apollo Images</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJBT2-3IazclLsIRlsTQjmYuJsvStvPn7iw_4y584ozG4tATP-fOXefcNzy0KsVJYyVUGexl96" alt="First Space Pics From Artemis 1 Remind Us of Classic Apollo Images" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As it heads for the Moon, NASA&#39;s Orion space capsule is sending back snapshots of Earth that evoke the &quot;blue marble&quot; pictures taken by Apollo astronauts&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/science/story/nasa-artemis-1-mission-moon-earth-images-camera-lunar-landing-2298259-2022-11-17'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis-1: Orion spacecraft offers first view of Earth on its way to Moon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTrLUPIv2BgmjS1ihzTiHb-2d3d2qbQvmVlqqCW64x9mIjBwJi7MwayibINQzVx59IbXR5tdJOl" alt="Artemis-1: Orion spacecraft offers first view of Earth on its way to Moon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Orion now on a course toward the Moon, the onboard camera has offered a unique view of Earth captured from space.</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/artemis-1-moon-mission-launch-capture-earth-footage-nasa-share-stunning-video-watch-2261028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NASA Artemis 1: मिशन मून पर निकले Artemis-1 ने कैप्चर की पृथ्वी की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQq54pYLsQGMtffVYOSExiRIY--sC7HXEUSWK-_w64DYuteEY6ych5Qc2rO4J-MMadhB5Pb4iQS" alt="NASA Artemis 1: मिशन मून पर निकले Artemis-1 ने कैप्चर की पृथ्वी की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इसे मिशन मून का नाम दिया गया है, जिसका मकसद चांद पर जीवन की तलाश करना है. अब 50 सालों के बाद&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.indiaaheadnews.com/tech/artemis-1-took-stunning-footage-of-earth-watch-video-246633/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>आर्टेमिस 1 ने ली पृथ्वी की आश्चर्यजनक फुटेज, देखें Video</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTj_tZQup-uCidCA2mfFx-qy82D9XDxt7TPpqrd8wPOGSFqXuSc7RcmuPfH311R2bMWj7mZR9ai" alt="आर्टेमिस 1 ने ली पृथ्वी की आश्चर्यजनक फुटेज, देखें Video" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artemis-1: फ़्लोरिडा में केप कैनावेरल से लॉन्च किए जाने के कुछ ही घंटों बाद स्पेस लॉन्च&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-nasa-artemis-3-will-be-manned-mission-to-lunar-and-touch-down-its-surface-again-after-apollo-mission-23209687.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis 1: 2025 में फिर चांद सतह पर उतरने की है नासा की योजना, जानें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTF2rxgLDLQvViKi5bIdJtj9eROsni2wm95NuWTNr5blVZ4Ei8pGDSOVvl4RX7NJeMyFxO5qo76" alt="Artemis 1: 2025 में फिर चांद सतह पर उतरने की है नासा की योजना, जानें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artemis 1 नासा भविष्‍य में चांद पर भेजे जाने वाले मानव मिशन के लिए अब काफी हद तक तैयार है।</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/artemis-1-orion-capsule-sent-picture-of-earth-from-92-thousand-km-distance'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nasa: सफलता की ओर नासा का मून मिशन, Orion Capsule ने 92 हजार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIpUeGOsOgcfeTBBXxU_oPfX7g8Zs7ikvw-UQc58ojwHV2hbQ4emEx9b1ptdmKp970bk5KTjlw" alt="Nasa: सफलता की ओर नासा का मून मिशन, Orion Capsule ने 92 हजार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नासा ने बुधवार को चंद्रमा पर अपने मिशन को फिर से लॉन्च कर दिया। इस लॉन्चिंग के बाद आज&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}