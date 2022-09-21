import GithubIcon from './icons/GitHubIcon'
import InstagramIcon from './icons/InstagramIcon'
import TwitterIcon from './icons/TwitterIcon'

export function SocialLinks ({ links }) {
    return (
        <div className='social-links'>
            <a href={links.twitter.url} aria-label={links.twitter.label}>
                <TwitterIcon />
            </a>
            <a href={links.github.url} aria-label={links.github.label}>
                <GithubIcon />
            </a>
            <a href={links.instagram.url} aria-label={links.instagram.label}>
                <InstagramIcon />
            </a>
        </div>
    )
}