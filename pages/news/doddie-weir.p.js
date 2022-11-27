import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doddie Weir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doddie Weir"/>
        <meta name="description" content="Trending News about Doddie Weir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doddie Weir</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/00115497-1600.jpg" alt="Doddie Weir"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/sport/rugby/2022/1126/1338490-scottish-legend-doddie-weir-dies-age-52/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland legend Doddie Weir dies aged 52</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFfjh__nA4nZPouxtW12NV1R8YppXnGQDSPX5D5o5UOtMIOUrm6A1yMahTor-ppYYoPx0FrvoZ" alt="Scotland legend Doddie Weir dies aged 52" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doddie Weir has died at the age of 52, the Scottish Rugby Union has announced. Weir was diagnosed with Motor Neurone Disease in December 2016.</p></div>
            </div>
        </a><a href='https://www.skysports.com/rugby-union/news/12321/12756274/doddie-weir-rob-burrow-hails-mnd-hero-as-tributes-pour-in-for-warrior-scotland-rugby-legend'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir: Rob Burrow hails &#39;MND hero&#39; as tributes pour in for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLePQ42odN1a7knsA2olN1NYJe09XA_5RUyer4uML2GwGovi83TrBW-RHz3ECy2OwDoUXa3Uoo" alt="Doddie Weir: Rob Burrow hails &#39;MND hero&#39; as tributes pour in for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fellow motor neurone disease sufferer and campaigner Rob Burrow paid tribute to an inspirational &quot;warrior&quot; Doddie Weir following his death at the age of 52.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/sport/rugby/arid-41015744.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir, former Scotland and Lions second-row, dies aged 52</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKor12LIXg-JgjSWsXgCRVzLJZ6gvSZlH_dPfAtDADCZjwtfVjwCawBb7rlUTNpPLYOK1i8zHY" alt="Doddie Weir, former Scotland and Lions second-row, dies aged 52" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weir was diagnosed with motor neurone disease in 2016, and for the past several years had worked to raise awareness of the condition, and to generate research&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-scotland-63769039'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doddie Weir: Tributes paid to rugby hero hailed &#39;a force of nature&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8DnC1rxdjvVOVdMBhLv3B_qVtK3Zke7qqR7iBdlEIOHvSWQdoOmC-AswOI_saxt5297e3bOnZ" alt="Doddie Weir: Tributes paid to rugby hero hailed &#39;a force of nature&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ex-Scotland rugby international died six years after being diagnosed with motor neurone disease.</p></div>
            </div>
        </a><a href='https://www.independent.ie/sport/rugby/scotland-rugby-legend-doddie-weir-52-dies-after-motor-neurone-disease-fight-42175944.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland rugby legend Doddie Weir (52) dies after Motor Neurone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYDd2-EfXdOFYPLmxM6bNCAbZ7ep9Fvrvj4e3enCznbYc9a2fSuxtieEXaMkGBKPDVuGmNE7vK" alt="Scotland rugby legend Doddie Weir (52) dies after Motor Neurone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doddie Weir was dealt the cruellest of hands as he was forced to watch his body fail bit by bit before his very eyes.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/26/sport/doddie-weir-rugby-union-obituary-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scottish rugby favorite Doddie Weir dead at 52</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPjgmWfA3Gg8z04Fll-ovHdIYdCLIOzCRo2gX9I0i1U6uw53cBKBfrwl9G03ZSpzLc_lbEyrnv" alt="Scottish rugby favorite Doddie Weir dead at 52" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rugby great Doddie Weir has died at age 52, according to a statement from the Weir family that was released through the Scottish Rugby Union.</p></div>
            </div>
        </a>
        </Template></>;
}