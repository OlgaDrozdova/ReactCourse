import NewPost from "./NewPost";
import React from "react";
import PostItem from "./PostItem";
import theresa_photo from "../images/theresa.jpg";
import kyle_photo from "../images/kyle.jpg";
import brandon_photo from "../images/brandon.jpg";
import audrey_photo from "../images/audrey.jpg";
import kyle_post_img from "../images/kyle_post_img.jpg";
import file from "../images/file.svg";

function MainBlockLeft() {
  let postItemInfo = [
    {
      header: " liked this",
      people: ["Ted Bell", "Annette Nguyen", "Cody Hawkins"],
      avatar: theresa_photo,
      name: "Theresa Steward",
      position: "iOS developer",
      post_text:
        "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
      likes: 42,
      check_like: false,
      comments: 9,
    },
    {
      header: " comment this",
      people: ["Audrey Alexander"],
      avatar: kyle_photo,
      name: "Kyle Fisher",
      position: "Product designer at Commandor Corp.",
      post_text: "How’s your day going, guys?",
      post_img: kyle_post_img,
      likes: 12,
      check_like: true,
      comments: 3,
    },
    {
      header: "High rated post from your feed",
      avatar: brandon_photo,
      name: "Brandon Wilson",
      position: "Senior UX designer",
      post_text: "There is some new guidelines for iOS",
      post_files: [
        {
          file_name: "iOS 11 guidelines for UX/UI designers",
          file_desc: "PDF file, 324 kb",
        },
        {
          file_name: "iOS 11 guidelines for developers",
          file_desc: "PDF file, 245 kb",
        },
      ],
      likes: 89,
      check_like: true,
      comments: 7,
    },
    {
      header: "First post from ",
      people: ["Audrey Alexander"],
      avatar: audrey_photo,
      name: "Audrey Alexander",
      position: "Team lead at Google",
      post_text:
        "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
      likes: 10,
      check_like: false,
      comments: 0,
    },
  ];

  return (
    <>
      <NewPost />
      <div className="sort">
        <span className="sort__line"></span>
        <span className="sort__text">sort by: </span>
        <select name="select" className="sort__select">
          {/* Оптимизировать добавление значений */}
          <option value="value1">VVVVV</option>
          <option value="value2" selected>
            Trending
          </option>
          <option value="value3">BLA bla bla</option>
        </select>
        <span className="sort__line"></span>
      </div>
      {postItemInfo.map((item) => <PostItem {...item}/>)} 
    </>
  );
}

export default MainBlockLeft;
