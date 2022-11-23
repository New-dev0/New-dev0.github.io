import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hadise</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hadise"/>
        <meta name="description" content="Trending News about Hadise" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hadise</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/22/2005296/kapak_230002.jpg" alt="Hadise"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/hadise-isyan-etti-15-senedir-bir-grup-tarafindan-taciz-tehdit-ediliyorum-2005296'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise isyan etti: &#39;1,5 senedir bir grup tarafından taciz, tehdit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgQhBCt73ctuwv-jKlN5Phb_98mHp3ZqMvJqO-_lj48MBIXe2Exu81ykO0Zpq_Qlnu7oLcajqG" alt="Hadise isyan etti: &#39;1,5 senedir bir grup tarafından taciz, tehdit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şarkıcı Hadise, Özel hayatıma resmen tecavüz ediyor bu insanlar. Şantaj, tehdit… Ben Hadise&#39;yim diye rahatlıkla bunu yapabileceklerini mi düşünüyorlar?</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/hadise-sessizligini-bozdu-unlu-sarkici-hadiseden-olay-yaratacak-aciklama-bana-tam-bir-bucuk-yildir-santaj-yapiliyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise sessizliğini bozdu! Ünlü şarkıcı Hadise&#39;den olay yaratacak ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9Rv0jBu1zzUDjHlqsZ-Y2Fm2Eixq8YqnZqrbno2odBD5864cmqHAi3YSJ56qeywab5mhUGaap" alt="Hadise sessizliğini bozdu! Ünlü şarkıcı Hadise&#39;den olay yaratacak ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü şarkıcı Hadise, Mehmet Dinçerler ile 5 aylık evliliğini geçtiğimiz aylarda sonlandırdı. Evliliği süresinde ve sonrasında ortaya atılan iddialara karşı.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/magazin/mehmet-dinclerlerden-bosanan-hadise-paraya-para-demiyor-simdi-de-acun-ilicali-projesi-ile-gundemde-sosyal-medya-calkalandi-oyle-bir-ise-imza-atti-ki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mehmet Dinçlerler&#39;den boşanan Hadise paraya para demiyor! Şimdi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3xyn8JtAekC-urE9F24Wp3CsUoN9AppgKSi6JG1ogruF2dKd0sHsiISNJTZ_RyjFfwzGMBFMd" alt="Mehmet Dinçlerler&#39;den boşanan Hadise paraya para demiyor! Şimdi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Ses Türkiye yarışması ile yıllarca birlikte çalışan Acun Ilıcalı ve Hadise&#39;nin şimdilerde yeni bir proje için görüştükleri iddia edildi.</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/magazin/hadise-isyan-etti-bu-resmen-ozel-hayatima-tecavuz-2587281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise isyan etti: Bu resmen özel hayatıma tecavüz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOjLq8e2kE2u-UvNmOKDVczmYW0gynwUZjsteXDW08_ca8AHadeqyEKPoa7JTz1uCTvQlW7Ufx" alt="Hadise isyan etti: Bu resmen özel hayatıma tecavüz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magazin Haberleri - Son dönemin en çok konuşulan isimlerinden biri olan Hadise, Mehmet Dinçerler ile evliliği süresinde ve boşanma sonrası ortaya atılan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/magazin/hadiseden-taciz-ve-santaj-paylasimi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadiseden taciz ve şantaj paylaşımı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1Oz42IcqZB5Xj9NHQigNo2oNNwflpQMs3H_KDQNlN94ZUJlaGunnyvd9S7UFKHis7iliL6Qgs" alt="Hadiseden taciz ve şantaj paylaşımı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bana Roberto Carlos bacaklı diyenler oldu, obez diyenler oldu ve daha neler söylendi ama ben hep sustum. Asla polemiğe girmedim. Ben her şeyden önce bir KADINIM&nbsp;...</p></div>
            </div>
        </a><a href='https://halktv.com.tr/gundem/hadise-adalet-bakanina-seslendi-ozel-hayatima-tecavuz-ediyorlar-704141h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise Adalet Bakanı&#39;na seslendi: Özel hayatıma tecavüz ediyorlar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhYcuojE-wy35KT4icUl_VxnppgfBcK-ZLLhRHgyL0e5E98elWCuwx3Q-9nwWFfxCm4F3DW3Et" alt="Hadise Adalet Bakanı&#39;na seslendi: Özel hayatıma tecavüz ediyorlar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şarkıcı Seren Serengil, ABD&#39;de kara para aklamaktan tutuklanan Rıza Zarrab&#39;la Şarkıcı Hadise arasında ilişki olduğunu iddia etti.</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/hadise-bu-mesajim-tehdit-ve-taciz-edilen-tum-kadinlara-susmayin-ben-de-susmuyorum-ve-asla-susmayacagim,1074180'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise: Bu mesajım tehdit ve taciz edilen tüm kadınlara; susmayın ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7nXPUHNUdzpQCdCjwyA3Jv_tK5ItqOSuDTwiT4g8leCGG5-wkJ9vrrwGs3cCOlK6q_PoYLS1C" alt="Hadise: Bu mesajım tehdit ve taciz edilen tüm kadınlara; susmayın ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Geçtiğimiz günlerde Mehmet Dinçerler&#39;den boşandıktan sonra ilk kez açıklama yapan şarkıcı, magazin programlarının kontrol altına alınması gerektiğini ifade&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/hadise-den-olay-aciklamalar-taciz-ve-tehdit-ediliyorum-diyen-hadise-rtuk-ve-aile-ve-sosyal-hizmetler-bakanligini-da-etiketledi-431273-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise&#39;den olay açıklamalar! &quot;Taciz ve tehdit ediliyorum&quot; diyen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1QNNEq3d3RF1o3OrYRnMQr662lD1ZPfyB0RkpP5pvuBAsRub58qbBtsTwq3CLsOZ6LnXo2ks1" alt="Hadise&#39;den olay açıklamalar! &quot;Taciz ve tehdit ediliyorum&quot; diyen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hadise&#39;den olay açıklamalar! &quot;Taciz ve tehdit ediliyorum&quot; diyen Hadise RTÜK ve Aile ve Sosyal Hizmetler Bakanlığını da etiketledi. 22.11.2022 22:28 | Son&nbsp;...</p></div>
            </div>
        </a><a href='https://haberlerankara.com/foto/12587133/hadisenin-eski-esi-mehmet-dincerler-hakkinda-sok-iddia-rawan-bin-hussainle-sevgili-olma-karsiliginda-5-bin-dolar-odemis-sonunda-bunu-da-yapti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadise&#39;nin Eski Eşi Mehmet Dinçerler Hakkında Şok İddia! Rawan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKMZJY8OFANBUorkYchgadUawxAHqj29nkHhI7DTpDQjVBZ1qQaUi9wcYL-w-eU59_haHZARBn" alt="Hadise&#39;nin Eski Eşi Mehmet Dinçerler Hakkında Şok İddia! Rawan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ünlü pop şarkıcısı Hadise ile yaşadığı sansasyonel ayrılık sürecinin ardından yeni bir aşka yelken açması ile dikkat çeken ünlü iş insanı Mehmet Dinçerler,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}