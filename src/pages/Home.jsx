import NotificationCard from "../components/NotificationCard";

function Home() {

  const notifications = [

    {
      id: 1,
      title: "Assessment Started",
      message: "Frontend test is active",
    },

    {
      id: 2,
      title: "API Connected",
      message: "Authorization successful",
    },

    {
      id: 3,
      title: "Submission",
      message: "Push code to GitHub regularly",
    },

  ];

  return (

    <div
      style={{
        padding: "30px",
        background: "#121212",
        minHeight: "100vh",
      }}
    >

      <h1 style={{ color: "white" }}>
        Notifications
      </h1>

      {

        notifications.map((item) => (

          <NotificationCard
            key={item.id}
            title={item.title}
            message={item.message}
          />

        ))

      }

    </div>

  );

}

export default Home;