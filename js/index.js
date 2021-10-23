let languageFlag = 'russian';

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
const matriceEdu = document.getElementById('matriceEdu');
const skillFactoryEduTitle = document.getElementById('skillFactoryEduTitle');
const skillFactoryEdu = document.getElementById('skillFactoryEdu');
const frEduTitle = document.getElementById('frEduTitle');
const frEdu = document.getElementById('frEdu');
const uaEduTitle = document.getElementById('uaEduTitle');
const uaEdu = document.getElementById('uaEdu');
const hobby =document.getElementById('hobby');
const hobbyText = document.getElementById('hobbyText');

function openNav() {
  document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}
function translateToEnglish() {
  if (languageFlag !== 'english') {
    titleName.textContent = 'Komin Rostyslav CV';
    name.textContent = 'ROSTYSLAV KOMIN';
    actualLanguage.textContent = 'English';
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
    profileText.textContent = 'Former legionnaire of the French Foreign Legion with two higher economic degrees, as well as 3 years of management experience and 1 year of Full-Stack Web Development experience in Python and JavaScript. In search of new professional experience and skills. Ambitious, disciplined and scrupulous';
    experience.textContent = 'EXPERIENCE';
    skillFactoryExp.innerHTML = 'SkillFactory<br>October 2020 - till date';
    skillFactoryExpText.innerHTML = 'I have developed different projects as part of my study:<br>\n' +
        '- desktop messenger<br><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br>\n' +
        '- information site<br><span class="in-parentheses">Python, Django, HTML/CSS</span><br>\n' +
        '- bot for Telegram messenger<br><span class="in-parentheses">Python, pyTelegramBotAPI</span><br>\n' +
        '- games: "Tic-Tac-Toe" and "Battleship"<br><span class="in-parentheses">Python</span>';
    legionnaireExp.textContent = 'Legionnaire';
    legionnaireExpTitle.innerHTML = 'French Foreign Legion<br>April 2015 - July 2020';
    legionnaireExpText.innerHTML = '- commanded a squad of 3-5 people<br><span class="in-parentheses">organization and distribution of missions, training, leadership</span><br>\n' +
        '- piloted heavy equipment<br><span class="in-parentheses">dump truck, loader, excavator, bulldozer</span><br>\n' +
        '- engaged in computer maintenance<br><span class="in-parentheses">installation/configuration of OS and software, PC assembly</span>';
    education.textContent = 'EDUCATION';
    matriceEdu.innerHTML = 'MATRICE<br>September 2021 - till date';
    skillFactoryEduTitle.textContent = 'Web Developer Full-Stack';
    skillFactoryEdu.innerHTML = 'SkillFactory<br>October 2020 - till date';
    frEduTitle.textContent = 'Master in Organization Management';
    frEdu.innerHTML = 'University of Clermont-Ferrand 1 Auvergne<br>September 2008 - June 2013';
    uaEduTitle.textContent = 'Master in Commerce';
    uaEdu.innerHTML = 'Kyiv National University of Trade and Economics<br>September 2007 - June 2012';
    hobby.textContent = 'HOBBY';
    hobbyText.innerHTML = 'if (I\'m not at the computer){<br><span class="hobbies">I do sports (swimming, gym, jogging);</span><br><span class="hobbies">I travel;</span><br><span class="hobbies">I eat (everything except fish);</span><br><span class="hobbies">I sleep;</span><br>}';
    languageFlag = 'english';
    closeNav();
  }
  else closeNav();
}
function translateToFrench() {
  if (languageFlag !== 'french') {
    titleName.textContent = 'Komin Rostyslav CV';
    name.textContent = 'ROSTYSLAV KOMIN';
    actualLanguage.textContent = 'Français';
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
    profileText.textContent = 'Diplômé d’un Master en Commerce et Management, ancien militaire de la Légion Étrangère avec 3 ans d\'expérience en gestion, en reconversion depuis octobre 2020. À la recherche d’une alternance en tant que Développeur Web à partir de fin février 2022 au rythme suivant: 4 jours en entreprise et 1 jour en formation';
    experience.textContent = 'EXPÉRIENCES';
    skillFactoryExp.innerHTML = 'SkillFactory<br>Octobre 2020 - présent';
    skillFactoryExpText.innerHTML = 'J\'ai développé différents projets dans le cadre de ma formation:<br>\n' +
        '- un desktop-messenger<br><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br>\n' +
        '- un site d\'information<br><span class="in-parentheses">Python, Django, HTML/CSS</span><br>\n' +
        '- un bot pour Telegram messenger<br><span class="in-parentheses">Python, pyTelegramBotAPI</span><br>\n' +
        '- des jeux: "Tic-Tac-Toe" et "Bataille Navale"<br><span class="in-parentheses">Python</span>';
    legionnaireExp.textContent = 'Légionnaire';
    legionnaireExpTitle.innerHTML = 'Légion Étrangère: 2eme Régiment Etrangère de Génie<br>Avril 2015 - Juillet 2020';
    legionnaireExpText.innerHTML = '- commandé une équipe de 3-5 personnes<br><span class="in-parentheses">organisation et répartition des missions, formation, encadrement</span><br>\n' +
        '- piloté des engins lourds<br><span class="in-parentheses">camion-benne, chargeur, pelle hydraulique, bulldozer</span><br>\n' +
        '- engagé dans la maintenance informatique<br><span class="in-parentheses">installation/configuration d\'OS et du logiciel, assemblage de PC</span><br>' +
        '- participé à des missions extérieures<br><span class="in-parentheses">Djibouti</span>';
    education.textContent = 'FORMATIONS';
    matriceEdu.innerHTML = 'MATRICE<br>Septembre 2021 - présent';
    skillFactoryEduTitle.textContent = 'Développeur Web Full-Stack';
    skillFactoryEdu.innerHTML = 'SkillFactory<br>Octobre 2020 - présent';
    frEduTitle.textContent = 'Master en Pilotage des Organisations';
    frEdu.innerHTML = 'Université de Clermont-Ferrand 1 Auvergne<br>Septembre 2008 - Juin 2013';
    uaEduTitle.textContent = 'Master en Commerce';
    uaEdu.innerHTML = 'Kyiv National University of Trade and Economics<br>Septembre 2007 - Juin 2012';
    hobby.textContent = 'CENTRES D’INTÉRÊT';
    hobbyText.innerHTML = 'if (je ne suis pas devant l\'ordinateur){<br><span class="hobbies">je fais du sport (natation, gym, footing);</span><br><span class="hobbies">je voyage;</span><br><span class="hobbies">je mange (tout sauf du poisson);</span><br><span class="hobbies">je dors;</span><br>}';
    languageFlag = 'french';
    closeNav();
  }
  else closeNav();
}
function translateToRussian() {
  if (languageFlag !== 'russian') {
    titleName.textContent = 'Комин Ростислав CV';
    name.textContent = 'РОСТИСЛАВ КОМИН';
    actualLanguage.textContent = 'Русский';
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
    profileText.textContent = 'Бывший легионер Французского Иностранного Легиона с двумя высшими экономическими образованиями, а также с 3-летним опытом управления и 1-летним опытом Full-Stack веб-разработки на языках Python и JavaScript. В поисках нового профессионального опыта и навыков. Амбициозный, дисциплинированный и скрупулёзный';
    experience.textContent = 'ОПЫТ';
    skillFactoryExp.innerHTML = 'SkillFactory<br>Октябрь 2020 - настоящее время';
    skillFactoryExpText.innerHTML = 'Разработал различные проекты в рамках моего обучения:<br>\n' +
        '- десктопный мессенджер<br><span class="in-parentheses">Python, JavaScript, Django REST Framework, HTML/CSS, WebSocket, AJAX</span><br>\n' +
        '- информационный сайт<br><span class="in-parentheses">Python, Django, HTML/CSS</span><br>\n' +
        '- бот для мессенджера Telegram<br><span class="in-parentheses">Python, pyTelegramBotAPI</span><br>\n' +
        '- игры: "Крестики-Нолики" и "Морской Бой"<br><span class="in-parentheses">Python</span>';
    legionnaireExp.textContent = 'Легионер';
    legionnaireExpTitle.innerHTML = 'Французский Иностранный Легион<br>Апрель 2015 - Июль 2020';
    legionnaireExpText.innerHTML = '- командовал отделением из 3-5 человек<br><span class="in-parentheses">организация и распределение миссий, обучение, руководство</span><br>\n' +
        '- управлял тяжелой строительной техникой<br><span class="in-parentheses">самосвал, ковшовый погрузчик, экскаватор, бульдозер</span><br>\n' +
        '- занимался компьютерным обслуживанием<br><span class="in-parentheses">установка/настройка ОС и ПО, сборка ПК</span>';
    education.textContent = 'ОБРАЗОВАНИЕ';
    matriceEdu.innerHTML = 'MATRICE<br>Сентябрь 2021 - настоящее время';
    skillFactoryEduTitle.textContent = 'Full-Stack Веб-Разработчик';
    skillFactoryEdu.innerHTML = 'SkillFactory<br>Октябрь 2020 - настоящее время';
    frEduTitle.textContent = 'Магистр по Управлению Организациями';
    frEdu.innerHTML = 'Университет Клермон-Ферран 1 Овернь<br>Сентябрь 2008 - Июнь 2013';
    uaEduTitle.textContent = 'Магистр по Товароведению и Коммерческой Логистике';
    uaEdu.innerHTML = 'КНТЭУ<br>Сентябрь 2007 - Июнь 2012';
    hobby.textContent = 'ХОББИ';
    hobbyText.innerHTML = 'if (я не за компьютером){<br><span class="hobbies">я занимаюсь спортом (плавание, спортзал, бег);</span><br><span class="hobbies">я путешествую;</span><br><span class="hobbies">я ем (всё, кроме рыбы);</span><br><span class="hobbies">я сплю;</span><br>}';
    languageFlag = 'russian';
    closeNav();
  }
  else closeNav();
}

englishButton.addEventListener('click', () => translateToEnglish());
frenchButton.addEventListener('click', () => translateToFrench());
russianButton.addEventListener('click', () => translateToRussian());