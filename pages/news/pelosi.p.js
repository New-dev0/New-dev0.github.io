import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pelosi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pelosi"/>
        <meta name="description" content="Trending News about Pelosi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pelosi</h1>
            <Image width={800} height={500} src="https://calmatters.org/wp-content/uploads/2022/06/111722-NANCY-PELOSI-AP-AH-CM.jpg" alt="Pelosi"/>
            <h3>Recent News</h3>
            <a href='https://www.kosu.org/u-s-news/u-s-news/2022-11-17/house-speaker-nancy-pelosi-to-step-down-from-democratic-leadership'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>House Speaker Nancy Pelosi to step down from Democratic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="House Speaker Nancy Pelosi to step down from Democratic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NPR&#39;s Ailsa Chang talks with USA Today Washington Bureau Chief Susan Page about Nancy Pelosi&#39;s decision to step down as House Speaker after 20 years and&nbsp;...</p></div>
            </div>
        </a><a href='https://calmatters.org/newsletters/whatmatters/2022/11/nancy-pelosi-news-california/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>California braces for post-Pelosi future</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNv4OxAnCzBNVL7ZfIhzQpaCD_b9FZzOOhBHhgK8e94M22s6mjj0c7tBiBIoQ7is-bd385rFeh" alt="California braces for post-Pelosi future" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>California is bracing for Republican Kevin McCarthy to take over as speaker of the U.S. House after Nancy Pelosi gave up leadership.</p></div>
            </div>
        </a><a href='https://www.politico.com/newsletters/national-security-daily/2022/11/18/what-pelosi-stepping-down-means-for-china-relations-00069428'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Pelosi stepping down means for China relations</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTTjE0NjzdQMsIN92NVgOXuIPE2MZZQKFfazcLdE-H8vx2YoSTwBlhkVI7m0Sl4uaqmsoa-4h1" alt="What Pelosi stepping down means for China relations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>House Speaker Nancy Pelosi speaks on the House floor. House Speaker Nancy Pelosi stepped down from her historic post on Thursday, vowing to pass the torch to a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/lifestyle/2022/11/18/nancy-pelosi-retiring/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>There was nothing soft about Nancy Pelosi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6_X2wGjDeqQU4js0ppbjAsrhHF0U-MKtcW20KE18rGPVpOgYrDUiMyo42s0Y6czSvhNN2-Gja" alt="There was nothing soft about Nancy Pelosi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The House speaker announced on Thursday that she would be stepping down from Democratic leadership at the turnover of Congress in January. “The hour has come&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opb.org/article/2022/11/18/nancy-pelosi-is-stepping-down-as-a-party-leader-who-will-replace-her/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi is stepping down as a party leader. Who will replace ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8fT_pd4B4Nz3P-Dc5m3GIAJ9sUqh2CY-SQVdrog2bux5u0BeHauiJS3SaHxC2lsMmWfJCocKY" alt="Nancy Pelosi is stepping down as a party leader. Who will replace ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaker of the House Nancy Pelosi (D-CA) speaks with Rep. Hakeem Jeffries (D-NY) during a news conference with House Democrats about the Build Back Better&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/17/1133397685/house-speaker-pelosi-step-down'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Speaker Pelosi says she will step down as party leader after two ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhOSYD5ZkraBxOSAqiNoMBpbjiYA0gfwtpo194YuASk0CV8hOh9k9vTPSssm8EX56oLSuzn7Nh" alt="Speaker Pelosi says she will step down as party leader after two ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaker Nancy Pelosi&#39;s announcement paves the way for a new generation of Democratic lawmakers to fill the leadership ranks.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/18/rep-hakeem-jeffries-announces-bid-to-replace-nancy-pelosi-as-democratic-leader.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rep. Hakeem Jeffries announces bid to replace Nancy Pelosi as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRn4yBmDWAj6A4Y2S7w_IP7-1d1NqBG1LmyF1HPBHVxGT0BlHh5_2DXraSRz1yeu9YDFcGcPU-x" alt="Rep. Hakeem Jeffries announces bid to replace Nancy Pelosi as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If elected, Jeffries, 52, would become the first Black leader of a congressional caucus. Reps. Katherine Clark, 59, and Pete Aguilar, 43, are seeking to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.speaker.gov/newsroom/111822'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelosi Statement on New House Democratic Leadership</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pelosi Statement on New House Democratic Leadership" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Washington, D.C. — Speaker Nancy Pelosi released this statement on the new candidates for House Democratic leadership: “Yesterday, I said on the Floor that&nbsp;...</p></div>
            </div>
        </a><a href='https://abcnews.go.com/Politics/nancy-pelosi-steny-hoyers-long-tense-relationship-democratic/story?id=93514419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nancy Pelosi and Steny Hoyer&#39;s long and sometimes tense ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlZeS9IX5FYgmJVeNjLsoT9UrTNeODpv73OC5LP3zbrzQdRitDiLeAX8wn1Ms246wpH6X8aNlS" alt="Nancy Pelosi and Steny Hoyer&#39;s long and sometimes tense ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For nearly six decades the legacies of House Speaker Nancy Pelosi and House Democratic Leader Steny Hoyer have been closely linked.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/us/elections/hakeem-jeffries-pelosi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakeem Jeffries Asks Colleagues for Support on Succeeding Pelosi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3qVTNdolylx65KtDAWi_LjtHBUPOtze0MJTlQeg1xxg0x0puRxI1nBC46jTnp9A3BsCKMFP5Y" alt="Hakeem Jeffries Asks Colleagues for Support on Succeeding Pelosi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Jeffries is slated to set in motion a long-sought generational change at the top of the House Democratic caucus.</p></div>
            </div>
        </a>
        </Template></>;
}