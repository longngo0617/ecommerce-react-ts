import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

export default function Aside() {
  let { url } = useRouteMatch();
  const user = useSelector((state: AppState) => state.login.userInfo);
  const dispatch = useDispatch();

  return (
    <div className="userpage-sidebar">
      <div className="user-page-brief">
        <Link to={`${url}`} className="user-page-brief__avatar">
          <div className="fresh-avatar">
            <div className="fresh-avatar__placeholder">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-headshot"
              >
                <path
                  d="M3 21.9999L3.79 19.1199C6.4 9.61987 17.6 9.61987 20.21 19.1199L21 21.9999"
                  stroke="#151515"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.98C14.7614 11.98 17 9.74141 17 6.97998C17 4.21856 14.7614 1.97998 12 1.97998C9.23858 1.97998 7 4.21856 7 6.97998C7 9.74141 9.23858 11.98 12 11.98Z"
                  stroke="#151515"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </div>
            {/* {
                user.avatar ? 
            }
            <img src="" alt="" className="fresh-avatar__img" /> */}
          </div>
        </Link>
        <div className="user-page-brief__right">
          <div className="user-page-brief__username">{user.name}</div>
          <div>
            <Link to={`${url}`} className="user-page-brief__edit">
              <img
                src="/assets/icon-edit.svg"
                alt=""
                style={{ width: 12, marginRight: 4 }}
              />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="userpage-sidebar-menu">
        <div className="stardust-dropdown">
          <div className="stardust-dropdown__item-header">
            <Link className="userpage-sidebar-menu-entry" to={`${url}`}>
              <div className="userpage-sidebar-menu-entry__icon"></div>
              <div className="userpage-sidebar-menu-entry__text">
                My account
              </div>
            </Link>
          </div>
          <div className="stardust-dropdown__item-body stardust-dropdown__item-body--open">
            <div className="userpage-sidebar-menu__subsection">
              <NavLink
                className="link"
                activeClassName="active"
                to="/user/account/profile"
              >
                <span className="_2ilxaJ">Hồ sơ</span>
              </NavLink>
              <NavLink className="link" to="/user/account/payment">
                <span className="_2ilxaJ">Ngân hàng</span>
              </NavLink>
              <NavLink className="link" to="/user/account/address">
                <span className="_2ilxaJ">Địa chỉ</span>
              </NavLink>
              <NavLink className="link" to="/user/account/password">
                <span className="_2ilxaJ">Thêm mật khẩu</span>
              </NavLink>
            </div>
          </div>
        </div>
        <Link className="userpage-sidebar-menu-entry" to="/">
          <div className="userpage-sidebar-menu-entry__text">Purchase Menu</div>
        </Link>
        <Link className="userpage-sidebar-menu-entry" to="/">
          <div className="userpage-sidebar-menu-entry__text">Notification</div>
        </Link>
        <Link className="userpage-sidebar-menu-entry" to="/">
          <div className="userpage-sidebar-menu-entry__text">Voucher Wallet</div>
        </Link>
        <Link className="userpage-sidebar-menu-entry" to="/">
          <div className="userpage-sidebar-menu-entry__text">Freshness Coin</div>
        </Link>
      </div>
    </div>
  );
}
