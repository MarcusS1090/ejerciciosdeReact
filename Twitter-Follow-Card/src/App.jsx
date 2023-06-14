import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users =  [
        {
            userName: 'midudev',
            name: 'Miguel Angel Durán',
            isFollowing: true
        },
        {
            userName: 'marcusS1090',
            name: 'Marcus Senju',
            isFollowing: false,
        },
        {
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: true,
        },
        {
            userName: 'TeamMessi',
            name: 'Team Messi',
            isFollowing: true,
        }
    ] 

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing} 
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
