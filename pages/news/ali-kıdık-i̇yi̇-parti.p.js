import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ali Kıdık İYİ Parti</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ali Kıdık İYİ Parti"/>
        <meta name="description" content="Trending News about Ali Kıdık İYİ Parti" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ali Kıdık İYİ Parti</h1>
            <Image width={800} height={500} src="https://static.birgun.net/resim/haber-detay-resim/2022/11/16/iyi-partili-ali-kidik-a-silahli-saldiri-1088696-5.jpg" alt="Ali Kıdık İYİ Parti"/>
            <h3>Recent News</h3>
            <a href='https://www.birgun.net/haber/iyi-partili-ali-kidik-a-silahli-saldiri-410243'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İYİ Partili Ali Kıdık&#39;a silahlı saldırı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1AwmlICoAAft0i8G6m8KBW86HZBkxIdiexOvXO0C8cReHHboLdYIVIOoet9rE64ky7_ZKyhhv" alt="İYİ Partili Ali Kıdık&#39;a silahlı saldırı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İYİ Parti Grup Başkanvekili İbrahim Özkan, İYİ Parti İstanbul İl Teşkilatı Kurucu Yönetim Kurulu Üyesi ve İBB Meclis Üyesi Ali Kıdık&#39;ın saldırıya&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/iyi-parti-ibb-meclis-uyesi-ali-kidika-silahli-saldiri-haber-1589557'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İYİ Parti İBB Meclis Üyesi Ali Kıdık&#39;a silahlı saldırı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsOL8Zl5Byd1TZFD7T11Rnwk3zyUlSmPJRn4z2dM6aaCsHkmzHYknXchNADAWirHMAmMBYWxwj" alt="İYİ Parti İBB Meclis Üyesi Ali Kıdık&#39;a silahlı saldırı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstanbul Büyükşehir Belediyesi İYİ Parti Grup Başkan Vekili İbrahim Özkan, İYİ Parti İBB Meclis Üyesi ve Grup Sekreteri Ali Kıdık&#39;ın silahlı saldırıya&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/siyaset/son-dakika-iyi-partili-ali-kidik-saldiriya-ugradi-2003444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: İYİ Partili Ali Kıdık saldırıya uğradı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGkik4B6YzEHGdWuUavpFyJrAcGCr4qA7kJfn9gj-oMCGEhlcl0_jqyI4IpfjWgedA5kZ8kG7G" alt="Son Dakika: İYİ Partili Ali Kıdık saldırıya uğradı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... İstanbul Büyükşehir Belediye (İBB) Meclisi İYİ Parti Grup Sekreteri Ali Kıdık, İstanbul Halkalı&#39;da silahlı saldırıya uğradı.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/ibb-iyi-parti-meclis-uyesi-ali-kidikin-aracina-mermi-isabet-etti-3890412'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İBB İYİ Parti Meclis Üyesi Ali Kıdık&#39;ın aracına mermi isabet etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXjkp1sOtXlnGj0YMDlZKZrNMLhDPE6hEgrKjXgqQnhfaxyMB95cI3KppMO4icNL5DXLdXKxIy" alt="İBB İYİ Parti Meclis Üyesi Ali Kıdık&#39;ın aracına mermi isabet etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstanbul Büyükşehir Belediyesi (İBB) İYİ Parti Meclis Üyesi ve Grup Sekreteri Ali Kıdık&#39;ın aracına Halkalı&#39;da mermi isabet etti. Kıdık&#39;ın olayı yara almadan&nbsp;...</p></div>
            </div>
        </a><a href='https://ankahaber.net/haber/detay/ibb_meclisi_iyi_parti_grup_sekreteri_ali_kidik_silahli_saldiriya_ugradi_kidik_yaralanmadi_111819'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İBB MECLİSİ İYİ PARTİ GRUP SEKRETERİ ALİ KIDIK SİLAHLI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxvg-1KNQq0XzH3hBlEJOsgiEea53NRWPd4nV8ijK_u7isu-4XSaOqQr0tu4hcE7bc2hP-g6Ac" alt="İBB MECLİSİ İYİ PARTİ GRUP SEKRETERİ ALİ KIDIK SİLAHLI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O da can havliyle arabasını hızlıca sürüp yakındaki Nargile Restaurant&#39;a sığınmış. Mermi 7.65 mm ile atılmış. Saldırgan panik halinde olay yerinden uzaklaşırken&nbsp;...</p></div>
            </div>
        </a><a href='https://www.evrensel.net/haber/474850/iyi-partili-ibb-meclis-uyesi-ali-kidik-silahli-saldiriya-ugradi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İYİ Partili İBB Meclis üyesi Ali Kıdık silahlı saldırıya uğradı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkbR0ZXZ6Xk4ZgbSOak624g3cgmFWyM-rJYhJH1hwpDXvsMBQIMar6G8xKDWGgMcvsTC8UdgKV" alt="İYİ Partili İBB Meclis üyesi Ali Kıdık silahlı saldırıya uğradı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İYİ Parti Grup Başkanvekili İbrahim Özkan, İYİ Partili Ali Kıdık&#39;ın saldırıya uğradığını duyurdu.</p></div>
            </div>
        </a>
        </Template></>;
}