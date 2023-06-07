import { useState  } from 'react';

import './App.css'

export function TwitterFollowCard ({ children,userName,initialIsFollowing })  {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    /*
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
    */
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ?
        'tw-followCard-button is-following' : 'tw-followCard-button';

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-name'>{children}</strong>
                <span className='tw-followCard-info-userName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handlerClick}>
                {text}
            </button>
        </aside>
        </article>
    )
}