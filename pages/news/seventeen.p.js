import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SEVENTEEN</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SEVENTEEN"/>
        <meta name="description" content="Trending News about SEVENTEEN" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SEVENTEEN</h1>
            <Image width={800} height={500} src="https://ogre.natalie.mu/media/news/music/2022/1202/SVT_221126_5.jpg?imwidth=750&imdensity=1" alt="SEVENTEEN"/>
            <h3>Recent News</h3>
            <a href='https://natalie.mu/music/news/502910'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEENが念願のドームツアーの舞台でCARATと叶えた夢 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjzE_u2A45dEuWptEN9o34r8p7kmtnxCj5mbPu8GEQBdNiCqfKEA0scmNVReickg_YvbqdnXwk" alt="SEVENTEENが念願のドームツアーの舞台でCARATと叶えた夢 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SEVENTEENが、日本ドームツアー「SEVENTEEN WORLD TOUR [BE THE SUN] - JAPAN」を東名阪で開催した。</p></div>
            </div>
        </a><a href='https://mdpr.jp/k-enta/detail/3484103'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEVENTEEN、“CARATとの約束の地”夢の日本初ドームツアーで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1CYe6BAF1MpzbM1V7gRqj7qYSc5kuDbiJerhi-Y7YcI5GKLx1Ozr9LrAijAei1nAFF0GiZLc_" alt="SEVENTEEN、“CARATとの約束の地”夢の日本初ドームツアーで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>13人組グループ・SEVENTEEN（S.COUPS、JEONGHAN、JOSHUA、JUN、HOSHI、WONWOO、WOOZI、THE 8、MINGYU、DK、SEUNGKWAN、VERNON、DINO）の、初の日本ドーム&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}