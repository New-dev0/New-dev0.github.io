import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anthony Rizzo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anthony Rizzo"/>
        <meta name="description" content="Trending News about Anthony Rizzo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anthony Rizzo</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0901%2Fr1055658_1296x729_16%2D9.jpg" alt="Anthony Rizzo"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/mlb/story/_/id/35033832/source-yankees-re-signing-anthony-rizzo-multi-year-deal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Source - Yankees, Anthony Rizzo agree to multiyear deal worth up ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFqeU3ywX6ZtM2wuLsriOTASXcw1eLlMLv1VFLzOz5yzFQjnDPMgR4v83EQvAHqhCTxR7vzrKT" alt="Source - Yankees, Anthony Rizzo agree to multiyear deal worth up ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Rizzo will make $17 million in each of the next two seasons and has a $6 million buyout option on a third year in 2025.</p></div>
            </div>
        </a><a href='https://www.mlb.com/news/anthony-rizzo-returns-to-yankees'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rizzo returns to Yankees on two-year deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQoRpifyNdo3C-D5ExmzVPhza85gpQ0VSwlmsOk_0E0Xb3nGAtPhKs6k4Hcjqb3EsgWf5ycL-ob" alt="Rizzo returns to Yankees on two-year deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEW YORK -- Anthony Rizzo is keeping his Yankees pinstripes for a while longer, agreeing Tuesday to a two-year contract with a club option for the 2025&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/mlb/news/yankees-anthony-rizzo-agree-to-two-year-34-million-deal-in-mlb-free-agency-per-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yankees, Anthony Rizzo agree to two-year, $34 million deal in MLB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3-VTwERV9g1YkY25vOPidUioVd43AigTx9fjrLDxB8GZe_suE49JJ_4yP-Q13lNn5pRj119th" alt="Yankees, Anthony Rizzo agree to two-year, $34 million deal in MLB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rizzo spent nearly 10 years with the Cubs -- after a quick stint in San Diego -- before being traded to the Yankees at the 2021 trade deadline. He then went&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mlbtraderumors.com/2022/11/yankees-to-re-sign-anthony-rizzo-to-multi-year-deal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yankees To Re-Sign Anthony Rizzo To Multi-Year Deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoCdURwOduzKU5cKsJvrqqrLcuMSfLHnpdvS76GA8ASNSo82GkIS3S7gH25Hs0owefNb34pV4E" alt="Yankees To Re-Sign Anthony Rizzo To Multi-Year Deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rizzo, 33, spent many years with the Cubs, a key part of the club&#39;s core that broke the 108-year curse by winning the 2016 World Series. From 2014 to 2019, he&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/yankees-reportedly-re-sign-anthony-rizzo-to-two-year-34-million-deal-215823142.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yankees reportedly re-sign Anthony Rizzo to two-year, $40 million ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDnjwlMdZxilNaNGvPMFGIDW1U3L4NWCuMfDiqouP09iPVbjUFfnkC0i1Ajzdmwd0h_0ZjIQju" alt="Yankees reportedly re-sign Anthony Rizzo to two-year, $40 million ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rizzo rejected a qualifying offer from the Yankees ... and then signed with them moments later.</p></div>
            </div>
        </a><a href='https://www.northjersey.com/story/sports/mlb/yankees/2022/11/15/anthony-rizzo-yankees-contract-free-agency/69651831007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony Rizzo returning to Yankees, as Hal Steinbrenner makes a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQg6t4ozTOs1U2i-RSDZlA2xdOkcl11bMlIwAaUthO5iGXa_EOPueFeUBPtCxyxg2d9DBYyd8S" alt="Anthony Rizzo returning to Yankees, as Hal Steinbrenner makes a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first domino in the Yankees&#39; offseason plan has fallen, as Anthony Rizzo will reportedly return on a multi-year contract.</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/beisbol/nota/_/id/11232966/yankees-y-anthony-rizzo-acuerdan-contrato-de-3-anos-por-un-valor-de-hasta-51-millones'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yankees y Anthony Rizzo acuerdan contrato de 3 años por un valor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTctQc6Qv4G9ugQYxWg2SgUfu5dTQa9aia-HHUTSGU7BtXVQoTT-ycZOAG0dg_WwdY7H5oE-J4c" alt="Yankees y Anthony Rizzo acuerdan contrato de 3 años por un valor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Rizzo ganará $34 millones durante las próximas dos temporadas más una opción del club para 2025 que incluye una rescisión de $6 millones.</p></div>
            </div>
        </a><a href='https://eldiariony.com/2022/11/15/oficial-anthony-rizzo-se-queda-en-el-bronx-con-un-contrato-multianual/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oficial: Anthony Rizzo se queda en El Bronx con un contrato ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1XxX3On75UoI9z7y6kdk9nyzUkZPtfAXXupzOaFmg7fc4js1diGX8rBV4JyTrDOmNYVsj37i5" alt="Oficial: Anthony Rizzo se queda en El Bronx con un contrato ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yankees de Nueva York ha asegurado la permanencia de uno de los jugadores más importantes de la organización en las últimas temporadas, como lo Anthony&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mlb.com/es/news/yankees-acuerdan-pacto-multianual-con-anthony-rizzo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yankees acuerdan pacto multianual con Anthony Rizzo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPJKnc6mV7cT1qpw9B-M96upwYQFbd7kHf3aR4iR8eNV8N_njJo-3oWcDJS2V99iX3aR6w8v-q" alt="Yankees acuerdan pacto multianual con Anthony Rizzo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Rizzo volverá con los Yankees en el 2023. El club informó oficialmente la noche del martes que acordó con el inicialista un pacto de dos temporadas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.albat.com/mlb/MLB-Yankees-logran-firmar-a-uno-de-sus-mejores-peloteros-agentes-libres-20221115-0020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MLB: Yankees logran firmar a uno de sus mejores peloteros ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXaSLKu7VC5ZpftQnRFZSA_K4NIt3Kx2MW94ZLSyeruPuB_cQ0zcKEdFVRsDsQEllf1pNmCJjj" alt="MLB: Yankees logran firmar a uno de sus mejores peloteros ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MLB: Yankees logran firmar a uno de sus mejores peloteros agentes libres ... Anthony Rizzo volverá con los Yankees de Nueva York para la temporada 2023. El club&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}