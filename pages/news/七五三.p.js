import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>七五三</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,七五三"/>
        <meta name="description" content="Trending News about 七五三" /></Head><Template>
            <h1 style={{fontSize: "30"}}>七五三</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-20204797-rbc-000-2-thumb.jpg?exp=10800" alt="七五三"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b633bff55e92ccdddc606db7ac3756218186c465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11月15日は『七五三』 華やかな衣装に身を包んだ子どもたちから ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQO4rl_k4OtHPH3evzogt0eG7MDUkdq_A80wsqTeZKQpzfmzJ0u2pH2Qyr6JdqMi9Dm3JWqyBIS" alt="11月15日は『七五三』 華やかな衣装に身を包んだ子どもたちから ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月15日は「七五三」です。子どもの成長を祝おうと県内各地の神社はお参りに訪れる家族連れで賑わいをみせました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/2a8efa1bc88b426856ceacdf6d4a0ae1ff599fc1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>元祖チャイドル・野村佑香、3歳次女の初七五三に感心しきり 堂々と ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQN8nKxS29HYvzqwXBAWbITYM17SNlBy_DWmJoXRb1CPq57yW2NA3tUfLWuFmpWxYDd1FCm7Je-" alt="元祖チャイドル・野村佑香、3歳次女の初七五三に感心しきり 堂々と ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1990年代に巻き起こったチャイドルブームの火付け役である俳優の野村佑香さんが11月15日にInstagramを更新。3歳次女の七五三で参拝したことを報告し、6歳長女も交えた&nbsp;...</p></div>
            </div>
        </a><a href='https://373news.com/_news/storyid/166094/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「優しい子に育って」 成長願い七五三 鹿児島市・照国神社 | 鹿児島 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTyCqa7Ula9imTm4DKLhDh8rPYHC5UjzaPQm5-ySoXmiQtDiKrMJZdoSdYujqxJbhF-qSXWVj4z" alt="「優しい子に育って」 成長願い七五三 鹿児島市・照国神社 | 鹿児島 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>鹿児島市の照国神社では、はかまや振り袖姿の子どもたちが家族に手を引かれて参拝した。 南九州市川辺町神殿の並河蓮花ちゃん（３）は母の風花さん（３２）が仕立て直した&nbsp;...</p></div>
            </div>
        </a><a href='https://www.minyu-net.com/news/news/FM20221116-740897.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>健やかな成長願い「七五三」 福島県内の神社、晴れ着でお参り</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFc1Jmal7QnNrXZJnIHtOGvhcAxCKnNZQ4g-RqmhZok1mncop5Igy7WvWUVgHj1KJQOg9_2eo9" alt="健やかな成長願い「七五三」 福島県内の神社、晴れ着でお参り" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>子どもの健やかな成長を願う「七五三」の１５日、県内各地の神社には多くの家族連れが参拝に訪れた。 福島市の福島稲荷神社では、家族連れが新型コロナウイルス対策&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/fukuoka-news/20221115/5010018161.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>きょう１５日は七五三 太宰府天満宮は親子連れでにぎわう｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVua3qxwx1CI9NmsiTYNMu5Y9mEAzKeb7wUrVLH6v1kOVPMQMMp1uocGfFIddcvBANnWOHHKGf" alt="きょう１５日は七五三 太宰府天満宮は親子連れでにぎわう｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>太宰府市にある太宰府天満宮では、午前中から着物やはかま姿の子どもたちが家族と訪れ、お守りや千歳飴などを受け取ったあとおはらいを受け、健やかな成長を願いました。</p></div>
            </div>
        </a><a href='https://www.oita-press.co.jp/1010000000/2022/11/16/JD0061846686'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>七五三、子どもの健やかな成長願う 県内各地の神社に家族連れ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="七五三、子どもの健やかな成長願う 県内各地の神社に家族連れ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>大分市勢家町の春日神社では、おめかしをした子どもたちが両親や祖父母に手を引かれ、次々と参拝。千歳飴（ちとせあめ）を手に記念撮影する姿が見られた。 同市政所の施設&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sakigake.jp/news/article/20221115AK0034/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>すくすく育ちますように… 晴れ着姿で七五三</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLaAZn7-T5-Xey_0llziXIFuhb8eJUHfb_WCSb1dyrMhnWEL9eRvSWOVECjzvoi5dcpBI7LbZy" alt="すくすく育ちますように… 晴れ着姿で七五三" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>七五三の１５日、秋田県内各地の神社に家族連れが訪れ、子どもの健やかな成長を祈願した。秋田市の千秋公園内にある彌高神社には、色鮮やかな晴れ着姿の子どもが親に手&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9b4e29f802f9e6d54b189ba819c3646215e354b8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>元チャイドル・野村佑香、七五三で長女＆次女と家族ショット！６ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-I0QdQaKrYz4Har6qt-ztftrW17duPZuH8Xrn28Upwyzp2InGXZpX9ZJkgU5m69eESaHbxnfD" alt="元チャイドル・野村佑香、七五三で長女＆次女と家族ショット！６ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>９０年代に巻き起こった美少女アイドル「チャイドル」ブームの火付け役で、女優の野村佑香（３８）が１５日に自身のインスタグラムを更新。３歳の次女（オレンジ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}