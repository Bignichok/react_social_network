import ProfileInfoWrapper, {
    ImageHolder,
    PersonalInfoHolder,
    Name,
    InfoList,
    InfoListItem,
} from "./ProfileInfo.style";

const ProfileInfo = () => {
    return (
        <ProfileInfoWrapper>
            <ImageHolder imageUrl="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" />

            <PersonalInfoHolder>
                <Name>Name Naming</Name>
                <InfoList>
                    <InfoListItem>Date of Birth</InfoListItem>
                    <InfoListItem>City</InfoListItem>
                    <InfoListItem>Education</InfoListItem>
                </InfoList>
            </PersonalInfoHolder>
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;
