import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export function Dialogs() {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                <DialogItem
                    name={"Sam"}
                    id={"1"}
                    userAvatar={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/283462437_3171250703150174_7038408124234808761_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=smpcAP4Lj_oAX8uCyI4&tn=ZZdWJvwQXACe1_gF&_nc_ht=scontent-waw1-1.xx&oh=00_AfAZ2H8medh18wgbVsHd-Sg94W1UMZ7d8mhBaRXBuq_Ucg&oe=637CD0C1"}
                />
                <DialogItem
                    name={"Alena"}
                    id={"2"}
                    userAvatar={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/279497715_1174226816711339_3401783792482775809_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JXLsODScaZ4AX87ZVSa&_nc_ht=scontent-waw1-1.xx&oh=00_AfCtAYNcamWo9TUKuuh5V-9ioS-IgS2NVW7fsJYMPZgAYg&oe=637E340E"}
                />
                <DialogItem
                    name={"Cat"}
                    id={"3"}
                    userAvatar={"https://thumbs.img-sprzedajemy.pl/1000x901c/71/c2/91/piekna-kotka-bengalska-bengalski-bielsko-biala-525715748.jpg"}
                />
                <DialogItem
                    name={"Eat"}
                    id={"4"}
                    userAvatar={"https://cdn.dribbble.com/users/5269228/screenshots/17512397/media/3bec42f2a11d9ec2b4a2137caf54cc8f.png?compress=1&resize=400x300&vertical=top"}
                />


            </div>

            <div className={s.messages}>

                <Message message={"Hello, men!"}/>
                <Message message={"How are You?"}/>
                <Message message={"Bla..."}/>
                <Message message={"Boring"}/>
                <Message message={"Hey, are you here?"}/>


            </div>

        </div>

    )
}