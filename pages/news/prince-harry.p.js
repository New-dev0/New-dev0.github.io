import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prince Harry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prince Harry"/>
        <meta name="description" content="Trending News about Prince Harry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prince Harry</h1>
            <Image width={800} height={500} src="https://images.hellomagazine.com/imagenes/royalty/20221118157451/prince-harry-meghan-markle-elton-john-concert/0-765-125/elton-john-royals-t.jpg" alt="Prince Harry"/>
            <h3>Recent News</h3>
            <a href='https://www.hellomagazine.com/royalty/20221118157451/prince-harry-meghan-markle-elton-john-concert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Duke and Duchess of Sussex surprise at Elton John concert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSl-b9_upZ3dPCEw_V2Euc_GY54GgnFahdpSz_Zj_BRKB4KwYh5Z2vsz3CenmWRl4J-bwZUmndv" alt="The Duke and Duchess of Sussex surprise at Elton John concert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sir Elton John paid tribute to the Duke and Duchess of Sussex on Thursday in the sweetest way - details.</p></div>
            </div>
        </a><a href='https://www.nzherald.co.nz/entertainment/prince-harry-and-meghan-fell-out-with-oscar-nominated-director-over-netflix-documentary/RSLB5ALNPZCJ5AJ32ZGXD65BOA/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince Harry and Meghan &#39;fell out&#39; with Oscar-nominated director ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzEn_oloWYRRxgcZdSmpInD_eYMxGCnHINMoGaor_5dAqb3L1SUUlp6Bg-9MswaNHTGJPQvtm7" alt="Prince Harry and Meghan &#39;fell out&#39; with Oscar-nominated director ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Garrett Bradley – who directed the critically acclaimed Netflix series Naomi Osaka – was approached about the project last year but sources said things turned&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/fabulous/9754537/meghan-markle-prince-harrys-netflix-director/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Blow to Meghan Markle and Prince Harry&#39;s £88million Netflix TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvHyFsdM3Ht0yxu6L60mz91AguPiumthdO1FsFKpzHqI1ca42WpJblPIqHoJ1IpKtEx3YJGP5d" alt="Blow to Meghan Markle and Prince Harry&#39;s £88million Netflix TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MEGHAN Markle and Prince Harry have been dealt a blow to their £88m Netflix deal after the director reportedly quit over creative differences.Oscar-n.</p></div>
            </div>
        </a><a href='https://hypebae.com/2022/11/prince-harry-meghan-markle-netflix-docuseries-royal-family-release-date-info'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince Harry and Meghan Markle&#39;s Netflix Docuseries Is Arriving ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToNS4B0tBL3Wu4xsJw_oz7dr47HYvRLm69ulaHAM3gAJnXs4OqqVRXuhHfDdS1ck-644rFbL__" alt="Prince Harry and Meghan Markle&#39;s Netflix Docuseries Is Arriving ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oscar-nominated director Liz Garbus is directing the project. Last month, Markle opened up about working with Garbus. “It&#39;s nice to be able to trust someone&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skynews.com.au/opinion/peta-credlin/prince-harry-will-find-himself-out-in-the-cold-meghan-and-harrys-netflix-show-to-air/video/bbfe7d204b560adb0b599a6bef879a89'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince Harry will “find himself out in the cold”: Meghan and Harry&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRX1uCeCMe28lI_Bx0_A_rXIwMjfeOqKj95FXhcbMlzST9Nai5DzjytodUOo9RKMrK-16DpDQv9" alt="Prince Harry will “find himself out in the cold”: Meghan and Harry&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sky News Contributor Prue MacSween says Prince Harry will “find himself out in the cold” amid rumours Meghan Markle&#39;s and his Netflix series is to air&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/showbiz/tv-radio/1698568/dan-wootton-prince-harry-netflix-backlash'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;How can he look himself in the mirror?&#39; Dan Wootton blasts Prince ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWkcenRSeffvYm4PyWdPVaA61nNaMaeArF69cO285c6OAgdONPjBVaO4acjSwWKnFu9Ms8nMA0" alt="&#39;How can he look himself in the mirror?&#39; Dan Wootton blasts Prince ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dan Wootton has savaged Prince Harry&#39;s decision to release a docu-series on Netflix amid fury over season five of The Crown which recently landed on the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/news/article-11443741/Harry-Meghans-original-Netflix-director-quit-creative-differences.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Prince Harry and Meghan Markle&#39;s original Netflix director quit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnuNlmDewWfFRRHptil3uIFuMZPk87_dv9qdjTV5vLt-S6kytnjIDe0OU_Tx4KkjlrJ_P7dnXW" alt="Why Prince Harry and Meghan Markle&#39;s original Netflix director quit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Duke and Duchess of Sussex had turned to Garrett Bradley, director of the critically acclaimed Netflix series about tennis prodigy Naomi Osaka.</p></div>
            </div>
        </a>
        </Template></>;
}