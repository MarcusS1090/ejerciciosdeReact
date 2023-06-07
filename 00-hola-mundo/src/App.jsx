import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard
                userName="marcusS1090"
                initialIsFollowing={true}
            >
                Marcus Senju
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="midudev"
                initialIsFollowing={false}
            >
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="elonmusk"
                initialIsFollowing={true}
            >
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}
