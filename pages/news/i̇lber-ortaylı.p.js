import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İlber Ortaylı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İlber Ortaylı"/>
        <meta name="description" content="Trending News about İlber Ortaylı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İlber Ortaylı</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/24/2005715/kapak_121913.jpg" alt="İlber Ortaylı"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/unlu-tarihci-prof-dr-ilber-ortayli-covid-19a-yakalandi-2005715'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü tarihçi Prof. Dr. İlber Ortaylı Covid-19&#39;a yakalandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqMjfH4Yaronw_1vYXTZBePPTQQ6oDC9oCgZloDxqFtk2VeM1lp98wp5Ulm1wdYwGnMVZuQ6jg" alt="Ünlü tarihçi Prof. Dr. İlber Ortaylı Covid-19&#39;a yakalandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Osmaniye Belediyesi tarafından düzenlenen kitap fuarına katılacak olan Prof. Dr. İlber Ortaylı&#39;nın Covid-19 testi pozitif çıktı.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/son-dakika-haberi-prof-dr-ilber-ortayli-koronaviruse-yakalandi-3541586'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika haberi Prof. Dr. İlber Ortaylı koronavirüse yakalandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgGiIZUPLxuwqxPUpiilacA9bh49w5p2_qGt1jGwYlFpCD3bJ_s2vFNOy4iPo3OjzKIFcB5aZE" alt="Son dakika haberi Prof. Dr. İlber Ortaylı koronavirüse yakalandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prof. Dr. İlber Ortaylı&#39;nın dün yapılan Covid-19 testinin pozitif çıktığı belirtildi.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/koronavirus/prof-dr-ilber-ortayli-koronaviruse-yakalandi-3891817'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prof. Dr. İlber Ortaylı koronavirüse yakalandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuwtXx0CTTUw9a5oDO7vOU4uO1UOKT4yjSNUGv52ozotkkzOLrB4KM1T18Abw7vSyybBFZAAN9" alt="Prof. Dr. İlber Ortaylı koronavirüse yakalandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Osmaniye Belediyesi 6. Kitap Fuarının onur konuğu Prof. Dr. İlber Ortaylı&#39;nın dün yapılan Covid-19 testinin pozitif çıkması nedeniyle Osmaniye programı 1&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/unlu-tarihci-ilber-ortayli-covid-19-a-yakalandi-1109461'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü Tarihçi İlber Ortaylı Covid-19&#39;a Yakalandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVZGRXjnEafYOP-sVZ-LtvuSsTR2DYyBj655gtMg7pQPVVhrzidpeIdqItB4uti3LB2bXni_2U" alt="Ünlü Tarihçi İlber Ortaylı Covid-19&#39;a Yakalandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prof. Dr. İlber Ortaylı&#39;nın dün yapılan Covid-19 testinin pozitif çıktığı öğrenildi.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/gundem/ilber-ortaylinin-koronavirus-testi-pozitif-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İlber Ortaylının koronavirüs testi pozitif çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIrEzz-z5ZcsXK6vmLJvb-_WtZXtDtm3PDIF3zQXfOnYtzlD9HCUS8yUfwJS6TiM-8x_XCjwIp" alt="İlber Ortaylının koronavirüs testi pozitif çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konu hakkında, Osmaniye Belediye Başkanı Kadir Kara bir duyuru yaptı. &quot;Rahatsızlığı nedeniyle 1 hafta ertelemek zorunda kaldık&quot;. Kadir Kara, “Hocamız İlber&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haber7.com/biyografi/haber/3280534-ilber-ortayli-kimdir-ve-kac-yasindadir-nereli-ilber-ortayli-kitaplari'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İlber Ortaylı kimdir ve kaç yaşındadır? Nereli? İlber Ortaylı kitapları</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3eT9mlolS--9u5v044j8fWGFORjLchno3mph5cDqWLHj4GPIB2rEsDn5Ab4201KFCfsCzMZ9r" alt="İlber Ortaylı kimdir ve kaç yaşındadır? Nereli? İlber Ortaylı kitapları" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haber 7 - Koronavirüs teşhisi konulduktan sonra gündem olan İlber Ortaylı&#39;nın hayatı ve kariyeri merak edildi. Peki İlbet Ortaylı nerelidir?</p></div>
            </div>
        </a><a href='https://haber.sol.org.tr/haber/ilber-ortayli-covid-19a-yakalandi-356638'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İlber Ortaylı Covid-19&#39;a yakalandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYB9ssFurOMxXa9yjmr-Eep6BE5cUYTPmRLRZTQ4q0BGCtvqAL7SxeMOKAy4n945NuZMqHyGfb" alt="İlber Ortaylı Covid-19&#39;a yakalandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Osmaniye Belediyesi 6. Kitap Fuarı&#39;nın &quot;Onur Konuğu&quot; Prof. Dr. İlber Ortaylı&#39;nın dün yapılan Covid-19 testinin pozitif çıkması nedeniyle programının bir hafta&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}