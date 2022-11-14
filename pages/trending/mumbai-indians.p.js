import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mumbai Indians</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mumbai Indians"/>
        <meta name="description" content="Trending News about Mumbai Indians" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mumbai Indians</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/jason-beherendorff-1.jpg" alt="Mumbai Indians"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/jason-behrendorff-traded-royal-challengers-bangalore-mumbai-indians-ipl-8264996/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL: Jason Behrendorff traded from Royal Challengers Bangalore to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoyOcAUVVp-Ju65pNfp-7D0gOsctPJyP2ecHvdMu0osOkqbJws6KqqiNwiV-2_RY15mA2rJobv" alt="IPL: Jason Behrendorff traded from Royal Challengers Bangalore to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jason Behrendorff will be representing Mumbai Indians – his 2018 franchise when he played 5 matches and picked as many wickets.</p></div>
            </div>
        </a><a href='https://www.mumbaiindians.com/news/welcome-back-home-jason-behrendorff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Welcome back home, Jason Behrendorff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSnM6ckiJFLutTui4439ETV5OGinuMhdqGZ8wTsDHjBm_2oGBIw3GxzqGBrkhglgD45l9r0KWE" alt="Welcome back home, Jason Behrendorff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He&#39;s back. A key part of our march to the IPL title in 2019, Jason Behrendorff, the Australian left-arm swing bowler, is back in our Mumbai Indians squad,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/story/ipl-2023-royal-challengers-bangalore-trade-jason-behrendorff-to-mumbai-indians-1344603'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: Royal Challengers Bangalore trade Jason Behrendorff to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbWOZw8TAondE9c7HfR8bzG87C-EnlT24KaCe_hZzzkYRZSnvdXvGsbUbNMoYAbiB_GYQ9VpHc" alt="IPL 2023: Royal Challengers Bangalore trade Jason Behrendorff to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The left-arm fast bowler was with Mumbai from 2018 to 2020 as well but played only five games.</p></div>
            </div>
        </a><a href='https://scroll.in/field/1037297/ipl-2023-mumbai-indians-trade-jason-behrendorff-from-royal-challengers-bangalore'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: Mumbai Indians acquire Jason Behrendorff from Royal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqc450c5xCMzv29h6lu7WHA39twCe9iuSfO20Jvfan_0LuQeAeOjfdsnCavHpYwFxQTtL8GKIy" alt="IPL 2023: Mumbai Indians acquire Jason Behrendorff from Royal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apart from representing Mumbai Indians in 2018, Behrendorff has previously represented the Chennai Super Kings in 2021 and Royal Challengers Bangalore in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iplt20.com/news/3846/jason-behrendorff-traded-from-royal-challengers-bangalore-to-mumbai-indians'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason Behrendorff traded from Royal Challengers Bangalore to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Jason Behrendorff traded from Royal Challengers Bangalore to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australian fast bowler Jason Behrendorff has been traded from Royal Challengers Bangalore to Mumbai Indians for the forthcoming TATA IPL Season 2023. He was&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/ipl-2023-jason-behrendorff-traded-from-royal-challengers-bangalore-to-mumbai-indians/article66129883.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 | Jason Behrendorff traded from Royal Challengers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOLZFBN6cZugD4Tk5SONFhA8tQ3JJFc-p5BV_J6Uj2R1zkk06H1rp8defzVzXhpfWnA6tTQqgA" alt="IPL 2023 | Jason Behrendorff traded from Royal Challengers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The left-arm quick has played nine T20Is, picking seven wickets with the best bowling performance of 4/21.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/jason-behrendorff-traded-from-rcb-to-mumbai-indians-ahead-of-ipl-2023-533623'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason Behrendorff traded from RCB to Mumbai Indians ahead of IPL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCvw-3MzHgo3V_q7Az3b4DmPZ0pctF2hUDIHP6o7Gabay4hXJIr-I1JBhRoOH1MdrGlELEk88f" alt="Jason Behrendorff traded from RCB to Mumbai Indians ahead of IPL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Royal Challengers Bangalore (RCB) and Mumbai Indians (MI) completed the first trade in the ongoing Indian Premier League (IPL) trading window ahead of the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}