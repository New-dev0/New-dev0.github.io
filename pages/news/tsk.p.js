import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TSK</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TSK"/>
        <meta name="description" content="Trending News about TSK" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TSK</h1>
            <Image width={800} height={500} src="" alt="TSK"/>
            <h3>Recent News</h3>
            <a href='https://www.basnews.com/tr/babat/783697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSK, Kobani&#39;yi bombaladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPXlKJn7Zj8UZfOX8oiUTeR6ROQLTFkDU0z0Oe3rPyi4VaXX1D3fhFWBMle8NuAQFW3dSiXjlS3A" alt="TSK, Kobani&#39;yi bombaladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BasNews- Türkiye&#39;ye ait savaş uçakları Rojava Kürdistanı&#39;nın Kobani kentini bombaladı. Kobani&#39;ye yönelik hava harekatı düzenleyen savaş uçaklarının&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/gundem/2022/11/19/son-dakika-tskya-ait-savas-ucaklari-suriyedeki-pkkypg-mevzilerini-vuruyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: TSK Irak ve Suriye&#39;deki PKK/YPG mevzilerini vuruyor!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHbgp9wMNLeeCen6Svu0Ie1UcJgG7SsMDn2IJnz_QSsmtZvNa2pl73hIGcBXkE97M98o98QTjI" alt="SON DAKİKA: TSK Irak ve Suriye&#39;deki PKK/YPG mevzilerini vuruyor!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... Türkiye&#39;ye ait çok sayıda savaş uçağı, terör örgütü PKK&#39;nın Irak ve Suriye&#39;de yer alan mevzilerini vuruyor. Milli Savunma Bakanlığı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diken.com.tr/tskdan-suriyede-hava-harekati/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suriye ve Irak&#39;ın kuzeyine hava harekatı - Diken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSn_e-uPnQY2WeWYIfkNv1xdf4BtBU4t4Czui1hrdJQJegKnzBSdAXELV1izRMk6rn2aF5xmJX" alt="Suriye ve Irak&#39;ın kuzeyine hava harekatı - Diken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>20/11/2022 - Türk Silahlı Kuvvetleri&#39;nin (TSK), Suriye&#39;nin Kobani kentine hava harekatı başlattığı bildirildi.</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/msb-hesap-zamani-diye-duyurdu-tsk-taksim-deki-saldiridan-6-gun-sonra-kobani-yi-bombaladi,1073544'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MSB &#39;Hesap zamanı&#39; diye duyurdu, TSK Taksim&#39;deki saldırıdan 6 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgHBnVAEz2WK3Mcli0SvBzk-XlNA_g4sg2Kbupit9UWmpi5SgRO0SKX-cXiB3a5wd8wDa2XzOQ" alt="MSB &#39;Hesap zamanı&#39; diye duyurdu, TSK Taksim&#39;deki saldırıdan 6 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanlığı (MSB), &#39;Pençe Kılıç&#39; isimli hava harekatında Suriye ve Irak&#39;ın kuzeyinde Türkiye&#39;ye yönelik terör saldırılarında üs olarak kullanılan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/gundem/tskdan-suriyenin-kuzeyine-operasyon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSKdan Suriye ve Irakın kuzeyine operasyon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6qZk9i0yX_gzhEEdGo9pJZ2atRKPz-yyipzH6S--F0M2pu4eQ_MUvS5HhUo-nlaB2817Q2dtp" alt="TSKdan Suriye ve Irakın kuzeyine operasyon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türk Silahlı Kuvvetleri, Suriye&#39;nin ve Irak&#39;ın kuzeyinde terör örgütü YPG/PKK&#39;ya ait hederleri vurdu.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/guncel/2022/11/19/tsk-suriye-ve-irakin-kuzeyinde-kallesleri-vuruyor-hdpkkdan-aglama-sesleri-geliyor-avrupaya-rezil-cagri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSK, Suriye ve Irak&#39;ın kuzeyinde kalleşleri vuruyor! HDPKK&#39;dan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpLbx_xe8VllvWUjG-0OVurFt5q8NArPegJ8ETAIrK9llNDz6hZ38aqN890aAMEdlJYv2rjXyf" alt="TSK, Suriye ve Irak&#39;ın kuzeyinde kalleşleri vuruyor! HDPKK&#39;dan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HDP&#39;nin Avrupa Temsilciliği, Türk Silahlı Kuvvetleri&#39;nin Suriye&#39;de bulunan YPG terör örgütüne başlattığı hava harekatını durdurma çağrısında bulundu. Öte yandan&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/tsk-nin-hava-harekati-hakkinda-hdp-nin-avrupa-temsilciliginden-aciklama-saldirilar-derhal-durdurulmali-1108369'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TSK&#39;nın Hava Harekatı Hakkında HDP&#39;nin Avrupa Temsilciliğinden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRs680ariOHlj-n0ENXRRq1F-RWKXPSH0g7Zlpy4iRITc-Sqd9PthOV__fPW5eVuz9pQjQQFXQQ" alt="TSK&#39;nın Hava Harekatı Hakkında HDP&#39;nin Avrupa Temsilciliğinden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türk Silahlı Kuvvetleri, Suriye ve Irak&#39;ın kuzeyine hava harekatı düzenledi. Harekatın ardından ilk açıklama, HDP&#39;nin Avrupa Temsilciliğinden geldi.</p></div>
            </div>
        </a>
        </Template></>;
}