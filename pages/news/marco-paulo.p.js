import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marco Paulo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marco Paulo"/>
        <meta name="description" content="Trending News about Marco Paulo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marco Paulo</h1>
            <Image width={800} height={500} src="https://cdn.flash.pt/images/2022-08/img_1200x676$2022_08_01_10_02_34_313830_im_637949451605943546.png" alt="Marco Paulo"/>
            <h3>Recent News</h3>
            <a href='https://www.flash.pt/celebridades/nacional/detalhe/cancro-obriga-marco-paulo-a-retirar-um-testiculo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cancro obriga Marco Paulo a retirar um testículo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4ZysMgSPeX__sqz2qWDEyIKAkzBTMHErSzi_4b1YdjUD11vJ-UJNGqfR4w2J4RjFCYmuBFUoK" alt="Cancro obriga Marco Paulo a retirar um testículo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor Marco Paulo revela que teve vergonha de assumir mas agora quer alertar outros homens para o problema.</p></div>
            </div>
        </a><a href='https://famashow.pt/famosos/marco-paulo-recorda-primeiro-cancro-era-no-testiculo-nunca-me-senti-confortavel-a-falar-da-doenca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo recorda primeiro cancro: &quot;Era no testículo. Nunca me ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRN_NIk8L2cNFIG_6M7o9ZEPtwyHLJ4jRAQWlD3UUwMdD3KnfLRpoJRXqA4TIK66e0sd8urHZ46" alt="Marco Paulo recorda primeiro cancro: &quot;Era no testículo. Nunca me ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em junho deste ano, Marco Paulo foi diagnosticado com um novo cancro, desta vez num dos pulmões. Desde então, o ator tem atualizado o seu estado de saúde,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cm-tv.pt/atualidade/detalhe/20221119-0902-tirei-um-testiculo-marco-paulo-conta-toda-a-verdade-sobre-o-primeiro-cancro-que-teve'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tirei um testículo: Marco Paulo conta toda a verdade sobre o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtwPMbpUacsvdirfTkAud49qmUpfOVkUiGAXsxNS1gVAmopJ4w4sFpXOndlQM0_6nkI4Fk-qk0" alt="Tirei um testículo: Marco Paulo conta toda a verdade sobre o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tumor não lhe foi diagnosticado nem no cólon - como muito se escreveu na altura - nem sequer no abdómen, como chegou a contar num livro biográfico editado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/marco-paulo-fala-sobre-tumor-no-testiculo-estas-coisas-tambem-eram-quase-tabu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo fala sobre tumor no testículo: &quot;Estas coisas também ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmqSB-FrCDtID5Ijm3ntGEIP9jMqFWECCtDQnk_0i8rliaCiNn0S0NARGUTqtO-6-LPQjNoIz4" alt="Marco Paulo fala sobre tumor no testículo: &quot;Estas coisas também ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo já apanhou vários sustos com a sua saúde ao longo da vida. O cantor enfrenta agora um terceiro cancro, e está muito confiante na cura.</p></div>
            </div>
        </a><a href='https://infocul.pt/marco-paulo-recorda-cancro-nos-testiculos-quase-o-tamanho-de-uma-tangerina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo recorda cancro nos testículos: “quase o tamanho de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAccfQ8Of-IAxuVYb964EawqudBO7jWGGfrOeRthTDpPg7ir8eMWI7zOTrvFRLENXn78E70RIk" alt="Marco Paulo recorda cancro nos testículos: “quase o tamanho de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo revelou que o seu primeiro cancro foi no testículo direito, e que nunca falou do assunto por não se sentir confortável. “Como foi uma coisa muito&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}