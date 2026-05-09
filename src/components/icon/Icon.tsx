import React from 'react';
import iconsSprite from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}

export const Icon = (props: IconPropsType) => {
    return (
        <div>
            <svg width={props.width || "170"} height={props.height || "38"} viewBox={props.viewBox || "0 0 170 38"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
            </svg>
        </div>
    );
};