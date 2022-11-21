import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Байден</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Байден"/>
        <meta name="description" content="Trending News about Байден" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Байден</h1>
            <Image width={800} height={500} src="https://gdb.voanews.com/00d80000-0aff-0242-9dac-08dacb210fd5_w1200_r1.jpg" alt="Байден"/>
            <h3>Recent News</h3>
            <a href='https://www.golosameriki.com/a/joe-biden-birhday/6842636.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент Джо Байден отмечает 80-летний юбилей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMohNde57i2vyu5Y3dJszGEysWmySrDhhoWGsLHuw1hxU4qB59XxP3EEu6nLq_QoO6RNZ76mTV" alt="Президент Джо Байден отмечает 80-летний юбилей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На протяжении своей политической карьеры Байден сыграл ключевую роль в работе над важнейшими государственными инициативами.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5679599'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден призвал запретить штурмовое оружие после стрельбы в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Байден призвал запретить штурмовое оружие после стрельбы в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден считает, что принятых им в 2022 году мер по контролю за оружием недостаточно. После гибели пяти человек во время стрельбы в&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1540329'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден: В США на фоне стрельбы в Колорадо выросла ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHJ3G75AAEt7wcWphsa0Vu8KB_IWUEOd91PPM2zF6QxBn9LCO1ZevH26tklJ8tSnWuXebKyCmn" alt="Байден: В США на фоне стрельбы в Колорадо выросла ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден назвал вооружённое насилие эпидемией в общественной жизни страны, комментируя ЧП со стрельбой в гей-клубе в штате Колорадо.</p></div>
            </div>
        </a><a href='https://readovka.news/news/121437'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мистер президент: чем Джозеф Байден успел запомниться к 80 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTYjpuB8d6xo_DdyvPJG-ZxyMcuranldYsUdAPXfUtQPeK29pRg9n4MpmysdUjhIRgFplx0qfn" alt="Мистер президент: чем Джозеф Байден успел запомниться к 80 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 20 ноября, исполнилось 80 лет 46-му президенту США Джозефу Байдену – возраст более чем почтенный. Самое время вспомнить, чем именно отметился&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/usa/belyj-dom-bajden-otmetit-80-letie-v-krugu-semi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Белый дом: Байден отметит 80-летие в кругу семьи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTT3HOOwtQzIzgdpMEvX0eb_4XGhPaCymVMOXGSsBROgUlby5GuMckAzbMpm9mh6MjhnrNJlWFb" alt="Белый дом: Байден отметит 80-летие в кругу семьи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пресс-секретарь президента США Джо Байдена Карин Жан-Пьер сообщила, что действующий глава государства обычно празднует свой день рождения в кругу семьи в&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/world/537791-dzho-bajdenu-80-let-tragedii-i-vzlety-46-ogo-prezidenta-ssha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джо Байден отмечает 80 лет: трагедии и взлеты 46-ого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgZHlL2Aj-USYs82AJ06Z3HeY82nzWmjnIJor4JIOhsh8vvS5zq9SmsYRtr224BXZGFmNNTrK_" alt="Джо Байден отмечает 80 лет: трагедии и взлеты 46-ого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джозеф Байден –– самый пожилой глава государства за всю историю Соединенных Штатов. В молодости он пережил смерть жены и дочери, но смог выстоять перед&nbsp;...</p></div>
            </div>
        </a><a href='https://yamal-media.ru/news/bajden-objavil-epidemiej-vooruzhennoe-nasilie-v-ssha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден объявил эпидемией вооруженное насилие в США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvQSdsot3Oi_qHksT7zrDOupvgAR0aHJanN39rK2Na-V6fvWPf_o4Pf8QzNWtlZ_SMOPVmKknW" alt="Байден объявил эпидемией вооруженное насилие в США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден назвал эпидемией вооруженное насилие в стране и призвал властей к реакции после стрельбы в ночном клубе в штате Колорадо.</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/9223e8e4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден заявил об эпидемии вооруженного насилия в США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsqpm2Jdv3bmBd573PpTzG6dvW7kwJHUvr1Jex3lB8uPsShoeq3uqslTJfjdjvjOrqKGdL2fUP" alt="Байден заявил об эпидемии вооруженного насилия в США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вооруженное насилие в США президент Джо Байден назвал эпидемией в общественной жизни страны и подчеркнул, что со сторны властей необходима соответствующая&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/20/ded-slivaet-moshch-politiki-ssha-vseobemlyushchie-moshennichestva-na-vyborah'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дед сливает мощь политики США: всеобъемлющие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRX3PPH-J2KzbyzN4_u-Xq86NwdyD7GOMcLVQ_AvEu8jBZmoX_2DGp4Z0cDucLBJ1LWaQYCmR6v" alt="Дед сливает мощь политики США: всеобъемлющие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден снова проговорился о том, насколько грязно осуществляется американская политика. По его словам, в стране создана самая масштабная&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/WORLD/prezidentu-ssha-dzho-bajdenu-ispolnjaetsja-80-let-i-on-planiruet-ballotirovatsja-na-vtoroj-srok.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президенту США Джо Байдену исполняется 80 лет и он ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6cbeVB993sn49F_NeI7k3mBrNSxx7XAyvZpUqCX-_5CPBlutbPF4Dm1SiiGsA58W2u6JEGvVZ" alt="Президенту США Джо Байдену исполняется 80 лет и он ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Байден является самым старшим человеком на посту президента в истории США. Президенту США Джо Байдену исполняется 80 лет и он планирует баллотироваться на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}