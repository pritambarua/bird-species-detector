var name ='';
var loadFile = function(event) {
  var image = document.getElementById('output');
  move();
  setTimeout(function(){
    image.src = URL.createObjectURL(event.target.files[0]);
    name = event.target.files[0].name;
    //sudoRandom();
   // chooseRandom()
  },1900)
 
};

function move() {
  document.getElementById("myProgress").style.display = "block";
  var i=0;
   if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("myProgress").style.display = "none";
      } else {
        width += 0.5;
        elem.style.width = width + "%";
        elem.innerHTML = parseInt(width) + "%";
      }
    }
  }
}

function chooseRandom(){
  var index =0;
  var names = ["Ward's Trogon","Himalayan Snowcock","Himalayan Quail","Himalayan Monal","Blyth's Tragopan","Western Tragopan","kashmir Nuthatch","Kashmir flycathcer","himalayan black-lored tit","Himalayan Black citra","himalayan Griffon"];
  index = Math.random() * (names.length);
  document.getElementById("demo").innerHTML = names[parseInt(index)];
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

function starrating(){
  // Check Radio-box
  $(".rating input:radio").attr("checked", false);

  $('.rating input').click(function () {
      $(".rating span").removeClass('checked');
      $(this).parent().addClass('checked');
  });

  $('input:radio').change(
    function(){
      var userRating = this.value;
      alert(userRating);
  }); 
}
