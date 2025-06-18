import '../styles/ProfileCard.css';

const ProfileCardItem = {
  name: 'kim seong su',
  text: '안녕하세요! 반갑습니다.',
  image: './winter.jpg',
};

export default function ProfileCard() {
  return (
    <>
      <div>
        <img src={ProfileCardItem.image} alt="사진" className="profile-image" />
        <h1 className="profile-name">{ProfileCardItem.name}</h1>
        <p className="profile-bio">{ProfileCardItem.text}</p>
      </div>
    </>
  );
}
