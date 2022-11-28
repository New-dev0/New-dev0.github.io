import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atiba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atiba"/>
        <meta name="description" content="Trending News about Atiba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atiba</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/482000/483499.jpg" alt="Atiba"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/atiba-hutchinson-dalya-dedi-266014.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba Hutchinson &quot;dalya&quot; dedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQon6KbgJbKGF2uHEZi7p1AwXXAMg25TqNxeuHcsce3NX5O_2UJZMRR1sn8w0rhng7AHeDu4FVG" alt="Atiba Hutchinson &quot;dalya&quot; dedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş&#39;ın Kanadalı futbolcusu Atiba Hutchinson, ülkesinin FIFA Dünya Kupası F Grubu&#39;nda Hırvatistan ile karşılaştığı mücadelede milli formayla 100. kez&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/atiba-kanada-tarihine-gecti-63838a1866db228e5cb003c8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba, Kanada tarihine geçti!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYUMSAx1mwAwEoAZ0CsaV5AKunO3VmE_hEeNqCo1_eUWn2gq4TMakMv3tavHqw3KN1zF9ApY_P" alt="Atiba, Kanada tarihine geçti!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanada&#39;nın kaptanı Atiba Hutchinson, bu maçla birlikte bir ilke imza attı. &quot;Dalya&quot; ve Kanada rekoru. 39 yaşındaki oyuncu, Hırvatistan maçıyla birlikte Kanada&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/besiktasli-futbolcu-atiba-hutchinsondan-taraftara-mesaj-2006715'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaşlı futbolcu Atiba Hutchinson&#39;dan taraftara mesaj</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTidwrB6NMzhlEuzhFGRgXfv2cYqIEK8_xCOAyaFBSFxUUxkJqpDRX0BWtR24QbPLHPalGcy5CT" alt="Beşiktaşlı futbolcu Atiba Hutchinson&#39;dan taraftara mesaj" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanada Milli Futbol Takımı ile 2022 Katar Dünya Kupası&#39;nda mücadele eden Beşiktaşlı futbolcu Atiba Hutchinson, Hırvatistan mağlubiyetinin ardından&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/atiba-hutchinson-kanada-tarihine-gecti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba Hutchinson Kanada tarihine geçti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRM_6iOuGoOg1j6RdA6gmoiwMK1XZxQ7bHu-CrJrH5etkDiZjEz5Pdk47-g9-hrxHrBPQmSYQP9" alt="Atiba Hutchinson Kanada tarihine geçti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 Dünya Kupası&#39;nda F Grubu&#39;nda yer alan Hırvatistan, Kanada&#39;yı 4-1 mağlup etti. Atiba Hutchinson, Kanada formasıyla 100 maça çıkan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/atiba-hutchinson-hirvatistan-kanada-macinda-tarihe-gecti-en-hizli-gol-daviesten-geldi-42178174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba Hutchinson, Hırvatistan-Kanada maçında tarihe geçti! En hızlı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRq5z7YkN437FxFDHXB-Dcsd-TKmGWMWPiWxSyctBFrsz1XJHP1MZGoixBykAG6Gp80Cbf9dK5T" alt="Atiba Hutchinson, Hırvatistan-Kanada maçında tarihe geçti! En hızlı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş&#39;ın tecrübeli orta saha oyuncusu Atiba Hutchinson, Kanada Milli Takımı&#39;nın tarihine geçti.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/atiba-hutchinson-kanada-milli-takimi-ile-100-macina-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba Hutchinson, Kanada Milli Takımı ile 100. maçına çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8OZj9grvorMiOMfVqHXvGKuMUedua-1eee-ZExc9NvsapZUW8pnm8cglhH2qPGvD8ZbIie-xn" alt="Atiba Hutchinson, Kanada Milli Takımı ile 100. maçına çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliğinde düzenlenen 2022 Dünya Kupası&#39;nda F Grubu&#39;nun ikinci maçları başlarken John Herdman&#39;ın ekibi Kanada ile Zlatko Dalic&#39;in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/besiktasli-atiba-hutchinson-tarihe-gecti-601957h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atiba tarihe geçti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5bQmR6h8gusp93VAkzbpjxRrRaqoyPFIaWT2yaAwRuE6Hv5JlrZ6Yro633zhqf1ZKpPy2UTnF" alt="Atiba tarihe geçti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen FIFA Dünya Kupası 2022&#39;de Hırvatistan ile Kanada karşı karşıya geldi. Beşiktaş&#39;ta forma giyen Atiba Hutchinson, Kanada Milli Takımı ile 100.</p></div>
            </div>
        </a>
        </Template></>;
}