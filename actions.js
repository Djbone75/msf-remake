const articles = [
  {
    title: "IMMIGRATION",
    description: "France : assistance aux personnes en migration",
    article:
      "Depuis 2015, Médecins Sans Frontières apporte une assistance médicale aux personnes migrantes exclues des soins sur le territoire français. Depuis 2017, ces activités médicales se concentrent principalement sur Paris et la région parisienne via une clinique mobile dispensant des soins en santé primaire, de l’information et de l’orientation aux personnes présentes sur les campements. MSF mène également des activités de veille et de plaidoyer aux frontières intérieures françaises (frontières franco-italienne, franco-espagnole et franco-britannique) afin de garantir le respect des droits des personnes exilées. En parallèle, un programme dédié à l’accompagnement juridique, médical, psychologique et social de mineurs non-accompagnés est mené en région parisienne depuis 2017 et à Marseille depuis 2020. ",
    image: "france--1.jpg",
  },
  {
    title: "MINEURS",
    description:
      "France : soutien aux mineurs non-accompagnés à Paris et Marseille",
    article:
      "En 2017, Médecins Sans Frontières ouvre un centre d’accueil et d’orientation de jour, à Pantin (Seine Saint-Denis), pour apporter une aide aux mineurs non-accompagnés. L’association complète ce dispositif en août 2018 avec l’ouverture d’un centre d’hébergement en région parisienne. En 2020, ce programme est étendu à Marseille. Dans ces lieux, les équipes de Médecins Sans Frontières apportent un soutien juridique, médical, psychologique et social à ces jeunes. Selon la loi française et la Convention Internationale des Droits de l’Enfant, dont la France est signataire, les personnes se déclarant mineures et isolées doivent être considérées comme des enfants en danger et protégées comme tels, sans distinction de nationalité. Pourtant, depuis des années, de nombreux mineurs se retrouvent privés de la protection des départements et n’ont d’autre alternative que la rue.",
    image: "france--2.jpg",
  },
  {
    title: "COVID-19",
    description:
      "face à la Covid-19, assistance aux personnes précaires et soutien aux hôpitaux",
    article:
      "En France, Médecins Sans Frontières soutient la prise en charge des personnes touchées par le Covid-19. Les équipes interviennent dans les établissements de santé et auprès des populations vulnérables vivant à la rue, comme les migrants et les sans domicile fixe. Que fait MSF en France face à la pandémie de Covid-19 ? Pierre Mendiharat, directeur adjoint des opérations, détaille les activités de MSF qui se mettent en place autour de trois volets : l'appui aux populations précaires, l'appui aux structures de santé, centres de soins ou hôpitaux, et l'appui aux EHPAD. ",
    image: "france--3.jpg",
  },
];

const actionTitle = document.querySelector("#action__title");
const actionDescription = document.querySelector("#action__desc");
const actionArticle = document.querySelector("#action__article");
const item = document.querySelector(".action__item");
const buttons = document.querySelectorAll("button");
actionTitle.innerHTML = articles[0].title;
actionDescription.innerHTML = articles[0].description;
actionArticle.innerHTML = articles[0].article;
item.style.backgroundImage = "url('/public/" + articles[0].image + "')";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    actionTitle.innerHTML = articles[e.target.value].title;
    actionDescription.innerHTML = articles[e.target.value].description;
    actionArticle.innerHTML = articles[e.target.value].article;
    item.style.backgroundImage =
      "url('/public/" + articles[e.target.value].image + "')";
  });
});
