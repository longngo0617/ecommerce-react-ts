import { ChangeEventHandler, useState } from "react";

const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
const patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;


/**
 * 
 * @param initValue 
 * @param rules 
 * @returns
 * Submit: True if not error, false have error
 */


export default function useForm(initValue: any, rules: {
  validate: any,
  message?: any
}): {
  data: any,
  inputChange: ChangeEventHandler,
  errors: any,
  setErrors: Function,
  Submit: () => Boolean
} {

  for (let i in initValue) {
    if (initValue[i] === null) initValue[i] = "";
  }

  let [form, setForm] = useState(initValue);
  let [errors, setErrors] = useState({});

  function inputChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function Submit(): Boolean | any {
    let { validate, message } = rules;
    let errorObj: any = {};
    for (let i in validate) {
      if (i in form) {

        if (validate[i].required) {
          if (!form[i]) {
            errorObj[i] = message?.[i]?.required || "Trường này là bắt buộc";
            continue;
          }
        }

        if (validate[i].pattern) {
          let pattern = validate[i].pattern;
          if (validate[i].pattern === "email") pattern = patternEmail;
          if (validate[i].pattern === "phone") pattern = patternPhone;
          if (validate[i].pattern === "url") pattern = patternURL;

          if (!pattern.test(form[i])) {
            errorObj[i] = message?.[i]?.pattern || "Không đúng định dạng";
          }
        }

        if (validate[i].match) {
          let mathVal = form[validate[i].match] || undefined
          if (mathVal !== form[i]) {
            errorObj[i] = message?.[i]?.match || "Vui lòng điền giống thông tin cần thiết";
            continue;
          }
        }

        if (validate[i].different) {
          let mathVal = form[validate[i].different] || undefined
          if (mathVal === form[i]) {
            errorObj[i] = message?.[i]?.different || "2 trường này không được giống nhau";
            continue;

          }
        }
      }
    }
    setErrors(errorObj);
    return errorObj;
  }
  return {
    data: form,
    errors,
    inputChange,
    setErrors,
    Submit,
  };
};

