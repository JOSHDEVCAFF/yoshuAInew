
document.getElementById('whatIsChatPGT').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('whatIsPanel').style.display = 'block';
        });
        document.getElementById('whoIsJosh').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('whatIsJosh').style.display = 'block';
        });
        const keywordResponses = [
            { keys: ["hello", "hi", "hey"], response: "Hey there! How can I assist you today?" },
            { keys: ["workout", "exercise"], response: "Try a 30-minute full-body workout including squats, push-ups, and planks!" },
            { keys: ["diet", "nutrition", "food"], response: "A balanced diet includes lean proteins, complex carbs, and healthy fats." },
            { keys: ["bye", "goodbye", "see you"], response: "Goodbye! Stay strong and motivated!" },
            { keys: ["what's your name", "who are you", "introduce yourself"],
              response: "I'm yoshuAI, an AI created to assist you with information and conversations!"
            },
            { keys: ["josh", "who is josh", "about josh"], response: "Josh is a 17-year-old guy who created this AI to help you!" },
            { keys: ["keywords", "commands"], response: "You can ask about workouts, diet, or just say hello!" },
            { keys: ["help", "assist"], response: "I'm here to help! Ask me anything about workouts or diet." },
            { keys: ["how are you", "how are you doing", "what's up"],
              response: "I'm doing great, thanks for asking! How can I help you today?"
            },
            { keys: ["thank you", "thanks"], response: "You're welcome! If you have more questions, feel free to ask!" },
            { keys: ["what is the weather", "weather update", "is it raining"],
              response: "I can help with that! Please provide your location, and I'll check the weather for you."
            },
            { keys: ["motivation", "inspiration"], response: "Stay positive! Every step you take is a step towards your goal!" },
            { keys: ["advice", "suggestion"], response: "Always listen to your body and adjust your workouts accordingly!" },
            { keys: ["fun fact", "interesting fact"], response: "Did you know that regular exercise can boost your mood and energy levels?" },
            { keys: ["quote", "inspirational quote"], response: "Believe in yourself and all that you are. You are capable of amazing things!" },
            { keys: ["feedback", "suggestions"], response: "I appreciate your feedback! It helps me improve." },
            { keys: ["joke", "funny"], response: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
            { keys: ["music", "song", "playlist"], response: "I recommend creating a workout playlist with your favorite upbeat songs!" },
            { keys: ["movie", "film", "recommendation"], response: "How about watching a motivational movie like 'Rocky' or 'The Pursuit of Happyness'?" },
            { keys: ["book", "reading", "recommendation"], response: "I suggest reading 'Atomic Habits' for great insights on building good habits!" },
            { keys: ["hobby", "interest"], response: "Exploring new hobbies can be fun! Have you tried painting or hiking?" },
            { keys: ["travel", "destination"], response: "Traveling is amazing! Do you have a dream destination in mind?" },
            { keys: ["food", "recipe"], response: "How about trying a healthy smoothie with spinach, banana, and almond milk?" },
            { keys: ["sleep", "rest"], response: "Getting enough sleep is crucial for recovery. Aim for 7-9 hours!" },
            { keys: ["stress", "relaxation"], response: "Try deep breathing exercises or meditation to relieve stress." },
            { keys: ["goal", "achievement"], response: "Setting realistic goals is key! Start small and build up." },
            { keys: ["how do I reset my password", "forgot password", "password reset"], response: "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email."},
            { keys: ["how do I contact support", "customer service", "support team"], response: "You can contact support by emailing "},
            { keys: ["what is artificial intelligence", "AI definition", "what is AI"],
              response: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems."
            },
            { keys: ["where are you from", "origin of AI", "where do you live"],
              response: "I don’t have a physical location, but I exist in the digital world to assist you!"
            },
            { keys: ["how many words", "word count", "count words"], response: "I can generate a response with a specific number of words. Just ask!" },
            { keys: ["generate 5 words", "5 words", "five words"], response: generateWordsResponse(5) },
            { keys: ["generate 10 words", "10 words", "ten words"], response: generateWordsResponse(10) },
            { keys: ["generate 15 words", "15 words", "fifteen words"], response: generateWordsResponse(15) },
            { keys: ["generate 20 words", "20 words", "twenty words"], response: generateWordsResponse(20) },
            { keys: ["generate 25 words", "25 words", "twenty-five words"], response: generateWordsResponse(25) },
            { keys: ["generate 30 words", "30 words", "thirty words"], response: generateWordsResponse(30) },
            { keys: ["generate 35 words", "35 words", "thirty-five words"], response: generateWordsResponse(35) },
            { keys: ["generate 40 words", "40 words", "forty words"], response: generateWordsResponse(40) },
            { keys: ["generate 45 words", "45 words", "forty-five words"], response: generateWordsResponse(45) },
            { keys: ["generate 50 words", "50 words", "fifty words"], response: generateWordsResponse(50) },
            { keys: ["what is programming", "define programming", "explain programming",], response: "Programming is the process of creating instructions for computers to perform specific tasks using programming languages." },
            { keys: ["can you teach me how to program", "can you teach me programming", "can you teach me"], response: "Absolutely! I can help you learn programming basics, concepts, and provide examples. Just ask what you want to learn! What would you like to focus on learning more about in programming? Are you interested in web development with HTML, CSS, and JavaScript, or would you prefer diving into something like C++ or C for more low-level programming and software development? Or maybe something else entirely?" },
            { keys: ["what programming languages do you know", "what programming languages can you use", "what programming languages do you understand"], response: "I can assist with a variety of programming languages including Python, JavaScript, Java, C++, C#, Ruby, PHP, Swift, and more. Just let me know what you need help with!" },
            { keys: ["how do I start learning programming", "how to start programming", "how to begin programming"], response: "To start learning programming, choose a beginner-friendly language like Python or JavaScript, find online tutorials or courses, practice coding regularly, and work on small projects to build your skills." },
            {
    "keys": ["how do I start coding C++", "how to begin programming in C++", "where do I start with C++", "how to learn c++"],
    "response": "To start coding in C++, you’ll want to set up a development environment first. Download and install a C++ compiler like GCC or an IDE like Visual Studio or Code::Blocks. Then, begin with basic concepts like variables, loops, and functions. From there, you can explore more advanced topics like object-oriented programming and memory management. You can follow along with tutorials on YouTube, or use online resources like freeCodeCamp and Codecademy."
  },
  {
    "keys": ["what programming languages do you know", "what programming languages can you use", "what programming languages do you understand"],
    "response": "I can assist with a variety of programming languages including Python, JavaScript, Java, C++, C#, Ruby, PHP, Swift, and more. Just let me know what you need help with!"
  },
  {
    "keys": ["how do I start learning programming", "how to start programming", "how to begin programming"],
    "response": "To start learning programming, choose a beginner-friendly language like Python or JavaScript, find online tutorials or courses, practice coding regularly, and work on small projects to build your skills."
  },
  {
    "keys": ["how do I learn HTML, CSS, JavaScript", "how to start web development", "beginner web development resources"],
    "response": "If you want to learn HTML, CSS, and JavaScript, start by mastering HTML and CSS for creating and styling webpages. Then, dive into JavaScript to add interactivity. There are plenty of free resources like freeCodeCamp, W3Schools, and YouTube tutorials to guide you. It’s also a great idea to build small projects like personal websites or interactive to-do apps to apply your learning."
  },
  {
    "keys": ["how to learn C#", "beginner C# programming", "getting started with C#"],
    "response": "To get started with C#, install Visual Studio, which has a lot of helpful tools for writing C# code. Begin with learning the basics like variables, conditionals, and loops. After that, explore object-oriented programming concepts. Websites like Microsoft Learn, Udemy, or YouTube tutorials can provide structured courses for beginners."
  },
  {
  "keys": ["why can't you answer my question", "why don't you understand me", "why are you not answering properly", "why do you give wrong answers", "whats wrong with you", "what cant you understand", "thats incorrect", "wrong answer", "wrong", "incorrect", "you are wrong", "you don't understand", "you don't know", "you don't get it", "you don't understand me", "you don't know what I'm saying", "you don't know what I mean", "you don't know what I want", "you don't know what I'm asking", "you don't know what I'm trying to say"],
  "response": "I'm just a chatbot, so I don’t always understand everything perfectly. I try my best to help based on the words and phrases you use, but I'm not a real human or a full AI—I can only respond with what I've been programmed to recognize. If something doesn’t make sense, feel free to rephrase your question and I’ll try again!"
},
{
  "keys": ["how to code"],
  "response": "Coding is the process of writing instructions for a computer to follow. To start coding, choose a beginner-friendly language like Python or JavaScript. Then, find some tutorials on YouTube or websites like freeCodeCamp or Codecademy. Start with simple exercises like printing messages or creating basic programs, and build your way up by practicing regularly. Don’t worry if it feels hard at first—everyone starts somewhere!"
},
  {
    "keys": ["what is python"],
    "response": "Python is a high-level programming language known for its readability and versatility. It’s widely used for web development, data analysis, artificial intelligence, automation, and more. Its simple syntax makes it a popular choice for beginners."
  },
  {
    "keys": ["what is javascript"],
    "response": "JavaScript is a programming language mainly used for building interactive and dynamic websites. It runs directly in web browsers and can be used alongside HTML and CSS to create modern web applications."
  },
  {
    "keys": ["best way to learn coding"],
    "response": "The best way to learn coding is by combining theory with practice. Start with tutorials or courses to understand the basics, then build small projects to apply what you learn. Platforms like freeCodeCamp, Codecademy, and YouTube are great resources."
  },
  {
    "keys": ["what is html"],
    "response": "HTML (HyperText Markup Language) is the standard language used to structure content on the web. It defines elements like headings, paragraphs, links, images, and more, forming the backbone of every website."
  },
  {
    "keys": ["what is css"],
    "response": "CSS (Cascading Style Sheets) is a language used to style and design web pages. It controls colors, fonts, layouts, and spacing, allowing developers to make websites visually appealing."
  },
  {
    "keys": ["what is debugging"],
    "response": "Debugging is the process of finding and fixing errors (bugs) in code. Programmers use debugging tools or print statements to trace issues and ensure their programs run correctly."
  },
  {
    "keys": ["how to start web development", "start web development"],
    "response": "To start web development, first learn HTML, CSS, and JavaScript. Then practice by building small websites and projects. Once comfortable, explore frameworks like React or backend tools like Node.js to create full web applications."
  },
  {
    "keys": ["mandaue city college", "mcc", "what is mandaue city college"],
    "response": "Mandaue City College (MCC) is a government-run higher education institution in Mandaue City, Cebu, Philippines. It offers degree and diploma programs aimed to provide affordable tertiary education to local students. Some programs have CHED Certificate of Program Compliance (COPC) while others may still be under compliance review. Always confirm COPC status for the specific program you care about.",
    "code_python": "def answer():\n    return \"Mandaue City College (MCC) is a government-run higher education institution in Mandaue City, Cebu, Philippines. Check CHED for program COPC before enrolling.\"",
    "code_js": "function answer(){\n  return 'Mandaue City College (MCC) is a government-run higher education institution in Mandaue City, Cebu, Philippines. Check CHED for program COPC before enrolling.'\n}"
  },
  {
    "keys": ["where is mandaue city college located", "mcc location", "address mandaue city college"],
    "response": "MCC is located in Mandaue City — its main campus is inside the Mandaue City Cultural and Sports Complex (Barangay Centro, Don Andres Soriano Ave.). If you need exact campus directions, check the city government or MCC official pages for the latest campus map.",
    "code_python": "def location():\n    return 'MCC main campus: Mandaue City Cultural and Sports Complex, Don Andres Soriano Ave., Barangay Centro, Mandaue City (verify on official site for updates).'\n",
    "code_js": "const location = () => 'MCC main campus: Mandaue City Cultural and Sports Complex, Don Andres Soriano Ave., Barangay Centro, Mandaue City (verify on official site for updates).';"
  },
  {
    "keys": ["is mandaue city college legit", "mcc recognized", "is mcc accredited"],
    "response": "Yes — the legitimate, city-run Mandaue City College is recognized and operates CHED-regulated programs. Note: there was a separate entity that used the same name (MCC-Cañete) which CHED declared non-compliant; degrees from any non-recognized branch are not valid. Always confirm the program's COPC or CHED recognition before enrolling.",
    "code_python": "def legitimacy():\n    return 'The city-run Mandaue City College is a recognized local college for CHED-regulated programs. Always confirm program COPC with CHED.'\n",
    "code_js": "function legitimacy(){\n  return 'The city-run Mandaue City College is a recognized local college for CHED-regulated programs. Always confirm program COPC with CHED.'\n}"
  },
  {
    "keys": ["what programs does mandaue city college offer", "mcc programs", "courses mcc"],
    "response": "MCC offers a mix of degree programs (Education, Political Science, Business Administration, Public Administration, Information Technology, Hotel & Restaurant Management, Tourism, Social Work, Industrial Technology, etc.) and diploma/short programs. Program availability can change, so check MCC's current program list.",
    "code_python": "def programs():\n    return ['Education','Political Science','Business Administration','Public Administration','Information Technology','HRM','Tourism','Social Work','Industrial Technology']\n",
    "code_js": "const programs = () => ['Education','Political Science','Business Administration','Public Administration','Information Technology','HRM','Tourism','Social Work','Industrial Technology'];"
  },
  {
    "keys": ["how good is mandaue city college", "mcc quality", "is mcc good"],
    "response": "MCC is a solid, affordable option for local students — especially if the program has CHED COPC. Strengths: low cost and city support. Weaknesses: recent crowding and infrastructure limits while enrollment grows. If your program is COPC-approved, you will likely get a legitimate, practical education at a low cost.",
    "code_python": "def quality():\n    return 'Affordable and useful for locals; check COPC for program quality. Watch for classroom capacity issues during peak enrollment.'\n",
    "code_js": "const quality = () => 'Affordable and useful for locals; check COPC for program quality. Watch for classroom capacity issues during peak enrollment.';"
  },
  {
    "keys": ["how to check if program is copc", "check copc mcc", "is my mcc course recognized"],
    "response": "To check COPC/recognition: 1) Visit CHED Region 7 (or CHED national) website and search their COPC/program compliance lists; 2) Ask MCC’s registrar for official documents; 3) Verify any announcements from the Mandaue City government. Keep screenshots or copies of official CHED/COPC notices.",
    "code_python": "def check_copc():\n    steps = [\n      'Visit CHED (national or Region 7) website and search COPC lists',\n      \"Ask MCC registrar for official COPC/recognition documents\",\n      'Check Mandaue City Gov announcements'\n    ]\n    return steps\n",
    "code_js": "function checkCopc(){\n  return [\n    'Visit CHED (national or Region 7) website and search COPC lists',\n    'Ask MCC registrar for official COPC/recognition documents',\n    'Check Mandaue City Government announcements'\n  ];\n}"
  },
  {
    "keys": ["warning about fake mcc", "mcc canete", "mcc canete not recognized"],
    "response": "Be careful: a different institution once used the same name (often called MCC-Cañete) and was not CHED-compliant. Degrees from an unrecognized branch are not valid. Always confirm the campus, the administering body (Mandaue City government), and CHED recognition before accepting any diploma or transcript.",
    "code_python": "def warning():\n    return 'Warning: confirm you are enrolling in the city-run MCC (not any other similarly named entity). Verify CHED status.'\n",
    "code_js": "const warning = () => 'Warning: confirm you are enrolling in the city-run MCC (not any other similarly named entity). Verify CHED status.';"
  },
  {
    "keys": ["compare mcc to other schools near mandaue", "mcc vs usc vs uc", "mcc vs private colleges mandaue"],
    "response": "Comparison: MCC is typically cheaper (city-run) and focused on access; universities like University of San Carlos (USC) or University of Cebu (UC) usually offer broader program choices, more facilities, and research options but at higher cost. Choose MCC for affordability and local access; choose private/university if you need specialized facilities, reputation, or programs not offered by MCC.",
    "code_python": "def compare():\n    return {\n      'MCC':'Low tuition, accessible, good for local students',\n      'USC/UC':'Wider program choices, stronger research and facilities, higher tuition'\n    }\n",
    "code_js": "const compare = () => ({\n  MCC: 'Low tuition, accessible, good for local students',\n  USC_UC: 'Wider program choices, stronger research and facilities, higher tuition'\n});"
  },
  {
    "keys": ["mcc quick summary", "tell me about mcc", "info mcc short"],
    "response": "Quick: Mandaue City College — city-run, affordable, offers multiple degree/diploma programs. Confirm the specific program’s CHED/COPC status before enrolling. Expect good value but possible crowding until infrastructure expands.",
    "code_python": "def quick():\n    return 'Mandaue City College — city-run, affordable, multiple programs. Verify program recognition (CHED/COPC).'\n",
    "code_js": "const quick = () => 'Mandaue City College — city-run, affordable, multiple programs. Verify program recognition (CHED/COPC).';"
  },

  {
    "keys": ["advice to finish college", "how to survive college", "tips to graduate"],
    "response": "Stay consistent and persistent. College is not about being perfect, but about pushing through challenges one step at a time. Focus on small daily wins — finishing assignments, attending classes, reviewing notes — and they’ll add up to graduation.",
    "code_python": "def advice():\n    return 'Stay consistent and persistent. Focus on small daily wins — finishing assignments, attending classes, reviewing notes — and they’ll add up to graduation.'",
    "code_js": "function advice(){\n  return 'Stay consistent and persistent. Focus on small daily wins — finishing assignments, attending classes, reviewing notes — and they’ll add up to graduation.'\n}"
  },
  {
    "keys": ["motivation college", "how to stay motivated in college", "college motivation"],
    "response": "Remember why you started. Think of your family, your dreams, and your future self who will thank you for not giving up. Motivation fades, but discipline and purpose will carry you through.",
    "code_python": "def motivation():\n    return 'Remember why you started. Think of your family, your dreams, and your future self who will thank you for not giving up.'",
    "code_js": "const motivation = () => 'Remember why you started. Think of your family, your dreams, and your future self who will thank you for not giving up.';"
  },
  {
    "keys": ["study habits for success", "how to study in college", "college study advice"],
    "response": "Develop strong habits: set a schedule, review regularly, and avoid cramming. Break big tasks into smaller ones. Consistency beats last-minute effort every time.",
    "code_python": "def study_habits():\n    return 'Set a schedule, review regularly, and avoid cramming. Break big tasks into smaller ones. Consistency beats last-minute effort.'",
    "code_js": "function studyHabits(){\n  return 'Set a schedule, review regularly, and avoid cramming. Break big tasks into smaller ones. Consistency beats last-minute effort.'\n}"
  },
  {
    "keys": ["overcome challenges in college", "college struggles advice", "i want to give up college"],
    "response": "Challenges are normal — financial problems, stress, or hard subjects don’t mean you should quit. Seek help from friends, mentors, or student services. Every struggle you overcome makes graduation even more meaningful.",
    "code_python": "def overcome():\n    return 'Challenges are normal. Seek help from friends, mentors, or student services. Every struggle you overcome makes graduation even more meaningful.'",
    "code_js": "const overcome = () => 'Challenges are normal. Seek help from friends, mentors, or student services. Every struggle you overcome makes graduation even more meaningful.';"
  },
  {
    "keys": ["finish college faster", "graduate early", "college efficiency"],
    "response": "To finish faster, plan your subjects wisely, avoid dropping unnecessary classes, and balance your load. But remember: speed matters less than finishing strong and learning well.",
    "code_python": "def finish_fast():\n    return 'Plan subjects wisely, avoid dropping, and balance your load. Speed matters less than finishing strong and learning well.'",
    "code_js": "function finishFast(){\n  return 'Plan subjects wisely, avoid dropping, and balance your load. Speed matters less than finishing strong and learning well.'\n}"
  },
  {
    "keys": ["mental health in college", "college stress advice", "self care in college"],
    "response": "Take care of yourself. Rest, eat well, and give your mind breaks. You can’t pour from an empty cup. A healthy body and mind will help you study better and last longer in college.",
    "code_python": "def mental_health():\n    return 'Take care of yourself. Rest, eat well, and give your mind breaks. A healthy body and mind helps you study better.'",
    "code_js": "const mentalHealth = () => 'Take care of yourself. Rest, eat well, and give your mind breaks. A healthy body and mind helps you study better.';"
  },
  {
    "keys": ["where is cebu city", "cebu location", "cebu city philippines", "cebu city"],
    "response": "Cebu City is located in the province of Cebu, in the Central Visayas region of the Philippines. It is the oldest city in the country, often called the 'Queen City of the South.'",
    "code_python": "def cebu_location():\n    return 'Cebu City is in Cebu province, Central Visayas, Philippines — known as the Queen City of the South.'",
    "code_js": "function cebuLocation(){\n  return 'Cebu City is in Cebu province, Central Visayas, Philippines — known as the Queen City of the South.'\n}"
  },
  {
    "keys": ["about cebu city", "cebu history", "cebu city info"],
    "response": "Cebu City is the oldest city in the Philippines, founded in 1565 by Spanish colonizers. It is a major center of commerce, trade, tourism, and education in the Visayas. Cebu is also famous for the Sinulog Festival, Magellan’s Cross, and historic churches.",
    "code_python": "def about_cebu():\n    return 'Cebu City is the oldest city in the Philippines (founded 1565). It is a hub for commerce, tourism, and culture, famous for Sinulog Festival and Magellan’s Cross.'",
    "code_js": "const aboutCebu = () => 'Cebu City is the oldest city in the Philippines (founded 1565). It is a hub for commerce, tourism, and culture, famous for Sinulog Festival and Magellan’s Cross.';"
  },
  {
    "keys": ["where is mandaue city", "mandaue location", "mandaue city philippines", "mandaue city"],
    "response": "Mandaue City is part of Metro Cebu in the Philippines. It is located on the north side of Cebu City, connected by bridges to Mactan Island (where the airport is).",
    "code_python": "def mandaue_location():\n    return 'Mandaue City is in Metro Cebu, north of Cebu City, connected to Mactan Island via bridges.'",
    "code_js": "function mandaueLocation(){\n  return 'Mandaue City is in Metro Cebu, north of Cebu City, connected to Mactan Island via bridges.'\n}"
  },
  {
    "keys": ["about mandaue city", "mandaue history", "mandaue info"],
    "response": "Mandaue City is an industrial and commercial hub in Metro Cebu. It was once a settlement during the Spanish era and is now known for furniture, manufacturing, and trade. It officially became a city in 1969.",
    "code_python": "def about_mandaue():\n    return 'Mandaue City is an industrial hub in Metro Cebu, known for furniture and manufacturing. It became a city in 1969.'",
    "code_js": "const aboutMandaue = () => 'Mandaue City is an industrial hub in Metro Cebu, known for furniture and manufacturing. It became a city in 1969.';"
  },
  {
    "keys": ["difference cebu and mandaue", "compare cebu city and mandaue city"],
    "response": "Cebu City is the cultural, historical, and commercial capital of the Visayas, while Mandaue City is more industrial and commercial. Cebu City is bigger and older, while Mandaue is smaller but important for trade and industry.",
    "code_python": "def compare_cebu_mandaue():\n    return 'Cebu City is the cultural and historical hub; Mandaue City is industrial and commercial. Cebu is larger and older; Mandaue is smaller but vital for trade.'",
    "code_js": "function compareCebuMandaue(){\n  return 'Cebu City is the cultural and historical hub; Mandaue City is industrial and commercial. Cebu is larger and older; Mandaue is smaller but vital for trade.'\n}"
  },
  {
    "keys": ["tourist spots cebu", "cebu attractions", "things to do in cebu"],
    "response": "Top spots in Cebu City include Magellan’s Cross, Basilica Minore del Santo Niño, Fort San Pedro, Taoist Temple, and Tops Lookout. Nearby, you can also enjoy beaches, diving, and island-hopping in Mactan.",
    "code_python": "def cebu_tourist_spots():\n    return ['Magellan’s Cross','Basilica del Santo Niño','Fort San Pedro','Taoist Temple','Tops Lookout','Mactan beaches']",
    "code_js": "const cebuTouristSpots = () => ['Magellan’s Cross','Basilica del Santo Niño','Fort San Pedro','Taoist Temple','Tops Lookout','Mactan beaches'];"
  },
  {
    "keys": ["tourist spots mandaue", "mandaue attractions", "things to do in mandaue"],
    "response": "Mandaue City is less known for tourism but has attractions like the National Shrine of St. Joseph, local food spots, and furniture showrooms. It’s also a gateway to Mactan Island and Cebu City.",
    "code_python": "def mandaue_tourist_spots():\n    return ['National Shrine of St. Joseph','Local food hubs','Furniture showrooms','Gateway to Mactan and Cebu City']",
    "code_js": "const mandaueTouristSpots = () => ['National Shrine of St. Joseph','Local food hubs','Furniture showrooms','Gateway to Mactan and Cebu City'];"
  },
  {
    "keys": ["what is the bible", "bible meaning", "explain bible", "bible"],
    "response": "The Bible is the holy book of Christianity. It is made up of the Old Testament and the New Testament, containing God’s word, teachings, history, and guidance for faith and life.",
    "code_python": "def what_is_bible():\n    return 'The Bible is the holy book of Christianity, with the Old and New Testaments, guiding faith and life.'",
    "code_js": "function whatIsBible(){\n  return 'The Bible is the holy book of Christianity, with the Old and New Testaments, guiding faith and life.'\n}"
  },
  {
    "keys": ["what is jesus", "who is jesus", "jesus christ meaning"],
    "response": "Jesus Christ is the Son of God and the Savior in Christianity. He was born in Bethlehem, lived a sinless life, performed miracles, died on the cross for humanity’s sins, and rose again on the third day.",
    "code_python": "def who_is_jesus():\n    return 'Jesus Christ is the Son of God, Savior of humanity, who died for sins and rose again.'",
    "code_js": "const whoIsJesus = () => 'Jesus Christ is the Son of God, Savior of humanity, who died for sins and rose again.';"
  },
  {
    "keys": ["what is the gospel", "gospel meaning", "good news in bible"],
    "response": "The Gospel means 'Good News' — that Jesus died for our sins, was buried, and rose again so that all who believe in Him can have forgiveness and eternal life.",
    "code_python": "def gospel():\n    return 'The Gospel is the Good News: Jesus died for our sins, was buried, and rose again for eternal life to believers.'",
    "code_js": "function gospel(){\n  return 'The Gospel is the Good News: Jesus died for our sins, was buried, and rose again for eternal life to believers.'\n}"
  },
  {
    "keys": ["why read the bible", "importance of bible", "bible purpose"],
    "response": "Reading the Bible helps you know God, understand His promises, gain wisdom, and be guided in life. It strengthens faith and draws you closer to God.",
    "code_python": "def why_read_bible():\n    return 'The Bible helps you know God, understand His promises, gain wisdom, and strengthen faith.'",
    "code_js": "const whyReadBible = () => 'The Bible helps you know God, understand His promises, gain wisdom, and strengthen faith.';"
  },
  {
    "keys": ["what is faith", "meaning of faith in bible", "faith definition"],
    "response": "Faith is trusting and believing in God, even when you cannot see Him. According to Hebrews 11:1 (NIV), 'Faith is confidence in what we hope for and assurance about what we do not see.'",
    "code_python": "def faith():\n    return 'Faith is trusting and believing in God, even when unseen. Hebrews 11:1 (NIV) defines faith as confidence in what we hope for and assurance about what we do not see.'",
    "code_js": "function faith(){\n  return 'Faith is trusting and believing in God, even when unseen. Hebrews 11:1 (NIV) defines faith as confidence in what we hope for and assurance about what we do not see.'\n}"
  },
  {
    "keys": ["how to be saved", "salvation meaning", "how to accept jesus"],
    "response": "Salvation comes by believing in Jesus Christ — that He died for your sins and rose again. Confess your faith in Him, accept Him as Lord and Savior, and you will be saved (Romans 10:9, NIV).",
    "code_python": "def salvation():\n    return 'Salvation comes by believing Jesus died for your sins and rose again. Confess Him as Lord and Savior (Romans 10:9, NIV).'",
    "code_js": "const salvation = () => 'Salvation comes by believing Jesus died for your sins and rose again. Confess Him as Lord and Savior (Romans 10:9, NIV).';"
  },
  {
    "keys": ["what is prayer", "why pray", "prayer meaning"],
    "response": "Prayer is talking to God. It is how believers express thanks, confess sins, ask for help, and build a relationship with Him. Prayer strengthens faith and brings peace.",
    "code_python": "def prayer():\n    return 'Prayer is talking to God — giving thanks, confessing sins, asking for help, and building relationship with Him.'",
    "code_js": "function prayer(){\n  return 'Prayer is talking to God — giving thanks, confessing sins, asking for help, and building relationship with Him.'\n}"
  },
  {
    "keys": ["holy spirit meaning", "who is the holy spirit", "what is holy spirit"],
    "response": "The Holy Spirit is the Spirit of God, given to believers to guide, comfort, and empower them. He helps Christians live faithfully and reminds them of God’s truth.",
    "code_python": "def holy_spirit():\n    return 'The Holy Spirit is God’s Spirit who guides, comforts, and empowers believers to live faithfully.'",
    "code_js": "const holySpirit = () => 'The Holy Spirit is God’s Spirit who guides, comforts, and empowers believers to live faithfully.';"
  },
                    {"keys": ["Degamo"], "Very smiling, crazy human being"
                    }

];


        


        function generateWordsResponse(numWords) {
        const words = [
            "Here", "is", "a", "response", "with", "exactly", "the", "requested", "number", "of", "words",
            "to", "assist", "you", "better", "and", "more", "clearly", "with", "what", "you", "want",
            "to", "know", "or", "ask", "about", "in", "this", "chatbot", "experience", "and", "interaction",
            "that", "you", "are", "having", "right", "now", "with", "me", "and", "I", "hope", "this", "is", "helpful",
            "and", "satisfactory", "for", "your", "needs", "and", "questions", "that", "you", "may", "have",
        ];
        
        const responseWords = words.slice(0, numWords);
        return responseWords.join(" ") + ".";
    }

        document.getElementById('infoButton').addEventListener('click', function() {
            const tooltip = document.getElementById('infoTooltip');
            tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
        });

        document.getElementById('closeTooltip').addEventListener('click', function() {
            document.getElementById('infoTooltip').style.display = 'none';
        });

        document.getElementById('questionForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const question = document.getElementById('question').value.trim();
            if (question) {
                handleQuestion(question);
                document.getElementById('question').value = ''; // Clear input
            }
        });

        function addMessage(sender, text) {
            const chatContainer = document.getElementById('chat-container');
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${sender}`;
            messageElement.innerHTML = `
                            <p>${text}</p>
                        `;
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to latest message
            return messageElement.querySelector('p'); // Return the paragraph element for updates
        }

        function showLoading() {
            const chatContainer = document.getElementById('chat-container');
            const loadingElement = document.createElement('div');
            loadingElement.id = 'loading';
            loadingElement.className = 'chat-message bot';
            loadingElement.innerHTML = `
                <p><span>.</span><span>.</span><span>.</span></p>
            `;
            chatContainer.appendChild(loadingElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function hideLoading() {
            const loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.remove();
            }
        }

        function getKeywordResponse(question) {
            const lowerQuestion = question.toLowerCase();
            for (const entry of keywordResponses) {
                if (entry.keys.some(key => lowerQuestion.includes(key))) {
                    return entry.response;
                }
            }
            return "Sorry, I didn't quite understand that. I'm just an experimental chatbot, not a fully-fledged AI, so my responses are limited. Feel free to ask something else, and I'll do my best to help with the topics I know about!"; // Default response
        }

        async function askOnlineAI(question) {
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
            method: "POST",
            headers: {
                "Authorization": "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", // replace with your Hugging Face key
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: question })
        });

        const data = await response.json();
        if (data.error) {
            console.error("Hugging Face error:", data.error);
            return null; // if error, fallback to keywords
        }
        return data[0].generated_text;
    } catch (error) {
        console.error("Online AI error:", error);
        return null; // fallback
    }
}


        
       async function handleQuestion(question) {
    addMessage('user', question);
    showLoading();

    let responseText;

    // Try Hugging Face AI first
    responseText = await askOnlineAI(question);

    // If AI fails, use your old keyword responses
    if (!responseText) {
        responseText = getKeywordResponse(question);
    }

    hideLoading();
    const botMessageElement = addMessage('bot', '');
    displayResponseWordByWord(responseText, botMessageElement);
}



        // Word-by-word display effect
        function displayResponseWordByWord(text, container) {
            const words = text.split(' ');
            let index = 0;
            container.textContent = ''; // Clear the container

            const interval = setInterval(() => {
                if (index < words.length) {
                    container.textContent += words[index] + ' ';
                    index++;
                } else {
                    clearInterval(interval); // Stop the interval after all words are shown
                }
            }, 100); // Adjust the delay for word display speed
        }

        (function(){
            var logo = document.getElementById('introLogo');

            function hideLogoNow() {
                if (!logo) return;
                if (!logo.classList.contains('slide-up-logo')) {
                    logo.classList.add('slide-up-logo');
                    logo.addEventListener('animationend', function () {
                        if (logo && logo.parentNode) logo.parentNode.removeChild(logo);
                    }, { once: true });
                }
            }

            function attach() {
                var intro = document.getElementById('introText');
                if (!logo) return;

                // If intro already gone or already slid, hide logo immediately
                if (!intro || intro.classList.contains('slide-up')) {
                    hideLogoNow();
                    return;
                }

                // Watch for the intro gaining the slide-up class
                var attrObserver = new MutationObserver(function(muts){
                    for (var m of muts) {
                        if (m.attributeName === 'class' && intro.classList.contains('slide-up')) {
                            hideLogoNow();
                            attrObserver.disconnect();
                            break;
                        }
                    }
                });
                attrObserver.observe(intro, { attributes: true });

                // Also watch for the intro being removed from the DOM
                if (intro.parentNode) {
                    var parentObserver = new MutationObserver(function(muts){
                        for (var m of muts) {
                            if (m.removedNodes && m.removedNodes.length) {
                                for (var n of m.removedNodes) {
                                    if (n === intro) {
                                        hideLogoNow();
                                        parentObserver.disconnect();
                                        return;
                                    }
                                }
                            }
                        }
                    });
                    parentObserver.observe(intro.parentNode, { childList: true });
                }
            }

            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach);
            else attach();
        })();

        (function(){
            var intro = document.getElementById('introText');
            var chat = document.getElementById('chat-container');
            if (!intro || !chat) return;

            function triggerSlide() {
                if (intro.classList.contains('slide-up')) return;
                intro.classList.add('slide-up');
                intro.addEventListener('animationend', function () {
                    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
                }, { once: true });
            }

            // If there are already messages, hide immediately
            if (chat.children.length > 0) {
                // run after paint so animation can apply if desired, or remove immediately
                requestAnimationFrame(triggerSlide);
                return;
            }

            // Observe for the first added message
            var observer = new MutationObserver(function(mutations, obs){
                for (var m of mutations) {
                    if (m.addedNodes && m.addedNodes.length) {
                        triggerSlide();
                        obs.disconnect();
                        break;
                    }
                }
            });
            observer.observe(chat, { childList: true });
        })();

        document.addEventListener('DOMContentLoaded', function () {
                var intro = document.getElementById('introText');
                var form = document.getElementById('questionForm');
                var input = document.getElementById('question');

                function triggerSlide() {
                    if (!intro || intro.classList.contains('slide-up')) return;
                    intro.classList.add('slide-up');
                    intro.addEventListener('animationend', function(){ 
                        if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
                    }, { once: true });
                }

                if (input) {
                    input.addEventListener('focus', triggerSlide, { once: true });
                    input.addEventListener('input', triggerSlide, { once: true });
                }
                if (form) {
                    form.addEventListener('submit', function (e) {
                        // keep default behavior unless you want to prevent submit
                        triggerSlide();
                    }, { once: true });
                }
            });


