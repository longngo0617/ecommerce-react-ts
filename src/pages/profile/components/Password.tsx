import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { updateProfile } from "../Profile.thunk";

const Password = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: AppState) => state.login);

    let { data, errors, inputChange, Submit } = useForm({
        ...user.userInfo,
        oldPassword: '',
        password: '',
        confirmPassword: '',
    }, {
        validate: {
            password: {
                required: true,
                different: 'oldPassword'
            },
            oldPassword: {
                required: true,
            },
            confirmPassword: {
                required: true,
                match: 'password',

            },
        },
        message: {
            password: {
                required: 'Vui lòng điền password',
                different: 'Vui lòng điền khác mật khẩu cũ'

            },
            oldPassword: {
                required: 'Vui lòng điền passoword cũ',
            },
            confirmPassword: {
                required: 'Vui lòng xác nhận mật khẩu',
                match: 'Vui lòng điền giống password'
            }
        }
    })
    function updatePassWord(e: any) {
        e.preventDefault();

        if (user.loading) {
            alert('Không được cập nhật quá nhanh')
            return
        }

        let error: any = Submit();
        if (Object.keys(error).length === 0) {
            let {password, oldPassword } = data;
            dispatch(updateProfile({ password, oldPassword }))
        }
    }
  return (
    <div className="my-profile">
      <div className="my-profile-inner">
        <div className="my-account-section">
          <div className="my-account-section__header">
            <div className="my-account-section__header-left">
              <p className="my-account-section__header-title">Add A Password</p>
              <p className="my-account-section__header-subtitle">
                For your account security, please do not share your password with others
              </p>
            </div>
          </div>
        </div>
        <div className="my-account-profile">
          <div className="my-account-profile__left">
            <form onSubmit={updatePassWord}>
            <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>old password</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="input-with-validator-wrapper">
                      <div className="input-with-validator">
                        <input type="password"  name="oldPassword" value={data.oldPassword} onChange={inputChange}/>
                        {errors.oldPassword && <p className="error-text">{errors.oldPassword}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>a new password</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="input-with-validator-wrapper">
                      <div className="input-with-validator">
                        <input type="password" name="password" value={data.password} onChange={inputChange}/>
                        {errors.password && <p className="error-text">{errors.password}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-with-label">
                <div className="input-with-label__wrapper">
                  <div className="input-with-label__label">
                    <label>confirm password</label>
                  </div>
                  <div className="input-with-label__content">
                    <div className="input-with-validator-wrapper">
                      <div className="input-with-validator">
                        <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={inputChange} />
                        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
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
          <div className="my-account-profile__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Password;
