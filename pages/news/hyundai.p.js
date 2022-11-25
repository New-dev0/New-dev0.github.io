import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hyundai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hyundai"/>
        <meta name="description" content="Trending News about Hyundai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hyundai</h1>
            <Image width={800} height={500} src="https://i.dunya.com/2/1280/720/storage/files/images/2022/11/24/hyundaisbirligi-uvfI_cover.jpg" alt="Hyundai"/>
            <h3>Recent News</h3>
            <a href='https://www.dunya.com/sirketler/hyundai-ve-giorgetto-giugiaro-pony-coupe-konsepti-icin-is-birligi-yapiyor-haberi-674973'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hyundai ve Giorgetto Giugiaro, Pony Coupe konsepti için iş birliği ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ89_hP73U_-vjIA01nfq6N1bqQBjZbNuMSZdK7CtvwOblDcAAe_PIC73bX2-tAsH4g-amMHow2" alt="Hyundai ve Giorgetto Giugiaro, Pony Coupe konsepti için iş birliği ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hyundai, 1974 yılında Giorgetto Giugiaro tarafından tasarlanan etkileyici Pony Coupe konseptini yeniden inşa etmek için İtalyan...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/sirkethaberleri/sirketler/skytech-ve-hyundai-televizyon-grubunda-is-birligine-imza-atti/677028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skytech ve Hyundai televizyon grubunda iş birliğine imza attı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRv-cUbzm0e-FfbJrJPewlQgh5XBz4Kcp1RuRPTcZL1i8w5Cwse_giQylLaKWP2rs3-2c5fTYao" alt="Skytech ve Hyundai televizyon grubunda iş birliğine imza attı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünsal Group Yönetim Kurulu Başkanı Şinasi Ünsal, &quot;Skytech, Hyundai iş birliği ile hem grup cirosu içindeki payını ve konumunu hem de Türkiye üretim ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diyadinnet.com/hyundai-ve-tasarimci-giorgetto-giugiaro-dan-pony-coupe-konsepti-icin-is-birligi-h33929/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hyundai ve Tasarımcı Giorgetto Giugiaro&#39;dan, Pony Coupe konsepti ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4PF1cwGA3eR5I4fmHBTl_uq0tSlJUyC60Euw9Y-fPe-Aelr3e5xyViry427mgJc1iuooGvyec" alt="Hyundai ve Tasarımcı Giorgetto Giugiaro&#39;dan, Pony Coupe konsepti ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İSTANBUL - Hyundai, 1974&#39;te Giorgetto Giugiaro tarafından tasarlanan Pony Coupe konseptini yeniden inşa etmek için İtalyan tasarım firması GFG Style ile iş&nbsp;...</p></div>
            </div>
        </a><a href='https://www.webtekno.com/hyunda-televizyonlar-turkiye-uretilecek-h130020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hyundai Televizyonlar Artık Türkiye&#39;de Üretilecek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTb7ADHxYPXr41SCpPjltii_cVHMMDSYVwpQYZ7Aj7dlUqcUlIgjFIZM6x8CBLoanh0x4y7inu5" alt="Hyundai Televizyonlar Artık Türkiye&#39;de Üretilecek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türk televizyon üreticisi Skytech ve Hyundai&#39;nin televizyon grubu, önemli bir iş birliğine imza attı.</p></div>
            </div>
        </a>
        </Template></>;
}