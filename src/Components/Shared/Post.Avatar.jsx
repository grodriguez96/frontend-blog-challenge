import React from "react";

export default function PostAvatar({ userId }) {
  const avatar = [
    { userId: 1, name: "Maria R.", url: "../../../img/avatar/003-lego.png" },
    { userId: 2, name: "Teresa C.", url: "../../../img/avatar/013-lego.png" },
    { userId: 3, name: "Julia K.", url: "../../../img/avatar/017-lego.png" },
    { userId: 4, name: "Mildred G.", url: "../../../img/avatar/058-thief.png" },
    { userId: 5, name: "Rosa M.", url: "../../../img/avatar/072-woman.png" },
    { userId: 6, name: "Alejo H.", url: "../../../img/avatar/006-lego.png" },
    {
      userId: 7,
      name: "Esteban D.",
      url: "../../../img/avatar/038-fisherman.png",
    },
    { userId: 8, name: "Jose B.", url: "../../../img/avatar/014-lego.png" },
    { userId: 9, name: "Carlos L.", url: "../../../img/avatar/043-DJ.png" },
    { userId: 10, name: "Pablo W.", url: "../../../img/avatar/001-lego.png" },
    {
      userId: 11,
      name: "Soy batman.",
      url: "../../../img/avatar/063-batman.png",
    },
  ];

  const findAvatar = () => {
    const avatarFounded = avatar.find((avatar) => avatar.userId === userId);
    return avatarFounded;
  };

  const userAvatar = findAvatar();

  return (
    <div className="container">
      <div className="text-center">
        <img style={{ width: "10%" }} src={userAvatar.url} alt="" />
        <p>{userAvatar.name}</p>
      </div>
    </div>
  );
}
