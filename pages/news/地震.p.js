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
            <Image width={800} height={500} src="https://storage.tenki.jp/storage/static-images/forecaster_diary/image/2/20/205/20562/main/20221118104359/large.jpg" alt="地震"/>
            <h3>Recent News</h3>
            <a href='https://tenki.jp/forecaster/deskpart/2022/11/18/20562.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>昨夜からきょう未明 関東と東北で震度3の地震相次ぐ あらためて ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBO5PmUFUYR1HKZfNcWay6TQ5OdVJ6l1iYBMiTYBNdsP__ZDtkvdtd5e0J1i5FCWg9xgCA90r5" alt="昨夜からきょう未明 関東と東北で震度3の地震相次ぐ あらためて ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>昨夜17日からきょう18日未明にかけて、千葉県と宮城県沖を震源とする地震が発生し、それぞれ最大震度3を観測しました。いま一度、地震への備えを進めておきましょう。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/66511660730b779a80b1e30a1d125b89cf5e36eb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>リニア新幹線は南海トラフ地震に耐えられるか（JBpress）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRx2knR9zYqiwk2yKpS9LFaUPGaDrFcT9D9qug3F1uS8P2kh2fcjGarUuPAGswh6YVyeb2Pb5b2" alt="リニア新幹線は南海トラフ地震に耐えられるか（JBpress）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2011年3月11日の東日本大震災以降、震度6以上の地震は30件以上に及ぶ。世界の地震の約2割は日本周辺で発生していると言われ、近い将来の発生の切迫性が指摘されている&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ba27389e784aad426f17e15e7fbbcae93192861a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「地震はアリとダンゴムシ」動物ポーズで楽しく学ぶ “怖がらせない ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRn18H0ZSFo9o8S1pnB8Ud4OekmVkcmqNGagGOq-jPQhfkfugqFLF_U45nLGLi99Im_uBspo7y" alt="「地震はアリとダンゴムシ」動物ポーズで楽しく学ぶ “怖がらせない ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>怖がらせないで、楽しみながら子供たちに防災知識を学んでもらおうと、大学生がユニークな防災教育を考えた。地震や火事でとるべき行動を、動物の姿を思い浮かべること&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9713cee4a33fb7e060d741db0be71312f8c3eca3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮城県沖でM4.3の地震 最大震度3 津波の心配なし（ウェザー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQou7I404zYVjhVdbMVN9OsnS1A2pAfFZhOgXPVMTBUxJMt9hUmv-ZlPq3SCija89eQcx5z1TIC" alt="宮城県沖でM4.3の地震 最大震度3 津波の心配なし（ウェザー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月18日(金)2時35分頃、宮城県で最大震度3を観測する地震がありました。この地震による津波の心配はありません。 震源地：宮城県沖マグニチュード：4.3 震源の深さ：&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/tohoku-news/20221118/6000021633.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮城県沖で地震 石巻で震度３（18日午前2時35分ごろ）｜NHK 宮城 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="宮城県沖で地震 石巻で震度３（18日午前2時35分ごろ）｜NHK 宮城 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>この地震による津波の心配はありません。 県内各地の震度は震度３が石巻市、このほか、震度２や震度１を仙台市や名取市、登米市など県内の広い範囲で観測しました。 震源は&nbsp;...</p></div>
            </div>
        </a><a href='https://newsdig.tbs.co.jp/articles/-/207153'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮城県で最大震度3の地震 宮城県・石巻市</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRu1aF-g61UotedUp1wl2xjdDQTYJNk4zfBMYd0u_AxqTfGBXOSPd4T3jQT_Mb6YKJGNu6BbjCP" alt="宮城県で最大震度3の地震 宮城県・石巻市" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18日午前2時35分ごろ、宮城県で最大震度3を観測する地震がありました。気象庁によりますと、震源地は宮城県沖で、震源の深さはおよそ60km、地震の規模を示す&nbsp;...</p></div>
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
        </a>
        </Template></>;
}