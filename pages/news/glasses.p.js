import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Glasses</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Glasses"/>
        <meta name="description" content="Trending News about Glasses" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Glasses</h1>
            <Image width={800} height={500} src="https://www.cnet.com/a/img/resize/b5852af6c05e9069d8cadd8877545a0317e52a70/hub/2022/11/15/1ee0b984-9cc3-49a1-b7ac-80b7fdee942c/snapdragon-ar2-gen-1-platform-and-glasses.jpg?auto=webp&fit=crop&height=630&width=1200" alt="Glasses"/>
            <h3>Recent News</h3>
            <a href='https://www.cnet.com/tech/computing/qualcomms-new-ar-chips-point-to-a-new-generation-of-smart-glasses/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qualcomm&#39;s New AR Chips Point to a New Generation of Smart ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxw0haVVpDRb5aNdM93ymi6206gJ9Aazq9-owhBR8CtjFtgRzAWl96a6lW2jANiRVv41UIOGKg" alt="Qualcomm&#39;s New AR Chips Point to a New Generation of Smart ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The AR2 Gen 1 looks to power compact AR glasses coming in the next few years. Qualcomm. Amid a recent uptick in VR headsets, Qualcomm&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.digitaltrends.com/computing/qualcomm-snapdragon-ar2-chip-ar-glasses-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AR glasses will have a dedicated Qualcomm chip in 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqcC69BvjrFT2B5kgGkYSul9b7_1RBc_jeuz7RqgKn7tUmC4MNNklNMvSSeb1m5G3ISH50AYHa" alt="AR glasses will have a dedicated Qualcomm chip in 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualcomm&#39;s new Snapdragon AR2 Gen 1 chipset might be the missing ingredient that makes slim and powerful AR glasses that are more popular in 2023.</p></div>
            </div>
        </a><a href='https://www.agupdate.com/midwestmessenger/opinion/columnists/glenn_brunkow/needing-glasses-the-problem-becomes-clear/article_d1efb90e-6455-11ed-bdf8-8b38f0a047b7.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Needing glasses: the problem becomes clear</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkWp9heJKUcdwQ9-1Q8oBbxAv2BIajPlACBm4hxNuvU_YiAKMmynRgwSHQqoKpdnBnSvEahHt7" alt="Needing glasses: the problem becomes clear" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Glenn Brunkow is a fifth-generation farmer in the Northern Flint Hills of Pottawatomie County in Kansas. He was a county Extension agent for 19 years before&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pcmag.com/news/qualcomm-breaks-up-its-soc-for-better-ar-glasses'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qualcomm Breaks Up Its SoC for Better AR Glasses</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdVuSKltYC4jD0BAHGerDlZMQH0_mh4o2_THQwofBwLn40QYJKZdlub7v4kkY8rIaiq0OBizjc" alt="Qualcomm Breaks Up Its SoC for Better AR Glasses" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualcomm developed a multi-chip architecture to ensure that its Snapdragon AR2 Gen 1 augmented reality glasses are as slim and light as possible.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/charliefink/2022/11/16/snapdragon-ar2-chip-set-to-accelerate-ar-glasses/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snapdragon AR2 Chip Set To Accelerate AR Glasses</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXdAj57fXPlaIsv_SSJpe-DjJ4e5w-vkUlhyt1c6EgZZ01dagTbd_jK9gRpCNWTA_zpE9AsRw_" alt="Snapdragon AR2 Chip Set To Accelerate AR Glasses" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>November 16, 2022 – Qualcomm unveiled its new Snapdragon AR2 Gen 1 Platform at Snapdragon Summit 2022 in Hawaii today. The new chipset will enable&nbsp;...</p></div>
            </div>
        </a><a href='https://www.phonearena.com/news/qualcomm-introduces-new-ar-platform_id143748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qualcomm unveils Snapdragon AR2 Gen 1 Platform for headsets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzD2cUfu1ufXzRBOdSIq2_x210vUN4RpWXesE4CG9GBejXm0jdbuqrd1HQk27RbvsI78vo9qHq" alt="Qualcomm unveils Snapdragon AR2 Gen 1 Platform for headsets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new chip is part of Qualcomm&#39;s Extended Reality (XR) offerings. Qualcomm says that the Snapdragon AR2 Gen 1 &quot;delivers groundbreaking AR technology that will&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gsmarena.com/qualcomm_unveils_new_bluetooth_le_audio_chips_new_platform_for_ar_glasses-news-56554.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qualcomm unveils new Bluetooth LE Audio chips and platform for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSNBKv1llZ2Wlz9GPDmTZORz6do9bt8FOHE-BFtA_K1tf86ooiITGabrj8gYj9lXXQdPLv19PQ" alt="Qualcomm unveils new Bluetooth LE Audio chips and platform for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Qualcomm S3 and S5 Gen 2 chips can handle lossless and low-latency audio. The AR2 Gen 1 is designed for thin and light AR glasses.</p></div>
            </div>
        </a><a href='https://www.roadtovr.com/qualcomm-snapdragon-ar2-processor-platform-announcement-ar-glasses/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qualcomm Reveals Snapdragon AR2 Processor for Glasses-sized ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWUz22AlE2rOOQJMso1J3OvJCZ6qq-RIH4RwQv9iBVh-xDkVKQlxsc7aUH8gncN-7HpV79l5DK" alt="Qualcomm Reveals Snapdragon AR2 Processor for Glasses-sized ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualcomm today announced Snapdragon AR2, its “purpose-built headworn augmented reality platform.” Differentiating from the company&#39;s existing Snapdragon XR2&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}