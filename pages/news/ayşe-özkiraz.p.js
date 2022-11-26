import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ayşe Özkiraz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ayşe Özkiraz"/>
        <meta name="description" content="Trending News about Ayşe Özkiraz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ayşe Özkiraz</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/25/2006206/kapak_224021.jpg" alt="Ayşe Özkiraz"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/cerkezkoy-devlet-hastanesinde-1-yildir-gorev-yapan-sahte-doktor-tutuklandi-2006206'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çerkezköy Devlet Hastanesi&#39;nde 1 yıldır görev yapan sahte doktor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsmylz14YLHG8ZI9uiTc_9uFkTOtb9KdwCTDJDsuGmMJu7jQL9RB9YG5ISoShd4AoAcWCYcj93" alt="Çerkezköy Devlet Hastanesi&#39;nde 1 yıldır görev yapan sahte doktor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;ın Çerkezköy ilçesi Devlet Hastanesi&#39;nde yaklaşık 1 yıldır pratisyen hekim olarak görev yapan Ayşe Özkiraz&#39;ın (25) sahte doktor olduğu ortaya&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/devlet-hastanesinde-1-yildir-gorev-yapan-sahte-doktor-tutuklandi-haber-1590900'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Devlet hastanesinde 1 yıldır görev yapan sahte doktor tutuklandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTC7IZfmX5_wv3jL--29qdGQnnERKWUnuKsQ05yqpy7S91KriwlrEo1kyzJkeokYw4a2cYHkZT0" alt="Devlet hastanesinde 1 yıldır görev yapan sahte doktor tutuklandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çerkezköy Devlet Hastanesi&#39;nde yaklaşık 1 yıldır, &quot;pratisyen hekim&quot; sıfatıyla görev yapan Ayşe Özkiraz&#39;ın aslında doktor olmadığı ortaya çıktı.</p></div>
            </div>
        </a><a href='https://www.odatv4.com/saglik/hastanede-akil-almaz-skandal-sahte-doktor-bir-yil-calismis-259906'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hastanede akıl almaz skandal... Sahte doktor bir yıl çalışmış</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnQbxNm7Tgt_rubbKGDY_wPN0KPF1ar7R_2Au2MlUfrmk1B4ISrMPwUFeVq3eBK5TjtOFDBZiF" alt="Hastanede akıl almaz skandal... Sahte doktor bir yıl çalışmış" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İnceleme başlatan hastane yönetimi Ayşe Özkiraz&#39;ın diplomasının sahte olduğunu ve lise mezunu olduğunu fark etti...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/hastanede-skandal-olay-bir-yildir-herkesi-kandiran-sahte-doktor-tutuklandi-3892149'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hastanede skandal olay: Bir yıldır herkesi kandıran sahte doktor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXVXnHVqlZUloIV4EgjEKUplxPNeloAsQFMHzDkkQsSpNfySZ8ngdpdura6cj4LKhh2LOrfpCQ" alt="Hastanede skandal olay: Bir yıldır herkesi kandıran sahte doktor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;ın Çerkezköy ilçesi Devlet Hastanesi&#39;nde yaklaşık 1 yıldır pratisyen hekim olarak görev yapan Ayşe Özkiraz&#39;ın (25) sahte doktor olduğu ortaya çıktı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/devlet-hastanesinde-bir-yildir-gorev-yapiyordu-diplomasi-sahte-cikti-601405h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor ameliyata da girmiş</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQb3kz4mHRBvhgSQ2Ser3hdhJSC91xPOaoanqzuEVSLY5miDFf3Vxlym2ljz7ZWFvVdE-YXKhhg" alt="Sahte doktor ameliyata da girmiş" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;ın Çerkezköy ilçesi Devlet Hastanesi&#39;nde yaklaşık bir yıldır pratisyen hekim olarak görev yapan Ayşe Özkiraz&#39;ın lise mezunu sahte doktor olduğu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/sahte-doktor-tutuklandi-42177286'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor tutuklandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-2IJsU62L3Rlc2MSYQp6JKvuah1794EkckztnEfUzuEyJLal17MS9FS9oW75d2WTGvpHI8An7" alt="Sahte doktor tutuklandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ Çerkezköy Devlet Hastanesi&#39;nde yaklaşık 1 yıldır pratisyen hekim olarak görev yapan Ayşe Özkiraz (25), sahte doktor olduğu anlaşılınca dün tutuklandı.</p></div>
            </div>
        </a>
        </Template></>;
}