import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rayo Vallecano</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rayo Vallecano"/>
        <meta name="description" content="Trending News about Rayo Vallecano" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rayo Vallecano</h1>
            <Image width={800} height={500} src="https://cdn.ntvspor.net/67c02c956222469cba137e02d2785779.jpg?crop=0,0,940,529&w=940&h=529&mode=crop" alt="Rayo Vallecano"/>
            <h3>Recent News</h3>
            <a href='https://www.ntvspor.net/futbol/fenerbahce-rayo-vallecano-karsisinda-6385c32066db228e5cb01000'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe, Rayo Vallecano karşısında!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzzkaFzfP-0ENdN-5rEWUbUNtSh_cf3pDbAQ_KkLgMlF4KlowRBRD-WwXyCnNGOWHOXrXiUk3M" alt="Fenerbahçe, Rayo Vallecano karşısında!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futbolda Dostluk Turnuvası, İstanbul&#39;da başlıyor. Turnuvanın ilk maçında Fenerbahçe, Ülker Stadı&#39;nda Rayo Vallecano&#39;yu konuk edecek.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/galatasaray/2022/11/28/galatasaray-rayo-vallecano-maci-ne-zaman-gs-maci-saat-kacta-ve-hangi-kanalda-canli-yayinlanacak-hazirlik-maci'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galatasaray - Rayo Vallecano maçı ne zaman? GS maçı saat kaçta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWo7tkAqnU34uWy84uIYIP_Bk7w1We-ZrF5f6Qqhh4rqACqmaraVcJTVSssB2GILL9jSXh9VZd" alt="Galatasaray - Rayo Vallecano maçı ne zaman? GS maçı saat kaçta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray ile Rayo Vallecano Dünya Kupası arasında hazırlık maçı yapacak. Maç ile ilgili tüm detaylar merak ediliyor ve arama motorlarında araştırılıyor.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/fenerbahce-rayo-vallecano-hazirlik-maci-ne-zaman-saat-kacta-hangi-kanalda-fenerbahce-hazirlik-maci-hangi-kanalda-canli-yayinlanacak-2311698'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe-Rayo Vallecano hazırlık maçı ne zaman, saat kaçta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMw76XwRNM6JN6I0aAKfTRX5AgHwlM3toRRjDYHokvKrhwcgI8gkyZbOlguZ6qlwCGJjMZw6mC" alt="Fenerbahçe-Rayo Vallecano hazırlık maçı ne zaman, saat kaçta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanarya, Kulüpler Birliği Vakfı&#39;nın düzenlediği Dostluk Turnuvası&#39;nda Radamel Falcao&#39;nun formasını giydiği Rayo Vallecano ile karşılaşacak. Jorge Jesus&#39;un, genç&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aspor.com.tr/fenerbahce/2022/11/29/fenerbahce-rayo-vallecano-hazirlik-maci-saat-kacta-fb-maci-ne-zaman-hangi-kanalda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe - Rayo Vallecano hazırlık maçı saat kaçta? FB maçı ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnkuMPmAZ2NuvTSApmB6wEJlDkwsNektTJMqE8CI6t0WuI8lOfOfKAn_z38eFin5pqtgRLaA4X" alt="Fenerbahçe - Rayo Vallecano hazırlık maçı saat kaçta? FB maçı ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jorge Jesus yönetiminde sezona iyi başlangıç yapan, Spor Toto Süper Lig ve UEFA Avrupa Ligi&#39;nde lider durumda olan Fenerbahçe, Dünya Kupası arasında Rayo...</p></div>
            </div>
        </a><a href='https://www.karar.com/spor-haberleri/fenerbahce-rayo-vallecano-hazirlik-maci-ne-zaman-hangi-kanalda-fb-hazirlik-maci-tarihi-ve-mac-saati-1708825'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe-Rayo Vallecano hazırlık maçı ne zaman, hangi kanalda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRr5d1CMtPhb9ljiL388xsbbgItBsWnxIuOJq_7vcpFpOCKZU1VIPwPGwOvIPLO_3_TzFCoiCcS" alt="Fenerbahçe-Rayo Vallecano hazırlık maçı ne zaman, hangi kanalda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 FİFA Dünya Kupası&#39;ndan dolayı lig maçlarına mola verildi. Verilen arayı değerlendirmek isteyen takımlar ise hazırlık maçı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/fenerbahce-villareal-hazirlik-maci-ne-zaman-hangi-gun-ve-hangi-kanalda-3542762-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Rayo Vallecano hazırlık maçı ne zaman, saat kaçta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmWGE7xpcvbPOmdGXZSs5UpY4zfn8NQ6RAtdg6Sc2Hmm-I622rG_vjzOhQnwH8HhNwAU4ZGidf" alt="Fenerbahçe Rayo Vallecano hazırlık maçı ne zaman, saat kaçta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süper Lig&#39;de 2022-2023 sezonu Dünya Kupası arasına lider olarak giren Fenerbahçe, söz konusu arada hazırlık maçlarıyla formunu korumaya çalışacak.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/spor/2022/11/29/fenerbahce-rayo-vallecano-maci-ne-zaman-saat-kacta-fb-vallecano-maci-hangi-kanalda-canli-yayinlanacak'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe - Rayo Vallecano maçı ne zaman, saat kaçta? FB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-d_X04XsD-VSHHf_JqDqW1TG5cGfUCqsHWy-Nqx2X9HmldIOE2OvRNyo-3fi1Ftv03-Ogo2zn" alt="Fenerbahçe - Rayo Vallecano maçı ne zaman, saat kaçta? FB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe maçı için geri sayım sona eriyor. Kulüpler Birliği Vakfı tarafından organize edilen hazırlık maçında Fenerbahçe, İspanyol ekip Rayo Vallecano ile&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}