import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jerry Jones photo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jerry Jones photo"/>
        <meta name="description" content="Trending News about Jerry Jones photo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jerry Jones photo</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221201134308-01-jerry-jones-arkansas-desegregation-photo.jpg?c=16x9&q=w_800,c_fill" alt="Jerry Jones photo"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/12/01/sport/lebron-james-jerry-jones-photo-intl-spt/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James: A photo of Dallas Cowboys owner Jerry Jones ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTY5ty0g8KhI-ygFLVmVhgTmcFJUclmWwZrUFH2vg74cqwqB6bQ5kzdJUc3-8K-hTvCDqtiRnT" alt="LeBron James: A photo of Dallas Cowboys owner Jerry Jones ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The issue of race and its historical legacy in the US was at the forefront of NBA star LeBron James&#39; mind on Wednesday as he asked reporters why he hadn&#39;t&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/01/dak-prescott-addresses-the-jerry-jones-photo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dak Prescott addresses the Jerry Jones photo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnAxCNa9GG_H_17nN9H7AZAf_IWyalQjr4-jAKS2zKuPEG8nHSAL8Qr7BFtOEt-0mVRFlEgwcY" alt="Dak Prescott addresses the Jerry Jones photo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A day after NBA star LeBron James expressed disappointment that reporters hadn&#39;t asked him about the Jerry Jones segregation-era photo, Cowboys quarterback&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsnet.ca/nba/article/james-questions-media-disparity-in-coverage-of-irving-tweet-jerry-jones-photo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>James questions media disparity in coverage of Irving tweet, Jerry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO8PHUaHb68UerebLG6WEJ7T5JVMi-nGQ1XV7LzTZaJFEnuQTEL4qj9AwJWzeB2JVMGyRNF09p" alt="James questions media disparity in coverage of Irving tweet, Jerry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LeBron James has questions about the disparity of media scrutiny he believes is being applied to a 1957 photo of Jerry Jones and the recent controversy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/story/_/id/35153937/lebron-james-faults-media-not-asking-1957-jerry-jones-photo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James faults media for not asking him about 1957 Jerry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiDlzkIUMw0cEdG2gU_OIdO7mFLJirJe9yWdVrP4bZHFcEf-75doaoyD-Ae8Q4WOtW7GwGbg4z" alt="LeBron James faults media for not asking him about 1957 Jerry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Addressing reporters during his postgame news conference Wednesday, LeBron James wondered why he has not been asked about the 1957 photo of Cowboys owner&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/2022/12/01/dak-prescott-discusses-lebrons-comments-concerning-jerry-jones-photo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dak Prescott Discusses LeBron&#39;s Comments Concerning Jerry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKnJLRM78xyNj7g_jPxJeG7Pigm3GnU79YL3QDyUJx1VmllHwjmOVUNwrczJZg4N-ND3GDPurb" alt="Dak Prescott Discusses LeBron&#39;s Comments Concerning Jerry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Cowboys quarterback addressed James&#39;s thoughts on the recently surfaced photo of the Dallas owner at a 1957 desegregation protest.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/01/lebron-james-goes-off-reporters-jerry-jones-photo-kyrie-irving-reaction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James Goes Off On Reporters Over Jerry Jones Photo, Why ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTbYy1B0QmJBzauPe8xHgUj36hSbsvuwZeeuz4u2MB0AiYEKQBMbdMhf5FGUWq2dek0rKeXpvH" alt="LeBron James Goes Off On Reporters Over Jerry Jones Photo, Why ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LeBron James went after media members following the Lakers&#39; win on Wednesday night ... blasting them for not asking about the racial controversy engulfing&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}