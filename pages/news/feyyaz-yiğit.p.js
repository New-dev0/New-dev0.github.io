import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Feyyaz Yiğit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Feyyaz Yiğit"/>
        <meta name="description" content="Trending News about Feyyaz Yiğit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Feyyaz Yiğit</h1>
            <Image width={800} height={500} src="https://media-cdn.t24.com.tr/media/library/2022/12/1670190905826-sadfsadf.jpg" alt="Feyyaz Yiğit"/>
            <h3>Recent News</h3>
            <a href='https://t24.com.tr/haber/altin-kelebek-odul-toreni-nde-sefo-nun-danscilarina-feyyaz-yigit-in-tepkisi-sosyal-medyada-gundem-oldu,1076737'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altın Kelebek Ödül Töreni&#39;nde Sefo&#39;nun dansçılarına Feyyaz Yiğit&#39;in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQ8w_eqzYuD1KFwnBdpeNsq9E4VR9itTIfb2WBiLNVz467ctIGBYHGM3wLlA6_m4FJrKDvcjja" alt="Altın Kelebek Ödül Töreni&#39;nde Sefo&#39;nun dansçılarına Feyyaz Yiğit&#39;in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>48. Altın Kelebek Ödülleri Zorlu PSM&#39;de düzenlenen törenle sahiplerini buldu. Ödül töreninde en iyi komedi dizisi seçilen Gibi&#39;nin en iyi komedi dizisi erkek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.odatv4.com/magazin/feyyaz-yigit-in-dansa-tepkisi-cok-konusuldu-261088'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feyyaz Yiğit&#39;in tepkisi çok konuşuldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_ub445h7BFRe1KR3-p-WvuKXFQKkVABKgoLhMEEDy9iP18q8KIA_XXpj7YvaGeJ8PJt84Dbc2" alt="Feyyaz Yiğit&#39;in tepkisi çok konuşuldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En İyi Komedi Dizisi Erkek Oyuncu ödülünü “Gibi” dizisinden Feyyaz Yiğit alırken törende gerçekleştirilen dans gösterisine yine Feyyaz Yiğit&#39;in tepkisi&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/altin-kelebek-odulleri-nde-gumus-gerdanindan-firlayarak-disko-topuna-donen-sefo-nun-kostumune-komik-yorumlar-1111891'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Altın Kelebek Ödülleri&#39;nde Gümüş Gerdanından Fırlayarak Disko ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSenKFiVadbynwpkTjLQluvRCNQ5qMgzzBOp1PCdrq3N_xfPQCz1UGw4L0F8WzhFlMlUz0_yLBP" alt="Altın Kelebek Ödülleri&#39;nde Gümüş Gerdanından Fırlayarak Disko ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Altın Kelebek&#39;te kimler ödül aldı? Altın Kelebek ödül sahipleri. Altın Kelebek Sefo sahne performansı. Sefo&#39;ya gelen komik yorumlar.</p></div>
            </div>
        </a><a href='https://www.trhaberler.com/gibinin-yilmazi-feyyaz-yigit-kimdir-nereli-ve-kac-yasinda-haber-637045'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Gibi&#39;nin Yılmaz&#39;ı Feyyaz Yiğit kimdir, nereli ve kaç yaşında?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCnoMrWtolyEXHth1op2uX0Vuf1xKBlff9mNPrygxh9mBFo0lPlRxznMfFmLYwPvnhYpCVWYJn" alt="&#39;Gibi&#39;nin Yılmaz&#39;ı Feyyaz Yiğit kimdir, nereli ve kaç yaşında?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gibi dizisinde canlandırdığı Yılmaz karakteri ile 48. Pantene Altın Kelebek Ödülleri&#39;nde &quot;En İyi Komedi Dizisi Erkek Oyuncu&quot; ödülünü alan Feyyaz Yiğit&#39;in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}