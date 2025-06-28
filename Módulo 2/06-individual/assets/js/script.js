$(document).ready(function() {
  const images = $(".thumbnail");
  let currentIndex = 0;

  function showModal(index) {
    const src = $(images[index]).attr("src");
    $("#modal-image").attr("src", src);
    $("#modal").fadeIn();
    currentIndex = index;
  }

  $(".thumbnail").click(function() {
    const index = $(this).data("index");
    showModal(index);
  });

  $("#next").click(function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showModal(currentIndex);
  });

  $("#prev").click(function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showModal(currentIndex);
  });

  $("#close").click(function() {
    $("#modal").fadeOut();
  });

  $("#modal").click(function(e) {
    if (e.target.id === "modal") {
      $(this).fadeOut();
    }
  });
});
