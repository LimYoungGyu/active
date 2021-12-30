$(document).ready(function(){
    // 센터현황 (tab menu)
    // 첫 번째 배경 이미지만 보임
    $('.zone_list div').hide();
    $('.zone_list .zone1').show();
    $('.zone_btn ul li').mouseover(function(){
        // 마우스 오버된 li의 인덱스 번호를 idx변수에 저장
        var idx=$(this).index();
        // 인덱스 번호에 해당하지 않는 li는 active 제거
        $('.zone_btn ul li').removeClass('active');
        // 마우스 오버된 li만 active 설정
        $(this).addClass('active');
        // 인덱스 번호에 해당하지 않는 배경 이미지는 안 보임
        $('.zone_list div').stop().fadeOut();
        // 인덱스 번호에 해당하는 배경 이미지만 보임
        $('.zone_list div').eq(idx).stop().fadeIn();
        return false;
    });
    // .zone_btn의 버튼 클릭하면 맨 위로 올라가는 것을 방지함
    $('.zone_btn ul li a').click(function(e){
        e.preventDefault();
    });


    // sitemap(사이트맵)
    // 메뉴 버튼을 클릭하면 사이트맵 나옴
    $('.menu').click(function(){
        $('.sitemap').show();
    });
    // 닫기 버튼을 클릭하면 사이트맵 사라집
    $('.close').click(function(){
        $('.sitemap').hide();
    });
    // s3영역 슬라이더 (slick-slider)
    $('.slider').slick({
        arrows:false, // 좌, 우 화살표 숨김
        slidesToShow:3, // 한 번애 3개씩 보임
        slidesToscroll:1, // 1개씩 이동시킴
        responsive:[{ // 반응함
            breakpoint:481, // 중단점 설정:480
            settings:
                {
                    slidesToShow:1, //한 번에 1개씩 보임
                    slidesToscroll:1, // 1개씩 아동시킴
                    infinite:true // 무한 반복
                }
        }]
    });
    // 모바일 버전 sitemap(사이트맵 아코디언 메뉴)
    // resize() : 브라우저의 크기가 변하는 것을 감지하는 이벤트
    $(window).on('load resize', function(){
        // 접속한 장치의 가로길이를 인식해서 device변수에 지정
        var device=$(window).width();
        // 만약 접속한 장치의 가로길이가 480이하라면 아코디언 메뉴 실행
        if(device <= 480) {
            $('.sitemap .site_menu > ul > li').click(function(){
                // 만약 클릭한 메뉴에 active가 없다면
                if($(this).attr('class')!='active'){
                    // 모든 서브메뉴는 들어감
                    $('.site_menu .sub').stop().slideUp();
                    // 클릭한 메뉴의 서브메뉴만 나옴
                    $(this).find('.sub').stop().slideDown();
                    // 모든 메뉴에서 active 제거
                    $('.site_menu ul li').removeClass('active');
                    // 클릭한 메뉴에 active클래스 설정
                    $(this).addClass('active');
                // 클릭한 메뉴에 active가 있다면 
                }else{
                    // 클릭한 메뉴의 서브메뉴 들어감
                    $(this).find('.sub').stop().slideUp();
                    // 클릭한 메뉴에서 active 제거
                    $(this).removeClass('active');
                }
            });
        }
    });

});