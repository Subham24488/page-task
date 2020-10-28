import React, { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./detail.styles.scss";

const Detail = ({ data }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const toggle = () => {
    setActive(active ? false : true);
    setHeight(active === true ? "0px" : `${content.current.scrollHeight}px`);
  };
  console.log(active);
  return (
    <div className="">
      <button className="userView__button" onClick={toggle}>
        <p>{data.Due}</p>
        <p>{data.Title}</p>
        <p>{data.Project}</p>
        <p>{data.Updated}</p>
        <p>
          <img src={data.Assignees} alt="assignees" />
        </p>
        <p>
          {data.Priority === "High" ? (
            <AiFillStar className="star" />
          ) : (
            <AiOutlineStar className="star" />
          )}
        </p>
      </button>

      <div
        ref={content}
        className="userView__answerArea"
        style={{ maxHeight: `${height}` }}
      >
        <div className="userView__answer">
          <div className="more-detail">
            <p className="detail-left">Keyword :</p>
            <p className="detail-right">{data.Keywords}</p>
          </div>
          <div className="more-detail">
            <p className="detail-left">Description :</p>
            <p className="detail-right">{data.Description}</p>
          </div>
          <div className="more-detail">
            <p className="detail-left">Location :</p>
            <p className="detail-right">{data.Location}</p>
          </div>
          <div className="more-detail">
            <p className="detail-left">Comments :</p>
            <p className="detail-right">
              {data.Comments.map((item, id) => {
                return (
                  <div className="comment" key={id}>
                    <img src={item.image} alt="user" />
                    <p>{item.text}</p>
                  </div>
                );
              })}

              <a href="#" className="see-all">
                See all comments
              </a>
              <div className="input-comment">
                <img src={data.Image} alt="" />
                <input type="text" placeholder="Add a Comment" />
                <button>
                  <FiSend />
                </button>
              </div>
            </p>
          </div>
          <div className="detail-footer">
            <a href="#" className="view-file">
              View File
            </a>
            <a href="#" className="summary">
              See My Summary
            </a>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          color: "grey",
          borderTop: "dashed",
          borderWidth: "thin",
          opacity: 0.5,
        }}
      ></hr>
    </div>
  );
};

export default Detail;
