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
        </a><a href='https://prm.ua/moldova-vyklykala-posla-rosii-cherez-masovanyy-obstril-ukrainy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова викликала посла Росії через масований обстріл України</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_h8Uxhz_MxEmiM_jMbMyUljLY5m6ezDDE_TXx9BjPX-wAjldJv0x6if1zfTGf2IYOzZMsyiKR" alt="Молдова викликала посла Росії через масований обстріл України" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністерство закордонних справ Молдови викликало російського посла через обстріли енергетичних об&#39;єктів України.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/23/7377662/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова вызвала посла России из-за отключения света</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTogIAoMXkhcreMQpu-vva2BKolF_ALsXmXPeaBL_Kwi1ZpaquyhZSOBxSOLtrJjv3H5SbycOqh" alt="Молдова вызвала посла России из-за отключения света" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В МИД Молдовы вызвали посла России дать разъяснения в связи с отключением электроэнергии после атак РФ по энергоинфраструктуре Украины.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/business/economics/4537719-moldova-vidpovila-hazpromu-na-osilyi-haz-v-ukraini'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова відповіла Газпрому на &quot;осілий&quot; газ в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdGg7amkAUy1UmRMgMR3YPb0y2Kp9k4ZnO5ZGAntrBUb5YbxTBsMzl-vFWHNo4Ty2jpw4tiY1i" alt="Молдова відповіла Газпрому на &quot;осілий&quot; газ в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Газпром брехливо звинувачує Україну та Молдову. Але країни разом здобудуть енергетичну незалежність, зазначив Андрій Спину.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-holodomor-moldova-irlandiya/32147461.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Голодомор: парламент Ірландії визнав геноцидом, Молдова ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREKwAGYiWpS1T0k8gqE7NLzpiPvXEWX2JAQnxCvSh3v4UneqJTsM7ylQa2pd81-3LJpp1WZZLB" alt="Голодомор: парламент Ірландії визнав геноцидом, Молдова ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Парламент Молдови заявляє, що «більшовицький режим СРСР несе відповідальність за акт умисного геноциду проти українського народу»</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4537943-moldova-bez-svitla-posla-rf-vyklykauit-u-mzs-dlia-poiasnen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова без світла: посла РФ викликають у МЗС для пояснень</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5Ws3QhiXNzhobWIIv4iiO0JFjxUPqEoLJrywBrv4BrUdAkJ36gA8K2Ad1J_ESm6TCzesxP4sx" alt="Молдова без світла: посла РФ викликають у МЗС для пояснень" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Атаки на енергетичну інфраструктуру України залишили Молдову у темряві. Посла РФ викличуть на килим у МЗС.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-moldova-haz-rosiia/32145290.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова заявила про шантаж Росії через газ, який зараз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg1bi4H47F_w8qm7fs_IUFjTvijRRf-OM6G45WR6yRoNDdaxXnkMy_WBGTpp8oBSNLQXXX9BaV" alt="Молдова заявила про шантаж Росії через газ, який зараз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раніше «Газпром» погрожував скоротити постачання газу до Молдови, стверджуючи, що Україна перешкодила доставці близько 52,5 млн кубометрів до Кишинева.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/irlandiya-ta-moldova-viznali-golodomor-genotsidom-1669310294.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ирландия и Молдова признали Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-Yx4u_zDiKeTwMdyNv8nEWAqaSCEPFic8q1qSab3a8Ud8e_nxUU1qDvp9OO2ip2zK2MjftLRn" alt="Ирландия и Молдова признали Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В парламентах Ирландии и Молдовы официально признали, что Голодомор был геноцидом украинцев.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-economy/3620123-moldova-sprostuvala-zvinuvacenna-gazpromu-v-osidanni-gazu-v-ukraini.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Молдова спростувала звинувачення газпрому в «осіданні» газу в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRlMXt_yj132X6PHhPF4r1h4NIoLEcBY2dvLDHCazDEtpxsRgNvhTLMZo8x6Ee7dvAmjiw80LeD" alt="Молдова спростувала звинувачення газпрому в «осіданні» газу в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це він повідомив у середу, передає Укрінформ із посиланням на NewsMaker. Як пояснив міністр, деякі обсяги газу, що надходять, Молдова залишає в&nbsp;...</p></div>
            </div>
        </a><a href='https://lb.ua/world/2022/11/23/536905_cherez_vidklyuchennya_svitla_moldova.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Через відключення світла Молдова викличе посла Росії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4y5fpn7pl0fYrtq-VxrnUfXwlMe8fU3cEwLvkHfdSPGi-lqlEH_I5Brl5T9-qbPjx4LTY5OMV" alt="Через відключення світла Молдова викличе посла Росії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За його словами, по всій державі фіксують масові відключення електроенергії, зокрема, і в Кишиневі. Попеску зазначив, що доручив викликати посла Росії для&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}