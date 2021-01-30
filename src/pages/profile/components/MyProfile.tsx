import React, { useRef, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import useForm from "../../../hooks/useForm";
import { updateProfile } from "../Profile.thunk";
const mapStateToProps = (state: AppState) => ({
  loading: state.update.loading,
  success: state.update.success,
  err: state.update.error,
  user: state.login.userInfo,
});

const mapDispatchToProps = {
  updateProfile,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const MyProfile = (props: Props) => {
  const { loading, err, user, updateProfile } = props;
  const [openDay, setOpenDay] = useState("");
  const [openMonth, setOpenMonth] = useState("");
  const [openYear, setOpenYear] = useState("");
  const inputFile : any = useRef(null) ;
  let { birthday } = user;
  if (birthday) {
    birthday = new Date(birthday);
  }
  const [day, setDay] = useState((birthday && birthday.getDate()) || "Day");
  const [month, setMonth] = useState(
    (birthday && birthday.getMonth() + 1) || "Month"
  );
  const [year, setYear] = useState(
    (birthday && birthday.getFullYear()) || "Year"
  );
  let { data, errors, inputChange, Submit } = useForm(
    {
      ...user,
    },
    {
      validate: {
        name: {
          required: true,
        },
      },
      message: {
        name: {
          required: "Họ và tên không được để trống",
        },
      },
    }
  );
  function protectEmail(user_email: string) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, part1.length - avg);
    part2 = splitted[1];
    return part1 + "***@" + part2;
  }
  function toggleOpenDay() {
    let css = openDay === "" ? "show" : "";
    setOpenDay(css);
  }
  function toggleOpenMonth() {
    let css = openMonth === "" ? "show" : "";
    setOpenMonth(css);
  }
  function toggleOpenYear() {
    let css = openYear === "" ? "show" : "";
    setOpenYear(css);
  }
  function updateSubmit(e: any) {
    e.preventDefault();

    if (user.loading) {
      alert("Không được cập nhật quá nhanh");
      return;
    }
    let error: any = Submit();

    if (Object.keys(error).length === 0) {
      let { name, gender } = data;
      let birthday: any = null;
      birthday = new Date(year, month, day).getTime();
      updateProfile({ name, gender, birthday });
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
            <form onSubmit={updateSubmit}>
              {/* <div className="input-with-label">
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
              </div> */}
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
                      <div className="my-account__input-text">
                        {protectEmail(data.email)}
                      </div>
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
                            name="gender"
                            value="male"
                            checked={data.gender === "male"}
                            onChange={inputChange}
                          />
                          <label htmlFor="male" className="radio">
                            Male
                          </label>
                        </div>
                        <div className="field">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={data.gender === "female"}
                            onChange={inputChange}
                          />
                          <label htmlFor="female" className="radio">
                            Female
                          </label>
                        </div>
                        <div className="field">
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            checked={data.gender === "other"}
                            onChange={inputChange}
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
                    <div className="day-wrapper">
                      <div
                        className={`date-dropdown ${
                          openDay === "show" ? "date-dropdown--open" : null
                        }`}
                        onClick={toggleOpenDay}
                      >
                        <div className="date-dropdown__entry date-dropdown__entry--selected">
                          <span>{day}</span>
                          <svg
                            enableBackground="new 0 0 11 11"
                            viewBox="0 0 11 11"
                            x="0"
                            y="0"
                            className="icon-arrow-down"
                          >
                            <g>
                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="date-popover">
                          <ul className="date-dropdown__options">
                            {[...Array(31)].map((e: any, i: number) => (
                              <li
                                key={i}
                                className="date-dropdown__entry date-dropdown__entry--optional"
                                onClick={() => setDay(i + 1)}
                              >
                                {i + 1}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`date-dropdown ${
                          openMonth === "show" && "date-dropdown--open"
                        }`}
                        onClick={toggleOpenMonth}
                      >
                        <div className="date-dropdown__entry date-dropdown__entry--selected">
                          <span>{month}</span>
                          <svg
                            enableBackground="new 0 0 11 11"
                            viewBox="0 0 11 11"
                            x="0"
                            y="0"
                            className="icon-arrow-down"
                          >
                            <g>
                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="date-popover">
                          <ul className="date-dropdown__options">
                            {[...Array(12)].map((e: any, i: number) => (
                              <li
                                key={i}
                                className="date-dropdown__entry date-dropdown__entry--optional"
                                onClick={() => setMonth(i + 1)}
                              >
                                {i + 1}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`date-dropdown ${
                          openYear === "show" ? "date-dropdown--open" : null
                        }`}
                        onClick={toggleOpenYear}
                      >
                        <div className="date-dropdown__entry date-dropdown__entry--selected">
                          <span>{year}</span>
                          <svg
                            enableBackground="new 0 0 11 11"
                            viewBox="0 0 11 11"
                            x="0"
                            y="0"
                            className="icon-arrow-down"
                          >
                            <g>
                              <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="date-popover">
                          <ul className="date-dropdown__options">
                            {[...Array(50)].map((e: any, i: number) => (
                              <li
                                key={i}
                                className="date-dropdown__entry date-dropdown__entry--optional"
                                onClick={() => setYear(2020 - i)}
                              >
                                {2020 - i}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-account-page__submit">
                <button type="submit" className="btn btn-buy">
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>
          <div className="my-account-profile__right">
            <div className="avatar-uploader">
              <div className="avatar-uploader__avatar">
                  <div className="avatar-uploader__avatar-image" style={{backgroundImage: `url("https://cf.shopee.vn/file/0bfc106a04dfe716761500175034ae05_tn")`}}></div>
              </div>
              <input ref={inputFile} className="avatar-uploader__file-input" name="avatar" type="file" accept=".jpg,.jpeg,.png" onChange={(e:any) => console.log(e.target.files[0])}/>
              <button type="button" className="btn btn-light" onClick={() => inputFile.current.click()}>
                <span>choose an image</span>
              </button>
              <div className="avatar-uploader__text-container">
                <div className="avatar-uploader__text">Maximum file size 1 MB</div>
                <div className="avatar-uploader__text">Format: .JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connector(MyProfile);
