import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>I Am Ruth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,I Am Ruth"/>
        <meta name="description" content="Trending News about I Am Ruth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>I Am Ruth</h1>
            <Image width={800} height={500} src="https://www.irishtimes.com/resizer/4fGuadGsM6Vw5VTsxqaIPDp_ZHY=/1200x630/filters:format(jpg):quality(70):focal(1330x855:1340x865)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/53WKC55AFZHEBMYOBU2S3QIRDM.jpg" alt="I Am Ruth"/>
            <h3>Recent News</h3>
            <a href='https://www.irishtimes.com/culture/tv-radio/2022/12/08/i-am-ruth-review-kate-winslet-brings-oscar-grade-acting-to-a-channel-4-two-hander-and-it-doesnt-quite-take/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth review: Kate Winslet brings Oscar-grade acting to a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSumdt2FmjdF8gd_Sbxk-Nc8xZwm2DU8Y7lIJMHHAB4cvmjlX9QtVbRUz9MY8n7TLejUA49ITG7" alt="I Am Ruth review: Kate Winslet brings Oscar-grade acting to a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The real heavy lifting in this dark drama comes from the star&#39;s real-life daughter, Mia Threapleton.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/tv-and-radio/2022/dec/08/i-am-ruth-review-kate-winslet-is-endlessly-watchable'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth review – Kate Winslet is endlessly watchable</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjask1DxoudIXSA_2Q4G_qThhv8mpoU4ALtk11dzF_baG3dKW8h8wIUny0WoLIm-dQ3JkJXJk8" alt="I Am Ruth review – Kate Winslet is endlessly watchable" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both Winslet and her real-life daughter, Mia Threapleton, are brilliant in Dominic Savage&#39;s film – whose tale of an emotional family standoff is full of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiotimes.com/tv/drama/i-am-ruth-review/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth review: Kate Winslet is heartbreaking in powerful drama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQc5Ey24JEdpX-6s1ZMVSV-RtvCobZyB_iMRLCDO41nve0tJ1hSuAMOGemPQu5F3WFmZZSFi6Xa" alt="I Am Ruth review: Kate Winslet is heartbreaking in powerful drama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Winslet and Mia Threapleton give stellar performances to make this latest Channel 4 drama from Dominic Savage an emotional experience.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/culture/tvfilm/i-am-ruth-channel-4-review-kate-winslet-mia-threapleton-b1045221.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth on Channel 4 review: Kate Winslet and her daughter Mia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvgAZ7EXxCHgUb_VgxHP_4Ll2oP-QDXXJDxNDM_Usg8nXA4UNp6mp0NrMxJqFKc-ixTYK3mjDj" alt="I Am Ruth on Channel 4 review: Kate Winslet and her daughter Mia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The latest in Dominic Savage&#39;s I Am series is a heartbreakingly accurate depiction of the toxic effects of social media on young people.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/tv/2022/12/08/ruth-review-kate-winslets-claustrophobic-drama-brings-life-sinister/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth, review: Kate Winslet&#39;s claustrophobic drama brings to life ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ-SWsc5snUNOjfCc8LVwmFlr5GA07yQLiDGhrESyQUOMIFTZKpLIcZFvZbECius5Twal4Smx1" alt="I Am Ruth, review: Kate Winslet&#39;s claustrophobic drama brings to life ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Winslet stars opposite her own daughter, Mia Threapleton, in Dominic Savage&#39;s bleak – if heavy-handed – tale about children and the internet.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/arts-entertainment/tv/news/i-am-ruth-review-kate-winslet-b2240484.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth review: Kate Winslet and Mia Threapleton star in drama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzwf46S7wcVg3Elt2fdaW9T1EeW8x9lhNrykGPm1_pLLkyXbOVXEuldCpknccbftvWYWQ7T0yw" alt="I Am Ruth review: Kate Winslet and Mia Threapleton star in drama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Threapleton is a real revelation in this feature-length drama, while Winslet&#39;s wrenching performance is similarly unshowy.</p></div>
            </div>
        </a><a href='https://inews.co.uk/culture/television/i-am-ruth-channel-4-review-kate-winslet-2015338'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth, Channel 4, review: Kate Winslet is stunning as the mother ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoEfsyEkwE8JP3U5HO3mjuCd_FUyJiwPcOrD1CFIFxHCN_s6cigsnpOUprWcCFEhY17zbMcgoy" alt="I Am Ruth, Channel 4, review: Kate Winslet is stunning as the mother ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freya (Threapleton), a typically sullen young woman, and her mother, Ruth (Winslet), spend the first half of the feature-length drama at loggerheads. It was&nbsp;...</p></div>
            </div>
        </a><a href='https://inews.co.uk/culture/television/i-am-ruth-writer-dominic-savage-my-force-of-nature-mother-inspires-me-to-write-womens-stories-2018261'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Am Ruth writer Dominic Savage: &#39;My force of nature mother inspires ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsNRHZy4WDjtXOBeTKzttEBs9bCFzP1qtMmpMJPoZMMabmlbVg1kIEih94bS9HDGM-g3IjZWKo" alt="I Am Ruth writer Dominic Savage: &#39;My force of nature mother inspires ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bafta winning and director shares his creative process behind the powerful and often heartbreaking anthology series. I Am : Ruth. Created by Dominic&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}