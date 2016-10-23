class Roadmap {
  constructor(week,title,content,goal,theme,materials,workDue,homework,smallGroup,resources) {
    this.week = week;
    this.title = title;
    this.content = content;
    this.goal = goal;
    this.theme = theme;
    this.materials = materials;
    this.workDue = workDue;
    this.homework = homework;
    this.smallGroup = smallGroup;
    this.resources = resources;
  }

  template() {
    var container = $("<div class='overview'></div>");
    container.append($("<h1>Week " + this.week + ": " + this.title + "</h1>"));
    container.append($("<p><h2>Content: </h2>" + this.content + "</p>"));
    container.append($("<p><h2>Goal: </h2>" + this.goal + "</p>"));
    container.append($("<p><h2>Theme: </h2>" + this.theme + "</p>"));
    container.append($("<p><h2>Materials: </h2>" + this.materials + "</p>"));
    container.append($("<p><h2>Work This Week: </h2>" + this.workDue + "</p>"));
    container.append($("<p><h2>Work Due Next Week: </h2>" + this.theme + "</p>"));
    container.append($("<p><h2>Resources: </h2>" + this.resources + "</p>"));
    return container;
  }
  render(){
    this.element = this.template();
  }

}
