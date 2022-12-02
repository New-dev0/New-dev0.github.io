import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kaymaçina tatlısı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kaymaçina tatlısı"/>
        <meta name="description" content="Trending News about Kaymaçina tatlısı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kaymaçina tatlısı</h1>
            <Image width={800} height={500} src="https://i2.milimaj.com/i/milliyet/75/0x0/6388f5b486b24a47a4ef28ed.jpg" alt="Kaymaçina tatlısı"/>
            <h3>Recent News</h3>
            <a href='https://www.milliyet.com.tr/pembenar/kaymacina-tatlisi-nasil-yapilir-kaymacina-tatlisi-malzemeleri-ve-tarifi-6866136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaymaçina tatlısı nasıl yapılır? Kaymaçina tatlısı malzemeleri ve tarifi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-a7bJ7BQ2jbdOi7BjFfY9I5PkaUCmrXP9M4kppCJS6ehxvIRGZCSs3CrJ5_EX-2edF_2jQO8g" alt="Kaymaçina tatlısı nasıl yapılır? Kaymaçina tatlısı malzemeleri ve tarifi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KAYMAÇİNA TATLISI NASIL YAPILIR? Kaymaçina tatlısı için ilk olarak yumurta krema gibi katı bir kıvama gelene kadar çırpılır. Ardından derin bir kasede süt ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/mor-papatya/uskup-mutfaginin-en-gozde-tatlisi-kaymacina-nasil-yapilir/haber-1323689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp mutfağının en gözde tatlısı! Kaymaçina nasıl yapılır&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKmdJiQkAAZBfOcd4CjreROFl60SdWOqa9eRjzBxPwcFwzXAChknarmPhONtQ1chKa14CFqIXR" alt="Üsküp mutfağının en gözde tatlısı! Kaymaçina nasıl yapılır&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Balkanların en gözde ülkesi Makedonya&#39;nın başkenti Üsküp&#39;ün en meşhur lezzetlerinden biri olan kaymaçina tatlısını sizler için araştırdık.</p></div>
            </div>
        </a><a href='https://www.mynet.com/lezzetine-doyum-olmuyor-uskup-usulu-kaymacina-tarifi-tam-kivaminda-kaymacina-nasil-yapilir-1216958-myyemek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lezzetine doyum olmuyor! Üsküp usulü Kaymaçina tarifi! Tam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlIXOofkwdXd4DFWRBltdDJEF7udTzc4p79YPCcCnDVSFTLh0RmY4_jkGvz5TssQw47XT76lJb" alt="Lezzetine doyum olmuyor! Üsküp usulü Kaymaçina tarifi! Tam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hamur işlerine ve tatlılara oldukça önem veren Balkan lezzetleri sevilerek yeniyor. Balkanların incisi olarak görülen kaymaçina tatlısının 3 malzeme ile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeturk.com/kadin-aile/kaymacina-nasil-yapilir-icinde-neler-var-kaymacina-tarifi-uskup-tatlisi-tarifi/haber-1755716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaymaçina nasıl yapılır, içinde neler var? Kaymaçina tarifi (Üsküp ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9qtdJSvP2bw72OKPuqdKcFFRcZ0tXebJXhvJEh0NKwH2EK4gXp14kO1c5kbMD0aFFiHiWz8D_" alt="Kaymaçina nasıl yapılır, içinde neler var? Kaymaçina tarifi (Üsküp ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaymaçina nasıl yapılır, içinde neler var? Kaymaçina tarifini sizler için derledik. Krem karamele benzeyen fakat üsküp mutfağına ait olan kaymaçina,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}