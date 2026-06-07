import React from 'react';
import {S} from './../HeaderMenu_Styles.ts'

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    }
]

interface MenuProps {
    onClose?: () => void;
}


export const Menu: React.FC<MenuProps> = ({ onClose }) => {
    return (
        <ul>
            {
                items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={false}
                            spy={true}
                            duration={300}
                            offset={-90}
                            onClick={onClose}
                        >
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                })
            }
        </ul>
    );
};

