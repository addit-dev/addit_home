AOS.init();

$('header .hamburger-button').click(function(){
    $(this).toggleClass('active');
    $('header nav>.menu').toggleClass('overflow');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('header .hamburger-button span').addClass('scroll');
    }else{
        $('header .hamburger-button span').removeClass('scroll');
    }
    });

function submit(){
    let name = $('#name').val();
    let email = $('#email').val();
    let emailT = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let tel = $('#tel').val();
    let checkbox = document.getElementById("checkbox").checked;

    if(name == ''){
        alert('이름을 입력하세요.');
        return;
    }else if(email == ''){
        alert('이메일을 입력하세요.');
        return
    }else if(email.match(emailT) == null){
        alert('이메일 똑바로 써라.');
        return
    }else if(tel == ''){
        alert('전화번호를 입력하세요.');
        return
    }else if(checkbox == false){
        alert('개인정보 처리방침에 동의하세요.');
        return
    };

    $.ajax({
        type:"POST",
        url:"login.php",
        dataType: 'text',
        data: {
            name:name,
            email:email,
            tell:tel,
            agree:true
        },
        success: function(data){
            alert("성공이다")
        },
        error: function(data){
            alert("에러가 발생했습니다.");
        }
    });
    
};

