const ordersTable = document.getElementById('ordersTable');
const ordersTableBody = document.getElementById('ordersTableBody');

function displayOrders() {
  db.collection('kursova_orders').onSnapshot(snapshot => {
    ordersTableBody.innerHTML = ''; 

    snapshot.forEach(doc => {
      const orderData = doc.data();
      const orderRow = document.createElement('tr');

      orderRow.innerHTML = `
        <td>${orderData.userData.lastname}</td>
        <td>${orderData.userData.name}</td>
        <td>${orderData.userData.phone}</td>
        <td>${orderData.userData.place}</td>
        <td>${orderData.userData.postoffice}</td>
        <td>${formatOrderDetails(orderData.orderDetails)}</td>
        <td>${orderData.totalPrice}</td>
        <td>
          <select id="statusSelect" onchange="updateOrderStatus('${doc.id}', this.value)">
            <option value="pending" ${orderData.status === 'pending' ? 'selected' : ''}>Очікує на розгляд</option>
            <option value="processing" ${orderData.status === 'processing' ? 'selected' : ''}>Обробляється</option>
            <option value="sent" ${orderData.status === 'sent' ? 'selected' : ''}>Відправлено</option>
            <option value="delivered" ${orderData.status === 'delivered' ? 'selected' : ''}>Доставлено</option>
          </select>
        </td>
      `;

      ordersTableBody.appendChild(orderRow);
    });
  });
}

function formatOrderDetails(orderDetails) {
  const details = orderDetails.map(item => `${item.title} (x ${item.counter}) - ${item.writer}`).join('<br>');
  return details;
}

function updateOrderStatus(orderId, newStatus) {
  db.collection('kursova_orders').doc(orderId).update({
    status: newStatus
  })
}
displayOrders();