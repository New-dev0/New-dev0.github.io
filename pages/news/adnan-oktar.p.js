import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Adnan Oktar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Adnan Oktar"/>
        <meta name="description" content="Trending News about Adnan Oktar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Adnan Oktar</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/16/2003296/kapak_125356.jpg" alt="Adnan Oktar"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/yeniden-gorulen-adnan-oktar-organize-suc-orgutu-davasinda-mahkeme-kararini-acikladi-2003296'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Yeniden görülen Adnan Oktar organize suç örgütü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRX_P8rv9vWzAaZBNcbkYFq7VaiU-fOpfbcSTaUw49B41RYLmYjR99WxEc3xbHKyXLf3vjDVV7D" alt="Son Dakika: Yeniden görülen Adnan Oktar organize suç örgütü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika gelişmesi... Adnan Oktar Organize Suç Örgütü&#39;ne yönelik Bölge Adliye Mahkemesi&#39;nin bozma kararının ardından yeniden görülen davada mahkeme&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/gundem/adnan-oktar-silahli-suc-orgutune-yonelik-yeniden-gorulen-davada-oktara-8-bin-658-yil-hapis-cezasi/2739980'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adnan Oktar silahlı suç örgütüne yönelik yeniden görülen davada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT55BFKZKQrc5-zLqRAZkNJ6lhtktLgzC5A77jHMJY5docSsOmZMURs5SKDpHDSb09LwdqVumFW" alt="Adnan Oktar silahlı suç örgütüne yönelik yeniden görülen davada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mahkeme Heyeti Başkanı Mahmut Başbuğ, kararı okumadan önce, İstanbul Bölge Adliye Mahkemesi 1. Ceza Dairesinin kararında, örgüt ve cinsel suçlar üzerinde daha&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/son-dakika-adnan-oktar-hakkinda-karar-verildi-kisisel-suclarindan-891-yil-hapis-cezasi-42171777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Adnan Oktar&#39;a 8 bin 658 yıl hapis cezası</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyACiDhgyjXOYKOfpzhfk-aEv-RsM9JnmJR9MENrDV4LHEiq9NwwlJFTDSPxh4kx6J5EpWcnfi" alt="Son dakika... Adnan Oktar&#39;a 8 bin 658 yıl hapis cezası" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adnan Oktar Suç Örgütüne yönelik hükmün İstinaf Mahkemesi tarafından usulen bozulmasının ardından yeniden görülen davada mahkeme Adnan Oktar ile birlikte 14&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/son-dakika-haberi-adnan-oktar-a-891-yil-hapis-cezasi-3539126'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika haberi: Adnan Oktar&#39;ın cezası açıklandı! 8 bin 658 yıl ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJNpPGXWY4sPWMxaBfqkdCM8ZQ330S84qrwTtRkhxssq4ZCUFQ0ZDDC2W0iGF4daIZweImXo5Z" alt="Son dakika haberi: Adnan Oktar&#39;ın cezası açıklandı! 8 bin 658 yıl ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adnan Oktar suç örgütüne yönelik yeniden görülen davada mahkeme kararını açıkladı. Oktar, kişisel suçlarından 891 yıl hapisle cezalandırıldı.</p></div>
            </div>
        </a>
        </Template></>;
}