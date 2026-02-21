let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  formData.email = email;
  formData.message = message;
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
