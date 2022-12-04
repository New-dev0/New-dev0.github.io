import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スポーツ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スポーツ"/>
        <meta name="description" content="Trending News about スポーツ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スポーツ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00000152-kyodonews-000-3-view.jpg?exp=10800" alt="スポーツ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/f1c7bee51bf28ff94fe4663cee3f5f84a46e8719'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>室伏長官「ブラボーな勝利」 W杯で喜びに沸くスポーツ界（共同 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThpVXx_u8i8AyajHw122pvQl1HvWUzFxUYJz99nB3tVBRP7BmqaZVjPTzei-8GavQc5sgxiT3E" alt="室伏長官「ブラボーな勝利」 W杯で喜びに沸くスポーツ界（共同 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（W杯）カタール大会で日本が16強入りしたことを受け、国内スポーツ界も喜びに沸いた。スポーツ庁の室伏広治長官は2日、SNSで「スペイン戦の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a137f1167239224f6a0bd3d75d9038d604245650'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“場外戦”なし！イランサポーターにほっこり（デイリースポーツ）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0EpFOOdmJOIydT7ynKW0OFh1XnHby7THBYTQh6y2PuTuv9mPPisFLxLTiKvMeQb5PhDmF2qAm" alt="“場外戦”なし！イランサポーターにほっこり（デイリースポーツ）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールＷ杯の試合が開催されているスタジアムへの足としてとても便利なドーハメトロ。試合時間が近くなるとスタジアムへの車内は日本のラッシュ並みの混雑になるが、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/99751ee8df113aa72b74d626706b5dc61dac4e5b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スポーツが未来を変える 日本がＷ杯で優勝する唯一の道 びわこ成蹊 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYI0vQG_-u0eKVNCPr5ZGFZNeiZHvbTfJFprO8aPpTCpwPKiCPP53J0jVYiR6wX_GQ2KFa5mq4" alt="スポーツが未来を変える 日本がＷ杯で優勝する唯一の道 びわこ成蹊 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表がドイツ代表に勝利したことで、ワールドカップ（Ｗ杯）カタール大会への注目度が日本中で格段に上がっています。私が指導に携わるびわこ成蹊スポーツ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}