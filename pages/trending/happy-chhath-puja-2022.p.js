import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Happy Chhath Puja 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Happy Chhath Puja 2022"/>
        <meta name="description" content="Trending News about Happy Chhath Puja 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Happy Chhath Puja 2022</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202210/chhath_pooja_22-sixteen_nine.jpg" alt="Happy Chhath Puja 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.aajtak.in/india/news/photo/chhath-pooja-2022-wishes-in-hindi-whatsapp-messages-quotes-images-lbs-1562784-2022-10-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chhath Puja Wishes: जय छठी मैया! इस साल अपनों को खास अंदाज में दें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRflOC7nFbLFvs_be3cR1pl_fPF1xC1wOY5UEEvC2W84EQMHTw-wauxGIc54B7ENoa12vWFjgeE" alt="Chhath Puja Wishes: जय छठी मैया! इस साल अपनों को खास अंदाज में दें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chhath Pooja Wishes: भारत में छठ पूजा के त्योहार को बड़ी धूम-धाम से मनाया जाता है.</p></div>
            </div>
        </a>
        </Template></>;
}