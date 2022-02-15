import React from "react";
const Notification = () => {
  const notification = [
    {
      title: "Cool Marketing",
      img: "https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Cool Marketing",
      img: "https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Cool Marketing",
      img: "https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Cool Marketing",
      img: "https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Cool Marketing",
      img: "https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png",
      desc: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <>
      {notification.map((item, index) => {
        const { img, title, desc } = item;
        return (
          <div className="single_notify" key={index}>
            <a href="/">
              <img src={img} alt="/user" />
            </a>
            <div>
              <h5>{title} </h5>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Notification;