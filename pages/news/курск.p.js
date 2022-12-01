import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Курск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Курск"/>
        <meta name="description" content="Trending News about Курск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Курск</h1>
            <Image width={800} height={500} src="https://riakursk.ru/assets/cache_image/uploads/2022/11/ihwyzalmovs_500x300_8a8.jpg" alt="Курск"/>
            <h3>Recent News</h3>
            <a href='https://riakursk.ru/v-kurske-prodolzhayut-borotsya-s-reklamoy-narkotikov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курске продолжают бороться с рекламой наркотиков - РИА Курск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyGHsD48P7lS4-KGDGBGRrEIAGikL8Xvf_9yDIvzFBsYfXbJWsnPJ1e0uZGhxzd_6qseDUR6Lh" alt="В Курске продолжают бороться с рекламой наркотиков - РИА Курск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Курске на стенах жилых домов и на ограждениях продолжает появляться все новая рекламная информация наркотической направленности. Продолжается и борьба с этим&nbsp;...</p></div>
            </div>
        </a><a href='https://riakursk.ru/na-meste-stroitelstva-memoriala-kurskaya-bitva-nachalis-podgotovitelnye-raboty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На месте строительства мемориала «Курская битва» начались ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGozifFI6a8Pa1jp82TPlLCaXq118GpV9UbR9LNqNAR-Z_5vxljZFbiKSE_MJuLLrK4gT9_KWz" alt="На месте строительства мемориала «Курская битва» начались ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российским военно-историческим обществом 15 ноября были подведены итоги конкурса на лучшее архитектурное решение.</p></div>
            </div>
        </a><a href='https://kursk-izvestia.ru/news/192318/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В мэрии Курска рассказали, когда решат проблему с лужей на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBzonpZGWiJpN7bf3TuNGpVkY6nC9TlwBkB9YSOZyDz_0C3qx8ISFpROIIeaILgwLOB4TseDpR" alt="В мэрии Курска рассказали, когда решат проблему с лужей на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 ноября 2022 в 16:32. 0 131. В мэрии Курска рассказали, когда решат проблему с лужей на Серегина,15. В сообществе &quot;Курский Край&quot; рассказали о проблеме на&nbsp;...</p></div>
            </div>
        </a><a href='https://riakursk.ru/v-kurske-na-ulitse-chernyakhovskogo-remontiruyut-dorogu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курске на улице Черняховского ремонтируют дорогу - РИА Курск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2tcJ6B2mMvvl_khWcJh2LhTKIt0dqotTQIZ200_0HDo2q0ZJV72REF7svCqJUlks21SYAHUIt" alt="В Курске на улице Черняховского ремонтируют дорогу - РИА Курск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как сообщили в пресс-службе мэрии со ссылкой на комитет дорожного хозяйства, работы были запланированы на 2023 год, но подрядчику удалось приступить к ним&nbsp;...</p></div>
            </div>
        </a><a href='https://46tv.ru/odnoj-strokoj/v-kurske/177973-v-kurske-startoval-dorozhnyj-remont-na-ulice-chernjahovskogo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курске стартовал дорожный ремонт на улице Черняховского</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjwCCRhuedX1GdP3YjYeG1oZduV8vADsGmV3dR5U9QUj3RQCRmtz9dkVHkhtsc0FVKHmcXnDMR" alt="В Курске стартовал дорожный ремонт на улице Черняховского" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Курске несмотря на то, что на дворе еще 2022 года стартовали дорожные работы, запланированные на следующий 2023 год. Так в рамках нацпроекта «Безопасные&nbsp;...</p></div>
            </div>
        </a><a href='https://46tv.ru/odnoj-strokoj/v-kurske/177981-gubernator-provel-soveschanie-po-stroitelstvu-kompleksa-kurskaja-duga.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Губернатор провел совещание по строительству комплекса ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXMW7fV7YdOWsq3reyjbbgagHvc6wectKpQcevO3vwx3Nl4HXs4-7ssZ14lt9cgr5y4oSJNojT" alt="Губернатор провел совещание по строительству комплекса ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 ноя 2022. /46ТВ/. Вместе с Романом Старовойтом в заседании участвовал руководитель проекта – заместитель председателя Российского военно-исторического&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}