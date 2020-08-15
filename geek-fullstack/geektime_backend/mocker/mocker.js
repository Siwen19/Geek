const infos = require("./lessons/lessons.json");
const lsninfos = require("./lessons/lessonInfo.json");
const introinfos = require("./lessons/lessonIntro.json");
const catalogInfos = require("./lessons/chapters.json");
const catalogInfos1 = require("./lessons/articles.json");
const recommendInfos = require("./lessons/recommend.json");
const commentInfos = require("./lessons/comments.json");

const proxy = {
  "GET /home/home": require("./homepage/homepage.json"),
  "GET /lessons/lesson": require("./lessons/lesson.json"),
  "GET /lessons/lessons": (req, res) => {
    const { offset } = req.query;
    let data = infos.infos.slice(Number(offset), Number(offset) + 10);
    res.json({
      infos: data,
    });
  },
  "GET /lessons/lessons/:id": (req, res) => {
    const { tab } = req.query;
    const requestId = req.originalUrl.split("/")[3].split("?")[0];
    let data; 
    if (tab !== undefined) {
      switch (tab) {
        case "intro":
          data = introinfos.data.filter(e => e.id == requestId);
          break;
        case "catalog":
          const data1 = catalogInfos.filter(e => e.id == requestId);
          const data2 = catalogInfos1.filter(e => e.id == requestId);
          data = [data1, data2];
          break;
        case "recommend":
          data = recommendInfos.data.filter(e => e.id == requestId);
          break;
        case "comment":
          data = commentInfos.filter(e => e.id == requestId);
          break;
        default:
          return;
      }
    } else {
      data = lsninfos.data.filter((e) => e.id == requestId);
    }
    res.json({
      "intros": data,
    });
  },
  "GET /study/study.json": require("./study/study.json"),
  "GET /find/find": require("./find/find.json"),
};

module.exports = proxy;
