import PropTypes from 'prop-types';

const newMessage = { message: 'Hola'};

export const FirstApp = ({
  title,
  subTitle
 }) => {
  // const getResult = (a, b) => {
  //   return a + b;
  // }

  console.log(title, subTitle);
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'subtitulo'
}