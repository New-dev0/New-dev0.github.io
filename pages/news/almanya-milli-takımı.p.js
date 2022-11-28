import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Almanya Milli Takımı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Almanya Milli Takımı"/>
        <meta name="description" content="Trending News about Almanya Milli Takımı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Almanya Milli Takımı</h1>
            <Image width={800} height={500} src="https://img.piri.net/mnresize/600/-/resim/imagecrop/2022/11/27/11/43/resized_6c700-5217edadaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg" alt="Almanya Milli Takımı"/>
            <h3>Recent News</h3>
            <a href='https://www.yenisafak.com/spor/katarda-almanya-milli-takimina-protesto-mesut-ozilin-posterlerini-actilar-3892393'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katar&#39;da Almanya Milli Takımı&#39;na protesto: Mesut Özil&#39;in posterlerini ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM76jN2l32V-AdXLcOLG83SgTtRwTf2dj--2w1T7g3xf3p1i7Ll-cgDRW7F7I9aacQ3S8EdtDt" alt="Katar&#39;da Almanya Milli Takımı&#39;na protesto: Mesut Özil&#39;in posterlerini ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İspanya-Almanya maçı öncesinde tribünlerde dikkat çeken bir görüntü vardı. Katar&#39;daki futbolseverler, ırkçı saldırılara maruz kalan Mesut Özil&#39;in&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/ispanya-almanya-macina-tribunlerde-mesut-ozil-fotograflariyla-yapilan-eylemler-damga-vurdu-1110240'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya - Almanya Maçına, Tribünlerde Mesut Özil Fotoğraflarıyla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC6w4z65otNVByxRJB_v7r1l5SR8FfoBjaHZjdeBnM1vVYkyNu73q8MaMuAvYcucvZ_nj6OW4Y" alt="İspanya - Almanya Maçına, Tribünlerde Mesut Özil Fotoğraflarıyla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası&#39;nda İspanya ile Almanya&#39;nın karşı karşıya geldiği karşılaşmada en çok konuşulan konulardan biri tribünlerde Mesut Özil fotoğraflarıyla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/katarli-taraftarlarin-almanya-ya-cevabi-mesut-ozil-6383bec6a64145ffd00e8ae9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katarlı taraftarların Almanya&#39;ya cevabı Mesut Özil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR44xjjScnoJx_Lvy-Hsq26Q8gq-InML51RQc2xfKqyynISkSc9xJtBvNBqekyxaNkUFu8hLy7I" alt="Katarlı taraftarların Almanya&#39;ya cevabı Mesut Özil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nda E grubunda İspanya ile Almanya karşılaştı. Mücadelede bazı taraftarlar Mesut Özil fotoğrafını tutarak ve ağızlarını kapatarak poz verdi.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/futbol/ispanya-almanya-macin-katarli-taraftarlar-mesut-ozil-posterleri-acti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya - Almanya maçında Katarlı taraftarlar Mesut Özil posterleri açtı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXl_XPqMcIkIkoishh5MWWbKIWHJ9lLF3uxnDvid0qISdgZfG8TFLJD8c_5k8DoOc8Q_Fb2K6M" alt="İspanya - Almanya maçında Katarlı taraftarlar Mesut Özil posterleri açtı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nda E grubunda İspanya ile Almanya kozlarını paylaştı. Karşılaşmada bazı Katarlı taraftarlar Mesut Özil fotoğrafını tutarak ve ağızlarını&nbsp;...</p></div>
            </div>
        </a><a href='https://spor.haber7.com/dunya-kupasi/haber/3281369-boyle-protesto-gorulmedi-katarda-almanlara-mesut-ozil-soku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Böyle protesto görülmedi! Katar&#39;da Almanlara Mesut Özil şoku</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRS0DdBceCkO7Cob_Nk3gC_tUGW-KbjP42-e3B7fT0zr8gEXYSKoiXOekDOKZWLe9wXQx86kzwi" alt="Böyle protesto görülmedi! Katar&#39;da Almanlara Mesut Özil şoku" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tüm Spor - İspanya-Almanya maçında bazı futbolseverler, tribünde bir elleriyle ağızlarını kapatıp diğer ellerinde Mesut Özil görselleri taşıyarak Almanya&#39;yı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}