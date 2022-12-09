import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>刀剣乱舞</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,刀剣乱舞"/>
        <meta name="description" content="Trending News about 刀剣乱舞" /></Head><Template>
            <h1 style={{fontSize: "30"}}>刀剣乱舞</h1>
            <Image width={800} height={500} src="https://www.famitsu.com/images/000/285/633/z_639164b93a596.jpg" alt="刀剣乱舞"/>
            <h3>Recent News</h3>
            <a href='https://www.famitsu.com/news/202212/08285633.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『刀剣乱舞』新作歌舞伎が2023年7月に新橋演舞場にて上演決定 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgsXgtnK3d0IL8kSs6uQnOFkR6MtqoeyYHcUnmQqLCfch7PcRtezykB1YUyt3xVSaTfu6CaLUX" alt="『刀剣乱舞』新作歌舞伎が2023年7月に新橋演舞場にて上演決定 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今回、『刀剣乱舞』の歌舞伎化が公式サイト・公式Twitterにて発表。公式サイトでは、尾上松也、尾上右近をはじめとする出演陣や制作陣も明らかになっている。そのほか詳細&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oricon.co.jp/news/2259788/full/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ゲーム『刀剣乱舞』初の歌舞伎化、来年7月に上演 出演は尾上松也 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpRYg19SVgSaF6Q1DZyhSde1ttDcplJDlAEtdZPlTFtM1TdFlV7JfXF2mFUSkHJuAejckL5PiX" alt="ゲーム『刀剣乱舞』初の歌舞伎化、来年7月に上演 出演は尾上松也 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ニュース｜ シミュレーションゲーム『刀剣乱舞ONLINE』が初めて歌舞伎化されることが8日、発表された。2023年7月に東京・新橋演舞場にて新作歌舞伎『刀剣乱舞』として&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fashion-press.net/news/97015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『刀剣乱舞』歌舞伎化、尾上松也・尾上右近ら出演 - 東京・新橋演舞 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoEGFZxLUhkwKaRCQzrk2WltH61bLnG5JkoiNX9hUCI0sW2R7C_gVPTdcyfWyYXzkPmAaTi5yN" alt="『刀剣乱舞』歌舞伎化、尾上松也・尾上右近ら出演 - 東京・新橋演舞 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新作歌舞伎『刀剣乱舞』が2023年7月に東京・新橋演舞場にて上演される。原案となる『刀剣乱舞 ONLINE』は、名だたる刀剣が戦士へと姿を変えた“刀剣男士”を率いて、歴史&nbsp;...</p></div>
            </div>
        </a><a href='https://25jigen.jp/news/84540'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ライブ配信情報】ミュージカル『刀剣乱舞』 江 おん すていじ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQq2n5Vun0GahGePghpNqQNgnAOphUIQcWwqI-0ow38SyZa_9vGeFMQEqB1P5I8528S9sXHvacb" alt="【ライブ配信情報】ミュージカル『刀剣乱舞』 江 おん すていじ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ミュージカル『刀剣乱舞』 江 おん すていじ ～新編 里見八犬伝～がDMM.comでライブ・ディレイ配信される。</p></div>
            </div>
        </a><a href='https://natalie.mu/stage/news/504222'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新作歌舞伎「刀剣乱舞」上演決定、出演に尾上松也・尾上右近 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTADDmfEDK2S4A_abRi9gssikkB7hr3fzC_3cPraVI8FxdlngdKb1vP9lBzcchDAjRznY0qwKkE" alt="新作歌舞伎「刀剣乱舞」上演決定、出演に尾上松也・尾上右近 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新作歌舞伎「刀剣乱舞」が、7月に東京・新橋演舞場で上演される。</p></div>
            </div>
        </a><a href='https://www.4gamer.net/games/274/G027460/20221208039/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新作歌舞伎「刀剣乱舞」が2023年7月に新橋演舞場で上演へ。脚本は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTTqI5bCDZ9YWkJV9lnh08-cSgK2LyE-TfyHqtKudqbryAAjC-Jr7ZtwlKutUYh9wdiL3lNZlF" alt="新作歌舞伎「刀剣乱舞」が2023年7月に新橋演舞場で上演へ。脚本は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年12月8日，DMM GAMESでサービス中のブラウザゲーム「刀剣乱舞ONLINE」を題材とした「新作歌舞伎『刀剣乱舞』」が，2023年7月に新橋演舞場で上演予定であることが&nbsp;...</p></div>
            </div>
        </a><a href='https://news.mynavi.jp/article/20221208-2532571/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新作歌舞伎『刀剣乱舞』上演決定! 尾上松也・尾上右近ら出演で2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwcAhGEer4kJI49nudlPaabjIV1UbJ7IbC-xNDufMT-zBcbdeWxMXHyJe3zO_hbfJuKZ-2YUhI" alt="新作歌舞伎『刀剣乱舞』上演決定! 尾上松也・尾上右近ら出演で2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新作歌舞伎『刀剣乱舞』が上演されることが8日、明らかになった。2023年7月、新橋演舞場での上演を予定している。</p></div>
            </div>
        </a><a href='https://www.astage-ent.com/stage-musical/s216029.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23年7月 新作歌舞伎『刀剣乱舞』上演決定 新橋演舞場にて</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSDXD79R2GaTe1EhJk8-MeG5NQh-aRCNk_ulR-EWQzDrTaJDsky4CK4ddb5_hFntn8dvTpwMjk" alt="23年7月 新作歌舞伎『刀剣乱舞』上演決定 新橋演舞場にて" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>蟆ｾ荳頑收荵. 尾上松也 &middot; 蟆ｾ荳雁承霑. 尾上右近 &middot; 荳ｭ譚鷹ｷｹ荵玖ｳ. 中村鷹之資 &middot; 荳ｭ譚題次邇. 中村莟玉 &middot; 荳ｭ譚第｢・脂. 中村梅玉. 【刀剣乱舞 ONLINE とは】 2015 年に DMM&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}