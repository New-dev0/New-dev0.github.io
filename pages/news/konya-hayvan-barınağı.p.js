import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Konya Hayvan Barınağı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Konya Hayvan Barınağı"/>
        <meta name="description" content="Trending News about Konya Hayvan Barınağı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Konya Hayvan Barınağı</h1>
            <Image width={800} height={500} src="" alt="Konya Hayvan Barınağı"/>
            <h3>Recent News</h3>
            <a href='https://www.evrensel.net/haber/475484/konya-hayvan-barinaginda-bir-kopek-vahsice-olduruldu-2-kisi-tutuklandi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konya Hayvan Barınağında bir köpek vahşice öldürüldü, 2 kişi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcE-cuGWVX6REkzMB8W86R4QyArkdVBxfHYvEwwY4SJuImbrbe674PGqRVZ2TBo2aNV425UToY" alt="Konya Hayvan Barınağında bir köpek vahşice öldürüldü, 2 kişi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konya Barosu Hayvan Hakları Komisyon Başkanı avukat Ayşegül Başkoçakçiftçi Konya Büyükşehir Belediyesi&#39;nin de olayda yüzde yüz kusurlu olduğunu belirterek, &quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/gundem/2022/11/25/konyada-kopek-katliami-sorusturma-baslatildi-konya-hayvan-barinaginda-son-durum-ne-tepki-ceken-goruntuler'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konya&#39;da köpek katliamı! SORUŞTURMA BAŞLATILDI! Konya ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfBbKdBzRSDCNCBSpSTKb6d1k_zAJk2i8UlyDYV-OBGelJqjUxYWTl520kQVqi1wKjL5eUPEh3" alt="Konya&#39;da köpek katliamı! SORUŞTURMA BAŞLATILDI! Konya ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konya barınak olayı nedir sorusunun cevabı merak konusu oldu. Konya&#39;da Hayvan Rehabilitasyon Merkezi&#39;nde bir görevlinin köpeği kafasına kürekle vurarak&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/konyada-vahset-barinaktaki-kopekleri-kurekle-katlediyorlar-2005877'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konya&#39;da vahşet: Barınaktaki köpekleri kürekle katlediyorlar!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ26gTsi_4i7AlDCNFt-SWuyjlqEpIvFSMbLlfBAUAXXy4vuJut9uhdMgNcGpPnk04DseKaROy4" alt="Konya&#39;da vahşet: Barınaktaki köpekleri kürekle katlediyorlar!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rock müzik şarkıcısı Hayko Cepkin&#39;in sosyal medya hesabından yaptığı paylaşımda, Konya Hayvan Barınağı&#39;ndaki köpeklerin, barınak görevlileri tarafından&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/konyadaki-barinakta-yasanan-vahsete-izmirden-tepki-barinaklariniz-kan-kokuyor-2006177'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konya&#39;daki barınakta yaşanan vahşete İzmir&#39;den tepki ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpjteRB49Ez7qQ8nb1UO9Nht0K40lfBcq3kv9FeCA3J-_0r2-vHfkzVeUyjHK8gVlEjyDtRvx4" alt="Konya&#39;daki barınakta yaşanan vahşete İzmir&#39;den tepki ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzmir Barosu&#39;nun çağrısıyla bugün Konak Türkan Saylan Kültür Merkezi önünde bir araya gelen hayvanseverler, Konya Büyükşehir Belediyesi Hayvan Barınağı ile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/konyada-kopek-olumu-burasi-barinak-degil-hapishane-haber-1590799'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konya&#39;da köpek ölümü: Burası barınak değil hapishane...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9RWiu006IAq2FHWq75Z3R60nIp_Zhhc4OnUMwYoo3IckGyX_4uhcxnlc7N0gLYbqpifRn-Jko" alt="Konya&#39;da köpek ölümü: Burası barınak değil hapishane..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konya Büyükşehir Belediyesi Hayvan Rehabilitasyon Merkezi&#39;nde bir köpeğin ölümü ile ilgili iki kişi tutuklandı. Şefkat-Der Genel Başkanı,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/gundem/turkiyeyi-sarsan-goruntu-konyadaki-vahsette-2-kisi-tutuklandi-6862762'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;yi sarsan görüntü! Konya&#39;daki vahşette 2 kişi tutuklandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf9zCTeIncDJnr0pbHpyojzgXWu1GkTnDWSB2oC36FR8AFL_LmPFBEZHcLbqSHxkzaxwFckjng" alt="Türkiye&#39;yi sarsan görüntü! Konya&#39;daki vahşette 2 kişi tutuklandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konya&#39;da Konya Büyükşehir Belediyesi&#39;nden yapılan açıklamada Hayvan Rehabilitasyon Merkezi&#39;ndeki görevlinin bir köpeğe elindeki kürekle vurarak ölümüne neden&nbsp;...</p></div>
            </div>
        </a><a href='https://haberdairesi.com/konya/emine-erdogandan-konya-hayvan-barinagi-aciklamasi-84783h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emine Erdoğan&#39;dan Konya hayvan barınağı açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1KfAakj0wjn65RTJA0DYNxrABpE1Wzhi1xm5CsyL6RhyX5oIkv-2b9wRJC7EdfH_ij3k34upW" alt="Emine Erdoğan&#39;dan Konya hayvan barınağı açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın eşi Emine Erdoğan, Konya&#39;da hayvan barınağında köpek telef edilmesine ilişkin sosyal medya hesabından paylaşımda&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}