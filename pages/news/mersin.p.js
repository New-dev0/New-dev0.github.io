import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mersin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mersin"/>
        <meta name="description" content="Trending News about Mersin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mersin</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/30/2007689/kapak_154432.jpg" alt="Mersin"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/mersinde-okulda-vahset-13-yasindaki-ogrenci-bicaklanmis-halde-bulundu-2007689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mersin&#39;de okulda vahşet: 13 yaşındaki öğrenci, bıçaklanmış halde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDEn7ycXzg52mj518FLUKERCR2FlJT5Bfy6mzn3KYBlSMtxduXzO9u8sl_FycSicXiveMvX761" alt="Mersin&#39;de okulda vahşet: 13 yaşındaki öğrenci, bıçaklanmış halde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olay öğleden sonra Okan Merzeci Mahallesi, Hüseyin Özer Merzeci Ortaokulu&#39;nun zemin katındaki tuvalette meydana geldi. E.D., aynı sınıfta eğitim gören Fatmanisa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/gundem/son-dakika-mersinde-okulda-dehset-12-yasindaki-kiz-tuvalette-sinif-arkadasini-hortumla-dovup-bicaklayarak-oldurdu-7509821/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mersin&#39;de okulda dehşet: Sınıf arkadaşını hortumla dövüp ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCAqxr2iunXs7z0SJNYEj4uIoYczih1NTghW6zHYi8oKh5bakkekNq3aV-8vM2r0QZUM5e0PnY" alt="Mersin&#39;de okulda dehşet: Sınıf arkadaşını hortumla dövüp ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mersin&#39;de kız öğrenci E.D. (12), sınavdan düşük not aldığı için kendisiyle alay ettiğini öne sürdüğü sınıf arkadaşı Fatmanisa Yürekli&#39;yi (12) okul tuvaletinde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/gundem/mersinde-sinif-arkadasinin-bicakladigi-12-yasindaki-ogrenci-hayatini-kaybetti/2752078'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mersin&#39;de sınıf arkadaşının bıçakladığı 12 yaşındaki öğrenci hayatını ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTw4ScBD_R6Rp0Anns_mnU13DnU4E-y5BC6Iyui-0ACWoDg_addVKX8oFi1k3O083-j2KZQkI5B" alt="Mersin&#39;de sınıf arkadaşının bıçakladığı 12 yaşındaki öğrenci hayatını ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İddiaya göre, Toroslar ilçesindeki bir ortaokulda aynı sınıfta eğitim gören kız öğrenciler F.Y. ile E.D, henüz bilinmeyen nedenle tuvalette tartıştı.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/mersin-de-bir-ogrencinin-okul-tuvaletinde-oldurulmesine-iliskin-yayin-yasagi-karari-alindi-411958'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mersin&#39;de bir öğrencinin okul tuvaletinde öldürülmesine ilişkin yayın ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsp3gGMQSk6VK4nLrPCqi6b8S4Ot-8LGG-lbZ4zjioHXwxiwY7HbbxMxb-scL6L703yT8OPfKx" alt="Mersin&#39;de bir öğrencinin okul tuvaletinde öldürülmesine ilişkin yayın ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mersin Cumhuriyet Başsavcılığı, Toroslar ilçesinde 7. sınıf öğrencisi Fatma Nisa Yürekli&#39;nin okulun tuvaletinde darp edilip, bıçaklanarak öldürülmesiyle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/son-dakika-mersin-de-12-yasindaki-kiz-cocugu-sinif-arkadasini-oldurdu-3543431'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika haberi: Mersin&#39;de 12 yaşındaki kız çocuğu, sınıf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUo8e68FtUNE-UnVwRkSEKyrTqaePCjikZpFHjcFSv2ev_WRkIjPC_9fmR03wqfzO0jupjIn70" alt="Son dakika haberi: Mersin&#39;de 12 yaşındaki kız çocuğu, sınıf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye tüyler ürperten bir cinayete tanık oldu. Mersin&#39;de Hüseyin Okan Merzeci Ortaokulu&#39;nda meydana gelen olayda, 12 yaşındaki E.D. isimli kız çocuğu,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/henuz-12-yasindaydi-mersinde-dehset-arkadasi-hortumla-dovup-bicaklayarak-oldurdu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kız öğrencinin yaptıkları şoke etti! Mersin&#39;de dehşet: Arkadaşını ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2vw7R1nwy92OjpT4eBsAFGZw7mYS812Vk2WejkPOgZtNBxK2ew7jPVWlKv7Rskrt5p4LIJ08z" alt="Kız öğrencinin yaptıkları şoke etti! Mersin&#39;de dehşet: Arkadaşını ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mersin&#39;de kan donduran bir olay meydana geldi. Sınavdan düşük not aldığı için kendisiyle alay eden Fatmanisa Yürekli&#39;yi 12 bir not yazarak okul tuvaletine.</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/gundem/mersinde-korkunc-olay-12-yasindaki-cocuk-okulda-arkadasini-oldurdu-2589319'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mersin&#39;de korkunç olay! 12 yaşındaki çocuk okulda arkadaşını öldürdü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwQLi86761GAKKD5YEOYlZ_4dxf150B3BHP46NCSrpx3QU60zLVDeSQP-9PWcB6R22x_9H9w9W" alt="Mersin&#39;de korkunç olay! 12 yaşındaki çocuk okulda arkadaşını öldürdü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Güncel Gündem Haberleri - Mersin&#39;de 12 yaşındaki öğrenci E.D. sınavdan düşük not aldığı için dalga geçen arkadaşını okul tuvaletinde hortumla dövdükten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}