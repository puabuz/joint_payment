export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Ты должен {friend.name} {Math.abs(friend.balance)} $.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} должен тебе {Math.abs(friend.balance)} $.
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          Ты c {friend.name} в расчете.
        </p>
      )}

        <button className="button">Выбрать</button>

    </li>
  );
}