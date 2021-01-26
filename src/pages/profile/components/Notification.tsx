import React from 'react'

export default function Notification() {
    return (
        <div className="notification">
            <h1 className="title">Thông báo của tôi <span className="num-noti-content"> </span></h1>
            <ul className="nav" role="tablist">
                <li role="presentation" className="home  active">
                    <a data-tab href="https://tiki.vn/customer/notification?_lc=Vk4wMzkwMTEwMDg%3D" aria-controls="tab-home" role="tab" data-toggle="tab"><img src="https://tiki.vn/desktop/img/icon/icon-bar-home.png" /></a>
                </li>
                <li role="presentation" className="promotion ">
                    <a data-tab href="https://tiki.vn/customer/notification?p=1&tab=promotion&_lc=Vk4wMzkwMTEwMDg%3D" aria-controls="tab-promotion" title="Khuyến mãi" role="tab" data-toggle="tab"><img src="https://tiki.vn/desktop/img/icon/icon-bar-discount.png" /></a>
                </li>
                <li role="presentation" className="order ">
                    <a data-tab href="https://tiki.vn/customer/notification?p=1&tab=order&_lc=Vk4wMzkwMTEwMDg%3D" aria-controls="tab-order" title="Đơn hàng" role="tab" data-toggle="tab"><img src="https://tiki.vn/desktop/img/icon/icon-bar-order.png" /></a>
                </li>
                <li role="presentation" className="system ">
                    <a data-tab href="https://tiki.vn/customer/notification?p=1&tab=system&_lc=Vk4wMzkwMTEwMDg%3D" aria-controls="tab-system" title="Cập nhật" role="tab" data-toggle="tab"><img src="https://tiki.vn/desktop/img/icon/icon-bar-system.png" /></a>
                </li>
            </ul>
            <div className="controls">
                <a href="https://tiki.vn/customer/notification?_lc=Vk4wMzkwMTEwMDg%3D" className="btn-control"><img src="https://tiki.vn/desktop/img/icon/icon-more.png" /></a>
                <ul className="content">
                    <li>
                        <a data-tab className="btn-read-all-noti" href="https://tiki.vn/customer/notification?_lc=Vk4wMzkwMTEwMDg%3D">Đánh dấu đọc tất cả</a>
                    </li>
                    <li>
                        <a data-tab className="btn-delete-all-noti" href="https://tiki.vn/customer/notification?_lc=Vk4wMzkwMTEwMDg%3D">Xóa tất cả thông báo</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="tab-home">
                    <div className="account-notify">
                        <div className="item ">
                            <div className="account-notify-date">
                                14/09/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-system.png" />
                                <p>
                                    Kể từ 15/09/2018, Bộ TT&amp;TT sẽ đổi mã mạng của thuê bao di động từ 11 số thành 10 số. Để đảm bảo thông tin liên lạc được thông suốt, Tiki xin phép cập nhật mã mạng của số ĐTDĐ mà quý khách đã đăng ký với Tiki theo đầu số mới. Trường hợp cần trao đổi thêm, vui lòng liên lạc với chúng tôi theo hotline 19006035. Trân trọng cảm ơn quý khách. <a target="_blank" href="https://tiki.vn/customer/notification?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678072} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                11/09/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Nhập mã TIKIANKER giảm thêm 20% cho phụ kiện Anker. Thời gian áp dụng từ 06 - 13/9 <a target="_blank" href="https://tiki.vn/thuong-hieu/anker.html?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678071} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                11/09/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    LOCK&amp;LOCK MEGASALE - giảm đến 50% ++. Nhập mã SIEUHOTT8 giảm thêm 50k cho đơn hàng trên 500k. XEM NGAY! <a target="_blank" href="https://tiki.vn/lp/bao-sale-giam-gia?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678070} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                15/08/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Nhập mã SIEUHOTT8 - Giảm 50K cho ĐH từ 500K cho SP thuộc ngành Điện Gia Dụng, Nhà Cửa Đời Sống, Thể Thao Dã Ngoại, Xe Máy (Tiki Trading). <a target="_blank" href="https://tiki.vn/lp/bao-sale-giam-gia?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678069} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                26/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Nhập Mã THUKYKIM Giảm Thêm 5% Cho Đơn Hàng Thú Bông Thư Ký Kim Sao Thế ? (Số Lượng Có Hạn). <a target="_blank" href="https://tiki.vn/thu-ky-kim-sao-the/c16928?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678068} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                19/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Cơ hội rinh ngay Iphone X, Macbook Air, Samsung Galaxy A8, Ipad 2018 khi mua sách học ngoại ngữ Mcbooks <a target="_blank" href="https://tiki.vn/lp/mung-sinh-nhat-mcbooks?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678067} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                18/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Thương hiệu chống nắng số 1 Nhật Bản giảm shock 20% TOÀN BỘ SP. Nhập mã ANESSA05 giảm thêm 5% cho ĐH từ 399k <a target="_blank" href="https://tiki.vn/lp/ngay-vang-thuong-hieu?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678066} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                13/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Khai trương THE COSMO - thời trang quốc tại Tiki. Nhập mã COSMOTIKI50 giảm ngày 50k cho ĐH The Cosmo từ 249k <a target="_blank" href="https://tiki.vn/lp/thoi-trang-the-cosmo?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={141678065} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                10/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Nhập mã XAIXALANG giảm thêm 50k cho đơn hàng 250k trở lên của TOUR DU LỊCH KHÁCH SẠN, VOUCHER ĂN UỐNG, SPA-LÀM ĐẸP, KHÓA HỌC, SỰ KIỆN GIẢI TRÍ VÀ TOUR DU LỊCH KHÁCH SẠN, NHA KHOA -SỨC KHỎE. Thời gian áp dụng: từ 10/7 đến 31/7 <a target="_blank" href="https://tiki.vn/lp/voucher-khuyen-mai-gia-re?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={113944397} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <div className="item ">
                            <div className="account-notify-date">
                                09/07/2018 </div>
                            <div className="account-notify-content">
                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" />
                                <p>
                                    Mua ĐH Sách Tiếng Việt và Sách Ngoại Văn trên 150k được nhận coupon ROHTO30K mua Son Sáp Bút Chì Miracle Apo Lip Crayon 9k từ 07.07 đến 31.07 <a target="_blank" href="https://tiki.vn/son-sap-but-chi-miracle-apo-lip-crayon-3g-shy-pink-hong-tieu-thu-p634065.html?_lc=Vk4wMzkwMTEwMDg%3D">Chi tiết</a>
                                </p>
                                <button className="account-delete-notify-status-icon" data-id={113944395} data-tab>
                                    Xóa
                          </button>
                            </div>
                        </div>
                        <ul className="paginate mg-t-30">
                            <li>
                                <a className="current" href="#">1</a>
                            </li>
                            <li>
                                <a className="normal" href="#">2</a>
                            </li>
                            <li>
                                <a className="next" href="#">
                                    <i className="fa fa-angle-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
