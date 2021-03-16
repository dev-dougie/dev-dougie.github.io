const projects = [
    {
        name: "To-do App",
        about:
            "Aplicativo para gestão de tarefas, onde é possível adicionar uma nova tarefa, editá-la e atualizar a mesma, persistindo os dados.",
        repository: "https://github.com/dev-dougie/todo-list",
        link: "https://dxdqf.csb.app/"
    },
    {
        name: "Move.it",
        about:
            "Plataforma de controle de tempo 'gameficada', que utiliza a técnica pomodoro como principal parâmetro.",
        repository: "https://github.com/dev-dougie/move.it",
        link: "https://moveit-app-4tdpapui8-dev-dougie.vercel.app/"
    },
    {
        name: "iBlog",
        about: "Mini blog de tecnologia voltado ao público dev e afins.",
        repository: "https://github.com/dev-dougie/iblog-app",
        link: "https://blog-app-prod.herokuapp.com/"
    },
    {
        name: "Chatzinho",
        about:
            "Chatzinho é um chat que utiiza conceitos de websockets para realizar a comunicação entre os 'pontos' conectados durante a inicialização.",
        repository: "#",
        link: "https://chatzinho-with-node.herokuapp.com/"
    },
    {
        name: "Cãorreria",
        about:
            "A plataforma Cãorreria surgiu com intuito de ajudar donos de cães, que por ventura não têm tempo a encontrarem 'dogwalkers'",
        link: "https://chatzinho-with-node.herokuapp.com/"
    },
    {
        name: "Happy",
        about:
            "O Happy é uma aplicação que conecta pessoas a casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.",
        repository: "https://github.com/dev-dougie/happy",
        link: "#"
    },
    {
        name: "Proffy",
        about:
            "A plataforma Proffy é uma aplicação que conecta professoras a alunos. Nela é possível realizar a busca por tutores de acordo com a matéria pré-definida.",
        repository: "https://github.com/dev-dougie/proffy",
        link: "#"
    },
    {
        name: "Currency Converter",
        about:
            "Para reforçar meus conhecimentos em React, desenvolvi o 'Currency Converter'. Ele é uma aplicação  para câmbio de moedas, onde o usuário consegue visualizar a conversão para real.",
        repository: "https://github.com/dev-dougie/currency-converter",
        link: "#"
    },
    {
        name: "Health Track",
        about:
            "Projeto acadêmico desenvolvido em Java WEB. O Health Track é uma plataforma de gestão e controle da saúde do usuário, nela é possível ter total controle de informações vitais, como: pressão, IMC e etc.",
        repository: "https://github.com/dev-dougie/healthtrack",
        link: "#"
    },
    {
        name: "Recipe App",
        about:
            "Plataforma para pesquisa de receitas de acordo com o alimento informado pelo usuário.",
        repository: "https://github.com/dev-dougie/recipe-application",
        link: "#"
    },
    {
        name: "Recyle Tech",
        about:
            "Marketplace de coletas de resíduos eletrônicos baseado no projeto 'Ecoleta' da Rocketseat que foi desenvolvido na 1° edição da Next Level Week.",
        repository: "https://github.com/dev-dougie/recycle_tech",
        link: "#"
    },
    {
        name: "Projetos em Vanilla",
        about:
            "Meus projetos desenvolvidos utilizando 'Javascript puro' e suas mais novas metodologias de desenvolvimento, como ES6+ e afins.",
        repository: "https://github.com/dev-dougie/js_projects",
        link: "#"
    }
];

const skills = [
    {
        name: "HTML 5",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        link: "https://www.w3.org/html/"
    },
    {
        name: "CSS 3",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        link: "https://www.w3schools.com/css/"
    },
    {
        name: "Bootstrap 4",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
        link: "https://getbootstrap.com"
    },
    {
        name: "SASS",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        link: "https://sass-lang.com"
    },
    {
        name: "Javascript (ES6+)",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "AJAX",
        img: "https://kraigpopelka.info/images/theme/icons/ajax.svg",
        link: "https://www.w3schools.com/js/js_ajax_intro.asp"
    },
    {
        name: "ReactJS",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://reactjs.org/"
    },
    {
        name: "NodeJS",
        img:
            "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        link: "https://nodejs.org/en/"
    },
    {
        name: "Python",
        img:
            "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
        link: "https://www.python.org/"
    },
    {
        name: "Java e Java WEB",
        img:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        link: "https://www.java.com"
    },
    {
        name: "Git",
        img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        link: "https://git-scm.com/"
    }
];

const frame = document.querySelector(".frame");
const skillFrame = document.querySelector(".skill-list");

projects.map((project) => {
    frame.innerHTML += `
    <div class="card">
      <strong>${project.name}</strong>
        <p>${project.about}</p>
      <div class="project-access">
        <a href= ${project.link} class="deploy" target = '_blank' ><i class="fas fa-play"></i></a>
        <a href="${project.repository}" class="repo" target = '_blank'> <i class="fab fa-github-alt"></i></a>
      </div>
    </div>`;
});

skills.map((skill) => {
    skillFrame.innerHTML += `
    <li>
      <a href= '${skill.link}' target = "_blank"><img src= '${skill.img}' alt= '${skill.name}' width="40" height="40"/></a>
    </li>
    `;
});


window.onscroll = function(){
    scrollUp()
}

const scrollUp  = () => {
    let btnUp = document.querySelector('#btn-top')
    let scrolledHeight = document.documentElement.scrollTop
    scrolledHeight > 60 ? btnUp.style.display = "block"
    : btnUp.style.display = "none"
}

const backToTop = () => document.documentElement.scrollTop = 03;

