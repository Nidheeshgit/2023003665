function NotificationCard({ title, message }) {

  return (

    <div
      style={{
        background: "#1e1e1e",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        color: "white",
      }}
    >

      <h2>{title}</h2>

      <p>{message}</p>

    </div>

  );

}

export default NotificationCard;