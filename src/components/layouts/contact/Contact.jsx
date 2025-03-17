import { FaDiscord, FaGithub } from "react-icons/fa";
import { ButtonLamp } from "../../fragments/ButtonLamp";
import { CardContact } from "../../fragments/CardContact";
import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

export function Contact() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        console.log('Before setIsActive:', isActive);
        setIsActive(!isActive);
        console.log('After setIsActive:', !isActive);
    };
    return (
        <article className="flex justify-center flex-col items-center gap-2">
            <ButtonLamp handleClick={handleClick} />
            <div className="flex gap-14 flex-wrap justify-center">
                <CardContact
                    color='#0a0a0a'
                    textColor='#0f0f0f'
                    hoverColor='#FF3300'
                    icon={'/gmail-svgrepo-com.svg'}
                    label="Gmail"
                    isActive={isActive}
                    
                />
                <CardContact
                    color='#0a0a0a'
                    textColor='#0f0f0f'
                    hoverColor='rgba(88, 101, 242, 1)'
                    icon={<FaDiscord size={50} />}
                    label="Discord"
                    isActive={isActive}
                    />
                <CardContact
                    color='#0a0a0a'
                    textColor='#0f0f0f'
                    hoverColor='rgba(193, 53, 132)'
                    icon={'/instagram-1-svgrepo-com.svg'}
                    label="Instagram"
                    isActive={isActive}
                />
                <CardContact
                    color='#0a0a0a'
                    textColor='#0f0f0f'
                    hoverColor='white'
                    icon={<FaGithub size={45}/>}
                    label="Github"
                    isActive={isActive}
                    link="https://github.com/sakhanflh"
                />
            </div>
        </article>
    )
}
