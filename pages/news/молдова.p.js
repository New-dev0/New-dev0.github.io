import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Молдова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Молдова"/>
        <meta name="description" content="Trending News about Молдова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Молдова</h1>
            <Image width={800} height={500} src="" alt="Молдова"/>
            <h3>Recent News</h3>
            <a href='https://fakty.com.ua/ua/svit/svitovi-novyny/20221124-moldova-vyklykala-dlya-poyasnen-posla-rosiyi-cherez-vidklyuchennya-svitla/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова викликала для пояснень посла Росії через відключення ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPzmRF9l6Nsr5K4NHJLdNnNwIdPDEYZHgaPFhLb9fAaSPlg7-pg7WF6CvBnKbCZPTlJ7vbX4Kv" alt="Молдова викликала для пояснень посла Росії через відключення ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністерство закордонних справ Молдови викликало посла Росії через ракетні обстріли енергооб&#39;єктів України, адже це призвело до вимкнення світла у Молдові.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-holodomor-moldova-irlandiya/32147461.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Голодомор: парламент Ірландії визнав геноцидом, Молдова ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREKwAGYiWpS1T0k8gqE7NLzpiPvXEWX2JAQnxCvSh3v4UneqJTsM7ylQa2pd81-3LJpp1WZZLB" alt="Голодомор: парламент Ірландії визнав геноцидом, Молдова ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Парламент Молдови заявляє, що «більшовицький режим СРСР несе відповідальність за акт умисного геноциду проти українського народу»</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/irlandiya-ta-moldova-viznali-golodomor-genotsidom-1669310294.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ирландия и Молдова признали Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-Yx4u_zDiKeTwMdyNv8nEWAqaSCEPFic8q1qSab3a8Ud8e_nxUU1qDvp9OO2ip2zK2MjftLRn" alt="Ирландия и Молдова признали Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В парламентах Ирландии и Молдовы официально признали, что Голодомор был геноцидом украинцев.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4538267-irlandiia-ta-moldova-vyznaly-holodomor-henotsydom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ірландія та Молдова визнали Голодомор геноцидом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfe_2oLViMAaZJyP8HZo7nPqdUPENTIaN0tw-qLV1Xoau1jhiYJAPzzrzENfMUbS4nuF9WvOEq" alt="Ірландія та Молдова визнали Голодомор геноцидом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У парламентах Ірландії та Молдови офіційно визнали, що Голодомор є геноцидом українського народу.</p></div>
            </div>
        </a><a href='https://prm.ua/moldova-vyklykala-posla-rosii-cherez-masovanyy-obstril-ukrainy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова викликала посла Росії через масований обстріл України</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_h8Uxhz_MxEmiM_jMbMyUljLY5m6ezDDE_TXx9BjPX-wAjldJv0x6if1zfTGf2IYOzZMsyiKR" alt="Молдова викликала посла Росії через масований обстріл України" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністерство закордонних справ Молдови викликало російського посла через обстріли енергетичних об&#39;єктів України.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-moldova-haz-rosiia/32145290.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова заявила про шантаж Росії через газ, який зараз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg1bi4H47F_w8qm7fs_IUFjTvijRRf-OM6G45WR6yRoNDdaxXnkMy_WBGTpp8oBSNLQXXX9BaV" alt="Молдова заявила про шантаж Росії через газ, який зараз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раніше «Газпром» погрожував скоротити постачання газу до Молдови, стверджуючи, що Україна перешкодила доставці близько 52,5 млн кубометрів до Кишинева.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-world/3621134-bojovimi-diami-v-ukraini-rosia-pogirsue-stanovise-koznogo-zitela-moldovi-popesku.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бойовими діями в Україні росія погіршує становище кожного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHl-ZpeY66VW_0zxSV7w-dog_RiZCq1UaNTq30qDHWJYBJXt_LSNfNXQ5Wu9BEkfhfU9zQpflC" alt="Бойовими діями в Україні росія погіршує становище кожного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>російські атаки на українську інфраструктуру створюють серйозні проблеми для кожного жителя Молдови. — Укрінформ.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/24/7377858/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламент Молдовы признал Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9mz_IdFvyh1MFu2A7PusMUwuuFMpS4uId9i1w49JrhAdHwD1Dc_DgLULP9axla_aSfyUaFHuE" alt="Парламент Молдовы признал Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Парламент Молдовы на заседании в четверг принял декларацию о признании Голодомора 1932-1933 годов геноцидом украинского народа.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/23/7377662/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова вызвала посла России из-за отключения света</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTogIAoMXkhcreMQpu-vva2BKolF_ALsXmXPeaBL_Kwi1ZpaquyhZSOBxSOLtrJjv3H5SbycOqh" alt="Молдова вызвала посла России из-за отключения света" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В МИД Молдовы вызвали посла России дать разъяснения в связи с отключением электроэнергии после атак РФ по энергоинфраструктуре Украины.</p></div>
            </div>
        </a><a href='https://espreso.tv/moldova-viznala-golodomor-genotsidom-ukrainskogo-narodu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова визнала Голодомор геноцидом українського народу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTn8kPv5aol0cUa8M3xEDIggrwBIe51YmR5ElM_pNiucS8lQ9ySfMq6ccpsTJbNCRr4pHK3rUYk" alt="Молдова визнала Голодомор геноцидом українського народу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Парламент Молдови на засіданні у четвер ухвалив декларацію про визнання Голодомору 1932-1933 років геноцидом українського народу.</p></div>
            </div>
        </a>
        </Template></>;
}