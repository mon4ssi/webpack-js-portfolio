import { useRandomUser } from '@/hooks/random-user'
import Card from './Card'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardSection from './CardSection'
import Loading from './Loading'
import GithubIcon from './icons/GitHubIcon'
import InstagramIcon from './icons/InstagramIcon'
import TwitterIcon from './icons/TwitterIcon'
import UserAvatar from './UserAvatar'

const BackgroundCircle = () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: 'new -580 439 577.9 194' }}>
        <circle cx="50" cy="50" r="40" />
    </svg>
)

const About = () => {
    const { person, isLoaded } = useRandomUser()

    if (!isLoaded) return (
        <Loading message={'loading...'} />
    )

    return (
        <main className='page'>
            {isLoaded && (
                <Card>
                    <CardHeader>
                        <UserAvatar
                            userPicture={person.picture.large}
                            userName={person.name.first}
                        />
                        <div className="card-title">
                            <p>Hi, My name is</p>
                            <p>{person.name.first} {person.name.last}</p>
                        </div>
                    </CardHeader>
                    <CardSection>
                        <ul>
                            <li>{person.email}</li>
                            <li>{person.location.country}</li>
                        </ul>
                    </CardSection>
                    <CardFooter>
                        <a href='https://twitter.com/mon4ssi'>
                            <TwitterIcon />
                        </a>
                        <a href='https://github.com/mon4ssi'>
                            <GithubIcon />
                        </a>
                        <a href='https://instagram.com/mon4ssi'>
                            <InstagramIcon />
                        </a>
                    </CardFooter>
                </Card>
            )}
        </main>
    )
}

export default About
