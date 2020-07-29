const infos = require('./lessons/lessons.json');
const proxy = {
    'GET /rest/homepage': require('./homepage/homepage.json'),
    'GET /lessons/lesson':  require('./lessons/lesson.json'),  
    'GET /lessons/lessons':  (req, res) => { 
        const { offset } = req.query; 
        let data = infos.infos.slice(Number(offset), Number(offset) + 10);  
        res.json({
            "infos": data
        })
    },  
    'GET /study/study.json': require('./study/study.json'),
    'GET /find/find.json': require('./find/find.json')
}

module.exports = proxy;