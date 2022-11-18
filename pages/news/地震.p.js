import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>地震</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,地震"/>
        <meta name="description" content="Trending News about 地震" /></Head><Template>
            <h1 style={{fontSize: "30"}}>地震</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00037361-weather-000-3-view.jpg?exp=10800" alt="地震"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/9713cee4a33fb7e060d741db0be71312f8c3eca3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮城県沖でM4.3の地震 最大震度3 津波の心配なし（ウェザー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQou7I404zYVjhVdbMVN9OsnS1A2pAfFZhOgXPVMTBUxJMt9hUmv-ZlPq3SCija89eQcx5z1TIC" alt="宮城県沖でM4.3の地震 最大震度3 津波の心配なし（ウェザー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月18日(金)2時35分頃、宮城県で最大震度3を観測する地震がありました。この地震による津波の心配はありません。 震源地：宮城県沖マグニチュード：4.3 震源の深さ：&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/tokushima/20221118/8020016171.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地震被害を想定 災害廃棄物の仮置き場を設置する訓練 阿波｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsQF3bjLRn25Dxxs6i5A5UvjA5lgV-9C0DPMbyDmov-LT1niJ_qhc8UhzHoz7iALCCxIB0x6F1" alt="地震被害を想定 災害廃棄物の仮置き場を設置する訓練 阿波｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の被害を想定して、災害廃棄物を仮置き場にスムーズに運び入れるための訓練が徳島県阿波市で行われ、参加者は災害廃棄物を持ち込む車の渋滞を防…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/2518abc725edc72952ecffa1f1ee7399ad299043'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>千葉県北西部で地震 東京都で震度3 津波の心配なし（ウェザー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzyQ-V3fvzRP8O3UH0lDF1GApqpWPsH85QU9k9nyY7SZwJ2pJ0rS44Y3dVpQojS3PwbVNmQczl" alt="千葉県北西部で地震 東京都で震度3 津波の心配なし（ウェザー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月17日(木)21時43分頃、東京都で最大震度3を観測する地震がありました。 震源地は千葉県北西部(ちばけんほくせいぶ)で、震源の深さは約70km、地震の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/7e084b30fe8921fadcd22c0200a4fcf0fb47c562'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>後発地震注意情報 12月16日運用開始 防災に生かすためには（IBC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7Ejlvd2DdvvwHum30a542UhldI7b4QpRs97A1vSs3mNjBWOWGEraWNQSjVYpZ2xwZCZ4Eq-y6" alt="後発地震注意情報 12月16日運用開始 防災に生かすためには（IBC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>政府はマグニチュード9クラスの巨大地震の発生に注意を促す、「北海道・三陸沖後発地震注意情報」の運用を12月16日に始めます。それを前に17日、報道機関向けに防災&nbsp;...</p></div>
            </div>
        </a><a href='https://newsdig.tbs.co.jp/articles/-/207153'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮城県で最大震度3の地震 宮城県・石巻市</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRu1aF-g61UotedUp1wl2xjdDQTYJNk4zfBMYd0u_AxqTfGBXOSPd4T3jQT_Mb6YKJGNu6BbjCP" alt="宮城県で最大震度3の地震 宮城県・石巻市" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18日午前2時35分ごろ、宮城県で最大震度3を観測する地震がありました。気象庁によりますと、震源地は宮城県沖で、震源の深さはおよそ60km、地震の規模を示す&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/yamaguchi/20221117/4060015389.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>大規模地震で重油漏れ出す 石油コンビナートで防災訓練 周南｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqqIsIf_Ns1v71-ye25Wstq1NJIhxOxa4vWdTMt_hqz2txDz9UCESjOEtROx9YEm7pXtu4wgVs" alt="大規模地震で重油漏れ出す 石油コンビナートで防災訓練 周南｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>大規模な地震で重油が漏れ出したという想定の訓練が、周南市の石油コンビナートで行われ、企業や関係機関の担当者が災害時の手順を確認しました。 …</p></div>
            </div>
        </a><a href='https://www.kyoto-np.co.jp/articles/-/921493'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震度＝気象庁発表（１７日２１時４７分） ：地震（小規模）</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="震度＝気象庁発表（１７日２１時４７分） ：地震（小規模）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１７日午後９時４３分ごろ地震がありました。 気象庁によると、震源地は千葉県北西部北緯３５．６度、東経１４０．１度で、震源の深さは約７０キロ…</p></div>
            </div>
        </a><a href='https://www.okinawatimes.co.jp/articles/-/1059470'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震度＝気象庁発表（１８日２時３８分） ：地震（小規模）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjFbsB_Rxl0BTtlEiWfx61XOoU0X5-lUTYjnOXC4Ah-sZEU1dmxQrI2dC-TMjKU0DjadP5kgmx" alt="震度＝気象庁発表（１８日２時３８分） ：地震（小規模）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>各地の震度は次の通り。 震度３＝石巻桃生（宮城）▽震度２＝一関花泉、一関千厩、一関東山、一関室根、一関藤沢（岩手）仙台&nbsp;...</p></div>
            </div>
        </a><a href='https://www.saga-s.co.jp/articles/-/949315'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震度＝気象庁発表（１８日３時３６分） ：地震（小規模）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvwOMdTzlp6IWk-lBMiY7ERRWsQJEwuIinXewzqtbdZbD0FKrGXt0iL5mwr__xVM-5Vy4OO26a" alt="震度＝気象庁発表（１８日３時３６分） ：地震（小規模）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１８日午前３時３３分ごろ地震がありました。 気象庁によると、震源地は根室半島南東沖北緯４３．２度、東経１４６．１度で、震源の深さは約５０キロ。</p></div>
            </div>
        </a><a href='https://www.fnn.jp/articles/-/446745'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【地震】静岡県内で震度1 千葉県北西部を震源とする最大震度3の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWRHEvTsJOHW6PB5Fvy7QInPjCnK6_9XbkxWCk4zm9Di5pvB1RMUwna2vKYZ_61wvqdj_eW9-m" alt="【地震】静岡県内で震度1 千葉県北西部を震源とする最大震度3の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月初めまでは晴れの日少なく じわじわと本格的な寒さに【静岡・ただいま天気 11/17】. テレビ静岡. 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}