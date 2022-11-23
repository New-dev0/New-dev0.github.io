import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Юрій Шухевич</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Юрій Шухевич"/>
        <meta name="description" content="Trending News about Юрій Шухевич" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Юрій Шухевич</h1>
            <Image width={800} height={500} src="https://donpatriot.news/photos/news/37524.png" alt="Юрій Шухевич"/>
            <h3>Recent News</h3>
            <a href='https://donpatriot.news/article/pishov-z-zhittya-yuriy-shuhevich'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пішов з життя Юрій Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSd_1S6pKI_LaEyP2kCt9oFWgR7a6X7iXD6DqL7ytoriLWD-Awj3e0QPM8ou743Oy1RrfG_c0sN" alt="Пішов з життя Юрій Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зазначимо, що Юрій Шухевич народився 28 березня 1933 року в селі Оглядів, яке було тоді у складі Польської республіки (зараз цей населений пункт знаходиться у&nbsp;...</p></div>
            </div>
        </a><a href='https://teren.in.ua/news/pomer-geroy-ukrayini-yuriy-shuhevich_393944.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Помер Герой України Юрій Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSG3xtQV0eFckbJE-62F4ucpYMXDpvJNJ4SvW_3l1ssBEKa2k3sktUGJdX1o79DOuN6laU62CK-" alt="Помер Герой України Юрій Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У віці 89 років помер Юрій Шухевич, Герой України, політв&#39;язень та син командувача УПА Романа Шухевича. Про це повідомили на сторінці Верховної Ради України&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177068-pomer-uriy-shuhevych-geroy-ukrayiny-ta-syn-komanduvacha-upa-foto.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Помер Юрій Шухевич — Герой України та син командувача УПА ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKDJvevWCJIHd3ZWQbzAVISPXFesfpsHHcII0zoHSwOM40wuKynLojXg6jxSVT2Epr46M3w6aj" alt="Помер Юрій Шухевич — Герой України та син командувача УПА ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Помер Юрій Шухевич — Герой України та син командувача УПА (ФОТО). https://racurs.ua/ua/n177068-pomer-uriy-shuhevych-geroy-ukrayiny-ta-syn-komanduvacha&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/322494-pomer-kolisnij-politvazen-urij-suhevic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Помер колишній політв&#39;язень Юрій Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7SbkUfE3cHswewmi8zq-jLY3gYV2RXFaPoY1KSPQEJmDWROjeYGArFVXfH9jedVFFGrlEmTRR" alt="Помер колишній політв&#39;язень Юрій Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Помер Герой України та колишній політв&#39;язень Юрій Шухевич. Йому було 89 років. Про це 22 листопада повідомив міський голова Львова Андрій&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/22/7377461/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер Герой Украины и сын командующего УПА Юрий Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRMFuek6C8RQQKNCm15MBpHWTLAqJR9QWpf2517sGhwwqcr4Gm7_tumhDSC7Zvp07L_xbPj3jZ" alt="Умер Герой Украины и сын командующего УПА Юрий Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22 ноября в Германии умер сын командующего УПА и Герой Украины Юрий Шухевич, как сообщил мэр Львова Андрей Садовый.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/nimechchini-pomer-sin-romana-shuhevicha-1669123878.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Германии умер сын Романа Шухевича</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLO8-EpRCNf59gonS8aMhsykBbXHi3CqWTeIU__e_CJEm6QLlzIdt9AvZpseDcuzwR13_Vv2AR" alt="В Германии умер сын Романа Шухевича" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Юрий Шухевич умер во вторник, 22 ноября, ночью в Германии. Там он находился на лечении.</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/general/873744.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скончался Герой Украины, экс-нардеп Юрий Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtHRhtEMSnFdKgHUaiyvr3BYvAQJEwLuXA6_PdTbryuQQuSiLZBRk1Ucd2_ELLLJv6oKAXPb-G" alt="Скончался Герой Украины, экс-нардеп Юрий Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Герой Украины, сын командующего ОУН-УПА Романа Шухевича, общественный деятель, народный депутат Украины VIII созыва Юрий Шухевич скончался в ночь на вторник&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/society/umer-geroy-ukrainy-yuriy-shuhevich-novosti-lvova-12053652.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умер Герой Украины Юрий Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf1H7hv3OJtf8sxtRL-mXgiQIkOTNDnPkABL_mx9rqjpxhyI7oncLdfe08qAunO68CXt_YI4Yu" alt="Умер Герой Украины Юрий Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В больнице в Германии в ночь на 22 ноября умер сын главнокомандующего УПА Романа Шухевича Юрий Шухевич. В 2006 году ему присвоено звание Герой Украины.</p></div>
            </div>
        </a><a href='https://focus.ua/ukraine/538098-politzaklyuchennyy-i-syn-komanduyushchego-upa-umer-geroy-ukrainy-yuriy-shuhevich'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Политзаключенный и сын командующего УПА: умер Герой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFM2dElQQJhku0xILYcN68HjFshvg0Lbfm9gTJgEYXRrTKko-s8s6CV057vdiSoFPXrilVPWjr" alt="Политзаключенный и сын командующего УПА: умер Герой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Умер Герой Украины Юрий Шухевич. Юрий Шухевич скончался в Германии, где проходил лечение. Точная причина смерти Шухевича пока не называется.</p></div>
            </div>
        </a><a href='https://fraza.com/news/318512-skonchalsja-geroj-ukrainy-jurij-shuhevich'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скончался Герой Украины Юрий Шухевич</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_2xjwekxqfP0fQKjKdlo3OPk5ghusA12-x7aVtV-oOAeQSHE0P7Gzj4BL7R1rWoyTb6ZrjXu-" alt="Скончался Герой Украины Юрий Шухевич" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Герой Украины, политзаключенный и сын командующего УПА Романа Шухевича Юрий Шухевич умер в возрасте 89 лет. Он скончался в Германии, где находился на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}