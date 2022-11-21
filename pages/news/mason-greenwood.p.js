import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mason Greenwood</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mason Greenwood"/>
        <meta name="description" content="Trending News about Mason Greenwood" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mason Greenwood</h1>
            <Image width={800} height={500} src="https://www.insidesport.in/wp-content/uploads/2022/11/skysports-mason-greenwood-manchester_5934157-1.jpg?w=768" alt="Mason Greenwood"/>
            <h3>Recent News</h3>
            <a href='https://www.insidesport.in/mason-greenwood-trial-manchester-united-star-to-appear-in-court-for-attempted-rape-charge-on-monday-follow-live-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mason Greenwood Trial: Manchester United star to appear in court ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpgwlb_3neQ2ZdPffmFekADE3GUtZUvGFSoQHt67_NPLWm1wFqGsOzaWS9f5_Sls0dohYIuPro" alt="Mason Greenwood Trial: Manchester United star to appear in court ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mason Greenwood Trial -Mason Greenwood Rape Charge: Manchester United footballer Mason Greenwood will appear in court on Monday for a preliminary hearing on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/soccer/premier-league/manchester-uniteds-mason-greenwood-to-appear-in-court-on-attempted-rape-charge-65513da8-878f-4440-9134-b55a1a3263a2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United&#39;s Mason Greenwood to appear in court on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTow1hhFHVb-iBHPsQcfBnoKne2ekGfwfZRpQkGK_CF2OKSp3R7GFbRzX7QpbHWfrxEB4iy8ta1" alt="Manchester United&#39;s Mason Greenwood to appear in court on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mason Greenwood will appear in court on Monday for a preliminary hearing on charges of attempted rape, controlling and coercive behaviour, and assault.</p></div>
            </div>
        </a><a href='https://www.besoccer.com/new/greenwood-will-return-to-court-on-monday-to-testify-1204418'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greenwood will return to court on Monday to testify</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCV94noz6HgRZgHu9NwT36EBlryqPZvo7knTgg59_pauyUZ9ckT43pePFdZES-tBS6jIyFNXFn" alt="Greenwood will return to court on Monday to testify" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United&#39;s Mason Greenwood will return to court on Monday on charges of attempted rape and assault. The young striker is now completely sidelined&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}