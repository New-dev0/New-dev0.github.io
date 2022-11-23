import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Люксембург</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Люксембург"/>
        <meta name="description" content="Trending News about Люксембург" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Люксембург</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/1/_/1___5780_1300x820_1_1300x820.jpg" alt="Люксембург"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/lyuksemburg-napraviv-ukrayini-viyskovu-dopomogu-1669162683.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург направил Украине военную помощь</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTdqD0RdjJGRpti9FczBpV-I3qKR6Qnp44x2BHQEnRPTHCTYtSmA-4s90Ta7EQRkhE-M2Ubl0f" alt="Люксембург направил Украине военную помощь" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает РБК-Украина со ссылкой на Army Recognition. Точное количество переданных машин не уточняется, однако, по данным издания, они были выделены из&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/news/lyuksemburg-napraviv-ukrayini-viyskovu-dopomogu-1669162683.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург направив Україні військову допомогу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTdqD0RdjJGRpti9FczBpV-I3qKR6Qnp44x2BHQEnRPTHCTYtSmA-4s90Ta7EQRkhE-M2Ubl0f" alt="Люксембург направив Україні військову допомогу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомляє РБК-Україна з посиланням на Army Recognition. Точна кількість переданих машин не уточнюється, проте, за даними видання, їх було виділено з&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/21/7377287/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передає Україні позашляховики &quot;Хамві&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUeMbFgAjvCyo_xrSjxvwvdKofk_v__nX03xP2KYpFtst0GkPHlh6Y2dusrUR-E5lqeIgFPoQi" alt="Люксембург передає Україні позашляховики &quot;Хамві&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністр оборони Люксембургу Франсуа Бауш повідомив про надання Україні позашляховиків HMMWV.</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177023-luksemburg-peredav-ukrayinskiy-armiyi-djypy-hmmwv-foto.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передав українській армії джипи HMMWV (ФОТО)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfzC1K-J_9X0smFm7iaST_7HOf89MzEgfeaaDN03xwia_MFu3aGq3MJMplJyaVTm0dQUnX9irI" alt="Люксембург передав українській армії джипи HMMWV (ФОТО)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Влада Люксембургу передала Україні партію позашляховиків HMMWV. Також армія Люксембургу планує прийняти на навчання тисячі українських військовослужбовців.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-ato/3618877-luksemburg-rozgladae-nadanna-ukraini-boepripasiv-droniv-i-bronemasin.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург розглядає надання Україні боєприпасів, дронів і ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcdlQZboaTIDZr6v4R_5z8qcPnUGaPtt5WBBAZP_p-nCU-5iE5KZfBBarYklMwnIs8LkUAqHxP" alt="Люксембург розглядає надання Україні боєприпасів, дронів і ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург розглядає можливість надати Україні артилерійські боєприпаси калібру 155 мм, дрони і бронемашини. — Укрінформ.</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/11/21/536583_lyuksemburg_peredaie_ukraini.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передає Україні військові автомобілі &quot;Хамві&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs8zaCTR_SkFh3ZytA95gkPo019fTmkEHJO-mwVHR6S7t9BrX48pvdL4RXMk-Mt8wlai2Ro1MU" alt="Люксембург передає Україні військові автомобілі &quot;Хамві&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зазначимо, що HMMWV (the High Mobility Multipurpose Wheeled Vehicle), високомобільний багатоцільовий колісний транспортний засіб), також відомий, як Humvee (&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/lyuksemburg-peredast-na-potrebi-zsu-broneavtomobili-2206486.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передасть на потреби ЗСУ бронеавтомобілі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIGqIlhV5rwCbJXC3_RmixBmCm4sIV73RU4Ry8hIKT6eX4DVcO45JZ41BR3ocI5l9Yz_WlyDXM" alt="Люксембург передасть на потреби ЗСУ бронеавтомобілі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург передасть Україні в межах військової допомоги партію позашляховиків HMMWV.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/21/7377287/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передает Украине внедорожники &quot;Хамви&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiM9lb7nUruafrSNXRIQi7UMI8wZF8QKDI3VtDv-1VFapGKowb447RMs7_pU6IsQupz11tvp2L" alt="Люксембург передает Украине внедорожники &quot;Хамви&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Люксембурга Франсуа Бауш сообщил о предоставлении Украине внедорожников HMMWV.</p></div>
            </div>
        </a><a href='https://glavcom.ua/ru/auto-ru/ljuksmeburh-peredast-ukraine-bronirovannye-avtomobili-hmmwv-foto-890862.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передаст Украине бронированные автомобили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEExiqL7BNNuikbubR7seBiU9JfPVjyCM3k3zx3GvQ5GVC5c_YRpdfSqMmIx7_ExpQwBlLmB1h" alt="Люксембург передаст Украине бронированные автомобили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург передаст Украине дополнительные высокомобильные многоцелевые колесные транспортные средства HMMWV. Об этом сообщает «РБК-Украина» со ссылкой на&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/ljuksemburh-peredaet-ukraine-voennye-vnedorozhniki-hmmwv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передает Украине военные внедорожники HMMWV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMVVW_Q7yjkdAkxQEXUiQrxLJ5--DWpLTRAARWa7Tppz36EiXPvr_MjNFL7LQgQy1vucfwNx0o" alt="Люксембург передает Украине военные внедорожники HMMWV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург принял решение о предоставлении Украине дополнительных военных автомобилей повышенной проходимости HMMWV. Об этом сообщил министр обороны государства&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}