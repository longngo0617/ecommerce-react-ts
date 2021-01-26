import React from 'react'

export default function Order() {
    return (
        <div className="account-list-order">
            <h1 className="title">Đơn hàng của tôi</h1>
            <div className="wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày mua</th>
                            <th>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái đơn hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/sales/order/view/568648308">568648308</a></td>
                            <td>01/08/2019</td>
                            <td>Áo mưa cánh dơi 1 đầu vải dù size 1m4 ( vải rằn ri)</td>
                            <td>87.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                            <td><a href="/sales/order/view/327977225">327977225</a></td>
                            <td>01/07/2019</td>
                            <td>Tông Đơ Cắt Tóc Hàn Quốc CODOL 531 TẶNG KÈM Bộ Kéo Cắt Tỉa</td>
                            <td>234.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                            <td><a href="/sales/order/view/506147440">506147440</a></td>
                            <td>02/04/2019</td>
                            <td>Đèn đọc sách di động kẹp bàn tiết kiệm pin MINIGOOD - EM017</td>
                            <td>379.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                            <td><a href="/sales/order/view/530304576">530304576</a></td>
                            <td>26/12/2018</td>
                            <td>Ổ Cứng SSD Apacer AS340 240GB - Hàng Chính Hãng</td>
                            <td>919.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                            <td><a href="/sales/order/view/277944332">277944332</a></td>
                            <td>12/06/2018</td>
                            <td>Lò Nướng PENSONIC PEO-3802G 38L</td>
                            <td>1.267.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                            <td><a href="/sales/order/view/590839868">590839868</a></td>
                            <td>16/03/2018</td>
                            <td>Thẻ Nhớ SDHC Extreme SanDisk 64GB 90MB/s (V30)</td>
                            <td>819.000 ₫</td>
                            <td>Giao hàng thành công</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
