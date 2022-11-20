import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Meteor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Meteor"/>
        <meta name="description" content="Trending News about Meteor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Meteor</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/11/19/video/19vid-toronto-fireball-COVER/19vid-toronto-fireball-COVER-facebookJumbo.png" alt="Meteor"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/11/19/science/fireball-asteroid-toronto-new-york.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fireball Flashes Above Ontario and Parts of the U.S.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR92N6HdNjxg4uuX5KlQpojKjWNQ0A-g4VC1U4NjRewW3D8l4cRYrEHu6D6YP0u3GaL6GovKTgQ" alt="Fireball Flashes Above Ontario and Parts of the U.S." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The bright meteor was the sixth object detected in space before striking Earth, the European Space Agency said.</p></div>
            </div>
        </a><a href='https://globalnews.ca/news/9292097/meteor-cn-tower-niagara-falls/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meteor lit up sky over Niagara Falls, CN Tower early Saturday morning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbir7QPtwdUbbzw7jHCDNiVT6zfzHuuC__i3gTEcgP_MxcKVD_p0JCcbh4P91kfzmWn15eOYGV" alt="Meteor lit up sky over Niagara Falls, CN Tower early Saturday morning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The European Space Agency shared video of the meteor, named #C8FF042 and around one metre in diameter, passing across the CN Tower.</p></div>
            </div>
        </a><a href='https://www.cp24.com/news/videos-show-the-moment-a-meteor-lit-up-the-skies-over-southern-ontario-last-night-1.6160450'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Video: Meteor flies over Ontario Saturday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToJEJOJm8fTOjW4HrI4J6CfNvfgRAsd3fC-py7ODlHDJ7hGtZFkaExrfOcWEnCUnnUpUi59mxm" alt="Video: Meteor flies over Ontario Saturday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Videos captured in southern Ontario show the moment a meteor flew across the night sky early Saturday morning.</p></div>
            </div>
        </a><a href='https://www.midlandtoday.ca/local-news/small-meteor-cruises-through-the-gta-crashes-near-brantford-6129510'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meteor cruises through the GTA, crashes near Brantford (VIDEO)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1Fc7VEOBw_4LjEvyTf-6PnMEsAkqJoVOaP-ehuycDeVymFuxZHQPW8QE_ODnHZQpPdUmvaiAi" alt="Meteor cruises through the GTA, crashes near Brantford (VIDEO)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;There was an intense loud boom sounding like it was hitting earth as the ground shook (and) trembled under the bed,&#39; said startled resident.</p></div>
            </div>
        </a><a href='https://www.insauga.com/a-huge-meteor-flew-over-the-skies-of-mississauga-brampton-milton-and-hamilton/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A huge meteor flew over the skies of Mississauga, Brampton, Milton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrara7RfEKKNZblB01UNhd4a_isDUgJgUW4E60sg50FtmaZcuRaXWcGbD2W7T3s87JgW3kkOsh" alt="A huge meteor flew over the skies of Mississauga, Brampton, Milton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some lucky residents and sky watchers got a rare view of a huge meteor passing through the sky overnight on Nov.</p></div>
            </div>
        </a>
        </Template></>;
}