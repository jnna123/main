function HubAlert(msg) {
    $("#popAlertMsg").html(msg);
    $("#popAlert").show();

    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지     
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}

function HubRedirectAlert(msg, loca = "reload") { //location 안쓰면 reload
    $("#popRedirectAlertMsg").html(msg);
    $("#popRedirectAlert").show();

    $('.mo-dim-redirect').off("click");
    $('.mo-dim-redirect').on('click', function () {
        if (loca == "reload") {
            location.reload();
        } else {
            location.href = loca;
        }
    });

    $("#confi").off("click");
    $("#confi").on('click', function () {
        if (loca == "reload") {
            location.reload();
        } else {
            location.href = loca;
        }
    });

    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지     
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}

function HubConfirmAlert(msg, func) {
    $("#popConfirmAlertMsg").html(msg);
    $("#popConfirmAlert").show();

    $("#confirm-ok").off("click");
    $("#confirm-ok").on('click', func);

    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지     
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}

function RefundConfirmAlert(msg, func) {
    $("#popPayConfirmAlertMsg").html(msg);
    $("#popPayConfirmAlert").show();

    $("#Payconfirm-ok").off("click");
    $("#Payconfirm-ok").on('click', func);

    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지     
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
}

// input 숫자만
function HubAlertOnlyNumber(obj) { // 숫자만 입력받는 함수
    if ((event.keyCode >= 48 && event.keyCode <= 57)
        || (event.keyCode >= 96 && event.keyCode <= 105)
        || (event.keyCode == 8) //백 스페이스
        || (event.keyCode == 9) //탭키
        || (event.keyCode == 46)
        || (event.keyCode == 13)
    ) {
        event.returnValue = true;
    } else {
        HubAlert("숫자만 입력해 주시기 바랍니다.");
        obj.value.replaceAll("[^0-9]", "");
        event.returnValue = false;
        event.preventDefault();
    }
}

$(document).ready(function () {

    $("#Mobile").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });

    $("#ProductCntView").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });

    $("#Birthday").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });
    
});