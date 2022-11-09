module.exports = {
    "up": "CREATE TABLE images (image_id INT PRIMARY KEY AUTO_INCREMENT, image_name varchar(500) NOT NULL, image_path varchar(500) DEFAULT NULL, image_describe text DEFAULT NULL, width_img int(11) DEFAULT NULL, width_desc int(11) DEFAULT NULL, show_index int(11) DEFAULT NULL, flg_delete bigint(20) DEFAULT 0, create_date date NOT NULL, create_user varchar(200) NOT NULL, update_date date DEFAULT NULL, update_user varchar(200) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
    "down": "DROP TABLE images"
}