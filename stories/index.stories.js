export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Goodbye World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Goodbye Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
