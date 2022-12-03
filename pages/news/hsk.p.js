import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>HSK</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,HSK"/>
        <meta name="description" content="Trending News about HSK" /></Head><Template>
            <h1 style={{fontSize: "30"}}>HSK</h1>
            <Image width={800} height={500} src="https://media-cdn.t24.com.tr/media/library/2020/03/1584347375879-hsk.jpg" alt="HSK"/>
            <h3>Recent News</h3>
            <a href='https://t24.com.tr/haber/hsk-dan-282-kisilik-kararname,1076420'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK&#39;dan 282 kişilik kararname</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTF-1A676g1bvhyGtBiGPWl35kPauIwdtG_cPLReBwJl0fys_ECTHZoGe6PT_LW4BkBOGI7qs5x" alt="HSK&#39;dan 282 kişilik kararname" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HSK, adli ve idari yargıda 282 hakim ve savcıyı kapsayan güz kararnamesini yayımladı. Kararname ile 255&#39;i adli 27&#39;si idari yargıda görevli 282 hâkim ve savcının&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/hsknin-mazeret-kararnamesi-yayimlandi-282-hakim-ve-savcinin-gorev-yeri-degisti-3893421'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK&#39;nin mazeret kararnamesi yayımlandı: 282 hakim ve savcının ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX4voAZZVdmFlhgumoFWazfkJtch4b4D2LEKZ8-a1YIwY2P7lg-mW_HzteGfJMWQWCTX3O7mpq" alt="HSK&#39;nin mazeret kararnamesi yayımlandı: 282 hakim ve savcının ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakimler ve Savcılar Kurulunca (HSK) yayımlanan kararnameyle adli ve idari yargıda 282 hakim ve savcının görev yeri değişti.</p></div>
            </div>
        </a><a href='https://halktv.com.tr/gundem/hsk-282-kisilik-mazeret-kararnamesini-yayinladi-705842h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK, 282 kişilik mazeret kararnamesini yayınladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHniyjeCE36BtbdUCT4nc6moVvFVwmWsamb-ppd3bH0HqmcGBTOpOclQeGqwaTOSlcI34WrEHNbw" alt="HSK, 282 kişilik mazeret kararnamesini yayınladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakimler ve Savcılar Kurulunca (HSK) yayınlanan kararnameyle adli ve idari yargıda 282 hakim ve savcının görev yeri değişti.</p></div>
            </div>
        </a><a href='https://www.egedesonsoz.com/haber/hsk-dan-282-kisilik-kararname-izmir-e-kimler-geldi-kimler-gitti/1124864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK&#39;dan 282 kişilik kararname: İzmir&#39;e kimler geldi/kimler gitti?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwh2KyY7E90GEn0AJYHkt0OUzQQURzw_RSP32EWaUAiJyI1ioLyNByGASpCrJlFdWKoSh9XkRO" alt="HSK&#39;dan 282 kişilik kararname: İzmir&#39;e kimler geldi/kimler gitti?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakimler ve Savcılar Kurulunca (HSK) yayımlanan kararnameyle 282 hakim ve savcının görev yeri değişti. Karanamede İzmir&#39;de görev yapan çok sayıda ismin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mansetaydin.com/haber/12813410/hsk-kararnamesi-yayimlandi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK kararnamesi yayımlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeh8cl8jH3DJJaw8TUGFVS1L8iwHRFb93n1xF1Jdd4UZ_8gk3jPqJCMjbRbsTK3qgHNydoMQbk" alt="HSK kararnamesi yayımlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakim ve savcılar için güz dönemi mazeret kararnamesi yayımlandı. Aydın&#39;da da hakim ve savcıların ataması gerçekleşti.</p></div>
            </div>
        </a><a href='https://www.gercekgundem.com/guncel/hskdan-282-kisilik-kararname-mehmet-agara-yakinligiyla-gundeme-gelen-savci-vekili-de-listede-402697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK&#39;dan 282 kişilik kararname: Mehmet Ağar&#39;a yakınlığıyla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFlx16HY4K4ldBfEoHb9nFOo7fyoiKqSWsPkatA8L6X6BT8Zpy6NHSMhfp-ZLI8zvtvby_g7py" alt="HSK&#39;dan 282 kişilik kararname: Mehmet Ağar&#39;a yakınlığıyla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HSK, yayınladığı güz kararnamesiyle 282 hakim ve savcının görev yerini değiştirdi. Kararnamede en dikkat çekici isimlerden biri eski İçişleri Bakanı Mehmet&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bursahakimiyet.com.tr/gundem/hsk-dan-flas-kararname-bursa-dahil-cok-sayida-ilde-926875'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HSK&#39;dan flaş kararname! Bursa dahil çok sayıda ilde...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfOY1yIk9tmQO1DLbSWms2gwTu_QHejLCl1mprX6TIXIe7nJKtWEZ4S21RPMLt2thM_9LFqHli" alt="HSK&#39;dan flaş kararname! Bursa dahil çok sayıda ilde..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HSK yayınladığı güz kararnamesi ile Bursa dahil çok sayıda ilde 282 hakim ve savcının görev yerini değiştirdi.</p></div>
            </div>
        </a>
        </Template></>;
}