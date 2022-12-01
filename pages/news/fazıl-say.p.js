import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fazıl Say</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fazıl Say"/>
        <meta name="description" content="Trending News about Fazıl Say" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fazıl Say</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/H39WmMg21EeY2RSZg0AyfQ.jpg?width=1080&mode=crop&scale=both" alt="Fazıl Say"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/n-life/magazin/unlu-piyanist-fazil-say-ve-ece-dagistan-bosandi,Qev6ehPsSkm8fxDeQiR8-g'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü piyanist Fazıl Say ve Ece Dağıstan boşandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTO8Cix3CL02EhjTcYQ5ppA8tZTfGQ9AbZ7VCqw3uZLDLfl1d2tDy4fexcCIOEgsYoT9zbGpTfm" alt="Ünlü piyanist Fazıl Say ve Ece Dağıstan boşandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü piyanist Fazıl Say ile Ece Dağıstan boşandı. Say, boşanma duyurusunu sosyal medya hesabından yaptı. Piyanist yaptığı açıklamada Beykoz Adliye binasına&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/yasam/son-dakika-unlu-piyanist-fazil-say-ile-ece-dagistan-bosandi-2007680'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Ünlü piyanist Fazıl Say ile Ece Dağıstan boşandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuIJP-E6yFULBs_YmRKAjyJf5RLA-1G7EcBrtcKAGLpOK6S2lawrs_bN1RQzhVcG76bgCX7KiN" alt="Son dakika... Ünlü piyanist Fazıl Say ile Ece Dağıstan boşandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Say ile Dağıstanlı 3 yıl önce İtalya&#39;nın Milano kentinde nikâh masasına oturmuştu. Boşanma haberini Instagram hesabından duyuran Say, paylaşımında şu ifadeleri&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/kelebek/hayat/fazil-say-ve-ece-dagistan-bosandi-adliyeye-el-ele-geldik-el-ele-ciktik-42179840'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fazıl Say ve Ece Dağıstan boşandı! Adliyeye el ele geldik, el ele çıktık!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPdPR2S-W57R03UzNRmDSYxkQ0N3W-g-To99p4MevoDRtkRXEUhMAyKOj4aL5s-D1-viYFsyOW" alt="Fazıl Say ve Ece Dağıstan boşandı! Adliyeye el ele geldik, el ele çıktık!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü piyanist Fazıl Say, üç yıl önce nikâh masasına oturduğu eşi Ece Dağıstan ile boşandıklarını sosyal medya hesabından paylaştığı mesajla duyurdu.</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/fazil-say-ile-evliliklerini-noktalayan-ece-dagistan-bize-boyle-bir-son-yazmam-lazimdi-cok-guzeldi-hepsi-hikayeydi,1075931'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fazıl Say ile evliliklerini noktalayan Ece Dağıstan: Bize böyle bir son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSLUkDNtbZXy2UN95_JOeFNfv0vELBKjzfv6Rokch-xFVBRE_z22Ha4DvZSNmfHCgZWT_C29Ei" alt="Fazıl Say ile evliliklerini noktalayan Ece Dağıstan: Bize böyle bir son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünyaca ünlü piyanist Fazıl Say, piyanist eşi Ece Dağıstan 2019 yılında İtalya&#39;nın Milano kentinde nikâh masasına oturmuştu. Say, bugün Dağıstan ile&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/ece-dagistan-kimdir-fazil-say-ile-evliligini-sonlandiran-ece-dagistan-hakkinda-bilgiler-1111007'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ece Dağıstan Kimdir? Fazıl Say ile Evliliğini Sonlandıran Ece ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSorM1Fd1u6137a80VAV1-Qix9-qjkGrTv18u6nEuDl-YCR_KazZ4ynfJMV9yj-pfuOGEycNbjZ" alt="Ece Dağıstan Kimdir? Fazıl Say ile Evliliğini Sonlandıran Ece ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fazıl Say&#39;ın boşanmasıyla ilgili yaptığı paylaşım ise herkesi duygulandırdı. &#39;Beykoz Adliye binasına el ele girdik, el ele çıktık Ece ile.&#39; Peki Ece Dağıstan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/magazin/2022/11/30/3-yil-once-evlenen-fazil-say-ve-ece-dagistan-bosandi-ece-dagistan-ile-adliyeye-el-ele-gelen-fazil-saydan-ilk-aciklama'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 yıl önce evlenen Fazıl Say ve Ece Dağıstan boşandı! Ece Dağıstan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKkSLwlDmHopoBlkt4DIDnB0YpKcJt5uVmPBU-SFvrpuSLLvKNhdtU-_5ULa3jhJfCWrFlIOQRsQ" alt="3 yıl önce evlenen Fazıl Say ve Ece Dağıstan boşandı! Ece Dağıstan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İtalya&#39;nın Milano kentinde nikâh masasına oturan çiftten Fazıl Say, “Beykoz Adliye binasına el ele girdik, el ele çıktık Ece ile” diyerek detayları anlattı.</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/fazil-say-bosandiklarini-duyurdu-ece-hep-mutlu-olsun-haber-1591558'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fazıl Say boşandıklarını duyurdu: Ece hep mutlu olsun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDR7x0ZVDq8S2TmNDtqquwEkes9DcxvByQDHNu1296SJb4IJcgWh2XpRCeaFG-ewdmP1FJfmoI" alt="Fazıl Say boşandıklarını duyurdu: Ece hep mutlu olsun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Piyanist Fazıl Say üç yıl önce nikah masasına oturduğu sanatçı Ece Dağıstan ile boşandı.</p></div>
            </div>
        </a>
        </Template></>;
}