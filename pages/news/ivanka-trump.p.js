import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ivanka Trump</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ivanka Trump"/>
        <meta name="description" content="Trending News about Ivanka Trump" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ivanka Trump</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221116091254-ivanka-trump-0804-file.jpg?c=16x9&q=w_800,c_fill" alt="Ivanka Trump"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/16/politics/ivanka-donald-trump-presidential-campaign-political-involvement/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump says she does not &#39;plan to be involved in politics ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8YOFRvBzxiqoHZ1j_z9bsDllWCPVP7TRHMuerxSn2NItZJK4_nakLJtwbZzp_e5nsVCJJ1KSv" alt="Ivanka Trump says she does not &#39;plan to be involved in politics ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ivanka Trump announced she doesn&#39;t plan to be involved in former President Donald Trump&#39;s 2024 campaign, issuing a statement to CNN minutes after her father&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.com/news/2022/11/ivanka-trump-donald-trump-2024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump Formally Dumps Her Dad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStDEZPvhCTHLSQIPxVAwQ2_Fn20V4ER7gsFPWQQtkVhKrdefmGpcAVSTwlsZ6nrIJ_tNYOLzik" alt="Ivanka Trump Formally Dumps Her Dad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In many ways, Ivanka Trump and Jared Kushner&#39;s tenure in Washington did not pan out as they had hoped, assuming they hadn&#39;t hoped that working for her&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/politics/2022/11/16/donald-trump-ivanka-2024-campaign/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump says she won&#39;t be part of her father&#39;s campaign</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAstXgVJ4lZmBZUrGPGsdfQbrkgIe_k9kVnTNVWsc2knOoyRESkuJzfLL4OF2NIhcRmL-1fXjX" alt="Ivanka Trump says she won&#39;t be part of her father&#39;s campaign" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ivanka Trump, daughter of former president Donald Trump, said she would be stepping away from politics and sitting out her father&#39;s presidential campaign&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/16/ivanka-trump-donald-trump-father-2024-presidential-campaign/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump Bails, Won&#39;t Work on Donald Trump 2024 Presidential ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShSnhwBzL5lfI2n_yMSzeGUjpkpjZ7JBYnZis7-tZLqwakDt56EZ1Wmuvl4LexUrDZ2s1BgaZI" alt="Ivanka Trump Bails, Won&#39;t Work on Donald Trump 2024 Presidential ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump has lost his secret weapon -- a key political ally who some say was the only person who could reason with him -- his daughter.</p></div>
            </div>
        </a><a href='https://www.jta.org/2022/11/16/politics/ivanka-trump-will-not-be-involved-in-donald-trumps-next-presidential-campaign'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump will not be involved in Donald Trump&#39;s next ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReHExZfDPGaDNieXBAZdSlPOXzQ7_ZFXB-D0ValQoER1VtVWsSdGcuzVWp3hWmtihLl57tSBZc" alt="Ivanka Trump will not be involved in Donald Trump&#39;s next ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(JTA) — As Donald Trump announced his third run for president, his daughter Ivanka Trump, who served as a senior adviser in his administration,&nbsp;...</p></div>
            </div>
        </a><a href='https://fortune.com/2022/11/16/not-again-ivanka-trump-steering-clear-donald-2024-presidential-campaign/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Not again: Ivanka Trump is steering clear of her father&#39;s 2024 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo_qMrvyhYMWq_pKPpvptFKzfpbEbGjON2NrVe5MJVXmSLzxbMb3tcTT6scGi9diu_7Dia8cBP" alt="Not again: Ivanka Trump is steering clear of her father&#39;s 2024 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ivanka Trump, the eldest daughter of former President Donald Trump, and her husband, Jared Kushner, played a major role in both of his previous campaigns and&nbsp;...</p></div>
            </div>
        </a><a href='https://kesq.com/news/2022/11/16/ivanka-trump-dice-que-no-planea-involucrarse-en-politica-tras-el-anuncio-de-campana-de-su-padre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump dice que no “planea involucrarse en política” tras el ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ivanka Trump dice que no “planea involucrarse en política” tras el ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alexandra Ferguson. Washington (CNN) — Ivanka Trump anunció este martes que no tiene previsto participar en la campaña del expresidente Donald Trump,&nbsp;...</p></div>
            </div>
        </a><a href='https://confidencialcolombia.com/internacional/ivanka-trump-hija-y-exasesora-del-expresidente-descarta-volver-a-la-politica/2022/11/16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump, hija y exasesora del expresidente, descarta volver a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgu62RYqbnIgpDZ5HYOPIDX-gV78z_M1ecaskxl4R9H2GA26VnpiCWbGXHbiYcxRqnaa3vLmQ2" alt="Ivanka Trump, hija y exasesora del expresidente, descarta volver a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ivanka Trump, hija y exasesora del expresidente estadounidense Donald Trump, ha descartado involucrase de nuevo en la política.</p></div>
            </div>
        </a><a href='https://eltiempolatino.com/2022/11/16/politica/ivanka-trump-despues-del-gran-anuncio-de-su-padre-no-pienso-involucrarme-en-politica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ivanka Trump después del “gran anuncio” de su padre: “No pienso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQl7rMYTfMfrC1xdrJnRCkwaGd2jCJoqziqmSplfeId6_qqY4zluHalRiYg_N528va7Hz1ASYRK" alt="Ivanka Trump después del “gran anuncio” de su padre: “No pienso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La hija del expresidente no se involucró de ningún modo en las actividades de campaña de los candidatos apoyados por su padre en las midterms.</p></div>
            </div>
        </a><a href='https://www.univision.com/noticias/politica/ivanka-trump-campana-donald-trump-2024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“No planeo involucrarme en política”: Ivanka Trump anuncia que no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_5sX-vdUitFYKQ5AxfSCdoU67e8nox0bqBV0iboDxjzEK6s6f9cI_OCyfrqD17QBAXWLE9i8t" alt="“No planeo involucrarme en política”: Ivanka Trump anuncia que no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En un mensaje publicado en su cuenta de Instagram, la hija del exmandatario descartó regresar a la política y señaló que, en esta ocasión,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}