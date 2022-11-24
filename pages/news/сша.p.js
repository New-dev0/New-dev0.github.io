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
            <Image width={800} height={500} src="http://www.aex.ru/images/media/600/14478.jpg" alt="США"/>
            <h3>Recent News</h3>
            <a href='https://www.aex.ru/news/2022/11/23/250455/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В США в День благодарения авиаперевозки могут достичь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmd5UzrYT6qgZ9q2H25k7XyjeJ9BjNAoulGKV53k5mJGJHbkphwCnXZjgrqlYzXGue__rq8sgx" alt="В США в День благодарения авиаперевозки могут достичь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 ноября 2022 г., AEX.RU – Американские авиакомпании приготовились к наплыву пассажиров в День благодарения 24 ноября, ожидая, что число туристов достигнет&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rubaltic.ru/article/politika-i-obshchestvo/20221123-razborki-marionetok-ukraine-i-tayvanyu-pridetsya-borotsya-za-blagosklonnost-ssha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разборки марионеток: Украине и Тайваню придется бороться за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdVKMTulPuKyozxFE0nHW7Dj9HD6GeEGPnbLeiWHTpzMG-0jYcHhtUgpqdXAyozJiejpLjMQgC" alt="Разборки марионеток: Украине и Тайваню придется бороться за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смена власти в Конгрессе США грозит тем, что Украина рискует лишиться не только значительной части внимания, но и выделяемых средств.</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/23/minfin-ssha-raz-yasnil-kak-budet-rabotat-ogranichenie-tsen-na-rossiyskuyu-neft-v-pravilah-predusmotreny-poslableniya-dlya-ryada-stran-es'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США разъяснил, как будет работать ограничение цен ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRP95MNe4-XAlw3O4oUTOwSKoQFLx-1VMsme2_qX8Zk4QC2SbDBr0WtCgHXMhZIX5xuSFIRVmGd" alt="Минфин США разъяснил, как будет работать ограничение цен ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минфин США разъяснил, как будет работать ограничение цен на российскую нефть. В правилах предусмотрены послабления для ряда стран ЕС. 23:27, 22 ноября 2022.</p></div>
            </div>
        </a><a href='https://www.forbes.ru/finansy/481491-ssa-razresili-svazannye-s-importom-nefti-iz-rossii-v-aponiu-i-strany-evropy-operacii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США разрешили связанные с импортом нефти из России в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHezubzD8F3TMgak0IwmsMsPFXMKT1CUaWLQaf7hYFuFZ7t3X8GubbNqLu4me3OaahrmAKHbWc" alt="США разрешили связанные с импортом нефти из России в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минфин США разрешил операции, связанные с морской перевозкой нефти, добытой на проекте «Сахалин-2», в Японию и с поставками российской нефти в Хорватию,&nbsp;...</p></div>
            </div>
        </a><a href='https://pravo.ru/news/244046/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США разрешили транзакции за российскую нефть в пользу ряда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="США разрешили транзакции за российскую нефть в пользу ряда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр финансов США Джанет Йеллен ранее предложила установить предельную цену в $60 за баррель. Это ниже рыночной цены на нефть, но близко к цене, по которой&nbsp;...</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-23/261794-minfin-ssha-razreshil-postavki-rossiyskoy-nefti-v-ryad-stran-evrosoyuza'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США разрешил поставки российской нефти в ряд стран ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVdkbSrnVVXmDC82VKAFLDkCmyI4MdffRs0vkbzKodt_bUbxqIrEjo3S4Ur5qKY1V0OwG7dSMU" alt="Минфин США разрешил поставки российской нефти в ряд стран ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Речь идёт о Болгарии, Хорватии и государствах, не имеющих выхода к морю.</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/minfin-usa-oboznachil-ogranicheniya-na-zakupku-rossiyskoy-nefti/32144664.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США разрешил временную перевозку российской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS17NnfuJChHUJ62k23_0wL1f_YjCc-IWBJ9cIrjhzneyYwaB5cUxru6SbEzYvmMisGrWehnhAZ" alt="Минфин США разрешил временную перевозку российской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минфин США выпустил генеральные лицензии, регулирующие ограничительные меры против российского нефтяного сектора из-за вторжения РФ в Украину. &quot;Политика&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513527'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США распространил руководство по реализации ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Минфин США распространил руководство по реализации ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Западная коалиция рассчитывает запустить механизм ограничения цен с 5 декабря. Соединенные Штаты совместно со странами G7, Евросоюза и Австралией&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/business/873750'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минфин США распространил руководство по реализации ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOm8Q_4CD9U7RKN43aZIDAkueQKnYv8XtNYAR5ujqlwhvhWS3vMZl-VqO6HQlErhc3gSnqjnvA" alt="Минфин США распространил руководство по реализации ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 23 ноября. INTERFAX.RU - Министерство финансов США распространило документ, в котором содержит руководство по реализации политики ограничения цен на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}