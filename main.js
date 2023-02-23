// header
let toggleBtn = document.querySelector('#toggleBtn'),
    span = document.querySelectorAll('#toggleBtn span'),
    nav = document.querySelector('.nav'),
    header = document.querySelector('header');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleBtn.classList.toggle('active');

  if($('.nav').hasClass('active') === true){
    // console.log('active');
    nav.removeEventListener('mouseover', mouseoverFunc);
  }else{
    // console.log('no');
    nav.addEventListener('mouseover', mouseoverFunc);
  }
});

let mouseoverFunc = () => {header.style.height = '400px';},
    mouseoutFunc = () => {header.style.height = '100px';};

nav.addEventListener('mouseover', mouseoverFunc);
nav.addEventListener('mouseout', mouseoutFunc);


// 스크롤 이벤트 
let gotop = this.document.querySelector('.gotop');

window.addEventListener('scroll', function(){
  let scrollY = this.scrollY;
  let tt = this.document.querySelectorAll('.nav > li > a');

  if(scrollY > 50){
    header.classList.add('scrolled');
    gotop.classList.add('active');
    for(sp of span){
      sp.style.backgroundColor = '#4D4D4F';
    }
    for(t of tt){
      t.style.color = '#4D4D4F';
    }
  }else{
    header.classList.remove('scrolled');
    gotop.classList.remove('active');
    for(sp of span){
      sp.style.backgroundColor = '#fff';
    }
    for(t of tt){
      t.style.color = '#fff';
    }
  }
  if($('.nav').hasClass('active') === true){
    for(sp of span){
      sp.style.backgroundColor = '#4D4D4F';
    }
    for(t of tt){
      t.style.color = '#4D4D4F';
    }
  }
});
gotop.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
});



// menu.html
const $tab = $('.tab_wrap li a'),
      $item = $('.menu_items');

$item.hide();
$($item[0]).show();

$tab.click(function(e){
  e.preventDefault();
  $tab.removeClass('active');
  $(this).addClass('active');

  $item.hide();
  let $target = $(this).attr('href');
  // console.log($target);
  $($target).show();
});
