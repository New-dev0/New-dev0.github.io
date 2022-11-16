import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Laurent Baffie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Laurent Baffie"/>
        <meta name="description" content="Trending News about Laurent Baffie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Laurent Baffie</h1>
            <Image width={800} height={500} src="https://resize.programme-television.ladmedia.fr/img/var/premiere/storage/images/tele-7-jours/news-tv/j-ai-souffert-le-martyre-laurent-baffie-avoue-avoir-eu-recours-a-la-chirurgie-esthetique-4696901/101196415-1-fre-FR/J-ai-souffert-le-martyre-Laurent-Baffie-avoue-avoir-eu-recours-a-la-chirurgie-esthetique.jpg" alt="Laurent Baffie"/>
            <h3>Recent News</h3>
            <a href='https://www.republicain-lorrain.fr/pour-sortir/loisirs/Spectacle-theatre-conte/Theatre-boulevard/Lorraine/Moselle/Lorry-les-metz/2022/11/24/Toc-toc-de-laurent-baffie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Toc toc » de Laurent Baffie : Théâtre boulevard à Lorry-lès-Metz</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="« Toc toc » de Laurent Baffie : Théâtre boulevard à Lorry-lès-Metz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spectacle proposé par les Têtes à Plapp&#39; de l&#39;Association Plappeville Loisirs en partenariat avec la commune de Lorry-lès-Metz. Une comédie pure écrite par&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-television.org/news-tv/J-ai-souffert-le-martyre-Laurent-Baffie-avoue-avoir-eu-recours-a-la-chirurgie-esthetique-4696901'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;J&#39;ai souffert le martyre&quot; : Laurent Baffie avoue avoir eu recours à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKQL7Y5lQyTB4b0r_2Xb5HwytolFECGeS-DaQnSMgQgBCpxBL-qE5lhLC3guMwlwqYPEWSVF6w" alt="&quot;J&#39;ai souffert le martyre&quot; : Laurent Baffie avoue avoir eu recours à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laurent Baffie était l&#39;invité de Kyan Khojandi, sur YouTube dans l&#39;émission &quot;Un bon moment&quot;, il y a deux semaines. Et l&#39;humoriste a révélé avoir subi une&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}