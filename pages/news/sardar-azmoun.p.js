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
        </a><a href='https://www.ntvspor.net/futbol/fenerbahce-de-oynamak-isterim-6380e3d066db228e5caffba6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Fenerbahçe&#39;de oynamak isterim&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoD9BX9v2KM3gxlpXiZEVwbxPJnZCTKXlYbnoXt7VvPBBi4Err9JZ4asUlJ_9hLbl9yp5fqEtQ" alt="&quot;Fenerbahçe&#39;de oynamak isterim&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliğinde düzenlenen 2022 FIFA Dünya Kupası&#39;nın B Grubu&#39;nda İran, 10 kişi kalan Galler&#39;i uzatma dakikalarında bulduğu gollerle 2-0 mağlup&nbsp;...</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/spor/sardar-azmounun-fenerbahce-sevgisi-iranin-turkmen-golcusunden-canli-yayinda-mesaj-930007'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sardar Azmoun&#39;un Fenerbahçe sevgisi... İran&#39;ın Türkmen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdj48sEUg9QKv09gbRti4eDE50x5UCY62_1luf405J6ij5kG8w8mmF-h8GQj_aFoo7ReyukUI_" alt="Sardar Azmoun&#39;un Fenerbahçe sevgisi... İran&#39;ın Türkmen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran&#39;ın Galler&#39;i 2-0 mağlup ettiği 2022 Dünya Kupası maçından sonra 27 yaşındaki futbolcu Türkçe konuşarak Türk futbolseverleri şaşırdı. Türkmen olduğunu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}