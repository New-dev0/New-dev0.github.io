import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bandeira de Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bandeira de Portugal"/>
        <meta name="description" content="Trending News about Bandeira de Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bandeira de Portugal</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/ks3XlHUKZi3P4pEsCdyKbMaHSWk=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11161735.jpg" alt="Bandeira de Portugal"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/portugal/noticia/2022/11/28/espectador-invade-campo-de-portugal-x-uruguai-com-bandeira-lgbtqiap.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espectador invade campo de Portugal x Uruguai com bandeira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbMI_LmYScwWQUiRrPLrwQ4dTA_isVpU_ZYBwMHEq097C6H5dsZatudecugeLsS6eg3JvaTGNP" alt="Espectador invade campo de Portugal x Uruguai com bandeira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Penetra&quot; é famoso por invadir gramados em jogos de futebol e também usava camisa pedindo ajuda à Ucrânia e respeito às mulheres iranianas.</p></div>
            </div>
        </a><a href='https://visao.sapo.pt/atualidade/mundo/2022-11-28-adepto-invade-relvado-com-bandeira-multicor-no-portugal-uruguai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adepto invade relvado com bandeira multicor no Portugal-Uruguai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQuOEn29D-a1KDzSpGju35ze__QVK-xTPWi0DN_VcnRO4-ckKXl66bZj7WSXsatoqbgIHgOmsD" alt="Adepto invade relvado com bandeira multicor no Portugal-Uruguai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um adepto invadiu hoje o relvado do Estádio de Lusail, no decorrer do encontro entre Portugal e o Uruguai, do Mundial de futebol, carregando uma bandeira&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/28/fotos-adepto-invadiu-campo-no-portugal-uruguai-com-bandeira-lgbt-e-t-shirt-com-mensagens-sobre-irao-e-ucrania/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fotos. Adepto invadiu campo no Portugal-Uruguai com bandeira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaO-ARwU01EYiA8O4LEb034uwOjDS6ThmAvxirA21vhF8uO-w8YUVnVD8F11lJ4BfnvVsC4rrm" alt="Fotos. Adepto invadiu campo no Portugal-Uruguai com bandeira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na competição em que os futebolistas não puderam usar braçadeiras &quot;One Love&quot;, um adepto entrou em campo com uma bandeira LGBT. Na t-shirt, pedia &quot;salvem a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/adepto-interrompe-portugal-uruguai-e-corre-pelo-relvado-com-bandeira-lgbt--15396427.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adepto interrompe Portugal-Uruguai e corre pelo relvado com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQA5UatS75anRWD73QyRfsUe-Wu9cRpT8cqNom2uoD69dH_O65_VvOmpAXr2LCNrdzoJe0cP6aF" alt="Adepto interrompe Portugal-Uruguai e corre pelo relvado com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal está a defrontar o Uruguai, em jogo da segunda jornada do Grupo H do Mundial&#39;2022. Aos 51 minutos, a partida foi interrompida devido a um adepto&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/homem-com-bandeira-lgbt-e-camisola-de-apoio-as-mulheres-iranianas-e-a-ucrania-interrompe-portugal-uruguai-15396459.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adepto com bandeira LGBT e camisola de apoio às mulheres ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSSzXf20DbX5BmhOdqSSAaYNCyUM4ntDmL5Znn2LbRYNEd8-piREEtDzcJUfQhimIWjyTYIBbO" alt="Adepto com bandeira LGBT e camisola de apoio às mulheres ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Decorria o minuto 51 do encontro entre Portugal e o Uruguai, do Mundial 2022, quando um invasor de campo interrompeu a partida no Lusail Iconic Stadium.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/28/desporto/noticia/adepto-invade-relvado-bandeira-arcoiris-portugaluruguai-2029531'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adepto invade relvado com bandeira arco-iris no Portugal-Uruguai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRviDOrr4W8vanOcT4yIvPa9sPNhlu6TSTrm0O6JHD_b1MlkvTxcQ7x8aV3rcpWoL235O-WBTXT" alt="Adepto invade relvado com bandeira arco-iris no Portugal-Uruguai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O homem que invadiu o terreno de jogo levava vestida uma t-shirt com mensagens de apoio às mulheres iranianas e à Ucrânia.</p></div>
            </div>
        </a>
        </Template></>;
}