export function UserAvatar ({ userPicture, userName }) {
    return (
        <div className='card-photo center circle'>
            <img src={userPicture} alt={userName} />
        </div>
    )
}