$(document).ready(function() {
  console.log("jQuery is ready!"); // Task 0: Console check

  // Task 1: Selectors, CSS styling & Theme Switcher
  $("#themeToggleBtn").click(function() {
    $("body").toggleClass("bg-dark text-white");
    $(".card").toggleClass("bg-secondary text-white border-light");
  });

  // Task 2: Visibility Methods (Hide, Show, Toggle)
  $("#hideBtn").click(function() {
    $("#statusMessage").hide();
  });

  $("#showBtn").click(function() {
    $("#statusMessage").show();
  });

  $("#toggleBtn").click(function() {
    $("#statusMessage").toggle();
  });

  // Task 3: Fade Methods
  $("#fadeOutBtn").click(function() {
    $("#fadeImage").fadeOut();
  });

  $("#fadeInBtn").click(function() {
    $("#fadeImage").fadeIn();
  });

  $("#fadeToggleBtn").click(function() {
    $("#fadeImage").fadeToggle();
  });

  // Task 4: Slide Methods (Collapsible panels)
  $(".slide-heading").click(function() {
    $(this).next(".slide-panel").slideToggle();
  });

  // Task 5: Add, Prepend & Remove Elements with validation
  $("#addSkillBtn").click(function() {
    const val = $("#skillInput").val().trim();
    if (val !== "") {
      $("#skillList").append(`<li class="list-group-item">${val}</li>`);
      $("#skillInput").val("");
    }
  });

  $("#prependSkillBtn").click(function() {
    const val = $("#skillInput").val().trim();
    if (val !== "") {
      $("#skillList").prepend(`<li class="list-group-item">${val}</li>`);
      $("#skillInput").val("");
    }
  });

  $("#removeSkillBtn").click(function() {
    $("#skillList li:last-child").remove();
  });

  // Task 6: Modifying Attributes with .attr()
  let linkToggled = false;
  $("#changeLinkBtn").click(function() {
    if (!linkToggled) {
      $("#socialLink").attr("href", "https://astanait.edu.kz").text("Astana IT University Website");
      linkToggled = true;
    } else {
      $("#socialLink").attr("href", "https://github.com").text("GitHub Profile");
      linkToggled = false;
    }
  });

  // Task 7: Form Interaction (Live output via .val() and .text())
  $("#formNameInput").on("input", function() {
    const nameVal = $(this).val();
    $("#outputName").text(nameVal === "" ? "-" : nameVal);
  });

  $("#formEmailInput").on("input", function() {
    const emailVal = $(this).val();
    $("#outputEmail").text(emailVal === "" ? "-" : emailVal);
  });

  // Task 8: Basic Animation (.animate() for skill bars)
  let isAnimated = false;
  $("#animateSkillsBtn").click(function() {
    $(".skill-bar").each(function() {
      const targetWidth = isAnimated ? "0%" : $(this).attr("data-width");
      const targetPercent = isAnimated ? "0%" : targetWidth;
      
      $(this).animate({ width: targetWidth }, 1000, function() {
        $(this).text(targetPercent);
      });
    });
    isAnimated = !isAnimated;
    $(this).text(isAnimated ? "Reset Skills" : "Animate My Skills");
  });
});