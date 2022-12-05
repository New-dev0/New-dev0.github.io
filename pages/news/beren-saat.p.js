import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Beren Saat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Beren Saat"/>
        <meta name="description" content="Trending News about Beren Saat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Beren Saat</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/12/2/2008152/kapak_093744.jpg" alt="Beren Saat"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/beren-saatten-kenan-doguluyu-duygulandiran-konusma-2008152'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beren Saat&#39;ten Kenan Doğulu&#39;yu duygulandıran konuşma</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaz4NyNWGowDu9G9U_zMBsY7BWbIo12uzR2FRe8qVOJkgVc4RxSaZDn8ZHGVVxDABOhN7IdA-F" alt="Beren Saat&#39;ten Kenan Doğulu&#39;yu duygulandıran konuşma" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GQ Türkiye Men of the Year Ödülleri dün gece sahiplerini buldu. Yılın İkonu seçilen ünlü şarkıcı Kenan Doğulu, ödülünü eşi Beren Saat&#39;ten aldı.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/galeri-beren-saatin-bu-sozleri-karsisinda-kenan-dogulu-gozyaslarini-tutamadi-ben-cocuktum-onu-gogsumde-tasiyarak-42180983'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beren Saat&#39;in bu sözleri karşısında Kenan Doğulu gözyaşlarını ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYPu2eq1YpKj2y_Nhm9y929t6E9fapJPQRaw1epZ_zUciTdPlHDQMEl4jB0eqbQktBXsteYKYt" alt="Beren Saat&#39;in bu sözleri karşısında Kenan Doğulu gözyaşlarını ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GQ Türkiye Men Of The Year 2022 ödülüne layık görülen Kenan Doğulu, ödülünü eşi Beren saat&#39;in elinden aldı. Sahnede romantik anlar yaşayan çiftin bu anları&nbsp;...</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/magazin/beren-saat-kenan-doguluyu-aglatti-2589735'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beren Saat, Kenan Doğulu&#39;yu ağlattı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRawRuqWJlx-wrBn_VpCQr4aV1IxAOJvwrNRjqe1gU_Blt3BTguE0_oFMLfiZxJbJc7mK9FxX1F" alt="Beren Saat, Kenan Doğulu&#39;yu ağlattı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin Haberleri - Kenan Doğulu ve eşi Beren Saat, bir ödül törenine katıldı. Kenan Doğulu, &#39;Yılın İkonu&#39; seçildi. Ödülünü eşi Beren Saat&#39;i elinden aldı.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/beren-saat-in-sozleri-kenan-dogulu-yu-duygulandirdi-magazin-haberleri-3543974-magazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beren Saat&#39;in sözleri Kenan Doğulu&#39;yu duygulandırdı - Magazin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSg9pwFGbWJpqYL-WZ3HIt6j3IkGjKwMMxes-OdQAp--xnQ_ROMNcXExmmWTtldUt6W72FDt_3b" alt="Beren Saat&#39;in sözleri Kenan Doğulu&#39;yu duygulandırdı - Magazin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dün akşam ünlü isimlerin katıldığı bir ödül töreninde renkli ve duygusal anlar yaşandı. Bunlardan biri de 2014&#39;te evlenen Beren Saat ile Kenan Doğulu imza&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/yilin-ikonu-odulunu-esi-beren-saat-ten-alan-kenan-dogulu-nun-romantik-anlari-gozlerinizden-kalp-cikartacak-1111401'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Yılın İkonu&#39; Ödülünü Eşi Beren Saat&#39;ten Alan Kenan Doğulu&#39;nun ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdHq1ksxuPnAh6zsfZ43UzPR3Jl9wmNAe0IV_dpv0boVb8Db5A4jErlz_r1ppNMhr4V3rh-Mm8" alt="&#39;Yılın İkonu&#39; Ödülünü Eşi Beren Saat&#39;ten Alan Kenan Doğulu&#39;nun ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kenan Doğulu, bu akşam düzenlenen GQ Men of the Year Ödül Töreni kapsamında &#39;Yılın İkonu&#39; ödülünü eşi Beren Saat&#39;in elinden aldı. Beren Saat&#39;in ödül vermek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/magazin/beren-saat-7-yillik-esi-kenan-doguluyu-kameralar-onunde-aglatti-yas-aldikca-seksilesen-yilin-ikonu-deyip-bakin-neler-soyledi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beren Saat 7 yıllık eşi Kenan Doğulu&#39;yu kameralar önünde ağlattı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJ8ib4P7TL80dSV8qB8yVukFyr-ECfShSWxuEhs5af0rKBOb7tbPJRMGylAfZAVjdTGfJu5qsD" alt="Beren Saat 7 yıllık eşi Kenan Doğulu&#39;yu kameralar önünde ağlattı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;GQ Türkiye Men of the Year Ödülleri dün gece sahiplerini buldu. Yılın İkonu seçilen ünlü şarkıcı Kenan Doğulu, ödülünü 7 yıl önce nikah masasına oturduğu eşi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/gq-turkiye-men-of-the-year-2022-odulleri-sahiplerini-buldu-beren-saat-ve-kenan-dogulu-ciftinin-romantik-anlari-geceye-damga-vurdu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GQ Türkiye Men Of The Year 2022 Ödülleri sahiplerini buldu! Beren ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7B49JGHMecMyvyg75uxATWtVMjTDMgNjWSRQdrdFwenSfvczwr1DIl3dZhLO3ZAs-t-N7xTwS" alt="GQ Türkiye Men Of The Year 2022 Ödülleri sahiplerini buldu! Beren ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GQ Türkiye &#39;Men of the Year Ödülleri&#39; dün akşam verildi. 2022 yılında başarıları ve stilleriyle dikkat çeken kadınlar ve erkekler seçildi.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/akinci-yla-olay-olmustu-dizileri-erken-final-yapan-sukru-ozyildiz-beren-saat-le-o-unlu-dizide-bile-rol-almis-1111372'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Akıncı&#39;yla Olay Olmuştu: Dizileri Erken Final Yapan Şükrü Özyıldız ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrhwUDEl4SYhYKG4ohibOqWQLCtF_V1ggaz4NdNeKdD1uDaPKh0MYdAEnCZB7yd60zBoqwx9xX" alt="Akıncı&#39;yla Olay Olmuştu: Dizileri Erken Final Yapan Şükrü Özyıldız ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rol aldığı yapımlarla yıldızı parladı. İlk oyunculuk performansını Derin Sular adındaki günlük dizide sergileyen Şükrü Özyıldız; Fatmagül&#39;ün Suçu Ne?, Uçurum,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}