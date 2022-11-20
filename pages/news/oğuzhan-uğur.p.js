import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oğuzhan Uğur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oğuzhan Uğur"/>
        <meta name="description" content="Trending News about Oğuzhan Uğur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oğuzhan Uğur</h1>
            <Image width={800} height={500} src="https://i01.sozcucdn.com/wp-content/uploads/2022/11/19/iecrop/detay-kurtarildi-kopya-2_16_9_1668848106-670x371.jpg" alt="Oğuzhan Uğur"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/2022/gundem/oguzhan-ugur-gozaltina-alindi-7488640/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oğuzhan Uğur gözaltına alındı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbcHliyp9BJvHTR6byIPSzijrGAEdtw943_plV9mZVQhb1gnvUwbX9ZS5zonetV82Tuh9WW9-4" alt="Oğuzhan Uğur gözaltına alındı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oğuzhan Uğur gözaltına alındı - Sosyal medya fenomeni Oğuzhan Uğur, sosyal medya hesabından &#39;Bu defa Angara&#39;da yakalandım&#39; diyerek gözaltına alındığını&nbsp;...</p></div>
            </div>
        </a><a href='https://www.habererk.com/oguzhan-ugurdan-gozalti-paylasimi-bu-kez-angarada-yakalandim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oğuzhan Uğur&#39;dan gözaltı paylaşımı: Bu kez Angara&#39;da yakalandım</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYf-pReJ2uQT9wtTzGa07tx4-RhJRSxXBleJLvkf_EAL0gOSVBvxX16G2vFDvqCCvc21vDU9mh" alt="Oğuzhan Uğur&#39;dan gözaltı paylaşımı: Bu kez Angara&#39;da yakalandım" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sosyal medya fenomeni Oğuzhan Uğur, Ankara&#39;da gözaltına alındığını açıkladı. Gözaltına alındığını yine sosyal medyadan duyuran Uğur, daha sonra serbest&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/oguzhan-ugur-gozaltina-alindi-polis-arkadaslar-efsaneydi-1108278'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oğuzhan Uğur Gözaltına Alındı: &#39;Polis Arkadaşlar Efsaneydi&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHbKgkym-7v3fjyILjs7k53xq7htK8KiMnxUoCQwfnXN24K0kqRcGpmJpAU0_5-_e3M39VOeoW" alt="Oğuzhan Uğur Gözaltına Alındı: &#39;Polis Arkadaşlar Efsaneydi&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sosyal medya fenomeni Oğuzhan Uğur, Ankara&#39;da gözaltına alındığını açıkladı. Uğur, karakoldaki işlemleri sonrasında serbest bırakıldı.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/gokhan-cira-nin-ifsa-mesajlarindan-gozaltina-alinan-oguzhan-ugur-a-gunun-son-dakika-magazin-haberleri-1108335'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gökhan Çıra&#39;nın İfşa Mesajlarından Gözaltına Alınan Oğuzhan Uğur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsj2zyHsrl71ILpHPAsSBQclOPtHl0x0RVdRw9OROHpqHVDAtjHwiNX6yYvepcAS0MYmFg7Upm" alt="Gökhan Çıra&#39;nın İfşa Mesajlarından Gözaltına Alınan Oğuzhan Uğur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ayşe Bade, Twitter hesabı üzerinden Selin Ciğeri&#39;yle ikinci kez boşanan Gökhan Çıra&#39;nın kendisine attığını iddia ettiği mesajları ifşaladı.</p></div>
            </div>
        </a><a href='https://www.canlihaber.com/haber/12570698/oguzhan-ugur-gozaltina-alindi-bu-defa-angarada-yakalandim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oğuzhan Uğur gözaltına alındı: Bu defa Angara&#39;da yakalandım</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcQjge2-9Tu1CU4LeHKBOF_g6Ff6l7FK0nKoKkV5KofaAzLf8oh88FmwBJNFv4ji8vsYJtijZx" alt="Oğuzhan Uğur gözaltına alındı: Bu defa Angara&#39;da yakalandım" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>YouTuber ve şarkıcı Oğuzhan Uğur, Ankara&#39;da gözaltına alındığını bildirerek, &quot;Çayımızı içtik çıktım, iyiyim teşekkürler&quot; dedi.</p></div>
            </div>
        </a>
        </Template></>;
}