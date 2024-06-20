'use client';

interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    };
    btnTitle: string;

}

const AcountProfile = ({ user, btnTitle }: Props) => {
    return (
        <div>
            AccountProfile
        </div>
    )
}

export default AcountProfile;