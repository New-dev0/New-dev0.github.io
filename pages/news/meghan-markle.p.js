import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Meghan Markle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Meghan Markle"/>
        <meta name="description" content="Trending News about Meghan Markle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Meghan Markle</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/f3A5bfHIprftHS16ez9zUFaY5ak=/0x0:3241x1697/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24279812/Harry___Meghan_Archival_Kitchen_1.jpg" alt="Meghan Markle"/>
            <h3>Recent News</h3>
            <a href='https://www.vox.com/culture/23502170/netflix-harry-meghan-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix&#39;s Prince Harry and Meghan Markle docuseries brings nothing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvn5PE00tVNy5qKjPaI65KnzU9VL5VeZ1kG644gb-KGn-ZWppEIAVN8wsOQqq0BBjo2vyp6prx" alt="Netflix&#39;s Prince Harry and Meghan Markle docuseries brings nothing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“We&#39;ve never been allowed to tell our story,” says Prince Harry bitterly in the third episode of Netflix&#39;s new docuseries Harry &amp; Meghan.</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/style/2022/12/in-defense-of-meghan-markles-medieval-times-curtsy-joke'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In Defense of Meghan Markle&#39;s Medieval Times Curtsy Joke</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM41fLYkAbn40Zr2jDKiS7lu6ulWjADvlLZZIw3v22V_YU556IPcXoD21jPbhCqawJQ150q820" alt="In Defense of Meghan Markle&#39;s Medieval Times Curtsy Joke" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In &#39;Harry &amp; Meghan,&#39; the duchess uses a bit of very American humor to poke fun at her overenthusiastic initial attempt to show respect to the late queen.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/12/09/meghan-markle-prince-harry-deny-megxit-was-about-privacy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meghan Markle, Prince Harry deny &#39;Megxit&#39; was about wanting &#39;privacy&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRejhTxj4MtAe_k8aTzNyUYITr3YMlecdCRYBjUuhBH2XQ4_YJxQG7tIA3w3R-bVPuyNiEIScng" alt="Meghan Markle, Prince Harry deny &#39;Megxit&#39; was about wanting &#39;privacy&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meghan Markle and Prince Harry denied on Thursday that they relinquished their titles as senior members of the royal family in &quot;Megxit&quot; to garner more&nbsp;...</p></div>
            </div>
        </a><a href='https://www.etonline.com/meghan-markle-and-prince-harrys-rep-speaks-out-amid-netflix-doc-criticism-195770'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meghan Markle and Prince Harry&#39;s Rep Speaks Out Amid Netflix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-3WyjVteaZqizRb5MWI2mBIFuOa65NaCLBGyT5TzIiZL598p05gqrazQ8Wploc3FwxWJxbBq5" alt="Meghan Markle and Prince Harry&#39;s Rep Speaks Out Amid Netflix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a statement to ET, the Duke and Duchess of Sussex&#39;s Global Press Secretary addresses criticism of their Netflix docuseries, which largely stems from the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.glamour.com/story/meghan-markle-and-prince-harry-say-they-never-asked-for-complete-privacy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meghan Markle and Prince Harry Say They Never Asked for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTb4OBxBY6txbrPUxy6vUt4XnokskViPXn8Hol9Kx5DrNd4dbRymMMd13C4IcjjqlX6mBxsfMr" alt="Meghan Markle and Prince Harry Say They Never Asked for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the premiere of their Netflix series, Harry and Meghan&#39;s spokesperson reiterated the couple&#39;s desire for a life of public service.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/09/bbc-reporter-prince-harry-meghan-markle-media-untrue-netflix-documentary-engagement/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BBC Reporters Say Prince Harry, Meghan Markle&#39;s Media Claims ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsOqK6HLUFXcnzwU0OxsTgTP37K0XTb6LPXn2TrZKwnfhfOPtcSvUbYq58IJlllkYIlcQEG00q" alt="BBC Reporters Say Prince Harry, Meghan Markle&#39;s Media Claims ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some UK reporters are firing back at Meghan Markle and Prince Harry ... specifically about them claiming their royal engagement interview was rehearsed,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}