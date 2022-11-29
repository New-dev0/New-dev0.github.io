import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sharks vs Cardiff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sharks vs Cardiff"/>
        <meta name="description" content="Trending News about Sharks vs Cardiff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sharks vs Cardiff</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7793/19a4c19211b349c7815f670e6aead19a.jpg" alt="Sharks vs Cardiff"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/unitedrugbychampionship/dismal-sharks-hammered-in-durban-rain-as-cardiff-make-history-20221127'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dismal Sharks hammered in Durban rain as Cardiff make history</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTflendbbyqA8Zda-VbYEeVyS4_7WingPKews4-ARMJop0gmYzPHZD6OGndzj1o5juFyeUhIBdu" alt="Dismal Sharks hammered in Durban rain as Cardiff make history" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Sharks were woeful in the Durban wet, going down to Cardiff in a United Rugby Championship clash on Sunday.</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/sharks-boss-vows-response-to-cardiff-humiliation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sharks boss vows response to Cardiff humiliation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5QhE4_xbPlyJGsMm3x_Vy_5lcCbepRshemEtv2MJpLliMjWzurIySFWEFA6OBfa6baRi5OWYt" alt="Sharks boss vows response to Cardiff humiliation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sharks chief Ed Coetzee has issued an apology after Cardiff consigned them to one of the heaviest losses in team history on Sunday.</p></div>
            </div>
        </a><a href='https://supersport.com/rugby/united-rugby-championship/news/f08b1b81-0da5-4ee9-b5a1-3f0f92f9c75f/cardiff-make-history-as-abject-sharks-sink-without-trace'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cardiff make history as abject Sharks sink without trace | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3T_87dlEZSodJ2vEcr-oI5nsxHKGd1iAXIeaemyTlKbKf0dU_f1gs6vVzWMlZydbCGrZRNAqI" alt="Cardiff make history as abject Sharks sink without trace | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was the one bright light in a horrid weekend for Welsh rugby, with the three other Welsh clubs all losing in their games on South African soil and the Wales&nbsp;...</p></div>
            </div>
        </a><a href='https://www.planetrugby.com/news/united-rugby-championship-sharks-chief-apologises-for-poor-outing-against-cardiff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United Rugby Championship: Sharks chief apologises for poor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtl07JmHKuS--YZzESOqW2Gflf5ivk5vf8Svlu27hsvikVt1-E5xUrKWjYslMZYvGMWkSsMHWD" alt="United Rugby Championship: Sharks chief apologises for poor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sharks chief executive Eduard Coetzee apologised across the board for his side&#39;s poor display against Cardiff in their 35-0 loss in Durban.</p></div>
            </div>
        </a><a href='https://www.citizen.co.za/sport/rugby/urc-result-naive-and-lacklustre-sharks-sink-without-trace-v-cardiff/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>URC result: Naive and lacklustre Sharks sink without a trace v Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQW1RnO3yGWYc3J5W2PNObwiyowniTtWQvRfxXTWVzfgH_7KQ8OonC1asBkb1h18gO2tj-eWZGs" alt="URC result: Naive and lacklustre Sharks sink without a trace v Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Sharks&#39; reserve depth produced a naïve and lacklustre effort in the rain, seeing them being hammered 35-0 by Cardiff.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63753161'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Young leads Cardiff to historic win at Sharks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCsM7FwX_5ePTGJu7S3gzVxLp5o806xelpW5OvGyAKrfpPLZGpStSvCGsw13UcazQyGsFCvBHS" alt="Young leads Cardiff to historic win at Sharks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flanker Thomas Young claims two tries as Cardiff crush Sharks 35-0 in Durban to become the first Welsh region to win in South Africa in the United Rugby&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/urc/sharks-boss-says-sorry-to-fans-after-humiliating-loss-to-cardiff-on-a-rainy-sunday-night-in-durban-26dd473d-b5a1-493d-b0a3-40010b238a2d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sharks boss says sorry to fans after humiliating loss to Cardiff on a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEJn3BeYnayiH-SAjYpi-krPrvSotsQeELehh5NdWouRVPwhQf4eR1nW-nZrKSM6vWTmJDRjF_" alt="Sharks boss says sorry to fans after humiliating loss to Cardiff on a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sharks CEO Ed Coetzee has apologised to supporters after they suffered a humiliating defeat in their United Rugby Championship clash against Cardiff on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}