var counter = 0;

class RoadmapView {
  constructor(roadmap1) {
    this.roadmap = roadmap1;
    this.element = null;
  }

  template() {
    counter++;
    var container = $("<div id='week"+counter+"' class='overview week'></div>");
    container.append($("<h1>Week " + this.roadmap.week + ": " + this.roadmap.title + "</h1>"));
    container.append($("<p><h3>Content: </h3>" + this.roadmap.content + "</p>"));
    container.append($("<p><h3>Goal: </h3>" + this.roadmap.goal + "</p>"));
    container.append($("<p><h3>Theme: </h3>" + this.roadmap.theme + "</p>"));
    container.append($("<p><h3>Materials: </h3>" + this.roadmap.materials + "</p>"));
    container.append($("<p><h3>Work This Week: </h3>" + this.roadmap.workDue + "</p>"));
    container.append($("<p><h3>Work Due Next Week: </h3>" + this.roadmap.theme + "</p>"));
    container.append($("<p><h3>Resources: </h3>" + this.roadmap.resources + "</p>"));
    return container;
  }
  render(){
    this.element = this.template();
    counter=0;
  }

}
