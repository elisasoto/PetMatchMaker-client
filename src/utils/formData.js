export const getFormData = (fileName, fileField, restFields) => {
  const formData = new FormData();

  const file = fileField[0];
  if (file) {
    formData.append(fileName, file);
  }

  Object.entries(restFields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};

