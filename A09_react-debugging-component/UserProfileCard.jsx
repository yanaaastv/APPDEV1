import { useState } from "react";
const userData = {
  name: "Diana Teves",
  avatarUrl:
    "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/668099700_2454926618260083_1911655687506415904_n.jpg?stp=dst-jpg_tt6&cstp=mx1498x1496&ctp=s200x200&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGHKd0v5VQHBaR2gYjR28Henkhug9dVYdKeSG6D11Vh0rC_o0ZgnW1i4XgpxUrhqg6UByhEUUddlpsDzWcX-Ao9&_nc_ohc=_A1_1FHsM6IQ7kNvwFeh546&_nc_oc=Adp9b27jT5emNu_-z83dRmf19Iz8TUpHAdC7E3kh9LuGjuxZCbf5eL7XuX1FgUUqh28&_nc_zt=24&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=s1RTDfsrBrzafzNMgwxaJw&_nc_ss=7b2a8&oh=00_AQDBGn8As5uC9QtjDjmPLAHFxHhVMNzcMlg292f6p5GVCw&oe=6A68E89D", // sample avatar
  bio: "BSIS3 Student",
  skills: ["React", "JavaScript", "HTML", "CSS", "Figma"],
  isOnline: true,
  lastUpdated: "1 minutes ago",
};

//<UserProfileCard user={userData} />;

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavorite() {
    setIsFavorited();
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />
        <h2>{userData.name}</h2>
        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>
        <h3>Skills</h3>
        <ul>
          {userData.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>
        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
        {userData.isOnline && (
          <button onClick={handleFavorite}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}
      </div>
      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </>
  );
}
export default UserProfileCard;
