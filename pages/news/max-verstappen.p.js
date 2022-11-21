import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Max Verstappen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Max Verstappen"/>
        <meta name="description" content="Trending News about Max Verstappen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Max Verstappen</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=df502ac1-77ee-4678-aa54-8403177f6dbe&w=800&h=420&watermark=true&t=20221120150200" alt="Max Verstappen"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/modalidades/motores/noticias/formula-1-max-verstappen-encerra-temporada-com-15-vitoria-15370556.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fórmula 1: Max Verstappen encerra temporada com 15.ª vitória</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQiAGV5nMVKpE1Q68gZDw6LHus_C95GoCQICC7rdGlWXOSBbs5SssXYXFCfpCSLGnL4xyF5GdE" alt="Fórmula 1: Max Verstappen encerra temporada com 15.ª vitória" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Piloto da REd Bull venceu o Grande Prémio de Abu Dhabi.</p></div>
            </div>
        </a><a href='https://www.dnoticias.pt/2022/11/20/337074-max-verstappen-acaba-epoca-com-novo-recorde-e-leclerc-garante-segundo-lugar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Verstappen acaba época com novo recorde e Leclerc garante ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0sSLX6hdxTK95yPYXj90ScvM2juNAIG5QBVsfev7NnIKMPawcIFQNGY_HnABlUL-Ik5frsPRf" alt="Max Verstappen acaba época com novo recorde e Leclerc garante ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O piloto neerlandês Max Verstappen (Red Bull) venceu hoje o Grande Prémio de Abu Dhabi de Fórmula 1, 22.ª e última prova da temporada, estabelecendo um novo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/madeira/desporto/campeao-max-verstappen-arranca-da-pole-position-na-ultima-corrida-da-temporada-_106045'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Campeão Max Verstappen arranca da pole position na última ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjBeN3q_n16pyhNVwNIo5sLbYCgNyuMToXpFTXxI0IrHe_7X_zfRlLs7wl8d6u9dDW69JvEoWt" alt="Campeão Max Verstappen arranca da pole position na última ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já o monegasco Charles Leclerc mostrou-se resignado com o terceiro lugar. “Estamos no lugar que merecíamos. A Red Bull foi mais forte. Vamos tentar maximizar o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.pt/formula1/f1/gp-abu-dhabi-f1-max-verstappen-dominou-e-leclerc-bateu-perez-no-campeonato/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GP Abu Dhabi F1: Max Verstappen dominou e Leclerc bateu Pérez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0ruULVP1toj26_qTOvU4kcT-RbKFzCjv5LLoR4GDGFx_us44LUsBi8xePM6g52qD8m52za8HV" alt="GP Abu Dhabi F1: Max Verstappen dominou e Leclerc bateu Pérez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ninguém incomodou Max Verstappen na liderança da derradeira corrida da época, triunfando pela 35ª vez na carreira. O neerlandês liderou da primeira à última&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-20/formula-1-verstappen-ganha-gp-do-abui-dhabi/965439'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen ganha GP do Abui Dhabi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROrx-s3cDfk4mG5q4lDqRmtb7g31SHOkyjob3yQPGGsGa1B-ghqjpp2Xt1E6V2cPAqV5BYhaMK" alt="Verstappen ganha GP do Abui Dhabi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen, em Red Bull, ganhou o GP do Abu Dhabi, última ronda do Mundial de 2022, campeonato que teve o número recorde de 22 corridas.</p></div>
            </div>
        </a><a href='https://www.autogear.pt/artigos/max-verstappen-fechou-com-chave-de-ouro-e-dominou-em-abu-dhabi-charles-leclerc-vice-campeao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Verstappen fechou «com chave de ouro» e dominou em Abu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjEdQf7sTqUyb6mCCSjjZoMPce5uLr0LKU-IoPnPF99gdl9UDyiHRnfrGNdF0mzqRXT_Tghzz5" alt="Max Verstappen fechou «com chave de ouro» e dominou em Abu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen dominou e ganhou o GP de Abu Dhabi de Fórmula 1, fechando da melhor forma uma temporada em que foi avassalador face à concorrência.</p></div>
            </div>
        </a>
        </Template></>;
}