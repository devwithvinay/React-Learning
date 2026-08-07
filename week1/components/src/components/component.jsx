import image from "../assets/profile.jpeg";
import UseState from "./UseState.jsx";

function ProfileCard({name , role}) {
  return (
    <div
      style={{
        width: 100,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        border: "1px solid gray",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img
          src={image}
          style={{
            height: 40,
            width: 40,
            borderRadius: "50%",
          }}
        />

        <div>
          <b>{name}</b>
          <div>{role}</div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <UseState />
      </div>
    </div>
  );
}

export default ProfileCard;
