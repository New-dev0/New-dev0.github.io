import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Armağan Çağlayan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Armağan Çağlayan"/>
        <meta name="description" content="Trending News about Armağan Çağlayan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Armağan Çağlayan</h1>
            <Image width={800} height={500} src="https://i3.posta.com.tr/i/posta/75/0x0/6383443be4bfdc31f8d36f92.png" alt="Armağan Çağlayan"/>
            <h3>Recent News</h3>
            <a href='https://www.posta.com.tr/magazin/armagan-caglayan-gozyaslarina-bogularak-anlatti-aci-cekmek-istemiyorum-2588472'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armağan Çağlayan gözyaşlarına boğularak anlattı: Acı çekmek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQM6QOCGNqRgaceBm-beVj0KuggnGpSyGeb8jPXQUZj2CDAg51Rn-bdRrxgV5ysIhCO-s7vSEdi" alt="Armağan Çağlayan gözyaşlarına boğularak anlattı: Acı çekmek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin Haberleri - Armağan Çağlayan, geçtiğimiz gün kansere yakalandığını sosyal medya hesabından duyurmuştu. Geçtiğimiz aylarda akciğer kanserinden&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/kansere-yakalandigini-aciklayan-armagan-caglayan-hayatina-dokunan-unluleri-ve-onlardan-ne-ogrendigini-anlatti-1110175'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kansere Yakalandığını Açıklayan Armağan Çağlayan, Hayatına ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsTuTRIGPhkCi9cyTowlxOPphauYrx8SyxqSAL2TDX8wEz_JQm0tetTi3ad0Y_jISpV8biJzE8" alt="Kansere Yakalandığını Açıklayan Armağan Çağlayan, Hayatına ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yakın zamanda yaptırdığı yıllık sağlık taramasında akciğerinde bir kitle tespit edilen Armağan Çağlayan, kitlenin kanserli. Gelecek hafta tedavi süreci&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/yasam/armagan-caglayandan-duygulandiran-aciklama-2006382'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armağan Çağlayan&#39;dan duygulandıran açıklama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRiWMGEZzdP_rh5RrmwhjFv-1C14zUZYyIKzT3NlgE30i6ELD0Bik6pSicoj8qngU0970bRzhI" alt="Armağan Çağlayan&#39;dan duygulandıran açıklama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçen günlerde akciğer kanserine yakalandığını duyuran ünlü televizyoncu Armağan Çağlayan, sunuculuğunu üstlendiği Youtube kanalında, Billur Hanım&#39;ın vefat&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/galeri/magazin/akciger-kanserine-yakalandigini-duyuran-unlu-sunucu-armagan-caglayan-hungur-hungur-agladi-aci-cekmek-istemiyorum'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Akciğer kanserine yakalandığını duyuran ünlü sunucu Armağan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTc5TOSNptBJrX96Kzg45bEYwJeBRADqN_2K1xk5F6X-4yFZommFWwqqplbyK6d39w4KY7ygT7Jwg" alt="Akciğer kanserine yakalandığını duyuran ünlü sunucu Armağan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçen aylarda akciğer kanseri sebebiyle vefat eden Billur Kalkavan&#39;ın sevgilisi Buğra Bahadırlı, Armağan Çağlayan&#39;a konuk oldu. Akciğer kanseri teşhisi konulan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/magazin/armagan-caglayan-hastaligi-surecinde-en-cok-korktugu-seyi-acikladi-gozyaslarina-hakim-olamadi/haber-1322553'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armağan Çağlayan hastalığı sürecinde en çok korktuğu şeyi açıkladı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTl7pdStrQuz-9GZOuWNz0RAHYFFhs4eQclRnJFbb_iwkkv2pERWrDminyQkkzyuvOER-NtH4lH" alt="Armağan Çağlayan hastalığı sürecinde en çok korktuğu şeyi açıkladı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Armağan Çağlayan geçtiğimiz günlerde akciğerinde kitle tespit edildiğini açıklamıştı. Ünlü yapımcı ve sunucu, YouTube&#39;de yayınlanan programında sağlık&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/armagan-caglayan-ayrintiyi-gozyaslariyla-anlatti-tek-bir-seyden-korkuyorum-1711204.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armağan Çağlayan ayrıntıyı gözyaşlarıyla anlattı: Tek bir şeyden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjqql06RjptOc1DheqBAkxUlwj_Bt3JP6ozURVolmFpcQCsxNY0xUwb6YVcTEIUNXg8E7-nx4O" alt="Armağan Çağlayan ayrıntıyı gözyaşlarıyla anlattı: Tek bir şeyden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sosyal medya hesabından akciğerinde kitle bulunduğunu açıklayan Armağan Çağlayan, YouTube&#39;daki programında geçen aylarda yaşamını yitiren Billur Kalkavan&#39;ın&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haber7.com/hayat/haber/3280461-armagan-caglayan-acti-agzini-yumdu-gozunu-islah-olun-sozleri-sosyal-medyada-gundem-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armağan Çağlayan açtı ağzını yumdu gözünü: Islah olun sözleri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4pHENTDYwoeSqzzox_LG_EC_74FUhVjpPwEQCercwnzBsn9SKO07O8Q6InjTp27jIjvzMYOms" alt="Armağan Çağlayan açtı ağzını yumdu gözünü: Islah olun sözleri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haber 7 - Ünlü sunucu Armağan Çağlayan&#39;ın kanser haberi sosyal medyada büyük yankı uyandırdı. Oldukça çok paylaşım alan bu konuda yapılan bir yorum Armağan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}