module.exports = {
    "up": "CREATE TABLE users (user_id INT PRIMARY KEY AUTO_INCREMENT, user_name varchar(200) NOT NULL, email varchar(200) DEFAULT NULL, password varchar(200) NOT NULL, create_date datetime DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
    "down": "DROP TABLE users"
}