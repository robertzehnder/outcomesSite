class RoadmapView {
  constructor(roadmap1) {
    this.roadmap = roadmap1;
    this.element = null;
  }

  template() {
    var container = $("<div class='overview'></div>");
    container.append($("<h1>Week " + this.roadmap.week + ": " + this.roadmap.title + "</h1>"));
    container.append($("<p><h2>Content: </h2>" + this.roadmap.content + "</p>"));
    container.append($("<p><h2>Goal: </h2>" + this.roadmap.goal + "</p>"));
    container.append($("<p><h2>Theme: </h2>" + this.roadmap.theme + "</p>"));
    container.append($("<p><h2>Materials: </h2>" + this.roadmap.materials + "</p>"));
    container.append($("<p><h2>Work This Week: </h2>" + this.roadmap.workDue + "</p>"));
    container.append($("<p><h2>Work Due Next Week: </h2>" + this.roadmap.theme + "</p>"));
    container.append($("<p><h2>Resources: </h2>" + this.roadmap.resources + "</p>"));
    return container;
  }
  render(){
    this.element = this.template();
  }

}
