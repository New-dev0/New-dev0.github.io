import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>США</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,США"/>
        <meta name="description" content="Trending News about США" /></Head><Template>
            <h1 style={{fontSize: "30"}}>США</h1>
            <Image width={800} height={500} src="https://iv.kommersant.ru/SocialPics/5680801_26_2296917_2085538227" alt="США"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5680801'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделили Украине $4,5 млрд прямой финансовой помощи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcXAKdT-eEz0d-LjBPepg_uyk2qohREDq72Mt4tAdS9ntpwbYCpKKIxA5BmVjlgksYxRo47Wpg" alt="США выделили Украине $4,5 млрд прямой финансовой помощи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство финансов США согласовало выделение бюджетной помощи для Украины на общую сумму в $4,5 млрд. Глава ведомства Джанет Йеллен пояснила,&nbsp;...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052605174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США разрешил ряду стран покупать нефть у России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkxXHd3Ke4rLoJUBZ1QXtY-2grshGINSV1ukgS56HlpSUQZ4XmoMXeDh0ntepX1iBNvwlHFfyw" alt="Минфин США разрешил ряду стран покупать нефть у России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ряд стран, не имеющих выход к морю Евросоюза, сможет проводить операции, связанные с поставками российской нефти. Такое заявление сделало Министерство&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/us-ukraine-dudget-support-yellen-statement/6845499.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделяют Украине $4,5 млрд в рамках прямой бюджетной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRTuGkRXV4Wm31bfdDOTeaT7_-refq329uhwR1zhoT3m7n5u3xKGMds8kt9znPOiInzIxVs9qt" alt="США выделяют Украине $4,5 млрд в рамках прямой бюджетной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«В сочетании с нашей помощью в обеспечении безопасности и огромной храбростью украинского народа эти средства являются важнейшим инструментом сопротивления&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/business/873711'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделят Украине еще $4,5 млрд в форме прямой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTr_TvhZ_RD6BP29uqVZtCre9Gmvz47shega5iWWDiHh1dSDlQc519vC4cH9AaDZxrrRkhKy3bZ" alt="США выделят Украине еще $4,5 млрд в форме прямой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 22 ноября. INTERFAX.RU - США направят Украине еще $4,5 млрд субсидий для прямой поддержки бюджета страны, средства начнут распределять в ближайшие&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/23/minfin-ssha-utochnil-ogranicheniya-na-zakupku-rossiyskoy-nefti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США уточнил ограничения на закупку российской нефти</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQWpRzW3ruoDgJxpjr1MlmVkbSxcHYewJLia8uA2dNp5uihGO5TD6-SctPU99cNKOaJMLbiAci" alt="Минфин США уточнил ограничения на закупку российской нефти" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В частности, Вашингтон разрешил проводить финансовые операции, связанные с поставками российской сырой нефти, в Болгарию, Хорватию, а также в ряд не имеющих&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513508'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделят Украине еще ,5 млрд в виде прямой бюджетной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="США выделят Украине еще ,5 млрд в виде прямой бюджетной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее сообщалось, что общая сумма американской военной помощи Киеву с конца февраля достигла 21,5 млрд долларов.</p></div>
            </div>
        </a><a href='https://life.ru/p/1540798'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США разрешил поставлять российскую нефть в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUoz2FmMik5o8GTXupQuabFtlSbiTLwvcSxc9KpJnb_UZNonadPtHau-jCPaBD43IsKYHv6gh8" alt="Минфин США разрешил поставлять российскую нефть в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вашингтон разрешил проводить финансовые операции, связанные с поставками сырой нефти из России в Болгарию, Хорватию и ещё ряд не имеющих выхода к морю стран&nbsp;...</p></div>
            </div>
        </a><a href='https://zerkalo.az/ssha-vydelili-ukraine-4-5-mlrd-byudzhetnoj-podderzhki/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделили Украине $4,5 млрд бюджетной поддержки -</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXEhY8AlwsNQpSOLKPyEh5m-9XYyQLJauHX0y7kKiL625hSjLUVSEULkqfYnsycV7nbBa5Bk4z" alt="США выделили Украине $4,5 млрд бюджетной поддержки -" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США выделили Украине $4,5 млрд бюджетной поддержки. Общий объем средств, выделенных США на прямую бюджетную поддержку Украине, составит $13 млрд.</p></div>
            </div>
        </a><a href='https://news.ru/usa/ssha-razreshili-postavki-rossijskoj-nefti-v-strany-es/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США разрешили поставки российской нефти в страны ЕС</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToMs8yX1HxzxflhHNnYw9ljDlegAXqIB2j5OgTmY154_vRUYC07ydCP8-E83OQnn8PHYyC726V" alt="США разрешили поставки российской нефти в страны ЕС" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минфин США разрешил транзакции, связанные с поставками нефти из России в ряд стран ЕС.</p></div>
            </div>
        </a><a href='https://news.ru/world/ssha-vydelyat-4-5-mlrd-na-podderzhku-ukrainy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США выделят Украине еще $4,5 млрд</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTm-d8UMfBTEgDPSQiP9yRv4TF5Iw1eGEUjVjz9to7L60YqY4KWUIzEfDkMJqhuiaLz84GOOs2L" alt="США выделят Украине еще $4,5 млрд" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США выделят Украине $4,5 млрд для поддержки бюджета страны, заявила министр финансов Джанет Йеллен. По ее словам, эти деньги помогут стабилизировать&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}