"use strict";

$(document).ready(function(){
    headerScroll();
    clickBtn();
    allCheck();
    couponClickBtn();
    clickTab();
    starPoint();
    emailSelect();
    searchEvt();
    selectCash();
});

function headerScroll(){
    // 헤더 스크롤 그림자
    let header = $('#gnbNav');
    $(window).scroll(function (e) {
        if (header.offset().top !== 0) {
            if (!header.hasClass('shadow')) {
                header.addClass('shadow');
            }
        } else {
            header.removeClass('shadow');
        }
    });
}

//  클릭 이벤트
function clickBtn(){
    // 팝업 클릭(닫기)
    $('.btn-confi').on('click',function(){
        $('body').removeClass('show');
        $('.modal').fadeOut(250);
    });
    // 공유,다운로드 (닫기)
    $('.share-close, .mo-dim, .btn-cancel').on('click',function(){
        $('body').removeClass('show');
        $('.modal').fadeOut(250);
    });
    // 사이드바
    $('.menu').on('click',function(){
        $('html,body,.wrap').addClass('show');
        $('.sideBox,.btn-close,.menu,.dim-area').addClass('show');
    });
    $('.menu-close, header .dim-area').click(function(){
        $('.sideBox').removeClass('show');
        $('.dim-area').removeClass('show');
        $('.menu ').removeClass('show');
        $('html,body,.wrap').removeClass('show');
    });
    // 이용약관 팝업 닫기
    $('.policy-close').click(function(){
        $('.policy').fadeOut(250);
        $('html,body,.wrap').removeClass('show');
    });

    // 리뷰 더보기 / 접기
    $('.more').click(function(){
        if($(this).hasClass('show')){
            // 접기 상태
            $(this).html('더보기');
            $(this).removeClass('show');
            $(this).prev().removeClass('show');
        }else{
            // 더보기 상태
            $(this).html('접기');
            $(this).addClass('show');
            $(this).prev().addClass('show');
        }
    });
    // 상세 더보기 클릭
    $('.btn-more').click(function(){
        $('.mbti-text > p').toggleClass('show');
    });
    // 위시 버튼
    $('.btn-wish').click(function(){
        $('.wishoff').toggleClass('show');
    });
    // 공유하기 버튼
    $('.share button, .receiptPop').on('click',function(){
        $('body').addClass('show');
        $('.mo-share, .mo-receipt').fadeIn(250);
    });
    // 쿠폰 안내 팝업
    $('.btn-coupon').on('click',function(){
        $('body').addClass('show');
        $('body').css({'overflow':'hidden'});
        $('.mo-coupon').fadeIn(250);
    });
    // 현금영수증 안내 팝업
    $('.btn-cashInfo').on('click',function(){
        $('body').addClass('show');
        $('body').css({'overflow':'hidden'});
        $('.cashInfo').fadeIn(250);
    });
    // 리뷰쓰기 사진 삭제
    $('.del-photo').click(function(){
        $(this).parent().parent().remove();
    });
    // 문의하기 유형 클릭
    $('.ask-type').click(function(){
        $('.ask-type').removeClass('active');
        $(this).addClass('active');
    });
    // 다운로드 클릭
    $('.btn-download').on('click',function(){
        $('body').addClass('show');
        $('.mo-download').fadeIn(250);
    });
    $('.btn-cancel').on('click',function(){
        $('body').removeClass('show');
        $('.modal').fadeOut(250);
    });
}


// 이메일 선택
function emailSelect(){
    $('#email-wr').change(function(){
        let emailSite = $(this).val();
        if(emailSite == "_manual"){
            $('#email-wr').css({'display':'none'});
            $('.int-emailtxt').css({'display':'block'});
            $('.email-input').css({'display':'block'});
            $('.emial-input').addClass('active');
        }
    });
    $('.email-input').click(function(){
        $('.int-emailtxt').css({'display':'none'});
        $('.email-input').css({'display':'none'});
        $('#email-wr').css({'display':'block'});
        $("#email-wr option:eq(0)").prop("selected", true);
        $('.emial-input').removeClass('active');
    });
}


// 이용약관 클릭
function policyPop(modalname) {
    // $('.wrap').css('');
    document.get
    $("." + modalname).fadeIn(300);
    $('body').addClass('show');
}

// 이용약관 전체동의
function allCheck(){

    // 전체(회원가입)
    $('#all-check').click(function(){
        if($('#all-check').prop('checked')){
            $('.check').prop('checked', true);
        }else{
            $('.check').prop('checked', false);
        }
    });
    // 체크하나 풀었을때
    $('.check').click(function(){
        if($('input[name=agree]:checked').length == 5){
            $('#all-check').prop('checked',true);
        }else{
            $('#all-check').prop('checked',false);
        }
    });

    // 전체(sns회원가입)
    $('#all-SNScheck').click(function(){
        if($('#all-SNScheck').prop('checked')){
            $('.sns-check').prop('checked', true);
        }else{
            $('.sns-check').prop('checked', false);
        }
    });
    // 체크하나 풀었을때
    $('.sns-check').click(function(){
        if($('input[name=sns-agree]:checked').length == 4){
            $('#all-SNScheck').prop('checked',true);
        }else{
            $('#all-SNScheck').prop('checked',false);
        }
    });

    // 전체(결제)
    $('#all-Purcheck').click(function(){
        if($('#all-Purcheck').prop('checked')){
            $('.pur-check').prop('checked', true);
        }else{
            $('.pur-check').prop('checked', false);
        }
    });
    // 체크하나 풀었을때
    $('.pur-check').click(function(){
        if($('input[name=p-agree]:checked').length ==3){
            $('#all-Purcheck').prop('checked',true);
        }else{
            $('#all-Purcheck').prop('checked',false);
        }
    });
            // 전체
            $('#all-mycheck').click(function(){
                if($('#all-mycheck').prop('checked')){
                    $('.my-check').prop('checked', true);
                }else{
                    $('.my-check').prop('checked', false);
                }
            });
            // 체크하나 풀었을때
            $('.my-check').click(function(){
                if($('input[name=myinfo-agree]:checked').length == 2){
                    $('#all-mycheck').prop('checked',true);
                }else{
                    $('#all-mycheck').prop('checked',false);
                }
            });
}

