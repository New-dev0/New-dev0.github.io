import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yıldız Kenter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yıldız Kenter"/>
        <meta name="description" content="Trending News about Yıldız Kenter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yıldız Kenter</h1>
            <Image width={800} height={500} src="https://www.diken.com.tr/wp-content/uploads/2019/11/yildiz-kenter-dha.jpg" alt="Yıldız Kenter"/>
            <h3>Recent News</h3>
            <a href='https://www.diken.com.tr/tiyatronun-cesur-ve-parlak-yuzuydu-yildiz-kenter-aniliyor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tiyatronun cesur ve parlak yüzüydü: Yıldız Kenter anılıyor - Diken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQV_NrToceQddXoKyhJuk1k_zuXTKws3wrIBl8wFXmm4nqK1F19MX97w6-PcmZYn1MuQvt74Y1X" alt="Tiyatronun cesur ve parlak yüzüydü: Yıldız Kenter anılıyor - Diken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17/11/2022 - Büyük bir aşkın hakim olduğu evde başlayan hayat, beş parasız geçen çocukluk, tiyatro tarihine geçen başarıları bir sanat kariyeri.</p></div>
            </div>
        </a><a href='http://www.kanalb.com.tr/haber.php?HaberNo=168954'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanal B - Türk tiyatrosunun yıldızı: Yıldız Kenter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwapRYua770Nc-lD6rEyCrt-R4zf6thuQk6FELAhcpt0KVg8XTjsCAcV56YoerEycmHOtMaJlL" alt="Kanal B - Türk tiyatrosunun yıldızı: Yıldız Kenter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kariyeri boyunca 100&#39;ün üzerinde tiyatro oyunu, film ve dizide rol alan, 100&#39;den fazla oyun sahneye koyan sanatçı, Türk sinema ve tiyatrosuna çok sayıda&nbsp;...</p></div>
            </div>
        </a><a href='https://www.denizliekspres.com.tr/tiyatronun-sahane-kadini-yildiz-kenter/40894/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TİYATRONUN ŞAHANE KADINI; YILDIZ KENTER</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-qlpWOZM0IYO1gTQ7kn-71HvD03HKRKuZDEoi_0atmepvNeZ8fFoUTdWcTSOGagK924TuZZ1d" alt="TİYATRONUN ŞAHANE KADINI; YILDIZ KENTER" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Sahneye çıkıp şöyle bir baktığım zaman bütün dünyayı kucaklıyormuşum gibi geliyor! Sahne ve hayat, birbirinin yansımasıdır.”.</p></div>
            </div>
        </a><a href='https://www.habernediyor.com/kultur-sanat/turk-tiyatrosundan-bir-yildiz-kenter-gecti-h89879.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türk tiyatrosundan bir Yıldız Kenter geçti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkeyECIKNXnwuLdDo83hDMWzPoCuaE1LT4AL0JCpB3_C0yWkMySm_ZO1DWToI2ozXOgYNS77OU" alt="Türk tiyatrosundan bir Yıldız Kenter geçti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çok sayıda usta ismi Türk tiyatrosuna kazandıran Yıldız Kenter, 3 yıl önce bugün vefat etti. Rol aldığı sinema filmler, sahnelediği tiyatro oyunları ve&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}