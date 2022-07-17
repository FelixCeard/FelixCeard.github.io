courses = {
    'math1': "In <b>Math 1</b>, I learned about all the basics of university math (Groups, proofs, etc...)",
    'prog1': "In <b>Programming 1</b> I got introduced to functional programming languages. Although they not very intuitive, I liked the idea they transmit and did a project using this acquired knowledge.",
    'psy': "I am quite interested in psychology, I find it a fascinating topic, the course covered how humans perceive the world with their eyes. It turns out, the main ideas of convolutional layers are also used by humans in vision.",
    'math2': "<b>Math 2</b>",
    'prog2': "In <b>Programming 2</b>, I learned in more depth how computers work and how I can interact with it using programming languages (memory access, etc...)",
    'mess': "In this course, I learned how most sensors are conceptualize, built, and how they work. I did not write the exam due to time constrains/schedule overlap.",
    'space': "Being passionated about both space and informatics, this course was really amazing. <b>Space informatics</b> taught me in great details how rockets and orbits work. We also did multiple projects, which included using <a href='https://www.agi.com/products/stk'>STK<\a> which is a tool used by multiple space agencies. One of the projects included to recreate the moon landing of an apollo mission using the official report.",
    'math3': "<b>Math 3</b> teaches matrix algebra",
    'algodat': "In <b>Algorithm and Data Structures</b> I learned how to write optimal code, such that it takes full advantage of the available information, and reduce the computation time (or required memory size).",
    'ti': "In <b>Theoretical Informatics</b> I learned about the fundamental problems that the whole informatics field is bounded to.",
    'elem': "In <b>Elements of Machine Learning</b> I learned how machine learning algorithm learn, what their advantages and limitations are, as well as all the assumption made by these.",
    'tada': "In <b>Topics in Algorithmic Data Analysis</b> I learned about the field of data mining and causal inference, which, on a high level, consists of gaining insight in the data. Besides, being challenging, this course taught me what the limitations of current state-of-the-art algorithms are, and also, what the field of data mining (pattern mining, causal inference) has as potential.",
    'stats': "In <b>Statistics Lab</b> I learned about all the basics of statistic.",
    'hlcv': "In <b>High Level Computer Vision</b>, I am doing a project consisting of training a transformer.",
    'seminar': "In this seminar, we are investigating how to debias clinical speech data on dementia. As speech data are prone to gender bias, we are investigating methods for gender-fairness of the method. The challenging part of this seminar is the low amount of data (~150 samples)",
};


function myFunction(course) {

    let writter = document.getElementById('content_pusher');

    writter.innerHTML = courses[course];
    // console.log();


}


