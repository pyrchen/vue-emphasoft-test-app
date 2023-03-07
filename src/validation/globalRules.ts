import { defineRule } from 'vee-validate';

defineRule('required', (value: string) => {
  if (!value || !value.trim().length) {
    return 'This field is required';
  }
  return true;
});

defineRule('minMaxLength', (value: string, [min, max]: [string, string]) => {
  if (!value || !value.length) {
    return false;
  }
  if (value.length < +min) {
    return `Length should be greater than ${+min - 1}`;
  }
  if (value.length > +max) {
    return `Length should be smaller than ${+max + 1}`;
  }
  return true;
});

defineRule('eng', (value: string) => {
  if (!value || !value.length) return false;
  const regExp = /^[A-Za-z][A-Za-z0-9]*$/gi;
  if (!regExp.test(value)) {
    return 'Only english letters allowed';
  }
  return true;
});

defineRule('noExtraSymbols', (value: string) => {
  if (!value || !value.length) return false;
  const regExp = /^[a-zA-Z\-_@0-9]+$/gi;
  if (!regExp.test(value)) {
    return 'Only english letters, numbers and "_", "-", "@" allowed';
  }
  return true;
});
