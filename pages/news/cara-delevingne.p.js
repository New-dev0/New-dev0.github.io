import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cara Delevingne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cara Delevingne"/>
        <meta name="description" content="Trending News about Cara Delevingne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cara Delevingne</h1>
            <Image width={800} height={500} src="https://image.stern.de/32953332/t/B-/v7/w1440/r1.7778/-/cara-delevingne.jpg" alt="Cara Delevingne"/>
            <h3>Recent News</h3>
            <a href='https://www.stern.de/lifestyle/leute/cara-delevingne-spendet-ihren-orgasmus-der-wissenschaft-32953326.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cara Delevingne spendet ihren Orgasmus der Wissenschaft</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBI9XO4xjnbZyY__i_VZL1rvDZjjwtIoLaJjXjISProwPAIRkl6Y_rk_LiWDgyRVWBrCjn0bKZ" alt="Cara Delevingne spendet ihren Orgasmus der Wissenschaft" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cara Delevingne masturbierte im Rahmen einer Studie und spendete ihren Orgasmus der Wissenschaft. Das Ganze wurde filmisch für ihre Dokumentation begleitet.</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/fuer-sex-doku-cara-delevingne-spendet-ihren-orgasmus-der-wissenschaft-5018299.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Für Sex-Doku: Cara Delevingne &quot;spendet&quot; ihren Orgasmus der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSydjpmRWXQ413cBQqPjb6WOgidBPBzsI6xhpgw47dfflwKhVXemLxJnz4IZK8HMeISUsn3VkgC" alt="Für Sex-Doku: Cara Delevingne &quot;spendet&quot; ihren Orgasmus der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Blut spenden? Kann ja jeder! Cara Delevigne hat sich was deutlich Ausgefalleneres einfallen lassen.</p></div>
            </div>
        </a><a href='https://www.promipool.de/stars/cara-delevingne-sex-botschafterin-das-macht-sie-jetzt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cara Delevingne Sex-Botschafterin: Das macht sie jetzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQM__65dAwS3OagVMwzZxvYpQeoUjgREQCUyAZzUv0MwMdRCf7Ateod7mL9WBtbqlm1FPAY8s9F" alt="Cara Delevingne Sex-Botschafterin: Das macht sie jetzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cara Delevingne ist nicht nur Model, sondern neuerdings auch Sex-Botschafterin. In ihrer neuen Doku beleuchtet die Britin das Thema Sexualität genauer.</p></div>
            </div>
        </a>
        </Template></>;
}