// 쿠폰클릭
function couponClickBtn(){
    $(".couponPop .wrapping .close, .btn-confi").click(function(){
        $(".modal").fadeOut(250);
        $('body').css('overflow', 'auto')
    });
    $(".innerPop > .close").click(function(){
        $(".innerPop").fadeOut(250);
        $(".popup_bg").fadeOut(250);
        $('body').css('overflow', 'auto')
    });
}

// 탭
function clickTab(){
    // 회원가입 구매
    /*
    $('.pur-Tab .pur-tabbox > div > a').click(function(){
        const joinTabN = $('.pur-Tab .pur-tabbox > div > a').index($(this));
        $('.pur-Tab .pur-tabbox > div').removeClass('tab-on');
        $('.purchase').removeClass('tab-on');
        $('.pur-Tab .pur-tabbox > div:eq('+ joinTabN +')').addClass('tab-on');
        $('.purchase:eq('+ joinTabN +')').addClass('tab-on');
    });
    */
    // 제품 상세 , 검사현황
    $('.mbtiTab .prdTab > a , .curr-tabbox a').click(function(){
        const prdTabN = $('.mbtiTab .prdTab > a').index($(this));
        const currTabN = $('.curr-tabbox a').index($(this));

        
        $('.mbtiTab .prdTab , .curr-tabbox div').removeClass('tab-on');
        $('.mbtiTabBox , .currTabbox').removeClass('tab-on');

        $('.mbtiTab .prdTab:eq('+ prdTabN +') , .curr-tabbox div:eq('+ currTabN +') ').addClass('tab-on');
        $('.mbtiTabBox:eq('+ prdTabN +'), .currTabbox:eq('+ currTabN +')').addClass('tab-on');
    });
}
// 별점 포인트
function starPoint(){
    $('#starPoint .rating').click(function(){
        $(this).parent().children("span").removeClass("active");
        $(this).addClass("active").prevAll("span").addClass("active");
        console.log($(this).attr("value")); 
    });

}

// 검색창 
function searchEvt(){
    $('.searchArea').each(function(){
        // 검색 버튼
        let searchForm = $(this).find('.btn-search');
        let searchInt = $(this).find('.int-search');
        searchForm.click(function(){
            $(this).closest('form').find('.search-align').hide();
            $(this).closest('form').find('.search-word').show();
            $(this).closest('form').find('.search-word').addClass('active');
            let searchVal =searchInt.val();
            $(this).closest('form').find('.word').html(searchVal);
        });
        //  검색 엔터
        searchInt.keydown(function(keyNum){ 
            if(keyNum.keyCode == 13){ 
                $(".btn-search").click();
                let searchVal = searchInt.val();
                $('.word').html(searchVal);
            } 
        });
    });
}

// select 현금영수증 선택
function selectCash(){
    $('.cach-appbox input').click(function(){
        if($('#cach-app[name=cashReceipt]').is(':checked')){
            $('.cach-selBox').show();
        }else{
            $('.cach-selBox').hide();
            $('.Com-selBox02').hide();
            $('.personal').hide();
            $('input[name=check-InCom]').prop('checked',false);
        }
    });
    $('.selcheckBox input').click(function(){
        if($('#cach-appIn[name=check-InCom]').is(':checked')){
            $('.Com-selBox02').hide();
            $('.personal').show();
        }else{
            $('.personal').hide();
            $('.Com-selBox02').show();
        }
    });
    $('.payment .int-select').change(function() {
        if($(this).val() == '핸드폰'){
            $('.personal>td>div').hide();
            $('.payment').show();
            $('.int-phone').show();
        }else if($(this).val() == '주민번호'){
            $('.personal>td>div').hide();
            $('.payment').show();
            $('.int-rrn').show();
        }else if($(this).val() == '카드번호'){
            $('.personal>td>div').hide();
            $('.payment').show();
            $('.int-cashCard').show();
        }
    }); 
}

// input 숫자만
function onlyNumber() { // 숫자만 입력받는 함수
    if (( event.keyCode >= 48 && event.keyCode <= 57 )
        || ( event.keyCode >= 96 && event.keyCode <= 105 )
        || ( event.keyCode == 8 ) //백 스페이스
        || ( event.keyCode == 9 ) //탭키
        || ( event.keyCode == 46 )
        || ( event.keyCode == 13 )
    ) {
        event.returnValue=true;
    } else {
        alert("숫자만 입력해주세요! ");
        event.returnValue=false;
        event.preventDefault();
    }
}




// about 스크롤 이벤트
function scrollHandler(){
    var winbottom = $(window).scrollTop() + $(window).height();
    
    console.log(winbottom)

    $('.upImg').each(function(){
        var aboutImg = $(this);
        var imgHalf = aboutImg.offset().top + aboutImg.outerHeight() / 2;

        console.log('포지션 ' + imgHalf)

        if(imgHalf < winbottom) {
            // play.animate({'opacity':'1'},500);
            aboutImg.addClass('show');            
        }
    });
}


$(window).on('scroll',scrollHandler);
scrollHandler();






// 아이패드 리사이즈 vh 
let vh = window.innerHeight * 0.01; 
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => { 
    let vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`); 
}); 
window.addEventListener('touchend', () => { 
    let vh = window.innerHeight * 0.01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`); 
});

