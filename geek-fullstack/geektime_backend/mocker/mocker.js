const proxy = {
    'GET /rest/homepage': require('./homepage/homepage.json'),
    'GET /lessons/lesson':  require('./lessons/lesson.json'),  
    'GET /lessons/lessons':  require('./lessons/lessons.json'),  
    'GET /study/study.json': require('./study/study.json'),
    'GET /find/find.json': require('./find/find.json')
}

module.exports = proxy;