import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";

export default function MyProfile() {
  let [changePassword, setChangePassword] = useState(false);
  const user = useSelector((state: AppState) => state.login.userInfo);

  let { birthday } = user;

  if (birthday) {
    birthday = new Date(birthday);
  }
  let { data, errors, inputChange, Submit } = useForm(
    {
      ...user,
      oldPassword: "",
      password: "",
      confirmPassword: "",
      birth_day: birthday && birthday.getDate(),
      birth_month: birthday && birthday.getMonth() + 1,
      birth_year: birthday && birthday.getFullYear(),
    },
    {
      validate: {
        name: {
          required: true,
        },
        phone: {
          pattern: "phone",
        },
        password: {
          required: true,
          different: "oldPassword",
        },
        oldPassword: {
          required: true,
        },
        confirmPassword: {
          required: true,
          match: "password",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được để trống",
        },
        phone: {
          pattern: "Không phải là số điện thoại",
        },
        password: {
          required: "Vui lòng điền password",
          different: "Vui lòng điền khác mật khẩu cũ",
        },
        oldPassword: {
          required: "Vui lòng điền passoword cũ",
        },
        confirmPassword: {
          required: "Vui lòng xác nhận mật khẩu",
          match: "Vui lòng điền giống password",
        },
      },
    }
  );

  const dispatch = useDispatch();

  function updateClick(e: any) {
    e.preventDefault();

    if (user.loading) {
      alert("Không được cập nhật quá nhanh");
      return;
    }
    let error: any = Submit();
    if (!changePassword) {
      delete error.password;
      delete error.oldPassword;
      delete error.confirmPassword;
    }

    if (Object.keys(error).length === 0) {
      let {
        name,
        phone,
        password,
        oldPassword,
        gender,
        birth_day,
        birth_month,
        birth_year,
      } = data;

      let birthday: any = null;
      if (birth_day && birth_month && birth_year) {
        console.log(birth_year, birth_month - 1, birth_day);
        birthday = new Date(birth_year, birth_month - 1, birth_day).getTime();
      }

      // dispatch(updateProfile({ name, phone, gender, password, oldPassword, changePassword, birthday }))
    }
  }

  return (
    <div className="my-profile">
      <div className="my-profile-inner">
        <div className="my-account-section">
          <div className="my-account-section__header">
            <div className="my-account-section__header-left">
              <p className="my-account-section__header-title">My Profile</p>
              <p className="my-account-section__header-subtitle">
                Manage profile information for account security
              </p>
            </div>
          </div>
        </div>
        <div className="my-account-profile">
          <div className="my-account-profile__left">
            <form>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>user name</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="my-account__inline-container">
                      <div className="my-account__input-text">{data.name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>name</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="input-with-validator-wrapper">
                      <div className="input-with-validator">
                        <input
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={inputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>email</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="my-account__inline-container">
                      <div className="my-account__input-text">{data.email}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>phone number</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="my-account__inline-container">
                      <div className="my-account__input-text">{data.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>Sex</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="my-account-profile__gender">
                      <div className="stardust-radio-group">
                        <div className="field">
                          <input
                            type="radio"
                            id="male"
                            name="sex"
                            value="male"
                          />
                          <label htmlFor="male" className="radio">
                            Male
                          </label>
                        </div>
                        <div className="field">
                          <input
                            type="radio"
                            id="female"
                            name="sex"
                            value="female"
                          />
                          <label htmlFor="female" className="radio">
                            Female
                          </label>
                        </div>
                        <div className="field">
                          <input
                            type="radio"
                            id="other"
                            name="sex"
                            value="other"
                          />
                          <label htmlFor="other" className="radio">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>date of birth</label>
                  </div>
                  <div className="input-with-label__content">
                    <select name="birth_day" onChange={inputChange}>
                      <option>Day</option>
                      {[...Array(31)].map((e: any, i: number) => (
                        <option
                          key={i}
                          selected={parseInt(data.birth_day) === i + 1}
                          value={i + 1}
                        >
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select name="birth_month" onChange={inputChange}>
                      <option>Month</option>
                      {[...Array(12)].map((e: any, i: number) => (
                        <option
                          key={i}
                          selected={parseInt(data.birth_month) === i + 1}
                          value={i + 1}
                        >
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select name="birth_year" onChange={inputChange}>
                      <option>Year</option>
                      {[...Array(50)].map((e: any, i: number) => (
                        <option
                          key={i}
                          selected={parseInt(data.birth_year) === 2020 - i}
                          value={2020 - i}
                        >
                          {2020 - i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-account-page__submit">
                <button className="btn btn-buy">
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>
          <div className="my-account-profile__right"></div>
        </div>
      </div>
      {/* <div className="wrap">
                <form>
                    <div className="form-control ">
                        <label className="input-label">Họ tên</label>
                        <input type="text" onChange={inputChange} name="name" value={data.name} className="Input-sc-1sflv1m-0 coLFjn" />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className="form-control ">
                        <label className="input-label">Số điện thoại</label>
                        <div>
                            <div className="input-group">
                                <input style={{ width: '250px' }} onChange={inputChange} value={data.phone} type="tel" name="phone" placeholder="Hãy nhập SĐT để trải nghiệm tốt hơn" className="Input-sc-1sflv1m-0 coLFjn" />
                                {errors.phone && <p className="error-text">{errors.phone}</p>}
                            </div>

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="input-label">Email</label>
                        <input type="text" disabled className="Input-sc-1sflv1m-0 coLFjn" value={data.email} />
                    </div>
                    <div className="form-control">
                        <label className="input-label">Giới tính</label>
                        <label className="input-radio">
                            <input type="radio" name="gender" value="male" checked={data.gender === 'male'} onChange={inputChange} />
                            <span className="radio-fake" />
                            <span className="label">Nam</span>
                        </label>
                        <label className="input-radio">
                            <input type="radio" name="gender" value="female" checked={data.gender === 'female'} onChange={inputChange} />
                            <span className="radio-fake" />
                            <span className="label">Nữ</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-label">Ngày sinh<span>(không bắt buộc)</span>
                        </label>
                        <select style={{ margin: '0px 12px 0px 0px' }} name="birth_day" onChange={inputChange}>
                            <option>Ngày</option>
                            {
                                [...Array(31)].map((e: any, i: number) => <option selected={parseInt(data.birth_day) === i + 1} value={i + 1}>{i + 1}</option>)
                            }

                        </select>
                        <select style={{ margin: '0px 12px 0px 0px' }} name="birth_month" onChange={inputChange}>
                            <option>Tháng</option>
                            {
                                [...Array(12)].map((e: any, i: number) => <option selected={parseInt(data.birth_month) === i + 1} value={i + 1}>{i + 1}</option>)
                            }
                        </select>
                        <select style={{ margin: '0px 12px 0px 0px' }} name="birth_year" onChange={inputChange}>
                            <option>Năm</option>
                            {
                                [...Array(50)].map((e: any, i: number) => <option selected={parseInt(data.birth_year) === 2020 - i} value={2020 - i}>{2020 - i}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="input-label">&nbsp;</label>
                        <label className="input-checkbox">
                            <input type="checkbox" checked={changePassword} onChange={(e) => setChangePassword(e.target.checked)} /><span className="checkbox-fake" />
                            <span className="label">Thay đổi mật khẩu</span>
                        </label>
                    </div>
                    {
                        changePassword && <>
                            <div className="form-control ">
                                <label className="input-label">Mật khẩu cũ</label>
                                <div className="input-group">
                                    <input type="password" onChange={inputChange} value={data.oldPassword} name="oldPassword" placeholder="Nhập mật khẩu cũ" className="Input-sc-1sflv1m-0 coLFjn" />
                                    {errors.oldPassword && <p className="error-text">{errors.oldPassword}</p>}
                                </div>

                            </div>
                            <div className="form-control ">
                                <label className="input-label">Mật khẩu mới</label>
                                <div className="input-group">
                                    <input type="password" onChange={inputChange} value={data.password} name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" className="Input-sc-1sflv1m-0 coLFjn" />
                                    {errors.password && <p className="error-text">{errors.password}</p>}
                                </div>

                            </div>
                            <div className="form-control ">
                                <label className="input-label">Nhập lại</label>
                                <div className="input-group">
                                    <input type="password" onChange={inputChange} value={data.confirmPassword} name="confirmPassword" placeholder="Nhập lại mật khẩu mới" className="Input-sc-1sflv1m-0 coLFjn" />
                                    {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                                </div>

                            </div>
                        </>
                    }
                    <div className="form-control">
                        <label className="input-label">&nbsp;</label>
                        <button type="submit" className="btn yellow btn-submit" onClick={updateClick}> Cập nhật {user.loading && <CircularProgress size={20} style={{ marginLeft: 10 }} />}</button>
                    </div>
                </form>
            </div> */}
    </div>
  );
}
