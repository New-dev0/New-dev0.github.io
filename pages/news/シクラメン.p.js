import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>シクラメン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,シクラメン"/>
        <meta name="description" content="Trending News about シクラメン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>シクラメン</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221207-00010001-shimint-000-1-view.jpg?exp=10800" alt="シクラメン"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/1622771404ead50f9265f5cbd587b3d91ba6fc6c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>シクラメン師走彩る 安曇野市穂高のアルプガーデン（市民タイムス ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0CwS0xONFVqZ_wbx-WsZvCTLjZHRTWQ4XXYYYu1okIGVmkjljmrxQ1OrBXz0_QeoAh0YtC8OL" alt="シクラメン師走彩る 安曇野市穂高のアルプガーデン（市民タイムス ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>長野県安曇野市穂高有明にある農事組合法人・アルプガーデンの農場に、今年も豊富にシクラメンの鉢がそろった。約40種の多彩な花が咲き誇り、年末年始の贈り物などに&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/84940a4cd93aab1a4fa2a3713d4e3caa8e9bbe17'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>シクラメン出荷最盛期 奈良県葛城市の農園 - 12月7日は大雪（奈良 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaHt6rrp5J9ouOdEaYSIIOZN-YVqiZW5UzscgpO16t9ErOyeZ78FRl3ZFKrpZQcBNKIwTRKsHW" alt="シクラメン出荷最盛期 奈良県葛城市の農園 - 12月7日は大雪（奈良 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>きょう7日は二十四節気の一つ、大雪。奈良市内では3日、初霜が観測されるなど、この時期らしい寒さが続いている。11日は師走恒例の奈良マラソンが同市内などで開催され&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}