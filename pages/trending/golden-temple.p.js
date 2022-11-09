import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Golden Temple</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Golden Temple"/>
        <meta name="description" content="Trending News about Golden Temple" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Golden Temple</h1>
            <Image width={800} height={500} src="https://static.toiimg.com/thumb/msid-95376885,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75/95376885.jpg" alt="Golden Temple"/>
            <h3>Recent News</h3>
            <a href='https://m.timesofindia.com/tv/news/hindi/ankita-bhargava-visits-golden-temple-with-daughter-mehr-to-offer-prayers-see-pics/articleshow/95376731.cms?utm_source=TOIHP_Wap&utm_medium=Referral&utm_campaign=TOI_TV_Widget'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ankita Bhargava visits Golden Temple with daughter Mehr to offer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKBbQYvAq5f85oBaLIeKTJf5wWDagUKkLlpaUVqexQlFeoCgcUpPMdDh_2_q8BF8EmNec5-ZUz" alt="Ankita Bhargava visits Golden Temple with daughter Mehr to offer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kasauti Zindagi Kay fame Ankita Bhargava has been enjoying her motherhood as she spends her time with her little daughter Mehr Patel. The actress stay.</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/india/video-guru-nanak-jayanti-devotees-take-holy-dip-in-sarovar-at-golden-temple-in-amritsar-3000447'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guru Nanak Jayanti: Devotees take holy dip in &#39;Sarovar&#39; at Golden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzODpzQWginZ-pIsObVUJpsJ9LQRxGJ749_002Els0ZJL6sSvM03nPHwVi7xG-VgdC51Gd7N4Y" alt="Guru Nanak Jayanti: Devotees take holy dip in &#39;Sarovar&#39; at Golden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Devotees took a holy dip in &#39;Sarovar&#39; at Golden Temple in Amritsar on the occasion of Guru Nanak Jayanti on November 08. They also offered prayers during&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}