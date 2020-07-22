const proxy = {
    'GET /rest/homepage.json': require('./homepage/homepage.json'),
    'GET /lessons/lessons.json': require('./lessons/lessons.json'),
    'GET /study/study.json': require('./study/study.json') 
}

module.exports = proxy;