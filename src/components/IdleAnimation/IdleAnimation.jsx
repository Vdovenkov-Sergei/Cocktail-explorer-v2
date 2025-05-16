import styles from './IdleAnimation.module.css';

export default function IdleAnimation() {
  return (
    <div className={styles.idleBox}>
      <img
        src="https://st.peopletalk.ru/wp-content/uploads/2016/12/1481629901.gif"
        alt="Shaking Cocktail"
      />
      <p>Shake it up... waiting for your next cocktail...</p>
    </div>
  );
}
