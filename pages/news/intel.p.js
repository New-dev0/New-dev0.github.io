import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Intel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Intel"/>
        <meta name="description" content="Trending News about Intel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Intel</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/0008b58e-1600.jpg" alt="Intel"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/business/2022/1201/1339503-intel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel workers in Leixlip offered unpaid time off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHsjMv5uXM1dEKIqeaFxqs8SkevKtT5fqwHOarEEXwpGucsH8-JsRZ6Vybt7lR01-MgbMi92bH" alt="Intel workers in Leixlip offered unpaid time off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Intel has offered voluntary unpaid time off to a large portion of its Irish workforce in a bid to cut costs.</p></div>
            </div>
        </a><a href='https://www.ft.com/content/e58714b0-709f-424b-878d-4b32f6f1996f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel staff in Ireland offered three months unpaid leave</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5bwCXEMdld3jxKLG02AVPwHvI7258keH4gmI10X14iwAPcUQcSMEURx8rASKX7kuV3ya-Iska" alt="Intel staff in Ireland offered three months unpaid leave" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US chipmaker aims to slash costs by $3bn next year amid a sharp industry downturn.</p></div>
            </div>
        </a><a href='https://www.theregister.com/2022/12/02/intel_ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel offers Irish staff a three-month break from being paid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzcG0bwcCZJvFrFcKXfCVWkLZ6C9CC2JStbOBV_DHqULU7DSn7gE_QwkQN4ueQstKiQyZszkOc" alt="Intel offers Irish staff a three-month break from being paid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chipmaker Intel is offering staff in Ireland the opportunity to take three months&#39; leave from their jobs, with the catch being that it is unpaid.</p></div>
            </div>
        </a><a href='https://www.newstalk.com/news/intel-can-have-expansion-and-cutbacks-at-the-same-time-murphy-1407908'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel &#39;can have expansion and cutbacks at the same time&#39; - Murphy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtDYUROoodbWWY0JAiK87J7sqlUaEky06WvTE1xZZ11meIkXMqv5x-WZR8ZA8D-8zG_atZ6B50" alt="Intel &#39;can have expansion and cutbacks at the same time&#39; - Murphy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voluntary unpaid time off has been offered to Intel staff in Leixlip as the company tries to cut costs by up to US$10 billion (€9.54bn) globally.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/business/intel-staff-in-kildare-told-to-consider-taking-unpaid-leave-1400273.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel staff in Kildare told to consider taking unpaid leave</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ20dh6tEzbgtcRng7z5G3a_JC0XtUOCEsJe1_GMk1gOIs2K786-q7YS_jlYnog31ZaVPwUuD9j" alt="Intel staff in Kildare told to consider taking unpaid leave" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>About 4,500 of its Irish workforce are based at its Leixlip plant in Co Kildare, although it remains unclear how many will be required to take the temporary&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/business/2022/12/02/intel-may-seek-up-to-100-redundancies-and-unpaid-leave-scheme/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel may seek up to 100 redundancies and unpaid leave scheme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQB23nytZjax-U_hHQi7kZ2qnYL8H4tjNV_gvxRpKVDzA9v7thaYrILc65kgtDwQKHzzf8lcSzw" alt="Intel may seek up to 100 redundancies and unpaid leave scheme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The job losses would be separate to a voluntary, unpaid scheme to allow workers in Intel to take up to three months off work before returning to their position,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oregonlive.com/silicon-forest/2022/12/intel-cutting-costs-offers-unpaid-leave-to-factory-workers-worldwide.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Intel, cutting costs, offers unpaid leave to factory workers worldwide</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFOGyl-kvNS2Z0gueyDPrH501y_-KkvSquSmN7PxgLoopz-HxMMSTzK7s2XnCERu85Ep_09OMw" alt="Intel, cutting costs, offers unpaid leave to factory workers worldwide" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The chipmaker hopes to save $3 billion next year through layoffs and other cost cuts.</p></div>
            </div>
        </a>
        </Template></>;
}