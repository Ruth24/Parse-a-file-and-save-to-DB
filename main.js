var fs = require('fs');
var express = require("express");
var app = express();
var mysql = require('mysql');
var csvjson = require('csvjson');


//Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '',
  database: 'Zuri'
});


connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//Read file zuri.csv
var data = fs.readFileSync(('zuri.csv'), { encoding : 'utf8'});

//Parse it
var op = {
  delimiter : ',', 
};
  
var values = [];
values = csvjson.toArray(data, op);
values.shift();

//Display the result 		
console.log(values);		

//Create table zuri
const createtodos = "CREATE TABLE `zuri` (brand varchar(255), c_condition varchar(255), description varchar(1000), expiration_date varchar(20), id varchar(20), image_link varchar(255), isbn varchar(255), link varchar(255), price varchar (25), product_type varchar(255), title varchar(255), upc varchar(255), color varchar(255), c_department varchar(255), material varchar(255), size varchar(255), c_style varchar(255), payment_accepted varchar(255), payment_notes varchar(255), pickup varchar(255), price_type varchar(255), pattern varchar(255), age_group varchar(255), gender varchar(25), item_group_id varchar(25), availability varchar(25), mpn varchar(255), google_product_category varchar(255), c_keywords1 varchar(255), c_keywords2 varchar(255), c_keywords3 varchar(255), c_keywords4 varchar(255), c_keywords5 varchar(255), c_features1 varchar(255), c_features2 varchar(255), c_features3 varchar(255), c_features4 varchar(255), c_features5 varchar(255), c_material varchar(255), c_length varchar(25), c_width varchar(25), c_heigth varchar(25), c_depth varchar(25), c_weigth varchar(25), adwords_grouping varchar(255), adwords_label varchar(255), adwords_redirect varchar(255), c_size varchar(25), manufacturer varchar(255), shipping varchar(255), c_color_n_finish varchar(255), additional_image_link varchar(1000), c_bullett_point_1 varchar(255), c_bullett_point_2 varchar(255), c_bullett_point_3 varchar(255), c_bullett_point_4 varchar(255), c_bullett_point_5 varchar(255), c_products_ads_category varchar(255), c_product_ads_exclude varchar(255), custome_label_0 varchar(255), custom_label_1 varchar(255), custome_label_2 varchar(255), c_product_ads_sku_bid varchar(255), custom_label_3 varchar(255), c_full_price varchar(255), c_swatch_tag varchar(255), c_sale_flag varchar(255), c_availability_flag varchar(255), c_web_category varchar(255), c_composition varchar(255), c_color_family varchar(255), c_room varchar(255), c_sli_color varchar(255), c_tag_image varchar(255), c_models_part_number varchar(255))"; 
  connection.query(createtodos, function(err, results) {
  if (err) {
     console.log(err.message);
   }
    else{console.log("Table Created");}
  });  


//Insert values into zuri
const sql = 'INSERT INTO `zuri` values ?';
connection.query(sql, [values], function (err, result) {
if (err){
	throw err;
}
else{
  console.log("Values inserted");
}

 });   


//Close the connection
connection.end((err) => {
  // The connection is terminated gracefully
});
