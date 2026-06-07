import axios from "axios";

const ACCESS_TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWRoZWVzaHJlZGR5NjMzQGdtYWlsLmNvbSIsImV4cCI6MTc4MDgxMzk2NSwiaWF0IjoxNzgwODEzMDY1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDY5ZTkzOTQtYThhZS00NGZkLWI3OGItYmI1ZTM5YWUyYmY4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmlkaGVlc2ggcmVkZHkiLCJzdWIiOiJkMmY2YmM2Yy05NzExLTQzMmUtYmY3Zi1jZGI0MGE0ZWNiMzEifSwiZW1haWwiOiJuaWRoZWVzaHJlZGR5NjMzQGdtYWlsLmNvbSIsIm5hbWUiOiJuaWRoZWVzaCByZWRkeSIsInJvbGxObyI6IjIwMjMwMDM2NjUiLCJhY2Nlc3NDb2RlIjoid2dLdGdaIiwiY2xpZW50SUQiOiJkMmY2YmM2Yy05NzExLTQzMmUtYmY3Zi1jZGI0MGE0ZWNiMzEiLCJjbGllbnRTZWNyZXQiOiJXbmd6ZlJtZUhSZXJzREZDIn0.7kdJoht3UsADSaw4h70E1QkyIlDI6-TAcUJHb1U39m8";

export const getNotifications =
async () => {

  try {

    const response = await axios.get(
      "http://20.244.56.144/evaluation-service/notifications",
      {
        headers: {
          Authorization:
            `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }

};