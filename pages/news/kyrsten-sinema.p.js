import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kyrsten Sinema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kyrsten Sinema"/>
        <meta name="description" content="Trending News about Kyrsten Sinema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kyrsten Sinema</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/2A1F/production/_127938701_gettyimages-1235979521.jpg" alt="Kyrsten Sinema"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/world-us-canada-63917462'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Senator Kyrsten Sinema says she will leave Democratic Party</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaMMAUjkHWg0-Tw1kWzrq7tbjbYHeBcne9Aiwm9todeVTLt0ZFY-HJ-1nQZBsF3tWfB9aXr44k" alt="US Senator Kyrsten Sinema says she will leave Democratic Party" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Democrats maintain control of the Senate, despite the Arizona senator&#39;s move to sit as an independent.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/09/politics/kyrsten-sinema-leaves-democratic-party/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sinema leaving the Democratic Party and registering as an ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwmsxRHWNcxS8CC8jTdFcvWUMq-qT2DOrg1Nq0skGNvzSJ86lc7SEQMejYJE5X0rib_FgK7zQa" alt="Sinema leaving the Democratic Party and registering as an ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arizona Sen. Kyrsten Sinema is leaving the Democratic Party and registering as a political independent, she told CNN&#39;s Jake Tapper in an exclusive TV&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/12/09/1141827943/sinema-leaves-democratic-party-independent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s what Sinema&#39;s switch from Democrat to independent could ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgD9qTnZpAUCjhMzVCjEy7BEUsb-sP3BWQ5zm5otSxUoUT1MTHz478tt4u7RMv_uwJeYOyt1KL" alt="Here&#39;s what Sinema&#39;s switch from Democrat to independent could ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sinema&#39;s move is unlikely to change the power balance in the Senate, as it comes days after Sen. Raphael Warnock won the Georgia runoff election to give&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wokv.com/news/politics/democratic-sen/NUOUO3VC5DIVWJRGMG6UIRLPRI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Democratic Sen. Kyrsten Sinema switches to independent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTI8tH6xodaafAcwu5nzFUz6IPcb4bFn22j8L5bgMp0gHoTsm6H5aMXOgg_kOyj8spZWNx4Shob" alt="Democratic Sen. Kyrsten Sinema switches to independent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sinema, who faces reelection in 2024, has been a vibrant yet often unpredictable force in the Senate, tending toward the state&#39;s independent streak and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/09/us/politics/kyrsten-sinema-democrats.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kyrsten Sinema Says She Will Leave the Democratic Party to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIh51bUAXIMYArwLh2hiwAyQ9RJ40MnnounCupNrsT3kSLWWBO-CF1qq3rMZe9dhzpyOU4UFJU" alt="Kyrsten Sinema Says She Will Leave the Democratic Party to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Arizona senator is registering as an independent, noting that she “never fit perfectly in either national party.”</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/12/09/sinema-arizona-senate-independent-00073216'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sinema switches to independent, shaking up the Senate</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgdRjCVG0rnQCKH60VWHo3avPUDEx2nz5r6dc6OD6_wy6lpHupLkaCO6SUGSyZtD1Kw4ceEyZV" alt="Sinema switches to independent, shaking up the Senate" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Arizona senator won&#39;t say whether she&#39;s running for reelection but said in an interview she doesn&#39;t expect a change in how the Senate operates.</p></div>
            </div>
        </a><a href='https://www.univision.com/noticias/politica/kyrsten-sinema-deja-el-partido-democrata-y-pasa-a-ser-independiente'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La senadora de Arizona Kyrsten Sinema deja de ser demócrata, se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0xXClG_Js39v_PQiIhMqOUhJC28ALKYFdcVc4NFEJVHHGNx18ciE4_sXXttTDmm2Rp4_8NnZ8" alt="La senadora de Arizona Kyrsten Sinema deja de ser demócrata, se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La senadora de Arizona, Kyrsten Sinema, está cambiando su afiliación partidaria del Partido Demócrata a independiente, dando un golpe a la estrecha mayoría&nbsp;...</p></div>
            </div>
        </a><a href='https://cnnespanol.cnn.com/2022/12/09/kyrsten-sinema-partido-democrata-independiente-trax/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La senadora Kyrsten Sinema deja el Partido Demócrata y se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTrJYrFRbYlKBCMhX7MwWoF3de8xZv3qS_GyDk6IGjP864wimPa5rtYkwD0AHljCNFpMd61Qr3B" alt="La senadora Kyrsten Sinema deja el Partido Demócrata y se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La senadora por Arizona, Kyrsten Sinema, abandona el Partido Demócrata y se registra como independiente, según declaró a Jake Tapper, de CNN,&nbsp;...</p></div>
            </div>
        </a><a href='https://eltiempolatino.com/2022/12/09/politica/kyrsten-sinema-se-registra-como-independiente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kyrsten Sinema deja al Partido Demócrata y se declara independiente</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuDP4pulql2yjISqYuPCTb2MVH3AscdWTzeNUcQGOtgS_v6VyVc33t-WOp7fMT6AjLe84cEJo0" alt="Kyrsten Sinema deja al Partido Demócrata y se declara independiente" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kyrsten Sinema dijo en su anuncio que declaraba su independencia del sistema bipartidista roto de Washington.</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/noticias/2022/12/09/sen-kyrsten-sinema-deja-el-partido-democrata-para-ser-independiente/69714953007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kyrsten Sinema abandona el Partido Demócrata, se registra como ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkxrisx0A6m_6Hq8ezZTRvsvBP0_sfarXvH7H9Sx-7ObpNsbgE4sdJyLo0FpAdT-Ptf86NtF5-" alt="Kyrsten Sinema abandona el Partido Demócrata, se registra como ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sinema se convertirá formalmente en independiente, en un movimiento que la sitúa más plenamente en el centro de una cámara estrechamente dividida.</p></div>
            </div>
        </a>
        </Template></>;
}