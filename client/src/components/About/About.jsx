import React from "react";
import styles from './About.module.css'

export default function About (){
    return (
        <div className={styles.container} >

            <h1 className={styles.title} >About this webpage:</h1>
            <div className={styles.body} >
            <h2 >This webpage is my integration project corresponding to the Module 2 of the Web Full Stack course of Soy Henry.</h2>

        </div>
        <h2 className={styles.footer} >App made by: Alexis Porcelano.</h2>
        </div>
    )
}