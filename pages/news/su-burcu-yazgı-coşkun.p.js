import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Su Burcu Yazgı Coşkun</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Su Burcu Yazgı Coşkun"/>
        <meta name="description" content="Trending News about Su Burcu Yazgı Coşkun" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Su Burcu Yazgı Coşkun</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/2bfc55/640/314/0/0/752/640?u=https://isbh.tmgrup.com.tr/sbh/2022/12/04/atv-yine-odule-doymuyor-muge-anli-kenan-imirzalioglu-ve-kardeslerimin-yildizlari-odulun-sahibi-oldu-1670183279560.jpg&bg=4" alt="Su Burcu Yazgı Coşkun"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/magazin/2022/12/04/atv-yine-odule-doymuyor-muge-anli-kenan-imirzalioglu-ve-kardeslerimin-yildizlari-odulun-sahibi-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATV yine ödüle doymuyor! Müge Anlı, Kenan İmirzalıoğlu ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcgwlHX7xR1eXhyTTglCHO2z0UqizQF0-oBfniQo9_27VqzOJyj7v5VMy2JFr2aqSPkRSkUu-7" alt="ATV yine ödüle doymuyor! Müge Anlı, Kenan İmirzalıoğlu ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu yıl 48&#39;incisi düzenlenen Altın Kelebek Ödülleri&#39;nin 2022 adayları kısa süre önce belli oldu. Ödüle bu yıl, yine ATV damga vurdu. &#39;Müge Anlı ile Tatlı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}