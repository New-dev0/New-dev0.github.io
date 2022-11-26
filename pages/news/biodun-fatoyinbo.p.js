import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Biodun Fatoyinbo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Biodun Fatoyinbo"/>
        <meta name="description" content="Trending News about Biodun Fatoyinbo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Biodun Fatoyinbo</h1>
            <Image width={800} height={500} src="https://www.withinnigeria.com/entertainment/wp-content/uploads/sites/6/2022/11/ifeoluwaunusual/2022/11/25/64C72640-AA14-4FB6-9747-536C43D23AA4.jpeg" alt="Biodun Fatoyinbo"/>
            <h3>Recent News</h3>
            <a href='https://www.withinnigeria.com/entertainment/2022/11/25/i-hope-pst-b-is-fine-netizens-express-serious-worry-over-recent-photos-of-pastor-biodun-fatoyinbo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I hope Pst B is fine – Netizens express serious worry over recent ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQd2VLv9N1pTNExX0AigOcPg4vqd5VVqH-VE5MhvucIiVgY2JVHwdnhmpkfXWadKE57fHJ5Y62O" alt="I hope Pst B is fine – Netizens express serious worry over recent ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hours ago, Commonwealth of Zion Assembly (COZA) shared new photos of its head Pastor Biodun Fatoyinbo, his wife Modele, and other members of the church who&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kemifilani.ng/entertainment/new-photos-of-coza-pastor-biodun-fatoyinbo-spark-worry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New photos of COZA Pastor Biodun Fatoyinbo spark worry - Kemi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKN9EZoSqPzZ2m1_MB64IegHvApgekjF94QdISL7kVUJsYRaoYx5GohcgJe9vmyKY96ETLumQ4" alt="New photos of COZA Pastor Biodun Fatoyinbo spark worry - Kemi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many fans of Pastor Biodun Fatoyinbo, a lead pastor of Commonwealth of Zion Assembly popularly known as COZA have been thrown into a state of worry.</p></div>
            </div>
        </a><a href='https://www.newsmakerslive.org/new-photos-of-coza-founder-pastor-biodun-fatoyinbo-emerge-after-rumoured-sickness/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Photos of COZA Founder, Pastor Biodun Fatoyinbo, Emerge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSB44V4xrabxM3t1fXRBfqd666oZU1-vEOdPRrMBj-Ud7g2JfiN4cBi-hocjKnX3-TozRpmQDEc" alt="New Photos of COZA Founder, Pastor Biodun Fatoyinbo, Emerge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Femi Ashekun/. Photos of the founder of the Commonwealth of Zion Assembly, Pastor Biodun Fatoyinbo, have been trending following his rumoured sickness.</p></div>
            </div>
        </a><a href='https://thestreetjournal.org/shocking-new-photos-of-coza-founder-biodun-fatoyinbo-emerges-7-months-after-surviving-stroke/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shocking new photos of COZA founder, Biodun Fatoyinbo emerges ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRu_T8L8Aecn-VmAaVoYZ_a28U0L7ajKJ6RVI7zg48oa3l_V7O9Hv0tlnGSBWpSi81sIxRcLAMh" alt="Shocking new photos of COZA founder, Biodun Fatoyinbo emerges ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Founder Commonwealth Of Zion Assembly, COZA, Pastor Biodun Fatoyinbo who reportedly suffered a stroke a few months ago, has overcome the.</p></div>
            </div>
        </a><a href='https://www.gistmania.com/talk/topic,549566.0.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIV/AIDS? Pastor Biodun Fatoyinbo Of COZA Shows Massive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGvoIQQjuaUb747dUvErTofINILKE7Kgju2l2Amdfooc8eG7Bx8vpJD4AxvT1C9jL-G_XOTAfv" alt="HIV/AIDS? Pastor Biodun Fatoyinbo Of COZA Shows Massive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rev. Biodun Fatoyinbo is a Nigerian pastor and author. He is the lead pastor of Commonwealth of Zion Assembly popularly known as COZA.</p></div>
            </div>
        </a>
        </Template></>;
}