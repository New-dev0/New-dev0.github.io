import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kurak Günler</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kurak Günler"/>
        <meta name="description" content="Trending News about Kurak Günler" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kurak Günler</h1>
            <Image width={800} height={500} src="https://static.birgun.net/resim/haber-detay-resim/2022/12/08/bakanliktan-skandal-karar-kurak-gunler-filmine-verdigi-finansal-destegi-faiziyle-geri-istedi-1097673-5.jpg" alt="Kurak Günler"/>
            <h3>Recent News</h3>
            <a href='https://www.birgun.net/haber/bakanliktan-skandal-karar-kurak-gunler-filmine-verdigi-finansal-destegi-faiziyle-geri-istedi-412883'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakanlıktan skandal karar: &#39;Kurak Günler&#39; filmine verdiği finansal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfIng8eV_0hDbLE3v2n5seZoVn9KUgU8w7PUXm6X83QLTz4lvnSw925m-jDlNs_vwMRwG6nlRm" alt="Bakanlıktan skandal karar: &#39;Kurak Günler&#39; filmine verdiği finansal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kültür ve Turizm Bakanlığı Sinema Genel Müdürlüğü, yönetmen Emin Alper&#39;in son filmi &#39;Kurak Günler&#39;e verdiği finansal yapım desteğini faiziyle birlikte geri.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/kultur-bakanligi-kurak-gunlere-verdigi-fonu-geri-istedi-emin-alper-isyan-etti-tehdit-hayata-gecirildi-2010079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kültür Bakanlığı &#39;Kurak Günler&#39;e verdiği fonu geri istedi, Emin Alper ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4qGn7meEdcQ8WJCKFeZCbaTDj21T6us33uuj-l4oh1gfeIYw8mfG1-Cd3yaMbn8Hoj1Y6b93j" alt="Kültür Bakanlığı &#39;Kurak Günler&#39;e verdiği fonu geri istedi, Emin Alper ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yönetmen Emin Alper, Kültür ve Turizm Bakanlığı&#39;nın Kurak Günler filminin çekimleri için verdiği destek fonunun geri istendiğini duyurdu.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/kurak-gunler-filminin-konusu-nedir-kurak-gunler-filminin-oyunculari-kimlerdir-1112842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kurak Günler Filminin Konusu Nedir? Kurak Günler Filminin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRK2GwrNEyKQfW4ZXM2kfJ5h1Y_XpbHf8M1V_EoCWh9G7SMx0U7ufHC4kow5L7lJeivH16gocQv" alt="Kurak Günler Filminin Konusu Nedir? Kurak Günler Filminin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yakın zamanda sanatseverler buluşacak olan ve afişiyle büyük ses getiren Kurak Günler filmi, son günlerden gündemden düşmüyor. Emin Alper imzalı filmin&nbsp;...</p></div>
            </div>
        </a><a href='https://t24.com.tr/video/kurak-gunler-vizyonda-bir-kasabaya-yerlestirilen-turkiye-onlardan-degilsen-neler-olur,51238'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kurak Günler vizyonda | Bir kasabaya yerleştirilen Türkiye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLA58-XT57Xf5adPJn_8tOBhkpRbsQjq68tUhUnZAEzDpgOL-PyeRuUJi7BNp2x2H_DPZYQVp7" alt="Kurak Günler vizyonda | Bir kasabaya yerleştirilen Türkiye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filmin yönetmeni Emin Alper, oyuncuları Selin Yeninci, Selahattin Paşalı, Ekin Koç Muammer Brav&#39;la Ekşın&#39;ın konuğu oldu.</p></div>
            </div>
        </a><a href='https://www.evrensel.net/haber/476469/iktidar-medyasi-hedef-gostermisti-bakanlik-kurak-gunler-filmine-verilen-destegi-geri-istedi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İktidar medyası hedef göstermişti, Bakanlık &#39;Kurak Günler&#39; filmine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjcDge7Ul10SY-ZpO7QN4iAScLm0u19hpFr2RJNCcYaTXUpZy5XeH0JTtRmYI0CLEyTw5csTK6" alt="İktidar medyası hedef göstermişti, Bakanlık &#39;Kurak Günler&#39; filmine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kültür ve Turizm Bakanlığı iktidar medyasının hedef gösterdiği Emin Alper&#39;in filmi Kurak Günler&#39;e verilen desteği faiziyle geri istedi.</p></div>
            </div>
        </a><a href='https://yesilgazete.org/kultur-bakanligi-kurak-gunlere-verilen-destek-fonunu-faiziyle-geri-istedi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kültür Bakanlığı, &#39;Kurak Günler&#39;e verilen destek fonunu faiziyle geri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPlwJUg_sW25BgmdO8fC_9w7Ri7YzKb4i0BAV0OoaOtOAoZX1-m8HdKf86aTd1MWZR_zwGc82I" alt="Kültür Bakanlığı, &#39;Kurak Günler&#39;e verilen destek fonunu faiziyle geri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filmin senarist ve yönetmeni Emin Alper ile yapımcısı Nadir Öperli&#39;nin konuyla ilgili olarak ortak yaptığı açıklamada, seyircileri Kurak Günler&#39;i 9 Aralık&nbsp;...</p></div>
            </div>
        </a><a href='https://m.bianet.org/bianet/sanat/271136-se-yap-kurak-gunler-filmine-yapilan-sansurdur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BAKANLIK DESTEĞİNİ FAİZİYLE GERİ İSTEDİ: SE-YAP: &#39;Kurak ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPtrMdtyXK8FVIEiZ7fN5miedCg3LafhbM4zgKYwq9f6ysFeDlAgPWpvjQBgT1S-ynh2DXl64g" alt="BAKANLIK DESTEĞİNİ FAİZİYLE GERİ İSTEDİ: SE-YAP: &#39;Kurak ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sinema Eseri Yapımcıları Meslek Birliği&#39;nin yanı sıra sektör temsilcileri, Emin Alper&#39;in filminden desteğin geri istenmesine tepki gösterdi. İstanbul - BİA&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}