Kakao.init('25a6515ca67754804c14e11617b27ab7');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var mapOption = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.4423379727783, 126.571449734542), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var mapTypeControl = new kakao.maps.MapTypeControl();

var markerPosition  = new kakao.maps.LatLng(33.4423379727783, 126.571449734542); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);