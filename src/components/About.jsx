import { useRandomUser } from '@/hooks/random-user'
import { Card } from './Card'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { CardSection } from './CardSection'
import { Loading } from './Loading'
import { SocialLinks } from './SocialLinks'
import { UserAvatar } from './UserAvatar'

const socialMedia = {
    twitter: {
        url: 'https://twitter.com/mon4ssi',
        label: 'Read more about mon4ssi on Twitter',
    },
    github: {
        url: 'https://github.com/mon4ssi',
        label: 'Read more about mon4ssi on Github',
    },
    instagram: {
        url: 'https://instagram.com/mon4ssi',
        label: 'Read more about mon4ssi on Instagram',
    },
}

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
                            <li className='font-light'>{person.email}</li>
                            <li className='font-medium'>{person.location.country}</li>
                        </ul>
                    </CardSection>
                    <CardFooter>
                        <SocialLinks links={socialMedia} />
                    </CardFooter>
                </Card>
            )}
        </main>
    )
}

export default About
