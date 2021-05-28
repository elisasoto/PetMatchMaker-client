import './styles.scss';

export default function Logo(props) {
  const { name, picture } = props;
  return (
    <div>
      <img src={picture} alt={name} />
    </div>
  );
}
