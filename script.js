

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


$(function () {
  $(".toggle").on('click', function () {
    if ($('.navitem').hasClass('active')) {
      $(".navitem").removeClass('active');
      $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    } else {
      $('.navitem').addClass('active');
      $(this).find('a').html("<ion-icon name='close-outline'></ion-icon>");
    }
  });
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}