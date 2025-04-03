position: relative;\
line-height: 1.6;\
}\
\
/\* Removed decorative shapes and shuttlecocks for simplicity and
performance \*/\
.decorative-shape, .shuttlecock { display: none; }\
\
.section-title {\
color: var(\--secondary-color);\
margin-bottom: 18px; /\* Adjusted margin \*/\
font-family: \'Calibri Fallback\', sans-serif;\
font-weight: bold;\
font-size: 1.25em; /\* Adjusted size \*/\
text-transform: uppercase;\
position: relative;\
padding-bottom: 8px; /\* Adjusted padding \*/\
display: inline-block;\
}\
\
.section-title::after {\
content: \'\';\
position: absolute;\
bottom: 0;\
left: 0;\
width: 50px; /\* Adjusted width \*/\
height: 3px;\
background-color: var(\--primary-color);\
}\
\
\@media screen and (max-width: 768px) {\
body { padding: 10px; } /\* Reduce padding on mobile \*/\
.content {\
flex-direction: column;\
gap: 25px;\
padding: 25px 20px;\
}\
\
.hotline-grid {\
gap: 15px; /\* Reduce gap \*/\
}\
\
.title {\
font-size: 2.2em; /\* Further adjust size \*/\
}\
\
.subtitle {\
font-size: 1em;\
}\
\
.hotline-title {\
font-size: 1.3em;\
}\
\
.header {\
padding: 40px 15px 30px;\
}\
\
.logo {\
width: 60px;\
height: 60px;\
top: 15px;\
left: 15px;\
}\
.logo i {\
font-size: 30px;\
}\
\
.hotline-card {\
min-width: 150px; /\* Adjust size \*/\
flex-basis: calc(50% - 10px); /\* Two cards per row \*/\
}\
}\
\@media screen and (max-width: 480px) {\
.hotline-card {\
flex-basis: 100%; /\* One card per row \*/\
}\
.title {\
font-size: 1.8em;\
}\
.schedule-grid {\
grid-template-columns: 1fr; /\* Stack schedule items \*/\
}\
}\
\
\</style\>\
\</head\>\
\<body\>\
\<div class=\"flyer-container\"\>\
\<div class=\"header\"\>\
\<div class=\"logo\"\>\
\<i class=\"fas fa-shield-alt\"\>\</i\> \</div\>\
\<div class=\"title-wrapper\"\>\
\<p class=\"subtitle\"\>CLB Cầu Lông Nhơn Phú\</p\>\
\<h1 class=\"title\"\>Tuyển Sinh Lớp Cầu Lông 2025\</h1\>\
\</div\>\
\</div\>\
\
\<div class=\"content\"\>\
\<div class=\"left-column\"\>\
\<div class=\"highlight-box\"\>\
\<h3 class=\"highlight-title\"\>Thông Tin Khóa Học\</h3\>\
\<p class=\"highlight\"\>\
\<i class=\"fas fa-calendar-alt icon\"\>\</i\> \<span\>Hè 2025 - Dành
cho mọi lứa tuổi\</span\>\
\</p\>\
\<p class=\"highlight\"\>\
\<i class=\"fas fa-layer-group icon\"\>\</i\> \<span\>Từ cơ bản đến nâng
cao\</span\>\
\</p\>\
\<p class=\"highlight\"\>\
\<i class=\"fas fa-chalkboard-teacher icon\"\>\</i\> \<span\>HLV chuyên
nghiệp, tận tâm\</span\>\
\</p\>\
\</div\>\
\
\<div class=\"info-item\"\>\
\<i class=\"fas fa-map-marker-alt\" style=\"color:
var(\--primary-color);\"\>\</i\>\
\<div\>\
\<strong\>Địa điểm:\</strong\>\<br\>\
Sân cầu lông Viện Sốt Rét KST-CT Quy Nhơn (Khu vực 8, P. Nhơn Phú)\
\</div\>\
\</div\>\
\
\<div class=\"info-item\"\>\
\<i class=\"fas fa-clock\" style=\"color:
var(\--secondary-color);\"\>\</i\>\
\<div\>\
\<strong\>Lịch học dự kiến (linh hoạt):\</strong\>\
\<div class=\"schedule-grid\"\>\
\<div class=\"schedule-item\"\>\
\<div class=\"schedule-day\"\>Thứ 2-4-6\</div\>\
\<div\>17h30-19h00\</div\>\
\</div\>\
\<div class=\"schedule-item\"\>\
\<div class=\"schedule-day\"\>Thứ 3-5-7\</div\>\
\<div\>18h00-19h30\</div\>\
\</div\>\
\<div class=\"schedule-item\"\>\
\<div class=\"schedule-day\"\>Thứ 7-CN\</div\>\
\<div\>Sáng/Chiều\</div\>\
\</div\>\
\</div\>\
\<small\>(Vui lòng liên hệ để xếp lớp phù hợp)\</small\>\
\</div\>\
\</div\>\
\</div\>\
\
\<div class=\"right-column\"\>\
\<h3 class=\"section-title\"\>Vì Sao Chọn CLB Nhơn Phú?\</h3\>\
\<div class=\"benefits\"\>\
\<div class=\"benefit-item\"\>\
\<div class=\"benefit-icon\"\>\<i class=\"fas
fa-check-circle\"\>\</i\>\</div\>\
\<div\>\<strong\>Phát triển thể chất toàn diện:\</strong\> Tăng cường
sức khỏe, sự nhanh nhẹn và phản xạ.\</div\>\
\</div\>\
\<div class=\"benefit-item\"\>\
\<div class=\"benefit-icon\"\>\<i class=\"fas
fa-check-circle\"\>\</i\>\</div\>\
\<div\>\<strong\>Học phí hợp lý, linh hoạt:\</strong\> Có thể đóng theo
buổi hoặc theo tháng.\</div\>\
\</div\>\
\<div class=\"benefit-item\"\>\
\<div class=\"benefit-icon\"\>\<i class=\"fas
fa-check-circle\"\>\</i\>\</div\>\
\<div\>\<strong\>Lớp học sĩ số ít:\</strong\> Đảm bảo HLV theo sát,
chỉnh sửa kỹ thuật chi tiết.\</div\>\
\</div\>\
\<div class=\"benefit-item\"\>\
\<div class=\"benefit-icon\"\>\<i class=\"fas
fa-check-circle\"\>\</i\>\</div\>\
\<div\>\<strong\>Sân bãi đạt chuẩn:\</strong\> Thảm êm, ánh sáng tốt,
không gian thoáng đãng.\</div\>\
\</div\>\
\<div class=\"benefit-item\"\>\
\<div class=\"benefit-icon\"\>\<i class=\"fas
fa-check-circle\"\>\</i\>\</div\>\
\<div\>\<strong\>Môi trường thân thiện:\</strong\> Giao lưu, kết nối với
cộng đồng đam mê cầu lông.\</div\>\
\</div\>\
\</div\>\
\</div\>\
\</div\>\
\
\<div class=\"hotline-section\"\>\
\<h3 class=\"hotline-title\"\>Đăng Ký Ngay Hôm Nay!\</h3\>\
\<p style=\"margin-bottom: 15px; font-size: 1.1em;\"\>Ưu đãi đặc biệt
cho học viên đăng ký sớm!\</p\>\
\
\<div class=\"hotline-grid\"\>\
\<div class=\"hotline-card\"\>\
\<p\>\<i class=\"fas fa-user-graduate\" style=\"font-size: 28px; color:
var(\--secondary-color); margin-bottom: 12px;\"\>\</i\>\</p\> \<p
class=\"hotline-name\"\>HLV Biền\</p\>\
\<p class=\"hotline-number\"\>\<a href=\"tel:0988809890\" style=\"color:
var(\--primary-color); text-decoration:
none;\"\>0988.809.890\</a\>\</p\>\
\</div\>\
\
\<div class=\"hotline-card\"\>\
\<p\>\<i class=\"fas fa-user-check\" style=\"font-size: 28px; color:
var(\--secondary-color); margin-bottom: 12px;\"\>\</i\>\</p\> \<p
class=\"hotline-name\"\>HLV Hoàng\</p\>\
\<p class=\"hotline-number\"\>\<a href=\"tel:0935185558\" style=\"color:
var(\--primary-color); text-decoration:
none;\"\>0935.185.558\</a\>\</p\>\
\</div\>\
\</div\>\
\</div\>\
\
\<div class=\"footer\"\>\
\<strong\>CLB CẦU LÔNG NHƠN PHÚ\</strong\> \| Sân cầu lông Viện Sốt
Rét-KST-CT Quy Nhơn\<br\>\
Địa chỉ: Khu vực 8, Phường Nhơn Phú, TP. Quy Nhơn, Bình Định\
\</div\>\
\</div\>\
\</body\>\
\</html\>