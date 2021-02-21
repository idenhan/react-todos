import React, { useState } from "react";

/*
  // Node.js 를 통해 웹 스크래핑을 하고자 했으나, 
  네이버 Datalab은 웹 스크래핑 방지가 되어있음을 확인.

  const request = require("request");
  const cheerio = require("cheerio");

  request(
    "https://datalab.naver.com/keyword/realtimeList.naver?where=main",
    (error, response, html) => {
      if (!error & (response.statusCode === 200)) {
        const $ = cheerio.load(html);

        const ranking = $(".ranking_list");
        console.log(html);
        console.log(ranking.text());
        // 스크래핑 불가

        $(".footer").each((i, el) => {
          const title = $(el).find(".link_naver").text();

          console.log(title);
          // footer와 Header는 스크래핑 가능
        });
      }
    }
  ); 
*/

const Naver = () => {
  const [data, setData] = useState([]);

  const getKeywords = async () => {
    /*
    const api = "https://openapi.naver.com/v1/datalab/search";
    이 외에 오픈 api를 호출하는 방식은 좀 더 익숙하지만 현재 과제의 조건인
    Serverless Integration을 달성할 수 없어 방법에 대해 더 공부해야할듯
    */
  };

  const handleClick = () => {
    getKeywords();
  };

  return (
    <div className="buttons">
      <button
        type="submit"
        className="btn check-btn"
        onClick={() => handleClick()}
      >
        <i class="fas fa-check-circle"></i>
        Check
      </button>
    </div>
  );
};

export default Naver;
