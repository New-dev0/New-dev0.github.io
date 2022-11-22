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
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/70/23/preview_w696zc1.jpg" alt="Люксембург"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n177023-luksemburg-peredav-ukrayinskiy-armiyi-djypy-hmmwv-foto.html'>
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
        </a><a href='https://www.eurointegration.com.ua/news/2022/11/21/7151062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передає Україні позашляховики &quot;Хамві&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKrh2xFobFvHceTQrRjSLFFe9YNt_vKQPM7h8FTvBcSDvO_xzesmpLHecELzaZsyrKtwFfQg58" alt="Люксембург передає Україні позашляховики &quot;Хамві&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міністр оборони Люксембургу Франсуа Бауш повідомив про надання Україні позашляховиків HMMWV. Про це повідомляє &quot;Європейська правда&quot;.</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/lyuksemburg-peredast-na-potrebi-zsu-broneavtomobili-2206486.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передасть на потреби ЗСУ бронеавтомобілі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIGqIlhV5rwCbJXC3_RmixBmCm4sIV73RU4Ry8hIKT6eX4DVcO45JZ41BR3ocI5l9Yz_WlyDXM" alt="Люксембург передасть на потреби ЗСУ бронеавтомобілі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург передасть Україні в межах військової допомоги партію позашляховиків HMMWV.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/worldabus/4537169-luiksemburh-vidpravyt-do-ukrainy-pozashliakhovyky-khamvi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург відправить до України позашляховики Хамві</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmgIrnXHhA0A3dJWnOe1VgjqRiCULIu1_N4-TVHrXWmreNfcOG5fnQZ2tc1gqh-lmAoT7TMW66" alt="Люксембург відправить до України позашляховики Хамві" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург передасть Україні позашляховики HMMWV (Хамві) Про це 21 листопада повідомив у Twitter міністр оборони країни Франсуа Бауш. &quot;Армія Люксембургу та&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/ljuksemburh-peredaje-ukrajini-vijskovi-pozashljakhoviki-hmmwv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передає Україні військові позашляховики HMMWV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMVVW_Q7yjkdAkxQEXUiQrxLJ5--DWpLTRAARWa7Tppz36EiXPvr_MjNFL7LQgQy1vucfwNx0o" alt="Люксембург передає Україні військові позашляховики HMMWV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург ухвалив рішення про надання Україні додаткових військових автомобілів підвищеної прохідності HMMWV. Про це повідомив міністр оборони держави Франсуа&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/21/7151062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передает Украине внедорожники &quot;Хамви&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKrh2xFobFvHceTQrRjSLFFe9YNt_vKQPM7h8FTvBcSDvO_xzesmpLHecELzaZsyrKtwFfQg58" alt="Люксембург передает Украине внедорожники &quot;Хамви&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Люксембурга Франсуа Бауш сообщил о предоставлении Украине внедорожников HMMWV. Об этом сообщает &quot;Европейская правда&quot;.</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/ljuksemburh-peredaet-ukraine-voennye-vnedorozhniki-hmmwv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург передает Украине военные внедорожники HMMWV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMVVW_Q7yjkdAkxQEXUiQrxLJ5--DWpLTRAARWa7Tppz36EiXPvr_MjNFL7LQgQy1vucfwNx0o" alt="Люксембург передает Украине военные внедорожники HMMWV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург принял решение о предоставлении Украине дополнительных военных автомобилей повышенной проходимости HMMWV. Об этом сообщил министр обороны государства&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/lyuksmeburg-peredae-ukrayini-bronovani-avtomobili-1669037466.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксмебург передаст Украине бронированные автомобили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0fO_bouOMtIS0hozHtju7tqmf9Ua1W5qmiDcw6ACW8MFrdMTEE8Ji-wU4sV7LE_f4ZfDEBjHg" alt="Люксмебург передаст Украине бронированные автомобили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Люксембург передаст Украине дополнительные высокомобильные многоцелевые колесные транспортные средства HMMWV. Об этом сообщает РБК-Украина со ссылкой на&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/world/worldabus/4537169-luiksemburh-otpravyt-v-ukraynu-vnedorozhnyky-khamvy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Люксембург отправит в Украину внедорожники Хамви</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmgIrnXHhA0A3dJWnOe1VgjqRiCULIu1_N4-TVHrXWmreNfcOG5fnQZ2tc1gqh-lmAoT7TMW66" alt="Люксембург отправит в Украину внедорожники Хамви" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военная помощь &quot;укрепит Украину в осуществлении ее права на самооборону&quot;, подчеркнул глава Минобороны страны. Люксембург передаст Украине внедорожники HMMWV&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}