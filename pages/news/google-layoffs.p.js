import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Google Layoffs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Google Layoffs"/>
        <meta name="description" content="Trending News about Google Layoffs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Google Layoffs</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95714495,width-1070,height-580,imgsize-165082,overlay-ettech/photo.jpg" alt="Google Layoffs"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/tech/technology/google-plans-to-sack-10000-employees-after-performance-review-report/articleshow/95714520.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google plans to layoff 10000 employees after performance review ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU6L9YhphzkA562cqlVm7VaULy80383zNZ-xj8ac5RJbNjgm78W3pNYD6y89gNNO_rzLUOAg1r" alt="Google plans to layoff 10000 employees after performance review ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google could soon layoff 6% of its workforce, accounting to about 10000 people, according to a report by The Information.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/23/google-has-avoided-mass-layoffs-but-employees-worry-theyre-coming.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google has avoided mass layoffs so far, but employees worry their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIEjCSaV_APjYU4qzQ_PafitzgJIQMUv0f-se3QJlMLMofmspZuY5ww3R6jgcNdiS33miC9H8v" alt="Google has avoided mass layoffs so far, but employees worry their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google employees say recent actions taken by executives is leading to increased anxiety that job cuts are on the way.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/business/google-may-lay-off-10000-low-performing-employees-layoffs-in-alphabet-4942561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs : गूगल ने भी बनाया कर्मचारियों की छंटनी का मन, लेकिन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVQ8ZXKgDpzX7EM7IKAgWwGhNiBhCameolIxrQNe0aq6U5O84TXufhBibo3tP0Xthd_1jc8WKj" alt="Google Layoffs : गूगल ने भी बनाया कर्मचारियों की छंटनी का मन, लेकिन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Layoff News : कर्मचारियों के लिए अभी तक सुरक्षित समझी जा रही कंपनी गूगल ने भी छंटनी का मन बना&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/qai/2022/11/23/google-layoffs-big-tech-continues-downsizing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs: Big Tech Continues Downsizing</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjOnSN86rDXvQ0tnUcalNZSiQmQKzBgEahmZZIO97W2awj_B8QaQK9SCxoWox7GLgMnBGIq-Ip" alt="Google Layoffs: Big Tech Continues Downsizing" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If Google commits to downsizing, it will follow Big Tech peers like Meta and Amazon that have already slashed head counts this year.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/business/google-layoffs-soon-on-new-performance-assessment-system-report-3545239'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs Coming Soon On New Performance Assessment ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvOYGB2Lvi7xtNEEEzXd1x1PZ4jxkW_LFqDTfDw34m0IJUC0hA5Ul82gJMtQFP-zUGOg4M5e_T" alt="Google Layoffs Coming Soon On New Performance Assessment ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google has introduced a new performance management system, which could push out thousands of underperforming employees, according to reports.</p></div>
            </div>
        </a><a href='https://www.analyticsinsight.net/google-layoffs-to-push-out-thousands-of-underperforming-employees/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs to Push Out Thousands of Underperforming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtHBJ-9hCYsaqfza1zDBcBB8SUXS6ZH363uIP6dMyqkrkEI0umsyKwmdja10CYazXkkp4tSiPp" alt="Google Layoffs to Push Out Thousands of Underperforming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google layoffs thousands of underperforming employees through a new ranking and improvement plan for its parent company Alphabet layoffs.</p></div>
            </div>
        </a><a href='https://punjabkesari.com/business-news/google-layoffs-after-twitter-now-google-parent-company-alphabet-is-going-to-lay-off-10-000-employees/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs: ट्विटर के बाद अब Google की पेरेंट कंपनी अल्फाबेट करने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWL6dbileKQMNnnNJj9IDK8h5Gzp4kxDgNXlxEpaZP4cfADhfLGFj_i6Vl-mw43AYk0R8Szgw3" alt="Google Layoffs: ट्विटर के बाद अब Google की पेरेंट कंपनी अल्फाबेट करने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>गूगल की पैरेंट कंपनी अल्फाबेट अपने 10000 कर्मचारियों की छंटनी करने जा रही है।</p></div>
            </div>
        </a><a href='https://www.wionews.com/business-economy/google-to-lay-off-at-least-10000-poor-performing-employees-report-536482'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google to lay off at least 10000 &#39;poor-performing&#39; employees in 2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9_eaYC-lQ71v_EL9NgVpICm9w8SQ89fxKKOscqvbbpWf4Fta4E-Xl5PfEjS9EVxilKzZ6av5o" alt="Google to lay off at least 10000 &#39;poor-performing&#39; employees in 2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alphabet, Google&#39;s parent company, will soon join the layoff season in the United States&#39; Silicon Valley as it plans to lay off up to 10000 or six per cent&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/technology-news/google-layoffs-parent-company-alphabet-to-fire-100000-employees-who-are-low-performing-assets-know-all-about-new-report/2509358/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs: 10000 से ज्यादा कर्मचारियों को निकालेगी गूगल की पेरेंट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHmp_rq9VUbD1ZxTE4cJi2pRKEL2bwoR5dts0ENNSGEEx6EUAxHtBsnTWlT2NJo6xynKIYVRjj" alt="Google Layoffs: 10000 से ज्यादा कर्मचारियों को निकालेगी गूगल की पेरेंट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google Layoffs 2022: Google की पेरेंट कंपनी Alphabet Inc. अपने कुल कर्मचारियों में से करीब 6 प्रतिशत को&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/business/after-twitter-facebook-now-google-alphabet-gearing-up-to-layoffs-about-10000-employees-details-899331.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Layoffs: ट्विटर-फेसबुक के बाद अब गूगल की पैरेंट कंपनी अल्फाबेट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrVSC7MHSiKucmQ5bcmosh0kSQ-4HDt0oCckP26orF7Qr_fYBtRMFvRLX3IXU5LP4mGkCDQo0E" alt="Google Layoffs: ट्विटर-फेसबुक के बाद अब गूगल की पैरेंट कंपनी अल्फाबेट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google ने एक नया परफार्मेंस रेटिंग (Performance Rating) सिस्टम अपनाया है, जिसके आधार पर कंपनी के 6%&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}