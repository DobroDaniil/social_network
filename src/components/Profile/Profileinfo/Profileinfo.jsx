import s from "./Profileinfo.module.css"
import Preloader from "../../common/preloder/preloader";
import React from "react";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        <div>
            <img src='https://c4.wallpaperflare.com/wallpaper/761/169/79/pixel-art-andlt-aestheticandgt-town-city-waneella-hd-wallpaper-preview.jpg'
                 alt='background' height='250px' width='1000px'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}
                 height='100px' width='100px'/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            ava_descrip
        </div>
    </div>
}

export default ProfileInfo;