let languageFlag = 'english';

const englishButton = document.getElementById('eng');
const frenchButton = document.getElementById('fra');
const russianButton = document.getElementById('rus');
const titleName = document.getElementById('titleName');
const name = document.getElementById('name');
const actualLanguage = document.getElementById('actualLanguage');
const profession = document.getElementById('profession');
const city = document.getElementById('city');
const skills = document.getElementById('skills');
const languages = document.getElementById('languages');
const frenchLanguage = document.getElementById('frenchLanguage');
const englishLanguage = document.getElementById('englishLanguage');
const ukrainianLanguage = document.getElementById('ukrainianLanguage');
const russianLanguage = document.getElementById('russianLanguage');
const profile = document.getElementById('profile');
const profileText = document.getElementById('profileText');
const experience = document.getElementById('experience');
const skillFactoryExp = document.getElementById('skillFactoryExp');
const skillFactoryExpText = document.getElementById('skillFactoryExpText');
const legionnaireExp = document.getElementById('legionnaireExp');
const legionnaireExpTitle = document.getElementById('legionnaireExpTitle');
const legionnaireExpText = document.getElementById('legionnaireExpText');
const education = document.getElementById('education');
const matriceEduTitle = document.getElementById('matriceEduTitle');
const matriceEdu = document.getElementById('matriceEdu');
const skillFactoryEduTitle = document.getElementById('skillFactoryEduTitle');
const skillFactoryEdu = document.getElementById('skillFactoryEdu');
const frEduTitle = document.getElementById('frEduTitle');
const frEdu = document.getElementById('frEdu');
const uaEduTitle = document.getElementById('uaEduTitle');
const uaEdu = document.getElementById('uaEdu');
const hobby = document.getElementById('hobby');
const hobbyText = document.getElementById('hobbyText');
const allFirstScaleLang = document.querySelectorAll('.languages .first-scale');

function openNav() {
    document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}
