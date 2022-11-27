import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nick Fuentes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nick Fuentes"/>
        <meta name="description" content="Trending News about Nick Fuentes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nick Fuentes</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/0791f004467799af1640fb331118832c39da2076/0_103_2126_1275/master/2126.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=260bb2a096ec590ed8eb96aaddddc95a" alt="Nick Fuentes"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/us-news/2022/nov/26/trump-nick-fuentes-dinner-reaction'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump condemned for dining with white supremacist Nick Fuentes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_w7OD3_mBHWvAY0Kq1LA8mVGCBzcqL47FjmqAYpqU98kK8rbcdRN6ahg8YwiVm8rbrn1m3Ui3" alt="Trump condemned for dining with white supremacist Nick Fuentes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Democrats, anti-racist groups and some Republicans criticize president for meeting Fuentes at dinner with Kanye West.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/25/politics/trump-kanye-west-nick-fuentes-mar-a-lago/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump hosted Holocaust denier at Mar-a-Lago estate during visit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbgh7Qiv6WrqTl_np855V8YMuSrWWCY092WtOZ_m_196v7GbiVVAY0vpR3HeqM7jWYHeqC9GFT" alt="Trump hosted Holocaust denier at Mar-a-Lago estate during visit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former President Donald Trump hosted White nationalist and Holocaust denier Nick Fuentes and Kanye West at his private Mar-a-Lago estate this week,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.axios.com/2022/11/25/trump-nick-fuentes-ye-kanye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump talks with white nationalist Nick Fuentes at Mar-a-Lago dinner</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdnz0zJ3tuIGcCe4mGnclNmAmYd76JeFtAQbshW9Hb3twyjKy-QzxDs2QZAp8uyyz1Anqz2-sG" alt="Trump talks with white nationalist Nick Fuentes at Mar-a-Lago dinner" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fuentes has been labeled a &quot;white supremacist&quot; by the Justice Department.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/brianbushard/2022/11/26/nick-fuentes-meet-the-gen-z-white-supremacist-who-dined-with-trump-and-kanye-west/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Fuentes: Meet The Gen-Z White Supremacist Who Dined With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJQBcxDArXwM3nIemYcZcn991NeewfP9GW2wnsBP8_ExNtWp6d_57TjBbJhASCtKQxlXpS8Wfm" alt="Nick Fuentes: Meet The Gen-Z White Supremacist Who Dined With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former President Donald Trump was heavily criticized for holding a meeting this week that included controversial artist Kanye West and Gen-Z political&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/25/trump-white-nationalist-nick-fuentes-kanye-00070825'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump dined with white nationalist, Holocaust denier Nick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRS_U5o_jtwuQ8BkFCBh-gCX3HJ2xzve4kN0N2hlw3fPVmGR7J_JRidK7DX8ntqd0mopdgcdxOc" alt="Donald Trump dined with white nationalist, Holocaust denier Nick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former president hosted Fuentes and Kanye West at Mar-a-Lago. He said it was “quick and uneventful.”</p></div>
            </div>
        </a><a href='https://nymag.com/intelligencer/2022/11/what-we-know-about-donald-trumps-dinner-with-nick-fuentes.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What We Know About Trump&#39;s Dinner With White Supremacist Nick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtA3rG_k0_cHc9JLb1sahrCr-VDlXP_k5r8Yx6_50AO4SO0MlBUeiahnHku-x6yEJeG__WivoO" alt="What We Know About Trump&#39;s Dinner With White Supremacist Nick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former president Donald Trump had dinner at his Mar-a-Lago club on November 22 with Kanye West and prominent white supremacist and anti-Semite Nick Fuentes.</p></div>
            </div>
        </a>
        </Template></>;
}