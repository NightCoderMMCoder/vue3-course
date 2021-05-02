import { ref } from "vue";

const useValidation = () => {
  const errors = ref({});
  const validation = (user) => {
    let formIsValidate = true;
    for (let [key, value] of Object.entries(user)) {
      if (value === "") {
        errors.value[key] = `Please fill the ${key} field.`;
        formIsValidate = false;
      } else {
        errors.value[key] = ``;
      }
    }
    return formIsValidate;
  };
  return { validation, errors };
};

export default useValidation;
