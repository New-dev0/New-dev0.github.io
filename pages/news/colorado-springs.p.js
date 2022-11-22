import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Colorado Springs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Colorado Springs"/>
        <meta name="description" content="Trending News about Colorado Springs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Colorado Springs</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/21/gettyimages-1443346539_wide-9be4d2f730ee3fe9c4ffc13e6d5d184cdcbc876b-s1400-c100.jpg" alt="Colorado Springs"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/21/1138131985/what-we-know-colorado-springs-lgbtq-club-shooting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we know so far about the Colorado Springs shooting</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1DTcny94sF9KuR3PfW5KSYhrqHyufFOs2UHOILJe9SPPxyUeof9RmR3eN4uGYGZf2_sdCHZ52" alt="What we know so far about the Colorado Springs shooting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A gunman killed five people and injured 18 others at an LGBTQ club in Colorado Springs, Colo. The district attorney&#39;s office said the investigation is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/21/us/colorado-springs-club-q-shooting-monday/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Police have identified the 5 people killed in Colorado Springs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6DSGxsgaSHRSV7wafpZv63xiY7K-nNDgNfe_u8tQTm2VmaR_e7xk6XQhx2sn3aX74meH_Sgjj" alt="Police have identified the 5 people killed in Colorado Springs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While police haven&#39;t released more details about the motive, the massacre at Club Q -- a longtime safe haven for the local LGBTQ community -- has shattered&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/article/victims-colorado-springs-shooting.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What We Know About the Colorado Springs Shooting Victims</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQanEO6qzEMBrfHlcclh3Gq_9mRAE9wLc3LH8MD5ayUEYrQZPaLR_EsBGGLTqVW9zlN5KoN4Jp7" alt="What We Know About the Colorado Springs Shooting Victims" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Aston was a bartender at Club Q. Kelly Loving was on a weekend trip from Denver.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/nov/21/colorado-springs-shooting-mayor-hate-crime'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Colorado Springs shooting: suspect faces murder and hate crime ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4fWf0rxbSeIuUmZEkwuj9B36rkgeFHskzJXOlYyK-cGxHrZzwK32h1C7gXPGBwaoZgND04M_o" alt="Colorado Springs shooting: suspect faces murder and hate crime ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shooter faces five murder charges and five charges of committing a bias-motivated crime causing bodily injury, records show.</p></div>
            </div>
        </a><a href='https://www.cpr.org/2022/11/20/colorado-springs-shooting-q-club-lgbtq/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live blog: What we know about the Colorado Springs Club Q shooting</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzPOiBU8s_31xgWMjf4ce3v8YWv8jGLj2eiJ5Y35wd3GxQOlc8fUGVPOgnXRNL4VEtg9Sw7NvD" alt="Live blog: What we know about the Colorado Springs Club Q shooting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five people are dead and 25 others are injured following a shooting at a nightclub in Colorado Springs late Saturday night.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/news/nation/2022/11/21/club-q-victims-names-identified-colorado-springs-shooting/10748557002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we know about the Colorado Springs victims: An entertainer, a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5qvwG7u_KwF1GeXzaCXLGU8qAaEc45XZGlyLW_EibQyA7DLNXNgiArq2WRrEQoOQF0XtRI0HN" alt="What we know about the Colorado Springs victims: An entertainer, a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Family and friends began remembering the victims killed this weekend at an LGBTQ nightclub in Colorado Springs. Here&#39;s what we know about the victims:</p></div>
            </div>
        </a>
        </Template></>;
}