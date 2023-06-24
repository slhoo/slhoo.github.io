let order = {
    name: ``,
    phone: ``,
    tovar: ``,
    cina: ``,
    check: ``
}

const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]
function addOrder(){
   order.name =  document.getElementById(`client_name`).value;
   order.phone =  document.getElementById(`client_phone`).value;
   order.tovar =  document.getElementById(`order_name`).value;
   order.cina =  document.getElementById(`order_price`).value;
   order.check =  document.getElementById(`order_status`).value;
   console.log(order);
}
let orders_table = document.getElementById(`orders_table`);
let data = ``;
for(i=0;i<all_orders.length; i++){
data += `<tr>
<td>1</td>
<td>Дмитро Іванов</td>
<td>+3809781240</td>
<td>Iphone X</td>
<td class="centered">520$</td>
<td class="centered"><input type="checkbox" checked></td>
<td class="centered"><button class="del_btn">Видалити</button></td>
</tr>`;
}

orders_table.innerHTML = data;

