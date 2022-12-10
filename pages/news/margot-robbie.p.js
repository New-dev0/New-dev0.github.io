import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margot Robbie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margot Robbie"/>
        <meta name="description" content="Trending News about Margot Robbie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margot Robbie</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-6391aeabef2edd3914c516b0/rev-0/raw/s-134874fcb1e741bb71ab4f8f51d4a34cda6f1728.jpg" alt="Margot Robbie"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/babylon-filmindeki-sevisme-sahnesiyle-ilgili-konusan-margot-robbie-brad-pitt-ile-ilgili-bir-itirafta-bulundu-1112645'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babylon Filmindeki Sevişme Sahnesiyle İlgili Konuşan Margot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWWAEyyskyjFwDtXSChtqZDF6BwmXjbIv2cMXtrRnk0b9pkgbGu-Weuj2nCzRZjNnSxj2ufyZa" alt="Babylon Filmindeki Sevişme Sahnesiyle İlgili Konuşan Margot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Aralık ayında vizyona gireceği konuşulan Babylon filminin baş rollerinden Margot Robbie, film senaryosunda değişiklik istedi.</p></div>
            </div>
        </a><a href='https://www.esquire.com.tr/ekstra/kultur-sanat/2022/12/08/margot-robbieden-brad-pitt-itirafi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie&#39;den Brad Pitt itirafı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8DItKfh9jDx3gDO6OqwODBa98ASwrWcS-9Tg4BIhQlFY9WWx8ejOhhPPTqzkz4ha9Gb-iKsrv" alt="Margot Robbie&#39;den Brad Pitt itirafı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Margot Robbie, Brad Pitt ile rol aldığı &#39;Babylon&#39; adlı filmle ilgili samimi açıklamalarda bulundu. Filmdeki Pitt ile öpüşme sahnesinin sahnesinin senaryoda.</p></div>
            </div>
        </a><a href='https://www.boluolay.com/magazin/margot-robbie-senaryodaki-sevisme-sahnesini-kendi-eklettigini-acikladi-h80328.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie senaryodaki sevişme sahnesini kendi eklettiğini ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMILggiB2cx9aUt2LpHu8mu6bZw7ukSonEYgswMhu2VRc_1bPBY_G9R2KR58arq_FDJAc_Hxm2" alt="Margot Robbie senaryodaki sevişme sahnesini kendi eklettiğini ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aralık ayında vizyona girecek olan Babylon filmi başrollerinde Margot Robbie ve Brad Pitt yer alıyor. Hollywood sessiz filmden sesli filme geçildiği dönemi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.turkmmo.com/margot-robbie-brad-pittle-opusme-sahnesi-hakkinda-konustu-h1000051804.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie, Brad Pitt&#39;le Öpüşme Sahnesi Hakkında Konuştu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtSismoXEO9SK8v0yljbBg_uwebqXDWGtnphMUyCWQ8xOi_L_QJX9OCRZCRgeq4WHNzNFTwRoV" alt="Margot Robbie, Brad Pitt&#39;le Öpüşme Sahnesi Hakkında Konuştu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Margot Robbie, Damien Chazelle&#39;nin yeni filmi Babylon&#39;daki Brad Pitt&#39;le öpüşme sahnesinin aslında senaryoda olmadığını, bunu kendisinin eklettiğini söyledi.</p></div>
            </div>
        </a><a href='https://www.akilligundem.com/unlu-oyuncu-gulerek-anlatti-onu-optugum-sahneyi-senaryoya-ben-eklettim-baska-ne-zaman-boyle-bir-sansim-olurdu-ki-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü oyuncu gülerek anlattı: Onu öptüğüm sahneyi senaryoya ben ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4RThdA_mA8fyffNoPO99u6p7m3PjsFVwmZvbFW5qGFSpq4HmsllVTIPwJfzLN1AfiQsZmcw6D" alt="Ünlü oyuncu gülerek anlattı: Onu öptüğüm sahneyi senaryoya ben ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SESSİZ SİNEMANIN DEĞİŞİM DÖNEMİ Öngörülere bakılırsa bu yılın ödül sezonunun iddialı filmlerinden biri Babylon. Yönetmenliğini Damien Chazelle&#39;in üstlendiği&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yerelingundemi.com/magazin/119425/unlu-oyuncudan-buyuk-itiraf-brad-pitt-ile-opusmek-icin-senaryoya-ek-sahne-yazdirmis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü oyuncudan büyük itiraf: Brad Pitt ile öpüşmek için senaryoya ek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpdB8BAk03E_2vNCiEfbx7bDgPNtv6YztKfR05C8Bg4DKpKm2Us79321BCbdfuZ6eM6g9gi0_7" alt="Ünlü oyuncudan büyük itiraf: Brad Pitt ile öpüşmek için senaryoya ek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünyaca ünlü oyuncu Margot Robbie, Brad Pitt ile rol aldığı &#39;Babylon&#39; filminde öpüşme sahnesini senaryoya kendisinin eklettiğini itiraf etti.</p></div>
            </div>
        </a>
        </Template></>;
}