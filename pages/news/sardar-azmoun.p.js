import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sardar Azmoun</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sardar Azmoun"/>
        <meta name="description" content="Trending News about Sardar Azmoun" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sardar Azmoun</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/6380e77770380e0878fc04ca" alt="Sardar Azmoun"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/spor/futbol/sardar-azmoun-fenerbahcede-oynamak-isterim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sardar Azmoun: Fenerbahçe&#39;de oynamak isterim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSk9ihRV_YWH9-_FV3IDo8n4Wo1dliz66EcuPIMl2xGj_CxfFxHT_5AXEL_BCBhR4weudRbBBMs" alt="Sardar Azmoun: Fenerbahçe&#39;de oynamak isterim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nda İran, Galler&#39;i mağlup ederek turnuvadaki flaş sonuçlardan birine imza attı. Mücadele sonrasında yıldız futbolcudan Fenerbahçe itirafı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/yildiz-golcu-sardar-azmoundan-fenerbahce-itirafi-2311174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yıldız golcü Sardar Azmoun&#39;dan Fenerbahçe itirafı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZqRmBPeOq8TK9bQQwJT-eoQpcfPu-cC8hMRpcilRoiOY358OVXJzguN5S3MwzfNWYJYVIgGqN" alt="Yıldız golcü Sardar Azmoun&#39;dan Fenerbahçe itirafı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alman ekibi Bayer Leverkusen forması giyen ve şu anda Dünya Kupasında İran Milli Takımı için mücadele eden Sardar Azmoun 2-0 kazandıkları Galler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/serdar-azmoundan-fenerbahce-sozleri-265926.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serdar Azmoun&#39;dan Fenerbahçe sözleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFp7xE0g7b_M_SpdKYL4VgL9DhHoyUUDGs7nR92eEPU-4zoKwEJJHPlMeKw7RUfoeeanTtrLTv" alt="Serdar Azmoun&#39;dan Fenerbahçe sözleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliğinde düzenlenen 2022 FIFA Dünya Kupası&#39;nın B Grubu&#39;nda İran, 10 kişi kalan Galler&#39;i uzatma dakikalarında bulduğu gollerle 2-0 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/serdar-azmoun-fenerbahceden-teklif-vardi-2006191'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serdar Azmoun: &#39;Fenerbahçe&#39;den teklif vardı&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7Hgbm-XDxU8BpKMtF2G_NFJQIzYNXk-ZaRbT7yNuLVqTQm-_69Fc_h3g9b1VIGm0dkAAvSlN_" alt="Serdar Azmoun: &#39;Fenerbahçe&#39;den teklif vardı&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran forması giyen Serdar Azmoun, Galler ile oynadıkları karşılaşma sonrası konuştu. Azmoun, Fenerbahçe ile ilgili bir itirafta bulundu.</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/spor/2022/11/25/dunya-kupasinda-fenerbahce-surprizi-sardar-azmoun-cok-seviyorum-ileride-formasini-giymek-isterim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;nda Fenerbahçe sürprizi! Sardar Azmoun: Çok ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNaQOpHzg_i-3DgFAtN866pfios4zn35M31iGa84B4f-Sc0oeTBvKuIck5ydoCz5zz75jGXwcC" alt="Dünya Kupası&#39;nda Fenerbahçe sürprizi! Sardar Azmoun: Çok ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran Milli Takımı oyuncusu Serdar Azmoun Galler karşısındaki aldıkları galibiyet sonrasında Türkiye&#39;ye Türkçe olarak mesaj gönderdi.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/iranli-golcu-serdar-azmoun-umarim-fenerbahcede-oynarim-42177193'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İranlı golcü Serdar Azmoun: &#39;Umarım Fenerbahçe&#39;de oynarım&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSL6abwx0f_oa_5PvNlPhoLF3XdWhAyEY6F8PsAxzV_uQNptbPhd5doaeqQAUCZ7kYAozBg-zfP" alt="İranlı golcü Serdar Azmoun: &#39;Umarım Fenerbahçe&#39;de oynarım&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İranlı golcü Serdar Azmoun, Galleri&#39;i 2-0 mağlup ettikleri maçın ardından transfer itirafında bulundu.</p></div>
            </div>
        </a><a href='https://www.mynet.com/iran-in-yildiz-futbolcusu-serdar-azmoun-roportaj-yaparken-birden-turkce-konusmaya-basladi-fenerbahce-ye-gol-atmistim-353881-myspor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran&#39;ın yıldız futbolcusu Serdar Azmoun, röportaj verirken birden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQkhuKFE5h0UFdlz9Ej8wa01Kpe8ZV9YCsebJoVZBraxOiNOiR-J1yPGWGQoVdm-C3J6vvtZ4z" alt="İran&#39;ın yıldız futbolcusu Serdar Azmoun, röportaj verirken birden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran forması giyen Serdar Azmoun, Galler ile oynadıkları maçın ardından Türkçe röportaj verdi. TRT Spor spikerini şaşıran Serdar Azmoun, röportaj sırasında&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}