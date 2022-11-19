import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eileen Dunne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eileen Dunne"/>
        <meta name="description" content="Trending News about Eileen Dunne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eileen Dunne</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cd98b-1600.jpg" alt="Eileen Dunne"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/2022/1118/1337023-eileen-dunne/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newscaster Eileen Dunne retires after 40 years on air</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0rbU3RVg2USbGCBFcyC4cShk8DyGTOficUEagH0iTMlUMRngXq3kag81Cg9de-KNkgZgXFGIw" alt="Newscaster Eileen Dunne retires after 40 years on air" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nine O&#39;Clock News presenter signed off from her final broadcast this evening saying: &quot;It&#39;s been an honour and a privilege ... see you on the other side.&quot;.</p></div>
            </div>
        </a><a href='https://www.independent.ie/news/rte-news-reader-eileen-dunne-surprises-viewers-by-announcing-instant-retirement-live-on-air-42156478.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTÉ News reader Eileen Dunne surprises viewers by announcing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRy5jt3xI8e5lDuFj_fYB5fqPLDO_V6Rf_TSlpriP9A0seax3F2cQjdBm_sxO1MNLFDAZyx2sV4" alt="RTÉ News reader Eileen Dunne surprises viewers by announcing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RTÉ News presenter Eileen Dunne surprised viewers of the Nine News by announcing her instant retirement at the end of Friday night&#39;s bulletin.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41010275.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTÉ newscaster Eileen Dunne bids emotional farewell after 42 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST1neOT3Ap7G-8QRDaToLYg-jZiZwZQ_4-PcdWgk3eWyUpTZYC0fU9dSttQLnpiOw6wq-t70OR" alt="RTÉ newscaster Eileen Dunne bids emotional farewell after 42 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In an emotional goodbye at the end of the 9pm news, Ms Dunne announced her retirement and said it had been a privilege working for what she described as a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/ireland/2022/11/18/eileen-dunne-signs-off-on-final-bulletin-after-42-years-in-rte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eileen Dunne signs off on final bulletin after 42 years in RTÉ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOgU5UHmFbdJMathuoPuVeQoCxl1mVuYKqTgmVbjT4eEzGTzz9w7vhdVayY-i3qhma2V5pbX6f" alt="Eileen Dunne signs off on final bulletin after 42 years in RTÉ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Well-loved newsreader thanked viewers and colleagues on last Nine O&#39;Clock broadcast.</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/rte-newsreader-eileen-dunne-retires-25556046'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE newsreader Eileen Dunne retires live on TV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRu4I0hUO0GM-gv2WZ8XObI7fHb1xkh92vp2-GjTCWLrYDudTyh2MdQTqq9bh7cjUmvmyAwVwU" alt="RTE newsreader Eileen Dunne retires live on TV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nine O&#39;Clock News presenter signed off from her final broadcast tonight, saying it has been &#39;an honour and a privilege&#39;. Eileen had spent 42 years working&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/showbiz/irish-showbiz/rte-newscaster-eileen-dunne-reads-28530972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE newscaster Eileen Dunne reads final bulletin as she says &#39;it&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDJbYEJTJ6R2Vxk3x0lKpjaZd1w9O4Q0JwMaqSXwnBlhUulIdAheTme451kKDQaRGG2EoHJ-CN" alt="RTE newscaster Eileen Dunne reads final bulletin as she says &#39;it&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;It&#39;s been an honour and a privilege. See you on the other side.” A montage of Eileen&#39;s years as a reporter, presenter and newsreader was then shown. Among the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/celebs/eileen-dunne-retires-rt-after-28530916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eileen Dunne retires from RTÉ after 42 years as she reads final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFWUDPV454NRUax_6YRAs423rY2HfNw1KdvRwW0XC_0EeGV9k6REgVZQvMVPSEJV6TmVlwEwIA" alt="Eileen Dunne retires from RTÉ after 42 years as she reads final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The news concluded with a montage of clips of Eileen, from back when she was a young, fresh-faced journalist to the present day.</p></div>
            </div>
        </a>
        </Template></>;
}