import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>フォートナイト</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,フォートナイト"/>
        <meta name="description" content="Trending News about フォートナイト" /></Head><Template>
            <h1 style={{fontSize: "30"}}>フォートナイト</h1>
            <Image width={800} height={500} src="https://mi-mollet.com/mwimgs/b/2/-/img_b28450881c5c79b03a98850b16aa1e95454959.jpg?rd=202207271621" alt="フォートナイト"/>
            <h3>Recent News</h3>
            <a href='https://mi-mollet.com/articles/-/39562?layout=b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「うちはゲーム禁止！」から一転。フォートナイトにどハマりした ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeefmlfa-ykMh-Rfmb1epC31rJ1c3FpHSe4vuOiLpg5pjC0Fb7NeevrmTT38DFTLhL2bOzz1cP" alt="「うちはゲーム禁止！」から一転。フォートナイトにどハマりした ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>小籔千豊（こやぶ・かずとよ）さん吉本興業所属のお笑い芸人。1973年生まれ。吉本新喜劇の座長を15年以上にわたり務めただけでなく、俳優やバンド活動など多方面で活躍する&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}