function translateToEnglish() {
    if (languageFlag !== 'english') {
        titleName.textContent = 'Komin Rostyslav CV';
        name.textContent = 'ROSTYSLAV KOMIN';
        actualLanguage.textContent = 'ENGLISH';
        profession.innerHTML = 'Web Developer<br>Full-Stack';
        city.textContent = 'Fontenay-sous-Bois';
        city.href = 'https://en.wikipedia.org/wiki/Fontenay-sous-Bois';
        skills.textContent = 'SKILLS';
        languages.textContent = 'LANGUAGES';
        frenchLanguage.textContent = 'French';
        englishLanguage.textContent = 'English';
        ukrainianLanguage.textContent = 'Ukrainian';
        russianLanguage.textContent = 'Russian';
        profile.textContent = 'PROFILE';
        profileText.textContent = 'Former legionnaire of the French Foreign Legion with two master economic degrees, as well as 3 years of management experience and 2 year of Full-Stack Web Development experience in Python and JavaScript. In search of new professional experience and skills. Ambitious, disciplined and scrupulous.';
        experience.textContent = 'EXPERIENCE';
        skillFactoryExp.innerHTML = 'SkillFactory, MATRICE<br>October 2020 - March 2022';
        skillFactoryExpText.innerHTML = 'Developed different projects as part of my study:<br />- copy of the social network<br /><span class="in-parentheses">JavaScript, Node, Express, React, Sequelize, PostgreSQL, HTML/CSS, Bootstrap</span><br />- desktop messenger<br /><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br />- website to book participation in the "Escape Games”<br /><span class="in-parentheses">JavaScript, Node, Express, Handlebars, Sequelize, PostgreSQL, Bootstrap</span><br />- weather forecast website/app<br /><span class="in-parentheses">JavaScript, React, HTML/CSS, Material-UI (MUI), AJAX, Webpack</span><br />- business card website deployed on “GitHub Pages”<br /><span class="in-parentheses">JavaScript, HTML/CSS</span><br />- bot for Telegram messenger<br /><span class="in-parentheses">Python, pyTelegramBotAPI</span><br />- games: "Tic-Tac-Toe", "Battleship" and “Connect Four”<br /><span class="in-parentheses">Python, JavaScript</span>';
        legionnaireExp.textContent = 'Legionnaire';
        legionnaireExpTitle.innerHTML = 'French Foreign Legion<br>April 2015 - July 2020';
        legionnaireExpText.innerHTML = '- commanded a squad of 3-5 people<br><span class="in-parentheses">organization and distribution of missions, training, leadership</span><br>- piloted heavy equipment<br><span class="in-parentheses">dump truck, loader, excavator, bulldozer</span><br>- engaged in computer maintenance<br><span class="in-parentheses">installation/configuration of OS and software, PC assembly</span>';
        education.textContent = 'EDUCATION';
        matriceEduTitle.textContent = 'JavaScript Full-Stack Web Developer';
        matriceEdu.innerHTML = 'MATRICE «Tremplin Full-Stack»<br>September 2021 - March 2022';
        skillFactoryEduTitle.textContent = 'Python Full-Stack Web Developer';
        skillFactoryEdu.innerHTML = 'SkillFactory<br>October 2020 - till date';
        frEduTitle.textContent = 'Master in Organization Management';
        frEdu.innerHTML = 'University of Auvergne (Clermont-Ferrand 1)<br>September 2008 - June 2013';
        uaEduTitle.textContent = 'Master in Commerce';
        uaEdu.innerHTML = 'Kyiv National University of Trade and Economics<br>September 2007 - June 2012';
        hobby.textContent = 'HOBBY';
        hobbyText.innerHTML = 'if (I\'m not at the computer){<br><span class="hobbies">I do sports (swimming, gym, jogging);</span><br><span class="hobbies">I travel;</span><br><span class="hobbies">I eat (everything except fish);</span><br><span class="hobbies">I sleep;</span><br>}';
        languageFlag = 'english';
        let ruLangScale = document.querySelectorAll('.lang');
        if (ruLangScale) {
            allFirstScaleLang.forEach((firstScaleLang) => firstScaleLang.classList.remove('lang'));
        }
        closeNav();
    } else closeNav();
}
function translateToFrench() {
    if (languageFlag !== 'french') {
        titleName.textContent = 'Komin Rostyslav CV';
        name.textContent = 'ROSTYSLAV KOMIN';
        actualLanguage.textContent = 'FRANÇAIS';
        profession.innerHTML = 'Développeur Web<br>Full-Stack';
        city.textContent = 'Fontenay-sous-Bois';
        city.href = 'https://fr.wikipedia.org/wiki/Fontenay-sous-Bois';
        skills.textContent = 'COMPÉTENCES';
        languages.textContent = 'LANGUES';
        frenchLanguage.textContent = 'Français';
        englishLanguage.textContent = 'Anglais';
        ukrainianLanguage.textContent = 'Ukrainien';
        russianLanguage.textContent = 'Russe';
        profile.textContent = 'PROFIL';
        profileText.textContent = "Diplômé d’un Master en Commerce et Management, ancien militaire de la Légion Étrangère avec 3 ans d'expérience en gestion, en reconversion depuis octobre 2020. À la recherche d'une expérience professionnelle en tant que Développeur Web. Ambitieux, discipliné et scrupuleux.";
        experience.textContent = 'EXPÉRIENCES';
        skillFactoryExp.innerHTML = 'SkillFactory, MATRICE<br>Octobre 2020 - Mars 2022';
        skillFactoryExpText.innerHTML = 'Développé différents projets dans le cadre de ma formation:<br />- une copie du réseau social<br /><span class="in-parentheses">JavaScript, Node, Express, React, Sequelize, PostgreSQL, HTML/CSS, Bootstrap</span><br />- un desktop-messenger<br /><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br />- un site pour réserver la participation aux “Escape Games”<br /><span class="in-parentheses">JavaScript, Node, Express, Handlebars, Sequelize, PostgreSQL, Bootstrap</span><br />- un site/app météo<br /><span class="in-parentheses">JavaScript, React, HTML/CSS, Material-UI (MUI), AJAX, Webpack</span><br />- une carte de visite déployée sur “GitHub Pages”<br /><span class="in-parentheses">JavaScript, HTML/CSS</span><br />- un bot pour Telegram messenger<br /><span class="in-parentheses">Python, pyTelegramBotAPI</span><br />- des jeux: "Tic-Tac-Toe", "Bataille Navale" et “Puissance 4”<br /><span class="in-parentheses">Python, JavaScript</span>';
        legionnaireExp.textContent = 'Légionnaire';
        legionnaireExpTitle.innerHTML = 'Légion Étrangère: 2eme Régiment Etrangère de Génie<br>Avril 2015 - Juillet 2020';
        legionnaireExpText.innerHTML = '- commandé une équipe de 3-5 personnes<br><span class="in-parentheses">organisation et répartition des missions, formation, encadrement</span><br>- piloté des engins lourds<br><span class="in-parentheses">camion-benne, chargeur, pelle hydraulique, bulldozer</span><br>- engagé dans la maintenance informatique<br><span class="in-parentheses">installation/configuration d\'OS et du logiciel, assemblage de PC</span><br>- participé à des missions extérieures<br><span class="in-parentheses">Djibouti</span>';
        education.textContent = 'FORMATIONS';
        matriceEduTitle.textContent = 'JavaScript Full-Stack Développeur Web';
        matriceEdu.innerHTML = 'MATRICE «Tremplin Full-Stack»<br>Septembre 2021 - Mars 2022';
        skillFactoryEduTitle.textContent = 'Python Full-Stack Développeur Web';
        skillFactoryEdu.innerHTML = 'SkillFactory<br>Octobre 2020 - présent';
        frEduTitle.textContent = 'Master en Pilotage des Organisations';
        frEdu.innerHTML = "Université d'Auvergne (Clermont-Ferrand 1)<br>Septembre 2008 - Juin 2013";
        uaEduTitle.textContent = 'Master en Commerce';
        uaEdu.innerHTML = "Université Nationale de Commerce et d'Économie de Kiev<br>Septembre 2007 - Juin 2012";
        hobby.textContent = 'CENTRES D’INTÉRÊT';
        hobbyText.innerHTML = 'if (je ne suis pas devant l\'ordinateur){<br><span class="hobbies">je fais du sport (natation, gym, footing);</span><br><span class="hobbies">je voyage;</span><br><span class="hobbies">je mange (tout sauf du poisson);</span><br><span class="hobbies">je dors;</span><br>}';
        languageFlag = 'french';
        let ruLangScale = document.querySelectorAll('.lang');
        if (ruLangScale) {
            allFirstScaleLang.forEach((firstScaleLang) => firstScaleLang.classList.remove('lang'));
        }
        closeNav();
    } else closeNav();
}
function translateToRussian() {
    if (languageFlag !== 'russian') {
        titleName.textContent = 'Комин Ростислав CV';
        name.textContent = 'РОСТИСЛАВ КОМИН';
        actualLanguage.textContent = 'РУССКИЙ';
        profession.innerHTML = 'Веб-Разработчик<br>Full-Stack';
        city.textContent = 'Фонтене-су-Буа';
        city.href = 'https://ru.wikipedia.org/wiki/Фонтене-су-Буа';
        skills.textContent = 'НАВЫКИ';
        languages.textContent = 'ЯЗЫКИ';
        frenchLanguage.textContent = 'Французский';
        englishLanguage.textContent = 'Английский';
        ukrainianLanguage.textContent = 'Украинский';
        russianLanguage.textContent = 'Русский';
        profile.textContent = 'ПРОФИЛЬ';
        profileText.textContent = 'Бывший легионер Французского Иностранного Легиона с двумя высшими экономическими образованиями, а также с 3-летним опытом управления и 2-летним опытом Full-Stack веб-разработки на языках Python и JavaScript. В поисках нового профессионального опыта и навыков. Амбициозный, дисциплинированный и скрупулёзный.';
        experience.textContent = 'ОПЫТ';
        skillFactoryExp.innerHTML = 'SkillFactory, MATRICE<br>Октябрь 2020 - Март 2022';
        skillFactoryExpText.innerHTML = 'Разработал различные проекты в рамках моего обучения:<br />- копию социальной сети<br /><span class="in-parentheses">JavaScript, Node, Express, React, Sequelize, PostgreSQL, HTML/CSS, Bootstrap</span><br />- десктопный мессенджер<br /><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br />- сайт для бронирования игр типа “Escape Games”<br /><span class="in-parentheses">JavaScript, Node, Express, Handlebars, Sequelize, PostgreSQL, Bootstrap</span><br />- сайт/приложение прогноза погоды<br /><span class="in-parentheses">JavaScript, React, HTML/CSS, Material-UI (MUI), AJAX, Webpack</span><br />- сайт-визитка, развёрнутый на “GitHub Pages”<br /><span class="in-parentheses">JavaScript, HTML/CSS</span><br />- бот для мессенджера Telegram<br /><span class="in-parentheses">Python, pyTelegramBotAPI</span><br />- игры: "Крестики-Нолики", "Морской Бой" и “Четыре в Ряд”<br /><span class="in-parentheses">Python, JavaScript</span>';
        legionnaireExp.textContent = 'Легионер';
        legionnaireExpTitle.innerHTML = 'Французский Иностранный Легион<br>Апрель 2015 - Июль 2020';
        legionnaireExpText.innerHTML = '- командовал отделением из 3-5 человек<br><span class="in-parentheses">организация и распределение миссий, обучение, руководство</span><br>- управлял тяжелой строительной техникой<br><span class="in-parentheses">самосвал, ковшовый погрузчик, экскаватор, бульдозер</span><br>- занимался компьютерным обслуживанием<br><span class="in-parentheses">установка/настройка ОС и ПО, сборка ПК</span>';
        education.textContent = 'ОБРАЗОВАНИЕ';
        matriceEduTitle.textContent = 'JavaScript Full-Stack Веб-Разработчик';
        matriceEdu.innerHTML = 'MATRICE «Tremplin Full-Stack»<br>Сентябрь 2021 - Март 2022';
        skillFactoryEduTitle.textContent = 'Python Full-Stack Веб-Разработчик';
        skillFactoryEdu.innerHTML = 'SkillFactory<br>Октябрь 2020 - настоящее время';
        frEduTitle.textContent = 'Магистр по Менеджменту Организации';
        frEdu.innerHTML = 'Университет Оверни (Клермон-Ферран 1)<br>Сентябрь 2008 - Июнь 2013';
        uaEduTitle.textContent = 'Магистр по Коммерческой Деятельности';
        uaEdu.innerHTML = 'КНТЭУ<br>Сентябрь 2007 - Июнь 2012';
        hobby.textContent = 'ХОББИ';
        hobbyText.innerHTML = 'if (я не за компьютером){<br><span class="hobbies">я занимаюсь спортом (плавание, спортзал, бег);</span><br><span class="hobbies">я путешествую;</span><br><span class="hobbies">я ем (всё, кроме рыбы);</span><br><span class="hobbies">я сплю;</span><br>}';
        languageFlag = 'russian';
        allFirstScaleLang.forEach((firstScaleLang) => firstScaleLang.classList.add('lang'));
        closeNav();
    } else closeNav();
}

englishButton.addEventListener('click', () => translateToEnglish());
frenchButton.addEventListener('click', () => translateToFrench());
russianButton.addEventListener('click', () => translateToRussian());
