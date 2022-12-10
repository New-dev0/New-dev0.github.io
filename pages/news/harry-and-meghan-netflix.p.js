import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry and Meghan Netflix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry and Meghan Netflix"/>
        <meta name="description" content="Trending News about Harry and Meghan Netflix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry and Meghan Netflix</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/12/09/gettyimages-1245453815_wide-f5522151693151a722a1b4f5cd1081b550e866bb-s1400-c100.jpg" alt="Harry and Meghan Netflix"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/12/09/1141845597/harry-and-meghan-netflix-reviews'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s thumbs-down in the U.K. for Harry and Meghan&#39;s Netflix Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF2dh1HUfk0ZpYP5_2ueg8YAPRpNGs0YKMEuqwMGBveS0TQMGMPI1i3Y_U88qKbodpjte91y1s" alt="It&#39;s thumbs-down in the U.K. for Harry and Meghan&#39;s Netflix Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Even critics in the liberal media panned Harry &amp; Meghan, the new documentary that attacks Britain&#39;s notorious tabloids for invading the couple&#39;s privacy and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/style/2022/12/harry-and-meghan-on-netflix-a-sense-of-hurt-and-betrayal-among-the-royal-family-after-premiere'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry &amp; Meghan on Netflix: A Sense of Hurt and Betrayal Among the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-UpQiNXqsuDSVpgl3yKDdO5dNB0LG_720uMRI9Sle48jQZfpqaKKwHbkvGtAevNoWlKqikOP9" alt="Harry &amp; Meghan on Netflix: A Sense of Hurt and Betrayal Among the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catherine, Princess of Wales, Prince William, Prince of Wales, Prince Harry, Duke of Sussex, and Meghan, Duchess of Sussex on the long Walk at Windsor Castle on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/harry-meghan-on-netflix-what-the-royals-could-reveal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Harry &amp; Meghan&#39; Documentary on Netflix: What the Royals Could ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSS6lI4BWWx3_m2wnwzK4wL4zvfM7LeGe922KK7M4W6o2marsjCHeEpctEA_pNJY8ax-PyMjYT4" alt="&#39;Harry &amp; Meghan&#39; Documentary on Netflix: What the Royals Could ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first three episodes of Harry &amp; Meghan, the new Netflix documentary series about Prince Harry and Meghan Markle and their life away from the British&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vox.com/culture/23502170/netflix-harry-meghan-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix&#39;s Prince Harry and Meghan Markle docuseries brings nothing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvn5PE00tVNy5qKjPaI65KnzU9VL5VeZ1kG644gb-KGn-ZWppEIAVN8wsOQqq0BBjo2vyp6prx" alt="Netflix&#39;s Prince Harry and Meghan Markle docuseries brings nothing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“We&#39;ve never been allowed to tell our story,” says Prince Harry bitterly in the third episode of Netflix&#39;s new docuseries Harry &amp; Meghan.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/09/style/harry-meghan-netflix-documentary.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Harry &amp; Meghan&#39; Has All the Intimacy of Instagram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7M61BFe8BLODCmcJyIm7T2_bSW4lA3zdcQWMenlToiBFU7tmjN2EUQmPo0E-VYgCM63W2j7CZ" alt="&#39;Harry &amp; Meghan&#39; Has All the Intimacy of Instagram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new Netflix series portrays the ex-royals with a soft filter and a lack of surprise. But some will still find it aspirational.</p></div>
            </div>
        </a><a href='https://deadline.com/2022/12/harry-meghan-uk-audience-ratings-netflix-barb-1235194470/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Harry &amp; Meghan&#39; Scores Netflix&#39;s Highest UK Ratings Of The Year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJDt1CNLFw_PdIg5NknjFx9yyfdA347KVTdLvhB0XI7vopn5oqlXSnLRjNPNC3GFcP9wGl3ast" alt="&#39;Harry &amp; Meghan&#39; Scores Netflix&#39;s Highest UK Ratings Of The Year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Harry &amp; Meghan&#39; became the biggest show of the year for Netflix in the UK, beating The Crown.</p></div>
            </div>
        </a><a href='https://www.businessinsider.com/harry-and-meghan-netflix-documentary-deal-may-already-paying-off-2022-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry and Meghan deal may already be a win for Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcQmm13H48V8DYF6tZSZg6H5GfXX5Gef2hcLCOzCZkCYURYB4oMLFc8-WmXjIY9G3EBY679Rc1" alt="Harry and Meghan deal may already be a win for Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix&#39;s big bet on Prince Harry and Meghan Markle appears to be paying off, as their new docuseries seems to already be a hit for the streaming service.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/08/entertainment/harry-meghan-netflix-documentary-release-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry compares Meghan to Diana and criticizes royals&#39; &#39;unconscious ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_wZy75Qh4tOvoYgutNwtjwzvFmxa_I3ue_O6Lux5Uo89_OHfNVJ9hHq-DMRikpXlmzoZZPz2s" alt="Harry compares Meghan to Diana and criticizes royals&#39; &#39;unconscious ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince Harry and Meghan, Duchess of Sussex, have taken aim at &quot;unconscious bias&quot; inside the royal family and defended their decision to quit the institution&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-us-canada-63911640'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who are voices behind Netflix&#39;s Harry and Meghan?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTYztU7ScpCM9Z4TbpE-y1mJ5yUV2FlC54BqHamNTJuT1vKTIeQB0xTgs_onN87ODcxT2u2Mch" alt="Who are voices behind Netflix&#39;s Harry and Meghan?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The release of Harry and Meghan&#39;s new Netflix documentary featured a kaleidoscopic cast of characters, some speaking about their relationship with the Duke&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/08/business/media/netflix-harry-meghan-documentary.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liz Garbus on Making the Harry and Meghan Netflix Series ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8l-cPp9uojJNEPCojkM0_V8KB6OAfDd3Tqm1YO2m3qLvRtx0DINN0lcrzeH-NcrRRrtWcHwmH" alt="Liz Garbus on Making the Harry and Meghan Netflix Series ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The documentary series is the most high-profile project from Story Syndicate, a company run by the filmmaker Liz Garbus and her husband, Dan Cogan.</p></div>
            </div>
        </a>
        </Template></>;
}