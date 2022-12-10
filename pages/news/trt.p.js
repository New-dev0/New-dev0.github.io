import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TRT</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TRT"/>
        <meta name="description" content="Trending News about TRT" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TRT</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/mR5_GPsCGUmseB6kP8Rqeg.jpg?width=1080&mode=crop&scale=both" alt="TRT"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/ekonomi/trt-genel-muduru-sobaci-turkiye-dunya-icin-sahsiyetli-bir-mucadele-veriyor,NM4S1droM0S1ndMIGR-vgQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRT Genel Müdürü Sobacı: “Türkiye, Dünya için şahsiyetli bir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxjASB71zoKCQTzbWuL_uAN0Xx4Yrtdfj7EjbyjoBM3E3OoxTsQuro_Dq0EaduUeVs26wPpQqS" alt="TRT Genel Müdürü Sobacı: “Türkiye, Dünya için şahsiyetli bir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu yıl İstanbul&#39;da 6&#39;ncısı düzenlenen TRT World Forum&#39;un açılış konuşmasında TRT Genel Müdürü Mehmet Zahid Sobacı, “Tahıl krizinde koridor açan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/gundem/trt-genel-muduru-sobaci-dogru-ve-yalanin-gercek-ve-yanilsamanin-birbiriyle-ic-ice-gectigini-goruyoruz/2759522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRT Genel Müdürü Sobacı: Doğru ve yalanın, gerçek ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqVDtVAWYquLX1S1ZOGVVLNUCNvfzfInzRoCMTJae5xKnOpG8p1IiTXXFanuZ9wu2dDjYxogJo" alt="TRT Genel Müdürü Sobacı: Doğru ve yalanın, gerçek ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sobacı, Hilton İstanbul Bomonti Hotel &amp; Conference Center&#39;ta &quot;Geleceği Şekillendirmek: Belirsizlikler, Gerçekler ve Fırsatlar&quot; temasıyla bu yıl 6&#39;ncısı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/cumhurbaskani-trt-world-forumdan-dunyaya-duyurdu-putin-ve-zelenskiy-ile-bugday-krizini-gorusecegim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cumhurbaşkanı, TRT World Forum&#39;dan Dünyaya Duyurdu: Putin ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoIlU7SaVvAkgYTTyt0G_36D1T7u6_2HkV3_Fm18LcOlGluzCP0VfEv8lI0d9GTPOreVm-RmCq" alt="Cumhurbaşkanı, TRT World Forum&#39;dan Dünyaya Duyurdu: Putin ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>40 ülkeden ve yurt içinden akademisyen, politikacı, gazeteci, sivil toplum kuruluş yetkililerinin katıldığı TRT World Forum&#39;un açılışına Ukrayna Devlet Başkanı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/gundem/cumhurbaskani-erdogan-tahil-krizini-cozmek-icin-putin-ile-gorusecegiz-729569.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cumhurbaşkanı Erdoğan: Tahıl krizini çözmek için Putin ile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2Z1fIKCFpZcVBLUb-LFmab2xTTxh7bJV76QhNJEoLb074yt23a69WDEDAR87g-uRt17h2r1JH" alt="Cumhurbaşkanı Erdoğan: Tahıl krizini çözmek için Putin ile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan, TRT World Forum 2022&#39;nin açılışında konuştu. Cumhurbaşkanı Erdoğan, konuşmasında şunları kaydetti;. Dünyanın 34 farklı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/trt-world-forum-2022-basladi-6271819'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“TRT World Forum 2022” başladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXGkyFgrFgcfLIH6LJhpnFgWyZ_maZ8FxaLcpOUY0pgPlfvjQcdVtrAZXEtY8UrdZwiWmJKxug" alt="“TRT World Forum 2022” başladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liderleri buluşturan TRT World Forum 2022 “Geleceği Şekillendirmek: Belirsizlikler, Gerçekler ve Fırsatlar” temasıyla İstanbul&#39;da başladı.</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/trt-world-forum-2022ye-katilan-vladimir-zelenskiyerdogana-minnettariz-1714438.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRT World Forum 2022&#39;ye katılan Vladimir Zelenskiy, &quot;Erdoğan&#39;a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_Od0WdM9NqocjcMe2GHTwy9n5iU_gqJFF3FLh36QGIrUa7vonZNYbtIKnHfOcgfM8Iihn_j46" alt="TRT World Forum 2022&#39;ye katılan Vladimir Zelenskiy, &quot;Erdoğan&#39;a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TRT World Forum 2022&#39;ye katılan Vladimir Zelenskiy, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın özellikle esir takasında çok yardımcı olduğunu vurguladı ve.</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/gundem/2022/12/09/son-dakika-baskan-erdogandan-trt-world-forumda-onemli-aciklamalar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Başkan Erdoğan&#39;dan TRT World Forum&#39;da önemli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkgLfenLtMHC_6nA3fUUIt8BfKwljc0K636QtO4w2dpRfu92j_IWCsnAMWPfN7QOu466G_jcee" alt="Son dakika: Başkan Erdoğan&#39;dan TRT World Forum&#39;da önemli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberine göre Başkan Recep Tayyip Erdoğan, Geleceği Şekillendirmek: Belirsizlikler, Gerçekler ve Fırsatlar temasıyla İstanbul&#39;da bir otelde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ngazete.com/uzmanlara-gore-trt-world-forum-2022-kuresel-krizlere-cozum-uretmeyi-amacliyor-145634h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uzmanlara Göre &quot;TRT World Forum 2022&quot; Küresel Krizlere Çözüm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSd1HxE6XR9qMhS_bWMdkOpzgTmr9NuvHBycLLjuzNP1oHiHM0M-sRetw3LSSHnTAmLJ29x-V15" alt="Uzmanlara Göre &quot;TRT World Forum 2022&quot; Küresel Krizlere Çözüm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Geleceği Şekillendirmek: Belirsizlikler, Gerçekler ve Fırsatlar&quot; temasıyla 6&#39;ncısı düzenlenen TRT World Forum 2022&#39;ye katılan uzmanlar, forumun,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/gundem/mevlut-cavusoglu-trt-world-forum-2022nin-ikinci-gun-acilis-konusmasini-yapacak-933281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mevlüt Çavuşoğlu “TRT World Forum 2022”nin İkinci Gün Açılış ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRj-YhuNI1j0g3hSchyNEZA4wt0_4pGAprECb0NmUY5h6sJZzV0xT5jqrjLwnevEAUSN7_aogPR" alt="Mevlüt Çavuşoğlu “TRT World Forum 2022”nin İkinci Gün Açılış ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Etkinliğin ilk gününde Cumhurbaşkanı Recep Tayyip Erdoğan, Arnavutluk Başbakanı Edi Rama, Cumhurbaşkanlığı İletişim Başkanı Fahrettin Altun, TRT Genel Müdürü&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}