function homeFunction() {document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function aboutFunction() {document.documentElement.scrollTo({
    top: 0,
    left: 1536,
    behavior: "smooth",
  });
}

function skillsFunction(){document.documentElement.scrollTo({
    top: 0,
    left: 3072,
    behavior: "smooth",
  });
}

function contactFunction(){
    document.documentElement.scrollTo({
        top: 0,
        left: 4608,
        behavior: "smooth",
      });
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


var root = document.documentElement;
      document.getElementById("button").onclick = function(ev) {
        var el = ev.target;
      	var x = (ev.clientX - el.offsetLeft) / el.offsetWidth;
      	var y = (ev.clientY - el.offsetTop) / el.offsetHeight;
        root.style.setProperty('--ripple-x', x);
        root.style.setProperty('--ripple-y', y);
      }
