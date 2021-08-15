
const info = {
  'name': 'Wilder Gonzales',
  'subtitle': 'Software Engineer in Test',
  'bio': '“We only see what we know." --Goethe',
  'contact_links': [{
    'name': 'blogspot.com',
    'link': 'https://wildergonzo.blogspot.com/'
  },
  {
    'name': 'github.com',
    'link': 'https://github.com/wildergonzo'
  },
  {
    'name': 'linkedin.com',
    'link': 'https://www.linkedin.com/in/wildergonzales/'
  },
  {
    'name': 'twitter.com',
    'link': 'https://twitter.com/wildergonzo'
  }],

  'work_history': [{
    'title': 'Software Engineer in Test',
    'location': 'Oracle',
    'date': '2021 - present',
    'text': 'Java, JUnit, TeamCity, Typescript'
  },
  {
    'title': 'Sr. Test Automation Engineer',
    'location': 'Sogeti',
    'date': '2020 - 2021',
    'text': 'Java, Selenium, Cucumber, TestNG, Docker, Jenkins, XRay, JIRA'
  },
  {
    'title': 'Test Automation Engineer',
    'location': 'Broadstreet',
    'date': '2020 - 2021',
    'text': 'Selenium, Ruby, Capybara, Rspec, CircleCI'
  },
  {
    'title': 'Software Test Engineer',
    'location': 'Mailtrack',
    'date': '2016 - 2020',
    'text': 'Javascript, Webdriverio, Mocha, Chai, Jenkins, Exploratoty/Context-Driven Testing'
  },
  {
    'title': 'Staff Software QA Engineer',
    'location': 'Jalasoft',
    'date': '2010 - 2015',
    'text': 'Black-box, Regression, Exploratory testing, Bug hunting, Plan/Execute test strategy'
  }],

  'courses': [{
    'name': 'Postgraduate Software Quality Assurance',
    'desc': 'Universitat Politecnica de Catalunya',
    'years': [
      '2019', '2020'],

    'image_type': 'tall',
    'images': ['images/upc_logo.png']
  },
  {
    'name': 'ISTQB® Certified Tester Foundation Level (CTFL)',
    'desc': 'ISTQB - International Software Testing Qualifications Board',
    'years': [
      '2020'],

    'image_type': 'tall',
    'images': ['images/istqb_logo.png']
  },
  {
    'name': 'Postgraduate Software Quality Assurance',
    'desc': 'Fundacion Jala',
    'years': [
      '2009', '2010'],

    'image_type': 'tall',
    'images': []
  },
  {
    'name': 'Systems Engineering',
    'desc': 'Universidad de Aquino Bolivia',
    'years': [
      '2005', '2009'],

    'image_type': 'tall',
    'images': []
  }]
};


function Thumbnail(props) {
  return (
    React.createElement("div", { className: "course-images" },
      props.images.map((url, index) => {
        return (
          React.createElement("div", { className: "thumb" },
            React.createElement("img", { className: props.type + ' gallery-' + props.index, "data-featherlight": url, src: url })));
      })));
}


function Course(props) {
  const years = props.course.years;
  let tag_list = years.map((name, index) => {
    let fname = index === 0 ? name : ' - ' + name;
    return fname;
  });
  return (
    React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-10" },
        React.createElement("div", { className: "course-text" },
          React.createElement("div", null, tag_list),
          React.createElement("strong", null, props.course.name),
          React.createElement("p", null, props.course.desc))),
      React.createElement("div", { className: "col-md-2" },
        React.createElement(Thumbnail, { index: props.index, type: props.course.image_type, images: props.course.images })
      )));
}

function Education(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("h1", null, "Education"),
        React.createElement("hr", null),
        props.info.map(function (course, index) {
          return (
            React.createElement("div", null,
              React.createElement(Course, { index: index, course: course }),
              React.createElement("hr", null)));
        }))));
}

function WorkHistory(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("h1", { class: "" }, "Work History"),
        React.createElement("hr", null),
        props.work.map(function (work, index) {
          return (
            React.createElement("div", { className: "work-history" },
              React.createElement("strong", null, work.title), " / ", work.location, " / ", React.createElement("strong", null, work.date),
              React.createElement("p", null, work.text),
              React.createElement("hr", null)));
        }))));
}

function Quote(props) {
  return (
    React.createElement("div", { className: "content-wrap" },
      React.createElement("div", { className: "container" },
        React.createElement("blockquote", { className: "blockquote" },
          React.createElement("p", { className: "mb-0" }, props.text)
        ))));
}

function Header(props) {
  return (
    React.createElement("header", null,
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row" },
          React.createElement("div", { className: "col-md-6" },
            React.createElement("div", { className: "header-left" },
              React.createElement("h1", { className: "display-4" }, info.name),
              React.createElement("h2", null, info.subtitle))),

          React.createElement("div", { className: "col-md-6" },
            React.createElement("div", { class: "float-md-right" },
              React.createElement("a", { href: "https://wildergonzo.blogspot.com/", target: "_blank" }, "blogspot"), " / ",
              React.createElement("a", { href: "https://github.com/wildergonzo", target: "_blank" }, "github"), " / ",
              React.createElement("a", { href: "https://www.linkedin.com/in/wildergonzales", target: "_blank" }, "linkedin"), " / ",
              React.createElement("a", { href: "https://twitter.com/wildergonzo", target: "_blank" }, "twitter")))))));
}

ReactDOM.render(
  React.createElement("div", null,
    React.createElement(Header, null),
    React.createElement(Quote, { text: info.bio }),
    React.createElement(WorkHistory, { work: info.work_history }),
    React.createElement(Education, { info: info.courses })),

  document.getElementById('app')
);