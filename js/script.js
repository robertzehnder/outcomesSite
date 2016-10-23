$( document ).ready(function() {
  data.forEach((week1) => {
    var info = new Roadmap(week1.week,week1.title,week1.content,week1.goal,week1.theme,week1.materials,week1.workDue,week1.homework,week1.smallGroup,week1.resources)
    var roadmapView = new RoadmapView(info)
    roadmapView.render()
    $(".content").append(roadmapView.element)
  });
});


//week,title,content,goal,theme,materials,workDue,homework,smallGroup,resources
//week,title,content,goal,theme,materials,workDue,homework,smallGroup,resources
