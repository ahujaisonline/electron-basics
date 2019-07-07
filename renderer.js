// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var app = require("./lib/app");

app.on("rendered", function (rendered, targetId) {
  $(`#${targetId}`).html(rendered);
});

var showContent = function (view, targetId, data) {
  app.emit("view-selected", view, targetId, data);
}


//on document ready
$(function () {
  // hbs, target, data if any
  var homeData = require('./data/home');
  console.log(homeData);
  showContent("home", "main", homeData);

  $(".nav").on("click", function (ev) {
    ev.preventDefault();
    var targetId = $(this).data("target");
    if ($(this).data("model")) {
      let dataSrc = $(this).data("model");
      var data = require(`./data/${dataSrc}`)
    }
    showContent(this.id, targetId, data);
  });

});

